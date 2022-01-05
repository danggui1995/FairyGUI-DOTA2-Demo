import { GComponent, UIPackage } from "panorama-fgui-types/fgui/FairyGUI";
import { BaseView } from "./view/BaseView";
import { __dotapanel_Data } from "./view/dotapanel/dotapanel_data";
const DEBUG : boolean = true;

export class ViewManager
{
    public allViews : Map<string, BaseView>;
    public root : GComponent;

    constructor()
    {
        this.allViews = new Map();

        var rootPanel = $.GetContextPanel();

        this.root = new GComponent("ViewRoot");
        this.root.SetNativeParent(rootPanel);
        this.root.setFullScreen();

        $.TraceBack = function()
        {
            if (DEBUG == true)
            {
                $.Msg(new Error().stack);
            }
        }

        UIPackage.loadPackage("dotapanel", __dotapanel_Data);
    }

    public static inst : ViewManager;
    public static Get() : ViewManager
    {
        if (ViewManager.inst == null)
        {
            ViewManager.inst = new ViewManager();
        }
        return ViewManager.inst
    }
    

    public open<T extends BaseView>(ctor: { new (): T }, ...args:string[])
    {
        let clsType = ctor.name;
        if (!this.allViews.has(clsType))
        {
            let view = new ctor();
            this.allViews.set(clsType, view);
            this.addChild(view.root);
        }
        this.allViews.get(clsType).__OnShow(args);
    }

    public close(name:string)
    {
        if(this.allViews.has(name))
        {
            this.allViews.get(name).__OnClose();
            this.allViews.delete(name);
        }
    }

    public closeAll()
    {
        for (var name in this.allViews)
        {
            this.allViews.get(name).__OnClose();
        }
        this.allViews.clear();
    }

    public addChild<T extends GComponent>(child : T)
    {
        this.root.addChild(child);
    }

    public clearTempNode()
    {
        $('#HiddenRoot').RemoveAndDeleteChildren();
        $('#MeasureRoot').RemoveAndDeleteChildren();
    }
}