//auto generated by main.lua
import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
export class uipublic_itemcell_data extends fgui.GButton{
	public button_c : fgui.Controller;
	public empty_c : fgui.Controller;
	public n5_GLoader : fgui.GLoader;
	public qualityLoader_GLoader : fgui.GLoader;
	public item_GDOTAItemImage : fgui.GDOTAItemImage;
	public n6_GLoader : fgui.GLoader;

    protected onConstruct():void
    {
        this.panelName = "uipublic_itemcell";
		this.button_c = this.getController("button");
		this.empty_c = this.getController("empty");
		this.n5_GLoader = this.getChild<fgui.GLoader>("n5");
		this.qualityLoader_GLoader = this.getChild<fgui.GLoader>("qualityLoader");
		this.item_GDOTAItemImage = this.getChild<fgui.GDOTAItemImage>("item");
		this.n6_GLoader = this.getChild<fgui.GLoader>("n6");
    }
}
