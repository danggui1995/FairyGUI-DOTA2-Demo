import { UIPackage } from "panorama-fgui-types/fgui/FairyGUI";


//预载入UI界面和缓存
export class BinCache{
    static cacheData : Map<string, ArrayBuffer> = new Map();

    constructor()
    {

    }

    public static PrecachePackageWithArrayBuffer(pkgName : string, binData : ArrayBuffer)
    {
        if (!BinCache.cacheData.has(pkgName))
        {
            BinCache.cacheData.set(pkgName, binData);
        }
    }

    /**
     * GetPackageData
     */
    public static GetPackageData(pkgName : string) {
        return BinCache.cacheData.get(pkgName);
    }

    /**
     * PreloadPackage
     */
    public static PreloadPackage(pkgName : string) {
        let data = BinCache.GetPackageData(pkgName);
        if (data != null)
        {
            UIPackage.loadPackageWithArrayBuffer(pkgName, BinCache.GetPackageData(pkgName));
        }
        else
        {
            $.Msg("error PreloadPackage : " + pkgName);
        }
    }
}
