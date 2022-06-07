import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
import { BinCache } from "../BinCache";
export class uipublic_itemcell_data extends fgui.GButton{
	public button_c : fgui.Controller;
	public empty_c : fgui.Controller;
	public n5 : fgui.GLoader;
	public qualityLoader : fgui.GLoader;
	public item : fgui.GDOTAItemImage;
	public n6 : fgui.GLoader;

    protected onConstruct():void
    {
        this.panelName = "uipublic_itemcell";
		this.button_c = this.getController("button");
		this.empty_c = this.getController("empty");
		this.n5 = <fgui.GLoader><unknown>(this.getChild("n5"));
		this.qualityLoader = <fgui.GLoader><unknown>(this.getChild("qualityLoader"));
		this.item = <fgui.GDOTAItemImage><unknown>(this.getChild("item"));
		this.n6 = <fgui.GLoader><unknown>(this.getChild("n6"));
    }
}

