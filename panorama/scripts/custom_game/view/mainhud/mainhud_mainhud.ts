import { ViewManager } from "../../ViewManager";
import { bag_bagview } from "../bag/bag_bagview";
import { mainhud_mainhud_data } from "./mainhud_data";

export class mainhud_mainhud extends mainhud_mainhud_data{
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

    private openBag()
    {
        ViewManager.Get().open(bag_bagview);
    }

    public OnShow():void
    {
        this.bagBtn.onEvent('onactivate', this.openBag, this);
    }

    public OnClose():void
    {

    }
}
