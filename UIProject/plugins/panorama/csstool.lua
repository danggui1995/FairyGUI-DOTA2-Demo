local function genCss()
    local transitionPropertys = {
        "color",
        "background-color",
        "transform",
        "pre-transform-scale2d",
        "pre-transform-rotate2d",
        "width",
        "height",
        "opacity",
    }

    local transitionDurationMax = 5
    local easeType = {
        "ease", 
        "ease-in", 
        "ease-out", 
        "ease-in-out",
    }
    local list = {}
    for propEnum, propStr in ipairs(transitionPropertys) do
        local name1 = string.format("FGUI_T_%d", propEnum)
        for easeEnum, easeStr in ipairs(easeType) do
            local name2 = string.format("%s_FGUI_T_ease%d", name1, easeEnum)
            for i = 0, transitionDurationMax, 0.1 do
                local name3 = string.format("%s_FGUI_T_d%d", name2, math.floor(i * 10))
                local str = string.format("transition: %s %.2fs %s 0s;", propStr, i, easeStr)
                table.insert(list, string.format(".%s{%s}", name3, str))
            end
        end
    end
    
    local file = io.open("E:/codeup/FairyGUI-DOTA2-Demo/content/panorama/styles/custom_game/batch.css", "w")
    file:write(table.concat(list, '\n'))
    file:close()
end

genCss()
print("finished")