import { GComponent, UIConfig } from "panorama-fgui-types/fgui/FairyGUI";
import { PackageRegister } from "./PackageRegister";
import { BaseView } from "./view/BaseView";
import { BinCache } from "./view/BinCache";
import { uipublic_itemcell } from "./view/uipublic/uipublic_itemcell";
const DEBUG : boolean = true;

export class ViewManager
{
    public allViews : Map<string, BaseView>;
    public root : GComponent;

    constructor()
    {
        $.ViewManager = this;
        this.allViews = new Map();
        this.root = new GComponent("ViewRootComp");
        this.root.SetNativeParent($('#ViewRoot'));
        this.root.setFullScreen();

        $.TraceBack = function()
        {
            if (DEBUG == true)
            {
                $.Msg(new Error().stack);
            }
        }

        PackageRegister.Init();
        UIConfig.buttonSound = "General.ButtonClick";

        //预载入 可提前到游戏载入阶段
        BinCache.PreloadPackage("dotapanel");
        BinCache.PreloadPackage("uipublic");

        //注册一些自定义类型 后面复用这些控件的时候会自动匹配类型
        $.UIObjectFactory.setExtensionWithPkg("uipublic", "itemcell", uipublic_itemcell);
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
            view.viewName = clsType;
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
    }
}