import { GComponent, UIPackage, Controller, Transition, Timers, UIElement } from "panorama-fgui-types/fgui/FairyGUI";
import { BinCache } from "./BinCache";

export class BaseView{
    protected package : string;
    protected packageItem : string;
    protected isFullScreen: boolean = false;
    protected maskComp : GComponent;
    protected static s_hiddenViews : BaseView[];

    public viewName : string;
    public root : GComponent;
    public gcTick : number;

    constructor()
    {
        
    }

    public getChild<T extends GComponent>(name : string) : T
    {
        return this.root.getChild(name);
    }

    public getController(name : string) : Controller
    {
        return this.root.getController(name);
    }

    public getTransition(name : string) :Transition
    {
        return  this.root.getTransition(name);
    }

    public OnInit():void
    {
        UIPackage.loadPackageWithArrayBuffer(this.package, BinCache.GetPackageData(this.package));
        this.root = UIPackage.createObject(this.package, this.packageItem);
        if (!this.root)
        {
            $.Msg("load package error : " + this.package + " / " + this.packageItem + "\n" + new Error().stack);
            return;
        }
    }

    public OnShow(args:string[]):void
    {

    }

    public OnClose():void
    {

    }

    public __OnShow(args:string[]):void
    {
        if (this.isFullScreen == true) {
            this.root.setFullScreen();
        }
        else
        {
            this.root.center();
            //加一层黑底
            this.maskComp = UIPackage.createObject("dotapanel", "BlackMask") as GComponent;
            this.maskComp.SetParent(this.root.parent);
            this.root.SetParent(this.maskComp);
            this.maskComp.onEvent('onactivate', this.onMaskClicked, this);
        }
        this.root.emit("added_to_stage");
        this.OnShow(args);
    }

    public __OnClose():void
    {
        this.root.emit("removed_from_stage");
        this.OnClose();
        
        if (this.maskComp)
        {
            this.maskComp.removeFromParent();
        }
        else
        {
            this.root.removeFromParent();
        }

        this.gcTick = 0;
        BaseView.s_hiddenViews.push(this);
    }

    protected onMaskClicked(): void
    {
        this.CloseSelf();
    }

    protected CloseSelf():void
    {
        $.ViewManager.close(this.viewName);
    }

    public static InitViewCache()
    {
        BaseView.s_hiddenViews = [];
        BaseView.ViewCacheUpdate();
    }

    public static GcTickInterval = 2;
    public static GcTickMax = 10;
    public static ViewCacheUpdate()
    {
        $.Schedule(BaseView.GcTickInterval, BaseView.ViewCacheUpdate);
        for(let i = BaseView.s_hiddenViews.length - 1; i >= 0; i--)
        {
            let view = BaseView.s_hiddenViews[i];
            view.gcTick += BaseView.GcTickInterval;
            if (view.gcTick > BaseView.GcTickMax)
            {
                if (view.maskComp)
                {
                    view.maskComp.removeFromParent(true);
                }
                else
                {
                    view.root.removeFromParent(true);
                }
                BaseView.s_hiddenViews.splice(i, 1);
            }
        }
    }

    public static GetCacheView(name : string) : BaseView
    {
        for(let i = BaseView.s_hiddenViews.length - 1; i >= 0; i--)
        {
            let view = BaseView.s_hiddenViews[i];
            if (view.viewName == name)
            {
                view.gcTick = 0;
                BaseView.s_hiddenViews.splice(i, 1);
                return view;
            }
        }
        return null;
    }
}

BaseView.InitViewCache();