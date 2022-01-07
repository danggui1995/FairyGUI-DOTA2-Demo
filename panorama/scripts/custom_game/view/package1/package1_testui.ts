
import { GComponent, GObject } from "../../../plugin/fgui/FairyGUI";
import { package1_testui_data } from "./package1_data";

export class package1_testui extends package1_testui_data{
    constructor()
    {
        super();

        //add code to here
    }

    public OnInit():void
    {
        this.isFullScreen = true;

        super.OnInit();
    }

    private OnBtnClicked()
    {
        this.n13.text = ("污水哒哒");
    }

    private onTextChanged()
    {
        $.Msg(this.input.text);
    }

    private onAbilityHover()
    {
        $.DispatchEvent( "DOTAShowAbilityTooltipForEntityIndex", this.abilityImage.element.nativePanel, "troll_warlord_whirling_axes_melee", Players.GetLocalPlayerPortraitUnit() );
    }

    private onAbilityOut()
    {
        $.DispatchEvent( "DOTAHideAbilityTooltip", this.avatarImage.element.nativePanel );
    }

    private onDropdownUpdate()
    {
        $.Msg(this.dropdown.selectedIndex);
    }

    private onSliderUpdate()
    {
        this.progressBar.value = this.slider.value;
    }

    public OnShow():void
    {
        this.effect.element.SetEffectWithParams("particles/ui/hud/autocasting_square.vpcf", true, 100);

        this.model.element.setModelWithParams("npc_dota_hero_wisp");

        this.abilityImage.element.abilityname = "troll_warlord_whirling_axes_melee";
        this.abilityImage.onEvent('onmouseover', this.onAbilityHover, this);
        this.abilityImage.onEvent('onmouseout', this.onAbilityOut, this);

        var playerInfo = Game.GetPlayerInfo(Players.GetLocalPlayer());
        var steamid = playerInfo.player_steamid;
        this.avatarImage.element.steamid = steamid;

        this.userName.element.steamid = steamid;

        this.heroImage.element.heroname = "npc_dota_hero_wisp";

        // this.input.password = true;
        this.input.onEvent('ontextentrychange', this.onTextChanged, this);
        this.toggleButton.onEvent('onactivate', this.OnBtnClicked, this);


        var listData : any[] = [];
        for(var i = 0;i < 1000; i++)
        {
            listData.push({name : "时光机" + i , rank : i + 1});
        }
        this.list.itemRenderer = (index : number, obj : GObject)=>{
            var comp = obj as GComponent;
            comp.getChild('rank').text = "第" + index + "名";
            comp.getChild('name').text = listData[index].name;
        };
        this.list.setVirtual();
        this.list.numItems = listData.length;

        this.dropdown.onEvent('status_changed', this.onDropdownUpdate, this);
        this.slider.onEvent('changed', this.onSliderUpdate, this);
    }

    public OnClose():void
    {

    }
}
