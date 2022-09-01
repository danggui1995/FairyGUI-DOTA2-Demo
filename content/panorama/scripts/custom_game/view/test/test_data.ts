import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
export class test_TestList_data extends BaseView{
	public n0_GList : fgui.GList;
	public n1_GTextField : fgui.GTextField;
	public n2_GList : fgui.GList;
	public n3_GTextField : fgui.GTextField;
	public virtualList_GList : fgui.GList;
	public n5_GTextField : fgui.GTextField;
	public n7_GComponent : fgui.GComponent;
	public n8_GTextField : fgui.GTextField;
	public n9_GComponent : fgui.GComponent;
	public n10_GComponent : fgui.GComponent;
	public n11_GTextField : fgui.GTextField;
	public n12_GTextField : fgui.GTextField;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestList";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n0_GList = <fgui.GList><unknown>(this.getChild("n0"));
		this.n1_GTextField = <fgui.GTextField><unknown>(this.getChild("n1"));
		this.n2_GList = <fgui.GList><unknown>(this.getChild("n2"));
		this.n3_GTextField = <fgui.GTextField><unknown>(this.getChild("n3"));
		this.virtualList_GList = <fgui.GList><unknown>(this.getChild("virtualList"));
		this.n5_GTextField = <fgui.GTextField><unknown>(this.getChild("n5"));
		this.n7_GComponent = <fgui.GComponent><unknown>(this.getChild("n7"));
		this.n8_GTextField = <fgui.GTextField><unknown>(this.getChild("n8"));
		this.n9_GComponent = <fgui.GComponent><unknown>(this.getChild("n9"));
		this.n10_GComponent = <fgui.GComponent><unknown>(this.getChild("n10"));
		this.n11_GTextField = <fgui.GTextField><unknown>(this.getChild("n11"));
		this.n12_GTextField = <fgui.GTextField><unknown>(this.getChild("n12"));
    }
}

export class test_TestLabel_data extends BaseView{
	public n0_GTextField : fgui.GTextField;
	public n1_GTextField : fgui.GTextField;
	public n2_GTextField : fgui.GTextField;
	public n3_GTextField : fgui.GTextField;
	public n4_GTextField : fgui.GTextField;
	public n5_GTextField : fgui.GTextField;
	public n6_GTextField : fgui.GTextField;
	public n7_GTextField : fgui.GTextField;
	public n8_GTextField : fgui.GTextField;
	public n9_GTextField : fgui.GTextField;
	public n10_GTextField : fgui.GTextField;
	public n11_GRichTextField : fgui.GRichTextField;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestLabel";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n0_GTextField = <fgui.GTextField><unknown>(this.getChild("n0"));
		this.n1_GTextField = <fgui.GTextField><unknown>(this.getChild("n1"));
		this.n2_GTextField = <fgui.GTextField><unknown>(this.getChild("n2"));
		this.n3_GTextField = <fgui.GTextField><unknown>(this.getChild("n3"));
		this.n4_GTextField = <fgui.GTextField><unknown>(this.getChild("n4"));
		this.n5_GTextField = <fgui.GTextField><unknown>(this.getChild("n5"));
		this.n6_GTextField = <fgui.GTextField><unknown>(this.getChild("n6"));
		this.n7_GTextField = <fgui.GTextField><unknown>(this.getChild("n7"));
		this.n8_GTextField = <fgui.GTextField><unknown>(this.getChild("n8"));
		this.n9_GTextField = <fgui.GTextField><unknown>(this.getChild("n9"));
		this.n10_GTextField = <fgui.GTextField><unknown>(this.getChild("n10"));
		this.n11_GRichTextField = <fgui.GRichTextField><unknown>(this.getChild("n11"));
    }
}

