import { GComponent, GObject } from "panorama-fgui-types/fgui/FairyGUI";
import { test_TestList_data } from "./test_data";

export class test_TestList extends test_TestList_data{
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
        this.virtualList_GList.setVirtual();
        let listData : any[] = [];
        for(let i = 0; i < 1000; i++)
        {
            listData.push("时光机" + i);
        }
        this.virtualList_GList.itemRenderer = (index : number, obj : GObject)=>{
            let comp = obj as GComponent;
            comp.getChild('title').text = listData[index];
        };
        this.virtualList_GList.setVirtual();
        this.virtualList_GList.numItems = listData.length;
    }

    public OnClose():void
    {

    }

}
