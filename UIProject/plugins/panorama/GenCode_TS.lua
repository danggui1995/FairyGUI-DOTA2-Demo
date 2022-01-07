local template = [[
import { ${pkgName}_${pkgItem}_data } from "./${pkgName}_data";

export class ${pkgName}_${pkgItem} extends ${pkgName}_${pkgItem}_data{
    constructor()
    {
        super();

        //add code to here
    }

    public OnInit():void
    {
        this.isFullScreen = true;

        super.OnInit();
    }

    public OnShow():void
    {

    }

    public OnClose():void
    {

    }
}
]]

local template_Data = [[
export class ${pkgName}_${pkgItem}_data extends BaseView{
${vardeclare}
    constructor()
    {
        super();
        this.package = "${pkgName}";
        this.packageItem = "${pkgItem}";
        this.binData = __${pkgName}_Data;

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
${getchildren}
    }
}
]]

local template_Data_GComponent = [[
export class ${pkgName}_${pkgItem}_data extends ${baseClass}{
${vardeclare}

    protected onConstruct():void
    {
        this.panelName = "${pkgName}_${pkgItem}";
${getchildren}
    }
}
]]

local function stringformat(pattern, map)
    for key, value in pairs(map) do
        pattern = pattern:gsub(string.format("${%s}", key), value)
    end
    return pattern
end

local cMap = {
    ui_slider = "fgui.GSlider",
    ui_button = "fgui.GButton",
    ui_combobox = "fgui.GComboBox",
    ui_label = "fgui.GComponent",
    ui_progressbar = "fgui.GProgressBar",
}

local rMap = {
    DOTAAbilityImage = "GDOTAAbilityImage",
    DOTAAvatarImage = "GDOTAAvatarImage",
    DOTAHeroImage = "GDOTAHeroImage",
    DOTAItemImage = "GDOTAItemImage",
    DOTAUserName = "GDOTAUserName",
    DOTAEffect = "GDOTAScenePanel",
    DOTAModel = "GDOTAScenePanel",
}

local function getType(memberInfo)
    local typeName = memberInfo.type
    local lName = string.lower(typeName)

    for key, value in pairs(cMap) do
        if lName:find(key) then
            return value
        end
    end
    if memberInfo.res then
        if rMap[memberInfo.res.name] then
            return "fgui." .. rMap[memberInfo.res.name]
        end
    end
    if not lName:find("fgui.") then
        return "fgui.GComponent"
    else
        return typeName
    end
end

local function getTypeVarName()

end

local function genCode(handler)
    local allCls = {}
    local allImport = {}
    local settings = handler.project:GetSettings("Publish").codeGeneration
    
    --CollectClasses(stripeMemeber, stripeClass, fguiNamespace)
    local classes = handler:CollectClasses(false, false, "fgui")
    local classCnt = classes.Count
    local pkgName = handler.pkg.name
    for i=0,classCnt-1 do
        local classInfo = classes[i]
        local lowerPath = classInfo.res.path:lower()
        if (lowerPath:find("/view") or lowerPath:find("/component")) and classInfo.res.exported then
            local targetDir = string.format("%s/../view/%s", handler.exportCodePath, pkgName)
            local targetPath = string.format("%s/%s_%s.ts", targetDir, pkgName, classInfo.resName)
            targetPath = targetPath:gsub("\\", "/")

            if (not CS.System.IO.Directory.Exists(targetDir)) then
                CS.System.IO.Directory.CreateDirectory(targetDir)
            end

            local childrenArr = {}
            local getArr = {}

            local members = classInfo.members
            
            local memberCnt = members.Count
            for j=0,memberCnt-1 do
                local memberInfo = members[j]
                local varName = memberInfo.name
                if memberInfo.group==0 then
                    table.insert(getArr, string.format('\t\tthis.%s = <%s><unknown>(this.getChild("%s"));', varName, getType(memberInfo), memberInfo.name))
                elseif memberInfo.group==1 then
                    varName = varName .. "_c"
                    table.insert(getArr, string.format('\t\tthis.%s = this.getController("%s");', varName, memberInfo.name))
                else
                    varName = varName .. "_t"
                    table.insert(getArr, string.format('\t\tthis.%s = this.getTransition("%s");', varName, memberInfo.name))
                end

                table.insert(childrenArr, string.format('\tpublic %s : %s;', varName, getType(memberInfo)))
            end
            
            local childrenStr = table.concat(childrenArr, "\n")
            local getStr = table.concat(getArr, "\n")

            local saveData1 = stringformat(template, {
                pkgName = pkgName,
                pkgItem = classInfo.resName,
            })

            if not lowerPath:find("/view") then
                local saveData2 = stringformat(template_Data_GComponent, {
                    pkgName = pkgName,
                    getchildren = getStr,
                    pkgItem = classInfo.resName,
                    vardeclare = childrenStr,
                    baseClass = classInfo.superClassName,
                })

                table.insert(allCls, saveData2)
            else

                local saveData2 = stringformat(template_Data, {
                    pkgName = pkgName,
                    getchildren = getStr,
                    pkgItem = classInfo.resName,
                    vardeclare = childrenStr,
                })

                table.insert(allCls, saveData2)
            end
            

            local file = io.open(targetPath, "r")
            if not file then
                local wf = io.open(targetPath, "w")
                wf:write(saveData1)
                wf:close()
            else
                file:close()
            end
        end
    end

    return allCls
end

return genCode