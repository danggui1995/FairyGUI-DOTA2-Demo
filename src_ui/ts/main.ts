import { test_TestHud } from "./view/test/test_TestHud";
import { ViewManager } from "./ViewManager";

class ExampleUI {
    panel: Panel;

    constructor(panel: Panel) {
        this.panel = panel;
        ViewManager.Get().clearTempNode();
        ViewManager.Get().open(test_TestHud);
    }
}

let ui = new ExampleUI($.GetContextPanel());

