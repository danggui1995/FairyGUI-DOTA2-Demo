import { GComponent, UIPackage, Controller, Transition } from "panorama-fgui-types/fgui/FairyGUI";

export class BaseView{
    protected package : string;
    protected packageItem : string;
    protected isFullScreen: boolean = false;
    protected binData : string;

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
        UIPackage.loadPackage(this.package, this.binData);
        this.root = UIPackage.createObject(this.package, this.packageItem);
        if (this.root == undefined)
        {
            $.Msg("load package error : " + this.package + " / " + this.packageItem + "\n" + new Error().stack);
            return;
        }
        if (this.isFullScreen == true) {
            this.root.setFullScreen();
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
        this.root.emit("added_to_stage");
        this.OnShow(args);
    }

    public __OnClose():void
    {
        this.root.emit("removed_from_stage");
        this.OnClose();
    }
}
