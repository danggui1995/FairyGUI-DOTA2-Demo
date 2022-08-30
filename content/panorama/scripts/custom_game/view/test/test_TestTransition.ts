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

    }

    public OnClose():void
    {

    }

}
