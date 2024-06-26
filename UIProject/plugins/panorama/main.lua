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

local keyframePattern = [[
@keyframes '%s' {
%s
}
]]

local keyframePattern2 = [[
    %d%% {
%s
    }
]]

local classPattern = [[
.%s {
    animation-name: %s;
%s}
]]
local tweenPattern = [[
    animation-duration: %.2fs;
    animation-iteration-count: %s;
    animation-timing-function: %s;
    animation-fill-mode: forwards;
]]

local ActionType = {
    XY = 0,
    Size = 1,
    Scale = 2,
    Pivot = 3,
    Alpha = 4,
    Rotation = 5,
    Color = 6,
    Animation = 7,
    Visible = 8,
    Sound = 9,
    Transition = 10,
    Shake = 11,
    ColorFilter = 12,
    Skew = 13,
    Text = 14,
    Icon = 15,
    Unknown = 16
}

local function findDisplayXY(xml, id)
    local iter = xml:GetEnumerator("displayList")
    while iter:MoveNext() do
        local displayList = iter.Current
        local itemIter = displayList:GetEnumerator()
        while itemIter:MoveNext() do
            local item = itemIter.Current
            local xmlid = item:GetAttribute("id")
            if xmlid == id then
                local xy = item:GetAttributeArray("xy")
                return tonumber(xy[0]), tonumber(xy[1])
            end
        end
    end
    return 0, 0
end

local function findDisplaySize(xml, id)
    local iter = xml:GetEnumerator("displayList")
    while iter:MoveNext() do
        local displayList = iter.Current
        local itemIter = displayList:GetEnumerator()
        while itemIter:MoveNext() do
            local item = itemIter.Current
            local xmlid = item:GetAttribute("id")
            if xmlid == id then
                local xy = item:GetAttributeArray("size")
                return tonumber(xy[0]), tonumber(xy[1])
            end
        end
    end
    return 0, 0
end

local function getTranslateStr(arr, lastx, lasty, oldx, oldy)
    local newx, newy
    if arr[1] == '-' then
        newx = lastx or oldx
    else
        newx = tonumber(arr[1])
    end
    if arr[2] == '-' then
        newy = lasty or oldy
    else
        newy = tonumber(arr[2])
    end
    return newx, newy
end

local function errorExportCss(...)
    print(string.format("Warning: this type is not support : %d and will use fgui's Tween system(maybe low framerate)", ...))
end

