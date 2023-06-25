(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('panorama-fgui-types/fgui/FairyGUI')) :
    typeof define === 'function' && define.amd ? define(['panorama-fgui-types/fgui/FairyGUI'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fgui));
})(this, (function (fgui) { 'use strict';

    //预载入UI界面和缓存
    class BinCache {
        constructor() {
        }
        static PrecachePackageWithArrayBuffer(pkgName, binData) {
            if (!BinCache.cacheData.has(pkgName)) {
                BinCache.cacheData.set(pkgName, binData);
            }
        }
        static GetPackageData(pkgName) {
            return BinCache.cacheData.get(pkgName);
        }
        static PreloadPackage(pkgName) {
            let data = BinCache.GetPackageData(pkgName);
            if (data != null) {
                fgui.UIPackage.loadPackageWithArrayBuffer(pkgName, BinCache.GetPackageData(pkgName));
            }
            else {
                $.Msg("error PreloadPackage : " + pkgName);
            }
        }
    }
    BinCache.cacheData = new Map();

    class BaseView {
        constructor() {
            this.isFullScreen = false;
        }
        getChild(name) {
            return this.root.getChild(name);
        }
        getController(name) {
            return this.root.getController(name);
        }
        getTransition(name) {
            return this.root.getTransition(name);
        }
        OnInit() {
            fgui.UIPackage.loadPackageWithArrayBuffer(this.package, BinCache.GetPackageData(this.package));
            this.root = fgui.UIPackage.createObject(this.package, this.packageItem);
            if (!this.root) {
                $.Msg("load package error : " + this.package + " / " + this.packageItem + "\n" + new Error().stack);
                return;
            }
        }
        OnShow(args) {
        }
        OnClose() {
        }
        __OnShow(args) {
            if (!this.hasInitialized) {
                this.hasInitialized = true;
                if (this.isFullScreen == true) {
                    this.root.setFullScreen();
                }
                else {
                    this.root.center();
                    //加一层黑底
                    this.maskComp = fgui.UIPackage.createObject("dotapanel", "BlackMask");
                    this.maskComp.SetParent(this.root.parent);
                    this.root.SetParent(this.maskComp);
                    this.maskComp.onEvent('onactivate', this.onMaskClicked, this);
                }
            }
            this.OnShow(args);
        }
        __OnClose() {
            this.root.emit("removed_from_stage");
            this.OnClose();
            if (this.maskComp) {
                this.maskComp.removeFromParent();
            }
            else {
                this.root.removeFromParent();
            }
            this.gcTick = 0;
            BaseView.s_hiddenViews.push(this);
        }
        onMaskClicked() {
            this.CloseSelf();
        }
        CloseSelf() {
            $.ViewManager.close(this.viewName);
        }
        static InitViewCache() {
            BaseView.s_hiddenViews = [];
            BaseView.ViewCacheUpdate();
        }
        static ViewCacheUpdate() {
            $.Schedule(BaseView.GcTickInterval, BaseView.ViewCacheUpdate);
            for (let i = BaseView.s_hiddenViews.length - 1; i >= 0; i--) {
                let view = BaseView.s_hiddenViews[i];
                view.gcTick += BaseView.GcTickInterval;
                if (view.gcTick > BaseView.GcTickMax) {
                    if (view.maskComp) {
                        view.maskComp.removeFromParent(true);
                    }
                    else {
                        view.root.removeFromParent(true);
                    }
                    BaseView.s_hiddenViews.splice(i, 1);
                }
            }
        }
        static GetCacheView(name) {
            for (let i = BaseView.s_hiddenViews.length - 1; i >= 0; i--) {
                let view = BaseView.s_hiddenViews[i];
                if (view.viewName == name) {
                    view.gcTick = 0;
                    BaseView.s_hiddenViews.splice(i, 1);
                    return view;
                }
            }
            return null;
        }
    }
    BaseView.GcTickInterval = 2;
    BaseView.GcTickMax = 10;
    BaseView.InitViewCache();

}));
