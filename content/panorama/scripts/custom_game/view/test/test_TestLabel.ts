import { test_TestLabel_data } from "./test_data";

export class test_TestLabel extends test_TestLabel_data{
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