local function genCss_One(handler, xmlPath, kfList, classList)
    local xmlfile = io.open(xmlPath, "r")
    local xmlstring = xmlfile:read("*a")
    local xml = CS.FairyGUI.Utils.XML(xmlstring)
    local iter = xml:GetEnumerator("transition")
    local fileName = IO.Path.GetFileNameWithoutExtension(xmlPath)
    while iter:MoveNext() do
        local transition = iter.Current
        local autoPlayRepeat = transition:GetAttributeInt("autoPlayRepeat", 1)
        local autoPlay = transition:GetAttribute("autoPlay")
        local frameRate = transition:GetAttributeInt("frameRate", 24)
        local itemIter = transition:GetEnumerator("item")
        local name = transition:GetAttribute("name")
        local frameMap = {}
        local record = {}
        local lastx, lasty
        while itemIter:MoveNext() do
            --这里所有的都在同一个keyframe里面 panorama只支持一个
            local item = itemIter.Current
            local t_type = ActionType[item:GetAttribute("type")]
            local t_target = item:GetAttribute("target")
            if not t_target then
                --组件本身的动效没有target
                t_target = "__root__"
            end

            local t_tween = item:GetAttributeBool("tween")
            local t_startValue_s = item:GetAttribute("startValue")
            local t_delay = item:GetAttributeInt("time", 0)

            if not frameMap[t_target] then
                frameMap[t_target] = {}
            end
            if not frameMap[t_target][t_delay] then
                frameMap[t_target][t_delay] = {}
            end

            if t_startValue_s then
                --需要插值
                local t_startValue = split(t_startValue_s, ",")
                local t_endValue = split(item:GetAttribute("endValue"), ",")
                local t_duration = item:GetAttributeInt("duration", 0)
                local frame2Time = t_delay + t_duration
                if not frameMap[t_target][frame2Time] then
                    frameMap[t_target][frame2Time] = {}
                end
                if t_type == ActionType.XY then
                    local oldx, oldy = findDisplayXY(xml, t_target)
                    local newx, newy = getTranslateStr(t_startValue, lastx, lasty, oldx, oldy)
                    lastx = newx
                    lasty = newy
                    local s = string.format("translate3d(%dpx, %dpx, 0px)", math.floor(newx - oldx), math.floor(newy - oldy))
                    frameMap[t_target][t_delay][t_type] = {"transform", s, 4}
                    
                    local s2 = ""
                    local newx, newy = getTranslateStr(t_endValue, lastx, lasty, oldx, oldy)
                    lastx = newx
                    lasty = newy
                    local s = string.format("translate3d(%dpx, %dpx, 0px)", math.floor(newx - oldx), math.floor(newy - oldy))
                    frameMap[t_target][frame2Time][t_type] = {"transform", s, 4}
                elseif t_type == ActionType.Alpha then
                    frameMap[t_target][t_delay][t_type] = {"opacity", string.format("%s", t_startValue[1])}
                    frameMap[t_target][frame2Time][t_type] = {"opacity", string.format("%s", t_endValue[1])}
                elseif t_type == ActionType.Color then
                    frameMap[t_target][t_delay][t_type] = {"background-color", string.format("%s", t_startValue[1])}
                    frameMap[t_target][frame2Time][t_type] = {"background-color", string.format("%s", t_endValue[1])}
                elseif t_type == ActionType.Rotation then
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("rotateZ(%sdeg)", t_startValue[1]), 1}
                    frameMap[t_target][frame2Time][t_type] = {"transform", string.format("rotateZ(%sdeg)", t_endValue[1]), 1}
                elseif t_type == ActionType.Scale then
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("scale3d(%s, %s, 1)", t_startValue[1], t_startValue[2]), 3}
                    frameMap[t_target][frame2Time][t_type] = {"transform", string.format("scale3d(%s, %s, 1)", t_endValue[1], t_endValue[2]), 3}
                elseif t_type == ActionType.Skew then
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("skew(%sdeg, %sdeg)", t_startValue[1], t_startValue[2]), 2}
                    frameMap[t_target][frame2Time][t_type] = {"transform", string.format("skew(%sdeg, %sdeg)", t_endValue[1], t_endValue[2]), 2}
                elseif t_type == ActionType.Size then
                    local sx, sy = findDisplaySize(xml, t_target)
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("scale3d(%.2f, %.2f, 1)", t_startValue[1] / sx, t_startValue[2] / sy)}
                    frameMap[t_target][frame2Time][t_type] = {"transform", string.format("scale3d(%.2f, %.2f, 1)", t_endValue[1] / sx, t_endValue[2] / sy)}
                else
                    errorExportCss(t_type)
                end
            else
                local t_startValue = split(item:GetAttribute("value"), ",")
                if t_type == ActionType.XY then
                    local oldx, oldy = findDisplayXY(xml, t_target)
                    local newx, newy = getTranslateStr(t_startValue, lastx, lasty, oldx, oldy)
                    lastx = newx
                    lasty = newy
                    local s = string.format("translate3d(%dpx, %dpx, 0px)", newx - oldx, newy - oldy)
                    frameMap[t_target][t_delay][t_type] = {"transform", s, 4}
                elseif t_type == ActionType.Alpha then
                    frameMap[t_target][t_delay][t_type] = {"opacity", string.format("%s", t_startValue[1])}
                elseif t_type == ActionType.Color then
                    frameMap[t_target][t_delay][t_type] = {"background-color", string.format("%s", t_startValue[1])}
                elseif t_type == ActionType.Rotation then
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("rotateZ(%sdeg)", t_startValue[1]), 1}
                elseif t_type == ActionType.Scale then
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("scale3d(%s, %s, 1)", t_startValue[1], t_startValue[2]), 3}
                elseif t_type == ActionType.Skew then
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("skew(%sdeg, %sdeg)", t_startValue[1], t_startValue[2]), 2}
                elseif t_type == ActionType.Size then
                    local sx, sy = findDisplaySize(xml, t_target)
                    frameMap[t_target][t_delay][t_type] = {"transform", string.format("scale3d(%.2f, %.2f, 1)", t_startValue[1] / sx, t_startValue[2] / sy)}
                else
                    errorExportCss(t_type)
                end
            end
        end

        local maxFrame = 0
        for t_target, vv in pairs(frameMap) do
            for frameTime, v in pairs(vv) do
                if frameTime > maxFrame then
                    maxFrame = frameTime
                end
            end
        end
        --gen keyframe
        for t_target, vv in pairs(frameMap) do
            local frameList = {}
            local allTpMap = {}
            for frameTime, v in pairs(vv) do
                local record = {}
                for t_type, styleList in pairs(v) do
                    if not record[styleList[1]] then
                        record[styleList[1]] = {}
                    end
                    table.insert(record[styleList[1]], {styleList[2], styleList[3] or 0})
                end
                local typelist = {}
                local exlist = {}
                for tp, sarr in pairs(record) do
                    if #sarr > 1 then
                        table.sort(sarr, function(a,b)
                            return a[2] < b[2]
                        end)
                    end
                    local sortedSArr = {}
                    for _, arr in ipairs(sarr) do
                        table.insert(sortedSArr, arr[1])

                        local ctp = string.format("%s|%d", tp, arr[2])
                        if not allTpMap[ctp] then
                            allTpMap[ctp] = {frameTime, arr[1]}
                        else
                            if frameTime > allTpMap[ctp][1] then
                                allTpMap[ctp] = {frameTime, arr[1]}
                            end
                        end

                        table.insert(exlist, {string.format("%s|%d", tp, arr[2]), arr[1]})
                    end
                    table.insert(typelist, string.format("\t\t%s: %s;", tp, table.concat(sortedSArr, ' ')))
                end
                table.sort(typelist, function(a,b)
                    return a < b
                end)
                table.insert(frameList, {frameTime, typelist, exlist})
            end

            table.sort(frameList, function(a,b)
                return a[1] < b[1]
            end)

            if #frameList > 1 then
                --补全最后一帧
                local lastFrame = frameList[#frameList]
                local lastCtp = {}
                
                local exlist = lastFrame[3]
                local toAdd = {}
                for ctp, v in pairs(allTpMap) do
                    local find = false
                    for _, arr2 in pairs(exlist) do
                        local tp2 = arr2[1]
                        local data2 = arr2[2]
                        if ctp == tp2 then
                            find = true
                            break
                        end
                    end

                    if not find then
                        local arr = split(ctp, "|")
                        local tp = arr[1]
                        local subtp = arr[2]

                        if not toAdd[tp] then
                            toAdd[tp] = {v[2]}
                        else
                            table.insert(toAdd[tp], v[2])
                        end
                    end
                end

                for tp, v in pairs(toAdd) do
                    local s = table.concat(v, ' ')

                    local typelist = lastFrame[2]
                    local find = false
                    for k, p in pairs(typelist) do
                        if p:find(tp) then
                            typelist[k] = p:gsub(";", string.format(" %s;", s))
                            find = true
                            break
                        end
                    end
                    if not find then
                        table.insert(typelist, string.format("\t\t%s: %s;", tp, s))
                    end
                end
            end

            local sortedList = {}
            for i, v in ipairs(frameList) do
                local percent = 0
                if maxFrame > 0 then
                    percent = math.floor(v[1] / maxFrame * 100)
                end

                local s = string.format(keyframePattern2, percent, table.concat(v[2], '\n'))
                table.insert(sortedList, s)
                if (i == #frameList and v[1] < maxFrame) or (maxFrame < 1) then
                    local s = string.format(keyframePattern2, 100, table.concat(v[2], '\n'))
                    table.insert(sortedList, s)
                elseif i == 1 and v[1] > 0 then
                    local s = string.format(keyframePattern2, 0, table.concat(v[2], '\n'))
                    table.insert(sortedList, s)
                end
            end

            local transition_uniqueName = string.format("%s_%s_%s_k", fileName, name, t_target)
            local kf = string.format(keyframePattern, transition_uniqueName, table.concat(sortedList, '\n'))
            table.insert(kfList, kf)
    
            --gen class
            local repeatCount
            if autoPlayRepeat <= 0 then
                repeatCount = "infinite"
            else
                repeatCount = tostring(autoPlayRepeat)
            end
            local easeType = "ease"
            -- local fease = item:GetAttribute("ease")
            -- if fease then
            --     if fease == "Linear" then
            --         easeType = "linear"
            --     elseif fease == "Custom" then
            --         easeType = "linear"
            --     elseif fease:find("%.InOut") then
            --         easeType = "ease-in-out"
            --     elseif fease:find("%.In") then
            --         easeType = "ease-in"
            --     else
            --         easeType = "ease-out"
            --     end
            -- else
            --     easeType = "ease-out"
            -- end
            local tweenStr = string.format(tweenPattern, maxFrame / frameRate, repeatCount, easeType)
            local class_uniqueName = string.format("%s_%s_%s", fileName, name, t_target)
            local classStr = string.format(classPattern, class_uniqueName, class_uniqueName .. "_k", tweenStr)
            table.insert(classList, classStr)
        end
    end
end

local function genCss(handler)
    local pkgDir = handler.pkg.basePath:gsub("\\", "/")
    
    local packagexmlPath = string.format("%s/package.xml", pkgDir)
    local xmlfile = io.open(packagexmlPath, "r")
    local xmlstring = xmlfile:read("*a")
    local xml = CS.FairyGUI.Utils.XML(xmlstring)
    local resources = (xml:GetNode("resources"))
    local iter = resources:GetEnumerator("component")
    local kfList = {}
    local classList = {}
    while iter:MoveNext() do
        local component = iter.Current
        local imageSrcDir = component:GetAttribute("path")
        local imageSrcName = component:GetAttribute("name")
        local componentPath = pkgDir .. imageSrcDir .. imageSrcName

        local ok,msg = pcall(function ()
            genCss_One(handler, componentPath, kfList, classList)
        end)
        if not ok then
            print(string.format("genCss(%s) process error: %s\n%s", componentPath, msg, debug.traceback()))
        end
    end

    --gen pkg css
    do
        local cssDir = handler.exportPath:gsub("\\", "/"):gsub("/images/", "/styles/")
        local cssPath = cssDir .. "/" .. handler.pkg.name .. ".css"
        if (not IO.Directory.Exists(cssDir)) then
            IO.Directory.CreateDirectory(cssDir)
        end
        local file = io.open(cssPath, "w")
        file:write(table.concat(kfList, '\n') .. table.concat(classList, '\n'))
        file:close()
    end

    --check autogen
    do
        local cssDir = handler.exportPath:gsub("\\", "/"):gsub("/images/", "/styles/")
        local autogenPath = cssDir .. "/../autogen.css"
        local file = io.open(autogenPath, "r")
        local data
        if not file then
            file = io.open(autogenPath, "w")
            file:write("")
            data = ""
        else
            data = file:read("*a")
        end
        file:close()

        local pkgCss = string.format("\n@import url(\"file://{resources}/styles/custom_game/fgui/%s.css\");", handler.pkg.name)
        local findpattern = string.format("styles/custom_game/fgui/%s", handler.pkg.name)
        if not data:find(findpattern) then
            data = data .. pkgCss
        end

        local pkgImages = string.format("\n@import url(\"file://{resources}/styles/custom_game/fgui/%s_images.css\");", handler.pkg.name)
        local findpattern = string.format("styles/custom_game/fgui/%s_images", handler.pkg.name)
        if not data:find(findpattern) then
            data = data .. pkgImages
        end

        local file = io.open(autogenPath, "w")
        file:write(data)
        file:close()
    end
end

---已经支持九宫格了
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

local pkgRegisterPattern = [[
import { BinCache } from "./view/BinCache";

export class PackageRegister
{
    constructor()
    {
    }

    public static Init()
    {
    }
}
]]
local function genPackageRegister(pkgName, str, handler)
    local path = string.format("%s/../src_ui/ts/PackageRegister.ts", handler.project.basePath:gsub("\\", "/"))
    local file = io.open(path, "r")
    local data
    if not file then
        file = io.open(path, "w")
        file:write(pkgRegisterPattern)
        data = pkgRegisterPattern
    else
        data = file:read("*a")
    end
    file:close()

    local findpattern = "BinCache%.PrecachePackageWithArrayBuffer%(\"" .. pkgName .. "\","
    local output = string.format("\tBinCache.PrecachePackageWithArrayBuffer(\"%s\", %s);\n", pkgName, str)
    local pattern = "\tBinCache%.PrecachePackageWithArrayBuffer%(\"" .. pkgName .. "\", (.-)%);\n"

    --删除已经没用的包
    local deletePattern = "BinCache.PrecachePackageWithArrayBuffer%(\"([^\"]+)\"[%s]*,[%s]*new[%s]+Uint8Array%(%[([%d,]*)%]%).buffer%);"
    local projectPath = handler.project.basePath:gsub("\\", "/")
    data = data:gsub(deletePattern, function(pkgName, arraybuffer)
        local pkgPath = string.format("%s/assets/%s", projectPath, pkgName)
        if (not IO.Directory.Exists(pkgPath)) then
            --不存在这个包了 删掉
            return ""
        else
            return string.format("BinCache.PrecachePackageWithArrayBuffer(\"%s\", new Uint8Array([%s]).buffer);", pkgName, arraybuffer)
        end
    end)

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

local function genLayoutFile(handler, allClsData)
    local pkgName = handler.pkg.name
    local exportPath = handler.exportPath:gsub("\\", "/")
    local scriptPath = string.format("%s/../src_ui/ts", handler.project.basePath)
    local path = string.format("%s/%s/package.xml", exportPath, pkgName)

    local compilePath = string.format("%s/../content/panorama/fgui_compile.vpdi", handler.project.basePath)
    IO.File.Delete(compilePath)
    local timer = CS.FairyGUI.Timers()
    timer:Add(0.5, 1, function()
        
        if IO.File.Exists(path) then
            local targetDir = string.format("%s/view/%s", scriptPath, pkgName)
            if (not IO.Directory.Exists(targetDir)) then
                IO.Directory.CreateDirectory(targetDir)
            end
            
            local targetPath = string.format("%s/%s_data.ts", targetDir, pkgName)
            local allClsStr = table.concat(allClsData, '\n')
            IO.File.WriteAllText(targetPath, string.format(template_data, allClsStr))

            local str = genBinaryStr(pkgName, path)
            genPackageRegister(pkgName, str, handler)
        else
            fprint("File Not Found : " .. path)
        end

        -- genScale9Grid(handler)
        genCss(handler)
        
        compileTextures(exportPath, handler, compilePath)
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

local vpdiTemplate = [[
"DynamicImages" 
{
    "Explicit Files"
    {
%s
    }
}
]]

--图片编译
function compileTextures(exportPath, handler, compilePath)
    local arr = {}
    local cssData = {}
    TraverseFolder(exportPath, function (fullPath)
        fullPath = fullPath:gsub("\\", "/")
        fullPath:gsub("/panorama/(.*)", function (str)
            local ext = IO.Path.GetExtension(str):lower()
            if ext == ".png" or ext == ".jpg" or ext == ".tga" then
                table.insert(arr, string.format("\t\t\"%s\"		\"\"", str:gsub("images/", "{images}/")))
            end
        end)
    end)
    
    local f = io.open(compilePath, "w+")
    f:write(string.format(vpdiTemplate, table.concat(arr, '\n')))
    f:close()
end

function onPublish(handler)
    local allClsData = genCode(handler)
    genLayoutFile(handler, allClsData)
    --os.execute被阉割了
    --触发gulp编译
    -- local ret = os.execute("cd panorama & gulp build")
    -- --触发rollup编译
    -- --触发webpack编译
end

function onDestroy()
-------do cleanup here-------
    
end
