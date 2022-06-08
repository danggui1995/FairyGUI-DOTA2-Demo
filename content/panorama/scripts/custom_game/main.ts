
import { mainhud_mainhud } from "./view/mainhud/mainhud_mainhud";
import { package1_login } from "./view/package1/package1_login";
import { package1_testui } from "./view/package1/package1_testui";
import { test_HeroSelectView } from "./view/test/test_HeroSelectView";
import { ViewManager } from "./ViewManager";

class ExampleUI {
    // Instance variables
    panel: Panel;

    // ExampleUI constructor
    constructor(panel: Panel) {
        this.panel = panel;
        ViewManager.Get().clearTempNode();
        // ViewManager.Get().open(package1_testui);
        // ViewManager.Get().open(mainhud_mainhud);
        ViewManager.Get().open(test_HeroSelectView);
        // var panel = $.CreatePanel('Panel', $.GetContextPanel(), 'compile_helper');
        // panel.BLoadLayout("file://{resources}/layout/custom_game/fgui/compile_helper.xml",false,false);
    }
}

let ui = new ExampleUI($.GetContextPanel());

