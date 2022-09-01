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
        this.testBtn_GButton.onEvent('onactivate', ()=>{
            this.n9_GGraph.setPosition(900, 900);
        });

        this.replayBtn_GButton.onEvent('onactivate', ()=>{
            this.round_t.play(()=>{
                //这个回调用在循环的动效是无效的  最好是只用在一次性的
                $.Msg("play finish");
            });
        });
    }

    public OnClose():void
    {

    }

}
