import { package1_mainhud_data } from "./package1_data";


export class package1_mainhud extends package1_mainhud_data{
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

