import { test_TestButton_data } from "./test_data";

export class test_TestButton extends test_TestButton_data{
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
        this.dropBox_GComboBox.onEvent('status_changed', this.onDropdownUpdate, this);
        this.slider_GSlider.onEvent('changed', this.onSliderUpdate, this);

        // this.btnMove2_t.autoReset = true;
        // this.btnMove_t.autoReset = true;
        this.n0_GButton.onEvent('onactivate', ()=>{
            //多个transition组合需要使用backToFirstFrame和stayLastFrame配合使用  不然会导致偏移量异常 
            this.btnMove_t.play(()=>{
                this.btnMove2_t.play(()=>{
                    // this.btnMove2_t.stayLastFrame();
                });
            });
            // this.btnMove_t.backToFirstFrame();
        });
        
        this.n9_GButton.onEvent('onactivate', ()=>{
            this.btnSingle_t.play(()=>{
            });
        });

        this.testDisable_GButton.enabled = false;
    }

    private onDropdownUpdate()
    {
        // $.Msg(this.dropBox_GComboBox.selectedIndex);
    }

    public OnClose():void
    {

    }

    private onSliderUpdate()
    {
        // $.Msg(this.slider_GSlider.value);
    }
}
