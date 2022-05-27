import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
import { BinCache } from "../BinCache";
export class test2_test2view_data extends BaseView{
	public n1 : fgui.GGraph;
	public testTitle : fgui.GTextField;
	public testBtn : fgui.GButton;
	public n3 : fgui.GGraph;
	public n4 : fgui.GImage;
	public show_t : fgui.Transition;
    constructor()
    {
        super();
        this.package = "test2";
        this.packageItem = "test2view";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n1 = <fgui.GGraph><unknown>(this.getChild("n1"));
		this.testTitle = <fgui.GTextField><unknown>(this.getChild("testTitle"));
		this.testBtn = <fgui.GButton><unknown>(this.getChild("testBtn"));
		this.n3 = <fgui.GGraph><unknown>(this.getChild("n3"));
		this.n4 = <fgui.GImage><unknown>(this.getChild("n4"));
		this.show_t = this.getTransition("show");
    }
}


BinCache.PrecachePackage("test2", "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");