export class test_TestButton_data extends BaseView{
	public radioctrl_c : fgui.Controller;
	public n0_GButton : fgui.GButton;
	public n1_GButton : fgui.GButton;
	public n2_GButton : fgui.GButton;
	public n3_GButton : fgui.GButton;
	public n4_GButton : fgui.GButton;
	public n5_GButton : fgui.GButton;
	public dropBox_GComboBox : fgui.GComboBox;
	public slider_GSlider : fgui.GSlider;
	public color_t : fgui.Transition;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestButton";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.radioctrl_c = this.getController("radioctrl");
		this.n0_GButton = <fgui.GButton><unknown>(this.getChild("n0"));
		this.n1_GButton = <fgui.GButton><unknown>(this.getChild("n1"));
		this.n2_GButton = <fgui.GButton><unknown>(this.getChild("n2"));
		this.n3_GButton = <fgui.GButton><unknown>(this.getChild("n3"));
		this.n4_GButton = <fgui.GButton><unknown>(this.getChild("n4"));
		this.n5_GButton = <fgui.GButton><unknown>(this.getChild("n5"));
		this.dropBox_GComboBox = <fgui.GComboBox><unknown>(this.getChild("dropBox"));
		this.slider_GSlider = <fgui.GSlider><unknown>(this.getChild("slider"));
		this.color_t = this.getTransition("color");
    }
}

export class test_TestTransition_data extends BaseView{
	public n0_GGraph : fgui.GGraph;
	public n1_GGraph : fgui.GGraph;
	public n2_GGraph : fgui.GGraph;
	public n3_GGraph : fgui.GGraph;
	public n4_GGraph : fgui.GGraph;
	public n5_GGraph : fgui.GGraph;
	public n6_GGraph : fgui.GGraph;
	public n9_GGraph : fgui.GGraph;
	public rotate_t : fgui.Transition;
	public move_t : fgui.Transition;
	public scale_t : fgui.Transition;
	public scale_center_t : fgui.Transition;
	public scale_right_t : fgui.Transition;
	public group1_t : fgui.Transition;
	public color_t : fgui.Transition;
	public round_t : fgui.Transition;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestTransition";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n0_GGraph = <fgui.GGraph><unknown>(this.getChild("n0"));
		this.n1_GGraph = <fgui.GGraph><unknown>(this.getChild("n1"));
		this.n2_GGraph = <fgui.GGraph><unknown>(this.getChild("n2"));
		this.n3_GGraph = <fgui.GGraph><unknown>(this.getChild("n3"));
		this.n4_GGraph = <fgui.GGraph><unknown>(this.getChild("n4"));
		this.n5_GGraph = <fgui.GGraph><unknown>(this.getChild("n5"));
		this.n6_GGraph = <fgui.GGraph><unknown>(this.getChild("n6"));
		this.n9_GGraph = <fgui.GGraph><unknown>(this.getChild("n9"));
		this.rotate_t = this.getTransition("rotate");
		this.move_t = this.getTransition("move");
		this.scale_t = this.getTransition("scale");
		this.scale_center_t = this.getTransition("scale_center");
		this.scale_right_t = this.getTransition("scale_right");
		this.group1_t = this.getTransition("group1");
		this.color_t = this.getTransition("color");
		this.round_t = this.getTransition("round");
    }
}

export class test_TestNative_data extends BaseView{
	public abilityImage_GDOTAAbilityImage : fgui.GDOTAAbilityImage;
	public avatarImage_GDOTAAvatarImage : fgui.GDOTAAvatarImage;
	public effect_GDOTAScenePanel : fgui.GDOTAScenePanel;
	public heroImage_GDOTAHeroImage : fgui.GDOTAHeroImage;
	public itemImage_GDOTAItemImage : fgui.GDOTAItemImage;
	public model_GDOTAScenePanel : fgui.GDOTAScenePanel;
	public userName_GDOTAUserName : fgui.GDOTAUserName;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestNative";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.abilityImage_GDOTAAbilityImage = <fgui.GDOTAAbilityImage><unknown>(this.getChild("abilityImage"));
		this.avatarImage_GDOTAAvatarImage = <fgui.GDOTAAvatarImage><unknown>(this.getChild("avatarImage"));
		this.effect_GDOTAScenePanel = <fgui.GDOTAScenePanel><unknown>(this.getChild("effect"));
		this.heroImage_GDOTAHeroImage = <fgui.GDOTAHeroImage><unknown>(this.getChild("heroImage"));
		this.itemImage_GDOTAItemImage = <fgui.GDOTAItemImage><unknown>(this.getChild("itemImage"));
		this.model_GDOTAScenePanel = <fgui.GDOTAScenePanel><unknown>(this.getChild("model"));
		this.userName_GDOTAUserName = <fgui.GDOTAUserName><unknown>(this.getChild("userName"));
    }
}

