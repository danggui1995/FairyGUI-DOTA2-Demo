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
		this.n5_GLoader = <fgui.GLoader><unknown>(this.getChild("n5"));
		this.qualityLoader_GLoader = <fgui.GLoader><unknown>(this.getChild("qualityLoader"));
		this.item_GDOTAItemImage = <fgui.GDOTAItemImage><unknown>(this.getChild("item"));
		this.n6_GLoader = <fgui.GLoader><unknown>(this.getChild("n6"));
    }
}

