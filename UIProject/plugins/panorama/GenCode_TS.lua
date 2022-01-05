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
        if (classInfo.res.path:find("/view") or classInfo.res.path:find("/component")) and classInfo.res.exported then
            local targetDir = string.format("%s/../view/%s", handler.exportCodePath, pkgName)
            local targetPath = string.format("%s/%s_%s.ts", targetDir, pkgName, classInfo.resName)
            targetPath = targetPath:gsub("\\", "/")

            if (not CS.System.IO.Directory.Exists(targetDir)) then
                CS.System.IO.Directory.CreateDirectory(targetDir)
            end

            local childrenArr = {}
            local getArr = {}
            local importArr = {}

            local members = classInfo.members
            local references = classInfo.references

            local refCount = references.Count
            if refCount>0 then
                for j=0,refCount-1 do
                    local ref = references[j]
                    table.insert(importArr, string.format('import %s from "./%s";', ref, ref))
                end
            end
            
            local memberCnt = members.Count
            for j=0,memberCnt-1 do
                local memberInfo = members[j]
                table.insert(childrenArr, string.format('\tpublic %s : %s;', memberInfo.name, getType(memberInfo)))
            end

            for j=0,memberCnt-1 do
                local memberInfo = members[j]
                if memberInfo.group==0 then
                    table.insert(getArr, string.format('\t\tthis.%s = <%s><unknown>(this.getChild("%s"));', memberInfo.name, getType(memberInfo), memberInfo.name))
                elseif memberInfo.group==1 then
                    table.insert(getArr, string.format('\t\tthis.%s = this.getController("%s");', memberInfo.name, memberInfo.name))
                else
                    table.insert(getArr, string.format('\t\tthis.%s = this.getTransition("%s");', memberInfo.name, memberInfo.name))
                end
            end
            
            local importStr = table.concat(importArr, "\n")
            local childrenStr = table.concat(childrenArr, "\n")
            local getStr = table.concat(getArr, "\n")

            local saveData1 = stringformat(template, {
                pkgName = pkgName,
                pkgItem = classInfo.resName,
            })
            local saveData2 = stringformat(template_Data, {
                pkgName = pkgName,
                getchildren = getStr,
                pkgItem = classInfo.resName,
                vardeclare = childrenStr,
                import = importStr,
            })

            table.insert(allCls, saveData2)

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