import * as fgui from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "../BaseView";
export class test_TestAtlas_data extends BaseView{
	public list_GList : fgui.GList;
    constructor()
    {
        super();
        this.package = "test";
        this.packageItem = "TestAtlas";

        this.OnInit();
    }

    public OnInit():void
    {
        super.OnInit();
		this.list_GList = this.getChild<fgui.GList>("list");
    }
}

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
		this.n0_GList = this.getChild<fgui.GList>("n0");
		this.n1_GTextField = this.getChild<fgui.GTextField>("n1");
		this.n2_GList = this.getChild<fgui.GList>("n2");
		this.n3_GTextField = this.getChild<fgui.GTextField>("n3");
		this.virtualList_GList = this.getChild<fgui.GList>("virtualList");
		this.n5_GTextField = this.getChild<fgui.GTextField>("n5");
		this.n7_GComponent = this.getChild<fgui.GComponent>("n7");
		this.n8_GTextField = this.getChild<fgui.GTextField>("n8");
		this.n9_GComponent = this.getChild<fgui.GComponent>("n9");
		this.n10_GComponent = this.getChild<fgui.GComponent>("n10");
		this.n11_GTextField = this.getChild<fgui.GTextField>("n11");
		this.n12_GTextField = this.getChild<fgui.GTextField>("n12");
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
	public n12_GRichTextField : fgui.GRichTextField;
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
		this.n0_GTextField = this.getChild<fgui.GTextField>("n0");
		this.n1_GTextField = this.getChild<fgui.GTextField>("n1");
		this.n2_GTextField = this.getChild<fgui.GTextField>("n2");
		this.n3_GTextField = this.getChild<fgui.GTextField>("n3");
		this.n4_GTextField = this.getChild<fgui.GTextField>("n4");
		this.n5_GTextField = this.getChild<fgui.GTextField>("n5");
		this.n6_GTextField = this.getChild<fgui.GTextField>("n6");
		this.n7_GTextField = this.getChild<fgui.GTextField>("n7");
		this.n8_GTextField = this.getChild<fgui.GTextField>("n8");
		this.n9_GTextField = this.getChild<fgui.GTextField>("n9");
		this.n10_GTextField = this.getChild<fgui.GTextField>("n10");
		this.n11_GRichTextField = this.getChild<fgui.GRichTextField>("n11");
		this.n12_GRichTextField = this.getChild<fgui.GRichTextField>("n12");
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
	public n8_GGraph : fgui.GGraph;
	public n9_GButton : fgui.GButton;
	public testDisable_GButton : fgui.GButton;
	public color_t : fgui.Transition;
	public btnMove_t : fgui.Transition;
	public btnMove2_t : fgui.Transition;
	public btnSingle_t : fgui.Transition;
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
		this.n0_GButton = this.getChild<fgui.GButton>("n0");
		this.n1_GButton = this.getChild<fgui.GButton>("n1");
		this.n2_GButton = this.getChild<fgui.GButton>("n2");
		this.n3_GButton = this.getChild<fgui.GButton>("n3");
		this.n4_GButton = this.getChild<fgui.GButton>("n4");
		this.n5_GButton = this.getChild<fgui.GButton>("n5");
		this.dropBox_GComboBox = this.getChild<fgui.GComboBox>("dropBox");
		this.slider_GSlider = this.getChild<fgui.GSlider>("slider");
		this.n8_GGraph = this.getChild<fgui.GGraph>("n8");
		this.n9_GButton = this.getChild<fgui.GButton>("n9");
		this.testDisable_GButton = this.getChild<fgui.GButton>("testDisable");
		this.color_t = this.getTransition("color");
		this.btnMove_t = this.getTransition("btnMove");
		this.btnMove2_t = this.getTransition("btnMove2");
		this.btnSingle_t = this.getTransition("btnSingle");
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
	public testBtn_GButton : fgui.GButton;
	public replayBtn_GButton : fgui.GButton;
	public n12_GGraph : fgui.GGraph;
	public root_GComponent : fgui.GComponent;
	public rotate_t : fgui.Transition;
	public move_t : fgui.Transition;
	public scale_t : fgui.Transition;
	public scale_center_t : fgui.Transition;
	public scale_right_t : fgui.Transition;
	public group1_t : fgui.Transition;
	public color_t : fgui.Transition;
	public round_t : fgui.Transition;
	public size_t : fgui.Transition;
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
		this.n0_GGraph = this.getChild<fgui.GGraph>("n0");
		this.n1_GGraph = this.getChild<fgui.GGraph>("n1");
		this.n2_GGraph = this.getChild<fgui.GGraph>("n2");
		this.n3_GGraph = this.getChild<fgui.GGraph>("n3");
		this.n4_GGraph = this.getChild<fgui.GGraph>("n4");
		this.n5_GGraph = this.getChild<fgui.GGraph>("n5");
		this.n6_GGraph = this.getChild<fgui.GGraph>("n6");
		this.n9_GGraph = this.getChild<fgui.GGraph>("n9");
		this.testBtn_GButton = this.getChild<fgui.GButton>("testBtn");
		this.replayBtn_GButton = this.getChild<fgui.GButton>("replayBtn");
		this.n12_GGraph = this.getChild<fgui.GGraph>("n12");
		this.root_GComponent = this.getChild<fgui.GComponent>("root");
		this.rotate_t = this.getTransition("rotate");
		this.move_t = this.getTransition("move");
		this.scale_t = this.getTransition("scale");
		this.scale_center_t = this.getTransition("scale_center");
		this.scale_right_t = this.getTransition("scale_right");
		this.group1_t = this.getTransition("group1");
		this.color_t = this.getTransition("color");
		this.round_t = this.getTransition("round");
		this.size_t = this.getTransition("size");
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
		this.abilityImage_GDOTAAbilityImage = this.getChild<fgui.GDOTAAbilityImage>("abilityImage");
		this.avatarImage_GDOTAAvatarImage = this.getChild<fgui.GDOTAAvatarImage>("avatarImage");
		this.effect_GDOTAScenePanel = this.getChild<fgui.GDOTAScenePanel>("effect");
		this.heroImage_GDOTAHeroImage = this.getChild<fgui.GDOTAHeroImage>("heroImage");
		this.itemImage_GDOTAItemImage = this.getChild<fgui.GDOTAItemImage>("itemImage");
		this.model_GDOTAScenePanel = this.getChild<fgui.GDOTAScenePanel>("model");
		this.userName_GDOTAUserName = this.getChild<fgui.GDOTAUserName>("userName");
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
		this.n3_GTextField = this.getChild<fgui.GTextField>("n3");
		this.n4_GTextField = this.getChild<fgui.GTextField>("n4");
		this.dloader_GLoader = this.getChild<fgui.GLoader>("dloader");
		this.floader1_GLoader = this.getChild<fgui.GLoader>("floader1");
		this.n6_GTextField = this.getChild<fgui.GTextField>("n6");
		this.floader4_GLoader = this.getChild<fgui.GLoader>("floader4");
		this.n15_GTextField = this.getChild<fgui.GTextField>("n15");
		this.floader5_GLoader = this.getChild<fgui.GLoader>("floader5");
		this.n18_GTextField = this.getChild<fgui.GTextField>("n18");
		this.floader6_GLoader = this.getChild<fgui.GLoader>("floader6");
		this.n21_GTextField = this.getChild<fgui.GTextField>("n21");
		this.floader2_GLoader = this.getChild<fgui.GLoader>("floader2");
		this.n9_GTextField = this.getChild<fgui.GTextField>("n9");
		this.floader3_GLoader = this.getChild<fgui.GLoader>("floader3");
		this.n12_GTextField = this.getChild<fgui.GTextField>("n12");
		this.n23_GLoader = this.getChild<fgui.GLoader>("n23");
		this.scale9girdloader_GLoader = this.getChild<fgui.GLoader>("scale9girdloader");
    }
}

export class test_TestRelation_data extends BaseView{
	public n0_GGraph : fgui.GGraph;
	public t0_t : fgui.Transition;
	public t1_t : fgui.Transition;
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
		this.n0_GGraph = this.getChild<fgui.GGraph>("n0");
		this.t0_t = this.getTransition("t0");
		this.t1_t = this.getTransition("t1");
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
		this.n0_GGraph = this.getChild<fgui.GGraph>("n0");
		this.n1_GGraph = this.getChild<fgui.GGraph>("n1");
		this.n2_GGraph = this.getChild<fgui.GGraph>("n2");
		this.title_GTextField = this.getChild<fgui.GTextField>("title");
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
		this.n1_GGraph = this.getChild<fgui.GGraph>("n1");
		this.tabList_GList = this.getChild<fgui.GList>("tabList");
    }
}

