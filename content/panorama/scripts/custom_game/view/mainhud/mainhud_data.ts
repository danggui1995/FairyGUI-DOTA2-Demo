import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
import { BinCache } from "../BinCache";
export class mainhud_mainhud_data extends BaseView{
	public show_c : fgui.Controller;
	public roleBtn : fgui.GComponent;
	public n1 : fgui.GComponent;
	public bagBtn : fgui.GComponent;
	public n3 : fgui.GComponent;
	public n4 : fgui.GComponent;
	public n5 : fgui.GComponent;
	public n6 : fgui.GGroup;
    constructor()
    {
        super();
        this.package = "mainhud";
        this.packageItem = "mainhud";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.show_c = this.getController("show");
		this.roleBtn = <fgui.GComponent><unknown>(this.getChild("roleBtn"));
		this.n1 = <fgui.GComponent><unknown>(this.getChild("n1"));
		this.bagBtn = <fgui.GComponent><unknown>(this.getChild("bagBtn"));
		this.n3 = <fgui.GComponent><unknown>(this.getChild("n3"));
		this.n4 = <fgui.GComponent><unknown>(this.getChild("n4"));
		this.n5 = <fgui.GComponent><unknown>(this.getChild("n5"));
		this.n6 = <fgui.GGroup><unknown>(this.getChild("n6"));
    }
}

