import { test_TestNative_data } from "./test_data";

export class test_TestNative extends test_TestNative_data{
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

    public OnShow():void
    {
        var playerInfo = Game.GetPlayerInfo(Players.GetLocalPlayer());
        var steamid = playerInfo.player_steamid;
        this.avatarImage_GDOTAAvatarImage.element.steamid = steamid;

        this.userName_GDOTAUserName.element.steamid = steamid;

        this.heroImage_GDOTAHeroImage.element.heroname = "npc_dota_hero_wisp";

        this.effect_GDOTAScenePanel.element.SetEffectWithParams("particles/ui/hud/autocasting_square.vpcf", true, 100);

        this.model_GDOTAScenePanel.element.setModelWithParams("npc_dota_hero_wisp");

        this.abilityImage_GDOTAAbilityImage.element.abilityname = "troll_warlord_whirling_axes_melee";
        this.abilityImage_GDOTAAbilityImage.onEvent('onmouseover', this.onAbilityHover, this);
        this.abilityImage_GDOTAAbilityImage.onEvent('onmouseout', this.onAbilityOut, this);

    }

    private onAbilityHover()
    {
        $.DispatchEvent( "DOTAShowAbilityTooltipForEntityIndex", this.abilityImage_GDOTAAbilityImage.element.nativePanel, "troll_warlord_whirling_axes_melee", Players.GetLocalPlayerPortraitUnit() );
    }

    private onAbilityOut()
    {
        $.DispatchEvent( "DOTAHideAbilityTooltip", this.avatarImage_GDOTAAvatarImage.element.nativePanel );
    }

    public OnClose():void
    {

    }

}
