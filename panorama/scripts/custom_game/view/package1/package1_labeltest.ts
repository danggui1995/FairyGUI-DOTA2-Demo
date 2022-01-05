import { package1_labeltest_data } from "./package1_data";

export class package1_labeltest extends package1_labeltest_data{
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
