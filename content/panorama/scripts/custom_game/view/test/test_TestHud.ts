import { GObject, GComponent } from "panorama-fgui-types/fgui/FairyGUI";
import { ViewManager } from "../../ViewManager";
import { BaseView } from "../BaseView";
import { test_TestHud_data } from "./test_data";
import { test_TestButton } from "./test_TestButton";
import { test_TestLabel } from "./test_TestLabel";
import { test_TestList } from "./test_TestList";
import { test_TestLoader } from "./test_TestLoader";
import { test_TestNative } from "./test_TestNative";
import { test_TestRelation } from "./test_TestRelation";
import { test_TestTransition } from "./test_TestTransition";

export class test_TestHud extends test_TestHud_data{
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
        let listData : any[] = [test_TestButton, test_TestLabel, test_TestList, test_TestLoader, test_TestNative, test_TestRelation, test_TestTransition];
        this.tabList_GList.itemRenderer = (index : number, obj : GObject)=>{
            let comp = obj as GComponent;
            comp.getChild('title').text = listData[index].name;
        };
        this.tabList_GList.onEvent('click_item', ()=>{
            for(let i = 0; i < listData.length; i++)
            {
                if (i == this.tabList_GList.selectedIndex)
                {
                    ViewManager.Get().open(listData[i]);
                }
                else
                {
                    ViewManager.Get().close(listData[i].name);
                }
            }
        });
        this.tabList_GList.setVirtual();
        this.tabList_GList.numItems = listData.length;
    }

    public OnClose():void
    {

    }

}
