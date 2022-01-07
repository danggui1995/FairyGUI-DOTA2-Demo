local genCode = require(PluginPath..'/GenCode_TS')

local template_data = [[
import * as fgui from "../../../plugin/fgui/FairyGUI";
import { BaseView } from "../BaseView";

export const __%s_Data : string = "%s";

%s
]]

local function genBase64(handler, allClsData)
    local pkgName = handler.pkg.name
    local exportPath = handler.exportPath
    local path = string.format("%s/%s/package.xml", exportPath, pkgName)

    local timer = CS.FairyGUI.Timers()
    timer:Add(0.5, 1, function()
        
        if CS.System.IO.File.Exists(path) then
            local targetDir = string.format("%s/../view/%s", exportPath, pkgName)
            if (not CS.System.IO.Directory.Exists(targetDir)) then
                CS.System.IO.Directory.CreateDirectory(targetDir)
            end
            
            local targetPath = string.format("%s/%s_data.ts", targetDir, pkgName)
            local bytes = CS.System.IO.File.ReadAllBytes(path)
            local str = CS.System.Convert.ToBase64String(bytes)

            local allClsStr = table.concat(allClsData, '\n')
            CS.System.IO.File.WriteAllText(targetPath, string.format(template_data, pkgName, str, allClsStr))
        else
            fprint("File Not Found : " .. path)
        end

        compileTextures(exportPath, pkgName)
    end)
end

local function TraverseFolder(dir, callBack)
    local folder = CS.System.IO.DirectoryInfo(dir);

    local allFiles = CS.System.IO.Directory.GetFiles(dir)
    for i = 0, allFiles.Length - 1 do
        local file = allFiles[i];
        callBack(file:gsub("\\", "/"));
    end

    local allDirs = CS.System.IO.Directory.GetDirectories(dir)
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
  <Panel hittest="true" class="CompileRoot">
%s
  </Panel>
</root>

]]

--图片编译
function compileTextures(exportPath)
    local arr = {}
    TraverseFolder(exportPath, function (fullPath)
        fullPath:gsub("/panorama/(.*)", function (str)
            if str:find(".png") or str:find(".jpg") then
                table.insert(arr, string.format("<Image src=\"file://{resources}/%s\"/>", str))
            end
        end)
    end)

    local str = string.format(xmlTemplate, table.concat(arr, '\n'))
    local layoutPath = exportPath:gsub("\\", "/"):gsub("/scripts/", "/layout/")
    if (not CS.System.IO.Directory.Exists(layoutPath)) then
        CS.System.IO.Directory.CreateDirectory(layoutPath)
    end
    CS.System.IO.File.WriteAllText(layoutPath .. "/compile_helper.xml", str)
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