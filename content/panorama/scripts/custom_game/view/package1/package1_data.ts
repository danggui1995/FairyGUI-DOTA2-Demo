import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
import { BinCache } from "../BinCache";
export class package1_mainhud_data extends BaseView{
	public n7 : fgui.GComboBox;
	public n8 : fgui.GSlider;
	public n9 : fgui.GList;
    constructor()
    {
        super();
        this.package = "package1";
        this.packageItem = "mainhud";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n7 = <fgui.GComboBox><unknown>(this.getChild("n7"));
		this.n8 = <fgui.GSlider><unknown>(this.getChild("n8"));
		this.n9 = <fgui.GList><unknown>(this.getChild("n9"));
    }
}

export class package1_testui_data extends BaseView{
	public abilityImage : fgui.GDOTAAbilityImage;
	public avatarImage : fgui.GDOTAAvatarImage;
	public heroImage : fgui.GDOTAHeroImage;
	public itemImage : fgui.GDOTAItemImage;
	public userName : fgui.GDOTAUserName;
	public model : fgui.GDOTAScenePanel;
	public toggleButton : fgui.GComponent;
	public dropdown : fgui.GComboBox;
	public input : fgui.GTextInput;
	public richbox : fgui.GRichTextField;
	public n13 : fgui.GTextField;
	public n14 : fgui.GTextField;
	public list : fgui.GList;
	public slider : fgui.GSlider;
	public n17 : fgui.GImage;
	public effect : fgui.GDOTAScenePanel;
	public effect2 : fgui.GDOTAScenePanel;
	public progressBar : fgui.GProgressBar;
    constructor()
    {
        super();
        this.package = "package1";
        this.packageItem = "testui";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.abilityImage = <fgui.GDOTAAbilityImage><unknown>(this.getChild("abilityImage"));
		this.avatarImage = <fgui.GDOTAAvatarImage><unknown>(this.getChild("avatarImage"));
		this.heroImage = <fgui.GDOTAHeroImage><unknown>(this.getChild("heroImage"));
		this.itemImage = <fgui.GDOTAItemImage><unknown>(this.getChild("itemImage"));
		this.userName = <fgui.GDOTAUserName><unknown>(this.getChild("userName"));
		this.model = <fgui.GDOTAScenePanel><unknown>(this.getChild("model"));
		this.toggleButton = <fgui.GComponent><unknown>(this.getChild("toggleButton"));
		this.dropdown = <fgui.GComboBox><unknown>(this.getChild("dropdown"));
		this.input = <fgui.GTextInput><unknown>(this.getChild("input"));
		this.richbox = <fgui.GRichTextField><unknown>(this.getChild("richbox"));
		this.n13 = <fgui.GTextField><unknown>(this.getChild("n13"));
		this.n14 = <fgui.GTextField><unknown>(this.getChild("n14"));
		this.list = <fgui.GList><unknown>(this.getChild("list"));
		this.slider = <fgui.GSlider><unknown>(this.getChild("slider"));
		this.n17 = <fgui.GImage><unknown>(this.getChild("n17"));
		this.effect = <fgui.GDOTAScenePanel><unknown>(this.getChild("effect"));
		this.effect2 = <fgui.GDOTAScenePanel><unknown>(this.getChild("effect2"));
		this.progressBar = <fgui.GProgressBar><unknown>(this.getChild("progressBar"));
    }
}

export class package1_login_data extends BaseView{
	public n6 : fgui.GComboBox;
	public n7 : fgui.GSlider;
	public n8 : fgui.GList;
	public n9 : fgui.GGraph;
	public n11 : fgui.GComponent;
	public t0_t : fgui.Transition;
    constructor()
    {
        super();
        this.package = "package1";
        this.packageItem = "login";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n6 = <fgui.GComboBox><unknown>(this.getChild("n6"));
		this.n7 = <fgui.GSlider><unknown>(this.getChild("n7"));
		this.n8 = <fgui.GList><unknown>(this.getChild("n8"));
		this.n9 = <fgui.GGraph><unknown>(this.getChild("n9"));
		this.n11 = <fgui.GComponent><unknown>(this.getChild("n11"));
		this.t0_t = this.getTransition("t0");
    }
}

export class package1_ComboBox1_data extends BaseView{
	public button_c : fgui.Controller;
	public n0 : fgui.GGraph;
	public n1 : fgui.GGraph;
	public n2 : fgui.GGraph;
	public title : fgui.GTextField;
    constructor()
    {
        super();
        this.package = "package1";
        this.packageItem = "ComboBox1";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.button_c = this.getController("button");
		this.n0 = <fgui.GGraph><unknown>(this.getChild("n0"));
		this.n1 = <fgui.GGraph><unknown>(this.getChild("n1"));
		this.n2 = <fgui.GGraph><unknown>(this.getChild("n2"));
		this.title = <fgui.GTextField><unknown>(this.getChild("title"));
    }
}

export class package1_labeltest_data extends BaseView{
	public n0 : fgui.GTextField;
	public n1 : fgui.GTextField;
	public n2 : fgui.GTextField;
	public n3 : fgui.GTextField;
	public n4 : fgui.GTextField;
	public n5 : fgui.GRichTextField;
    constructor()
    {
        super();
        this.package = "package1";
        this.packageItem = "labeltest";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n0 = <fgui.GTextField><unknown>(this.getChild("n0"));
		this.n1 = <fgui.GTextField><unknown>(this.getChild("n1"));
		this.n2 = <fgui.GTextField><unknown>(this.getChild("n2"));
		this.n3 = <fgui.GTextField><unknown>(this.getChild("n3"));
		this.n4 = <fgui.GTextField><unknown>(this.getChild("n4"));
		this.n5 = <fgui.GRichTextField><unknown>(this.getChild("n5"));
    }
}

