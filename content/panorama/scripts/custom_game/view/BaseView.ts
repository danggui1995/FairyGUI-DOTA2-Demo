import { GComponent, UIPackage, Controller, Transition, Timers, UIElement } from "panorama-fgui-types/fgui/FairyGUI";
import { BinCache } from "./BinCache";

export class BaseView{
    protected package : string;
    protected packageItem : string;
    protected isFullScreen: boolean = false;
    protected maskComp : GComponent;
    public viewName : string;

    public root : GComponent;

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
    }

    protected onMaskClicked(): void
    {
        this.CloseSelf();
    }

    protected CloseSelf():void
    {
        $.ViewManager.close(this.viewName);
    }
}
