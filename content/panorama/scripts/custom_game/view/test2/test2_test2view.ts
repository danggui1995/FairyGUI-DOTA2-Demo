import { test2_test2view_data } from "./test2_data";

export class test2_test2view extends test2_test2view_data{
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
