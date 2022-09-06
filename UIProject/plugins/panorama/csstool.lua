local function genCss()
    local transitionPropertys = {
        "background-color", "transform", "pre-transform-scale2d", "pre-transform-rotate2d", "width", "height", "opacity"
    }

    local transitionDurationMax = 10
    local transitionDelayMax = 10
    local easeType = {
        "ease", "ease-in", "ease-out", "ease-in-out"
    }
    local list = {}
    for k, v in pairs(transitionPropertys) do
        for kk, vv in pairs(easeType) do
            local str = string.format("\ttransition-property: %s;\n\ttransition-timing-function: %s;", v, vv)
            local name = string.format("FGUI_Transition_%s_%s", v, vv)
            table.insert(list, string.format(".%s{\n%s\n}", name, str))
        end
    end
    for i = 0, transitionDurationMax, 0.01 do
        local str = string.format("\ttransition-duration: %.2fs;", i)
        local name = string.format("FGUI_Transition_Duration_%d", math.floor(i * 100))
        table.insert(list, string.format(".%s{\n%s\n}", name, str))
    end
    for i = 0, transitionDelayMax, 0.01 do
        local str = string.format("\ttransition-delay: %.2fs;", i)
        local name = string.format("FGUI_Transition_Delay_%d", math.floor(i * 100))
        table.insert(list, string.format(".%s{\n%s\n}", name, str))
    end
    print(#list)
    local file = io.open("D:/gitfiles/fgui/new/FairyGUI-DOTA2-Demo/content/panorama/styles/custom_game/batch.css", "w")
    file:write(table.concat(list, '\n'))
    file:close()
end

genCss()
print("finished")