local genCode = require(PluginPath..'/GenCode_TS')
local IO = CS.System.IO

local template_data = [[
import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
%s
]]

local print = fprint

local function split( str, sep )
    local sep, fields = sep or ":", {}
    local pattern = string.format("([^%s]+)", sep)
    str:gsub(pattern, function(c) fields[#fields+1] = c end)
    return fields
end

local function genScale9Grid(handler)
    local pkgDir = handler.pkg.basePath:gsub("\\", "/")
    local packagexmlPath = string.format("%s/package.xml", pkgDir)
    local xmlfile = io.open(packagexmlPath, "r")
    local xmlstring = xmlfile:read("*a")
    local xml = CS.FairyGUI.Utils.XML(xmlstring)
    local resources = (xml:GetNode("resources"))
    local iter = resources:GetEnumerator("image")

    while iter:MoveNext() do
        local image = iter.Current
        local scale9grid = (image:GetAttribute("scale9grid"))
        if scale9grid then
            local arr = split(scale9grid, ",")
            local grid_left = tonumber(arr[1])
            local grid_top = tonumber(arr[2])
            local grid_width = tonumber(arr[3])
            local grid_height = tonumber(arr[4])
            

            local imageSrcDir = image:GetAttribute("path")
            local imageSrcName = image:GetAttribute("name")
            local imageExt = split(imageSrcName, ".")[2]:lower()
            local imageDestName = string.format("%s.%s", image:GetAttribute("id"), imageExt)

            local filepath = string.format("%s%s%s", pkgDir, imageSrcDir, imageSrcName)
            local file = io.open(filepath, "rb")
            local bdata = file:read("*a")
            file:close()
    
            local texture = CS.UnityEngine.Texture2D(2, 2)
            CS.UnityEngine.ImageConversion.LoadImage(texture, bdata, false)
            local width = texture.width
            local height = texture.height
            local grid_pixels = {
                tl = {}, tc = {}, tr = {},
                ml = {}, mc = {}, mr = {},
                bl = {}, bc = {}, br = {},
            }

            local grid_bottom = height - grid_height - grid_top
            local grid_right = width - grid_width - grid_left
            local testcolor = {}

            local pos_coord = {
                bl = {0, 0, grid_left, grid_bottom},
                bc = {grid_left, 0, grid_width, grid_bottom},
                br = {grid_left + grid_width, 0, grid_right, grid_bottom},

                ml = {0, grid_bottom, grid_left, grid_height},
                mc = {grid_left, grid_bottom, grid_width, grid_height},
                mr = {grid_left + grid_width, grid_bottom, grid_right, grid_height},

                tl = {0, grid_bottom + grid_height, grid_left, grid_top},
                tc = {grid_left, grid_bottom + grid_height, grid_width, grid_top},
                tr = {grid_left + grid_width, grid_bottom + grid_height, grid_right, grid_top},
            }

            for pos, v in pairs(pos_coord) do
                local colors = texture:GetPixels(v[1], v[2], v[3], v[4], 0)
                grid_pixels[pos] = colors
            end

            local imageDestNameArr = split(imageDestName, ".")
            local pkgExportDir = string.format("%s/%s", handler.exportPath:gsub("\\", "/"), handler.pkg.name)
            
            -- do
            --     local ll = {"bl", "bc", "br", "ml", "mc", "mr", "tl", "tc", "tr"}
            --     for _, p in ipairs(ll) do
            --         for i = 0, grid_pixels[p].Length - 1 do
            --             table.insert(testcolor, grid_pixels[p][i])
            --         end
            --     end
                
            --     local texture = CS.UnityEngine.Texture2D(width, height)

            --     for i, c in ipairs(testcolor) do
            --         local col = (i - 1) % width
            --         local row = math.floor((i - 1) / width)
            --         texture:SetPixel(col, row, c)
            --     end
            --     texture:Apply()

            --     local gridfilename = string.format("%s_regen.%s", imageDestNameArr[1], imageDestNameArr[2])
            --     local savepath = string.format("%s/%s", pkgExportDir, gridfilename)
            --     local file = io.open(savepath, "wb")
            --     local bdata
            --     if imageExt == "png" then
            --         bdata = CS.UnityEngine.ImageConversion.EncodeToPNG(texture)
            --     elseif imageExt == "jpg" then
            --         bdata = CS.UnityEngine.ImageConversion.EncodeToJPG(texture, 1)
            --     elseif imageExt == "tga" then
            --         bdata = CS.UnityEngine.ImageConversion.EncodeToTGA(texture)
            --     end

            --     file:write(bdata)
            --     file:close()
            -- end
            
            for pos, colors in pairs(grid_pixels) do
                local gridfilename = string.format("%s_%s.%s", imageDestNameArr[1], pos, imageDestNameArr[2])
                local savepath = string.format("%s/%s", pkgExportDir, gridfilename)

                local coord = pos_coord[pos]
                local texture = CS.UnityEngine.Texture2D(coord[3], coord[4])
                texture:SetPixels(0, 0, coord[3], coord[4], colors, 0)
                texture:Apply()

                local file = io.open(savepath, "wb")
                local bdata
                if imageExt == "png" then
                    bdata = CS.UnityEngine.ImageConversion.EncodeToPNG(texture)
                elseif imageExt == "jpg" then
                    bdata = CS.UnityEngine.ImageConversion.EncodeToJPG(texture, 1)
                elseif imageExt == "tga" then
                    bdata = CS.UnityEngine.ImageConversion.EncodeToTGA(texture)
                end

                file:write(bdata)
                file:close()
            end
        end
    end
end

local function genPackageRegister(exportPath, pkgName, str)
    local path = string.format("%s/../PackageRegister.ts", exportPath)
    local file = io.open(path, "r")
    local data = file:read("*a")
    local findpattern = "BinCache%.PrecachePackageWithArrayBuffer%(\"" .. pkgName .. "\","
    local output = string.format("\tBinCache.PrecachePackageWithArrayBuffer(\"%s\", %s);\n", pkgName, str)
    local pattern = "\tBinCache%.PrecachePackageWithArrayBuffer%(\"" .. pkgName .. "\", (.-)%);\n"

    --TODO 当包被删除时这里也要删除
    data = data:gsub("Init%(%)%s*{(.-)\t}", function (scope)
        if not scope:find(findpattern) then
            scope = scope .. "\t" .. output
        else
            scope = scope:gsub(pattern, function (scopeLine)
                return output
            end)
        end
        return string.format("Init()\n\t{%s\t}", scope)
    end)

    CS.System.IO.File.WriteAllText(path, data)
end

local function genBinaryStr(pkgName, path)
    local xmlfile = io.open(path, "rb")
    local bytes = xmlfile:read("*a")
    local length = xmlfile:seek("end")
    xmlfile:close()

    local list = {}
    for i = 1, length do
        local byte = string.byte(bytes, i)
        table.insert(list, byte)
    end

    local arrayStr = string.format("new Uint8Array([%s]).buffer", table.concat(list, ","))
    return arrayStr
end

local function genBase64(handler, allClsData)
    local pkgName = handler.pkg.name
    local exportPath = handler.exportPath
    local path = string.format("%s/%s/package.xml", exportPath, pkgName)

    local timer = CS.FairyGUI.Timers()
    timer:Add(0.5, 1, function()
        
        if IO.File.Exists(path) then
            local targetDir = string.format("%s/../view/%s", exportPath, pkgName)
            if (not IO.Directory.Exists(targetDir)) then
                IO.Directory.CreateDirectory(targetDir)
            end
            
            local targetPath = string.format("%s/%s_data.ts", targetDir, pkgName)
            local allClsStr = table.concat(allClsData, '\n')
            IO.File.WriteAllText(targetPath, string.format(template_data, allClsStr))

            local str = genBinaryStr(pkgName, path)

            -- local bytes = IO.File.ReadAllBytes(path)
            -- local str = CS.System.Convert.ToBase64String(bytes)

            genPackageRegister(exportPath, pkgName, str)
        else
            fprint("File Not Found : " .. path)
        end

        genScale9Grid(handler)
        compileTextures(exportPath, pkgName)
    end)
end

local function TraverseFolder(dir, callBack)
    local folder = IO.DirectoryInfo(dir);

    local allFiles = IO.Directory.GetFiles(dir)
    for i = 0, allFiles.Length - 1 do
        local file = allFiles[i];
        callBack(file:gsub("\\", "/"));
    end

    local allDirs = IO.Directory.GetDirectories(dir)
    for i = 0, allDirs.Length - 1 do
        TraverseFolder(allDirs[i], callBack)
    end
end

local xmlTemplate = [[
<root>
    <styles>
    </styles>
    <scripts>
    </scripts>
  <Panel hittest="false" class="CompileRoot" style="width:100%%;height:100%%;">
%s
  </Panel>
</root>

]]

--图片编译
function compileTextures(exportPath)
    local arr = {}
    TraverseFolder(exportPath, function (fullPath)
        fullPath = fullPath:gsub("\\", "/")
        fullPath:gsub("/panorama/(.*)", function (str)
            local ext = IO.Path.GetExtension(str):lower()
            if ext == ".png" or ext == ".jpg" or ext == ".tga" then
                table.insert(arr, string.format("<Image src=\"file://{resources}/%s\"/>", str))
            end
        end)
    end)

    table.insert(arr, string.format("<Label text='有图片在编译，3秒后FairyGUI将关闭此界面,\n也可以自己在compile_helper.xml中删除指定数据' style='font-size:48px;horizontal-align:center;vertical-align:middle;'/>"))

    local str = string.format(xmlTemplate, table.concat(arr, '\n'))
    local layoutPath = exportPath:gsub("\\", "/"):gsub("/scripts/", "/layout/")
    if (not IO.Directory.Exists(layoutPath)) then
        IO.Directory.CreateDirectory(layoutPath)
    end
    IO.File.WriteAllText(layoutPath .. "/compile_helper.xml", str)

    local timer = CS.FairyGUI.Timers()
    --wtf 这个参数真的迷
    timer:Add(10, 1, function()
        local str = string.format(xmlTemplate, "")
        local layoutPath = exportPath:gsub("\\", "/"):gsub("/scripts/", "/layout/")
        if (not IO.Directory.Exists(layoutPath)) then
            IO.Directory.CreateDirectory(layoutPath)
        end
        IO.File.WriteAllText(layoutPath .. "/compile_helper.xml", str)
    end)
end

function onPublish(handler)
    local allClsData = genCode(handler)
    genBase64(handler, allClsData)
    --os.execute被阉割了
    --触发gulp编译
    -- local ret = os.execute("cd panorama & gulp build")
    -- --触发rollup编译
    -- --触发webpack编译
end

function onDestroy()
-------do cleanup here-------
    
end