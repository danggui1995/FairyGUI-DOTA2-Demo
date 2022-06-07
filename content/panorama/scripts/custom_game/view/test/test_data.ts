import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
import { BinCache } from "../BinCache";
export class test_vipView_data extends BaseView{
	public n1 : fgui.GGraph;
	public titleLabel : fgui.GTextField;
	public testBtn : fgui.GButton;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "vipView";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n1 = <fgui.GGraph><unknown>(this.getChild("n1"));
		this.titleLabel = <fgui.GTextField><unknown>(this.getChild("titleLabel"));
		this.testBtn = <fgui.GButton><unknown>(this.getChild("testBtn"));
    }
}

export class test_HeroSelectView_data extends BaseView{
	public n9 : fgui.GGraph;
	public hero_list : fgui.GList;
	public n5 : fgui.GGraph;
	public title_text : fgui.GTextField;
	public card_list : fgui.GList;
	public select_btn : fgui.GButton;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "HeroSelectView";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n9 = <fgui.GGraph><unknown>(this.getChild("n9"));
		this.hero_list = <fgui.GList><unknown>(this.getChild("hero_list"));
		this.n5 = <fgui.GGraph><unknown>(this.getChild("n5"));
		this.title_text = <fgui.GTextField><unknown>(this.getChild("title_text"));
		this.card_list = <fgui.GList><unknown>(this.getChild("card_list"));
		this.select_btn = <fgui.GButton><unknown>(this.getChild("select_btn"));
    }
}

