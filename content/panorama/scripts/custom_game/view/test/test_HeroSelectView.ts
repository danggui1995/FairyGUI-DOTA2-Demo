import { test_HeroSelectView_data } from "./test_data";

export class test_HeroSelectView extends test_HeroSelectView_data{
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
