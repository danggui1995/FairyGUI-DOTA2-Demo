import { GComponent, GDOTAItemImage, GObject } from "panorama-fgui-types/fgui/FairyGUI";
import { uipublic_itemcell } from "../uipublic/uipublic_itemcell";
import { bag_bagview_data } from "./bag_data";

export class bag_bagview extends bag_bagview_data{

    constructor()
    {
        super();

        //add code to here
    }

    public OnInit():void
    {
        this.isFullScreen = false;

        super.OnInit();
    }

    public OnShow():void
    {
        var itemData : string[] = [];
        for(var i = 0;i<30;i++)
        {
            itemData.push("item_tango");
        }
        this.itemList.setVirtual();
        this.itemList.itemRenderer = (index : number, obj : GObject)=>{
            var item = obj as uipublic_itemcell;
            item.itemname = (index < itemData.length ? itemData[index] : "");
        };
        this.itemList.numItems = 100;

        this.model.element.setModelWithParams("npc_dota_hero_juggernaut");

        this.closeBtn.onEvent('onactivate', this.OnCloseClicked, this);

        (this.item_foot1 as unknown as uipublic_itemcell).itemname = "";
        (this.item_foot2 as unknown as uipublic_itemcell).itemname = "item_tango";
        (this.item_head as unknown as uipublic_itemcell).itemname = "";
        (this.item_jaw as unknown as uipublic_itemcell).itemname = "";
        (this.item_hand1 as unknown as uipublic_itemcell).itemname = "";
        (this.item_hand2 as unknown as uipublic_itemcell).itemname = "";

        this.root.onEvent('onactivate', this.onTouchEmpty, this);
    }

    private onTouchEmpty()
    {
       
    }

    private OnCloseClicked()
    {
        this.CloseSelf();
    }

    public OnClose():void
    {

    }
}
