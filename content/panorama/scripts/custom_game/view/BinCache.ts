import { AbUtil, UIPackage } from "panorama-fgui-types/fgui/FairyGUI";


//预载入UI界面和缓存
export class BinCache{
    static cacheData : Map<string, ArrayBuffer>;

    constructor()
    {
        BinCache.cacheData = new Map();
    }

    /**
     * PrecachePackage
     */
    public static PrecachePackage(pkgName : string, binData : string) {
        if (!BinCache.cacheData.has(pkgName))
        {
            BinCache.cacheData.set(pkgName, AbUtil.decode(binData));
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
        UIPackage.loadPackageWithArrayBuffer(pkgName, BinCache.GetPackageData(pkgName));
    }
}
