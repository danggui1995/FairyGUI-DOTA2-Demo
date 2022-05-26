import { AbUtil } from "panorama-fgui-types/fgui/FairyGUI";


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
    public GetPackageData(pkgName : string) {
        return BinCache.cacheData.get(pkgName);
    }
}
