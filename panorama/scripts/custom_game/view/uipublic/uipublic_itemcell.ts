import { uipublic_itemcell_data } from "./uipublic_data";

export class uipublic_itemcell extends uipublic_itemcell_data{
    private _itemname : string;

    public get itemname() : string
    {
        return this._itemname;
    }

    public set itemname(value : string)
    {
        this._itemname = value;
        if (value == "")
        {
            this.empty.setSelectedIndex(1);
        }
        else
        {
            this.empty.setSelectedIndex(0);
            this.item.element.itemname = value;
        }
    }
    constructor()
    {
        super();

        this.onEvent('onactivate', this.onCellClicked, this);
    }

    private onCellClicked():void
    {
        
    }

    public OnShow():void
    {

    }

    public OnClose():void
    {

    }
}
