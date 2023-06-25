import { test_TestAtlas_data } from "./test_data";

export class test_TestAtlas extends test_TestAtlas_data{
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
