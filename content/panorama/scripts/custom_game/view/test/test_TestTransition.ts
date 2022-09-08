import { ActionType, GTween, UIConfig } from "panorama-fgui-types/fgui/FairyGUI";
import { test_TestTransition_data } from "./test_data";

export class test_TestTransition extends test_TestTransition_data{
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
        // UIConfig.useNativeTransition = false;
        this.testBtn_GButton.onEvent('onactivate', ()=>{
            GTween.to2(500, 500, 100, 100, 1, ActionType.XY).setTarget(this.testBtn_GButton, this.testBtn_GButton.setPosition);
            GTween.to2(1, 1, 0.5, 0.5, 1, ActionType.Scale).setTarget(this.testBtn_GButton, this.testBtn_GButton.setScale);
            GTween.to(0, 180, 1, ActionType.Rotation).setTarget(this.testBtn_GButton, this.testBtn_GButton.setRotation);

            GTween.to2(100, 100, 200, 200, 1, ActionType.XY).setDelay(1).setTarget(this.testBtn_GButton, this.testBtn_GButton.setPosition);
        });

        this.replayBtn_GButton.onEvent('onactivate', ()=>{
            this.round_t.play();
        });
    }

    public OnClose():void
    {

    }

}
