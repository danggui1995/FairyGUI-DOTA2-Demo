import { UIConfig, UIPackage } from "panorama-fgui-types/fgui/FairyGUI";
import { test_TestLoader_data } from "./test_data";

export class test_TestLoader extends test_TestLoader_data{
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
        let url = UIPackage.getItemAssetPath("uipublic", "SKILL_CATE_ON");
        // this.floader1_GLoader.url = url;
        // this.floader2_GLoader.url = url;
        // this.floader3_GLoader.url = url;
        // this.floader4_GLoader.url = url;
        // this.floader5_GLoader.url = url;
        // this.floader6_GLoader.url = url;
        // this.scale9girdloader_GLoader.url = "ui://wdrcd8rpjrl69";

        // this.dloader_GLoader.url = "file://{images}/banners/dw_mo.psd";
    }

    public OnClose():void
    {

    }

}