export class test_TestLoader_data extends BaseView{
	public n3_GTextField : fgui.GTextField;
	public n4_GTextField : fgui.GTextField;
	public dloader_GLoader : fgui.GLoader;
	public floader1_GLoader : fgui.GLoader;
	public n6_GTextField : fgui.GTextField;
	public floader4_GLoader : fgui.GLoader;
	public n15_GTextField : fgui.GTextField;
	public floader5_GLoader : fgui.GLoader;
	public n18_GTextField : fgui.GTextField;
	public floader6_GLoader : fgui.GLoader;
	public n21_GTextField : fgui.GTextField;
	public floader2_GLoader : fgui.GLoader;
	public n9_GTextField : fgui.GTextField;
	public floader3_GLoader : fgui.GLoader;
	public n12_GTextField : fgui.GTextField;
	public n23_GLoader : fgui.GLoader;
	public scale9girdloader_GLoader : fgui.GLoader;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestLoader";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n3_GTextField = <fgui.GTextField><unknown>(this.getChild("n3"));
		this.n4_GTextField = <fgui.GTextField><unknown>(this.getChild("n4"));
		this.dloader_GLoader = <fgui.GLoader><unknown>(this.getChild("dloader"));
		this.floader1_GLoader = <fgui.GLoader><unknown>(this.getChild("floader1"));
		this.n6_GTextField = <fgui.GTextField><unknown>(this.getChild("n6"));
		this.floader4_GLoader = <fgui.GLoader><unknown>(this.getChild("floader4"));
		this.n15_GTextField = <fgui.GTextField><unknown>(this.getChild("n15"));
		this.floader5_GLoader = <fgui.GLoader><unknown>(this.getChild("floader5"));
		this.n18_GTextField = <fgui.GTextField><unknown>(this.getChild("n18"));
		this.floader6_GLoader = <fgui.GLoader><unknown>(this.getChild("floader6"));
		this.n21_GTextField = <fgui.GTextField><unknown>(this.getChild("n21"));
		this.floader2_GLoader = <fgui.GLoader><unknown>(this.getChild("floader2"));
		this.n9_GTextField = <fgui.GTextField><unknown>(this.getChild("n9"));
		this.floader3_GLoader = <fgui.GLoader><unknown>(this.getChild("floader3"));
		this.n12_GTextField = <fgui.GTextField><unknown>(this.getChild("n12"));
		this.n23_GLoader = <fgui.GLoader><unknown>(this.getChild("n23"));
		this.scale9girdloader_GLoader = <fgui.GLoader><unknown>(this.getChild("scale9girdloader"));
    }
}

export class test_TestRelation_data extends BaseView{
	public n0_GGraph : fgui.GGraph;
	public n1_GTextField : fgui.GTextField;
	public n2_GGraph : fgui.GGraph;
	public n3_GTextField : fgui.GTextField;
	public t0_t : fgui.Transition;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestRelation";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n0_GGraph = <fgui.GGraph><unknown>(this.getChild("n0"));
		this.n1_GTextField = <fgui.GTextField><unknown>(this.getChild("n1"));
		this.n2_GGraph = <fgui.GGraph><unknown>(this.getChild("n2"));
		this.n3_GTextField = <fgui.GTextField><unknown>(this.getChild("n3"));
		this.t0_t = this.getTransition("t0");
    }
}

export class test_ComboBox1_data extends fgui.GComboBox{
	public button_c : fgui.Controller;
	public n0_GGraph : fgui.GGraph;
	public n1_GGraph : fgui.GGraph;
	public n2_GGraph : fgui.GGraph;
	public title_GTextField : fgui.GTextField;

    protected onConstruct():void
    {
        this.panelName = "test_ComboBox1";
		this.button_c = this.getController("button");
		this.n0_GGraph = <fgui.GGraph><unknown>(this.getChild("n0"));
		this.n1_GGraph = <fgui.GGraph><unknown>(this.getChild("n1"));
		this.n2_GGraph = <fgui.GGraph><unknown>(this.getChild("n2"));
		this.title_GTextField = <fgui.GTextField><unknown>(this.getChild("title"));
    }
}

export class test_TestHud_data extends BaseView{
	public n1_GGraph : fgui.GGraph;
	public tabList_GList : fgui.GList;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestHud";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.n1_GGraph = <fgui.GGraph><unknown>(this.getChild("n1"));
		this.tabList_GList = <fgui.GList><unknown>(this.getChild("tabList"));
    }
}

