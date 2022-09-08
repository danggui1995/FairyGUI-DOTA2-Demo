(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var ButtonMode;
    (function (ButtonMode) {
        ButtonMode[ButtonMode["Common"] = 0] = "Common";
        ButtonMode[ButtonMode["Check"] = 1] = "Check";
        ButtonMode[ButtonMode["Radio"] = 2] = "Radio";
    })(ButtonMode || (ButtonMode = {}));
    var AutoSizeType;
    (function (AutoSizeType) {
        AutoSizeType[AutoSizeType["None"] = 0] = "None";
        AutoSizeType[AutoSizeType["Both"] = 1] = "Both";
        AutoSizeType[AutoSizeType["Height"] = 2] = "Height";
        AutoSizeType[AutoSizeType["Shrink"] = 3] = "Shrink";
        AutoSizeType[AutoSizeType["Ellipsis"] = 4] = "Ellipsis";
    })(AutoSizeType || (AutoSizeType = {}));
    var LoaderFillType;
    (function (LoaderFillType) {
        LoaderFillType[LoaderFillType["None"] = 0] = "None";
        LoaderFillType[LoaderFillType["Scale"] = 1] = "Scale";
        LoaderFillType[LoaderFillType["ScaleMatchHeight"] = 2] = "ScaleMatchHeight";
        LoaderFillType[LoaderFillType["ScaleMatchWidth"] = 3] = "ScaleMatchWidth";
        LoaderFillType[LoaderFillType["ScaleFree"] = 4] = "ScaleFree";
        LoaderFillType[LoaderFillType["ScaleNoBorder"] = 5] = "ScaleNoBorder";
    })(LoaderFillType || (LoaderFillType = {}));
    var ListLayoutType;
    (function (ListLayoutType) {
        ListLayoutType[ListLayoutType["SingleColumn"] = 0] = "SingleColumn";
        ListLayoutType[ListLayoutType["SingleRow"] = 1] = "SingleRow";
        ListLayoutType[ListLayoutType["FlowHorizontal"] = 2] = "FlowHorizontal";
        ListLayoutType[ListLayoutType["FlowVertical"] = 3] = "FlowVertical";
        ListLayoutType[ListLayoutType["Pagination"] = 4] = "Pagination";
    })(ListLayoutType || (ListLayoutType = {}));
    var ListSelectionMode;
    (function (ListSelectionMode) {
        ListSelectionMode[ListSelectionMode["Single"] = 0] = "Single";
        ListSelectionMode[ListSelectionMode["Multiple"] = 1] = "Multiple";
        ListSelectionMode[ListSelectionMode["Multiple_SingleClick"] = 2] = "Multiple_SingleClick";
        ListSelectionMode[ListSelectionMode["None"] = 3] = "None";
    })(ListSelectionMode || (ListSelectionMode = {}));
    var OverflowType;
    (function (OverflowType) {
        OverflowType[OverflowType["Visible"] = 0] = "Visible";
        OverflowType[OverflowType["Hidden"] = 1] = "Hidden";
        OverflowType[OverflowType["Scroll"] = 2] = "Scroll";
    })(OverflowType || (OverflowType = {}));
    var PackageItemType;
    (function (PackageItemType) {
        PackageItemType[PackageItemType["Image"] = 0] = "Image";
        PackageItemType[PackageItemType["MovieClip"] = 1] = "MovieClip";
        PackageItemType[PackageItemType["Sound"] = 2] = "Sound";
        PackageItemType[PackageItemType["Component"] = 3] = "Component";
        PackageItemType[PackageItemType["Atlas"] = 4] = "Atlas";
        PackageItemType[PackageItemType["Font"] = 5] = "Font";
        PackageItemType[PackageItemType["Swf"] = 6] = "Swf";
        PackageItemType[PackageItemType["Misc"] = 7] = "Misc";
        PackageItemType[PackageItemType["Unknown"] = 8] = "Unknown";
        PackageItemType[PackageItemType["Spine"] = 9] = "Spine";
        PackageItemType[PackageItemType["DragonBones"] = 10] = "DragonBones";
    })(PackageItemType || (PackageItemType = {}));
    var ObjectType;
    (function (ObjectType) {
        ObjectType[ObjectType["Image"] = 0] = "Image";
        ObjectType[ObjectType["MovieClip"] = 1] = "MovieClip";
        ObjectType[ObjectType["Swf"] = 2] = "Swf";
        ObjectType[ObjectType["Graph"] = 3] = "Graph";
        ObjectType[ObjectType["Loader"] = 4] = "Loader";
        ObjectType[ObjectType["Group"] = 5] = "Group";
        ObjectType[ObjectType["Text"] = 6] = "Text";
        ObjectType[ObjectType["RichText"] = 7] = "RichText";
        ObjectType[ObjectType["InputText"] = 8] = "InputText";
        ObjectType[ObjectType["Component"] = 9] = "Component";
        ObjectType[ObjectType["List"] = 10] = "List";
        ObjectType[ObjectType["Label"] = 11] = "Label";
        ObjectType[ObjectType["Button"] = 12] = "Button";
        ObjectType[ObjectType["ComboBox"] = 13] = "ComboBox";
        ObjectType[ObjectType["ProgressBar"] = 14] = "ProgressBar";
        ObjectType[ObjectType["Slider"] = 15] = "Slider";
        ObjectType[ObjectType["ScrollBar"] = 16] = "ScrollBar";
        ObjectType[ObjectType["Tree"] = 17] = "Tree";
        ObjectType[ObjectType["Loader3D"] = 18] = "Loader3D";
        ObjectType[ObjectType["GDOTAAbilityImage"] = 19] = "GDOTAAbilityImage";
        ObjectType[ObjectType["GDOTAHeroImage"] = 20] = "GDOTAHeroImage";
        ObjectType[ObjectType["GDOTAItemImage"] = 21] = "GDOTAItemImage";
        ObjectType[ObjectType["GDOTAAvatarImage"] = 22] = "GDOTAAvatarImage";
        ObjectType[ObjectType["GDOTAScenePanel"] = 23] = "GDOTAScenePanel";
        ObjectType[ObjectType["GDOTAUserName"] = 24] = "GDOTAUserName";
    })(ObjectType || (ObjectType = {}));
    var ProgressTitleType;
    (function (ProgressTitleType) {
        ProgressTitleType[ProgressTitleType["Percent"] = 0] = "Percent";
        ProgressTitleType[ProgressTitleType["ValueAndMax"] = 1] = "ValueAndMax";
        ProgressTitleType[ProgressTitleType["Value"] = 2] = "Value";
        ProgressTitleType[ProgressTitleType["Max"] = 3] = "Max";
    })(ProgressTitleType || (ProgressTitleType = {}));
    var ScrollBarDisplayType;
    (function (ScrollBarDisplayType) {
        ScrollBarDisplayType[ScrollBarDisplayType["Default"] = 0] = "Default";
        ScrollBarDisplayType[ScrollBarDisplayType["Visible"] = 1] = "Visible";
        ScrollBarDisplayType[ScrollBarDisplayType["Auto"] = 2] = "Auto";
        ScrollBarDisplayType[ScrollBarDisplayType["Hidden"] = 3] = "Hidden";
    })(ScrollBarDisplayType || (ScrollBarDisplayType = {}));
    var ScrollType;
    (function (ScrollType) {
        ScrollType[ScrollType["Horizontal"] = 0] = "Horizontal";
        ScrollType[ScrollType["Vertical"] = 1] = "Vertical";
        ScrollType[ScrollType["Both"] = 2] = "Both";
    })(ScrollType || (ScrollType = {}));
    var FlipType;
    (function (FlipType) {
        FlipType[FlipType["None"] = 0] = "None";
        FlipType[FlipType["Horizontal"] = 1] = "Horizontal";
        FlipType[FlipType["Vertical"] = 2] = "Vertical";
        FlipType[FlipType["Both"] = 3] = "Both";
    })(FlipType || (FlipType = {}));
    var ChildrenRenderOrder;
    (function (ChildrenRenderOrder) {
        ChildrenRenderOrder[ChildrenRenderOrder["Ascent"] = 0] = "Ascent";
        ChildrenRenderOrder[ChildrenRenderOrder["Descent"] = 1] = "Descent";
        ChildrenRenderOrder[ChildrenRenderOrder["Arch"] = 2] = "Arch";
    })(ChildrenRenderOrder || (ChildrenRenderOrder = {}));
    var GroupLayoutType;
    (function (GroupLayoutType) {
        GroupLayoutType[GroupLayoutType["None"] = 0] = "None";
        GroupLayoutType[GroupLayoutType["Horizontal"] = 1] = "Horizontal";
        GroupLayoutType[GroupLayoutType["Vertical"] = 2] = "Vertical";
    })(GroupLayoutType || (GroupLayoutType = {}));
    var PopupDirection;
    (function (PopupDirection) {
        PopupDirection[PopupDirection["Auto"] = 0] = "Auto";
        PopupDirection[PopupDirection["Up"] = 1] = "Up";
        PopupDirection[PopupDirection["Down"] = 2] = "Down";
    })(PopupDirection || (PopupDirection = {}));
    var RelationType;
    (function (RelationType) {
        RelationType[RelationType["Left_Left"] = 0] = "Left_Left";
        RelationType[RelationType["Left_Center"] = 1] = "Left_Center";
        RelationType[RelationType["Left_Right"] = 2] = "Left_Right";
        RelationType[RelationType["Center_Center"] = 3] = "Center_Center";
        RelationType[RelationType["Right_Left"] = 4] = "Right_Left";
        RelationType[RelationType["Right_Center"] = 5] = "Right_Center";
        RelationType[RelationType["Right_Right"] = 6] = "Right_Right";
        RelationType[RelationType["Top_Top"] = 7] = "Top_Top";
        RelationType[RelationType["Top_Middle"] = 8] = "Top_Middle";
        RelationType[RelationType["Top_Bottom"] = 9] = "Top_Bottom";
        RelationType[RelationType["Middle_Middle"] = 10] = "Middle_Middle";
        RelationType[RelationType["Bottom_Top"] = 11] = "Bottom_Top";
        RelationType[RelationType["Bottom_Middle"] = 12] = "Bottom_Middle";
        RelationType[RelationType["Bottom_Bottom"] = 13] = "Bottom_Bottom";
        RelationType[RelationType["Width"] = 14] = "Width";
        RelationType[RelationType["Height"] = 15] = "Height";
        RelationType[RelationType["LeftExt_Left"] = 16] = "LeftExt_Left";
        RelationType[RelationType["LeftExt_Right"] = 17] = "LeftExt_Right";
        RelationType[RelationType["RightExt_Left"] = 18] = "RightExt_Left";
        RelationType[RelationType["RightExt_Right"] = 19] = "RightExt_Right";
        RelationType[RelationType["TopExt_Top"] = 20] = "TopExt_Top";
        RelationType[RelationType["TopExt_Bottom"] = 21] = "TopExt_Bottom";
        RelationType[RelationType["BottomExt_Top"] = 22] = "BottomExt_Top";
        RelationType[RelationType["BottomExt_Bottom"] = 23] = "BottomExt_Bottom";
        RelationType[RelationType["Size"] = 24] = "Size";
    })(RelationType || (RelationType = {}));
    var FillMethod;
    (function (FillMethod) {
        FillMethod[FillMethod["None"] = 0] = "None";
        FillMethod[FillMethod["Horizontal"] = 1] = "Horizontal";
        FillMethod[FillMethod["Vertical"] = 2] = "Vertical";
        FillMethod[FillMethod["Radial90"] = 3] = "Radial90";
        FillMethod[FillMethod["Radial180"] = 4] = "Radial180";
        FillMethod[FillMethod["Radial360"] = 5] = "Radial360";
    })(FillMethod || (FillMethod = {}));
    var FillOrigin;
    (function (FillOrigin) {
        FillOrigin[FillOrigin["Top"] = 0] = "Top";
        FillOrigin[FillOrigin["Bottom"] = 1] = "Bottom";
        FillOrigin[FillOrigin["Left"] = 2] = "Left";
        FillOrigin[FillOrigin["Right"] = 3] = "Right";
        FillOrigin[FillOrigin["TopLeft"] = 0] = "TopLeft";
        FillOrigin[FillOrigin["TopRight"] = 1] = "TopRight";
        FillOrigin[FillOrigin["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin[FillOrigin["BottomRight"] = 3] = "BottomRight";
    })(FillOrigin || (FillOrigin = {}));
    var FillOrigin90;
    (function (FillOrigin90) {
        FillOrigin90[FillOrigin90["TopLeft"] = 0] = "TopLeft";
        FillOrigin90[FillOrigin90["TopRight"] = 1] = "TopRight";
        FillOrigin90[FillOrigin90["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin90[FillOrigin90["BottomRight"] = 3] = "BottomRight";
    })(FillOrigin90 || (FillOrigin90 = {}));
    var ObjectPropID;
    (function (ObjectPropID) {
        ObjectPropID[ObjectPropID["Text"] = 0] = "Text";
        ObjectPropID[ObjectPropID["Icon"] = 1] = "Icon";
        ObjectPropID[ObjectPropID["Color"] = 2] = "Color";
        ObjectPropID[ObjectPropID["OutlineColor"] = 3] = "OutlineColor";
        ObjectPropID[ObjectPropID["Playing"] = 4] = "Playing";
        ObjectPropID[ObjectPropID["Frame"] = 5] = "Frame";
        ObjectPropID[ObjectPropID["DeltaTime"] = 6] = "DeltaTime";
        ObjectPropID[ObjectPropID["TimeScale"] = 7] = "TimeScale";
        ObjectPropID[ObjectPropID["FontSize"] = 8] = "FontSize";
        ObjectPropID[ObjectPropID["Selected"] = 9] = "Selected";
    })(ObjectPropID || (ObjectPropID = {}));

    class Pool {
        constructor(type, init, reset) {
            this._init = init;
            this._reset = reset;
            this._ct = type;
            this.pool = [];
        }
        borrow(...argArray) {
            let ret;
            if (this.pool.length > 0)
                ret = this.pool.pop();
            else
                ret = new this._ct();
            if (this._init)
                this._init(ret, ...argArray);
            return ret;
        }
        returns(element) {
            if (Array.isArray(element)) {
                let count = element.length;
                for (let i = 0; i < count; i++) {
                    let element2 = element[i];
                    if (this._reset)
                        this._reset(element2);
                    this.pool.push(element2);
                }
                element.length = 0;
            }
            else {
                if (this._reset)
                    this._reset(element);
                this.pool.push(element);
            }
        }
    }

    const lastInput = {
        x: 0,
        y: 0,
        mouseWheelDelta: 0,
        pointerId: 0,
        button: 0,
        clickCount: 0,
        holdTime: 0,
        altKey: false,
        shiftKey: false,
        ctrlKey: false,
        commandKey: false,
        keyCode: "",
        key: "",
        get isDblClick() {
            return this.clickCount == 2;
        },
        get isRightButton() {
            return this.button == 2;
        },
        get ctrlOrCmdKey() {
            return this.ctrlKey || this.commandKey;
        }
    };
    class Event {
        constructor() {
            this.data = null;
            /** @internal */
            this._callChain = [];
        }
        get type() {
            return this._type;
        }
        get target() {
            return this._target;
        }
        get sender() {
            return this._target;
        }
        get initiator() {
            return this._initiator;
        }
        get input() {
            return lastInput;
        }
        stopPropagation() {
            this._stopsPropagation = true;
        }
        preventDefault() {
            this._defaultPrevented = true;
        }
        capturePointer() {
            this._pointerCapture = true;
        }
        get isDefaultPrevented() {
            return this._defaultPrevented;
        }
    }
    var EventPool = new Pool(Event, obj => {
        obj._stopsPropagation = false;
        obj._defaultPrevented = false;
        obj._pointerCapture = false;
        obj._callChain.length = 0;
    }, obj => {
        obj.data = null;
        obj._initiator = null;
        obj._target = null;
        obj._callChain.length = 0;
    });

    class Vec2 {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
        set(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
        reset() {
            this.x = this.y = 0;
            return this;
        }
        distance(x, y) {
            return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
        }
        toString() {
            return this.x + "," + this.y;
        }
        normalize() {
            var d = Math.sqrt(this.x * this.x + this.y * this.y);
            if (d > 0) {
                var id = 1.0 / d;
                this.x *= id;
                this.y *= id;
            }
        }
        copy(Vec2) {
            return this.set(Vec2.x, Vec2.y);
        }
        clone() {
            return new Vec2(this.x, this.y);
        }
        equals(another) {
            return this.x == another.x && this.y == another.y;
        }
    }

    class Rect {
        constructor(x, y, width, height) {
            this.x = x || 0;
            this.y = y || 0;
            this.width = width || 0;
            this.height = height || 0;
        }
        set(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        setMinMax(xMin, yMin, xMax, yMax) {
            this.x = xMin;
            this.y = yMin;
            this.width = xMax - xMin;
            this.height = yMax - yMin;
        }
        get position() {
            return new Vec2(this.x, this.y);
        }
        get size() {
            return new Vec2(this.width, this.height);
        }
        get xMin() {
            return this.x;
        }
        set xMin(value) {
            let d = value - this.x;
            this.x = value;
            this.width -= d;
        }
        get xMax() {
            return this.x + this.width;
        }
        set xMax(value) {
            this.width = value - this.x;
        }
        get yMin() {
            return this.y;
        }
        set yMin(value) {
            let d = value - this.y;
            this.y = value;
            this.height -= d;
        }
        get yMax() {
            return this.y + this.height;
        }
        set yMax(value) {
            this.height = value - this.y;
        }
        intersection(another) {
            if (this.width == 0 || this.height == 0 || another.width == 0 || another.height == 0)
                return new Rect(0, 0, 0, 0);
            let left = this.x > another.x ? this.x : another.x;
            let right = this.xMax < another.xMax ? this.xMax : another.xMax;
            let top = this.y > another.y ? this.y : another.y;
            let bottom = this.yMax < another.yMax ? this.yMax : another.yMax;
            if (left > right || top > bottom)
                this.set(0, 0, 0, 0);
            else
                this.setMinMax(left, top, right, bottom);
            return this;
        }
        union(another) {
            if (another.width == 0 || another.height == 0)
                return this;
            if (this.width == 0 || this.height == 0) {
                this.copy(another);
                return this;
            }
            let x = Math.min(this.x, another.x);
            let y = Math.min(this.y, another.y);
            this.setMinMax(x, y, Math.max(this.xMax, another.xMax), Math.max(this.yMax, another.yMax));
            return this;
        }
        extend(x, y) {
            this.x -= x;
            this.y -= y;
            this.width += x * 2;
            this.height += y * 2;
        }
        contains(x, y) {
            if (x instanceof Vec2) {
                y = x.y;
                x = x.x;
            }
            return x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height;
        }
        copy(source) {
            this.set(source.x, source.y, source.width, source.height);
        }
        clone() {
            return new Rect(this.x, this.y, this.width, this.height);
        }
        equals(another) {
            return this.x == another.x && this.y == another.y && this.width == another.width && this.height == another.height;
        }
    }

    class DotaPanel {
        constructor() {
        }
        set visible(bool) {
            this.nativePanel.visible = bool;
        }
        get visible() {
            return this.nativePanel.visible;
        }
        removeChild(child) {
            this.removeNativeChild(child.nativePanel);
        }
        appendChild(child) {
            this.addNativeChild(child.nativePanel);
        }
        addNativeChild(child) {
            child.SetParent(this.nativePanel);
        }
        removeNativeChild(child) {
            if (!child.IsValid()) {
                return;
            }
            child.SetParent($('#HiddenRoot'));
        }
        insertBefore(child, refNode) {
            if (!child.nativePanel.IsValid() || !refNode.nativePanel.IsValid() || !this.nativePanel.IsValid()) {
                return;
            }
            child.nativePanel.SetParent(this.nativePanel);
            this.nativePanel.MoveChildBefore(child.nativePanel, refNode.nativePanel);
        }
    }

    function transformCompare(a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        return 1;
    }
    class UIElement extends DotaPanel {
        constructor() {
            super();
            this._children = [];
            this._pos = new Vec2();
            this._scale = new Vec2(1, 1);
            this._rot = 0;
            this._pivot = new Vec2();
            this._contentRect = new Rect();
            this._alpha = 1;
            this._touchable = true;
            this._visible = true;
            this._opaque = true;
            this._cursor = "";
            this._grayed = false;
            this._tabStop = false;
            this._tabStopChildren = false;
            this._gTouchable = undefined;
            this._skew = new Vec2(0, 0);
            this._tweenInit = false;
            this._tweenTest = new Map;
        }
        initElement() {
            this.nativePanel = $.CreatePanel("Panel", $('#HiddenRoot'), this.$owner.name);
        }
        get name() {
            return this.id;
        }
        set name(value) {
            this.id = value;
        }
        get x() {
            return this._pos.x;
        }
        set x(value) {
            this.setPosition(value, this._pos.y);
        }
        get y() {
            return this._pos.y;
        }
        set y(value) {
            this.setPosition(this._pos.x, value);
        }
        setPosition(x, y) {
            if (this._pos.x != x || this._pos.y != y) {
                this._pos.set(x, y);
                this.nativePanel.style.marginLeft = x + "px";
                this.nativePanel.style.marginTop = y + "px";
            }
        }
        removeExpiredTween(tween) {
            for (const [propName, tweenArr] of this._tweenTest) {
                for (let i = tweenArr.length - 1; i >= 0; i--) {
                    let t = tweenArr[i];
                    if (t.duration < 0) {
                        tweenArr.splice(i, 1);
                    }
                }
            }
            return false;
        }
        appendTween(tween) {
            if (this._tweenInit == false) {
                this._tweenInit = true;
                this.$owner.RegisterEventHandler('PropertyTransitionEnd', (_, propName) => {
                    let runningTweens = this._tweenTest.get(propName);
                    if (runningTweens && runningTweens.length > 0) {
                        let topTween = runningTweens.shift();
                        this.onTweenStop(topTween);
                        this.removeExpiredTween();
                        this.checkPlayTween();
                        topTween.kill();
                    }
                });
            }
            this.removeExpiredTween();
            if (this._tweenTest.has(tween.propType)) {
                let allTweens = this._tweenTest.get(tween.propType);
                if (allTweens.length > 0) {
                    let lastTween = allTweens[allTweens.length - 1];
                    if (lastTween.endTime - 0.02 < tween.startTime) {
                        allTweens.push(tween);
                    }
                }
                else {
                    allTweens.push(tween);
                }
            }
            else {
                this._tweenTest.set(tween.propType, [tween]);
            }
        }
        onTweenReset(actionType, startValue) {
            switch (actionType) {
                case ActionType.XY:
                    {
                        this.setPosition(startValue.x, startValue.y);
                        break;
                    }
                case ActionType.Alpha:
                    {
                        this.alpha = startValue.x;
                        break;
                    }
                case ActionType.Scale:
                    {
                        this.setScale(startValue.x, startValue.y);
                        break;
                    }
                case ActionType.Rotation:
                    {
                        this.rotation = startValue.x;
                        break;
                    }
                case ActionType.Size:
                    {
                        this.setSize(startValue.x, startValue.y);
                        break;
                    }
                case ActionType.Skew:
                    {
                        this.setSkew(startValue.x, startValue.y);
                        break;
                    }
            }
        }
        onTweenStart(tween) {
            if (!tween.hasStarted) {
                tween.hasStarted = true;
                this.nativePanel.style.transition = null;
                this.nativePanel.style.transform = null;
                let tweener = tween.tweener;
                this.onTweenReset(tweener.actionType, tweener.startValue);
            }
        }
        onTweenStop(tween) {
            this.nativePanel.style.transition = null;
            this.nativePanel.style.transform = null;
            let tweener = tween.tweener;
            this.onTweenReset(tweener.actionType, tweener.endValue);
        }
        playTweenComposed() {
            for (const [propName, tweenArr] of this._tweenTest) {
                for (let i = tweenArr.length - 1; i >= 0; i--) {
                    let t = tweenArr[i];
                    if (t.duration < 0) {
                        t.kill();
                        tweenArr.splice(i, 1);
                    }
                }
            }
            this.checkPlayTween();
        }
        checkPlayTween() {
            let keylist = [];
            let valuemap = new Map;
            for (let [propType, tweenArr] of this._tweenTest) {
                if (tweenArr.length > 0) {
                    let tween = tweenArr[0];
                    if (tween.duration > 0) {
                        let propKey = `${propType} ${tween.duration}s ${tween.ease} 0s`;
                        keylist.push(propKey);
                        let valuemapArr = valuemap.get(propType);
                        if (valuemapArr) {
                            valuemapArr.push(tween.propValue);
                        }
                        else {
                            valuemap.set(propType, [tween.propValue]);
                        }
                        this.onTweenStart(tween);
                    }
                    else {
                        tweenArr.shift();
                    }
                }
            }
            if (keylist.length > 0) {
                this.nativePanel.style.transition = keylist.join(',');
                for (let [k, v] of valuemap) {
                    if (v.length > 1) {
                        v.sort(transformCompare);
                    }
                    this.nativePanel.style[k] = v.join(' ');
                }
            }
        }
        get width() {
            return this._contentRect.width;
        }
        set width(value) {
            if (this._contentRect.width != value) {
                this._contentRect.width = value;
                this.onSizeChanged();
            }
        }
        get height() {
            return this._contentRect.height;
        }
        set height(value) {
            if (this._contentRect.height != value) {
                this._contentRect.height = value;
                this.onSizeChanged();
            }
        }
        setSize(wv, hv) {
            if (wv != this._contentRect.width || hv != this._contentRect.height) {
                this._contentRect.width = wv;
                this._contentRect.height = hv;
                this.onSizeChanged();
            }
        }
        onSizeChanged() {
            this.nativePanel.style.width = this._contentRect.width + "px";
            this.nativePanel.style.height = this._contentRect.height + "px";
        }
        get pivotX() {
            return this._pivot.x;
        }
        set pivotX(value) {
            this.setPivot(value, this._pivot.y);
        }
        get pivotY() {
            return this._pivot.y;
        }
        set pivotY(value) {
            this.setPosition(this._pivot.x, value);
        }
        setPivot(xv, yv) {
            // if (this._pivot.x != xv || this._pivot.y != yv) {
            this._pivot.set(xv, yv);
            this.nativePanel.style.transformOrigin = `${this._pivot.x * 100}% ${this._pivot.y * 100}%`;
            // }
        }
        setSkew(x, y) {
            if (this._skew.x != x || this._skew.y != y) {
                this._skew.set(x, y);
                this.nativePanel.style.transform = `skew(${x}deg, ${y}deg)`;
            }
        }
        get flip() {
            if (this._flipX)
                return this._flipY ? FlipType.Both : FlipType.Horizontal;
            else if (this._flipY)
                return this._flipX ? FlipType.Both : FlipType.Vertical;
            else
                return FlipType.None;
        }
        set flip(value) {
            let a = value == FlipType.Both || value == FlipType.Horizontal;
            let b = value == FlipType.Both || value == FlipType.Vertical;
            if (a != this._flipX || b != this._flipY)
                this._flipX = a;
            this._flipY = b;
            if (this._flipX || this._flipY)
                this.nativePanel.style.transformOrigin = "%50 %50";
            else
                this.nativePanel.style.transformOrigin = (this._pivot.x * 100) + "% " + (this._pivot.y * 100) + "%";
        }
        get cursor() {
            return this._cursor;
        }
        set cursor(value) {
            this._cursor = value;
        }
        updateFilters() {
            if (this._grayed)
                ;
            // this.nativePanel.style.filter = filter;
            //TODO 置灰
        }
        get scaleX() {
            return this._scale.x;
        }
        set scaleX(value) {
            this.setScale(value, this._scale.y);
        }
        get scaleY() {
            return this._scale.y;
        }
        set scaleY(value) {
            this.setScale(this._scale.x, value);
        }
        setScale(xv, yv) {
            if (this._scale.x != xv || this._scale.y != yv) {
                this._scale.set(xv, yv);
                this.nativePanel.style.preTransformScale2d = `${xv}, ${yv}`;
            }
        }
        get rotation() {
            return this._rot;
        }
        set rotation(value) {
            if (this._rot != value) {
                this._rot = value;
                this.nativePanel.style.preTransformRotate2d = `${value}deg`;
            }
        }
        get parent() {
            return this._parent;
        }
        get alpha() {
            return this._alpha;
        }
        set alpha(value) {
            if (this._alpha != value) {
                this._alpha = value;
                this.nativePanel.style.opacity = this._alpha.toFixed(3);
            }
        }
        get touchable() {
            return this._touchable;
        }
        set touchable(value) {
            if (this._touchable != value) {
                this._touchable = value;
                this.updateTouchableFlag();
            }
        }
        get opaque() {
            return this._opaque;
        }
        set opaque(value) {
            if (this._opaque != value) {
                this._opaque = value;
                this.updateTouchableFlag();
            }
        }
        updateTouchableFlag() {
            let tc = true;
            if (!this._touchable || !this._opaque || this._touchDisabled)
                tc = false;
            else if (this.parent && !this.parent._opaque)
                tc = true;
            if (this._gTouchable != tc) {
                this._gTouchable = tc;
                this.nativePanel.hittest = tc;
                const children = this._children;
                for (let i = 0, l = children.length; i < l; i++) {
                    children[i].updateTouchableFlag();
                }
            }
        }
        setNotInteractable() {
            this._touchDisabled = true;
            // this.nativePanel.style.pointerEvents = "none";
        }
        get grayed() {
            return this._grayed;
        }
        set grayed(value) {
            if (this._grayed != value) {
                this._grayed = value;
                if (value) {
                    this.nativePanel.AddClass("FGUI_Gray");
                }
                else {
                    this.nativePanel.RemoveClass("FGUI_Gray");
                }
            }
        }
        // public get blendMode(): Blending {
        //     return this._graphics ? this._graphics.material.blending : NormalBlending;
        // }
        // public set blendMode(value: Blending) {
        //     if (this._graphics)
        //         this._graphics.material.blending = value;
        // }
        get focusable() {
            return !this._notFocusable;
        }
        set focusable(value) {
            this._notFocusable = !value;
        }
        get focused() {
            return this.nativePanel.BHasKeyFocus();
            // return this.stage.focusedElement == this || this.isAncestorOf(this.stage.focusedElement);
            // return false;
        }
        get tabStop() {
            return this._tabStop;
        }
        set tabStop(value) {
            if (this._tabStop != value) {
                this._tabStop = value;
                if (value) {
                    this.nativePanel.tabindex = 0;
                    // this.addEventListener("focus", () => { if (this._tabStop) this.stage.setFocus(this, true); });
                }
                else
                    this.nativePanel.tabindex = null;
            }
        }
        get tabStopChildren() {
            return this._tabStopChildren;
        }
        set tabStopChildren(value) {
            this._tabStopChildren = value;
        }
        get onStage() {
            return true;
        }
        get stage() {
            let p = this;
            while (p != undefined) {
                if (p.is_stage)
                    return p;
                p = p.parentElement;
            }
            // return window.fguiStage;
        }
        globalToLocal(x, y, result) {
            let radio = $.UIObjectFactory.getAspectRadio();
            x *= radio;
            y *= radio;
            var globalVec = this.localToGlobal(this.x, this.y);
            if (!result) {
                result = new Vec2();
            }
            result.x = x - globalVec.x;
            result.y = y - globalVec.y;
            return result;
        }
        localToGlobal(x, y, result) {
            if (!result) {
                result = new Vec2(x, y);
            }
            else {
                result.set(x, y);
            }
            var p = this.parent;
            while (p != undefined) {
                result.x += p.x;
                result.y += p.y;
                p = p.parent;
            }
            return result;
        }
        addChild(child) {
            this.addChildAt(child, Number.POSITIVE_INFINITY);
        }
        addChildAt(child, index) {
            if (child._parent == this)
                this.setChildIndex(child, index);
            else {
                if (index > this._children.length - 1) {
                    this.appendChild(child);
                }
                else {
                    let refNode = this._children[index];
                    this.insertBefore(child, refNode);
                }
                this._children.splice(index, 0, child);
                child._parent = this;
                child.updateTouchableFlag();
            }
            child.broadcastEvent("added_to_stage");
        }
        removeChild(child) {
            if (child instanceof UIElement) {
                let index = this._children.indexOf(child);
                if (index == -1) {
                    $.Msg(new Error().stack);
                    throw 'not a child';
                }
                this.removeChildAt(index);
            }
            else
                super.removeChild(child);
            return child;
        }
        removeChildAt(index) {
            let child = this._children[index];
            child.broadcastEvent("removed_from_stage");
            this._children.splice(index, 1);
            super.removeChild(child);
            child._parent = null;
        }
        setChildIndex(child, index) {
            let oldIndex = this._children.indexOf(child);
            if (oldIndex == index)
                return;
            if (oldIndex == -1)
                throw 'Not a child';
            this._children.splice(oldIndex, 1);
            if (index >= this._children.length - 1) {
                this._children.push(child);
                this.appendChild(child);
            }
            else {
                this._children.splice(index, 0, child);
                let refNode = this._children[index + 1];
                this.insertBefore(child, refNode);
            }
        }
        getIndex(child) {
            return this._children.indexOf(child);
        }
        get numChildren() {
            return this._children.length;
        }
        // public isAncestorOf(child: UIElement): boolean {
        //     if (child == null)
        //         return false;
        //     var p: UIElement = child.parent;
        //     while (p) {
        //         if (p == this)
        //             return true;
        //         p = p.parent;
        //     }
        //     return false;
        // }
        get clipping() {
            return this._clipping;
        }
        set clipping(value) {
            if (this._clipping != value) {
                this._clipping = value;
                if (this._clipping)
                    this.nativePanel.style.overflow = "clip";
                else
                    this.nativePanel.style.overflow = "noclip";
            }
        }
        init() {
        }
        dispose() {
            this.nativePanel.RemoveAndDeleteChildren();
            for (const evt of PanelEventSet) {
                this.nativePanel.ClearPanelEvent(evt);
            }
            this.nativePanel.DeleteAsync(1);
        }
        traverseVisible(callback) {
            if (!this._visible)
                return;
            callback(this);
            const children = this._children;
            for (let i = 0, l = children.length; i < l; i++) {
                children[i].traverseVisible(callback);
            }
        }
        traverseAncestors(callback) {
            const parent = this._parent;
            if (parent) {
                callback(parent);
                parent.traverseAncestors(callback);
            }
        }
        broadcastEvent(type, data) {
            let ev = EventPool.borrow();
            ev._type = type;
            ev.data = data;
            ev._initiator = this;
            let arr = ev._callChain;
            this.traverseVisible(obj => {
                if (obj.$owner)
                    arr.push(obj.$owner);
            });
            arr.forEach(obj => {
                obj._dispatchDirect(type, ev);
            });
            arr.length = 0;
            EventPool.returns(ev);
        }
    }

    class EventDispatcher {
        constructor() {
            this._listeners = {};
        }
        on(type, callback, target, capture) {
            let col = this._listeners[type];
            if (!col) {
                col = { dispatching: 0, callbacks: [], captures: [] };
                this._listeners[type] = col;
            }
            let arr = capture ? col.captures : col.callbacks;
            let index = arr.findIndex((value, index, arr) => value == callback && arr[index + 1] == target);
            if (index != -1)
                arr[index + 2] = false;
            else
                arr.push(callback, target, false);
        }
        off(type, callback, target, capture) {
            let col = this._listeners[type];
            if (!col)
                return;
            let arr = capture ? col.captures : col.callbacks;
            let index = arr.findIndex((value, index, arr) => value == callback && arr[index + 1] == target);
            if (index != -1) {
                if (col.dispatching != 0) {
                    arr[index + 2] = true;
                    col.dispatching = 2;
                }
                else
                    arr.splice(index, 3);
            }
        }
        offAll(type) {
            if (type) {
                let col = this._listeners[type];
                if (col) {
                    if (col.dispatching != 0) {
                        col.callbacks.forEach((value, index, arr) => { if (index % 3 == 2)
                            arr[index] = true; });
                        col.captures.forEach((value, index, arr) => { if (index % 3 == 2)
                            arr[index] = true; });
                        col.dispatching = 2;
                    }
                    else {
                        col.callbacks.length = 0;
                        col.captures.length = 0;
                    }
                }
            }
            else {
                for (var key in this._listeners) {
                    delete this._listeners[key];
                }
            }
        }
        hasListener(type, callback, target, capture) {
            let col = this._listeners[type];
            if (!col)
                return false;
            let arr = capture ? col.captures : col.callbacks;
            if (!callback)
                return arr.length > 0;
            else
                arr.findIndex((value, index, arr) => value == callback && arr[index + 1] == target) != -1;
        }
        emit(type, data) {
            let col = this._listeners[type];
            if (!col || col.callbacks.length == 0 && col.captures.length == 0)
                return;
            let ev = EventPool.borrow(type);
            ev._type = type;
            ev.data = data;
            this._dispatch(col, ev, true);
            this._dispatch(col, ev, false);
            EventPool.returns(ev);
            return ev._defaultPrevented;
        }
        /** @internal */
        _dispatch(col, ev, capture) {
            if (col.dispatching != 0)
                return;
            col.dispatching = 1;
            ev._target = this;
            let arr = capture ? col.captures : col.callbacks;
            let cnt = arr.length;
            for (let i = 0; i < cnt; i += 3) {
                arr[i].call(arr[i + 1], ev);
            }
            if (col.dispatching == 2) {
                let cnt = arr.length;
                let i = 0;
                while (i < cnt) {
                    if (arr[i + 2]) {
                        arr.splice(i, 3);
                        cnt -= 3;
                        continue;
                    }
                    else
                        i += 3;
                }
            }
            col.dispatching = 0;
        }
        /** @internal */
        _dispatchDirect(type, ev) {
            let col = this._listeners[type];
            if (col) {
                if (col.captures.length > 0)
                    this._dispatch(col, ev, true);
                if (col.callbacks.length > 0)
                    this._dispatch(col, ev, false);
            }
        }
    }

    var EaseType;
    (function (EaseType) {
        EaseType[EaseType["Linear"] = 0] = "Linear";
        EaseType[EaseType["SineIn"] = 1] = "SineIn";
        EaseType[EaseType["SineOut"] = 2] = "SineOut";
        EaseType[EaseType["SineInOut"] = 3] = "SineInOut";
        EaseType[EaseType["QuadIn"] = 4] = "QuadIn";
        EaseType[EaseType["QuadOut"] = 5] = "QuadOut";
        EaseType[EaseType["QuadInOut"] = 6] = "QuadInOut";
        EaseType[EaseType["CubicIn"] = 7] = "CubicIn";
        EaseType[EaseType["CubicOut"] = 8] = "CubicOut";
        EaseType[EaseType["CubicInOut"] = 9] = "CubicInOut";
        EaseType[EaseType["QuartIn"] = 10] = "QuartIn";
        EaseType[EaseType["QuartOut"] = 11] = "QuartOut";
        EaseType[EaseType["QuartInOut"] = 12] = "QuartInOut";
        EaseType[EaseType["QuintIn"] = 13] = "QuintIn";
        EaseType[EaseType["QuintOut"] = 14] = "QuintOut";
        EaseType[EaseType["QuintInOut"] = 15] = "QuintInOut";
        EaseType[EaseType["ExpoIn"] = 16] = "ExpoIn";
        EaseType[EaseType["ExpoOut"] = 17] = "ExpoOut";
        EaseType[EaseType["ExpoInOut"] = 18] = "ExpoInOut";
        EaseType[EaseType["CircIn"] = 19] = "CircIn";
        EaseType[EaseType["CircOut"] = 20] = "CircOut";
        EaseType[EaseType["CircInOut"] = 21] = "CircInOut";
        EaseType[EaseType["ElasticIn"] = 22] = "ElasticIn";
        EaseType[EaseType["ElasticOut"] = 23] = "ElasticOut";
        EaseType[EaseType["ElasticInOut"] = 24] = "ElasticInOut";
        EaseType[EaseType["BackIn"] = 25] = "BackIn";
        EaseType[EaseType["BackOut"] = 26] = "BackOut";
        EaseType[EaseType["BackInOut"] = 27] = "BackInOut";
        EaseType[EaseType["BounceIn"] = 28] = "BounceIn";
        EaseType[EaseType["BounceOut"] = 29] = "BounceOut";
        EaseType[EaseType["BounceInOut"] = 30] = "BounceInOut";
        EaseType[EaseType["Custom"] = 31] = "Custom";
    })(EaseType || (EaseType = {}));
    function getEasePanorama(easeType) {
        switch (easeType) {
            case EaseType.BackIn:
            case EaseType.BounceIn:
            case EaseType.CircIn:
            case EaseType.CubicIn:
            case EaseType.ElasticIn:
            case EaseType.QuadIn:
            case EaseType.QuartIn:
            case EaseType.QuintIn:
            case EaseType.SineIn:
            case EaseType.ExpoIn:
                {
                    return "ease-in";
                }
            case EaseType.BackOut:
            case EaseType.BounceOut:
            case EaseType.CircOut:
            case EaseType.CubicOut:
            case EaseType.ElasticOut:
            case EaseType.QuadOut:
            case EaseType.QuartOut:
            case EaseType.QuintOut:
            case EaseType.SineOut:
            case EaseType.ExpoOut:
                {
                    return "ease-out";
                }
            case EaseType.BackInOut:
            case EaseType.BounceInOut:
            case EaseType.CircInOut:
            case EaseType.CubicInOut:
            case EaseType.ElasticInOut:
            case EaseType.QuadInOut:
            case EaseType.QuartInOut:
            case EaseType.QuintInOut:
            case EaseType.SineInOut:
            case EaseType.ExpoInOut:
                {
                    return "ease-in-out";
                }
            case EaseType.Linear:
                {
                    return "linear";
                }
            case EaseType.Custom:
                {
                    // return `cubic-bezier(${})`;
                    //TODO 不知道这里怎么对应  后续有时间再看看
                    return "ease";
                }
        }
    }

    class GearBase {
        dispose() {
            if (this._tweenConfig && this._tweenConfig._tweener) {
                this._tweenConfig._tweener.kill();
                this._tweenConfig._tweener = null;
            }
        }
        get controller() {
            return this._controller;
        }
        set controller(val) {
            if (val != this._controller) {
                this._controller = val;
                if (this._controller)
                    this.init();
            }
        }
        get tweenConfig() {
            if (!this._tweenConfig)
                this._tweenConfig = new GearTweenConfig();
            return this._tweenConfig;
        }
        get allowTween() {
            return this._tweenConfig && this._tweenConfig.tween && constructingDepth.n == 0 && !GearBase.disableAllTweenEffect;
        }
        setup(buffer) {
            this._controller = this._owner.parent.getControllerAt(buffer.readShort());
            this.init();
            var i;
            var page;
            var cnt = buffer.readShort();
            if ("pages" in this) {
                this.pages = buffer.readSArray(cnt);
            }
            else {
                for (i = 0; i < cnt; i++) {
                    page = buffer.readS();
                    if (page == null)
                        continue;
                    this.addStatus(page, buffer);
                }
                if (buffer.readBool())
                    this.addStatus(null, buffer);
            }
            if (buffer.readBool()) {
                this._tweenConfig = new GearTweenConfig();
                this._tweenConfig.easeType = buffer.readByte();
                this._tweenConfig.duration = buffer.readFloat();
                this._tweenConfig.delay = buffer.readFloat();
            }
            if (buffer.version >= 2) {
                if ("positionsInPercent" in this) {
                    if (buffer.readBool()) {
                        this.positionsInPercent = true;
                        for (i = 0; i < cnt; i++) {
                            page = buffer.readS();
                            if (page == null)
                                continue;
                            this.addExtStatus(page, buffer);
                        }
                        if (buffer.readBool())
                            this.addExtStatus(null, buffer);
                    }
                }
                else if ("condition" in this)
                    this.condition = buffer.readByte();
            }
        }
        updateFromRelations(dx, dy) {
        }
        addStatus(pageId, buffer) {
        }
        init() {
        }
        apply() {
        }
        updateState() {
        }
    }
    class GearTweenConfig {
        constructor() {
            this.tween = true;
            this.easeType = EaseType.QuadOut;
            this.duration = 0.3;
            this.delay = 0;
        }
    }

    class GearAnimation extends GearBase {
        init() {
            this._default = {
                playing: this._owner.getProp(ObjectPropID.Playing),
                frame: this._owner.getProp(ObjectPropID.Frame)
            };
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            var gv;
            if (!pageId)
                gv = this._default;
            else {
                gv = {};
                this._storage[pageId] = gv;
            }
            gv.playing = buffer.readBool();
            gv.frame = buffer.readInt();
        }
        apply() {
            this._owner._gearLocked = true;
            var gv = this._storage[this._controller.selectedPageId] || this._default;
            this._owner.setProp(ObjectPropID.Playing, gv.playing);
            this._owner.setProp(ObjectPropID.Frame, gv.frame);
            this._owner._gearLocked = false;
        }
        updateState() {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = {};
                this._storage[this._controller.selectedPageId] = gv;
            }
            gv.playing = this._owner.getProp(ObjectPropID.Playing);
            gv.frame = this._owner.getProp(ObjectPropID.Frame);
        }
    }

    class GearColor extends GearBase {
        init() {
            this._default = {
                color: this._owner.getProp(ObjectPropID.Color),
                strokeColor: this._owner.getProp(ObjectPropID.OutlineColor)
            };
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            var gv;
            if (!pageId)
                gv = this._default;
            else {
                gv = {};
                this._storage[pageId] = gv;
            }
            gv.color = buffer.readColor();
            gv.strokeColor = buffer.readColor();
        }
        apply() {
            this._owner._gearLocked = true;
            var gv = this._storage[this._controller.selectedPageId] || this._default;
            this._owner.setProp(ObjectPropID.Color, gv.color);
            this._owner.setProp(ObjectPropID.OutlineColor, gv.strokeColor);
            this._owner._gearLocked = false;
        }
        updateState() {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = {};
                this._storage[this._controller.selectedPageId] = gv;
            }
            gv.color = this._owner.getProp(ObjectPropID.Color);
            gv.strokeColor = this._owner.getProp(ObjectPropID.OutlineColor);
        }
    }

    class GearDisplay extends GearBase {
        constructor() {
            super(...arguments);
            this.pages = null;
            this._visible = 0;
            this._displayLockToken = 1;
        }
        init() {
            this.pages = null;
        }
        addLock() {
            this._visible++;
            return this._displayLockToken;
        }
        releaseLock(token) {
            if (token == this._displayLockToken)
                this._visible--;
        }
        get connected() {
            return this._controller == null || this._visible > 0;
        }
        apply() {
            this._displayLockToken++;
            if (this._displayLockToken <= 0)
                this._displayLockToken = 1;
            if (this.pages == null || this.pages.length == 0
                || this.pages.indexOf(this._controller.selectedPageId) != -1)
                this._visible = 1;
            else
                this._visible = 0;
        }
    }

    class GearDisplay2 extends GearBase {
        constructor() {
            super(...arguments);
            this.pages = null;
            this.condition = 0;
            this._visible = 0;
        }
        init() {
            this.pages = null;
        }
        apply() {
            if (this.pages == null || this.pages.length == 0
                || this.pages.indexOf(this._controller.selectedPageId) != -1)
                this._visible = 1;
            else
                this._visible = 0;
        }
        evaluate(connected) {
            var v = this._controller == null || this._visible > 0;
            if (this.condition == 0)
                v = v && connected;
            else
                v = v || connected;
            return v;
        }
    }

    class GearFontSize extends GearBase {
        constructor() {
            super(...arguments);
            this._default = 0;
        }
        init() {
            this._default = this._owner.getProp(ObjectPropID.FontSize);
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            if (!pageId)
                this._default = buffer.readInt();
            else
                this._storage[pageId] = buffer.readInt();
        }
        apply() {
            this._owner._gearLocked = true;
            var data = this._storage[this._controller.selectedPageId];
            if (data !== undefined)
                this._owner.setProp(ObjectPropID.FontSize, data);
            else
                this._owner.setProp(ObjectPropID.FontSize, this._default);
            this._owner._gearLocked = false;
        }
        updateState() {
            this._storage[this._controller.selectedPageId] = this._owner.getProp(ObjectPropID.FontSize);
        }
    }

    class GearIcon extends GearBase {
        init() {
            this._default = this._owner.icon;
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            if (!pageId)
                this._default = buffer.readS();
            else
                this._storage[pageId] = buffer.readS();
        }
        apply() {
            this._owner._gearLocked = true;
            var data = this._storage[this._controller.selectedPageId];
            if (data !== undefined)
                this._owner.icon = data;
            else
                this._owner.icon = this._default;
            this._owner._gearLocked = false;
        }
        updateState() {
            this._storage[this._controller.selectedPageId] = this._owner.icon;
        }
    }

    class Timers {
        static add(delayInMiniseconds, repeat, callback, target, callbackParam) {
            delayInMiniseconds /= 1000;
            let item;
            let index = _items.findIndex(e => e.target == target && e.callback == callback);
            if (index != -1)
                item = _items[index];
            else {
                item = _pool.borrow();
                item.callback = callback;
                item.target = target;
                _items.push(item);
            }
            item.delay = delayInMiniseconds;
            item.counter = 0;
            item.repeat = repeat;
            item.param = callbackParam;
            item.end = false;
        }
        static callLater(callback, target, callbackParam) {
            this.add(0, 1, callback, target, callbackParam);
        }
        static callDelay(delay, callback, target, callbackParam) {
            this.add(delay, 1, callback, target, callbackParam);
        }
        static addUpdate(callback, target, callbackParam) {
            this.add(0, 0, callback, target, callbackParam);
        }
        static exists(callback, target) {
            return _items.findIndex(e => e.target == target && e.callback == callback) != -1;
        }
        static remove(callback, target) {
            let index = _items.findIndex(e => e.target == target && e.callback == callback);
            if (index != -1) {
                let item = _items[index];
                _items.splice(index, 1);
                if (index < _enumI)
                    _enumI--;
                _enumCount--;
                _pool.returns(item);
            }
        }
    }
    Timers.deltaTime = 0;
    Timers.time = 0;
    Timers.frameCount = 0;
    class TimerItem {
        constructor() {
            this.delay = 0;
            this.counter = 0;
            this.repeat = 0;
        }
        advance(elapsed) {
            this.counter += elapsed;
            if (this.counter >= this.delay) {
                this.counter -= this.delay;
                if (this.counter > this.delay)
                    this.counter = this.delay;
                if (this.repeat > 0) {
                    this.repeat--;
                    if (this.repeat == 0)
                        this.end = true;
                }
                return true;
            }
            else
                return false;
        }
        reset() {
            this.callback = null;
            this.target = null;
            this.param = null;
        }
    }
    var _items = new Array();
    var _pool = new Pool(TimerItem, e => e.reset());
    var _enumI = 0;
    var _enumCount = 0;
    var _lastTime = 0;
    function __timer(timeStamp) {
        Timers.frameCount++;
        Timers.time = timeStamp;
        let deltaTime = timeStamp - _lastTime;
        Timers.deltaTime = deltaTime;
        _lastTime = timeStamp;
        _enumI = 0;
        _enumCount = _items.length;
        while (_enumI < _enumCount) {
            var item = _items[_enumI];
            _enumI++;
            if (item.advance(deltaTime)) {
                if (item.end) {
                    _enumI--;
                    _enumCount--;
                    _items.splice(_enumI, 1);
                }
                item.callback.call(item.target, item.param);
                if (item.end)
                    _pool.returns(item);
            }
        }
        return false;
    }
    let tickFunc;
    let tickInterval = 1 / 60;
    tickFunc = function () {
        __timer(Game.Time());
        $.Schedule(tickInterval, tickFunc);
    };
    tickFunc();

    class TweenValue {
        constructor() {
            this.x = this.y = this.z = this.w = 0;
        }
        get color() {
            return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
        }
        set color(value) {
            this.x = (value & 0xFF0000) >> 16;
            this.y = (value & 0x00FF00) >> 8;
            this.z = (value & 0x0000FF);
            this.w = (value & 0xFF000000) >> 24;
        }
        getField(index) {
            switch (index) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("Index out of bounds: " + index);
            }
        }
        setField(index, value) {
            switch (index) {
                case 0:
                    this.x = value;
                    break;
                case 1:
                    this.y = value;
                    break;
                case 2:
                    this.z = value;
                    break;
                case 3:
                    this.w = value;
                    break;
                default:
                    throw new Error("Index out of bounds: " + index);
            }
        }
        setZero() {
            this.x = this.y = this.z = this.w = 0;
        }
    }
    var ActionType;
    (function (ActionType) {
        ActionType[ActionType["XY"] = 0] = "XY";
        ActionType[ActionType["Size"] = 1] = "Size";
        ActionType[ActionType["Scale"] = 2] = "Scale";
        ActionType[ActionType["Pivot"] = 3] = "Pivot";
        ActionType[ActionType["Alpha"] = 4] = "Alpha";
        ActionType[ActionType["Rotation"] = 5] = "Rotation";
        ActionType[ActionType["Color"] = 6] = "Color";
        ActionType[ActionType["Animation"] = 7] = "Animation";
        ActionType[ActionType["Visible"] = 8] = "Visible";
        ActionType[ActionType["Sound"] = 9] = "Sound";
        ActionType[ActionType["Transition"] = 10] = "Transition";
        ActionType[ActionType["Shake"] = 11] = "Shake";
        ActionType[ActionType["ColorFilter"] = 12] = "ColorFilter";
        ActionType[ActionType["Skew"] = 13] = "Skew";
        ActionType[ActionType["Text"] = 14] = "Text";
        ActionType[ActionType["Icon"] = 15] = "Icon";
        ActionType[ActionType["Unknown"] = 16] = "Unknown";
    })(ActionType || (ActionType = {}));

    // Author: Daniele Giardini - http://www.demigiant.com
    const _PiOver2 = Math.PI * 0.5;
    const _TwoPi = Math.PI * 2;
    function evaluateEase(easeType, time, duration, overshootOrAmplitude, period) {
        switch (easeType) {
            case EaseType.Linear:
                return time / duration;
            case EaseType.SineIn:
                return -Math.cos(time / duration * _PiOver2) + 1;
            case EaseType.SineOut:
                return Math.sin(time / duration * _PiOver2);
            case EaseType.SineInOut:
                return -0.5 * (Math.cos(Math.PI * time / duration) - 1);
            case EaseType.QuadIn:
                return (time /= duration) * time;
            case EaseType.QuadOut:
                return -(time /= duration) * (time - 2);
            case EaseType.QuadInOut:
                if ((time /= duration * 0.5) < 1)
                    return 0.5 * time * time;
                return -0.5 * ((--time) * (time - 2) - 1);
            case EaseType.CubicIn:
                return (time /= duration) * time * time;
            case EaseType.CubicOut:
                return ((time = time / duration - 1) * time * time + 1);
            case EaseType.CubicInOut:
                if ((time /= duration * 0.5) < 1)
                    return 0.5 * time * time * time;
                return 0.5 * ((time -= 2) * time * time + 2);
            case EaseType.QuartIn:
                return (time /= duration) * time * time * time;
            case EaseType.QuartOut:
                return -((time = time / duration - 1) * time * time * time - 1);
            case EaseType.QuartInOut:
                if ((time /= duration * 0.5) < 1)
                    return 0.5 * time * time * time * time;
                return -0.5 * ((time -= 2) * time * time * time - 2);
            case EaseType.QuintIn:
                return (time /= duration) * time * time * time * time;
            case EaseType.QuintOut:
                return ((time = time / duration - 1) * time * time * time * time + 1);
            case EaseType.QuintInOut:
                if ((time /= duration * 0.5) < 1)
                    return 0.5 * time * time * time * time * time;
                return 0.5 * ((time -= 2) * time * time * time * time + 2);
            case EaseType.ExpoIn:
                return (time == 0) ? 0 : Math.pow(2, 10 * (time / duration - 1));
            case EaseType.ExpoOut:
                if (time == duration)
                    return 1;
                return (-Math.pow(2, -10 * time / duration) + 1);
            case EaseType.ExpoInOut:
                if (time == 0)
                    return 0;
                if (time == duration)
                    return 1;
                if ((time /= duration * 0.5) < 1)
                    return 0.5 * Math.pow(2, 10 * (time - 1));
                return 0.5 * (-Math.pow(2, -10 * --time) + 2);
            case EaseType.CircIn:
                return -(Math.sqrt(1 - (time /= duration) * time) - 1);
            case EaseType.CircOut:
                return Math.sqrt(1 - (time = time / duration - 1) * time);
            case EaseType.CircInOut:
                if ((time /= duration * 0.5) < 1)
                    return -0.5 * (Math.sqrt(1 - time * time) - 1);
                return 0.5 * (Math.sqrt(1 - (time -= 2) * time) + 1);
            case EaseType.ElasticIn:
                var s0;
                if (time == 0)
                    return 0;
                if ((time /= duration) == 1)
                    return 1;
                if (period == 0)
                    period = duration * 0.3;
                if (overshootOrAmplitude < 1) {
                    overshootOrAmplitude = 1;
                    s0 = period / 4;
                }
                else
                    s0 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
                return -(overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s0) * _TwoPi / period));
            case EaseType.ElasticOut:
                var s1;
                if (time == 0)
                    return 0;
                if ((time /= duration) == 1)
                    return 1;
                if (period == 0)
                    period = duration * 0.3;
                if (overshootOrAmplitude < 1) {
                    overshootOrAmplitude = 1;
                    s1 = period / 4;
                }
                else
                    s1 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
                return (overshootOrAmplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - s1) * _TwoPi / period) + 1);
            case EaseType.ElasticInOut:
                var s;
                if (time == 0)
                    return 0;
                if ((time /= duration * 0.5) == 2)
                    return 1;
                if (period == 0)
                    period = duration * (0.3 * 1.5);
                if (overshootOrAmplitude < 1) {
                    overshootOrAmplitude = 1;
                    s = period / 4;
                }
                else
                    s = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
                if (time < 1)
                    return -0.5 * (overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period));
                return overshootOrAmplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period) * 0.5 + 1;
            case EaseType.BackIn:
                return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);
            case EaseType.BackOut:
                return ((time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1);
            case EaseType.BackInOut:
                if ((time /= duration * 0.5) < 1)
                    return 0.5 * (time * time * (((overshootOrAmplitude *= (1.525)) + 1) * time - overshootOrAmplitude));
                return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= (1.525)) + 1) * time + overshootOrAmplitude) + 2);
            case EaseType.BounceIn:
                return bounce_easeIn(time, duration);
            case EaseType.BounceOut:
                return bounce_easeOut(time, duration);
            case EaseType.BounceInOut:
                return bounce_easeInOut(time, duration);
            default:
                return -(time /= duration) * (time - 2);
        }
    }
    function bounce_easeIn(time, duration) {
        return 1 - bounce_easeOut(duration - time, duration);
    }
    function bounce_easeOut(time, duration) {
        if ((time /= duration) < (1 / 2.75)) {
            return (7.5625 * time * time);
        }
        if (time < (2 / 2.75)) {
            return (7.5625 * (time -= (1.5 / 2.75)) * time + 0.75);
        }
        if (time < (2.5 / 2.75)) {
            return (7.5625 * (time -= (2.25 / 2.75)) * time + 0.9375);
        }
        return (7.5625 * (time -= (2.625 / 2.75)) * time + 0.984375);
    }
    function bounce_easeInOut(time, duration) {
        if (time < duration * 0.5) {
            return bounce_easeIn(time * 2, duration) * 0.5;
        }
        return bounce_easeOut(time * 2 - duration, duration) * 0.5 + 0.5;
    }

    class Color {
        constructor(r = 1, g = 1, b = 1, a = 1) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        setRGB(rgb) {
            this.r = ((rgb >> 16) & 0xFF) / 255;
            this.g = ((rgb >> 8) & 0xFF) / 255;
            this.b = (rgb & 0xFF) / 255;
        }
        copyTo(destObject) {
            var destColor = destObject;
            destColor.r = this.r;
            destColor.g = this.g;
            destColor.b = this.b;
            destColor.a = this.a;
        }
        clone() {
            var dest = new Color();
            this.copyTo(dest);
            return dest;
        }
        getHex() {
            return (Math.round(this.r * 255) << 16) + (Math.round(this.g * 255) << 8) + Math.round(this.b * 255);
        }
        toHexString() {
            return "#" + ('000000' + this.getHex().toString(16)).slice(-6);
        }
        toStyleString() {
            if (this.a == 1)
                return this.toHexString();
            else
                return "rgba(" + Math.round(this.r * 255) + "," + Math.round(this.g * 255) + "," + Math.round(this.b * 255) + "," + this.a + ")";
        }
        parseHexString(str) {
            if (str.length < 1)
                return Color.BLACK;
            if (str.charAt(0) == "#")
                str = str.substr(1);
            let rgb;
            let a = 255;
            if (str.length == 8) {
                a = parseInt(str.substr(0, 2), 16);
                rgb = parseInt(str.substr(2), 16);
            }
            else
                rgb = parseInt(str, 16);
            this.r = ((rgb >> 16) & 0xFF) / 255;
            this.g = ((rgb >> 8) & 0xFF) / 255;
            this.b = (rgb & 0xFF) / 255;
            this.a = a / 255;
        }
        static fromHexString(str) {
            let c = new Color();
            c.parseHexString(str);
            return c;
        }
    }
    Color.CLEAR = new Color(0, 0, 0, 0);
    Color.RED = new Color(1, 0, 0, 1);
    Color.GREEN = new Color(0, 1, 0, 1);
    Color.BLUE = new Color(0, 0, 1, 1);
    Color.YELLOW = new Color(1, 1, 0, 1);
    Color.GRAY = new Color(0.5, 0.5, 0.5, 1);
    Color.BLACK = new Color(0, 0, 0, 1);
    Color.WHITE = new Color(1, 1, 1, 1);

    const s_color$1 = new Color();
    function convertToHtmlColor(rgb) {
        s_color$1.setRGB(rgb);
        return s_color$1.toStyleString();
    }
    function clamp(value, min, max) {
        if (value < min)
            value = min;
        else if (value > max)
            value = max;
        return value;
    }
    function clamp01(value) {
        if (isNaN(value))
            value = 0;
        else if (value > 1)
            value = 1;
        else if (value < 0)
            value = 0;
        return value;
    }
    function lerp(start, end, percent) {
        return (start + percent * (end - start));
    }
    function repeat(t, length) {
        return t - Math.floor(t / length) * length;
    }
    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    var s_vec2$4 = new Vec2();
    class GTweener {
        constructor() {
            this._startValue = new TweenValue();
            this._endValue = new TweenValue();
            this._value = new TweenValue();
            this._deltaValue = new TweenValue();
            this._reset();
        }
        setDelay(value) {
            this._delay = value;
            return this;
        }
        get delay() {
            return this._delay;
        }
        setDuration(value) {
            this._duration = value;
            return this;
        }
        get duration() {
            return this._duration;
        }
        setBreakpoint(value) {
            this._breakpoint = value;
            return this;
        }
        setEase(value) {
            this._easeType = value;
            return this;
        }
        get easeType() {
            return this._easeType;
        }
        setEasePeriod(value) {
            this._easePeriod = value;
            return this;
        }
        setEaseOvershootOrAmplitude(value) {
            this._easeOvershootOrAmplitude = value;
            return this;
        }
        setRepeat(repeat, yoyo) {
            this._repeat = repeat;
            this._yoyo = yoyo;
            return this;
        }
        get repeat() {
            return this._repeat;
        }
        setTimeScale(value) {
            this._timeScale = value;
            return this;
        }
        setSnapping(value) {
            this._snapping = value;
            return this;
        }
        setTarget(value, propType) {
            this._target = value;
            this._propType = propType;
            return this;
        }
        setActionType(action) {
            this.actionType = action;
        }
        get target() {
            return this._target;
        }
        setPath(value) {
            this._path = value;
            return this;
        }
        setUserData(value) {
            this._userData = value;
            return this;
        }
        get userData() {
            return this._userData;
        }
        onUpdate(callback, target) {
            this._onUpdate = callback;
            this._onUpdateCaller = target;
            return this;
        }
        onStart(callback, target) {
            this._onStart = callback;
            this._onStartCaller = target;
            return this;
        }
        onComplete(callback, target) {
            this._onComplete = callback;
            this._onCompleteCaller = target;
            return this;
        }
        get startValue() {
            return this._startValue;
        }
        get endValue() {
            return this._endValue;
        }
        get value() {
            return this._value;
        }
        get deltaValue() {
            return this._deltaValue;
        }
        get normalizedTime() {
            return this._normalizedTime;
        }
        get completed() {
            return this._ended != 0;
        }
        get allCompleted() {
            return this._ended == 1;
        }
        setPaused(paused) {
            this._paused = paused;
            return this;
        }
        /**
         * seek position of the tween, in seconds.
         */
        seek(time) {
            if (this._killed)
                return;
            this._elapsedTime = time;
            if (this._elapsedTime < this._delay) {
                if (this._started)
                    this._elapsedTime = this._delay;
                else
                    return;
            }
            this.update();
        }
        kill(complete) {
            if (this._killed)
                return;
            if (complete) {
                if (this._ended == 0) {
                    if (this._breakpoint >= 0)
                        this._elapsedTime = this._delay + this._breakpoint;
                    else if (this._repeat >= 0)
                        this._elapsedTime = this._delay + this._duration * (this._repeat + 1);
                    else
                        this._elapsedTime = this._delay + this._duration * 2;
                    this.update();
                }
                this.callCompleteCallback();
            }
            this._killed = true;
        }
        _to(start, end, duration, actonType) {
            this._valueSize = 1;
            this._startValue.x = start;
            this._endValue.x = end;
            this._value.x = start;
            this._duration = duration;
            this.actionType = actonType;
            return this;
        }
        _to2(start, start2, end, end2, duration, actonType) {
            this._valueSize = 2;
            this._startValue.x = start;
            this._endValue.x = end;
            this._startValue.y = start2;
            this._endValue.y = end2;
            this._value.x = start;
            this._value.y = start2;
            this._duration = duration;
            this.actionType = actonType;
            return this;
        }
        _to3(start, start2, start3, end, end2, end3, duration, actonType) {
            this._valueSize = 3;
            this._startValue.x = start;
            this._endValue.x = end;
            this._startValue.y = start2;
            this._endValue.y = end2;
            this._startValue.z = start3;
            this._endValue.z = end3;
            this._value.x = start;
            this._value.y = start2;
            this._value.z = start3;
            this._duration = duration;
            this.actionType = actonType;
            return this;
        }
        _to4(start, start2, start3, start4, end, end2, end3, end4, duration, actonType) {
            this._valueSize = 4;
            this._startValue.x = start;
            this._endValue.x = end;
            this._startValue.y = start2;
            this._endValue.y = end2;
            this._startValue.z = start3;
            this._endValue.z = end3;
            this._startValue.w = start4;
            this._endValue.w = end4;
            this._value.x = start;
            this._value.y = start2;
            this._value.z = start3;
            this._value.w = start4;
            this._duration = duration;
            this.actionType = actonType;
            return this;
        }
        _toColor(start, end, duration, actonType) {
            this._valueSize = 4;
            this._startValue.color = start;
            this._endValue.color = end;
            this._value.color = start;
            this._duration = duration;
            this.actionType = actonType;
            return this;
        }
        _shake(startX, startY, amplitude, duration, actonType) {
            this._valueSize = 5;
            this._startValue.x = startX;
            this._startValue.y = startY;
            this._startValue.w = amplitude;
            this._duration = duration;
            this.actionType = actonType;
            return this;
        }
        _init() {
            this._delay = 0;
            this._duration = 0;
            this._breakpoint = -1;
            this._easeType = EaseType.QuadOut;
            this._timeScale = 1;
            this._easePeriod = 0;
            this._easeOvershootOrAmplitude = 1.70158;
            this._snapping = false;
            this._repeat = 0;
            this._yoyo = false;
            this._valueSize = 0;
            this._started = false;
            this._paused = false;
            this._killed = false;
            this._elapsedTime = 0;
            this._normalizedTime = 0;
            this._ended = 0;
        }
        _reset() {
            this._target = null;
            this._propType = null;
            this._userData = null;
            this._path = null;
            this._onStart = this._onUpdate = this._onComplete = null;
            this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
        }
        _update(dt) {
            if (this._timeScale != 1)
                dt *= this._timeScale;
            if (dt == 0)
                return;
            if (this._ended != 0) //Maybe completed by seek
             {
                this.callCompleteCallback();
                this._killed = true;
                return;
            }
            this._elapsedTime += dt;
            this.update();
            if (this._ended != 0) {
                if (!this._killed) {
                    this.callCompleteCallback();
                    this._killed = true;
                }
            }
        }
        TweenFinish() {
            this._killed = true;
            this.callCompleteCallback();
        }
        update() {
            this._ended = 0;
            if (this._valueSize == 0) //DelayedCall
             {
                if (this._elapsedTime >= this._delay + this._duration)
                    this._ended = 1;
                return;
            }
            if (!this._started) {
                if (this._elapsedTime < this._delay)
                    return;
                this._started = true;
                this.callStartCallback();
                if (this._killed)
                    return;
            }
            var reversed = false;
            var tt = this._elapsedTime - this._delay;
            if (this._breakpoint >= 0 && tt >= this._breakpoint) {
                tt = this._breakpoint;
                this._ended = 2;
            }
            if (this._repeat != 0) {
                var round = Math.floor(tt / this._duration);
                tt -= this._duration * round;
                if (this._yoyo)
                    reversed = round % 2 == 1;
                if (this._repeat > 0 && this._repeat - round < 0) {
                    if (this._yoyo)
                        reversed = this._repeat % 2 == 1;
                    tt = this._duration;
                    this._ended = 1;
                }
            }
            else if (tt >= this._duration) {
                tt = this._duration;
                this._ended = 1;
            }
            this._normalizedTime = evaluateEase(this._easeType, reversed ? (this._duration - tt) : tt, this._duration, this._easeOvershootOrAmplitude, this._easePeriod);
            this._value.setZero();
            this._deltaValue.setZero();
            if (this._valueSize == 5) {
                if (this._ended == 0) {
                    var r = this._startValue.w * (1 - this._normalizedTime);
                    var rx = r * (Math.random() > 0.5 ? 1 : -1);
                    var ry = r * (Math.random() > 0.5 ? 1 : -1);
                    this._deltaValue.x = rx;
                    this._deltaValue.y = ry;
                    this._value.x = this._startValue.x + rx;
                    this._value.y = this._startValue.y + ry;
                }
                else {
                    this._value.x = this._startValue.x;
                    this._value.y = this._startValue.y;
                }
            }
            else if (this._path) {
                let pt = this._path.getPointAt(this._normalizedTime, s_vec2$4);
                if (this._snapping) {
                    pt.x = Math.round(pt.x);
                    pt.y = Math.round(pt.y);
                }
                this._deltaValue.x = pt.x - this._value.x;
                this._deltaValue.y = pt.y - this._value.y;
                this._value.x = pt.x;
                this._value.y = pt.y;
            }
            else {
                for (var i = 0; i < this._valueSize; i++) {
                    var n1 = this._startValue.getField(i);
                    var n2 = this._endValue.getField(i);
                    var f = n1 + (n2 - n1) * this._normalizedTime;
                    if (this._snapping)
                        f = Math.round(f);
                    this._deltaValue.setField(i, f - this._value.getField(i));
                    this._value.setField(i, f);
                }
            }
            if (this._target && this._propType) {
                if (this._propType instanceof Function) {
                    switch (this._valueSize) {
                        case 1:
                            this._propType.call(this._target, this._value.x);
                            break;
                        case 2:
                            this._propType.call(this._target, this._value.x, this._value.y);
                            break;
                        case 3:
                            this._propType.call(this._target, this._value.x, this._value.y, this._value.z);
                            break;
                        case 4:
                            this._propType.call(this._target, this._value.x, this._value.y, this._value.z, this._value.w);
                            break;
                        case 5:
                            this._propType.call(this._target, this._value.color);
                            break;
                        case 6:
                            this._propType.call(this._target, this._value.x, this._value.y);
                            break;
                    }
                }
                else {
                    if (this._valueSize == 5)
                        this._target[this._propType] = this._value.color;
                    else
                        this._target[this._propType] = this._value.x;
                }
            }
            this.callUpdateCallback();
        }
        callStartCallback() {
            if (this._onStart) {
                try {
                    this._onStart.call(this._onStartCaller, this);
                }
                catch (err) {
                    $.Msg("error in start callback > " + err);
                }
            }
        }
        callUpdateCallback() {
            if (this._onUpdate) {
                try {
                    this._onUpdate.call(this._onUpdateCaller, this);
                }
                catch (err) {
                    $.Msg("error in update callback > " + err);
                }
            }
        }
        callCompleteCallback() {
            if (this._onComplete) {
                try {
                    this._onComplete.call(this._onCompleteCaller, this);
                }
                catch (err) {
                    $.Msg("error in complete callback > " + err);
                }
            }
        }
        playNative() {
            let element;
            if (this.target && this.target.element) {
                element = this.target.element;
            }
            else if (this.target.target && this.target.target.element) {
                element = this.target.target.element;
            }
            if (element) {
                let endx = this.endValue.x;
                let endy = this.endValue.y;
                let csstween;
                switch (this.actionType) {
                    case ActionType.XY:
                        {
                            let newx = endx - this.startValue.x;
                            let newy = endy - this.startValue.y;
                            csstween = new CssTween("transform", `translate3d(${newx}px, ${newy}px, 0px)`, 4);
                            break;
                        }
                    case ActionType.Rotation:
                        {
                            csstween = new CssTween("pre-transform-rotate2d", `${endx}deg`, 0);
                            break;
                        }
                    case ActionType.Scale:
                        {
                            csstween = new CssTween("pre-transform-scale2d", `${endx}, ${endy}`, 0);
                            break;
                        }
                    case ActionType.Size:
                        {
                            let tween1 = new CssTween("width", `${endx}px`, 0);
                            let tween2 = new CssTween("height", `${endy}px`, 0);
                            let ease = getEasePanorama(this.easeType);
                            tween1.ease = ease;
                            tween1.delay = this.delay;
                            tween1.duration = this.duration;
                            tween1.tweener = this;
                            tween2.ease = ease;
                            tween2.delay = this.delay;
                            tween2.duration = this.duration;
                            tween2.tweener = this;
                            element.appendTween(tween1);
                            element.appendTween(tween2);
                            break;
                        }
                    case ActionType.Alpha:
                        {
                            csstween = new CssTween("opacity", `${endx}`, 0);
                            break;
                        }
                    case ActionType.Color:
                        {
                            csstween = new CssTween("background-color", `${convertToHtmlColor(this.endValue.color)}`, 0);
                            break;
                        }
                    case ActionType.Skew:
                        {
                            csstween = new CssTween("transform", `skew(${endx}deg, ${endy}deg)`, 0);
                            break;
                        }
                }
                if (csstween) {
                    csstween.ease = getEasePanorama(this.easeType);
                    csstween.delay = this.delay;
                    csstween.duration = this.duration;
                    csstween.tweener = this;
                    element.appendTween(csstween);
                }
            }
        }
    }
    class CssTween {
        constructor(v1, v2, v6) {
            this.propType = v1;
            this.propValue = v2;
            this.priority = v6;
            this.delay = 0;
            this.hasStarted = false;
        }
        get classBase() {
            return `FGUI_Transition_${this.propType}_${this.ease}`;
        }
        get classDuration() {
            return `FGUI_Transition_Duration_${Math.floor(this.duration * 100)}`;
        }
        get classDelay() {
            return `FGUI_Transition_Delay_${Math.floor(this.delay * 100)}`;
        }
        set duration(value) {
            let currentTime = Game.Time();
            this.endTime = currentTime + value + this.delay;
            this.startTime = currentTime + this.delay;
        }
        ;
        get duration() {
            return this.endTime - Game.Time();
        }
        tostring() {
            return `propType = ${this.propType}\npropValue = ${this.propValue}\ndelay = ${this.delay}\nduration = ${this.duration}\n`;
        }
        kill() {
            this.tweener.kill(true);
            TweenManager.returnTween(this.tweener);
            this.tweener = null;
        }
    }

    class TweenManager {
        static createTween() {
            var tweener = _tweenerPool.borrow();
            if (UIConfig.useNativeTransition == false) {
                if (!_inited) {
                    Timers.addUpdate(TweenManager.update);
                    _inited = true;
                }
                _activeTweens[_totalActiveTweens++] = tweener;
            }
            else {
                TweenManager._tmpTweens.push(tweener);
                if (!TweenManager._delayTimer) {
                    TweenManager._delayTimer = $.Schedule(0.01, TweenManager.DelayPlayTween);
                }
            }
            return tweener;
        }
        static DelayPlayTween() {
            TweenManager._delayTimer = null;
            for (const tweener of TweenManager._tmpTweens) {
                tweener.playNative();
                let element;
                if (tweener.target && tweener.target.element) {
                    element = tweener.target.element;
                }
                else if (tweener.target.target && tweener.target.target.element) {
                    element = tweener.target.target.element;
                }
                if (element && !TweenManager._elementSet.has(element)) {
                    TweenManager._elementSet.add(element);
                }
            }
            for (const element of TweenManager._elementSet) {
                element.playTweenComposed();
            }
            TweenManager._elementSet.clear();
            TweenManager._tmpTweens = [];
        }
        static isTweening(target, propType) {
            if (target == null)
                return false;
            var anyType = !propType;
            for (var i = 0; i < _totalActiveTweens; i++) {
                var tweener = _activeTweens[i];
                if (tweener && tweener.target == target && !tweener._killed
                    && (anyType || tweener._propType == propType))
                    return true;
            }
            return false;
        }
        static killTweens(target, completed, propType) {
            if (target == null)
                return false;
            var flag = false;
            var cnt = _totalActiveTweens;
            var anyType = !propType;
            for (var i = 0; i < cnt; i++) {
                var tweener = _activeTweens[i];
                if (tweener && tweener.target == target && !tweener._killed
                    && (anyType || tweener._propType == propType)) {
                    tweener.kill(completed);
                    flag = true;
                }
            }
            return flag;
        }
        static getTween(target, propType) {
            if (target == null)
                return null;
            var cnt = _totalActiveTweens;
            var anyType = !propType;
            for (var i = 0; i < cnt; i++) {
                var tweener = _activeTweens[i];
                if (tweener && tweener.target == target && !tweener._killed
                    && (anyType || tweener._propType == propType)) {
                    return tweener;
                }
            }
            return null;
        }
        static update() {
            var dt = Timers.deltaTime;
            var cnt = _totalActiveTweens;
            var freePosStart = -1;
            for (var i = 0; i < cnt; i++) {
                var tweener = _activeTweens[i];
                if (tweener == null) {
                    if (freePosStart == -1)
                        freePosStart = i;
                }
                else if (tweener._killed) {
                    _tweenerPool.returns(tweener);
                    _activeTweens[i] = null;
                    if (freePosStart == -1)
                        freePosStart = i;
                }
                else {
                    if (tweener._target && ('isDisposed' in tweener._target) && tweener._target.isDisposed)
                        tweener._killed = true;
                    else if (!tweener._paused)
                        tweener._update(dt);
                    if (freePosStart != -1) {
                        _activeTweens[freePosStart] = tweener;
                        _activeTweens[i] = null;
                        freePosStart++;
                    }
                }
            }
            if (freePosStart >= 0) {
                if (_totalActiveTweens != cnt) //new tweens added
                 {
                    var j = cnt;
                    cnt = _totalActiveTweens - cnt;
                    for (i = 0; i < cnt; i++)
                        _activeTweens[freePosStart++] = _activeTweens[j++];
                }
                _totalActiveTweens = freePosStart;
            }
        }
        static returnTween(tween) {
            _tweenerPool.returns(tween);
        }
    }
    TweenManager._tmpTweens = [];
    TweenManager._elementSet = new Set;
    var _activeTweens = new Array();
    var _tweenerPool = new Pool(GTweener, e => e._init(), e => e._reset());
    var _totalActiveTweens = 0;
    var _inited = false;

    class GTween {
        static to(start, end, duration, actionType) {
            return TweenManager.createTween()._to(start, end, duration, actionType);
        }
        static to2(start, start2, end, end2, duration, actionType) {
            return TweenManager.createTween()._to2(start, start2, end, end2, duration, actionType);
        }
        static to3(start, start2, start3, end, end2, end3, duration, actionType) {
            return TweenManager.createTween()._to3(start, start2, start3, end, end2, end3, duration, actionType);
        }
        static to4(start, start2, start3, start4, end, end2, end3, end4, duration, actionType) {
            return TweenManager.createTween()._to4(start, start2, start3, start4, end, end2, end3, end4, duration, actionType);
        }
        static toColor(start, end, duration, actionType) {
            return TweenManager.createTween()._toColor(start, end, duration, actionType);
        }
        static delayedCall(delay) {
            return TweenManager.createTween().setDelay(delay);
        }
        static shake(startX, startY, amplitude, duration, actionType) {
            return TweenManager.createTween()._shake(startX, startY, amplitude, duration, actionType);
        }
        static isTweening(target, propType) {
            return TweenManager.isTweening(target, propType);
        }
        static kill(target, complete, propType) {
            TweenManager.killTweens(target, complete, propType);
        }
        static getTween(target, propType) {
            return TweenManager.getTween(target, propType);
        }
    }
    GTween.catchCallbackExceptions = true;

    class GearLook extends GearBase {
        init() {
            this._default = {
                alpha: this._owner.alpha,
                rotation: this._owner.rotation,
                grayed: this._owner.grayed,
                touchable: this._owner.touchable
            };
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            var gv;
            if (!pageId)
                gv = this._default;
            else {
                gv = {};
                this._storage[pageId] = gv;
            }
            gv.alpha = buffer.readFloat();
            gv.rotation = buffer.readFloat();
            gv.grayed = buffer.readBool();
            gv.touchable = buffer.readBool();
        }
        apply() {
            var gv = this._storage[this._controller.selectedPageId] || this._default;
            if (this.allowTween) {
                this._owner._gearLocked = true;
                this._owner.grayed = gv.grayed;
                this._owner.touchable = gv.touchable;
                this._owner._gearLocked = false;
                if (this._tweenConfig._tweener) {
                    if (this._tweenConfig._tweener.endValue.x != gv.alpha || this._tweenConfig._tweener.endValue.y != gv.rotation) {
                        this._tweenConfig._tweener.kill(true);
                        this._tweenConfig._tweener = null;
                    }
                    else
                        return;
                }
                var a = gv.alpha != this._owner.alpha;
                var b = gv.rotation != this._owner.rotation;
                if (a || b) {
                    if (this._owner.checkGearController(0, this._controller))
                        this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                    this._tweenConfig._tweener = GTween.to2(this._owner.alpha, this._owner.rotation, gv.alpha, gv.rotation, this._tweenConfig.duration)
                        .setDelay(this._tweenConfig.delay)
                        .setEase(this._tweenConfig.easeType)
                        .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                        .setTarget(this)
                        .onUpdate(this.__tweenUpdate, this)
                        .onComplete(this.__tweenComplete, this);
                }
            }
            else {
                this._owner._gearLocked = true;
                this._owner.grayed = gv.grayed;
                this._owner.alpha = gv.alpha;
                this._owner.rotation = gv.rotation;
                this._owner.touchable = gv.touchable;
                this._owner._gearLocked = false;
            }
        }
        __tweenUpdate(tweener) {
            var flag = tweener.userData;
            this._owner._gearLocked = true;
            if ((flag & 1) != 0)
                this._owner.alpha = tweener.value.x;
            if ((flag & 2) != 0)
                this._owner.rotation = tweener.value.y;
            this._owner._gearLocked = false;
        }
        __tweenComplete() {
            if (this._tweenConfig._displayLockToken != 0) {
                this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                this._tweenConfig._displayLockToken = 0;
            }
            this._tweenConfig._tweener = null;
        }
        updateState() {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = {};
                this._storage[this._controller.selectedPageId] = gv;
            }
            gv.alpha = this._owner.alpha;
            gv.rotation = this._owner.rotation;
            gv.grayed = this._owner.grayed;
            gv.touchable = this._owner.touchable;
        }
    }

    class GearSize extends GearBase {
        init() {
            this._default = {
                width: this._owner.width,
                height: this._owner.height,
                scaleX: this._owner.scaleX,
                scaleY: this._owner.scaleY
            };
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            var gv;
            if (!pageId)
                gv = this._default;
            else {
                gv = {};
                this._storage[pageId] = gv;
            }
            gv.width = buffer.readInt();
            gv.height = buffer.readInt();
            gv.scaleX = buffer.readFloat();
            gv.scaleY = buffer.readFloat();
        }
        apply() {
            var gv = this._storage[this._controller.selectedPageId] || this._default;
            if (this.allowTween) {
                if (this._tweenConfig._tweener) {
                    if (this._tweenConfig._tweener.endValue.x != gv.width || this._tweenConfig._tweener.endValue.y != gv.height
                        || this._tweenConfig._tweener.endValue.z != gv.scaleX || this._tweenConfig._tweener.endValue.w != gv.scaleY) {
                        this._tweenConfig._tweener.kill(true);
                        this._tweenConfig._tweener = null;
                    }
                    else
                        return;
                }
                var a = gv.width != this._owner.width || gv.height != this._owner.height;
                var b = gv.scaleX != this._owner.scaleX || gv.scaleY != this._owner.scaleY;
                if (a || b) {
                    if (this._owner.checkGearController(0, this._controller))
                        this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                    this._tweenConfig._tweener = GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, gv.width, gv.height, gv.scaleX, gv.scaleY, this._tweenConfig.duration)
                        .setDelay(this._tweenConfig.delay)
                        .setEase(this._tweenConfig.easeType)
                        .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                        .setTarget(this)
                        .onUpdate(this.__tweenUpdate, this)
                        .onComplete(this.__tweenComplete, this);
                }
            }
            else {
                this._owner._gearLocked = true;
                this._owner.setSize(gv.width, gv.height, this._owner.checkGearController(1, this._controller));
                this._owner.setScale(gv.scaleX, gv.scaleY);
                this._owner._gearLocked = false;
            }
        }
        __tweenUpdate(tweener) {
            var flag = tweener.userData;
            this._owner._gearLocked = true;
            if ((flag & 1) != 0)
                this._owner.setSize(tweener.value.x, tweener.value.y, this._owner.checkGearController(1, this._controller));
            if ((flag & 2) != 0)
                this._owner.setScale(tweener.value.z, tweener.value.w);
            this._owner._gearLocked = false;
        }
        __tweenComplete() {
            if (this._tweenConfig._displayLockToken != 0) {
                this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                this._tweenConfig._displayLockToken = 0;
            }
            this._tweenConfig._tweener = null;
        }
        updateState() {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = {};
                this._storage[this._controller.selectedPageId] = gv;
            }
            gv.width = this._owner.width;
            gv.height = this._owner.height;
            gv.scaleX = this._owner.scaleX;
            gv.scaleY = this._owner.scaleY;
        }
        updateFromRelations(dx, dy) {
            if (this._controller == null || this._storage == null)
                return;
            for (var key in this._storage) {
                var gv = this._storage[key];
                gv.width += dx;
                gv.height += dy;
            }
            this._default.width += dx;
            this._default.height += dy;
            this.updateState();
        }
    }

    class GearText extends GearBase {
        init() {
            this._default = this._owner.text;
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            if (pageId == null)
                this._default = buffer.readS();
            else
                this._storage[pageId] = buffer.readS();
        }
        apply() {
            this._owner._gearLocked = true;
            var data = this._storage[this._controller.selectedPageId];
            if (data !== undefined)
                this._owner.text = data;
            else
                this._owner.text = this._default;
            this._owner._gearLocked = false;
        }
        updateState() {
            this._storage[this._controller.selectedPageId] = this._owner.text;
        }
    }

    class GearXY extends GearBase {
        init() {
            this._default = {
                x: this._owner.x,
                y: this._owner.y,
                px: this._owner.x / this._owner.parent.width,
                py: this._owner.y / this._owner.parent.height
            };
            this._storage = {};
        }
        addStatus(pageId, buffer) {
            var gv;
            if (!pageId)
                gv = this._default;
            else {
                gv = {};
                this._storage[pageId] = gv;
            }
            gv.x = buffer.readInt();
            gv.y = buffer.readInt();
        }
        addExtStatus(pageId, buffer) {
            var gv;
            if (!pageId)
                gv = this._default;
            else
                gv = this._storage[pageId];
            gv.px = buffer.readFloat();
            gv.py = buffer.readFloat();
        }
        apply() {
            var pt = this._storage[this._controller.selectedPageId] || this._default;
            var ex;
            var ey;
            if (this.positionsInPercent && this._owner.parent) {
                ex = pt.px * this._owner.parent.width;
                ey = pt.py * this._owner.parent.height;
            }
            else {
                ex = pt.x;
                ey = pt.y;
            }
            if (this.allowTween) {
                if (this._tweenConfig._tweener) {
                    if (this._tweenConfig._tweener.endValue.x != ex || this._tweenConfig._tweener.endValue.y != ey) {
                        this._tweenConfig._tweener.kill(true);
                        this._tweenConfig._tweener = null;
                    }
                    else
                        return;
                }
                var ox = this._owner.x;
                var oy = this._owner.y;
                if (ox != ex || oy != ey) {
                    if (this._owner.checkGearController(0, this._controller))
                        this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                    this._tweenConfig._tweener = GTween.to2(ox, oy, ex, ey, this._tweenConfig.duration)
                        .setDelay(this._tweenConfig.delay)
                        .setEase(this._tweenConfig.easeType)
                        .setTarget(this)
                        .onUpdate(this.__tweenUpdate, this)
                        .onComplete(this.__tweenComplete, this);
                }
            }
            else {
                this._owner._gearLocked = true;
                this._owner.setPosition(ex, ey);
                this._owner._gearLocked = false;
            }
        }
        __tweenUpdate(tweener) {
            this._owner._gearLocked = true;
            this._owner.setPosition(tweener.value.x, tweener.value.y);
            this._owner._gearLocked = false;
        }
        __tweenComplete() {
            if (this._tweenConfig._displayLockToken != 0) {
                this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                this._tweenConfig._displayLockToken = 0;
            }
            this._tweenConfig._tweener = null;
        }
        updateState() {
            var pt = this._storage[this._controller.selectedPageId];
            if (!pt) {
                pt = {};
                this._storage[this._controller.selectedPageId] = pt;
            }
            pt.x = this._owner.x;
            pt.y = this._owner.y;
            pt.px = this._owner.x / this._owner.parent.width;
            pt.py = this._owner.y / this._owner.parent.height;
        }
        updateFromRelations(dx, dy) {
            if (this._controller == null || this._storage == null || this.positionsInPercent)
                return;
            for (var key in this._storage) {
                var pt = this._storage[key];
                pt.x += dx;
                pt.y += dy;
            }
            this._default.x += dx;
            this._default.y += dy;
            this.updateState();
        }
    }

    class RelationItem {
        constructor(owner) {
            this._owner = owner;
            this._defs = new Array();
        }
        get owner() {
            return this._owner;
        }
        set target(value) {
            if (this._target != value) {
                if (this._target)
                    this.releaseRefTarget();
                this._target = value;
                if (this._target)
                    this.addRefTarget();
            }
        }
        get target() {
            return this._target;
        }
        add(relationType, usePercent) {
            if (relationType == RelationType.Size) {
                this.add(RelationType.Width, usePercent);
                this.add(RelationType.Height, usePercent);
                return;
            }
            var cnt = this._defs.length;
            for (var i = 0; i < cnt; i++) {
                if (this._defs[i].type == relationType)
                    return;
            }
            this.internalAdd(relationType, usePercent);
        }
        internalAdd(relationType, usePercent) {
            if (relationType == RelationType.Size) {
                this.internalAdd(RelationType.Width, usePercent);
                this.internalAdd(RelationType.Height, usePercent);
                return;
            }
            var info = new RelationDef();
            info.percent = usePercent;
            info.type = relationType;
            info.axis = (relationType <= RelationType.Right_Right || relationType == RelationType.Width || relationType >= RelationType.LeftExt_Left && relationType <= RelationType.RightExt_Right) ? 0 : 1;
            this._defs.push(info);
        }
        remove(relationType) {
            if (relationType == RelationType.Size) {
                this.remove(RelationType.Width);
                this.remove(RelationType.Height);
                return;
            }
            var dc = this._defs.length;
            for (var k = 0; k < dc; k++) {
                if (this._defs[k].type == relationType) {
                    this._defs.splice(k, 1);
                    break;
                }
            }
        }
        copy(source) {
            this.target = source.target;
            this._defs.length = 0;
            var cnt = source._defs.length;
            for (var i = 0; i < cnt; i++) {
                var info = source._defs[i];
                var info2 = new RelationDef();
                info2.copy(info);
                this._defs.push(info2);
            }
        }
        dispose() {
            if (this._target) {
                this.releaseRefTarget();
                this._target = null;
            }
        }
        get isEmpty() {
            return this._defs.length == 0;
        }
        applyOnSelfResized(dWidth, dHeight, applyPivot) {
            var cnt = this._defs.length;
            if (cnt == 0)
                return;
            var ox = this._owner.x;
            var oy = this._owner.y;
            for (var i = 0; i < cnt; i++) {
                var info = this._defs[i];
                switch (info.type) {
                    case RelationType.Center_Center:
                        this._owner.x -= (0.5 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;
                    case RelationType.Right_Center:
                    case RelationType.Right_Left:
                    case RelationType.Right_Right:
                        this._owner.x -= (1 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;
                    case RelationType.Middle_Middle:
                        this._owner.y -= (0.5 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                        break;
                    case RelationType.Bottom_Middle:
                    case RelationType.Bottom_Top:
                    case RelationType.Bottom_Bottom:
                        this._owner.y -= (1 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                        break;
                }
            }
            if (ox != this._owner.x || oy != this._owner.y) {
                ox = this._owner.x - ox;
                oy = this._owner.y - oy;
                this._owner.updateGearFromRelations(1, ox, oy);
                if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                    cnt = this._owner.parent._transitions.length;
                    for (var j = 0; j < cnt; j++) {
                        var trans = this._owner.parent._transitions[j];
                        trans.updateFromRelations(this._owner.id, ox, oy);
                    }
                }
            }
        }
        applyOnXYChanged(info, dx, dy) {
            var tmp;
            switch (info.type) {
                case RelationType.Left_Left:
                case RelationType.Left_Center:
                case RelationType.Left_Right:
                case RelationType.Center_Center:
                case RelationType.Right_Left:
                case RelationType.Right_Center:
                case RelationType.Right_Right:
                    this._owner.x += dx;
                    break;
                case RelationType.Top_Top:
                case RelationType.Top_Middle:
                case RelationType.Top_Bottom:
                case RelationType.Middle_Middle:
                case RelationType.Bottom_Top:
                case RelationType.Bottom_Middle:
                case RelationType.Bottom_Bottom:
                    this._owner.y += dy;
                    break;
                case RelationType.Width:
                case RelationType.Height:
                    break;
                case RelationType.LeftExt_Left:
                case RelationType.LeftExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth - dx;
                        this._owner.xMin = tmp + dx;
                    }
                    else
                        this._owner.width = this._owner._rawWidth - dx;
                    break;
                case RelationType.RightExt_Left:
                case RelationType.RightExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth + dx;
                        this._owner.xMin = tmp;
                    }
                    else
                        this._owner.width = this._owner._rawWidth + dx;
                    break;
                case RelationType.TopExt_Top:
                case RelationType.TopExt_Bottom:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.yMin;
                        this._owner.height = this._owner._rawHeight - dy;
                        this._owner.yMin = tmp + dy;
                    }
                    else
                        this._owner.height = this._owner._rawHeight - dy;
                    break;
                case RelationType.BottomExt_Top:
                case RelationType.BottomExt_Bottom:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.yMin;
                        this._owner.height = this._owner._rawHeight + dy;
                        this._owner.yMin = tmp;
                    }
                    else
                        this._owner.height = this._owner._rawHeight + dy;
                    break;
            }
        }
        applyOnSizeChanged(info) {
            var pos = 0, pivot = 0, delta = 0;
            var v, tmp;
            if (info.axis == 0) {
                if (this._target != this._owner.parent) {
                    pos = this._target.x;
                    if (this._target.pivotAsAnchor)
                        pivot = this._target.pivotX;
                }
                if (info.percent) {
                    if (this._targetWidth != 0)
                        delta = this._target._width / this._targetWidth;
                }
                else
                    delta = this._target._width - this._targetWidth;
            }
            else {
                if (this._target != this._owner.parent) {
                    pos = this._target.y;
                    if (this._target.pivotAsAnchor)
                        pivot = this._target.pivotY;
                }
                if (info.percent) {
                    if (this._targetHeight != 0)
                        delta = this._target._height / this._targetHeight;
                }
                else
                    delta = this._target._height - this._targetHeight;
            }
            switch (info.type) {
                case RelationType.Left_Left:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else if (pivot != 0)
                        this._owner.x += delta * (-pivot);
                    break;
                case RelationType.Left_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case RelationType.Left_Right:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else
                        this._owner.x += delta * (1 - pivot);
                    break;
                case RelationType.Center_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth * 0.5 - pos) * delta - this._owner._rawWidth * 0.5;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case RelationType.Right_Left:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else if (pivot != 0)
                        this._owner.x += delta * (-pivot);
                    break;
                case RelationType.Right_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case RelationType.Right_Right:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else
                        this._owner.x += delta * (1 - pivot);
                    break;
                case RelationType.Top_Top:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else if (pivot != 0)
                        this._owner.y += delta * (-pivot);
                    break;
                case RelationType.Top_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case RelationType.Top_Bottom:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else
                        this._owner.y += delta * (1 - pivot);
                    break;
                case RelationType.Middle_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight * 0.5 - pos) * delta - this._owner._rawHeight * 0.5;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case RelationType.Bottom_Top:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else if (pivot != 0)
                        this._owner.y += delta * (-pivot);
                    break;
                case RelationType.Bottom_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case RelationType.Bottom_Bottom:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else
                        this._owner.y += delta * (1 - pivot);
                    break;
                case RelationType.Width:
                    if (this._owner._underConstruct && this._owner == this._target.parent)
                        v = this._owner.sourceWidth - this._target.initWidth;
                    else
                        v = this._owner._rawWidth - this._targetWidth;
                    if (info.percent)
                        v = v * delta;
                    if (this._target == this._owner.parent) {
                        if (this._owner.pivotAsAnchor) {
                            tmp = this._owner.xMin;
                            this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                            this._owner.xMin = tmp;
                        }
                        else
                            this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                    }
                    else
                        this._owner.width = this._target._width + v;
                    break;
                case RelationType.Height:
                    if (this._owner._underConstruct && this._owner == this._target.parent)
                        v = this._owner.sourceHeight - this._target.initHeight;
                    else
                        v = this._owner._rawHeight - this._targetHeight;
                    if (info.percent)
                        v = v * delta;
                    if (this._target == this._owner.parent) {
                        if (this._owner.pivotAsAnchor) {
                            tmp = this._owner.yMin;
                            this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                            this._owner.yMin = tmp;
                        }
                        else
                            this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                    }
                    else
                        this._owner.height = this._target._height + v;
                    break;
                case RelationType.LeftExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (-pivot);
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;
                case RelationType.LeftExt_Right:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (1 - pivot);
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;
                case RelationType.RightExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                    else
                        v = delta * (-pivot);
                    this._owner.width = this._owner._rawWidth + v;
                    this._owner.xMin = tmp;
                    break;
                case RelationType.RightExt_Right:
                    tmp = this._owner.xMin;
                    if (info.percent) {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.width = pos + this._target._width - this._target._width * pivot +
                                    (this._owner.sourceWidth - pos - this._target.initWidth + this._target.initWidth * pivot) * delta;
                            else
                                this._owner.width = pos + (this._owner._rawWidth - pos) * delta;
                        }
                        else {
                            v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                            this._owner.width = this._owner._rawWidth + v;
                            this._owner.xMin = tmp;
                        }
                    }
                    else {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - pivot);
                            else
                                this._owner.width = this._owner._rawWidth + delta * (1 - pivot);
                        }
                        else {
                            v = delta * (1 - pivot);
                            this._owner.width = this._owner._rawWidth + v;
                            this._owner.xMin = tmp;
                        }
                    }
                    break;
                case RelationType.TopExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (-pivot);
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;
                case RelationType.TopExt_Bottom:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (1 - pivot);
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;
                case RelationType.BottomExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                    else
                        v = delta * (-pivot);
                    this._owner.height = this._owner._rawHeight + v;
                    this._owner.yMin = tmp;
                    break;
                case RelationType.BottomExt_Bottom:
                    tmp = this._owner.yMin;
                    if (info.percent) {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.height = pos + this._target._height - this._target._height * pivot +
                                    (this._owner.sourceHeight - pos - this._target.initHeight + this._target.initHeight * pivot) * delta;
                            else
                                this._owner.height = pos + (this._owner._rawHeight - pos) * delta;
                        }
                        else {
                            v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                            this._owner.height = this._owner._rawHeight + v;
                            this._owner.yMin = tmp;
                        }
                    }
                    else {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - pivot);
                            else
                                this._owner.height = this._owner._rawHeight + delta * (1 - pivot);
                        }
                        else {
                            v = delta * (1 - pivot);
                            this._owner.height = this._owner._rawHeight + v;
                            this._owner.yMin = tmp;
                        }
                    }
                    break;
            }
        }
        addRefTarget() {
            if (this._target != this._owner.parent)
                this._target.onEvent("pos_changed", this.__targetXYChanged, this);
            this._target.onEvent("size_changed", this.__targetSizeChanged, this);
            this._targetX = this._target.x;
            this._targetY = this._target.y;
            this._targetWidth = this._target._width;
            this._targetHeight = this._target._height;
        }
        releaseRefTarget() {
            if (this._target.element == null)
                return;
            this._target.off("pos_changed", this.__targetXYChanged, this);
            this._target.off("size_changed", this.__targetSizeChanged, this);
        }
        __targetXYChanged() {
            if (this._owner.relations.handling || this._owner.group && this._owner.group._updating) {
                this._targetX = this._target.x;
                this._targetY = this._target.y;
                return;
            }
            this._owner.relations.handling = this._target;
            var ox = this._owner.x;
            var oy = this._owner.y;
            var dx = this._target.x - this._targetX;
            var dy = this._target.y - this._targetY;
            var cnt = this._defs.length;
            for (var i = 0; i < cnt; i++) {
                this.applyOnXYChanged(this._defs[i], dx, dy);
            }
            this._targetX = this._target.x;
            this._targetY = this._target.y;
            if (ox != this._owner.x || oy != this._owner.y) {
                ox = this._owner.x - ox;
                oy = this._owner.y - oy;
                this._owner.updateGearFromRelations(1, ox, oy);
                if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                    cnt = this._owner.parent._transitions.length;
                    for (var j = 0; j < cnt; j++) {
                        var trans = this._owner.parent._transitions[j];
                        trans.updateFromRelations(this._owner.id, ox, oy);
                    }
                }
            }
            this._owner.relations.handling = null;
        }
        __targetSizeChanged() {
            if (this._owner.relations.handling) {
                this._targetWidth = this._target._width;
                this._targetHeight = this._target._height;
                return;
            }
            this._owner.relations.handling = this._target;
            var ox = this._owner.x;
            var oy = this._owner.y;
            var ow = this._owner._rawWidth;
            var oh = this._owner._rawHeight;
            var cnt = this._defs.length;
            for (var i = 0; i < cnt; i++) {
                this.applyOnSizeChanged(this._defs[i]);
            }
            this._targetWidth = this._target._width;
            this._targetHeight = this._target._height;
            if (ox != this._owner.x || oy != this._owner.y) {
                ox = this._owner.x - ox;
                oy = this._owner.y - oy;
                this._owner.updateGearFromRelations(1, ox, oy);
                if (this._owner.parent && this._owner.parent._transitions.length > 0) {
                    cnt = this._owner.parent._transitions.length;
                    for (var j = 0; j < cnt; j++) {
                        var trans = this._owner.parent._transitions[j];
                        trans.updateFromRelations(this._owner.id, ox, oy);
                    }
                }
            }
            if (ow != this._owner._rawWidth || oh != this._owner._rawHeight) {
                ow = this._owner._rawWidth - ow;
                oh = this._owner._rawHeight - oh;
                this._owner.updateGearFromRelations(2, ow, oh);
            }
            this._owner.relations.handling = null;
        }
    }
    class RelationDef {
        constructor() {
        }
        copy(source) {
            this.percent = source.percent;
            this.type = source.type;
            this.axis = source.axis;
        }
    }

    class Relations {
        constructor(owner) {
            this._owner = owner;
            this._items = [];
        }
        add(target, relationType, usePercent) {
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                if (item.target == target) {
                    item.add(relationType, usePercent);
                    return;
                }
            }
            var newItem = new RelationItem(this._owner);
            newItem.target = target;
            newItem.add(relationType, usePercent);
            this._items.push(newItem);
        }
        remove(target, relationType) {
            relationType = relationType || 0;
            var cnt = this._items.length;
            var i = 0;
            while (i < cnt) {
                var item = this._items[i];
                if (item.target == target) {
                    item.remove(relationType);
                    if (item.isEmpty) {
                        item.dispose();
                        this._items.splice(i, 1);
                        cnt--;
                    }
                    else
                        i++;
                }
                else
                    i++;
            }
        }
        contains(target) {
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                if (item.target == target)
                    return true;
            }
            return false;
        }
        clearFor(target) {
            var cnt = this._items.length;
            var i = 0;
            while (i < cnt) {
                var item = this._items[i];
                if (item.target == target) {
                    item.dispose();
                    this._items.splice(i, 1);
                    cnt--;
                }
                else
                    i++;
            }
        }
        clearAll() {
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                item.dispose();
            }
            this._items.length = 0;
        }
        copyFrom(source) {
            this.clearAll();
            var arr = source._items;
            var length = arr.length;
            for (var i = 0; i < length; i++) {
                var ri = arr[i];
                var item = new RelationItem(this._owner);
                item.copy(ri);
                this._items.push(item);
            }
        }
        dispose() {
            this.clearAll();
        }
        onOwnerSizeChanged(dWidth, dHeight, applyPivot) {
            if (this._items.length == 0)
                return;
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                item.applyOnSelfResized(dWidth, dHeight, applyPivot);
            }
        }
        get empty() {
            return this._items.length == 0;
        }
        setup(buffer, parentToChild) {
            var cnt = buffer.readByte();
            var target;
            for (var i = 0; i < cnt; i++) {
                var targetIndex = buffer.readShort();
                if (targetIndex == -1)
                    target = this._owner.parent;
                else if (parentToChild)
                    target = (this._owner).getChildAt(targetIndex);
                else
                    target = this._owner.parent.getChildAt(targetIndex);
                var newItem = new RelationItem(this._owner);
                newItem.target = target;
                this._items.push(newItem);
                var cnt2 = buffer.readByte();
                for (var j = 0; j < cnt2; j++) {
                    var rt = buffer.readByte();
                    var usePercent = buffer.readBool();
                    newItem.internalAdd(rt, usePercent);
                }
            }
        }
    }

    class UIConfig {
        static GetItemUrl(pkgName, fileName) {
            return UIConfig.ouputDir + fileName.replace(pkgName, pkgName + "/");
        }
    }
    //Default font name
    UIConfig.defaultFont = "defaultFont";
    //When a modal window is in front, the background becomes dark.
    UIConfig.modalLayerColor = new Color(0.2, 0.2, 0.2, 0.2);
    //Default button click sound
    UIConfig.buttonSound = null;
    UIConfig.buttonSoundVolumeScale = 1;
    //Default button click sound
    UIConfig.horizontalScrollBar = null;
    UIConfig.verticalScrollBar = null;
    //Scrolling step in pixels
    UIConfig.defaultScrollStep = 25;
    //Deceleration ratio of scrollpane when its in touch dragging.
    UIConfig.defaultScrollDecelerationRate = 0.967;
    //Default scrollbar display mode. Recommened visible for Desktop and Auto for mobile.
    UIConfig.defaultScrollBarDisplay = ScrollBarDisplayType.Visible;
    //Allow dragging the content to scroll. Recommeded true for mobile.
    UIConfig.defaultScrollTouchEffect = true;
    //The "rebound" effect in the scolling container. Recommeded true for mobile.
    UIConfig.defaultScrollBounceEffect = true;
    /**
    * 当滚动容器设置为“贴近ITEM”时，判定贴近到哪一个ITEM的滚动距离阀值。
    */
    UIConfig.defaultScrollSnappingThreshold = 0.1;
    /**
    * 当滚动容器设置为“页面模式”时，判定翻到哪一页的滚动距离阀值。
    */
    UIConfig.defaultScrollPagingThreshold = 0.3;
    //Resources for PopupMenu.
    UIConfig.popupMenu = null;
    //Resources for seperator of PopupMenu.
    UIConfig.popupMenu_seperator = null;
    //In case of failure of loading content for GLoader, use this sign to indicate an error.
    UIConfig.loaderErrorSign = null;
    //Resources for tooltips.
    UIConfig.tooltipsWin = null;
    //Max items displayed in combobox without scrolling.
    UIConfig.defaultComboBoxVisibleItemCount = 10;
    // Pixel offsets of finger to trigger scrolling.
    UIConfig.touchScrollSensitivity = 20;
    // Pixel offsets of finger to trigger dragging.
    UIConfig.touchDragSensitivity = 10;
    // Pixel offsets of mouse pointer to trigger dragging.
    UIConfig.clickDragSensitivity = 2;
    // When click the window, brings to front automatically.
    UIConfig.bringWindowToFrontOnClick = true;
    UIConfig.frameTimeForAsyncUIConstruction = 2;
    UIConfig.defaultLinkClass = "fgui-link";
    UIConfig.scaleLevel = 0;
    UIConfig.ouputDir = "file://{resources}/scripts/custom_game/fgui/";
    UIConfig.useNativeTransition = true;
    // let dpr = window.devicePixelRatio;
    // if (dpr > 3)
    //     UIConfig.scaleLevel = 3; //x4
    // else if (dpr > 2)
    //     UIConfig.scaleLevel = 2; //x3
    // else if (dpr > 1)
    //     UIConfig.scaleLevel = 1; //x2
    // else
    //     UIConfig.scaleLevel = 0;

    const PanelEventSet = new Set([
        "onactivate",
        "oncancel",
        "oncontextmenu",
        "ondblclick",
        "ondeselect",
        "oneconsetloaded",
        "onfilled",
        "onfindmatchend",
        "onfindmatchstart",
        "onfocus",
        "onblur",
        "ondescendantfocus",
        "ondescendantblur",
        "oninputsubmit",
        "onload",
        "onmouseactivate",
        "onmouseout",
        "onmouseover",
        "onmousemove",
        "onmovedown",
        "onmoveleft",
        "onmoveright",
        "onmoveup",
        "onnotfilled",
        "onpagesetupsuccess",
        "onpopupsdismissed",
        "onselect",
        "ontabforward",
        "ontabbackward",
        "ontextentrychange",
        "ontextentrysubmit",
        "onscrolledtobottom",
        "onscrolledtorightedge",
        "ontooltiploaded",
        "onvaluechanged"
    ]);
    const MouseOverStyle = "TouchHolder";
    class GObject extends EventDispatcher {
        constructor(name) {
            super();
            this._x = 0;
            this._y = 0;
            this._z = 0;
            this._alpha = 1;
            this._visible = true;
            this._touchable = true;
            this._scaleX = 1;
            this._scaleY = 1;
            this._skewX = 0;
            this._skewY = 0;
            this._pivotX = 0;
            this._pivotY = 0;
            this._sortingOrder = 0;
            this._internalVisible = true;
            this.minWidth = 0;
            this.minHeight = 0;
            this.maxWidth = 0;
            this.maxHeight = 0;
            this.sourceWidth = 0;
            this.sourceHeight = 0;
            this.initWidth = 0;
            this.initHeight = 0;
            /** @internal */
            this._width = 0;
            /** @internal */
            this._height = 0;
            /** @internal */
            this._rawWidth = 0;
            /** @internal */
            this._rawHeight = 0;
            /** @internal */
            this._sizePercentInGroup = 0;
            this._id = "" + gInstanceCounter++;
            this._name = name;
            this.panelName = name;
            this.createElement();
            this._element.$owner = this;
            this._relations = new Relations(this);
            this._gears = new Array(10);
            this.touchAction = 0;
            this._updateRegisted = false;
            this._pivotStr = "0% 0%";
            this._registedEvents = new Map();
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get x() {
            return this._x;
        }
        set x(value) {
            this.setPosition(value, this._y);
        }
        get y() {
            return this._y;
        }
        set y(value) {
            this.setPosition(this._x, value);
        }
        get z() {
            return this._z;
        }
        set z(value) {
            this.setPosition(this._x, this._y, value);
        }
        setPosition(xv, yv, zv, force) {
            if (this._x != xv || this._y != yv || force) {
                var dx = xv - this._x;
                var dy = yv - this._y;
                this._x = xv;
                this._y = yv;
                if (zv != null)
                    this._z = zv;
                this.handlePositionChanged();
                if (this instanceof GGroup)
                    this.moveChildren(dx, dy);
                this.updateGear(1);
                if (this._parent && !("setVirtual" in this._parent) /*not list*/) {
                    this._parent.setBoundsChangedFlag();
                    if (this._group)
                        this._group.setBoundsChangedFlag(true);
                    this.emit.call(this, "pos_changed");
                }
            }
        }
        get xMin() {
            return this._pivotAsAnchor ? (this._x - this._width * this._pivotX) : this._x;
        }
        set xMin(value) {
            if (this._pivotAsAnchor)
                this.setPosition(value + this._width * this._pivotX, this._y);
            else
                this.setPosition(value, this._y);
        }
        get yMin() {
            return this._pivotAsAnchor ? (this._y - this._height * this._pivotY) : this._y;
        }
        set yMin(value) {
            if (this._pivotAsAnchor)
                this.setPosition(this._x, value + this._height * this._pivotY);
            else
                this.setPosition(this._x, value);
        }
        center(restraint) {
            var r = this._parent;
            this.setPosition(Math.floor((r.width - this.width) / 2), Math.floor((r.height - this.height) / 2));
            if (restraint) {
                this.addRelation(r, RelationType.Center_Center);
                this.addRelation(r, RelationType.Middle_Middle);
            }
        }
        get width() {
            return this._width;
        }
        set width(value) {
            this.setSize(value, this._rawHeight);
        }
        get height() {
            return this._height;
        }
        set height(value) {
            this.setSize(this._rawWidth, value);
        }
        setFullScreen() {
            var radio = $.UIObjectFactory.getAspectRadio();
            this.width = Game.GetScreenWidth() * radio;
            this.height = Game.GetScreenHeight() * radio;
        }
        setSize(wv, hv, ignorePivot) {
            if (this._rawWidth != wv || this._rawHeight != hv) {
                this._rawWidth = wv;
                this._rawHeight = hv;
                if (wv < this.minWidth)
                    wv = this.minWidth;
                if (hv < this.minHeight)
                    hv = this.minHeight;
                if (this.maxWidth > 0 && wv > this.maxWidth)
                    wv = this.maxWidth;
                if (this.maxHeight > 0 && hv > this.maxHeight)
                    hv = this.maxHeight;
                var dWidth = wv - this._width;
                var dHeight = hv - this._height;
                this._width = wv;
                this._height = hv;
                this.handleSizeChanged();
                if (this._pivotX != 0 || this._pivotY != 0) {
                    if (!this._pivotAsAnchor) {
                        if (!ignorePivot)
                            this.setPosition(this.x - this._pivotX * dWidth, this.y - this._pivotY * dHeight);
                        else
                            this.handlePositionChanged();
                    }
                    else
                        this.handlePositionChanged();
                }
                if (this instanceof GGroup)
                    this.resizeChildren(dWidth, dHeight);
                this.updateGear(2);
                if (this._parent) {
                    this._relations.onOwnerSizeChanged(dWidth, dHeight, this._pivotAsAnchor || !ignorePivot);
                    this._parent.setBoundsChangedFlag();
                    if (this._group)
                        this._group.setBoundsChangedFlag();
                }
                this.emit.call(this, "size_changed");
            }
        }
        setSizeDirectly(wv, hv) {
            this._rawWidth = wv;
            this._rawHeight = hv;
            if (wv < 0)
                wv = 0;
            if (hv < 0)
                hv = 0;
            this._width = wv;
            this._height = hv;
        }
        get actualWidth() {
            return this.width * Math.abs(this._scaleX);
        }
        get actualHeight() {
            return this.height * Math.abs(this._scaleY);
        }
        get scaleX() {
            return this._scaleX;
        }
        set scaleX(value) {
            this.setScale(value, this._scaleY);
        }
        get scaleY() {
            return this._scaleY;
        }
        set scaleY(value) {
            this.setScale(this._scaleX, value);
        }
        setScale(sx, sy) {
            if (this._scaleX != sx || this._scaleY != sy) {
                this._scaleX = sx;
                this._scaleY = sy;
                this.handleScaleChanged();
                this.updateGear(2);
            }
        }
        get skewX() {
            return this._skewX;
        }
        set skewX(value) {
            this.setSkew(value, this._skewY);
        }
        get skewY() {
            return this._skewY;
        }
        set skewY(value) {
            this.setSkew(this._skewX, value);
        }
        setSkew(sx, sy) {
            if (this._skewX != sx || this._skewY != sy) {
                this._skewX = sx;
                this._skewY = sy;
                //todo skew 好像没啥实现的必要
            }
        }
        get pivotX() {
            return this._pivotX;
        }
        set pivotX(value) {
            this.setPivot(value, this._pivotY);
        }
        get pivotY() {
            return this._pivotY;
        }
        set pivotY(value) {
            this.setPivot(this._pivotX, value);
        }
        setPivot(xv, yv, asAnchor) {
            asAnchor = asAnchor || false;
            // if (this._pivotX != xv || this._pivotY != yv || this._pivotAsAnchor != asAnchor) {
            this._pivotX = xv;
            this._pivotY = yv;
            this._pivotAsAnchor = asAnchor;
            this._pivotStr = `${xv * 100}% ${yv * 100}%`;
            this._element.setPivot(xv, yv);
            this.handlePositionChanged();
            // }
        }
        getPivotPercent() {
            return this._pivotStr;
        }
        get pivotAsAnchor() {
            return this._pivotAsAnchor;
        }
        get touchable() {
            return this._touchable;
        }
        set touchable(value) {
            if (this._touchable != value) {
                this._touchable = value;
                this.handleTouchableChanged();
                this.updateGear(3);
            }
        }
        get grayed() {
            return this._grayed;
        }
        set grayed(value) {
            if (this._grayed != value) {
                this._grayed = value;
                this.handleGrayedChanged();
                this.updateGear(3);
            }
        }
        get enabled() {
            return !this._grayed && this._touchable;
        }
        set enabled(value) {
            this.grayed = !value;
            this.touchable = value;
        }
        get rotation() {
            return this._element.rotation;
        }
        set rotation(value) {
            if (this._element.rotation != value) {
                this._element.rotation = value;
                this.updateGear(3);
            }
        }
        setRotation(value) {
            if (this._element.rotation != value) {
                this._element.rotation = value;
                this.updateGear(3);
            }
        }
        get alpha() {
            return this._alpha;
        }
        set alpha(value) {
            if (this._alpha != value) {
                this._alpha = value;
                this.handleAlphaChanged();
                this.updateGear(3);
            }
        }
        get visible() {
            return this._visible;
        }
        set visible(value) {
            if (this._visible != value) {
                this._visible = value;
                this.handleVisibleChanged();
                if (this._parent)
                    this._parent.setBoundsChangedFlag();
                if (this._group && this._group.excludeInvisibles)
                    this._group.setBoundsChangedFlag();
            }
        }
        get internalVisible() {
            return this._internalVisible && (!this._group || this._group.internalVisible);
        }
        get internalVisible2() {
            return this._visible && (!this._group || this._group.internalVisible2);
        }
        get internalVisible3() {
            return this._internalVisible && this._visible;
        }
        get sortingOrder() {
            return this._sortingOrder;
        }
        set sortingOrder(value) {
            if (value < 0)
                value = 0;
            if (this._sortingOrder != value) {
                var old = this._sortingOrder;
                this._sortingOrder = value;
                if (this._parent)
                    this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
            }
        }
        get focusable() {
            return this._element.focusable;
        }
        set focusable(value) {
            this._element.focusable = value;
        }
        get tabStop() {
            return this._element.tabStop;
        }
        set tabStop(value) {
            this._element.tabStop = value;
        }
        get focused() {
            return this._element.focused;
        }
        requestFocus(byKey) {
            if (this.onStage)
                this._element.stage.setFocus(this._element, byKey);
        }
        get cursor() {
            return this._element.cursor;
        }
        set cursor(value) {
            this._element.cursor = value;
        }
        get onStage() {
            return this._element.onStage;
        }
        get resourceURL() {
            if (this.packageItem)
                return UIConfig.ouputDir + this.packageItem.owner.name + "/" + this.packageItem.owner.id + this.packageItem.id;
            else
                return null;
        }
        set group(value) {
            if (this._group != value) {
                if (this._group)
                    this._group.setBoundsChangedFlag();
                this._group = value;
                if (this._group)
                    this._group.setBoundsChangedFlag();
            }
        }
        get group() {
            return this._group;
        }
        getGear(index) {
            var gear = this._gears[index];
            if (gear == null)
                this._gears[index] = gear = createGear(this, index);
            return gear;
        }
        updateGear(index) {
            if (this._underConstruct || this._gearLocked)
                return;
            var gear = this._gears[index];
            if (gear && gear.controller)
                gear.updateState();
        }
        checkGearController(index, c) {
            return this._gears[index] && this._gears[index].controller == c;
        }
        updateGearFromRelations(index, dx, dy) {
            if (this._gears[index])
                this._gears[index].updateFromRelations(dx, dy);
        }
        addDisplayLock() {
            var gearDisplay = (this._gears[0]);
            if (gearDisplay && gearDisplay.controller) {
                var ret = gearDisplay.addLock();
                this.checkGearDisplay();
                return ret;
            }
            else
                return 0;
        }
        releaseDisplayLock(token) {
            var gearDisplay = (this._gears[0]);
            if (gearDisplay && gearDisplay.controller) {
                gearDisplay.releaseLock(token);
                this.checkGearDisplay();
            }
        }
        checkGearDisplay() {
            if (this._handlingController)
                return;
            var connected = this._gears[0] == null || (this._gears[0]).connected;
            if (this._gears[8])
                connected = this._gears[8].evaluate(connected);
            if (connected != this._internalVisible) {
                this._internalVisible = connected;
                if (this._parent) {
                    this._parent.childStateChanged(this);
                    if (this._group && this._group.excludeInvisibles)
                        this._group.setBoundsChangedFlag();
                }
            }
        }
        get relations() {
            return this._relations;
        }
        addRelation(target, relationType, usePercent) {
            this._relations.add(target, relationType, usePercent);
        }
        removeRelation(target, relationType) {
            this._relations.remove(target, relationType);
        }
        get element() {
            return this._element;
        }
        get parent() {
            return this._parent;
        }
        set parent(val) {
            this._parent = val;
        }
        removeFromParent(dispose) {
            if (this._parent) {
                this._parent.removeChild(this, dispose);
            }
            else {
                //已经被移除过了 直接native delete
                if (dispose) {
                    this.dispose();
                }
            }
        }
        get asCom() {
            return this;
        }
        get text() {
            return null;
        }
        set text(value) {
        }
        get icon() {
            return null;
        }
        set icon(value) {
        }
        get treeNode() {
            return this._treeNode;
        }
        get isDisposed() {
            return this._element == null;
        }
        clearAllPanelEvent() {
            if (this._updateRegisted) {
                this._updateRegisted = false;
                GObject.UnregisterUpdate(this);
            }
        }
        clearTouchEvent() {
            this.clearAllPanelEvent();
            if (this.element) {
                for (let [evt, any] of this._registedEvents) {
                    this.UnregisterEventHandler(evt, this.element.nativePanel);
                }
            }
        }
        dispose() {
            this.clearTouchEvent();
            this._relations.dispose();
            this._element.dispose();
            this._element = null;
            for (let i = 0; i < 10; i++) {
                let gear = this._gears[i];
                if (gear)
                    gear.dispose();
            }
        }
        get draggable() {
            return this._draggable;
        }
        set draggable(value) {
            if (this._draggable != value) {
                this._draggable = value;
                this.initDrag();
            }
        }
        localToGlobal(ax, ay, result) {
            ax = ax || 0;
            ay = ay || 0;
            if (this._pivotAsAnchor) {
                ax += this._pivotX * this._width;
                ay += this._pivotY * this._height;
            }
            return this._element.localToGlobal(ax, ay, result);
        }
        globalToLocal(ax, ay, result) {
            ax = ax || 0;
            ay = ay || 0;
            result = this._element.globalToLocal(ax, ay, result);
            if (this._pivotAsAnchor) {
                result.x -= this._pivotX * this._width;
                result.y -= this._pivotY * this._height;
            }
            return result;
        }
        localToGlobalRect(ax, ay, aWidth, aHeight, result) {
            if (!result)
                result = new Rect();
            this.localToGlobal(ax, ay, s_vec2$3);
            result.x = s_vec2$3.x;
            result.y = s_vec2$3.y;
            this.localToGlobal(ax + aWidth, ay + aHeight, s_vec2$3);
            result.xMax = s_vec2$3.x;
            result.yMax = s_vec2$3.y;
            return result;
        }
        globalToLocalRect(ax, ay, aWidth, aHeight, result) {
            if (!result)
                result = new Rect();
            this.globalToLocal(ax, ay, s_vec2$3);
            result.x = s_vec2$3.x;
            result.y = s_vec2$3.y;
            this.globalToLocal(ax + aWidth, ay + aHeight, s_vec2$3);
            result.xMax = s_vec2$3.x;
            result.yMax = s_vec2$3.y;
            return result;
        }
        transformRect(ax, ay, aWidth, aHeight, targetSpace, result) {
            if (!result)
                result = new Rect();
            this.localToGlobal(ax, ay, s_vec2$3);
            targetSpace.globalToLocal(s_vec2$3.x, s_vec2$3.y, s_vec2$3);
            result.x = s_vec2$3.x;
            result.y = s_vec2$3.y;
            this.localToGlobal(ax + aWidth, ay + aHeight, s_vec2$3);
            targetSpace.globalToLocal(s_vec2$3.x, s_vec2$3.y, s_vec2$3);
            result.xMax = s_vec2$3.x;
            result.yMax = s_vec2$3.y;
            return result;
        }
        handleControllerChanged(c) {
            this._handlingController = true;
            for (var i = 0; i < 10; i++) {
                var gear = this._gears[i];
                if (gear && gear.controller == c)
                    gear.apply();
            }
            this._handlingController = false;
            this.checkGearDisplay();
        }
        createElement() {
            this._element = new UIElement();
            this._element.$owner = this;
            this._element.initElement();
        }
        handlePositionChanged() {
            var xv = this._x;
            var yv = this._y;
            if (this._pivotAsAnchor) {
                xv -= this._pivotX * this._width;
                yv -= this._pivotY * this._height;
            }
            this._element.setPosition(xv, yv);
        }
        handleSizeChanged() {
            this._element.setSize(this._width, this._height);
        }
        handleScaleChanged() {
            this._element.setScale(this._scaleX, this._scaleY);
        }
        handleGrayedChanged() {
            this._element.grayed = this._grayed;
        }
        handleAlphaChanged() {
            this._element.alpha = this._alpha;
        }
        handleTouchableChanged() {
            this._element.touchable = this._touchable;
        }
        handleVisibleChanged() {
            this._element.visible = this.internalVisible2;
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Text:
                    return this.text;
                case ObjectPropID.Icon:
                    return this.icon;
                case ObjectPropID.Color:
                    return null;
                case ObjectPropID.OutlineColor:
                    return null;
                case ObjectPropID.Playing:
                    return false;
                case ObjectPropID.Frame:
                    return 0;
                case ObjectPropID.DeltaTime:
                    return 0;
                case ObjectPropID.TimeScale:
                    return 1;
                case ObjectPropID.FontSize:
                    return 0;
                case ObjectPropID.Selected:
                    return false;
                default:
                    return undefined;
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Text:
                    this.text = value;
                    break;
                case ObjectPropID.Icon:
                    this.icon = value;
                    break;
            }
        }
        constructFromResource() {
        }
        setup_beforeAdd(buffer, beginPos) {
            buffer.seek(beginPos, 0);
            buffer.skip(5);
            var f1;
            var f2;
            this._id = buffer.readS();
            this._name = buffer.readS();
            f1 = buffer.readInt();
            f2 = buffer.readInt();
            this.setPosition(f1, f2);
            if (buffer.readBool()) {
                this.initWidth = buffer.readInt();
                this.initHeight = buffer.readInt();
                this.setSize(this.initWidth, this.initHeight, true);
            }
            if (buffer.readBool()) {
                this.minWidth = buffer.readInt();
                this.maxWidth = buffer.readInt();
                this.minHeight = buffer.readInt();
                this.maxHeight = buffer.readInt();
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setScale(f1, f2);
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setSkew(f1, f2);
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setPivot(f1, f2, buffer.readBool());
            }
            f1 = buffer.readFloat();
            if (f1 != 1)
                this.alpha = f1;
            f1 = buffer.readFloat();
            if (f1 != 0)
                this.rotation = f1;
            if (!buffer.readBool())
                this.visible = false;
            if (!buffer.readBool())
                this.touchable = false;
            if (buffer.readBool())
                this.grayed = true;
            buffer.readByte();
            //this.blendMode = BlendModeTranslate[bm] || NormalBlending;
            buffer.readByte();
            var str = buffer.readS();
            if (str != null)
                this.data = str;
        }
        setup_afterAdd(buffer, beginPos) {
            buffer.seek(beginPos, 1);
            buffer.readS();
            var groupId = buffer.readShort();
            if (groupId >= 0)
                this.group = this.parent.getChildAt(groupId);
            buffer.seek(beginPos, 2);
            var cnt = buffer.readShort();
            for (var i = 0; i < cnt; i++) {
                var nextPos = buffer.readShort();
                nextPos += buffer.pos;
                var gear = this.getGear(buffer.readByte());
                gear.setup(buffer);
                buffer.pos = nextPos;
            }
        }
        GetNativePanel() {
            if (this.element != null) {
                return this.element.nativePanel;
            }
        }
        RegisterEventHandler(evt, func) {
            if (!this._registedEvents.has(evt)) {
                var handler = $.RegisterEventHandler(evt, this.GetNativePanel(), func);
                this._registedEvents.set(evt, handler);
            }
        }
        UnregisterEventHandler(evt, panel) {
            let handler = this._registedEvents.get(evt);
            if (handler) {
                $.UnregisterEventHandler(evt, panel, handler);
                this._registedEvents.delete(evt);
            }
        }
        //drag support
        //-------------------------------------------------------------------
        initDrag() {
            var nativePanel = this.GetNativePanel();
            if (this._draggable) {
                nativePanel.SetDraggable(true);
                this.RegisterEventHandler('DragEnter', (panelID, dragged) => {
                    this.emit.call(this, 'drag_enter');
                    return true;
                });
                this.RegisterEventHandler('DragDrop', (panelID, dragged) => {
                    this.emit.call(this, 'drag_drop');
                    return true;
                });
                this.RegisterEventHandler('DragLeave', (panelID, dragged) => {
                    this.emit.call(this, 'drag_leave');
                    return true;
                });
                this.RegisterEventHandler('DragStart', (panelID, settings) => {
                    settings.displayPanel = nativePanel;
                    GObject.draggingObject = this;
                    this.data = settings;
                    this.emit.call(this, 'drag_start');
                    return true;
                });
                this.RegisterEventHandler('DragEnd', (panelID, dragged) => {
                    this.data = dragged;
                    this.emit.call(this, 'drag_end');
                    GObject.draggingObject = null;
                    return true;
                });
            }
            else {
                nativePanel.SetDraggable(false);
                this.UnregisterEventHandler('DragEnter', nativePanel);
                this.UnregisterEventHandler('DragDrop', nativePanel);
                this.UnregisterEventHandler('DragLeave', nativePanel);
                this.UnregisterEventHandler('DragStart', nativePanel);
                this.UnregisterEventHandler('DragEnd', nativePanel);
            }
        }
        setPanelEvent(evt, callback) {
            this.element.nativePanel.ClearPanelEvent(evt);
            this.element.nativePanel.SetPanelEvent(evt, callback);
        }
        clearPanelEvent(evt) {
            this.element.nativePanel.ClearPanelEvent(evt);
        }
        addEvent(evt, callback, caller) {
            this.on(evt, callback, caller);
            if (evt == "onTouchBegin" || evt == "onTouchMove" || evt == "onTouchEnd") {
                if (this._updateRegisted == false) {
                    this._updateRegisted = true;
                    GObject.RegisterUpdate(this);
                    let nativePanel = this.GetNativePanel();
                    if (nativePanel) {
                        nativePanel.AddClass(MouseOverStyle);
                    }
                }
            }
            else if (PanelEventSet.has(evt)) {
                //直接this.emit分发
                this.element.nativePanel.SetPanelEvent(evt, this.emit.bind(caller, evt));
            }
        }
        removeEvent(evt, callback, caller) {
            this.off(evt, callback, caller);
        }
        //同一对象 同一事件最多绑定一个函数
        onEvent(evt, callback, caller) {
            this.addEvent(evt, callback.bind(caller, this), this);
        }
        offEvent(evt, callback, caller) {
            this.removeEvent(evt, callback, caller);
        }
        callEvent(evt, arg) {
            this.emit(evt, arg);
        }
        isInsideObject(gpos) {
            let nativePanel = this.GetNativePanel();
            if (nativePanel && nativePanel.BHasHoverStyle()) {
                return true;
            }
            return false;
        }
        SetNativeParent(panel) {
            this._element.nativePanel.SetParent(panel);
        }
        SetParent(obj) {
            if (this.parent)
                this.parent.removeChild(this);
            obj.addChild(this);
        }
        processUpdate(isLeftDown) {
            if (isLeftDown) {
                if (this.touchAction == 1) {
                    this.callEvent('onTouchMove');
                }
                if (this.isInsideObject()) {
                    if (this.touchAction == 0) {
                        this.touchAction = 1;
                        this.callEvent('onTouchBegin');
                    }
                }
            }
            else {
                if (this.touchAction == 1) {
                    this.callEvent('onTouchEnd');
                    this.touchAction = 0;
                }
            }
        }
        AddClass(clsName) {
            if (this._element && this._element.nativePanel) {
                this._element.nativePanel.RemoveClass(clsName);
                this._element.nativePanel.AddClass(clsName);
            }
        }
        RemoveClass(clsName) {
            if (this._element && this._element.nativePanel) {
                this._element.nativePanel.RemoveClass(clsName);
            }
        }
        static RegisterUpdate(thisobj) {
            GObject.s_AllUpdateObj.add(thisobj);
        }
        static UnregisterUpdate(thisobj) {
            GObject.s_AllUpdateObj.delete(thisobj);
        }
        static OnGlobalUpdate() {
            $.Schedule(0.01, GObject.OnGlobalUpdate);
            if (GObject.s_AllUpdateObj.size == 0) {
                return;
            }
            let isLeftDown = GameUI.IsMouseDown(0);
            for (let obj of GObject.s_AllUpdateObj) {
                obj.processUpdate(isLeftDown);
            }
        }
        static InitGlobalUpdate() {
            GObject.s_AllUpdateObj = new Set();
            GObject.OnGlobalUpdate();
            GameUI.SetMouseCallback((eventName, arg) => {
                if (GObject.s_AllUpdateObj.size == 0) {
                    return;
                }
                let wheelScroll = 0;
                if (eventName == 'wheeled') {
                    wheelScroll = arg;
                }
                if (wheelScroll != 0) {
                    for (let obj of GObject.s_AllUpdateObj) {
                        obj.callEvent('onMouseWheel', wheelScroll);
                    }
                }
                let captureMouse = false;
                return captureMouse;
            });
        }
    }
    let GearClasses = [
        GearDisplay, GearXY, GearSize, GearLook, GearColor,
        GearAnimation, GearText, GearIcon, GearDisplay2, GearFontSize
    ];
    function createGear(owner, index) {
        let ret = new (GearClasses[index])();
        ret._owner = owner;
        return ret;
    }
    var s_vec2$3 = new Vec2();
    var gInstanceCounter = 0;
    var constructingDepth = { n: 0 };
    GObject.InitGlobalUpdate();

    class GGroup extends GObject {
        constructor(name) {
            super(name);
            this._layout = 0;
            this._lineGap = 0;
            this._columnGap = 0;
            this._mainGridIndex = -1;
            this._mainGridMinSize = 50;
            this._mainChildIndex = -1;
            this._totalSize = 0;
            this._numChildren = 0;
            /** @internal */
            this._updating = 0;
        }
        createElement() {
            super.createElement();
            this._element.setNotInteractable();
        }
        dispose() {
            this._boundsChanged = false;
            super.dispose();
        }
        get layout() {
            return this._layout;
        }
        set layout(value) {
            if (this._layout != value) {
                this._layout = value;
                this.setBoundsChangedFlag();
            }
        }
        get lineGap() {
            return this._lineGap;
        }
        set lineGap(value) {
            if (this._lineGap != value) {
                this._lineGap = value;
                this.setBoundsChangedFlag(true);
            }
        }
        get columnGap() {
            return this._columnGap;
        }
        set columnGap(value) {
            if (this._columnGap != value) {
                this._columnGap = value;
                this.setBoundsChangedFlag(true);
            }
        }
        get excludeInvisibles() {
            return this._excludeInvisibles;
        }
        set excludeInvisibles(value) {
            if (this._excludeInvisibles != value) {
                this._excludeInvisibles = value;
                this.setBoundsChangedFlag();
            }
        }
        get autoSizeDisabled() {
            return this._autoSizeDisabled;
        }
        set autoSizeDisabled(value) {
            this._autoSizeDisabled = value;
        }
        get mainGridMinSize() {
            return this._mainGridMinSize;
        }
        set mainGridMinSize(value) {
            if (this._mainGridMinSize != value) {
                this._mainGridMinSize = value;
                this.setBoundsChangedFlag();
            }
        }
        get mainGridIndex() {
            return this._mainGridIndex;
        }
        set mainGridIndex(value) {
            if (this._mainGridIndex != value) {
                this._mainGridIndex = value;
                this.setBoundsChangedFlag();
            }
        }
        setBoundsChangedFlag(positionChangedOnly) {
            if (this._updating == 0 && this._parent) {
                if (!positionChangedOnly)
                    this._percentReady = false;
                if (!this._boundsChanged) {
                    this._boundsChanged = true;
                    if (this._layout != GroupLayoutType.None)
                        Timers.callLater(this.ensureBoundsCorrect, this);
                }
            }
        }
        ensureBoundsCorrect() {
            if (this._parent == null || !this._boundsChanged)
                return;
            this._boundsChanged = false;
            if (this._layout == 0)
                this.updateBounds();
            else {
                if (this._autoSizeDisabled)
                    this.resizeChildren(0, 0);
                else {
                    this.handleLayout();
                    this.updateBounds();
                }
            }
        }
        updateBounds() {
            Timers.remove(this.ensureBoundsCorrect, this);
            var cnt = this._parent.numChildren;
            var i;
            var child;
            var ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
            var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
            var tmp;
            var empty = true;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this || this._excludeInvisibles && !child.internalVisible3)
                    continue;
                tmp = child.xMin;
                if (tmp < ax)
                    ax = tmp;
                tmp = child.yMin;
                if (tmp < ay)
                    ay = tmp;
                tmp = child.xMin + child.width;
                if (tmp > ar)
                    ar = tmp;
                tmp = child.yMin + child.height;
                if (tmp > ab)
                    ab = tmp;
                empty = false;
            }
            var w = 0, h = 0;
            if (!empty) {
                this._updating |= 1;
                this.setPosition(ax, ay);
                this._updating &= 2;
                w = ar - ax;
                h = ab - ay;
            }
            if ((this._updating & 2) == 0) {
                this._updating |= 2;
                this.setSize(w, h);
                this._updating &= 1;
            }
            else {
                this._updating &= 1;
                this.resizeChildren(this._width - w, this._height - h);
            }
        }
        handleLayout() {
            this._updating |= 1;
            var child;
            var i;
            var cnt;
            if (this._layout == GroupLayoutType.Horizontal) {
                var curX = this.x;
                cnt = this._parent.numChildren;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3)
                        continue;
                    child.xMin = curX;
                    if (child.width != 0)
                        curX += child.width + this._columnGap;
                }
            }
            else if (this._layout == GroupLayoutType.Vertical) {
                var curY = this.y;
                cnt = this._parent.numChildren;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3)
                        continue;
                    child.yMin = curY;
                    if (child.height != 0)
                        curY += child.height + this._lineGap;
                }
            }
            this._updating &= 2;
        }
        moveChildren(dx, dy) {
            if ((this._updating & 1) != 0 || this._parent == null)
                return;
            this._updating |= 1;
            var cnt = this._parent.numChildren;
            var i;
            var child;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group == this) {
                    child.setPosition(child.x + dx, child.y + dy);
                }
            }
            this._updating &= 2;
        }
        resizeChildren(dw, dh) {
            if (this._layout == GroupLayoutType.None || (this._updating & 2) != 0 || this._parent == null)
                return;
            this._updating |= 2;
            if (this._boundsChanged) {
                this._boundsChanged = false;
                if (!this._autoSizeDisabled) {
                    this.updateBounds();
                    return;
                }
            }
            var cnt = this._parent.numChildren;
            var i;
            var child;
            if (!this._percentReady) {
                this._percentReady = true;
                this._numChildren = 0;
                this._totalSize = 0;
                this._mainChildIndex = -1;
                var j = 0;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (!this._excludeInvisibles || child.internalVisible3) {
                        if (j == this._mainGridIndex)
                            this._mainChildIndex = i;
                        this._numChildren++;
                        if (this._layout == 1)
                            this._totalSize += child.width;
                        else
                            this._totalSize += child.height;
                    }
                    j++;
                }
                if (this._mainChildIndex != -1) {
                    if (this._layout == 1) {
                        child = this._parent.getChildAt(this._mainChildIndex);
                        this._totalSize += this._mainGridMinSize - child.width;
                        child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                    }
                    else {
                        child = this._parent.getChildAt(this._mainChildIndex);
                        this._totalSize += this._mainGridMinSize - child.height;
                        child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                    }
                }
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (i == this._mainChildIndex)
                        continue;
                    if (this._totalSize > 0)
                        child._sizePercentInGroup = (this._layout == 1 ? child.width : child.height) / this._totalSize;
                    else
                        child._sizePercentInGroup = 0;
                }
            }
            var remainSize = 0;
            var remainPercent = 1;
            var priorHandled = false;
            if (this._layout == 1) {
                remainSize = this.width - (this._numChildren - 1) * this._columnGap;
                if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    child.setSize(remainSize - (this._totalSize - this._mainGridMinSize), child._rawHeight + dh, true);
                    remainSize -= child.width;
                    remainPercent -= child._sizePercentInGroup;
                    priorHandled = true;
                }
                var curX = this.x;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3) {
                        child.setSize(child._rawWidth, child._rawHeight + dh, true);
                        continue;
                    }
                    if (!priorHandled || i != this._mainChildIndex) {
                        child.setSize(Math.round(child._sizePercentInGroup / remainPercent * remainSize), child._rawHeight + dh, true);
                        remainPercent -= child._sizePercentInGroup;
                        remainSize -= child.width;
                    }
                    child.xMin = curX;
                    if (child.width != 0)
                        curX += child.width + this._columnGap;
                }
            }
            else {
                remainSize = this.height - (this._numChildren - 1) * this._lineGap;
                if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    child.setSize(child._rawWidth + dw, remainSize - (this._totalSize - this._mainGridMinSize), true);
                    remainSize -= child.height;
                    remainPercent -= child._sizePercentInGroup;
                    priorHandled = true;
                }
                var curY = this.y;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3) {
                        child.setSize(child._rawWidth + dw, child._rawHeight, true);
                        continue;
                    }
                    if (!priorHandled || i != this._mainChildIndex) {
                        child.setSize(child._rawWidth + dw, Math.round(child._sizePercentInGroup / remainPercent * remainSize), true);
                        remainPercent -= child._sizePercentInGroup;
                        remainSize -= child.height;
                    }
                    child.yMin = curY;
                    if (child.height != 0)
                        curY += child.height + this._lineGap;
                }
            }
            this._updating &= 1;
        }
        handleAlphaChanged() {
            if (this._underConstruct)
                return;
            var cnt = this._parent.numChildren;
            for (var i = 0; i < cnt; i++) {
                var child = this._parent.getChildAt(i);
                if (child.group == this)
                    child.alpha = this.alpha;
            }
        }
        handleVisibleChanged() {
            if (!this._parent)
                return;
            var cnt = this._parent.numChildren;
            for (var i = 0; i < cnt; i++) {
                var child = this._parent.getChildAt(i);
                if (child.group == this)
                    child.handleVisibleChanged();
            }
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            this._layout = buffer.readByte();
            this._lineGap = buffer.readInt();
            this._columnGap = buffer.readInt();
            if (buffer.version >= 2) {
                this._excludeInvisibles = buffer.readBool();
                this._autoSizeDisabled = buffer.readBool();
                this._mainGridIndex = buffer.readShort();
            }
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            if (!this.visible)
                this.handleVisibleChanged();
        }
    }

    class Shape extends UIElement {
        constructor() {
            super();
            this._color = 0xFFFFFF;
            this._type = 0;
        }
        init() {
            super.init();
            this.initElement();
            this.setNotInteractable();
        }
        get color() {
            return this._color;
        }
        set color(value) {
            if (this._color != value) {
                if (this._type != 0) {
                    this._color = value;
                    this.nativePanel.style.backgroundColor = convertToHtmlColor(value);
                }
            }
        }
        drawRect(lineWidth, lineColor, fillColor) {
            this.setType(1);
            if (lineColor.a != 0)
                this.nativePanel.style.border = lineWidth + "px solid " + lineColor.toStyleString();
            else
                this.nativePanel.style.border = "";
            this._color = fillColor.getHex();
            if (fillColor.a != 0)
                this.nativePanel.style.backgroundColor = fillColor.toStyleString();
            else
                this.nativePanel.style.backgroundColor = "transparent";
        }
        drawRoundRect(lineWidth, lineColor, fillColor, topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius) {
            this.setType(2);
            this.nativePanel.style.border = lineWidth + "px solid " + lineColor.toStyleString();
            this.nativePanel.style.borderRadius = topLeftRadius + "px " + topRightRadius + "px " + bottomRightRadius + "px " + bottomLeftRadius + "px";
            this._color = fillColor.getHex();
            if (fillColor.a != 0)
                this.nativePanel.style.backgroundColor = fillColor.toStyleString();
            else
                this.nativePanel.style.backgroundColor = "transparent";
        }
        drawEllipse(lineWidth, lineColor, fillColor, startDegree, endDegree) {
            this.setType(3);
            this.nativePanel.style.border = lineWidth + "px solid " + lineColor.toStyleString();
            this.nativePanel.style.borderRadius = this._contentRect.width + "px / " + this._contentRect.height + "px";
            this._color = fillColor.getHex();
            if (fillColor.a != 0)
                this.nativePanel.style.backgroundColor = fillColor.toStyleString();
            else
                this.nativePanel.style.backgroundColor = "transparent";
        }
        drawPolygon(points, fillColor, lineWidth, lineColor) {
            this.setType(4);
        }
        drawRegularPolygon(sides, lineWidth, centerColor, lineColor, fillColor, rotation, distances) {
            this.setType(5);
        }
        clear() {
            this.setType(0);
        }
        setType(type) {
            if (this._type == 0) {
                if (type != 0) {
                    this._touchDisabled = false;
                    this.updateTouchableFlag();
                }
            }
            else {
                if (type == 0) {
                    this.nativePanel.style.backgroundColor = "transparent";
                    this.nativePanel.style.border = "0px solid";
                    this.setNotInteractable();
                }
            }
            this._type = type;
        }
        onSizeChanged() {
            this.nativePanel.style.width = this._contentRect.width + "px";
            this.nativePanel.style.height = this._contentRect.height + "px";
        }
        onTweenStart(tween) {
            switch (tween.tweener.actionType) {
                case ActionType.Color:
                    {
                        this.color = tween.tweener.startValue.color;
                        break;
                    }
                default:
                    {
                        super.onTweenStart(tween);
                        break;
                    }
            }
        }
    }

    class GGraph extends GObject {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new Shape();
            this._element.$owner = this;
            this._element.init();
        }
        get color() {
            return this._element.color;
        }
        set color(value) {
            if (this._element.color != value) {
                this._element.color = value;
                this.updateGear(4);
            }
        }
        get element() {
            return this._element;
        }
        replaceMe(target) {
            if (this.parent == null)
                throw new Error("parent not set");
            target.name = this.name;
            target.alpha = this.alpha;
            target.rotation = this.rotation;
            target.visible = this.visible;
            target.touchable = this.touchable;
            target.grayed = this.grayed;
            target.setPosition(this.x, this.y);
            target.setSize(this.width, this.height);
            let index = this.parent.getChildIndex(this);
            this.parent.addChildAt(target, index);
            target.relations.copyFrom(this.relations);
            this.parent.removeChild(this, true);
        }
        setNativeObject(obj) {
            if (this._element == obj)
                return;
            this._element.$owner = null;
            this.offAll();
            if (this._element.parent)
                this._element.parent.removeChild(this._element);
            this._element = obj;
            obj.$owner = this;
            obj.alpha = this.alpha;
            obj.rotation = this.rotation;
            obj.visible = this.visible;
            obj.touchable = this.touchable;
            this.handleSizeChanged();
            this.handlePositionChanged();
            if (this.parent != null)
                this.parent.childStateChanged(this);
        }
        getProp(index) {
            if (index == ObjectPropID.Color)
                return this.color;
            else
                return super.getProp(index);
        }
        setProp(index, value) {
            if (index == ObjectPropID.Color)
                this.color = value;
            else
                super.setProp(index, value);
        }
        setup_beforeAdd(buffer, beginPos) {
            this.setPivot(0, 0);
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            let type = buffer.readByte();
            if (type != 0) {
                let i;
                let cnt;
                let lineSize = buffer.readInt();
                let lineColor = buffer.readFullColor();
                let fillColor = buffer.readFullColor();
                let roundedRect = buffer.readBool();
                let cornerRadius;
                if (roundedRect) {
                    cornerRadius = [];
                    for (i = 0; i < 4; i++)
                        cornerRadius[i] = buffer.readFloat();
                }
                if (type == 1) {
                    if (roundedRect)
                        this._element.drawRoundRect(lineSize, lineColor, fillColor, cornerRadius[0], cornerRadius[1], cornerRadius[2], cornerRadius[3]);
                    else
                        this._element.drawRect(lineSize, lineColor, fillColor);
                }
                else if (type == 2) {
                    this._element.drawEllipse(lineSize, lineColor, fillColor, 0, 360);
                }
                else if (type == 3) {
                    cnt = buffer.readShort();
                    let points = [];
                    points.length = cnt;
                    for (i = 0; i < cnt; i++)
                        points[i] = buffer.readFloat();
                    this._element.drawPolygon(points, fillColor, lineSize, lineColor);
                }
                else if (type == 4) {
                    let sides = buffer.readShort();
                    let startAngle = buffer.readFloat();
                    cnt = buffer.readShort();
                    let distances;
                    if (cnt > 0) {
                        distances = [];
                        for (i = 0; i < cnt; i++)
                            distances[i] = buffer.readFloat();
                    }
                    this._element.drawRegularPolygon(sides, lineSize, fillColor, lineColor, fillColor, startAngle, distances);
                }
            }
        }
    }

    var MarginType;
    (function (MarginType) {
        MarginType[MarginType["W11"] = 0] = "W11";
        MarginType[MarginType["H11"] = 1] = "H11";
        MarginType[MarginType["W12"] = 2] = "W12";
        MarginType[MarginType["H12"] = 3] = "H12";
        MarginType[MarginType["W13"] = 4] = "W13";
        MarginType[MarginType["H13"] = 5] = "H13";
        MarginType[MarginType["W21"] = 6] = "W21";
        MarginType[MarginType["H21"] = 7] = "H21";
        MarginType[MarginType["W22"] = 8] = "W22";
        MarginType[MarginType["H22"] = 9] = "H22";
        MarginType[MarginType["W23"] = 10] = "W23";
        MarginType[MarginType["H23"] = 11] = "H23";
        MarginType[MarginType["W31"] = 12] = "W31";
        MarginType[MarginType["H31"] = 13] = "H31";
        MarginType[MarginType["W32"] = 14] = "W32";
        MarginType[MarginType["H32"] = 15] = "H32";
        MarginType[MarginType["W33"] = 16] = "W33";
        MarginType[MarginType["H33"] = 17] = "H33";
    })(MarginType || (MarginType = {}));
    class Margin {
        constructor() {
            this.left = 0;
            this.right = 0;
            this.top = 0;
            this.bottom = 0;
            //中间的宽度
            this.width = 0;
            //中间的高度
            this.height = 0;
        }
        copy(source) {
            this.top = source.top;
            this.bottom = source.bottom;
            this.left = source.left;
            this.right = source.right;
            this.width = source.width;
            this.height = source.height;
        }
        getMargin(m) {
            switch (m) {
                //horizontal
                case MarginType.W11:
                case MarginType.W21:
                case MarginType.W31:
                    {
                        return `${this.left}px`;
                    }
                case MarginType.W12:
                    {
                        return `${this.left}px`;
                    }
                case MarginType.W32:
                    {
                        return `${this.right}px`;
                    }
                case MarginType.W13:
                case MarginType.W23:
                case MarginType.W33:
                    {
                        return `${this.right}px`;
                    }
                //vertival
                case MarginType.H11:
                case MarginType.H12:
                case MarginType.H13:
                    {
                        return `${this.top}px`;
                    }
                case MarginType.H21:
                case MarginType.H23:
                    {
                        return `${this.height}px`;
                    }
                case MarginType.H31:
                case MarginType.H32:
                case MarginType.H33:
                    {
                        return `${this.bottom}px`;
                    }
                case MarginType.W22:
                    {
                        return `${this.left}px`;
                    }
                case MarginType.H22:
                    {
                        return `${this.right}px`;
                    }
                default:
                    {
                        return `0px`;
                    }
            }
        }
    }

    const GridStyleTemplate = new Map([
        ["cornerStyle", {
                "background-size": `100%`,
                "background-repeat": `no-repeat`,
            }],
        ["horizontalBorderStyle", {
                "width": `100%`,
                "background-repeat": `repeat-x`,
            }],
        ["verticalBorderStyle", {
                "height": `100%`,
                "background-repeat": `repeat-y`,
            }],
        ["centerStyle", {
                "width": `100%`,
                "height": `100%`,
                "background-size": `100%`,
                "background-repeat": `repeat`,
            }]
    ]);
    const GridStyleParams = [
        ["width", MarginType.W11, "height", MarginType.H11], ["margin-left", MarginType.W11, "margin-right", MarginType.W13, "height", MarginType.H12], ["width", MarginType.W13, "height", MarginType.H13],
        ["margin-top", MarginType.H11, "margin-bottom", MarginType.H31, "width", MarginType.W21], ["margin-left", MarginType.W12, "margin-right", MarginType.W32, "margin-top", MarginType.H12, "margin-bottom", MarginType.H32], ["margin-top", MarginType.H13, "margin-bottom", MarginType.H33, "width", MarginType.W23],
        ["width", MarginType.W31, "height", MarginType.H31], ["margin-left", MarginType.W11, "margin-right", MarginType.W33, "height", MarginType.H32], ["width", MarginType.W33, "height", MarginType.H33],
    ];
    const GridStyleMap = [
        ["tl", "left top", "cornerStyle"], ["tc", "center top", "horizontalBorderStyle"], ["tr", "right top", "cornerStyle"],
        ["ml", "left center", "verticalBorderStyle"], ["mc", "center center", "centerStyle"], ["mr", "right center", "verticalBorderStyle"],
        ["bl", "left bottom", "cornerStyle"], ["bc", "center bottom", "horizontalBorderStyle"], ["br", "right bottom", "cornerStyle"],
    ];
    class Image extends UIElement {
        constructor() {
            super();
            this._tileGridIndice = 0;
            this._color = 0xFFFFFF;
            this._textureScale = new Vec2(1, 1);
            this._scale9Panels = [];
        }
        init() {
            this.nativePanel = $.CreatePanel("Image", $('#HiddenRoot'), this.$owner.name);
        }
        get src() {
            return this._src;
        }
        set src(value) {
            if (this._src != value) {
                this._src = value;
                this._textureScale.set(1, 1);
                this.refresh();
            }
        }
        get color() {
            return this._color;
        }
        set color(value) {
            if (this._color != value) {
                this._color = value;
                this.updateFilters();
            }
        }
        get textureScale() {
            return this._textureScale;
        }
        set textureScale(value) {
            if (!this._textureScale.equals(value)) {
                this._textureScale.copy(value);
                this.refresh();
            }
        }
        get scale9Grid() {
            return this._scale9Grid;
        }
        set scale9Grid(value) {
            if (this._scale9Grid != value) {
                this._scale9Grid = value;
                this.refresh();
            }
        }
        get scaleByTile() {
            return this._scaleByTile;
        }
        set scaleByTile(value) {
            if (this._scaleByTile != value) {
                this._scaleByTile = value;
                this.refresh();
            }
        }
        get tileGridIndice() {
            return this._tileGridIndice;
        }
        set tileGridIndice(value) {
            if (this._tileGridIndice != value) {
                this._tileGridIndice = value;
                this.refresh();
            }
        }
        get fillMethod() {
            return FillMethod.None;
        }
        set fillMethod(value) {
        }
        get fillOrigin() {
            return 0;
        }
        set fillOrigin(value) {
        }
        get fillClockwise() {
            return true;
        }
        set fillClockwise(value) {
        }
        get fillAmount() {
            return 0;
        }
        set fillAmount(value) {
        }
        updateFilters() {
            // this.nativePanel.style.filter = filter;
        }
        refresh() {
            if (!this._src) {
                this.nativePanel.style.backgroundImage = "none";
                return;
            }
            if (this._scaleByTile) {
                if (this._textureScale.x != 1 || this._textureScale.y != 1)
                    this.nativePanel.style.backgroundSize = (this._textureScale.x * 100) + "% " + (this._textureScale.y * 100) + "%";
                else
                    this.nativePanel.style.backgroundSize = "auto";
                this.nativePanel.style.backgroundRepeat = "repeat";
                this.nativePanel.SetImage(this._src);
            }
            else if (this._scale9Grid) {
                this.nativePanel.style.backgroundRepeat = "no-repeat";
                if (this._textureScale.x != 1 || this._textureScale.y != 1) {
                    this.nativePanel.style.backgroundSize = (this._textureScale.x * 100) + "% " + (this._textureScale.y * 100) + "%";
                }
                else {
                    this.nativePanel.style.backgroundSize = "auto";
                }
                if (this._scale9Panels.length == 0) {
                    var urlDir;
                    var urlExt;
                    var totalLen = this._src.length - 1;
                    for (var i = totalLen; i >= 0; i--) {
                        if (this._src[i] == '.') {
                            urlDir = this._src.substring(0, i);
                            urlExt = this._src.substring(i + 1, totalLen + 1);
                            break;
                        }
                    }
                    for (var i = 0; i < GridStyleMap.length; i++) {
                        var gridArray = GridStyleMap[i];
                        var gridPos = gridArray[0];
                        var gridAlign = gridArray[1];
                        var gridStyleName = gridArray[2];
                        var gridPath = `url('${urlDir}_${gridPos}.${urlExt}')`;
                        var styleType = GridStyleTemplate.get(gridStyleName);
                        var styleImplement = Object.assign({
                            "align": `${gridAlign}`,
                            "background-image": `${gridPath}`,
                        }, styleType);
                        var gridpanel = $.CreatePanel("Image", this.nativePanel, gridPos);
                        for (const k in styleImplement) {
                            gridpanel.style[k] = styleImplement[k];
                        }
                        var GridStyleParam = GridStyleParams[i];
                        for (var j = 0; j < GridStyleParam.length; j += 2) {
                            var key = GridStyleParam[j];
                            var value = GridStyleParam[j + 1];
                            gridpanel.style[key] = this._scale9Grid.getMargin(value);
                        }
                        this._scale9Panels.push(gridpanel);
                    }
                }
            }
            else {
                this.nativePanel.style.backgroundSize = "100% 100%";
                this.nativePanel.style.backgroundRepeat = "no-repeat";
                this.nativePanel.SetImage(this._src);
            }
        }
    }

    class GImage extends GObject {
        constructor(name) {
            super(name);
        }
        get color() {
            return this._element.color;
        }
        set color(value) {
            if (this._element.color != value) {
                this._element.color = value;
                this.updateGear(4);
            }
        }
        get flip() {
            return this._element.flip;
        }
        set flip(value) {
            this._element.flip = value;
        }
        get fillMethod() {
            return this._element.fillMethod;
        }
        set fillMethod(value) {
            this._element.fillMethod = value;
        }
        get fillOrigin() {
            return this._element.fillOrigin;
        }
        set fillOrigin(value) {
            this._element.fillOrigin = value;
        }
        get fillClockwise() {
            return this._element.fillClockwise;
        }
        set fillClockwise(value) {
            this._element.fillClockwise = value;
        }
        get fillAmount() {
            return this._element.fillAmount;
        }
        set fillAmount(value) {
            this._element.fillAmount = value;
        }
        createElement() {
            this._element = new Image();
            this._element.$owner = this;
            this._element.init();
            this._element.setNotInteractable();
        }
        handleSizeChanged() {
            this._element.width = this._width;
            this._element.height = this._height;
        }
        constructFromResource() {
            this._contentItem = this.packageItem.getBranch();
            this.sourceWidth = this._contentItem.width;
            this.sourceHeight = this._contentItem.height;
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this._contentItem = this._contentItem.getHighResolution();
            this._element.scale9Grid = this._contentItem.scale9Grid;
            this._element.scaleByTile = this._contentItem.scaleByTile;
            this._element.tileGridIndice = this._contentItem.tileGridIndice;
            this._element.src = this._contentItem.file;
            if (this._element.scaleByTile)
                this._element.textureScale = new Vec2(this.sourceWidth, this.sourceHeight);
            else
                this._element.textureScale = new Vec2(this._contentItem.width / this.sourceWidth, this._contentItem.height / this.sourceHeight);
            this.setSize(this.sourceWidth, this.sourceHeight);
        }
        getProp(index) {
            if (index == ObjectPropID.Color)
                return this.color;
            else
                return super.getProp(index);
        }
        setProp(index, value) {
            if (index == ObjectPropID.Color)
                this.color = value;
            else
                super.setProp(index, value);
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            if (buffer.readBool())
                this.color = buffer.readColor();
            this.flip = buffer.readByte();
            this._element.fillMethod = buffer.readByte();
            if (this._element.fillMethod != 0) {
                this._element.fillOrigin = buffer.readByte();
                this._element.fillClockwise = buffer.readBool();
                this._element.fillAmount = buffer.readFloat();
            }
        }
    }

    class MovieClip extends Image {
        constructor() {
            super();
            this.interval = 0;
            this.swing = false;
            this.repeatDelay = 0;
            this.timeScale = 1;
            this._playing = true;
            this._frameCount = 0;
            this._frame = 0;
            this._start = 0;
            this._end = 0;
            this._times = 0;
            this._endAt = 0;
            this._status = 0; //0-none, 1-next loop, 2-ending, 3-ended
            this._frameElapsed = 0; //当前帧延迟
            this._reversed = false;
            this._repeatedCount = 0;
            this.setPlaySettings();
        }
        init() {
            super.init();
            this.$owner.onEvent("added_to_stage", this.__addToStage, this);
            this.$owner.onEvent("removed_from_stage", this.__removeFromStage, this);
        }
        get frames() {
            return this._frames;
        }
        set frames(value) {
            this._frames = value;
            this._scaleByTile = false;
            this._scale9Grid = null;
            if (this._frames) {
                this._frameCount = this._frames.length;
                if (this._end == -1 || this._end > this._frameCount - 1)
                    this._end = this._frameCount - 1;
                if (this._endAt == -1 || this._endAt > this._frameCount - 1)
                    this._endAt = this._frameCount - 1;
                if (this._frame < 0 || this._frame > this._frameCount - 1)
                    this._frame = this._frameCount - 1;
                this._frameElapsed = 0;
                this._repeatedCount = 0;
                this._reversed = false;
            }
            else
                this._frameCount = 0;
            this.drawFrame();
            this.checkTimer();
        }
        get frameCount() {
            return this._frameCount;
        }
        get frame() {
            return this._frame;
        }
        set frame(value) {
            if (this._frame != value) {
                if (this._frames && value >= this._frameCount)
                    value = this._frameCount - 1;
                this._frame = value;
                this._frameElapsed = 0;
                this.drawFrame();
            }
        }
        get playing() {
            return this._playing;
        }
        set playing(value) {
            if (this._playing != value) {
                this._playing = value;
                this.checkTimer();
            }
        }
        //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
        rewind() {
            this._frame = 0;
            this._frameElapsed = 0;
            this._reversed = false;
            this._repeatedCount = 0;
            this.drawFrame();
        }
        syncStatus(anotherMc) {
            this._frame = anotherMc._frame;
            this._frameElapsed = anotherMc._frameElapsed;
            this._reversed = anotherMc._reversed;
            this._repeatedCount = anotherMc._repeatedCount;
            this.drawFrame();
        }
        advance(timeInMiniseconds) {
            var beginFrame = this._frame;
            var beginReversed = this._reversed;
            var backupTime = timeInMiniseconds;
            while (true) {
                var tt = this.interval + (this._frames[this._frame].addDelay || 0);
                if (this._frame == 0 && this._repeatedCount > 0)
                    tt += this.repeatDelay;
                if (timeInMiniseconds < tt) {
                    this._frameElapsed = 0;
                    break;
                }
                timeInMiniseconds -= tt;
                if (this.swing) {
                    if (this._reversed) {
                        this._frame--;
                        if (this._frame <= 0) {
                            this._frame = 0;
                            this._repeatedCount++;
                            this._reversed = !this._reversed;
                        }
                    }
                    else {
                        this._frame++;
                        if (this._frame > this._frameCount - 1) {
                            this._frame = Math.max(0, this._frameCount - 2);
                            this._repeatedCount++;
                            this._reversed = !this._reversed;
                        }
                    }
                }
                else {
                    this._frame++;
                    if (this._frame > this._frameCount - 1) {
                        this._frame = 0;
                        this._repeatedCount++;
                    }
                }
                if (this._frame == beginFrame && this._reversed == beginReversed) //走了一轮了
                 {
                    var roundTime = backupTime - timeInMiniseconds; //这就是一轮需要的时间
                    timeInMiniseconds -= Math.floor(timeInMiniseconds / roundTime) * roundTime; //跳过
                }
            }
            this.drawFrame();
        }
        //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
        setPlaySettings(start, end, times, endAt) {
            this._start = start || 0;
            this._end = end || -1;
            if (this._end == -1 || this._end > this._frameCount - 1)
                this._end = this._frameCount - 1;
            this._times = times || 0;
            this._endAt = endAt || -1;
            if (this._endAt == -1)
                this._endAt = this._end;
            this._status = 0;
            this.frame = this._start;
        }
        onTimer() {
            if (!this._playing || this._frameCount == 0 || this._status == 3)
                return;
            var dt = Timers.deltaTime;
            if (dt > 100)
                dt = 100;
            if (this.timeScale != 1)
                dt *= this.timeScale;
            this._frameElapsed += dt;
            var tt = this.interval + (this._frames[this._frame].addDelay || 0);
            if (this._frame == 0 && this._repeatedCount > 0)
                tt += this.repeatDelay;
            if (this._frameElapsed < tt)
                return;
            this._frameElapsed -= tt;
            if (this._frameElapsed > this.interval)
                this._frameElapsed = this.interval;
            if (this.swing) {
                if (this._reversed) {
                    this._frame--;
                    if (this._frame <= 0) {
                        this._frame = 0;
                        this._repeatedCount++;
                        this._reversed = !this._reversed;
                    }
                }
                else {
                    this._frame++;
                    if (this._frame > this._frameCount - 1) {
                        this._frame = Math.max(0, this._frameCount - 2);
                        this._repeatedCount++;
                        this._reversed = !this._reversed;
                    }
                }
            }
            else {
                this._frame++;
                if (this._frame > this._frameCount - 1) {
                    this._frame = 0;
                    this._repeatedCount++;
                }
            }
            if (this._status == 1) //new loop
             {
                this._frame = this._start;
                this._frameElapsed = 0;
                this._status = 0;
            }
            else if (this._status == 2) //ending
             {
                this._frame = this._endAt;
                this._frameElapsed = 0;
                this._status = 3; //ended
                if (this.$owner)
                    this.$owner.emit("play_end");
            }
            else {
                if (this._frame == this._end) {
                    if (this._times > 0) {
                        this._times--;
                        if (this._times == 0)
                            this._status = 2; //ending
                        else
                            this._status = 1; //new loop
                    }
                    else {
                        this._status = 1; //new loop
                    }
                }
            }
            this.drawFrame();
        }
        drawFrame() {
            // if (this._frameCount > 0 && this._frame < this._frames.length) {
            //     var frame: Frame = this._frames[this._frame];
            //     this._graphics.texture = frame.texture;
            // }
            // else
            //     this._graphics.texture = null;
        }
        checkTimer() {
            if (this._playing && this._frameCount > 0 && this.onStage)
                Timers.addUpdate(this.onTimer, this);
            else
                Timers.remove(this.onTimer, this);
        }
        __addToStage() {
            if (this._playing && this._frameCount > 0)
                Timers.addUpdate(this.onTimer, this);
        }
        __removeFromStage() {
            Timers.remove(this.onTimer, this);
        }
    }

    class GMovieClip extends GObject {
        constructor(name) {
            super(name);
        }
        get color() {
            return this._element.color;
        }
        set color(value) {
            this._element.color = value;
        }
        createElement() {
            this._element = new MovieClip();
            this._element.$owner = this;
            this._element.init();
            this._element.setNotInteractable();
        }
        get playing() {
            return this._element.playing;
        }
        set playing(value) {
            if (this._element.playing != value) {
                this._element.playing = value;
                this.updateGear(5);
            }
        }
        get frame() {
            return this._element.frame;
        }
        set frame(value) {
            if (this._element.frame != value) {
                this._element.frame = value;
                this.updateGear(5);
            }
        }
        get timeScale() {
            return this._element.timeScale;
        }
        set timeScale(value) {
            this._element.timeScale = value;
        }
        rewind() {
            this._element.rewind();
        }
        syncStatus(anotherMc) {
            this._element.syncStatus(anotherMc._element);
        }
        advance(timeInMiniseconds) {
            this._element.advance(timeInMiniseconds);
        }
        //从start帧开始，播放到end帧（-1表示结尾），重复times次（0表示无限循环），循环结束后，停止在endAt帧（-1表示参数end）
        setPlaySettings(start, end, times, endAt) {
            this._element.setPlaySettings(start, end, times, endAt);
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Color:
                    return this.color;
                case ObjectPropID.Playing:
                    return this.playing;
                case ObjectPropID.Frame:
                    return this.frame;
                case ObjectPropID.TimeScale:
                    return this.timeScale;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Color:
                    this.color = value;
                    break;
                case ObjectPropID.Playing:
                    this.playing = value;
                    break;
                case ObjectPropID.Frame:
                    this.frame = value;
                    break;
                case ObjectPropID.TimeScale:
                    this.timeScale = value;
                    break;
                case ObjectPropID.DeltaTime:
                    this.advance(value);
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        constructFromResource() {
            var displayItem = this.packageItem.getBranch();
            this.sourceWidth = displayItem.width;
            this.sourceHeight = displayItem.height;
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this.setSize(this.sourceWidth, this.sourceHeight);
            displayItem = displayItem.getHighResolution();
            this._element.interval = displayItem.interval;
            this._element.swing = displayItem.swing;
            this._element.repeatDelay = displayItem.repeatDelay;
            this._element.frames = displayItem.frames;
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            if (buffer.readBool())
                this.color = buffer.readColor();
            this._element.flip = buffer.readByte(); //flip
            this._element.frame = buffer.readInt();
            this._element.playing = buffer.readBool();
        }
    }

    class TextFormat {
        constructor() {
            this.size = 24;
            this.font = null;
            this.color = 0;
            this.lineSpacing = 0;
            this.letterSpacing = 0;
            this.outline = 0;
            this.outlineColor = 0;
            this.shadowOffset = new Vec2();
            this.shadowColor = 0;
        }
        copy(source) {
            this.size = source.size;
            this.font = source.font;
            this.color = source.color;
            this.lineSpacing = source.lineSpacing;
            this.letterSpacing = source.letterSpacing;
            this.bold = source.bold;
            this.underline = source.underline;
            this.italic = source.italic;
            this.strikethrough = source.strikethrough;
            this.align = source.align;
            this.outline = source.outline;
            this.outlineColor = source.outlineColor;
            this.shadowOffset.copy(source.shadowOffset);
            this.shadowColor = source.shadowColor;
        }
    }

    class TextField extends UIElement {
        constructor() {
            super();
            this._maxWidth = 0;
            this._layoutStyleChanged = true;
            this._tmpChangWrapping = false;
            this._textFormat = new TextFormat();
            this._text = "";
            this._textSize = new Vec2();
            this._delayUpdateFunc = (keepTimer) => {
                if (!keepTimer) {
                    this._delayUpdateTimer = null;
                }
                this.DelayUpdate();
            };
        }
        init() {
            super.init();
            this._container = $.CreatePanel("Panel", $('#HiddenRoot'), this.$owner.name);
            this._label = $.CreatePanel("Label", this._container, this.$owner.name);
            this.nativePanel = this._container;
        }
        get textFormat() {
            return this._textFormat;
        }
        applyFormat() {
            let fontName = this._textFormat.font;
            if (!fontName)
                fontName = UIConfig.defaultFont;
            this._label.style.color = convertToHtmlColor(this._textFormat.color);
            this._label.style.fontSize = this._textFormat.size + "px";
            this._label.style.fontFamily = fontName;
            this._label.style.fontWeight = this._textFormat.bold ? "bold" : "normal";
            this._label.style.fontStyle = this._textFormat.italic ? "italic" : "normal";
            this._label.style.textDecoration = this._textFormat.underline ? "underline" : "none";
            if (this._textFormat.align != undefined) {
                this._label.style.horizontalAlign = this._textFormat.align;
                this._label.style.textAlign = this._textFormat.align;
            }
            if (this._textFormat.verticalAlign != undefined) {
                this._label.style.verticalAlign = this._textFormat.verticalAlign;
            }
            // 其实不是正宗的描边
            if (this._textFormat.outline > 0) {
                var arr = [];
                for (var i = 0; i < 3; i++) {
                    arr.push(this._textFormat.outline + "px");
                }
                arr.push(this._textFormat.outline);
                arr.push(convertToHtmlColor(this._textFormat.outlineColor));
                this._label.style.textShadow = arr.join(' ');
            }
            else
                this._label.style.boxShadow = null;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            if (!this._layoutStyleChanged && this._text.length < 20 && this._text == value && !this._html)
                return;
            this._text = value;
            this._html = false;
            this.applyText();
        }
        get htmlText() {
            return this._text;
        }
        set htmlText(value) {
            if (this._text.length < 20 && this._text == value && this._html)
                return;
            this._text = value;
            this._html = true;
            this.applyText();
        }
        applyText() {
            this._updatingSize = true;
            this._tmpChangWrapping = false;
            if (this._autoSize == AutoSizeType.Both) {
                this._label.style.width = null;
                if (this._maxWidth > 0) {
                    this.updateWrapping();
                    this._tmpChangWrapping = true;
                }
            }
            this._label.AddClass("FGUI_OutScreen");
            this._label.html = this._html;
            this._label.text = this.text;
            this._delayUpdateFunc(true);
        }
        DelayUpdate() {
            if (this._delayUpdateTimer) {
                return;
            }
            if (!this._label.IsSizeValid()) {
                this._delayUpdateTimer = $.Schedule(0.02, this._delayUpdateFunc);
                return;
            }
            var height = Math.floor(this._label.contentheight / this._label.actualuiscale_y);
            var width = Math.floor(this._label.contentwidth / this._label.actualuiscale_x);
            this._label.RemoveClass("FGUI_OutScreen");
            this._textSize.set(width, height);
            if (this._autoSize == AutoSizeType.Both) {
                if (this.$owner) {
                    this.$owner.setSize(this._textSize.x, this._textSize.y);
                }
            }
            else if (this._autoSize == AutoSizeType.Height) {
                if (this.$owner) {
                    this.$owner.height = this._textSize.y;
                }
            }
            if (this._tmpChangWrapping && this._contentRect.width > this._maxWidth) {
                this._label.style.width = this._maxWidth + "px";
                this.updateWrapping(true);
            }
            this._container.style.width = this._contentRect.width + "px";
            this._updatingSize = false;
        }
        get autoSize() {
            return this._autoSize;
        }
        set autoSize(value) {
            if (this._autoSize != value) {
                this._autoSize = value;
                this.updateWrapping();
                if (this._autoSize == AutoSizeType.Both) {
                    this._label.style.width = null;
                    this._label.style.textOverflow = "noclip";
                }
                else if (this._autoSize == AutoSizeType.Height) {
                    this._label.style.textOverflow = "noclip";
                }
                else if (this._autoSize == AutoSizeType.Ellipsis)
                    this._label.style.textOverflow = "ellipsis";
                else if (this._autoSize == AutoSizeType.Shrink)
                    this._label.style.textOverflow = "shrink";
                else
                    this._label.style.textOverflow = "clip";
            }
        }
        get singleLine() {
            return this._singleLine;
        }
        set singleLine(value) {
            if (this._singleLine != value) {
                this._singleLine = value;
                this.updateWrapping();
            }
        }
        get maxWidth() {
            return this._maxWidth;
        }
        set maxWidth(value) {
            if (this._maxWidth != value) {
                this._maxWidth = value;
            }
        }
        get textWidth() {
            return this._textSize.x;
        }
        updateWrapping(forceWrap) {
            if ((this._autoSize == AutoSizeType.Both || this._singleLine) && !forceWrap) {
                this._label.style.whiteSpace = "nowrap";
            }
            else {
                this._label.style.whiteSpace = "normal";
            }
        }
        dispose() {
            if (this._delayUpdateTimer) {
                $.CancelScheduled(this._delayUpdateTimer);
                this._delayUpdateTimer = null;
            }
            super.dispose();
        }
    }

    class PackageItem {
        constructor() {
            this.width = 0;
            this.height = 0;
        }
        getBranch() {
            if (this.branches && this.owner._branchIndex != -1) {
                var itemId = this.branches[this.owner._branchIndex];
                if (itemId)
                    return this.owner.getItemById(itemId);
            }
            return this;
        }
        getHighResolution() {
            if (this.highResolution && UIConfig.scaleLevel > 0) {
                var itemId = this.highResolution[UIConfig.scaleLevel - 1];
                if (itemId)
                    return this.owner.getItemById(itemId);
            }
            return this;
        }
    }

    function Utf8ArrayToStr(array) {
        var i, len, c;
        var char2, char3;
        let out = [];
        len = array.length;
        i = 0;
        while (i < len) {
            c = array[i++];
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out.push(String.fromCharCode(c));
                    break;
                case 12:
                case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = array[i++];
                    out.push(String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F)));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = array[i++];
                    char3 = array[i++];
                    out.push(String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0)));
                    break;
            }
        }
        return out.join('');
    }
    class ByteBuffer {
        constructor(buffer, offset, length) {
            this.version = 0;
            offset = offset || 0;
            if (length == null || length == -1)
                length = buffer.byteLength - offset;
            this._buffer = buffer;
            this._view = new DataView(this._buffer, offset, length);
            this._pos = 0;
            this._length = length;
        }
        get data() {
            return this._buffer;
        }
        get pos() {
            return this._pos;
        }
        set pos(value) {
            if (value > this._length)
                throw "Out of bounds";
            this._pos = value;
        }
        get length() {
            return this._length;
        }
        get end() {
            return this._pos >= this._length;
        }
        skip(count) {
            this._pos += count;
        }
        validate(forward) {
            if (this._pos + forward > this._length) {
                $.Msg(new Error().stack);
                throw `Out of bounds pos = ${this._pos} forward = ${forward} len = ${this._length}`;
            }
        }
        readByte() {
            this.validate(1);
            let ret = this._view.getUint8(this._pos);
            this._pos++;
            return ret;
        }
        readBool() {
            return this.readByte() == 1;
        }
        readShort() {
            this.validate(2);
            let ret = this._view.getInt16(this._pos, this.littleEndian);
            this._pos += 2;
            return ret;
        }
        readUshort() {
            this.validate(2);
            let ret = this._view.getUint16(this._pos, this.littleEndian);
            this._pos += 2;
            return ret;
        }
        readInt() {
            this.validate(4);
            let ret = this._view.getInt32(this._pos, this.littleEndian);
            this._pos += 4;
            return ret;
        }
        readUint() {
            this.validate(4);
            let ret = this._view.getUint32(this._pos, this.littleEndian);
            this._pos += 4;
            return ret;
        }
        readFloat() {
            this.validate(4);
            let ret = this._view.getFloat32(this._pos, this.littleEndian);
            this._pos += 4;
            return ret;
        }
        readString(len) {
            if (len == undefined)
                len = this.readUshort();
            this.validate(len);
            let ret = Utf8ArrayToStr(new Uint8Array(this._buffer, this._view.byteOffset + this._pos, len));
            this._pos += len;
            return ret;
        }
        readS() {
            var index = this.readUshort();
            if (index == 65534) //null
                return null;
            else if (index == 65533)
                return "";
            else
                return this.stringTable[index];
        }
        readSArray(cnt) {
            var ret = new Array(cnt);
            for (var i = 0; i < cnt; i++)
                ret[i] = this.readS();
            return ret;
        }
        writeS(value) {
            var index = this.readUshort();
            if (index != 65534 && index != 65533)
                this.stringTable[index] = value;
        }
        readColor() {
            var r = this.readByte();
            var g = this.readByte();
            var b = this.readByte();
            this.readByte(); //a
            return (r << 16) + (g << 8) + b;
        }
        readFullColor() {
            var r = this.readByte();
            var g = this.readByte();
            var b = this.readByte();
            var a = this.readByte();
            return new Color(r / 255, g / 255, b / 255, a / 255);
        }
        readChar() {
            var i = this.readUshort();
            return String.fromCharCode(i);
        }
        readBuffer() {
            var count = this.readUint();
            this.validate(count);
            var ba = new ByteBuffer(this._buffer, this._view.byteOffset + this._pos, count);
            ba.stringTable = this.stringTable;
            ba.version = this.version;
            this._pos += count;
            return ba;
        }
        seek(indexTablePos, blockIndex) {
            var tmp = this._pos;
            this._pos = indexTablePos;
            var segCount = this.readByte();
            if (blockIndex < segCount) {
                var useShort = this.readByte() == 1;
                var newPos;
                if (useShort) {
                    this._pos += 2 * blockIndex;
                    newPos = this.readUshort();
                }
                else {
                    this._pos += 4 * blockIndex;
                    newPos = this.readUint();
                }
                if (newPos > 0) {
                    this._pos = indexTablePos + newPos;
                    return true;
                }
                else {
                    this._pos = tmp;
                    return false;
                }
            }
            else {
                this._pos = tmp;
                return false;
            }
        }
    }

    class UIPackage {
        constructor() {
            this._items = [];
            this._itemsById = {};
            this._itemsByName = {};
            this._dependencies = [];
            this._branches = [];
            this._branchIndex = -1;
        }
        static get branch() {
            return _branch;
        }
        static set branch(value) {
            _branch = value;
            for (var pkgId in _instById) {
                var pkg = _instById[pkgId];
                if (pkg._branches) {
                    pkg._branchIndex = pkg._branches.indexOf(value);
                }
            }
        }
        static getVar(key) {
            return _vars[key];
        }
        static setVar(key, value) {
            _vars[key] = value;
        }
        static getById(id) {
            return _instById[id];
        }
        static getByName(name) {
            return _instByName[name];
        }
        static loadPackageWithArrayBuffer(pkgName, ab) {
            let pkg = _instById[pkgName];
            if (pkg) {
                return;
            }
            pkg = new UIPackage();
            pkg.loadPackage(new ByteBuffer(ab), pkgName);
            _instById[pkg.id] = pkg;
            _instByName[pkg.name] = pkg;
            _instById[pkg.path] = pkg;
        }
        static removePackage(packageIdOrName) {
            var pkg = _instById[packageIdOrName];
            if (!pkg)
                pkg = _instByName[packageIdOrName];
            if (!pkg)
                throw "No package found: " + packageIdOrName;
            pkg.dispose();
            delete _instById[pkg.id];
            delete _instByName[pkg.name];
            if (pkg._path)
                delete _instById[pkg._path];
        }
        static createObject(pkgName, resName, userClass) {
            var pkg = UIPackage.getByName(pkgName);
            if (pkg)
                return pkg.createObject(resName, userClass);
            else
                return null;
        }
        static createObjectFromURL(url, userClass) {
            var pi = UIPackage.getItemByURL(url);
            if (pi)
                return pi.owner.internalCreateObject(pi, userClass);
            else
                return null;
        }
        static getItemURL(pkgName, resName) {
            var pkg = UIPackage.getByName(pkgName);
            if (!pkg)
                return null;
            var pi = pkg._itemsByName[resName];
            if (!pi)
                return null;
            return UIConfig.ouputDir + pkgName + "/" + pkg.id + pi.id;
        }
        static getItemAssetPath(pkgName, resName) {
            var pkg = UIPackage.getByName(pkgName);
            if (!pkg)
                return null;
            var pi = pkg._itemsByName[resName];
            if (!pi)
                return null;
            return pi.file;
        }
        static getItemRawURL(pkgName, resName) {
            var pkg = UIPackage.getByName(pkgName);
            if (!pkg)
                return null;
            var pi = pkg._itemsByName[resName];
            if (!pi)
                return null;
            return "ui://" + pkg.id + pi.id;
        }
        static getItemByURL(url) {
            var pos1 = url.indexOf("//");
            if (pos1 == -1)
                return null;
            var pos2 = url.indexOf("/", pos1 + 2);
            if (pos2 == -1) {
                if (url.length > 13) {
                    var pkgId = url.substr(5, 8);
                    var pkg = UIPackage.getById(pkgId);
                    if (pkg != null) {
                        var srcId = url.substr(13);
                        return pkg.getItemById(srcId);
                    }
                }
            }
            else {
                var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
                pkg = UIPackage.getByName(pkgName);
                if (pkg != null) {
                    var srcName = url.substr(pos2 + 1);
                    return pkg.getItemByName(srcName);
                }
            }
            return null;
        }
        static normalizeURL(url) {
            if (url == null)
                return null;
            var pos1 = url.indexOf("//");
            if (pos1 == -1)
                return null;
            var pos2 = url.indexOf("/", pos1 + 2);
            if (pos2 == -1)
                return url;
            var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
            var srcName = url.substr(pos2 + 1);
            return UIPackage.getItemURL(pkgName, srcName);
        }
        loadPackage(buffer, path) {
            if (buffer.readUint() != 0x46475549)
                throw "FairyGUI: old package format found in '" + path + "'";
            this._path = path;
            buffer.version = buffer.readInt();
            var ver2 = buffer.version >= 2;
            buffer.readBool(); //compressed
            this._id = buffer.readString();
            this._name = buffer.readString();
            buffer.skip(20);
            var indexTablePos = buffer.pos;
            var cnt;
            var i;
            var nextPos;
            var str;
            var branchIncluded;
            buffer.seek(indexTablePos, 4);
            cnt = buffer.readInt();
            var stringTable = new Array(cnt);
            buffer.stringTable = stringTable;
            for (i = 0; i < cnt; i++)
                stringTable[i] = buffer.readString();
            if (buffer.seek(indexTablePos, 5)) {
                cnt = buffer.readInt();
                for (i = 0; i < cnt; i++) {
                    let index = buffer.readUshort();
                    let len = buffer.readInt();
                    stringTable[index] = buffer.readString(len);
                }
            }
            buffer.seek(indexTablePos, 0);
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++)
                this._dependencies.push({ id: buffer.readS(), name: buffer.readS() });
            if (ver2) {
                cnt = buffer.readShort();
                if (cnt > 0) {
                    this._branches = buffer.readSArray(cnt);
                    if (_branch)
                        this._branchIndex = this._branches.indexOf(_branch);
                }
                branchIncluded = cnt > 0;
            }
            buffer.seek(indexTablePos, 1);
            var pi;
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readInt();
                nextPos += buffer.pos;
                pi = new PackageItem();
                pi.owner = this;
                pi.type = buffer.readByte();
                pi.id = buffer.readS();
                pi.name = buffer.readS();
                buffer.readS(); //path
                var fileName = buffer.readS();
                if (fileName != null) {
                    fileName = UIConfig.ouputDir + path + "/" + fileName;
                }
                else {
                    fileName = path;
                }
                pi.file = fileName;
                buffer.readBool(); //exported
                pi.width = buffer.readInt();
                pi.height = buffer.readInt();
                switch (pi.type) {
                    case PackageItemType.Image:
                        {
                            pi.objectType = ObjectType.Image;
                            var scaleOption = buffer.readByte();
                            if (scaleOption == 1) {
                                let sx = buffer.readInt();
                                let sy = buffer.readInt();
                                let sw = buffer.readInt();
                                let sh = buffer.readInt();
                                pi.scale9Grid = new Margin();
                                pi.scale9Grid.left = sx;
                                pi.scale9Grid.top = sy;
                                pi.scale9Grid.right = pi.width - sx - sw;
                                pi.scale9Grid.bottom = pi.height - sy - sh;
                                pi.scale9Grid.width = sw;
                                pi.scale9Grid.height = sh;
                                pi.tileGridIndice = buffer.readInt();
                            }
                            else if (scaleOption == 2)
                                pi.scaleByTile = true;
                            pi.smoothing = buffer.readBool();
                            break;
                        }
                    case PackageItemType.MovieClip:
                        {
                            pi.smoothing = buffer.readBool();
                            pi.objectType = ObjectType.MovieClip;
                            pi.rawData = buffer.readBuffer();
                            break;
                        }
                    case PackageItemType.Font:
                        {
                            pi.rawData = buffer.readBuffer();
                            break;
                        }
                    case PackageItemType.Component:
                        {
                            var extension = buffer.readByte();
                            if (extension > 0)
                                pi.objectType = extension;
                            else
                                pi.objectType = ObjectType.Component;
                            pi.rawData = buffer.readBuffer();
                            $.UIObjectFactory.resolveExtension(pi);
                            break;
                        }
                    case PackageItemType.Spine:
                    case PackageItemType.DragonBones:
                        {
                            buffer.readFloat();
                            buffer.readFloat();
                            break;
                        }
                }
                if (ver2) {
                    str = buffer.readS(); //branch
                    if (str)
                        pi.name = str + "/" + pi.name;
                    var branchCnt = buffer.readByte();
                    if (branchCnt > 0) {
                        if (branchIncluded)
                            pi.branches = buffer.readSArray(branchCnt);
                        else
                            this._itemsById[buffer.readS()] = pi;
                    }
                    var highResCnt = buffer.readByte();
                    if (highResCnt > 0)
                        pi.highResolution = buffer.readSArray(highResCnt);
                }
                this._items.push(pi);
                this._itemsById[pi.id] = pi;
                if (pi.name != null)
                    this._itemsByName[pi.name] = pi;
                buffer.pos = nextPos;
            }
        }
        dispose() {
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get path() {
            return this._path;
        }
        get dependencies() {
            return this._dependencies;
        }
        createObject(resName, userClass) {
            var pi = this._itemsByName[resName];
            if (pi)
                return this.internalCreateObject(pi, userClass);
            else
                return null;
        }
        internalCreateObject(item, userClass) {
            var g = $.UIObjectFactory.newObject(item, userClass, item.name);
            if (g == null)
                return null;
            constructingDepth.n++;
            g.constructFromResource();
            constructingDepth.n--;
            return g;
        }
        getItemById(itemId) {
            return this._itemsById[itemId];
        }
        getItemByName(resName) {
            return this._itemsByName[resName];
        }
        getItemAssetURL(item) {
            return item.file;
        }
    }
    var _instById = {};
    var _instByName = {};
    var _branch = "";
    var _vars = {};

    class UBBParser {
        constructor() {
            this._readPos = 0;
            this.defaultImgWidth = 0;
            this.defaultImgHeight = 0;
            this.linkClass = UIConfig.defaultLinkClass;
            this._handlers = {};
            this._handlers["url"] = this.onTag_URL;
            this._handlers["img"] = this.onTag_IMG;
            this._handlers["b"] = this.onTag_B;
            this._handlers["i"] = this.onTag_I;
            this._handlers["u"] = this.onTag_U;
            this._handlers["sup"] = this.onTag_Simple;
            this._handlers["sub"] = this.onTag_Simple;
            this._handlers["color"] = this.onTag_COLOR;
            this._handlers["size"] = this.onTag_SIZE;
        }
        onTag_URL(tagName, end, attr) {
            if (!end) {
                if (attr == null)
                    attr = this.getTagText();
                return "<a class='" + this.linkClass + "' href=\"#\" onclick=\"$.UIObjectFactory.openURL('" + attr + "');\">";
            }
            else
                return "</a>";
        }
        onTag_IMG(tagName, end, attr) {
            if (!end) {
                var src = this.getTagText(true);
                if (!src)
                    return null;
                if (src.startsWith("ui://")) {
                    let pi = UIPackage.getItemByURL(src);
                    if (pi)
                        src = pi.file;
                }
                if (this.defaultImgWidth)
                    return "<img src=\"" + src + "\" width=\"" + this.defaultImgWidth + "\" height=\"" + this.defaultImgHeight + "\"/>";
                else
                    return "<img src=\"" + src + "\"/>";
            }
            else
                return null;
        }
        onTag_B(tagName, end, attr) {
            return end ? ("</b>") : ("<b class='FGUI_Bold'>");
        }
        onTag_I(tagName, end, attr) {
            return end ? ("</i>") : ("<i class='FGUI_Italic'>");
        }
        onTag_U(tagName, end, attr) {
            return end ? ("</span>") : ("<span class='FGUI_Underline'>");
        }
        onTag_Simple(tagName, end, attr) {
            return end ? ("</" + tagName + ">") : ("<" + tagName + ">");
        }
        onTag_COLOR(tagName, end, attr) {
            if (!end) {
                this.lastColor = attr;
                return "<font color='" + attr + "'>";
            }
            else
                return "</font>";
        }
        onTag_SIZE(tagName, end, attr) {
            if (!end) {
                this.lastSize = attr;
                return "<span class='FGUI_FontSize" + attr + "'>";
            }
            else
                return "</span>";
        }
        getTagText(remove) {
            var pos1 = this._readPos;
            var pos2;
            var result = "";
            while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
                if (this._text.charCodeAt(pos2 - 1) == 92) //\
                 {
                    result += this._text.substring(pos1, pos2 - 1);
                    result += "[";
                    pos1 = pos2 + 1;
                }
                else {
                    result += this._text.substring(pos1, pos2);
                    break;
                }
            }
            if (pos2 == -1)
                return null;
            if (remove)
                this._readPos = pos2;
            return result;
        }
        parse(text, remove) {
            this._text = text;
            this.lastColor = null;
            this.lastSize = null;
            var pos1 = 0, pos2, pos3;
            var end;
            var tag, attr;
            var repl;
            var func;
            var result = "";
            while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
                if (pos2 > 0 && this._text.charCodeAt(pos2 - 1) == 92) //\
                 {
                    result += this._text.substring(pos1, pos2 - 1);
                    result += "[";
                    pos1 = pos2 + 1;
                    continue;
                }
                result += this._text.substring(pos1, pos2);
                pos1 = pos2;
                pos2 = this._text.indexOf("]", pos1);
                if (pos2 == -1)
                    break;
                end = this._text.charAt(pos1 + 1) == '/';
                tag = this._text.substring(end ? pos1 + 2 : pos1 + 1, pos2);
                this._readPos = pos2 + 1;
                attr = null;
                repl = null;
                pos3 = tag.indexOf("=");
                if (pos3 != -1) {
                    attr = tag.substring(pos3 + 1);
                    tag = tag.substring(0, pos3);
                }
                tag = tag.toLowerCase();
                func = this._handlers[tag];
                if (func != null) {
                    if (!remove) {
                        repl = func.call(this, tag, end, attr);
                        if (repl != null)
                            result += repl;
                    }
                }
                else
                    result += this._text.substring(pos1, this._readPos);
                pos1 = this._readPos;
            }
            if (pos1 < this._text.length)
                result += this._text.substr(pos1);
            this._text = null;
            return result;
        }
    }
    var defaultParser = new UBBParser();

    class XMLUtils {
        static decodeString(aSource) {
            let len = aSource.length;
            let sb = "";
            let pos1 = 0, pos2 = 0;
            while (true) {
                pos2 = aSource.indexOf('&', pos1);
                if (pos2 == -1) {
                    sb += aSource.substr(pos1);
                    break;
                }
                sb += aSource.substr(pos1, pos2 - pos1);
                pos1 = pos2 + 1;
                pos2 = pos1;
                let end = Math.min(len, pos2 + 10);
                for (; pos2 < end; pos2++) {
                    if (aSource[pos2] == ';')
                        break;
                }
                if (pos2 < end && pos2 > pos1) {
                    let entity = aSource.substr(pos1, pos2 - pos1);
                    let u = 0;
                    if (entity[0] == '#') {
                        if (entity.length > 1) {
                            if (entity[1] == 'x')
                                u = parseInt(entity.substr(2), 16);
                            else
                                u = parseInt(entity.substr(1));
                            sb += String.fromCharCode(u);
                            pos1 = pos2 + 1;
                        }
                        else
                            sb += '&';
                    }
                    else {
                        switch (entity) {
                            case "amp":
                                u = 38;
                                break;
                            case "apos":
                                u = 39;
                                break;
                            case "gt":
                                u = 62;
                                break;
                            case "lt":
                                u = 60;
                                break;
                            case "nbsp":
                                u = 32;
                                break;
                            case "quot":
                                u = 34;
                                break;
                        }
                        if (u > 0) {
                            sb += String.fromCharCode(u);
                            pos1 = pos2 + 1;
                        }
                        else
                            sb += '&';
                    }
                }
                else {
                    sb += '&';
                }
            }
            return sb;
        }
        static encodeString(str) {
            return str.replace(/&/g, "&amp;").replace(/</g, "&lt;")
                .replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
        }
        static getString(attrs, attrName, defValue) {
            if (attrs == null)
                return defValue == null ? null : defValue;
            let ret = attrs[attrName];
            if (ret != null)
                return "" + ret;
            else
                return defValue == null ? null : defValue;
        }
        static getInt(attrs, attrName, defValue) {
            let value = this.getString(attrs, attrName);
            if (value == null || value.length == 0)
                return defValue == null ? 0 : defValue;
            if (value[value.length - 1] == '%') {
                let ret = parseInt(value.substring(0, value.length - 1));
                return Math.ceil(ret / 100.0 * defValue);
            }
            else
                return parseInt(value);
        }
        static getFloat(attrs, attrName, defValue) {
            let value = this.getString(attrs, attrName);
            if (value == null || value.length == 0)
                return defValue == null ? 0 : defValue;
            let ret = parseFloat(value);
            if (isNaN(ret))
                return defValue == null ? 0 : defValue;
            else
                return ret;
        }
        static getBool(attrs, attrName, defValue) {
            let value = this.getString(attrs, attrName);
            if (value == null || value.length == 0)
                return defValue == null ? false : defValue;
            if (value == "true" || value == "1")
                return true;
            else if (value == "false" || value == "0")
                return false;
            else
                return defValue == null ? false : defValue;
        }
        static getColor(attrs, attrName, defValue) {
            let value = this.getString(attrs, attrName);
            if (value == null || value.length == 0)
                return defValue == null ? 0 : defValue;
            s_color.parseHexString(value);
            return s_color.getHex();
        }
    }
    let s_color = new Color();

    class GTextField extends GObject {
        constructor(name) {
            super(name);
            let tf = this._element.textFormat;
            tf.font = UIConfig.defaultFont;
            tf.size = 12;
            tf.lineSpacing = 3;
            this._element.applyFormat();
            this._text = "";
            this._element.autoSize = AutoSizeType.Both;
        }
        createElement() {
            this._element = new TextField();
            this._element.$owner = this;
            this._element.init();
            this._element.setNotInteractable();
        }
        get element() {
            return this._element;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            if (value == null)
                value = "";
            this._text = value;
            this.setText();
            this.updateSize();
            this.updateGear(6);
        }
        setText() {
            let str = this._text;
            if (this._template)
                str = this.parseTemplate(str);
            this._element.maxWidth = this.maxWidth;
            if (this._ubbEnabled)
                this._element.htmlText = defaultParser.parse(XMLUtils.encodeString(str));
            else
                this._element.text = str;
        }
        get textTemplate() {
            return this._template;
        }
        set textTemplate(value) {
            if (!this._template && !value)
                return;
            this._template = value;
            this.flushVars();
        }
        setVar(name, value) {
            if (!this._template)
                this._template = {};
            this._template[name] = value;
            return this;
        }
        flushVars() {
            this.setText();
            this.updateSize();
        }
        get textFormat() {
            return this._element.textFormat;
        }
        applyFormat() {
            this._element.applyFormat();
            if (!this._underConstruct)
                this.updateSize();
        }
        get singleLine() {
            return this._element.singleLine;
        }
        set singleLine(value) {
            this._element.singleLine = value;
        }
        set ubbEnabled(value) {
            this._ubbEnabled = value;
        }
        get ubbEnabled() {
            return this._ubbEnabled;
        }
        get autoSize() {
            return this._element.autoSize;
        }
        set autoSize(value) {
            this._element.autoSize = value;
        }
        get color() {
            return this._element.textFormat.color;
        }
        set color(value) {
            if (this._element.textFormat.color != value) {
                // if (this.grayed)
                //     this._element.color = "#AAAAAA";
                // else
                //     this._element.color = this._color;
                this._element.textFormat.color = value;
                this._element.applyFormat();
                this.updateGear(4);
            }
        }
        get textWidth() {
            return this._element.textWidth;
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Color:
                    return this.color;
                case ObjectPropID.OutlineColor:
                    return this._element.textFormat.outlineColor;
                case ObjectPropID.FontSize:
                    return this._element.textFormat.size;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Color:
                    this.color = value;
                    break;
                case ObjectPropID.OutlineColor:
                    this._element.textFormat.outlineColor = value;
                    this._element.applyFormat();
                    break;
                case ObjectPropID.FontSize:
                    this._element.textFormat.size = value;
                    this._element.applyFormat();
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        updateSize() {
            if (this._updatingSize)
                return;
            this._updatingSize = true;
            if (this._element.autoSize == AutoSizeType.Both) {
                this.setSize(this._element.width, this._element.height);
            }
            else if (this._element.autoSize == AutoSizeType.Height) {
                this.height = this._element.height;
            }
            this._updatingSize = false;
        }
        handleSizeChanged() {
            if (this._updatingSize)
                return;
            if (this._underConstruct)
                this._element.setSize(this.width, this.height);
            else {
                if (this._element.autoSize == AutoSizeType.Height) {
                    this._element.width = this.width; //先调整宽度，让文本重排
                    if (this._text != "") //文本为空时，1是本来就不需要调整， 2是为了防止改掉文本为空时的默认高度，造成关联错误
                        this.setSizeDirectly(this.width, this._element.height);
                }
                else {
                    this._element.setSize(this.width, this.height);
                }
            }
        }
        // protected handleGrayedChanged(): void {
        //     super.handleGrayedChanged();
        //     if (this.grayed)
        //         this._element.color = "#AAAAAA";
        //     else
        //         this._element.color = this._color;
        // }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            let tf = this._element.textFormat;
            tf.font = buffer.readS();
            tf.size = buffer.readShort();
            tf.color = buffer.readColor();
            let c = buffer.readByte();
            tf.align = c == 0 ? "left" : (c == 1 ? "center" : "right");
            c = buffer.readByte();
            tf.verticalAlign = c == 0 ? "top" : (c == 1 ? "middle" : "bottom");
            tf.lineSpacing = buffer.readShort();
            tf.letterSpacing = buffer.readShort();
            this.ubbEnabled = buffer.readBool();
            this.autoSize = buffer.readByte();
            tf.underline = buffer.readBool();
            tf.italic = buffer.readBool();
            tf.bold = buffer.readBool();
            this.singleLine = buffer.readBool();
            if (buffer.readBool()) {
                tf.outlineColor = buffer.readColor();
                tf.outline = buffer.readFloat();
            }
            if (buffer.readBool()) //shadow
             {
                tf.shadowColor = buffer.readColor();
                let f1 = buffer.readFloat();
                let f2 = buffer.readFloat();
                tf.shadowOffset.set(f1, f2);
            }
            if (buffer.readBool())
                this._template = {};
            if (buffer.version >= 3)
                tf.strikethrough = buffer.readBool();
            this._element.applyFormat();
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            buffer.seek(beginPos, 6);
            var str = buffer.readS();
            if (str != null)
                this.text = str;
        }
        parseTemplate(template) {
            var pos1 = 0, pos2, pos3;
            var tag;
            var value;
            var result = "";
            while ((pos2 = template.indexOf("{", pos1)) != -1) {
                if (pos2 > 0 && template.charCodeAt(pos2 - 1) == 92) //\
                 {
                    result += template.substring(pos1, pos2 - 1);
                    result += "{";
                    pos1 = pos2 + 1;
                    continue;
                }
                result += template.substring(pos1, pos2);
                pos1 = pos2;
                pos2 = template.indexOf("}", pos1);
                if (pos2 == -1)
                    break;
                if (pos2 == pos1 + 1) {
                    result += template.substr(pos1, 2);
                    pos1 = pos2 + 1;
                    continue;
                }
                tag = template.substring(pos1 + 1, pos2);
                pos3 = tag.indexOf("=");
                if (pos3 != -1) {
                    value = this._template[tag.substring(0, pos3)];
                    if (value == null)
                        result += tag.substring(pos3 + 1);
                    else
                        result += value;
                }
                else {
                    value = this._template[tag];
                    if (value != null)
                        result += value;
                }
                pos1 = pos2 + 1;
            }
            if (pos1 < template.length)
                result += template.substr(pos1);
            return result;
        }
    }

    class GRichTextField extends GTextField {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new TextField();
            this._element.$owner = this;
            this._element.init();
        }
        setText() {
            let str = this._text;
            if (this._template)
                str = this.parseTemplate(str);
            this._element.maxWidth = this.maxWidth;
            defaultParser.linkClass = this.linkClass || UIConfig.defaultLinkClass;
            if (this._ubbEnabled)
                str = defaultParser.parse(str);
            str = str.replace(/\r\n|\n/g, "<br>");
            this._element.htmlText = str;
        }
    }
    class InputTextField extends UIElement {
        constructor() {
            super();
            this._textFormat = new TextFormat();
            this._text = "";
            this._singleLine = true;
        }
        init() {
            super.init();
            this._input = $.CreatePanel("TextEntry", $('#HiddenRoot'), this.$owner.name);
            if (this._singleLine) {
                this._input.style.whiteSpace = "nowrap";
            }
            else {
                this._input.style.whiteSpace = "normal";
            }
            this.nativePanel = this._input;
            this._input.SetPanelEvent('onfocus', function () {
                // this.stage.setFocus(this, true);
            });
            this._input.SetPanelEvent('oncancel', function () {
            });
            this._input.SetPanelEvent('ontextentrychange', () => {
                if (this._skipEvent == true) {
                    this._skipEvent = false;
                    return;
                }
                this._text = this._input.text;
                this.$owner.emit("changed");
                // this.onTextUpdate();
            });
            this.onTextUpdate();
        }
        //处理密码类型的
        onTextUpdate() {
            this._skipEvent = true;
            this._oldText = this._input.text;
            // if (this._password)
            // {
            //     var passstr = "";
            //     for (var i = 0; i < this._text.length; i++) {
            //         passstr += '*';
            //     }
            //     this._input.text = passstr;
            // }
            // else
            {
                this._input.text = this._text;
            }
        }
        get textFormat() {
            return this._textFormat;
        }
        applyFormat() {
            let fontName = this._textFormat.font;
            if (!fontName)
                fontName = UIConfig.defaultFont;
            if (this._textFormat.align != undefined)
                this._input.style.textAlign = this._textFormat.align;
            this._input.style.verticalAlign = this._textFormat.verticalAlign;
            this._input.style.fontSize = this._textFormat.size + "px";
            this._input.style.fontFamily = fontName;
            this._input.style.color = convertToHtmlColor(this._textFormat.color);
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this._text = value;
            this.onTextUpdate();
        }
        get singleLine() {
            return this._singleLine;
        }
        set singleLine(value) {
            if (this._singleLine != value) {
                this._singleLine = value;
                // if (this._singleLine) {
                //     this.nativePanel.style.whiteSpace = "nowrap";
                // } else {
                //     this.nativePanel.style.whiteSpace = "normal";
                // }
            }
        }
        updateTouchableFlag() {
            super.updateTouchableFlag();
            // if (isAnyEditing)
            //     this._input.setSelectionRange(0, 0);
            // this._input.disabled = this.nativePanel.style.pointerEvents == "none";
        }
        setPromptText(value) {
            this._input.placeholder = defaultParser.parse(value, true);
        }
        setMaxLength(value) {
            if (value > 0)
                this._input.SetMaxChars(value);
        }
        setKeyboardType(keyboardType) {
        }
        setRestrict(value) {
        }
        get editable() {
            // return !this._input.readOnly;
            return true;
        }
        set editable(value) {
            // this._input.readOnly = !value;
        }
        get password() {
            return this._password;
        }
        set password(value) {
            if (this._password != value) {
                this._password = value;
                this.onTextUpdate();
            }
        }
        setSelection(start, end) {
            // this._input.setSelectionRange(start, end);
        }
    }

    class GTextInput extends GObject {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new InputTextField();
            this._element.$owner = this;
            this._element.init();
        }
        get element() {
            return this._element;
        }
        get text() {
            return this._element.text;
        }
        set text(value) {
            if (value == null)
                value = "";
            this._element.text = value;
            this.updateGear(6);
        }
        get textFormat() {
            return this._element.textFormat;
        }
        applyFormat() {
            this._element.applyFormat();
        }
        get singleLine() {
            return this._element.singleLine;
        }
        set singleLine(value) {
            this._element.singleLine = value;
        }
        get color() {
            return this._element.textFormat.color;
        }
        set color(value) {
            if (this._element.textFormat.color != value) {
                this._element.textFormat.color = value;
                this._element.applyFormat();
                this.updateGear(4);
            }
        }
        get password() {
            return this._element.password;
        }
        set password(value) {
            this._element.password = value;
        }
        set editable(value) {
            this._element.editable = value;
        }
        get editable() {
            return this._element.editable;
        }
        setMaxLength(value) {
            this._element.setMaxLength(value);
        }
        setPromptText(value) {
            return this._element.setPromptText(value);
        }
        setRestrict(value) {
            this._element.setRestrict(value);
        }
        setKeyboardType(value) {
            this._element.setKeyboardType(value);
        }
        setSelection(start, end) {
            this._element.setSelection(start, end);
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Color:
                    return this.color;
                case ObjectPropID.OutlineColor:
                    return this._element.textFormat.outlineColor;
                case ObjectPropID.FontSize:
                    return this._element.textFormat.size;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Color:
                    this.color = value;
                    break;
                case ObjectPropID.OutlineColor:
                    this._element.textFormat.outlineColor = value;
                    this._element.applyFormat();
                    break;
                case ObjectPropID.FontSize:
                    this._element.textFormat.size = value;
                    this._element.applyFormat();
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            let tf = this._element.textFormat;
            tf.font = buffer.readS();
            tf.size = buffer.readShort();
            tf.color = buffer.readColor();
            let c = buffer.readByte();
            tf.align = c == 0 ? "left" : (c == 1 ? "center" : "right");
            c = buffer.readByte();
            tf.verticalAlign = c == 0 ? "top" : (c == 1 ? "middle" : "bottom");
            tf.lineSpacing = buffer.readShort();
            tf.letterSpacing = buffer.readShort();
            buffer.readBool(); //ubbEnabled
            buffer.readByte(); //autoSize
            tf.underline = buffer.readBool();
            tf.italic = buffer.readBool();
            tf.bold = buffer.readBool();
            this.singleLine = buffer.readBool();
            if (buffer.readBool()) {
                tf.outlineColor = buffer.readColor();
                tf.outline = buffer.readFloat() + 1;
            }
            if (buffer.readBool()) //shadow
             {
                tf.shadowColor = buffer.readColor();
                let f1 = buffer.readFloat();
                let f2 = buffer.readFloat();
                tf.shadowOffset.set(f1, f2);
            }
            buffer.readBool(); //template
            if (buffer.version >= 3)
                tf.strikethrough = buffer.readBool();
            this._element.applyFormat();
            buffer.seek(beginPos, 4);
            var str = buffer.readS();
            if (str != null)
                this.setPromptText(str);
            str = buffer.readS();
            if (str != null)
                this.setRestrict(str);
            var iv = buffer.readInt();
            if (iv != 0)
                this.setMaxLength(iv);
            iv = buffer.readInt();
            if (iv != 0) {
                if (iv == 4)
                    this.setKeyboardType("number");
                else if (iv == 3)
                    this.setKeyboardType("url");
            }
            if (buffer.readBool())
                this.password = true;
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            buffer.seek(beginPos, 6);
            var str = buffer.readS();
            if (str != null)
                this.text = str;
        }
    }

    class ControllerAction {
        constructor() {
        }
        run(controller, prevPage, curPage) {
            if ((!this.fromPage || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1)
                && (!this.toPage || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1))
                this.enter(controller);
            else
                this.leave(controller);
        }
        enter(controller) {
        }
        leave(controller) {
        }
        setup(buffer) {
            var cnt;
            var i;
            cnt = buffer.readShort();
            this.fromPage = [];
            for (i = 0; i < cnt; i++)
                this.fromPage[i] = buffer.readS();
            cnt = buffer.readShort();
            this.toPage = [];
            for (i = 0; i < cnt; i++)
                this.toPage[i] = buffer.readS();
        }
    }

    class PlayTransitionAction extends ControllerAction {
        constructor() {
            super();
            this.playTimes = 1;
            this.delay = 0;
        }
        enter(controller) {
            var trans = controller.parent.getTransition(this.transitionName);
            if (trans) {
                if (this._currentTransition && this._currentTransition.playing)
                    trans.changePlayTimes(this.playTimes);
                else
                    trans.play(null, this.playTimes, this.delay);
                this._currentTransition = trans;
            }
        }
        leave(controller) {
            if (this.stopOnExit && this._currentTransition) {
                this._currentTransition.stop();
                this._currentTransition = null;
            }
        }
        setup(buffer) {
            super.setup(buffer);
            this.transitionName = buffer.readS();
            this.playTimes = buffer.readInt();
            this.delay = buffer.readFloat();
            this.stopOnExit = buffer.readBool();
        }
    }

    class ChangePageAction extends ControllerAction {
        constructor() {
            super();
        }
        enter(controller) {
            if (!this.controllerName)
                return;
            var gcom;
            if (this.objectId)
                gcom = controller.parent.getChildById(this.objectId);
            else
                gcom = controller.parent;
            if (gcom) {
                var cc = gcom.getController(this.controllerName);
                if (cc && cc != controller && !cc.changing) {
                    if (this.targetPage == "~1") {
                        if (controller.selectedIndex < cc.pageCount)
                            cc.selectedIndex = controller.selectedIndex;
                    }
                    else if (this.targetPage == "~2")
                        cc.selectedPage = controller.selectedPage;
                    else
                        cc.selectedPageId = this.targetPage;
                }
            }
        }
        setup(buffer) {
            super.setup(buffer);
            this.objectId = buffer.readS();
            this.controllerName = buffer.readS();
            this.targetPage = buffer.readS();
        }
    }

    var _nextPageId = 0;
    class Controller extends EventDispatcher {
        constructor() {
            super();
            this.changing = false;
            this._pageIds = [];
            this._pageNames = [];
            this._selectedIndex = -1;
            this._previousIndex = -1;
        }
        dispose() {
            this.offAll();
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(value) {
            if (this._selectedIndex != value) {
                if (value > this._pageIds.length - 1)
                    throw "index out of bounds: " + value;
                this.changing = true;
                this._previousIndex = this._selectedIndex;
                this._selectedIndex = value;
                this.parent.applyController(this);
                this.emit.call(this, "status_changed");
                this.changing = false;
            }
        }
        //功能和设置selectedIndex一样，但不会触发事件
        setSelectedIndex(value) {
            if (this._selectedIndex != value) {
                if (value > this._pageIds.length - 1)
                    throw "index out of bounds: " + value;
                this.changing = true;
                this._previousIndex = this._selectedIndex;
                this._selectedIndex = value;
                this.parent.applyController(this);
                this.changing = false;
            }
        }
        get previsousIndex() {
            return this._previousIndex;
        }
        get selectedPage() {
            if (this._selectedIndex == -1)
                return null;
            else
                return this._pageNames[this._selectedIndex];
        }
        set selectedPage(val) {
            var i = this._pageNames.indexOf(val);
            if (i == -1)
                i = 0;
            this.selectedIndex = i;
        }
        //功能和设置selectedPage一样，但不会触发事件
        setSelectedPage(value) {
            var i = this._pageNames.indexOf(value);
            if (i == -1)
                i = 0;
            this.setSelectedIndex(i);
        }
        get previousPage() {
            if (this._previousIndex == -1)
                return null;
            else
                return this._pageNames[this._previousIndex];
        }
        get pageCount() {
            return this._pageIds.length;
        }
        getPageName(index) {
            return this._pageNames[index];
        }
        addPage(name) {
            name = name || "";
            this.addPageAt(name, this._pageIds.length);
        }
        addPageAt(name, index) {
            name = name || "";
            var nid = "" + (_nextPageId++);
            if (index == null || index == this._pageIds.length) {
                this._pageIds.push(nid);
                this._pageNames.push(name);
            }
            else {
                this._pageIds.splice(index, 0, nid);
                this._pageNames.splice(index, 0, name);
            }
        }
        removePage(name) {
            var i = this._pageNames.indexOf(name);
            if (i != -1) {
                this._pageIds.splice(i, 1);
                this._pageNames.splice(i, 1);
                if (this._selectedIndex >= this._pageIds.length)
                    this.selectedIndex = this._selectedIndex - 1;
                else
                    this.parent.applyController(this);
            }
        }
        removePageAt(index) {
            this._pageIds.splice(index, 1);
            this._pageNames.splice(index, 1);
            if (this._selectedIndex >= this._pageIds.length)
                this.selectedIndex = this._selectedIndex - 1;
            else
                this.parent.applyController(this);
        }
        clearPages() {
            this._pageIds.length = 0;
            this._pageNames.length = 0;
            if (this._selectedIndex != -1)
                this.selectedIndex = -1;
            else
                this.parent.applyController(this);
        }
        hasPage(aName) {
            return this._pageNames.indexOf(aName) != -1;
        }
        getPageIndexById(aId) {
            return this._pageIds.indexOf(aId);
        }
        getPageIdByName(aName) {
            var i = this._pageNames.indexOf(aName);
            if (i != -1)
                return this._pageIds[i];
            else
                return null;
        }
        getPageNameById(aId) {
            var i = this._pageIds.indexOf(aId);
            if (i != -1)
                return this._pageNames[i];
            else
                return null;
        }
        getPageId(index) {
            return this._pageIds[index];
        }
        get selectedPageId() {
            if (this._selectedIndex == -1)
                return null;
            else
                return this._pageIds[this._selectedIndex];
        }
        set selectedPageId(val) {
            var i = this._pageIds.indexOf(val);
            this.selectedIndex = i;
        }
        set oppositePageId(val) {
            var i = this._pageIds.indexOf(val);
            if (i > 0)
                this.selectedIndex = 0;
            else if (this._pageIds.length > 1)
                this.selectedIndex = 1;
        }
        get previousPageId() {
            if (this._previousIndex == -1)
                return null;
            else
                return this._pageIds[this._previousIndex];
        }
        runActions() {
            if (this._actions) {
                var cnt = this._actions.length;
                for (var i = 0; i < cnt; i++) {
                    this._actions[i].run(this, this.previousPageId, this.selectedPageId);
                }
            }
        }
        setup(buffer) {
            var beginPos = buffer.pos;
            buffer.seek(beginPos, 0);
            this.name = buffer.readS();
            if (buffer.readBool())
                this.autoRadioGroupDepth = true;
            buffer.seek(beginPos, 1);
            var i;
            var nextPos;
            var cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                this._pageIds.push(buffer.readS());
                this._pageNames.push(buffer.readS());
            }
            var homePageIndex = 0;
            if (buffer.version >= 2) {
                var homePageType = buffer.readByte();
                switch (homePageType) {
                    case 1:
                        homePageIndex = buffer.readShort();
                        break;
                    case 2:
                        homePageIndex = this._pageNames.indexOf(UIPackage.branch);
                        if (homePageIndex == -1)
                            homePageIndex = 0;
                        break;
                    case 3:
                        homePageIndex = this._pageNames.indexOf(UIPackage.getVar(buffer.readS()));
                        if (homePageIndex == -1)
                            homePageIndex = 0;
                        break;
                }
            }
            buffer.seek(beginPos, 2);
            cnt = buffer.readShort();
            if (cnt > 0) {
                if (this._actions == null)
                    this._actions = [];
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.readShort();
                    nextPos += buffer.pos;
                    var action = createAction(buffer.readByte());
                    action.setup(buffer);
                    this._actions.push(action);
                    buffer.pos = nextPos;
                }
            }
            if (this.parent && this._pageIds.length > 0)
                this._selectedIndex = homePageIndex;
            else
                this._selectedIndex = -1;
        }
    }
    function createAction(type) {
        switch (type) {
            case 0:
                return new PlayTransitionAction();
            case 1:
                return new ChangePageAction();
        }
        return null;
    }

    var s_vec2$2 = new Vec2();
    var s_rect = new Rect();
    var s_endPos = new Vec2();
    var s_oldChange = new Vec2();
    var s_gestureFlag = 0;
    const TWEEN_TIME_GO = 0.5; //调用SetPos(ani)时使用的缓动时间
    const TWEEN_TIME_DEFAULT = 0.3; //惯性滚动的最小缓动时间
    const PULL_RATIO = 0.5; //下拉过顶或者上拉过底时允许超过的距离占显示区域的比例
    class ScrollPane {
        constructor(owner) {
            this._owner = owner;
            this._maskContainer = new UIElement();
            this._maskContainer.$owner = owner;
            this._maskContainer.initElement();
            this._maskContainer.opaque = false;
            this._owner.element.addChild(this._maskContainer);
            this._container = this._owner._container;
            this._container.setPosition(0, 0);
            this._maskContainer.addChild(this._container);
            this._mouseWheelEnabled = true;
            this._xPos = 0;
            this._yPos = 0;
            this._aniFlag = 0;
            this._tweening = 0;
            this._loop = 0;
            this._footerLockedSize = 0;
            this._headerLockedSize = 0;
            this._scrollBarMargin = new Margin();
            this._viewSize = new Vec2();
            this._contentSize = new Vec2();
            this._pageSize = new Vec2(1, 1);
            this._overlapSize = new Vec2();
            this._tweenTime = new Vec2();
            this._tweenStart = new Vec2();
            this._tweenDuration = new Vec2();
            this._tweenChange = new Vec2();
            this._velocity = new Vec2();
            this._containerPos = new Vec2();
            this._beginTouchPos = new Vec2();
            this._lastTouchPos = new Vec2();
            this._lastTouchGlobalPos = new Vec2();
            this._scrollStep = UIConfig.defaultScrollStep;
            this._decelerationRate = UIConfig.defaultScrollDecelerationRate;
            this._owner.onEvent('onTouchBegin', this.__touchBegin, this);
            this._owner.onEvent('onTouchMove', this.__touchMove, this);
            this._owner.onEvent('onTouchEnd', this.__touchEnd, this);
            this._owner.onEvent('onMouseWheel', this.__mouseWheel, this);
        }
        setup(buffer) {
            this._scrollType = buffer.readByte();
            var scrollBarDisplay = buffer.readByte();
            var flags = buffer.readInt();
            if (buffer.readBool()) {
                this._scrollBarMargin.top = buffer.readInt();
                this._scrollBarMargin.bottom = buffer.readInt();
                this._scrollBarMargin.left = buffer.readInt();
                this._scrollBarMargin.right = buffer.readInt();
            }
            var vtScrollBarRes = buffer.readS();
            var hzScrollBarRes = buffer.readS();
            var headerRes = buffer.readS();
            var footerRes = buffer.readS();
            if ((flags & 1) != 0)
                this._displayOnLeft = true;
            if ((flags & 2) != 0)
                this._snapToItem = true;
            if ((flags & 4) != 0)
                this._displayInDemand = true;
            if ((flags & 8) != 0)
                this._pageMode = true;
            if (flags & 16)
                this._touchEffect = true;
            else if (flags & 32)
                this._touchEffect = false;
            else
                this._touchEffect = UIConfig.defaultScrollTouchEffect;
            if (flags & 64)
                this._bouncebackEffect = true;
            else if (flags & 128)
                this._bouncebackEffect = false;
            else
                this._bouncebackEffect = UIConfig.defaultScrollBounceEffect;
            if ((flags & 256) != 0)
                this._inertiaDisabled = true;
            if ((flags & 512) == 0)
                this._owner.element.clipping = true; //dont clip flag
            if ((flags & 1024) != 0)
                this._floating = true;
            if ((flags & 2048) == 0)
                this._maskContainer.clipping = true; //dont clip margin flag
            if (scrollBarDisplay == ScrollBarDisplayType.Default)
                scrollBarDisplay = UIConfig.defaultScrollBarDisplay;
            if (scrollBarDisplay != ScrollBarDisplayType.Hidden) {
                if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) {
                    var res = vtScrollBarRes ? vtScrollBarRes : UIConfig.verticalScrollBar;
                    if (res) {
                        this._vtScrollBar = (UIPackage.createObjectFromURL(res));
                        if (!this._vtScrollBar)
                            throw "cannot create scrollbar from " + res;
                        this._vtScrollBar.setScrollPane(this, true);
                        this._owner.element.addChild(this._vtScrollBar.element);
                    }
                }
                if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Horizontal) {
                    res = hzScrollBarRes ? hzScrollBarRes : UIConfig.horizontalScrollBar;
                    if (res) {
                        this._hzScrollBar = (UIPackage.createObjectFromURL(res));
                        if (!this._hzScrollBar)
                            throw "cannot create scrollbar from " + res;
                        this._hzScrollBar.setScrollPane(this, false);
                        this._owner.element.addChild(this._hzScrollBar.element);
                    }
                }
                if (scrollBarDisplay == ScrollBarDisplayType.Auto)
                    this._scrollBarDisplayAuto = true;
                if (this._scrollBarDisplayAuto) {
                    if (this._vtScrollBar)
                        this._vtScrollBar.element.visible = false;
                    if (this._hzScrollBar)
                        this._hzScrollBar.element.visible = false;
                    this._owner.onEvent("onmouseover", this.__rollOver, this);
                    this._owner.onEvent("onmouseout", this.__rollOut, this);
                }
            }
            else
                this._mouseWheelEnabled = false;
            if (headerRes) {
                this._header = UIPackage.createObjectFromURL(headerRes);
                if (!this._header)
                    throw new Error("cannot create scrollPane header from " + headerRes);
            }
            if (footerRes) {
                this._footer = UIPackage.createObjectFromURL(footerRes);
                if (!this._footer)
                    throw new Error("cannot create scrollPane footer from " + footerRes);
            }
            if (this._header || this._footer)
                this._refreshBarAxis = (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) ? "y" : "x";
            this.setSize(this.owner.width, this.owner.height);
        }
        dispose() {
            if (this._tweening != 0)
                Timers.remove(this.tweenUpdate, this);
            delete this._pageController;
            if (this._hzScrollBar)
                this._hzScrollBar.dispose();
            if (this._vtScrollBar)
                this._vtScrollBar.dispose();
            if (this._header)
                this._header.dispose();
            if (this._footer)
                this._footer.dispose();
        }
        get owner() {
            return this._owner;
        }
        get hzScrollBar() {
            return this._hzScrollBar;
        }
        get vtScrollBar() {
            return this._vtScrollBar;
        }
        get header() {
            return this._header;
        }
        get footer() {
            return this._footer;
        }
        get bouncebackEffect() {
            return this._bouncebackEffect;
        }
        set bouncebackEffect(sc) {
            this._bouncebackEffect = sc;
        }
        get touchEffect() {
            return this._touchEffect;
        }
        set touchEffect(sc) {
            this._touchEffect = sc;
        }
        set scrollStep(val) {
            this._scrollStep = val;
            if (this._scrollStep == 0)
                this._scrollStep = UIConfig.defaultScrollStep;
        }
        get scrollStep() {
            return this._scrollStep;
        }
        get snapToItem() {
            return this._snapToItem;
        }
        set snapToItem(value) {
            this._snapToItem = value;
        }
        get mouseWheelEnabled() {
            return this._mouseWheelEnabled;
        }
        set mouseWheelEnabled(value) {
            this._mouseWheelEnabled = value;
        }
        get decelerationRate() {
            return this._decelerationRate;
        }
        set decelerationRate(value) {
            this._decelerationRate = value;
        }
        get isDragged() {
            return this._dragged;
        }
        get percX() {
            return this._overlapSize.x == 0 ? 0 : this._xPos / this._overlapSize.x;
        }
        set percX(value) {
            this.setPercX(value, false);
        }
        setPercX(value, ani) {
            this._owner.ensureBoundsCorrect();
            this.setPosX(this._overlapSize.x * clamp01(value), ani);
        }
        get percY() {
            return this._overlapSize.y == 0 ? 0 : this._yPos / this._overlapSize.y;
        }
        set percY(value) {
            this.setPercY(value, false);
        }
        setPercY(value, ani) {
            this._owner.ensureBoundsCorrect();
            this.setPosY(this._overlapSize.y * clamp01(value), ani);
        }
        get posX() {
            return this._xPos;
        }
        set posX(value) {
            this.setPosX(value, false);
        }
        setPosX(value, ani) {
            this._owner.ensureBoundsCorrect();
            if (this._loop == 1)
                value = this.loopCheckingNewPos(value, "x");
            value = clamp(value, 0, this._overlapSize.x);
            if (value != this._xPos) {
                this._xPos = value;
                this.posChanged(ani);
            }
        }
        get posY() {
            return this._yPos;
        }
        set posY(value) {
            this.setPosY(value, false);
        }
        setPosY(value, ani) {
            this._owner.ensureBoundsCorrect();
            if (this._loop == 1)
                value = this.loopCheckingNewPos(value, "y");
            value = clamp(value, 0, this._overlapSize.y);
            if (value != this._yPos) {
                this._yPos = value;
                this.posChanged(ani);
            }
        }
        get contentWidth() {
            return this._contentSize.x;
        }
        get contentHeight() {
            return this._contentSize.y;
        }
        get viewWidth() {
            return this._viewSize.x;
        }
        set viewWidth(value) {
            value = value + this._owner.margin.left + this._owner.margin.right;
            if (this._vtScrollBar && !this._floating)
                value += this._vtScrollBar.width;
            this._owner.width = value;
        }
        get viewHeight() {
            return this._viewSize.y;
        }
        set viewHeight(value) {
            value = value + this._owner.margin.top + this._owner.margin.bottom;
            if (this._hzScrollBar && !this._floating)
                value += this._hzScrollBar.height;
            this._owner.height = value;
        }
        get currentPageX() {
            if (!this._pageMode)
                return 0;
            var page = Math.floor(this._xPos / this._pageSize.x);
            if (this._xPos - page * this._pageSize.x > this._pageSize.x * 0.5)
                page++;
            return page;
        }
        set currentPageX(value) {
            this.setCurrentPageX(value, false);
        }
        get currentPageY() {
            if (!this._pageMode)
                return 0;
            var page = Math.floor(this._yPos / this._pageSize.y);
            if (this._yPos - page * this._pageSize.y > this._pageSize.y * 0.5)
                page++;
            return page;
        }
        set currentPageY(value) {
            this.setCurrentPageY(value, false);
        }
        setCurrentPageX(value, ani) {
            if (!this._pageMode)
                return;
            this._owner.ensureBoundsCorrect();
            if (this._overlapSize.x > 0)
                this.setPosX(value * this._pageSize.x, ani);
        }
        setCurrentPageY(value, ani) {
            if (!this._pageMode)
                return;
            this._owner.ensureBoundsCorrect();
            if (this._overlapSize.y > 0)
                this.setPosY(value * this._pageSize.y, ani);
        }
        get isBottomMost() {
            return this._yPos == this._overlapSize.y || this._overlapSize.y == 0;
        }
        get isRightMost() {
            return this._xPos == this._overlapSize.x || this._overlapSize.x == 0;
        }
        get pageController() {
            return this._pageController;
        }
        set pageController(value) {
            this._pageController = value;
        }
        get scrollingPosX() {
            return clamp(-this._container.x, 0, this._overlapSize.x);
        }
        get scrollingPosY() {
            return clamp(-this._container.y, 0, this._overlapSize.y);
        }
        scrollTop(ani) {
            this.setPercY(0, ani);
        }
        scrollBottom(ani) {
            this.setPercY(1, ani);
        }
        scrollUp(ratio, ani) {
            ratio = ratio || 1;
            if (this._pageMode)
                this.setPosY(this._yPos - this._pageSize.y * ratio, ani);
            else
                this.setPosY(this._yPos - this._scrollStep * ratio, ani);
        }
        scrollDown(ratio, ani) {
            ratio = ratio || 1;
            if (this._pageMode)
                this.setPosY(this._yPos + this._pageSize.y * ratio, ani);
            else
                this.setPosY(this._yPos + this._scrollStep * ratio, ani);
        }
        scrollLeft(ratio, ani) {
            ratio = ratio || 1;
            if (this._pageMode)
                this.setPosX(this._xPos - this._pageSize.x * ratio, ani);
            else
                this.setPosX(this._xPos - this._scrollStep * ratio, ani);
        }
        scrollRight(ratio, ani) {
            ratio = ratio || 1;
            if (this._pageMode)
                this.setPosX(this._xPos + this._pageSize.x * ratio, ani);
            else
                this.setPosX(this._xPos + this._scrollStep * ratio, ani);
        }
        scrollToView(target, ani, setFirst) {
            this._owner.ensureBoundsCorrect();
            if (this._needRefresh)
                this.refresh();
            var rect;
            if (target instanceof GObject) {
                if (target.parent != this._owner) {
                    target.parent.localToGlobalRect(target.x, target.y, target.width, target.height, s_rect);
                    rect = this._owner.globalToLocalRect(s_rect.x, s_rect.y, s_rect.width, s_rect.height, s_rect);
                }
                else {
                    rect = s_rect;
                    rect.set(target.x, target.y, target.width, target.height);
                }
            }
            else
                rect = target;
            if (this._overlapSize.y > 0) {
                var bottom = this._yPos + this._viewSize.y;
                if (setFirst || rect.y <= this._yPos) {
                    if (rect.y + rect.height >= bottom) //if an item size is large than viewSize, dont scroll
                        return;
                    if (this._pageMode)
                        this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                    else
                        this.setPosY(rect.y, ani);
                }
                else if (rect.y + rect.height > bottom) {
                    if (this._pageMode)
                        this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                    else if (rect.height <= this._viewSize.y / 2)
                        this.setPosY(rect.y + rect.height * 2 - this._viewSize.y, ani);
                    else
                        this.setPosY(rect.y + Math.min(rect.height - this._viewSize.y, 0), ani);
                }
            }
            if (this._overlapSize.x > 0) {
                var right = this._xPos + this._viewSize.x;
                if (setFirst || rect.x <= this._xPos) {
                    if (rect.x + rect.width >= right) //if an item size is large than viewSize, dont scroll
                        return;
                    if (this._pageMode)
                        this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                    else
                        this.setPosX(rect.x, ani);
                }
                else if (rect.x + rect.width > right) {
                    if (this._pageMode)
                        this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                    else if (rect.width <= this._viewSize.x / 2)
                        this.setPosX(rect.x + rect.width * 2 - this._viewSize.x, ani);
                    else
                        this.setPosX(rect.x + Math.min(rect.width - this._viewSize.x, 0), ani);
                }
            }
            if (!ani && this._needRefresh)
                this.refresh();
        }
        isChildInView(obj) {
            if (this._overlapSize.y > 0) {
                var dist = obj.y + this._container.y;
                if (dist < -obj.height || dist > this._viewSize.y)
                    return false;
            }
            if (this._overlapSize.x > 0) {
                dist = obj.x + this._container.x;
                if (dist < -obj.width || dist > this._viewSize.x)
                    return false;
            }
            return true;
        }
        cancelDragging() {
            this._owner.element.stage.removePointerMonitor(this._owner);
            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;
            s_gestureFlag = 0;
            this._dragged = false;
        }
        lockHeader(size) {
            if (this._headerLockedSize == size)
                return;
            this._headerLockedSize = size;
            if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0) {
                this._tweenStart.set(this._container.x, this._container.y);
                this._tweenChange.set(0, 0);
                this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis];
                this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                this.startTween(2);
            }
        }
        lockFooter(size) {
            if (this._footerLockedSize == size)
                return;
            this._footerLockedSize = size;
            if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis]) {
                this._tweenStart.set(this._container.x, this._container.y);
                this._tweenChange.set(0, 0);
                var max = this._overlapSize[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                this._tweenChange[this._refreshBarAxis] = -max - this._tweenStart[this._refreshBarAxis];
                this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                this.startTween(2);
            }
        }
        onOwnerSizeChanged() {
            this.setSize(this._owner.width, this._owner.height);
            this.posChanged(false);
        }
        handleControllerChanged(c) {
            if (this._pageController == c) {
                if (this._scrollType == ScrollType.Horizontal)
                    this.setCurrentPageX(c.selectedIndex, true);
                else
                    this.setCurrentPageY(c.selectedIndex, true);
            }
        }
        updatePageController() {
            if (this._pageController && !this._pageController.changing) {
                var index;
                if (this._scrollType == ScrollType.Horizontal)
                    index = this.currentPageX;
                else
                    index = this.currentPageY;
                if (index < this._pageController.pageCount) {
                    var c = this._pageController;
                    this._pageController = null; //防止HandleControllerChanged的调用
                    c.selectedIndex = index;
                    this._pageController = c;
                }
            }
        }
        adjustMaskContainer() {
            var mx, my;
            if (this._displayOnLeft && this._vtScrollBar && !this._floating)
                mx = Math.floor(this._owner.margin.left + this._vtScrollBar.width);
            else
                mx = Math.floor(this._owner.margin.left);
            my = Math.floor(this._owner.margin.top);
            mx += this._owner._alignOffset.x;
            my += this._owner._alignOffset.y;
            this._maskContainer.setPosition(mx, my);
        }
        setSize(aWidth, aHeight) {
            this.adjustMaskContainer();
            if (this._hzScrollBar) {
                this._hzScrollBar.y = aHeight - this._hzScrollBar.height;
                if (this._vtScrollBar) {
                    this._hzScrollBar.width = aWidth - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                    if (this._displayOnLeft)
                        this._hzScrollBar.x = this._scrollBarMargin.left + this._vtScrollBar.width;
                    else
                        this._hzScrollBar.x = this._scrollBarMargin.left;
                }
                else {
                    this._hzScrollBar.width = aWidth - this._scrollBarMargin.left - this._scrollBarMargin.right;
                    this._hzScrollBar.x = this._scrollBarMargin.left;
                }
            }
            if (this._vtScrollBar) {
                if (!this._displayOnLeft)
                    this._vtScrollBar.x = aWidth - this._vtScrollBar.width;
                if (this._hzScrollBar)
                    this._vtScrollBar.height = aHeight - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
                else
                    this._vtScrollBar.height = aHeight - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
                this._vtScrollBar.y = this._scrollBarMargin.top;
            }
            this._viewSize.x = aWidth;
            this._viewSize.y = aHeight;
            if (this._hzScrollBar && !this._floating)
                this._viewSize.y -= this._hzScrollBar.height;
            if (this._vtScrollBar && !this._floating)
                this._viewSize.x -= this._vtScrollBar.width;
            this._viewSize.x -= (this._owner.margin.left + this._owner.margin.right);
            this._viewSize.y -= (this._owner.margin.top + this._owner.margin.bottom);
            this._viewSize.x = Math.max(1, this._viewSize.x);
            this._viewSize.y = Math.max(1, this._viewSize.y);
            this._pageSize.x = this._viewSize.x;
            this._pageSize.y = this._viewSize.y;
            this.handleSizeChanged();
        }
        setContentSize(aWidth, aHeight) {
            if (this._contentSize.x == aWidth && this._contentSize.y == aHeight)
                return;
            this._contentSize.x = aWidth;
            this._contentSize.y = aHeight;
            this.handleSizeChanged();
        }
        changeContentSizeOnScrolling(deltaWidth, deltaHeight, deltaPosX, deltaPosY) {
            var isRightmost = this._xPos == this._overlapSize.x;
            var isBottom = this._yPos == this._overlapSize.y;
            this._contentSize.x += deltaWidth;
            this._contentSize.y += deltaHeight;
            this.handleSizeChanged();
            if (this._tweening == 1) {
                //如果原来滚动位置是贴边，加入处理继续贴边。
                if (deltaWidth != 0 && isRightmost && this._tweenChange.x < 0) {
                    this._xPos = this._overlapSize.x;
                    this._tweenChange.x = -this._xPos - this._tweenStart.x;
                }
                if (deltaHeight != 0 && isBottom && this._tweenChange.y < 0) {
                    this._yPos = this._overlapSize.y;
                    this._tweenChange.y = -this._yPos - this._tweenStart.y;
                }
            }
            else if (this._tweening == 2) {
                //重新调整起始位置，确保能够顺滑滚下去
                if (deltaPosX != 0) {
                    this._container.x -= deltaPosX;
                    this._tweenStart.x -= deltaPosX;
                    this._xPos = -this._container.x;
                }
                if (deltaPosY != 0) {
                    this._container.y -= deltaPosY;
                    this._tweenStart.y -= deltaPosY;
                    this._yPos = -this._container.y;
                }
            }
            else if (this._dragged) {
                if (deltaPosX != 0) {
                    this._container.x -= deltaPosX;
                    this._containerPos.x -= deltaPosX;
                    this._xPos = -this._container.x;
                }
                if (deltaPosY != 0) {
                    this._container.y -= deltaPosY;
                    this._containerPos.y -= deltaPosY;
                    this._yPos = -this._container.y;
                }
            }
            else {
                //如果原来滚动位置是贴边，加入处理继续贴边。
                if (deltaWidth != 0 && isRightmost) {
                    this._xPos = this._overlapSize.x;
                    this._container.x = -this._xPos;
                }
                if (deltaHeight != 0 && isBottom) {
                    this._yPos = this._overlapSize.y;
                    this._container.y = -this._yPos;
                }
            }
            if (this._pageMode)
                this.updatePageController();
        }
        handleSizeChanged() {
            if (this._displayInDemand) {
                this._vScrollNone = this._contentSize.y <= this._viewSize.y;
                this._hScrollNone = this._contentSize.x <= this._viewSize.x;
                if (this._vtScrollBar && this._hzScrollBar) {
                    if (!this._hScrollNone)
                        this._vtScrollBar.height = this._owner.height - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
                    else
                        this._vtScrollBar.height = this._owner.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
                    if (!this._vScrollNone)
                        this._hzScrollBar.width = this._owner.width - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                    else
                        this._hzScrollBar.width = this._owner.width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                }
            }
            if (this._vtScrollBar) {
                if (this._contentSize.y == 0)
                    this._vtScrollBar.setDisplayPerc(0);
                else
                    this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y));
            }
            if (this._hzScrollBar) {
                if (this._contentSize.x == 0)
                    this._hzScrollBar.setDisplayPerc(0);
                else
                    this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x));
            }
            this.updateScrollBarVisible();
            let mw = this._viewSize.x;
            let mh = this._viewSize.y;
            if (this._vScrollNone && this._vtScrollBar != null)
                mw += this._vtScrollBar.width;
            if (this._hScrollNone && this._hzScrollBar != null)
                mh += this._hzScrollBar.height;
            this._maskContainer.setSize(mw, mh);
            if (this._scrollType == ScrollType.Horizontal || this._scrollType == ScrollType.Both)
                this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x));
            else
                this._overlapSize.x = 0;
            if (this._scrollType == ScrollType.Vertical || this._scrollType == ScrollType.Both)
                this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y));
            else
                this._overlapSize.y = 0;
            //边界检查
            this._xPos = clamp(this._xPos, 0, this._overlapSize.x);
            this._yPos = clamp(this._yPos, 0, this._overlapSize.y);
            if (this._refreshBarAxis) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                if (this._refreshBarAxis == "x") {
                    this._container.setPosition(clamp(this._container.x, -max, this._headerLockedSize), clamp(this._container.y, -this._overlapSize.y, 0));
                }
                else {
                    this._container.setPosition(clamp(this._container.x, -this._overlapSize.x, 0), clamp(this._container.y, -max, this._headerLockedSize));
                }
                if (this._header) {
                    if (this._refreshBarAxis == "x")
                        this._header.height = this._viewSize.y;
                    else
                        this._header.width = this._viewSize.x;
                }
                if (this._footer) {
                    if (this._refreshBarAxis == "y")
                        this._footer.height = this._viewSize.y;
                    else
                        this._footer.width = this._viewSize.x;
                }
            }
            else {
                this._container.setPosition(clamp(this._container.x, -this._overlapSize.x, 0), clamp(this._container.y, -this._overlapSize.y, 0));
            }
            this.updateScrollBarPos();
            if (this._pageMode)
                this.updatePageController();
        }
        posChanged(ani) {
            if (this._aniFlag == 0)
                this._aniFlag = ani ? 1 : -1;
            else if (this._aniFlag == 1 && !ani)
                this._aniFlag = -1;
            this._needRefresh = true;
            Timers.callLater(this.refresh, this);
        }
        refresh() {
            if (this._owner.element == null) {
                return;
            }
            this._needRefresh = false;
            Timers.remove(this.refresh, this);
            if (this._pageMode || this._snapToItem) {
                s_endPos.set(-this._xPos, -this._yPos);
                this.alignPosition(s_endPos, false);
                this._xPos = -s_endPos.x;
                this._yPos = -s_endPos.y;
            }
            this.refresh2();
            this._owner.emit.call(this._owner, "scroll");
            if (this._needRefresh) //在onScroll事件里开发者可能修改位置，这里再刷新一次，避免闪烁
             {
                this._needRefresh = false;
                Timers.remove(this.refresh, this);
                this.refresh2();
            }
            this.updateScrollBarPos();
            this._aniFlag = 0;
        }
        refresh2() {
            if (this._aniFlag == 1 && !this._dragged) {
                var posX;
                var posY;
                if (this._overlapSize.x > 0)
                    posX = -Math.floor(this._xPos);
                else {
                    if (this._container.x != 0)
                        this._container.x = 0;
                    posX = 0;
                }
                if (this._overlapSize.y > 0)
                    posY = -Math.floor(this._yPos);
                else {
                    if (this._container.y != 0)
                        this._container.y = 0;
                    posY = 0;
                }
                if (posX != this._container.x || posY != this._container.y) {
                    this._tweenDuration.set(TWEEN_TIME_GO, TWEEN_TIME_GO);
                    this._tweenStart.set(this._container.x, this._container.y);
                    this._tweenChange.set(posX - this._tweenStart.x, posY - this._tweenStart.y);
                    this.startTween(1);
                }
                else if (this._tweening != 0)
                    this.killTween();
            }
            else {
                if (this._tweening != 0)
                    this.killTween();
                this._container.setPosition(Math.floor(-this._xPos), Math.floor(-this._yPos));
                this.loopCheckingCurrent();
            }
            if (this._pageMode)
                this.updatePageController();
        }
        __touchBegin(owner) {
            if (!this._touchEffect)
                return;
            if (this._tweening != 0) {
                this.killTween();
                // this._owner.element.stage.cancelClick(evt.input.pointerId);
                this._dragged = true;
            }
            else
                this._dragged = false;
            var cpos = GameUI.GetCursorPosition();
            var pt = owner.globalToLocal(cpos[0], cpos[1], s_vec2$2);
            this._containerPos.set(this._container.x, this._container.y);
            this._beginTouchPos.set(pt.x, pt.y);
            this._lastTouchPos.set(pt.x, pt.y);
            this._lastTouchGlobalPos.set(cpos[0], cpos[1]);
            this._isHoldAreaDone = false;
            this._velocity.set(0, 0);
            this._velocityScale = 1;
            this._lastMoveTime = Game.Time();
        }
        __touchMove(owner) {
            if (!this._touchEffect || this.owner.isDisposed)
                return;
            if (ScrollPane.draggingPane && ScrollPane.draggingPane != this || GObject.draggingObject) //已经有其他拖动
                return;
            var sensitivity = UIConfig.touchScrollSensitivity;
            var cpos = GameUI.GetCursorPosition();
            var pt = owner.globalToLocal(cpos[0], cpos[1]);
            var diff;
            var sv, sh;
            if (this._scrollType == ScrollType.Vertical) {
                if (!this._isHoldAreaDone) {
                    //表示正在监测垂直方向的手势
                    s_gestureFlag |= 1;
                    diff = Math.abs(this._beginTouchPos.y - pt.y);
                    if (diff < sensitivity)
                        return;
                    if ((s_gestureFlag & 2) != 0) //已经有水平方向的手势在监测，那么我们用严格的方式检查是不是按垂直方向移动，避免冲突
                     {
                        let diff2 = Math.abs(this._beginTouchPos.x - pt.x);
                        if (diff < diff2) //不通过则不允许滚动了
                            return;
                    }
                }
                sv = true;
            }
            else if (this._scrollType == ScrollType.Horizontal) {
                if (!this._isHoldAreaDone) {
                    s_gestureFlag |= 2;
                    diff = Math.abs(this._beginTouchPos.x - pt.x);
                    if (diff < sensitivity)
                        return;
                    if ((s_gestureFlag & 1) != 0) {
                        let diff2 = Math.abs(this._beginTouchPos.y - pt.y);
                        if (diff < diff2)
                            return;
                    }
                }
                sh = true;
            }
            else {
                s_gestureFlag = 3;
                if (!this._isHoldAreaDone) {
                    diff = Math.abs(this._beginTouchPos.y - pt.y);
                    if (diff < sensitivity) {
                        diff = Math.abs(this._beginTouchPos.x - pt.x);
                        if (diff < sensitivity)
                            return;
                    }
                }
                sv = sh = true;
            }
            var newPosX = Math.floor(this._containerPos.x + pt.x - this._beginTouchPos.x);
            var newPosY = Math.floor(this._containerPos.y + pt.y - this._beginTouchPos.y);
            if (sv) {
                if (newPosY > 0) {
                    if (!this._bouncebackEffect)
                        this._container.y = 0;
                    else if (this._header && this._header.maxHeight != 0)
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._header.maxHeight));
                    else
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._viewSize.y * PULL_RATIO));
                }
                else if (newPosY < -this._overlapSize.y) {
                    if (!this._bouncebackEffect)
                        this._container.y = -this._overlapSize.y;
                    else if (this._footer && this._footer.maxHeight > 0)
                        this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._footer.maxHeight) - this._overlapSize.y);
                    else
                        this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._viewSize.y * PULL_RATIO) - this._overlapSize.y);
                }
                else
                    this._container.y = newPosY;
            }
            if (sh) {
                if (newPosX > 0) {
                    if (!this._bouncebackEffect)
                        this._container.x = 0;
                    else if (this._header && this._header.maxWidth != 0)
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._header.maxWidth));
                    else
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._viewSize.x * PULL_RATIO));
                }
                else if (newPosX < 0 - this._overlapSize.x) {
                    if (!this._bouncebackEffect)
                        this._container.x = -this._overlapSize.x;
                    else if (this._footer && this._footer.maxWidth > 0)
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._footer.maxWidth) - this._overlapSize.x);
                    else
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._viewSize.x * PULL_RATIO) - this._overlapSize.x);
                }
                else
                    this._container.x = newPosX;
            }
            //更新速度
            var frameRate = 60;
            var now = Game.Time();
            var deltaTime = Math.max(now - this._lastMoveTime, 1 / frameRate);
            var deltaPositionX = pt.x - this._lastTouchPos.x;
            var deltaPositionY = pt.y - this._lastTouchPos.y;
            if (!sh)
                deltaPositionX = 0;
            if (!sv)
                deltaPositionY = 0;
            if (deltaTime != 0) {
                var elapsed = deltaTime * frameRate - 1;
                if (elapsed > 1) //速度衰减
                 {
                    var factor = Math.pow(0.833, elapsed);
                    this._velocity.x = this._velocity.x * factor;
                    this._velocity.y = this._velocity.y * factor;
                }
                this._velocity.x = lerp(this._velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
                this._velocity.y = lerp(this._velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
            }
            /*速度计算使用的是本地位移，但在后续的惯性滚动判断中需要用到屏幕位移，所以这里要记录一个位移的比例。
            */
            var deltaGlobalPositionX = this._lastTouchGlobalPos.x - cpos[0];
            var deltaGlobalPositionY = this._lastTouchGlobalPos.y - cpos[1];
            if (deltaPositionX != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX);
            else if (deltaPositionY != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);
            this._lastTouchPos.set(pt.x, pt.y);
            this._lastTouchGlobalPos.set(cpos[0], cpos[1]);
            this._lastMoveTime = now;
            //同步更新pos值
            if (this._overlapSize.x > 0)
                this._xPos = clamp(-this._container.x, 0, this._overlapSize.x);
            if (this._overlapSize.y > 0)
                this._yPos = clamp(-this._container.y, 0, this._overlapSize.y);
            //循环滚动特别检查
            if (this._loop != 0) {
                newPosX = this._container.x;
                newPosY = this._container.y;
                if (this.loopCheckingCurrent()) {
                    this._containerPos.x += this._container.x - newPosX;
                    this._containerPos.y += this._container.y - newPosY;
                }
            }
            ScrollPane.draggingPane = this;
            this._isHoldAreaDone = true;
            this._dragged = true;
            this.updateScrollBarPos();
            this.updateScrollBarVisible();
            if (this._pageMode)
                this.updatePageController();
            owner.emit.call(owner, "scroll");
        }
        __touchEnd() {
            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;
            s_gestureFlag = 0;
            if (!this._dragged || !this._touchEffect) {
                this._dragged = false;
                return;
            }
            this._dragged = false;
            this._tweenStart.set(this._container.x, this._container.y);
            s_endPos.set(this._tweenStart.x, this._tweenStart.y);
            var flag = false;
            if (this._container.x > 0) {
                s_endPos.x = 0;
                flag = true;
            }
            else if (this._container.x < -this._overlapSize.x) {
                s_endPos.x = -this._overlapSize.x;
                flag = true;
            }
            if (this._container.y > 0) {
                s_endPos.y = 0;
                flag = true;
            }
            else if (this._container.y < -this._overlapSize.y) {
                s_endPos.y = -this._overlapSize.y;
                flag = true;
            }
            if (flag) {
                this._tweenChange.set(s_endPos.x - this._tweenStart.x, s_endPos.y - this._tweenStart.y);
                if (this._tweenChange.x < -UIConfig.touchDragSensitivity || this._tweenChange.y < -UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    this._owner.emit.call(this._owner, "pull_down_release");
                    this._refreshEventDispatching = false;
                }
                else if (this._tweenChange.x > UIConfig.touchDragSensitivity || this._tweenChange.y > UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    this._owner.emit.call(this._owner, "pull_up_release");
                    this._refreshEventDispatching = false;
                }
                if (this._headerLockedSize > 0 && s_endPos[this._refreshBarAxis] == 0) {
                    s_endPos[this._refreshBarAxis] = this._headerLockedSize;
                    this._tweenChange.x = s_endPos.x - this._tweenStart.x;
                    this._tweenChange.y = s_endPos.y - this._tweenStart.y;
                }
                else if (this._footerLockedSize > 0 && s_endPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    s_endPos[this._refreshBarAxis] = -max;
                    this._tweenChange.x = s_endPos.x - this._tweenStart.x;
                    this._tweenChange.y = s_endPos.y - this._tweenStart.y;
                }
                this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
            }
            else {
                //更新速度
                if (!this._inertiaDisabled) {
                    var frameRate = 60;
                    var elapsed = (Game.Time() - this._lastMoveTime) * frameRate - 1;
                    if (elapsed > 1) {
                        var factor = Math.pow(0.833, elapsed);
                        this._velocity.x = this._velocity.x * factor;
                        this._velocity.y = this._velocity.y * factor;
                    }
                    //根据速度计算目标位置和需要时间
                    this.updateTargetAndDuration(this._tweenStart, s_endPos);
                }
                else
                    this._tweenDuration.set(TWEEN_TIME_DEFAULT, TWEEN_TIME_DEFAULT);
                s_oldChange.set(s_endPos.x - this._tweenStart.x, s_endPos.y - this._tweenStart.y);
                //调整目标位置
                this.loopCheckingTarget(s_endPos);
                if (this._pageMode || this._snapToItem)
                    this.alignPosition(s_endPos, true);
                this._tweenChange.x = s_endPos.x - this._tweenStart.x;
                this._tweenChange.y = s_endPos.y - this._tweenStart.y;
                if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                    this.updateScrollBarVisible();
                    return;
                }
                //如果目标位置已调整，随之调整需要时间
                if (this._pageMode || this._snapToItem) {
                    this.fixDuration("x", s_oldChange.x);
                    this.fixDuration("y", s_oldChange.y);
                }
            }
            this.startTween(2);
        }
        __mouseWheel(owner, evt) {
            if (!this._mouseWheelEnabled)
                return;
            var delta = -evt.data;
            if (this._overlapSize.x > 0 && this._overlapSize.y == 0) {
                let step = this._pageMode ? this._pageSize.x : this._scrollStep;
                this.setPosX(this._xPos + step * delta, false);
            }
            else {
                let step = this._pageMode ? this._pageSize.y : this._scrollStep;
                this.setPosY(this._yPos + step * delta, false);
            }
        }
        __rollOver() {
            this._hover = true;
            this.updateScrollBarVisible();
        }
        __rollOut() {
            this._hover = false;
            this.updateScrollBarVisible();
        }
        updateScrollBarPos() {
            if (this._vtScrollBar)
                this._vtScrollBar.setScrollPerc(this._overlapSize.y == 0 ? 0 : clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y);
            if (this._hzScrollBar)
                this._hzScrollBar.setScrollPerc(this._overlapSize.x == 0 ? 0 : clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x);
            this.checkRefreshBar();
        }
        updateScrollBarVisible() {
            if (this._vtScrollBar) {
                if (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone)
                    this._vtScrollBar.element.visible = false;
                else
                    this.updateScrollBarVisible2(this._vtScrollBar);
            }
            if (this._hzScrollBar) {
                if (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone)
                    this._hzScrollBar.element.visible = false;
                else
                    this.updateScrollBarVisible2(this._hzScrollBar);
            }
        }
        updateScrollBarVisible2(bar) {
            if (this._scrollBarDisplayAuto)
                GTween.kill(bar, false, "alpha");
            if (this._scrollBarDisplayAuto && !this._hover && this._tweening == 0 && !this._dragged && !bar.gripDragging) {
                if (bar.element.visible)
                    GTween.to(1, 0, 0.5).setDelay(0.5).onComplete(this.__barTweenComplete, this).setTarget(bar, "alpha");
            }
            else {
                bar.alpha = 1;
                bar.element.visible = true;
            }
        }
        __barTweenComplete(tweener) {
            var bar = (tweener.target);
            bar.alpha = 1;
            bar.element.visible = false;
        }
        getLoopPartSize(division, axis) {
            let list = this._owner; //assume it is a list
            return (this._contentSize[axis] + (axis == "x" ? list.columnGap : list.lineGap)) / division;
        }
        loopCheckingCurrent() {
            var changed = false;
            if (this._loop == 1 && this._overlapSize.x > 0) {
                if (this._xPos < 0.001) {
                    this._xPos += this.getLoopPartSize(2, "x");
                    changed = true;
                }
                else if (this._xPos >= this._overlapSize.x) {
                    this._xPos -= this.getLoopPartSize(2, "x");
                    changed = true;
                }
            }
            else if (this._loop == 2 && this._overlapSize.y > 0) {
                if (this._yPos < 0.001) {
                    this._yPos += this.getLoopPartSize(2, "y");
                    changed = true;
                }
                else if (this._yPos >= this._overlapSize.y) {
                    this._yPos -= this.getLoopPartSize(2, "y");
                    changed = true;
                }
            }
            if (changed)
                this._container.setPosition(Math.floor(-this._xPos), Math.floor(-this._yPos));
            return changed;
        }
        loopCheckingTarget(endPos) {
            if (this._loop == 1)
                this.loopCheckingTarget2(endPos, "x");
            if (this._loop == 2)
                this.loopCheckingTarget2(endPos, "y");
        }
        loopCheckingTarget2(endPos, axis) {
            var halfSize;
            var tmp;
            if (endPos[axis] > 0) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = this._tweenStart[axis] - halfSize;
                if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                    endPos[axis] -= halfSize;
                    this._tweenStart[axis] = tmp;
                }
            }
            else if (endPos[axis] < -this._overlapSize[axis]) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = this._tweenStart[axis] + halfSize;
                if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                    endPos[axis] += halfSize;
                    this._tweenStart[axis] = tmp;
                }
            }
        }
        loopCheckingNewPos(value, axis) {
            if (this._overlapSize[axis] == 0)
                return value;
            var pos = axis == "x" ? this._xPos : this._yPos;
            var changed = false;
            var v;
            if (value < 0.001) {
                value += this.getLoopPartSize(2, axis);
                if (value > pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((value - pos) / v) * v;
                    pos = clamp(pos + v, 0, this._overlapSize[axis]);
                    changed = true;
                }
            }
            else if (value >= this._overlapSize[axis]) {
                value -= this.getLoopPartSize(2, axis);
                if (value < pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((pos - value) / v) * v;
                    pos = clamp(pos - v, 0, this._overlapSize[axis]);
                    changed = true;
                }
            }
            if (changed) {
                if (axis == "x")
                    this._container.x = -Math.floor(pos);
                else
                    this._container.y = -Math.floor(pos);
            }
            return value;
        }
        alignPosition(pos, inertialScrolling) {
            if (this._pageMode) {
                pos.x = this.alignByPage(pos.x, "x", inertialScrolling);
                pos.y = this.alignByPage(pos.y, "y", inertialScrolling);
            }
            else if (this._snapToItem) {
                var xDir = 0;
                var yDir = 0;
                if (inertialScrolling) {
                    xDir = pos.x - this._containerPos.x;
                    yDir = pos.y - this._containerPos.y;
                }
                var pt = this._owner.getSnappingPositionWithDir(-pos.x, -pos.y, xDir, yDir, s_vec2$2);
                if (pos.x < 0 && pos.x > -this._overlapSize.x)
                    pos.x = -pt.x;
                if (pos.y < 0 && pos.y > -this._overlapSize.y)
                    pos.y = -pt.y;
            }
        }
        alignByPage(pos, axis, inertialScrolling) {
            var page;
            if (pos > 0)
                page = 0;
            else if (pos < -this._overlapSize[axis])
                page = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
            else {
                page = Math.floor(-pos / this._pageSize[axis]);
                var change = inertialScrolling ? (pos - this._containerPos[axis]) : (pos - this._container[axis]);
                var testPageSize = Math.min(this._pageSize[axis], this._contentSize[axis] - (page + 1) * this._pageSize[axis]);
                var delta = -pos - page * this._pageSize[axis];
                //页面吸附策略
                if (Math.abs(change) > this._pageSize[axis]) //如果滚动距离超过1页,则需要超过页面的一半，才能到更下一页
                 {
                    if (delta > testPageSize * 0.5)
                        page++;
                }
                else //否则只需要页面的1/3，当然，需要考虑到左移和右移的情况
                 {
                    if (delta > testPageSize * (change < 0 ? UIConfig.defaultScrollPagingThreshold : (1 - UIConfig.defaultScrollPagingThreshold)))
                        page++;
                }
                //重新计算终点
                pos = -page * this._pageSize[axis];
                if (pos < -this._overlapSize[axis]) //最后一页未必有pageSize那么大
                    pos = -this._overlapSize[axis];
            }
            //惯性滚动模式下，会增加判断尽量不要滚动超过一页
            if (inertialScrolling) {
                var oldPos = this._tweenStart[axis];
                var oldPage;
                if (oldPos > 0)
                    oldPage = 0;
                else if (oldPos < -this._overlapSize[axis])
                    oldPage = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
                else
                    oldPage = Math.floor(-oldPos / this._pageSize[axis]);
                var startPage = Math.floor(-this._containerPos[axis] / this._pageSize[axis]);
                if (Math.abs(page - startPage) > 1 && Math.abs(oldPage - startPage) <= 1) {
                    if (page > startPage)
                        page = startPage + 1;
                    else
                        page = startPage - 1;
                    pos = -page * this._pageSize[axis];
                }
            }
            return pos;
        }
        updateTargetAndDuration(orignPos, resultPos) {
            resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
            resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
        }
        updateTargetAndDuration2(pos, axis) {
            var v = this._velocity[axis];
            var duration = 0;
            if (pos > 0)
                pos = 0;
            else if (pos < -this._overlapSize[axis])
                pos = -this._overlapSize[axis];
            else {
                //以屏幕像素为基准
                var v2 = Math.abs(v) * this._velocityScale;
                //在移动设备上，需要对不同分辨率做一个适配，我们的速度判断以1136分辨率为基准
                let touchScreen = false;
                //这里有一些阈值的处理，因为在低速内，不希望产生较大的滚动（甚至不滚动）
                var ratio = 0;
                if (this._pageMode || !touchScreen) {
                    if (v2 > 500)
                        ratio = Math.pow((v2 - 500) / 500, 2);
                }
                else {
                    if (v2 > 1000)
                        ratio = Math.pow((v2 - 1000) / 1000, 2);
                }
                if (ratio != 0) {
                    if (ratio > 1)
                        ratio = 1;
                    v2 *= ratio;
                    v *= ratio;
                    this._velocity[axis] = v;
                    //算法：v*（_decelerationRate的n次幂）= 60，即在n帧后速度降为60（假设每秒60帧）。
                    duration = Math.log(60 / v2) / Math.log(this._decelerationRate) / 60;
                    //计算距离要使用本地速度
                    //理论公式貌似滚动的距离不够，改为经验公式
                    //var change:number = (v/ 60 - 1) / (1 - this._decelerationRate);
                    var change = Math.floor(v * duration * 0.4);
                    pos += change;
                }
            }
            if (duration < TWEEN_TIME_DEFAULT)
                duration = TWEEN_TIME_DEFAULT;
            this._tweenDuration[axis] = duration;
            return pos;
        }
        fixDuration(axis, oldChange) {
            if (this._tweenChange[axis] == 0 || Math.abs(this._tweenChange[axis]) >= Math.abs(oldChange))
                return;
            var newDuration = Math.abs(this._tweenChange[axis] / oldChange) * this._tweenDuration[axis];
            if (newDuration < TWEEN_TIME_DEFAULT)
                newDuration = TWEEN_TIME_DEFAULT;
            this._tweenDuration[axis] = newDuration;
        }
        startTween(type) {
            this._tweenTime.set(0, 0);
            this._tweening = type;
            Timers.addUpdate(this.tweenUpdate, this);
            this.updateScrollBarVisible();
        }
        killTween() {
            if (this._tweening == 1) //取消类型为1的tween需立刻设置到终点
             {
                this._container.setPosition(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y);
                this._owner.emit.call(this._owner, "scroll");
            }
            this._tweening = 0;
            Timers.remove(this.tweenUpdate, this);
            this.updateScrollBarVisible();
            this._owner.emit.call(this._owner, "scroll_end");
        }
        checkRefreshBar() {
            if (this._header == null && this._footer == null)
                return;
            var pos = this._container[this._refreshBarAxis];
            if (this._header) {
                if (pos > 0) {
                    if (this._header.element.parent == null)
                        this._maskContainer.addChildAt(this._header.element, 0);
                    var pt = s_vec2$2;
                    pt.set(this._header.width, this._header.height);
                    pt[this._refreshBarAxis] = pos;
                    this._header.setSize(pt.x, pt.y);
                }
                else {
                    if (this._header.element.parent)
                        this._maskContainer.removeChild(this._header.element);
                }
            }
            if (this._footer) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (pos < -max || max == 0 && this._footerLockedSize > 0) {
                    if (this._footer.element.parent == null)
                        this._maskContainer.addChildAt(this._footer.element, 0);
                    pt = s_vec2$2;
                    pt.set(this._footer.x, this._footer.y);
                    if (max > 0)
                        pt[this._refreshBarAxis] = pos + this._contentSize[this._refreshBarAxis];
                    else
                        pt[this._refreshBarAxis] = Math.max(Math.min(pos + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]);
                    this._footer.setPosition(pt.x, pt.y);
                    pt.set(this._footer.width, this._footer.height);
                    if (max > 0)
                        pt[this._refreshBarAxis] = -max - pos;
                    else
                        pt[this._refreshBarAxis] = this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis];
                    this._footer.setSize(pt.x, pt.y);
                }
                else {
                    if (this._footer.element.parent)
                        this._maskContainer.removeChild(this._footer.element);
                }
            }
        }
        tweenUpdate() {
            var nx = this.runTween("x");
            var ny = this.runTween("y");
            this._container.setPosition(nx, ny);
            if (this._tweening == 2) {
                if (this._overlapSize.x > 0)
                    this._xPos = clamp(-nx, 0, this._overlapSize.x);
                if (this._overlapSize.y > 0)
                    this._yPos = clamp(-ny, 0, this._overlapSize.y);
                if (this._pageMode)
                    this.updatePageController();
            }
            if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                this._tweening = 0;
                Timers.remove(this.tweenUpdate, this);
                this.loopCheckingCurrent();
                this.updateScrollBarPos();
                this.updateScrollBarVisible();
                this._owner.emit.call(this._owner, "scroll");
                this._owner.emit.call(this._owner, "scroll_end");
            }
            else {
                this.updateScrollBarPos();
                this._owner.emit.call(this._owner, "scroll");
            }
        }
        runTween(axis) {
            var newValue;
            if (this._tweenChange[axis] != 0) {
                this._tweenTime[axis] += Timers.deltaTime;
                if (this._tweenTime[axis] >= this._tweenDuration[axis]) {
                    newValue = this._tweenStart[axis] + this._tweenChange[axis];
                    this._tweenChange[axis] = 0;
                }
                else {
                    var ratio = easeFunc(this._tweenTime[axis], this._tweenDuration[axis]);
                    newValue = this._tweenStart[axis] + Math.floor(this._tweenChange[axis] * ratio);
                }
                var threshold1 = 0;
                var threshold2 = -this._overlapSize[axis];
                if (this._headerLockedSize > 0 && this._refreshBarAxis == axis)
                    threshold1 = this._headerLockedSize;
                if (this._footerLockedSize > 0 && this._refreshBarAxis == axis) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    threshold2 = -max;
                }
                if (this._tweening == 2 && this._bouncebackEffect) {
                    if (newValue > 20 + threshold1 && this._tweenChange[axis] > 0
                        || newValue > threshold1 && this._tweenChange[axis] == 0) //开始回弹
                     {
                        this._tweenTime[axis] = 0;
                        this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                        this._tweenChange[axis] = -newValue + threshold1;
                        this._tweenStart[axis] = newValue;
                    }
                    else if (newValue < threshold2 - 20 && this._tweenChange[axis] < 0
                        || newValue < threshold2 && this._tweenChange[axis] == 0) //开始回弹
                     {
                        this._tweenTime[axis] = 0;
                        this._tweenDuration[axis] = TWEEN_TIME_DEFAULT;
                        this._tweenChange[axis] = threshold2 - newValue;
                        this._tweenStart[axis] = newValue;
                    }
                }
                else {
                    if (newValue > threshold1) {
                        newValue = threshold1;
                        this._tweenChange[axis] = 0;
                    }
                    else if (newValue < threshold2) {
                        newValue = threshold2;
                        this._tweenChange[axis] = 0;
                    }
                }
            }
            else
                newValue = this._container[axis];
            return newValue;
        }
    }
    function easeFunc(t, d) {
        return (t = t / d - 1) * t * t + 1; //cubicOut
    }

    var CurveType;
    (function (CurveType) {
        CurveType[CurveType["CRSpline"] = 0] = "CRSpline";
        CurveType[CurveType["Bezier"] = 1] = "Bezier";
        CurveType[CurveType["CubicBezier"] = 2] = "CubicBezier";
        CurveType[CurveType["Straight"] = 3] = "Straight";
    })(CurveType || (CurveType = {}));
    class GPathPoint {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.control1_x = 0;
            this.control1_y = 0;
            this.control2_x = 0;
            this.control2_y = 0;
            this.curveType = 0;
        }
        static newPoint(x, y, curveType) {
            var pt = new GPathPoint();
            pt.x = x || 0;
            pt.y = y || 0;
            pt.control1_x = 0;
            pt.control1_y = 0;
            pt.control2_x = 0;
            pt.control2_y = 0;
            pt.curveType = curveType || CurveType.CRSpline;
            return pt;
        }
        static newBezierPoint(x, y, control1_x, control1_y) {
            var pt = new GPathPoint();
            pt.x = x || 0;
            pt.y = y || 0;
            pt.control1_x = control1_x || 0;
            pt.control1_y = control1_y || 0;
            pt.control2_x = 0;
            pt.control2_y = 0;
            pt.curveType = CurveType.Bezier;
            return pt;
        }
        static newCubicBezierPoint(x, y, control1_x, control1_y, control2_x, control2_y) {
            var pt = new GPathPoint();
            pt.x = x || 0;
            pt.y = y || 0;
            pt.control1_x = control1_x || 0;
            pt.control1_y = control1_y || 0;
            pt.control2_x = control2_x || 0;
            pt.control2_y = control2_y || 0;
            pt.curveType = CurveType.CubicBezier;
            return pt;
        }
        clone() {
            var ret = new GPathPoint();
            ret.x = this.x;
            ret.y = this.y;
            ret.control1_x = this.control1_x;
            ret.control1_y = this.control1_y;
            ret.control2_x = this.control2_x;
            ret.control2_y = this.control2_y;
            ret.curveType = this.curveType;
            return ret;
        }
    }

    class GPath {
        constructor() {
            this._segments = new Array();
            this._points = new Array();
        }
        get length() {
            return this._fullLength;
        }
        create2(pt1, pt2, pt3, pt4) {
            var points = new Array();
            points.push(pt1);
            points.push(pt2);
            if (pt3)
                points.push(pt3);
            if (pt4)
                points.push(pt4);
            this.create(points);
        }
        create(points) {
            this._segments.length = 0;
            this._points.length = 0;
            this._fullLength = 0;
            var cnt = points.length;
            if (cnt == 0)
                return;
            var splinePoints = [];
            var prev = points[0];
            if (prev.curveType == CurveType.CRSpline)
                splinePoints.push(new Vec2(prev.x, prev.y));
            for (var i = 1; i < cnt; i++) {
                var current = points[i];
                if (prev.curveType != CurveType.CRSpline) {
                    var seg = {};
                    seg.type = prev.curveType;
                    seg.ptStart = this._points.length;
                    if (prev.curveType == CurveType.Straight) {
                        seg.ptCount = 2;
                        this._points.push(new Vec2(prev.x, prev.y));
                        this._points.push(new Vec2(current.x, current.y));
                    }
                    else if (prev.curveType == CurveType.Bezier) {
                        seg.ptCount = 3;
                        this._points.push(new Vec2(prev.x, prev.y));
                        this._points.push(new Vec2(current.x, current.y));
                        this._points.push(new Vec2(prev.control1_x, prev.control1_y));
                    }
                    else if (prev.curveType == CurveType.CubicBezier) {
                        seg.ptCount = 4;
                        this._points.push(new Vec2(prev.x, prev.y));
                        this._points.push(new Vec2(current.x, current.y));
                        this._points.push(new Vec2(prev.control1_x, prev.control1_y));
                        this._points.push(new Vec2(prev.control2_x, prev.control2_y));
                    }
                    seg.length = distance(prev.x, prev.y, current.x, current.y);
                    this._fullLength += seg.length;
                    this._segments.push(seg);
                }
                if (current.curveType != CurveType.CRSpline) {
                    if (splinePoints.length > 0) {
                        splinePoints.push(new Vec2(current.x, current.y));
                        this.createSplineSegment(splinePoints);
                    }
                }
                else
                    splinePoints.push(new Vec2(current.x, current.y));
                prev = current;
            }
            if (splinePoints.length > 1)
                this.createSplineSegment(splinePoints);
        }
        createSplineSegment(splinePoints) {
            var cnt = splinePoints.length;
            splinePoints.splice(0, 0, splinePoints[0]);
            splinePoints.push(splinePoints[cnt]);
            splinePoints.push(splinePoints[cnt]);
            cnt += 3;
            var seg = {};
            seg.type = CurveType.CRSpline;
            seg.ptStart = this._points.length;
            seg.ptCount = cnt;
            this._points = this._points.concat(splinePoints);
            seg.length = 0;
            for (var i = 1; i < cnt; i++) {
                seg.length += distance(splinePoints[i - 1].x, splinePoints[i - 1].y, splinePoints[i].x, splinePoints[i].y);
            }
            this._fullLength += seg.length;
            this._segments.push(seg);
            splinePoints.length = 0;
        }
        clear() {
            this._segments.length = 0;
            this._points.length = 0;
        }
        getPointAt(t, result) {
            if (!result)
                result = new Vec2();
            else
                result.set(0, 0);
            t = clamp01(t);
            var cnt = this._segments.length;
            if (cnt == 0) {
                return result;
            }
            var seg;
            if (t == 1) {
                seg = this._segments[cnt - 1];
                if (seg.type == CurveType.Straight) {
                    result.x = lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                    result.y = lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                    return result;
                }
                else if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                    return this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
                else
                    return this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
            }
            var len = t * this._fullLength;
            for (var i = 0; i < cnt; i++) {
                seg = this._segments[i];
                len -= seg.length;
                if (len < 0) {
                    t = 1 + len / seg.length;
                    if (seg.type == CurveType.Straight) {
                        result.x = lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                        result.y = lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                    }
                    else if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                        result = this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
                    else
                        result = this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
                    break;
                }
            }
            return result;
        }
        get segmentCount() {
            return this._segments.length;
        }
        getAnchorsInSegment(segmentIndex, points) {
            if (points == null)
                points = new Array();
            var seg = this._segments[segmentIndex];
            for (var i = 0; i < seg.ptCount; i++)
                points.push(new Vec2(this._points[seg.ptStart + i].x, this._points[seg.ptStart + i].y));
            return points;
        }
        getPointsInSegment(segmentIndex, t0, t1, points, ts, pointDensity) {
            if (points == null)
                points = new Array();
            if (!pointDensity || isNaN(pointDensity))
                pointDensity = 0.1;
            if (ts)
                ts.push(t0);
            var seg = this._segments[segmentIndex];
            if (seg.type == CurveType.Straight) {
                points.push(new Vec2(lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t0), lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t0)));
                points.push(new Vec2(lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t1), lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t1)));
            }
            else {
                var func;
                if (seg.type == CurveType.Bezier || seg.type == CurveType.CubicBezier)
                    func = this.onBezierCurve;
                else
                    func = this.onCRSplineCurve;
                points.push(func.call(this, seg.ptStart, seg.ptCount, t0, new Vec2()));
                var SmoothAmount = Math.min(seg.length * pointDensity, 50);
                for (var j = 0; j <= SmoothAmount; j++) {
                    var t = j / SmoothAmount;
                    if (t > t0 && t < t1) {
                        points.push(func.call(this, seg.ptStart, seg.ptCount, t, new Vec2()));
                        if (ts)
                            ts.push(t);
                    }
                }
                points.push(func.call(this, seg.ptStart, seg.ptCount, t1, new Vec2()));
            }
            if (ts)
                ts.push(t1);
            return points;
        }
        getAllPoints(points, ts, pointDensity) {
            if (points == null)
                points = new Array();
            if (!pointDensity || isNaN(pointDensity))
                pointDensity = 0.1;
            var cnt = this._segments.length;
            for (var i = 0; i < cnt; i++)
                this.getPointsInSegment(i, 0, 1, points, ts, pointDensity);
            return points;
        }
        onCRSplineCurve(ptStart, ptCount, t, result) {
            var adjustedIndex = Math.floor(t * (ptCount - 4)) + ptStart; //Since the equation works with 4 points, we adjust the starting point depending on t to return a point on the specific segment
            var p0x = this._points[adjustedIndex].x;
            var p0y = this._points[adjustedIndex].y;
            var p1x = this._points[adjustedIndex + 1].x;
            var p1y = this._points[adjustedIndex + 1].y;
            var p2x = this._points[adjustedIndex + 2].x;
            var p2y = this._points[adjustedIndex + 2].y;
            var p3x = this._points[adjustedIndex + 3].x;
            var p3y = this._points[adjustedIndex + 3].y;
            var adjustedT = (t == 1) ? 1 : repeat(t * (ptCount - 4), 1); // Then we adjust t to be that value on that new piece of segment... for t == 1f don't use repeat (that would return 0f);
            var t0 = ((-adjustedT + 2) * adjustedT - 1) * adjustedT * 0.5;
            var t1 = (((3 * adjustedT - 5) * adjustedT) * adjustedT + 2) * 0.5;
            var t2 = ((-3 * adjustedT + 4) * adjustedT + 1) * adjustedT * 0.5;
            var t3 = ((adjustedT - 1) * adjustedT * adjustedT) * 0.5;
            result.x = p0x * t0 + p1x * t1 + p2x * t2 + p3x * t3;
            result.y = p0y * t0 + p1y * t1 + p2y * t2 + p3y * t3;
            return result;
        }
        onBezierCurve(ptStart, ptCount, t, result) {
            var t2 = 1 - t;
            var p0x = this._points[ptStart].x;
            var p0y = this._points[ptStart].y;
            var p1x = this._points[ptStart + 1].x;
            var p1y = this._points[ptStart + 1].y;
            var cp0x = this._points[ptStart + 2].x;
            var cp0y = this._points[ptStart + 2].y;
            if (ptCount == 4) {
                var cp1x = this._points[ptStart + 3].x;
                var cp1y = this._points[ptStart + 3].y;
                result.x = t2 * t2 * t2 * p0x + 3 * t2 * t2 * t * cp0x + 3 * t2 * t * t * cp1x + t * t * t * p1x;
                result.y = t2 * t2 * t2 * p0y + 3 * t2 * t2 * t * cp0y + 3 * t2 * t * t * cp1y + t * t * t * p1y;
            }
            else {
                result.x = t2 * t2 * p0x + 2 * t2 * t * cp0x + t * t * p1x;
                result.y = t2 * t2 * p0y + 2 * t2 * t * cp0y + t * t * p1y;
            }
            return result;
        }
    }

    const OPTION_IGNORE_DISPLAY_CONTROLLER = 1;
    const OPTION_AUTO_STOP_DISABLED = 2;
    const OPTION_AUTO_STOP_AT_END = 4;
    class Transition {
        constructor(owner) {
            this._owner = owner;
            this._items = new Array();
            this._totalDuration = 0;
            this._autoPlayTimes = 1;
            this._autoPlayDelay = 0;
            this._timeScale = 1;
            this._startTime = 0;
            this._endTime = 0;
            this._runningAnimation = new Set;
            this._onAnimationEndCallback = (_, className) => {
                this.onAnimationEnd(className);
            };
            this._onAnimationStartCallback = (_, className) => {
                this.onAnimationStart(className);
            };
        }
        play(onComplete, times, delay, startTime, endTime) {
            this._play(onComplete, times, delay, startTime, endTime, false);
        }
        playReverse(onComplete, times, delay, startTime, endTime) {
            this._play(onComplete, times, delay, startTime, endTime, true);
        }
        changePlayTimes(value) {
            this._totalTimes = value;
        }
        setAutoPlay(value, times, delay) {
            if (this._autoPlay != value) {
                this._autoPlay = value;
                this._autoPlayTimes = times || 1;
                this._autoPlayDelay = delay || 0;
                if (this._autoPlay) {
                    if (this._owner.onStage)
                        this.play(null, null, this._autoPlayTimes, this._autoPlayDelay);
                }
                else {
                    if (!this._owner.onStage)
                        this.stop(false, true);
                }
            }
        }
        _play(onComplete, times, delay, startTime, endTime, reversed) {
            this.stop(true, true);
            delay = delay || 0;
            this._totalTimes = times || 1;
            this._reversed = reversed;
            this._startTime = startTime || 0;
            this._endTime = endTime || -1;
            this._playing = true;
            this._paused = false;
            this._onComplete = onComplete;
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.target == null) {
                    if (item.targetId)
                        item.target = this._owner.getChildById(item.targetId);
                    else
                        item.target = this._owner;
                }
                else if (item.target != this._owner && item.target.parent != this._owner)
                    item.target = null;
                if (item.target && item.type == ActionType.Transition) {
                    var trans = item.target.getTransition(item.value.transName);
                    if (trans == this)
                        trans = null;
                    if (trans) {
                        if (item.value.playTimes == 0) //this.stop
                         {
                            var j;
                            for (j = i - 1; j >= 0; j--) {
                                var item2 = this._items[j];
                                if (item2.type == ActionType.Transition) {
                                    if (item2.value.trans == trans) {
                                        item2.value.stopTime = item.time - item2.time;
                                        break;
                                    }
                                }
                            }
                            if (j < 0)
                                item.value.stopTime = 0;
                            else
                                trans = null; //no need to handle this.stop anymore
                        }
                        else
                            item.value.stopTime = -1;
                    }
                    item.value.trans = trans;
                }
            }
            if (cnt > 0) {
                if (UIConfig.useNativeTransition == true) {
                    this._playing = false;
                    this.stopAnimation();
                    let runningSet = new Set;
                    for (var i = 0; i < cnt; i++) {
                        var item = this._items[i];
                        let transitionClassName = `${item.fileName}_${item.name}_${item.targetId}`;
                        if (!runningSet.has(transitionClassName)) {
                            runningSet.add(transitionClassName);
                            item.target.AddClass(transitionClassName);
                            item.target.RegisterEventHandler('AnimationStart', this._onAnimationStartCallback);
                            item.target.RegisterEventHandler('AnimationEnd', this._onAnimationEndCallback);
                        }
                    }
                }
                else {
                    if (delay == 0)
                        this.onDelayedPlay();
                    else
                        GTween.delayedCall(delay).setTarget(this).onComplete(this.onDelayedPlay, this);
                }
            }
        }
        stopAnimation(className) {
            let cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                let transitionClassName = `${item.fileName}_${item.name}_${item.targetId}`;
                if (!className || className == transitionClassName) {
                    if (this._runningAnimation.has(transitionClassName)) {
                        item.target.RemoveClass(transitionClassName);
                        this._runningAnimation.delete(transitionClassName);
                    }
                }
            }
        }
        onAnimationEnd(className) {
            if (this._runningAnimation.has(className)) {
                this._runningAnimation.delete(className);
                this._playing = true;
            }
            if (this._runningAnimation.size == 0 && this._playing == true) {
                this._playing = false;
                if (this._onComplete) {
                    let handler = this._onComplete;
                    handler();
                }
                this._onComplete = null;
            }
        }
        onAnimationStart(className) {
            this._runningAnimation.add(className);
            this._playing = true;
        }
        stop(setToComplete, processCallback) {
            if (!this._playing)
                return;
            if (setToComplete == null)
                setToComplete = true;
            this._playing = false;
            this._totalTasks = 0;
            this._totalTimes = 0;
            var handler = this._onComplete;
            this._onComplete = null;
            GTween.kill(this); //delay start
            var cnt = this._items.length;
            if (this._reversed) {
                for (var i = cnt - 1; i >= 0; i--) {
                    var item = this._items[i];
                    if (item.target == null)
                        continue;
                    this.stopItem(item, setToComplete);
                }
            }
            else {
                for (i = 0; i < cnt; i++) {
                    item = this._items[i];
                    if (item.target == null)
                        continue;
                    this.stopItem(item, setToComplete);
                }
            }
            if (processCallback && handler) {
                handler();
            }
        }
        stopItem(item, setToComplete) {
            if (item.displayLockToken != 0) {
                item.target.releaseDisplayLock(item.displayLockToken);
                item.displayLockToken = 0;
            }
            if (item.tweener) {
                item.tweener.kill(setToComplete);
                item.tweener = null;
                if (item.type == ActionType.Shake && !setToComplete) //震动必须归位，否则下次就越震越远了。
                 {
                    item.target._gearLocked = true;
                    item.target.setPosition(item.target.x - item.value.lastOffsetX, item.target.y - item.value.lastOffsetY);
                    item.target._gearLocked = false;
                }
            }
            if (item.type == ActionType.Transition) {
                var trans = item.value.trans;
                if (trans)
                    trans.stop(setToComplete, false);
            }
        }
        setPaused(paused) {
            if (!this._playing || this._paused == paused)
                return;
            this._paused = paused;
            var tweener = GTween.getTween(this);
            if (tweener)
                tweener.setPaused(paused);
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.target == null)
                    continue;
                if (item.type == ActionType.Transition) {
                    if (item.value.trans)
                        item.value.trans.setPaused(paused);
                }
                else if (item.type == ActionType.Animation) {
                    if (paused) {
                        item.value.flag = item.target.getProp(ObjectPropID.Playing);
                        item.target.setProp(ObjectPropID.Playing, false);
                    }
                    else
                        item.target.setProp(ObjectPropID.Playing, item.value.flag);
                }
                if (item.tweener)
                    item.tweener.setPaused(paused);
            }
        }
        dispose() {
            if (this._playing)
                GTween.kill(this); //delay start
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.tweener) {
                    item.tweener.kill();
                    item.tweener = null;
                }
                item.target = null;
                item.hook = null;
                if (item.tweenConfig)
                    item.tweenConfig.endHook = null;
            }
            this._items.length = 0;
            this._playing = false;
            this._onComplete = null;
        }
        get playing() {
            return this._playing;
        }
        setValue(label, ...args) {
            var cnt = this._items.length;
            var found = false;
            var value;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label) {
                    if (item.tweenConfig)
                        value = item.tweenConfig.startValue;
                    else
                        value = item.value;
                    found = true;
                }
                else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                    value = item.tweenConfig.endValue;
                    found = true;
                }
                else
                    continue;
                switch (item.type) {
                    case ActionType.XY:
                    case ActionType.Size:
                    case ActionType.Pivot:
                    case ActionType.Scale:
                    case ActionType.Skew:
                        value.b1 = true;
                        value.b2 = true;
                        value.f1 = parseFloat(args[0]);
                        value.f2 = parseFloat(args[1]);
                        break;
                    case ActionType.Alpha:
                        value.f1 = parseFloat(args[0]);
                        break;
                    case ActionType.Rotation:
                        value.f1 = parseFloat(args[0]);
                        break;
                    case ActionType.Color:
                        value.f1 = parseFloat(args[0]);
                        break;
                    case ActionType.Animation:
                        value.frame = parseInt(args[0]);
                        if (args.length > 1)
                            value.playing = args[1];
                        break;
                    case ActionType.Visible:
                        value.visible = args[0];
                        break;
                    case ActionType.Sound:
                        value.sound = args[0];
                        if (args.length > 1)
                            value.volume = parseFloat(args[1]);
                        break;
                    case ActionType.Transition:
                        value.transName = args[0];
                        if (args.length > 1)
                            value.playTimes = parseInt(args[1]);
                        break;
                    case ActionType.Shake:
                        value.amplitude = parseFloat(args[0]);
                        if (args.length > 1)
                            value.duration = parseFloat(args[1]);
                        break;
                    case ActionType.ColorFilter:
                        value.f1 = parseFloat(args[0]);
                        value.f2 = parseFloat(args[1]);
                        value.f3 = parseFloat(args[2]);
                        value.f4 = parseFloat(args[3]);
                        break;
                    case ActionType.Text:
                    case ActionType.Icon:
                        value.text = args[0];
                        break;
                }
            }
            if (!found)
                throw new Error("this.label not exists");
        }
        setHook(label, callback) {
            var cnt = this._items.length;
            var found = false;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label) {
                    item.hook = callback;
                    found = true;
                    break;
                }
                else if (item.tweenConfig && item.tweenConfig.endLabel == label) {
                    item.tweenConfig.endHook = callback;
                    found = true;
                    break;
                }
            }
            if (!found)
                throw new Error("this.label not exists");
        }
        clearHooks() {
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                item.hook = null;
                if (item.tweenConfig)
                    item.tweenConfig.endHook = null;
            }
        }
        setTarget(label, newTarget) {
            var cnt = this._items.length;
            var found = false;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label) {
                    item.targetId = (newTarget == this._owner || newTarget == null) ? "" : newTarget.id;
                    if (this._playing) {
                        if (item.targetId.length > 0)
                            item.target = this._owner.getChildById(item.targetId);
                        else
                            item.target = this._owner;
                    }
                    else
                        item.target = null;
                    found = true;
                }
            }
            if (!found)
                throw new Error("this.label not exists");
        }
        setDuration(label, value) {
            var cnt = this._items.length;
            var found = false;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.tweenConfig && item.label == label) {
                    item.tweenConfig.duration = value;
                    found = true;
                }
            }
            if (!found)
                throw new Error("this.label not exists");
        }
        getLabelTime(label) {
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label)
                    return item.time;
                else if (item.tweenConfig && item.tweenConfig.endLabel == label)
                    return item.time + item.tweenConfig.duration;
            }
            return NaN;
        }
        get timeScale() {
            return this._timeScale;
        }
        set timeScale(value) {
            if (this._timeScale != value) {
                this._timeScale = value;
                if (this._playing) {
                    var cnt = this._items.length;
                    for (var i = 0; i < cnt; i++) {
                        var item = this._items[i];
                        if (item.tweener)
                            item.tweener.setTimeScale(value);
                        else if (item.type == ActionType.Transition) {
                            if (item.value.trans)
                                item.value.trans.timeScale = value;
                        }
                        else if (item.type == ActionType.Animation) {
                            if (item.target)
                                item.target.setProp(ObjectPropID.TimeScale, value);
                        }
                    }
                }
            }
        }
        updateFromRelations(targetId, dx, dy) {
            var cnt = this._items.length;
            if (cnt == 0)
                return;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.type == ActionType.XY && item.targetId == targetId) {
                    if (item.tweenConfig) {
                        if (!item.tweenConfig.startValue.b3) {
                            item.tweenConfig.startValue.f1 += dx;
                            item.tweenConfig.startValue.f2 += dy;
                        }
                        if (!item.tweenConfig.endValue.b3) {
                            item.tweenConfig.endValue.f1 += dx;
                            item.tweenConfig.endValue.f2 += dy;
                        }
                    }
                    else {
                        if (!item.value.b3) {
                            item.value.f1 += dx;
                            item.value.f2 += dy;
                        }
                    }
                }
            }
        }
        onOwnerAddedToStage() {
            if (this._autoPlay && !this._playing)
                this.play(null, this._autoPlayTimes, this._autoPlayDelay);
        }
        onOwnerRemovedFromStage() {
            if ((this._options & OPTION_AUTO_STOP_DISABLED) == 0)
                this.stop((this._options & OPTION_AUTO_STOP_AT_END) != 0 ? true : false, false);
        }
        onDelayedPlay() {
            this.internalPlay();
            this._playing = this._totalTasks > 0;
            if (this._playing) {
                if ((this._options & OPTION_IGNORE_DISPLAY_CONTROLLER) != 0) {
                    var cnt = this._items.length;
                    for (var i = 0; i < cnt; i++) {
                        var item = this._items[i];
                        if (item.target && item.target != this._owner)
                            item.displayLockToken = item.target.addDisplayLock();
                    }
                }
            }
            else if (this._onComplete) {
                var handler = this._onComplete;
                this._onComplete = null;
                handler();
            }
        }
        internalPlay() {
            this._ownerBaseX = this._owner.x;
            this._ownerBaseY = this._owner.y;
            this._totalTasks = 1;
            var cnt = this._items.length;
            var item;
            var needSkipAnimations = false;
            if (!this._reversed) {
                for (var i = 0; i < cnt; i++) {
                    item = this._items[i];
                    if (item.target == null)
                        continue;
                    if (item.type == ActionType.Animation && this._startTime != 0 && item.time <= this._startTime) {
                        needSkipAnimations = true;
                        item.value.flag = false;
                    }
                    else
                        this.playItem(item);
                }
            }
            else {
                for (i = cnt - 1; i >= 0; i--) {
                    item = this._items[i];
                    if (item.target == null)
                        continue;
                    this.playItem(item);
                }
            }
            if (needSkipAnimations)
                this.skipAnimations();
            this._totalTasks--;
        }
        playItem(item) {
            var time;
            if (item.tweenConfig) {
                if (this._reversed)
                    time = (this._totalDuration - item.time - item.tweenConfig.duration);
                else
                    time = item.time;
                if (this._endTime == -1 || time <= this._endTime) {
                    var startValue;
                    var endValue;
                    if (this._reversed) {
                        startValue = item.tweenConfig.endValue;
                        endValue = item.tweenConfig.startValue;
                    }
                    else {
                        startValue = item.tweenConfig.startValue;
                        endValue = item.tweenConfig.endValue;
                    }
                    item.value.b1 = startValue.b1 || endValue.b1;
                    item.value.b2 = startValue.b2 || endValue.b2;
                    switch (item.type) {
                        case ActionType.XY:
                        case ActionType.Size:
                        case ActionType.Scale:
                        case ActionType.Skew:
                            item.tweener = GTween.to2(startValue.f1, startValue.f2, endValue.f1, endValue.f2, item.tweenConfig.duration);
                            break;
                        case ActionType.Alpha:
                        case ActionType.Rotation:
                            item.tweener = GTween.to(startValue.f1, endValue.f1, item.tweenConfig.duration);
                            break;
                        case ActionType.Color:
                            item.tweener = GTween.toColor(startValue.f1, endValue.f1, item.tweenConfig.duration);
                            break;
                        case ActionType.ColorFilter:
                            item.tweener = GTween.to4(startValue.f1, startValue.f2, startValue.f3, startValue.f4, endValue.f1, endValue.f2, endValue.f3, endValue.f4, item.tweenConfig.duration);
                            break;
                    }
                    item.tweener.setDelay(time)
                        .setEase(item.tweenConfig.easeType)
                        .setRepeat(item.tweenConfig.repeat, item.tweenConfig.yoyo)
                        .setTimeScale(this._timeScale)
                        .setTarget(item)
                        .onStart(this.onTweenStart, this)
                        .onUpdate(this.onTweenUpdate, this)
                        .onComplete(this.onTweenComplete, this)
                        .setActionType(item.type);
                    if (this._endTime >= 0)
                        item.tweener.setBreakpoint(this._endTime - time);
                    this._totalTasks++;
                }
            }
            else if (item.type == ActionType.Shake) {
                if (this._reversed)
                    time = (this._totalDuration - item.time - item.value.duration);
                else
                    time = item.time;
                item.value.offsetX = item.value.offsetY = 0;
                item.value.lastOffsetX = item.value.lastOffsetY = 0;
                item.tweener = GTween.shake(0, 0, item.value.amplitude, item.value.duration)
                    .setDelay(time)
                    .setTimeScale(this._timeScale)
                    .setTarget(item)
                    .onUpdate(this.onTweenUpdate, this)
                    .onComplete(this.onTweenComplete, this);
                if (this._endTime >= 0)
                    item.tweener.setBreakpoint(this._endTime - item.time);
                this._totalTasks++;
            }
            else {
                if (this._reversed)
                    time = (this._totalDuration - item.time);
                else
                    time = item.time;
                if (time <= this._startTime) {
                    this.applyValue(item);
                    this.callHook(item, false);
                }
                else if (this._endTime == -1 || time <= this._endTime) {
                    this._totalTasks++;
                    item.tweener = GTween.delayedCall(time)
                        .setTimeScale(this._timeScale)
                        .setTarget(item)
                        .onComplete(this.onDelayedPlayItem, this);
                }
            }
            if (item.tweener)
                item.tweener.seek(this._startTime);
        }
        skipAnimations() {
            var frame;
            var playStartTime;
            var playTotalTime;
            var value;
            var target;
            var item;
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                item = this._items[i];
                if (item.type != ActionType.Animation || item.time > this._startTime)
                    continue;
                value = item.value;
                if (value.flag)
                    continue;
                target = item.target;
                frame = target.getProp(ObjectPropID.Frame);
                playStartTime = target.getProp(ObjectPropID.Playing) ? 0 : -1;
                playTotalTime = 0;
                for (var j = i; j < cnt; j++) {
                    item = this._items[j];
                    if (item.type != ActionType.Animation || item.target != target || item.time > this._startTime)
                        continue;
                    value = item.value;
                    value.flag = true;
                    if (value.frame != -1) {
                        frame = value.frame;
                        if (value.playing)
                            playStartTime = item.time;
                        else
                            playStartTime = -1;
                        playTotalTime = 0;
                    }
                    else {
                        if (value.playing) {
                            if (playStartTime < 0)
                                playStartTime = item.time;
                        }
                        else {
                            if (playStartTime >= 0)
                                playTotalTime += (item.time - playStartTime);
                            playStartTime = -1;
                        }
                    }
                    this.callHook(item, false);
                }
                if (playStartTime >= 0)
                    playTotalTime += (this._startTime - playStartTime);
                target.setProp(ObjectPropID.Playing, playStartTime >= 0);
                target.setProp(ObjectPropID.Frame, frame);
                if (playTotalTime > 0)
                    target.setProp(ObjectPropID.DeltaTime, playTotalTime);
            }
        }
        onDelayedPlayItem(tweener) {
            var item = tweener.target;
            item.tweener = null;
            this._totalTasks--;
            this.applyValue(item);
            this.callHook(item, false);
            this.checkAllComplete();
        }
        onTweenStart(tweener) {
            var item = tweener.target;
            if (item.type == ActionType.XY || item.type == ActionType.Size) //位置和大小要到start才最终确认起始值
             {
                var startValue;
                var endValue;
                if (this._reversed) {
                    startValue = item.tweenConfig.endValue;
                    endValue = item.tweenConfig.startValue;
                }
                else {
                    startValue = item.tweenConfig.startValue;
                    endValue = item.tweenConfig.endValue;
                }
                if (item.type == ActionType.XY) {
                    if (item.target != this._owner) {
                        if (!startValue.b1)
                            tweener.startValue.x = item.target.x;
                        else if (startValue.b3) //percent
                            tweener.startValue.x = startValue.f1 * this._owner.width;
                        if (!startValue.b2)
                            tweener.startValue.y = item.target.y;
                        else if (startValue.b3) //percent
                            tweener.startValue.y = startValue.f2 * this._owner.height;
                        if (!endValue.b1)
                            tweener.endValue.x = tweener.startValue.x;
                        else if (endValue.b3)
                            tweener.endValue.x = endValue.f1 * this._owner.width;
                        if (!endValue.b2)
                            tweener.endValue.y = tweener.startValue.y;
                        else if (endValue.b3)
                            tweener.endValue.y = endValue.f2 * this._owner.height;
                    }
                    else {
                        if (!startValue.b1)
                            tweener.startValue.x = item.target.x - this._ownerBaseX;
                        if (!startValue.b2)
                            tweener.startValue.y = item.target.y - this._ownerBaseY;
                        if (!endValue.b1)
                            tweener.endValue.x = tweener.startValue.x;
                        if (!endValue.b2)
                            tweener.endValue.y = tweener.startValue.y;
                    }
                }
                else {
                    if (!startValue.b1)
                        tweener.startValue.x = item.target.width;
                    if (!startValue.b2)
                        tweener.startValue.y = item.target.height;
                    if (!endValue.b1)
                        tweener.endValue.x = tweener.startValue.x;
                    if (!endValue.b2)
                        tweener.endValue.y = tweener.startValue.y;
                }
                if (item.tweenConfig.path) {
                    item.value.b1 = item.value.b2 = true;
                    tweener.setPath(item.tweenConfig.path);
                }
            }
            this.callHook(item, false);
        }
        onTweenUpdate(tweener) {
            var item = tweener.target;
            switch (item.type) {
                case ActionType.XY:
                case ActionType.Size:
                case ActionType.Scale:
                case ActionType.Skew:
                    item.value.f1 = tweener.value.x;
                    item.value.f2 = tweener.value.y;
                    if (item.tweenConfig.path) {
                        item.value.f1 += tweener.startValue.x;
                        item.value.f2 += tweener.startValue.y;
                    }
                    break;
                case ActionType.Alpha:
                case ActionType.Rotation:
                    item.value.f1 = tweener.value.x;
                    break;
                case ActionType.Color:
                    item.value.f1 = tweener.value.color;
                    break;
                case ActionType.ColorFilter:
                    item.value.f1 = tweener.value.x;
                    item.value.f2 = tweener.value.y;
                    item.value.f3 = tweener.value.z;
                    item.value.f4 = tweener.value.w;
                    break;
                case ActionType.Shake:
                    item.value.offsetX = tweener.deltaValue.x;
                    item.value.offsetY = tweener.deltaValue.y;
                    break;
            }
            this.applyValue(item);
        }
        onTweenComplete(tweener) {
            var item = tweener.target;
            item.tweener = null;
            this._totalTasks--;
            if (tweener.allCompleted) //当整体播放结束时间在这个tween的中间时不应该调用结尾钩子
                this.callHook(item, true);
            this.checkAllComplete();
        }
        onPlayTransCompleted(item) {
            this._totalTasks--;
            this.checkAllComplete();
        }
        callHook(item, tweenEnd) {
            if (tweenEnd) {
                if (item.tweenConfig && item.tweenConfig.endHook)
                    item.tweenConfig.endHook();
            }
            else {
                if (item.time >= this._startTime && item.hook)
                    item.hook();
            }
        }
        checkAllComplete() {
            if (this._playing && this._totalTasks == 0) {
                if (this._totalTimes < 0) {
                    this.internalPlay();
                    if (this._totalTasks == 0)
                        GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
                }
                else {
                    this._totalTimes--;
                    if (this._totalTimes > 0) {
                        this.internalPlay();
                        if (this._totalTasks == 0)
                            GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);
                    }
                    else {
                        this._playing = false;
                        var cnt = this._items.length;
                        for (var i = 0; i < cnt; i++) {
                            var item = this._items[i];
                            if (item.target && item.displayLockToken != 0) {
                                item.target.releaseDisplayLock(item.displayLockToken);
                                item.displayLockToken = 0;
                            }
                        }
                        if (this._onComplete) {
                            var handler = this._onComplete;
                            this._onComplete = null;
                            handler();
                        }
                    }
                }
            }
        }
        applyValue(item) {
            item.target._gearLocked = true;
            var value = item.value;
            switch (item.type) {
                case ActionType.XY:
                    if (item.target == this._owner) {
                        if (value.b1 && value.b2)
                            item.target.setPosition(value.f1 + this._ownerBaseX, value.f2 + this._ownerBaseY);
                        else if (value.b1)
                            item.target.x = value.f1 + this._ownerBaseX;
                        else
                            item.target.y = value.f2 + this._ownerBaseY;
                    }
                    else {
                        if (value.b3) //position in percent
                         {
                            if (value.b1 && value.b2)
                                item.target.setPosition(value.f1 * this._owner.width, value.f2 * this._owner.height);
                            else if (value.b1)
                                item.target.x = value.f1 * this._owner.width;
                            else if (value.b2)
                                item.target.y = value.f2 * this._owner.height;
                        }
                        else {
                            if (value.b1 && value.b2)
                                item.target.setPosition(value.f1, value.f2);
                            else if (value.b1)
                                item.target.x = value.f1;
                            else if (value.b2)
                                item.target.y = value.f2;
                        }
                    }
                    break;
                case ActionType.Size:
                    if (!value.b1)
                        value.f1 = item.target.width;
                    if (!value.b2)
                        value.f2 = item.target.height;
                    item.target.setSize(value.f1, value.f2);
                    break;
                case ActionType.Pivot:
                    item.target.setPivot(value.f1, value.f2, item.target.pivotAsAnchor);
                    break;
                case ActionType.Alpha:
                    item.target.alpha = value.f1;
                    break;
                case ActionType.Rotation:
                    item.target.rotation = value.f1;
                    break;
                case ActionType.Scale:
                    item.target.setScale(value.f1, value.f2);
                    break;
                case ActionType.Skew:
                    item.target.setSkew(value.f1, value.f2);
                    break;
                case ActionType.Color:
                    item.target.setProp(ObjectPropID.Color, value.f1);
                    break;
                case ActionType.Animation:
                    if (value.frame >= 0)
                        item.target.setProp(ObjectPropID.Frame, value.frame);
                    item.target.setProp(ObjectPropID.Playing, value.playing);
                    item.target.setProp(ObjectPropID.TimeScale, this._timeScale);
                    break;
                case ActionType.Visible:
                    item.target.visible = value.visible;
                    break;
                case ActionType.Transition:
                    if (this._playing) {
                        var trans = value.trans;
                        if (trans) {
                            this._totalTasks++;
                            var startTime = this._startTime > item.time ? (this._startTime - item.time) : 0;
                            var endTime = this._endTime >= 0 ? (this._endTime - item.time) : -1;
                            if (value.stopTime >= 0 && (endTime < 0 || endTime > value.stopTime))
                                endTime = value.stopTime;
                            trans.timeScale = this._timeScale;
                            trans._play(this.onPlayTransCompleted.bind(this, item), value.playTimes, 0, startTime, endTime, this._reversed);
                        }
                    }
                    break;
                case ActionType.Sound:
                    if (this._playing && item.time >= this._startTime) {
                        if (value.audioClip == null) {
                            var pi = UIPackage.getItemByURL(value.sound);
                            if (pi)
                                value.audioClip = pi.file;
                            else
                                value.audioClip = value.sound;
                        }
                        // if (value.audioClip)
                        //     GRoot.playOneShotSound(value.audioClip, value.volume);
                    }
                    break;
                case ActionType.Shake:
                    item.target.setPosition(item.target.x - value.lastOffsetX + value.offsetX, item.target.y - value.lastOffsetY + value.offsetY);
                    value.lastOffsetX = value.offsetX;
                    value.lastOffsetY = value.offsetY;
                    break;
                case ActionType.ColorFilter:
                    {
                        //todo colorFilter item.target.element, [value.f1, value.f2, value.f3, value.f4]);
                        break;
                    }
                case ActionType.Text:
                    item.target.text = value.text;
                    break;
                case ActionType.Icon:
                    item.target.icon = value.text;
                    break;
            }
            item.target._gearLocked = false;
        }
        setup(buffer) {
            this.name = buffer.readS();
            this._options = buffer.readInt();
            this._autoPlay = buffer.readBool();
            this._autoPlayTimes = buffer.readInt();
            this._autoPlayDelay = buffer.readFloat();
            var cnt = buffer.readShort();
            for (var i = 0; i < cnt; i++) {
                var dataLen = buffer.readShort();
                var curPos = buffer.pos;
                buffer.seek(curPos, 0);
                var item = new Item(buffer.readByte());
                item.name = this.name;
                item.fileName = this._owner.name;
                this._items[i] = item;
                item.time = buffer.readFloat();
                var targetId = buffer.readShort();
                if (targetId < 0)
                    item.targetId = "";
                else
                    item.targetId = this._owner.getChildAt(targetId).id;
                item.label = buffer.readS();
                if (buffer.readBool()) {
                    buffer.seek(curPos, 1);
                    item.tweenConfig = new TweenConfig();
                    item.tweenConfig.duration = buffer.readFloat();
                    if (item.time + item.tweenConfig.duration > this._totalDuration)
                        this._totalDuration = item.time + item.tweenConfig.duration;
                    item.tweenConfig.easeType = buffer.readByte();
                    item.tweenConfig.repeat = buffer.readInt();
                    item.tweenConfig.yoyo = buffer.readBool();
                    item.tweenConfig.endLabel = buffer.readS();
                    buffer.seek(curPos, 2);
                    this.decodeValue(item, buffer, item.tweenConfig.startValue);
                    buffer.seek(curPos, 3);
                    this.decodeValue(item, buffer, item.tweenConfig.endValue);
                    if (buffer.version >= 2) {
                        var pathLen = buffer.readInt();
                        if (pathLen > 0) {
                            item.tweenConfig.path = new GPath();
                            var pts = new Array();
                            for (var j = 0; j < pathLen; j++) {
                                var curveType = buffer.readByte();
                                switch (curveType) {
                                    case CurveType.Bezier:
                                        pts.push(GPathPoint.newBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                        break;
                                    case CurveType.CubicBezier:
                                        pts.push(GPathPoint.newCubicBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                        break;
                                    default:
                                        pts.push(GPathPoint.newPoint(buffer.readFloat(), buffer.readFloat(), curveType));
                                        break;
                                }
                            }
                            item.tweenConfig.path.create(pts);
                        }
                    }
                }
                else {
                    if (item.time > this._totalDuration)
                        this._totalDuration = item.time;
                    buffer.seek(curPos, 2);
                    this.decodeValue(item, buffer, item.value);
                }
                buffer.pos = curPos + dataLen;
            }
        }
        decodeValue(item, buffer, value) {
            switch (item.type) {
                case ActionType.XY:
                case ActionType.Size:
                case ActionType.Pivot:
                case ActionType.Skew:
                    value.b1 = buffer.readBool();
                    value.b2 = buffer.readBool();
                    value.f1 = buffer.readFloat();
                    value.f2 = buffer.readFloat();
                    if (buffer.version >= 2 && item.type == ActionType.XY)
                        value.b3 = buffer.readBool(); //percent
                    break;
                case ActionType.Alpha:
                case ActionType.Rotation:
                    value.b1 = value.b2 = true;
                    value.f1 = buffer.readFloat();
                    break;
                case ActionType.Scale:
                    value.b1 = value.b2 = true;
                    value.f1 = buffer.readFloat();
                    value.f2 = buffer.readFloat();
                    break;
                case ActionType.Color:
                    value.b1 = value.b2 = true;
                    value.f1 = buffer.readColor();
                    break;
                case ActionType.Animation:
                    value.playing = buffer.readBool();
                    value.frame = buffer.readInt();
                    break;
                case ActionType.Visible:
                    value.visible = buffer.readBool();
                    break;
                case ActionType.Sound:
                    value.sound = buffer.readS();
                    value.volume = buffer.readFloat();
                    break;
                case ActionType.Transition:
                    value.transName = buffer.readS();
                    value.playTimes = buffer.readInt();
                    break;
                case ActionType.Shake:
                    value.amplitude = buffer.readFloat();
                    value.duration = buffer.readFloat();
                    break;
                case ActionType.ColorFilter:
                    value.b1 = value.b2 = true;
                    value.f1 = buffer.readFloat();
                    value.f2 = buffer.readFloat();
                    value.f3 = buffer.readFloat();
                    value.f4 = buffer.readFloat();
                    break;
                case ActionType.Text:
                case ActionType.Icon:
                    value.text = buffer.readS();
                    break;
            }
        }
    }
    class Item {
        constructor(type) {
            this.type = type;
            this.value = {};
            this.displayLockToken = 0;
        }
    }
    class TweenConfig {
        constructor() {
            this.easeType = EaseType.QuadOut;
            this.startValue = { b1: true, b2: true };
            this.endValue = { b1: true, b2: true };
        }
    }

    class GComponent extends GObject {
        constructor(name) {
            super(name);
            this._sortingChildCount = 0;
            this._children = [];
            this._controllers = [];
            this._transitions = [];
            this._margin = new Margin();
            this._alignOffset = new Vec2();
            this._childrenRenderOrder = 0;
            this._apexIndex = 0;
            this._container = this._element;
        }
        createElement() {
            this._element = new UIElement();
            this._element.$owner = this;
            this._element.initElement();
        }
        dispose() {
            var i;
            var cnt;
            cnt = this._transitions.length;
            for (i = 0; i < cnt; ++i) {
                var trans = this._transitions[i];
                trans.dispose();
            }
            cnt = this._controllers.length;
            for (i = 0; i < cnt; ++i) {
                var cc = this._controllers[i];
                cc.dispose();
            }
            if (this.scrollPane)
                this.scrollPane.dispose();
            cnt = this._children.length;
            for (i = cnt - 1; i >= 0; --i) {
                var obj = this._children[i];
                obj.parent = null; //avoid removeFromParent call
                obj.dispose();
            }
            this._boundsChanged = false;
            super.dispose();
        }
        get displayListContainer() {
            return this._container;
        }
        get tabStopChildren() {
            return this._element.tabStopChildren;
        }
        set tabStopChildren(value) {
            this._element.tabStopChildren = value;
        }
        addChild(child) {
            this.addChildAt(child, this._children.length);
            return child;
        }
        addChildAt(child, index) {
            if (!child)
                throw "child is null";
            if (index >= 0 && index <= this._children.length) {
                if (child.parent == this) {
                    this.setChildIndex(child, index);
                }
                else {
                    child.removeFromParent();
                    child.parent = this;
                    var cnt = this._children.length;
                    if (child.sortingOrder != 0) {
                        this._sortingChildCount++;
                        index = this.getInsertPosForSortingChild(child);
                    }
                    else if (this._sortingChildCount > 0) {
                        if (index > (cnt - this._sortingChildCount))
                            index = cnt - this._sortingChildCount;
                    }
                    if (index == cnt)
                        this._children.push(child);
                    else
                        this._children.splice(index, 0, child);
                    this.childStateChanged(child);
                    this.setBoundsChangedFlag();
                }
                return child;
            }
            else {
                throw "Invalid child index";
            }
        }
        getInsertPosForSortingChild(target) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; i++) {
                var child = this._children[i];
                if (child == target)
                    continue;
                if (target.sortingOrder < child.sortingOrder)
                    break;
            }
            return i;
        }
        removeChild(child, dispose) {
            var childIndex = this._children.indexOf(child);
            if (childIndex != -1) {
                this.removeChildAt(childIndex, dispose);
            }
            return child;
        }
        removeChildAt(index, dispose) {
            if (index >= 0 && index < this._children.length) {
                var child = this._children[index];
                child.parent = null;
                if (child.sortingOrder != 0)
                    this._sortingChildCount--;
                this._children.splice(index, 1);
                child.group = null;
                if (child.element.parent) {
                    this._container.removeChild(child.element);
                    if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                        Timers.callLater(this.buildNativeDisplayList, this);
                }
                if (dispose)
                    child.dispose();
                this.setBoundsChangedFlag();
                return child;
            }
            else {
                throw "Invalid child index";
            }
        }
        removeChildren(beginIndex, endIndex, dispose) {
            beginIndex = beginIndex || 0;
            if (endIndex == null)
                endIndex = -1;
            if (endIndex < 0 || endIndex >= this._children.length)
                endIndex = this._children.length - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildAt(beginIndex, dispose);
        }
        getChildAt(index, classType) {
            if (index >= 0 && index < this.numChildren)
                return this._children[index];
            else
                throw "Invalid child index";
        }
        getChild(name, classType) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                if (this._children[i].name == name)
                    return this._children[i];
            }
            return null;
        }
        hasChild(name) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                if (this._children[i].name == name)
                    return true;
            }
            return false;
        }
        getChildByPath(path, classType) {
            var arr = path.split(".");
            var cnt = arr.length;
            var gcom = this;
            var obj;
            for (var i = 0; i < cnt; ++i) {
                obj = gcom.getChild(arr[i]);
                if (!obj)
                    break;
                if (i != cnt - 1) {
                    if (!(obj instanceof GComponent)) {
                        obj = null;
                        break;
                    }
                    else
                        gcom = obj;
                }
            }
            return obj;
        }
        getVisibleChild(name) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                var child = this._children[i];
                if (child.internalVisible && child.internalVisible2 && child.name == name)
                    return child;
            }
            return null;
        }
        getChildInGroup(name, group) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                var child = this._children[i];
                if (child.group == group && child.name == name)
                    return child;
            }
            return null;
        }
        getChildById(id) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                if (this._children[i]._id == id)
                    return this._children[i];
            }
            return null;
        }
        getChildIndex(child) {
            return this._children.indexOf(child);
        }
        setChildIndex(child, index) {
            var oldIndex = this._children.indexOf(child);
            if (oldIndex == -1)
                throw "Not a child of this container";
            if (child.sortingOrder != 0) //no effect
                return;
            var cnt = this._children.length;
            if (this._sortingChildCount > 0) {
                if (index > (cnt - this._sortingChildCount - 1))
                    index = cnt - this._sortingChildCount - 1;
            }
            this._setChildIndex(child, oldIndex, index);
        }
        setChildIndexBefore(child, index) {
            var oldIndex = this._children.indexOf(child);
            if (oldIndex == -1)
                throw "Not a child of this container";
            if (child.sortingOrder != 0) //no effect
                return oldIndex;
            var cnt = this._children.length;
            if (this._sortingChildCount > 0) {
                if (index > (cnt - this._sortingChildCount - 1))
                    index = cnt - this._sortingChildCount - 1;
            }
            if (oldIndex < index)
                return this._setChildIndex(child, oldIndex, index - 1);
            else
                return this._setChildIndex(child, oldIndex, index);
        }
        _setChildIndex(child, oldIndex, index) {
            var cnt = this._children.length;
            if (index > cnt)
                index = cnt;
            if (oldIndex == index)
                return oldIndex;
            this._children.splice(oldIndex, 1);
            this._children.splice(index, 0, child);
            if (child.element.parent) {
                var displayIndex = 0;
                var g;
                var i;
                if (this._childrenRenderOrder == ChildrenRenderOrder.Ascent) {
                    for (i = 0; i < index; i++) {
                        g = this._children[i];
                        if (g.element.parent)
                            displayIndex++;
                    }
                    if (displayIndex == this._container.numChildren)
                        displayIndex--;
                    this._container.setChildIndex(child.element, displayIndex);
                }
                else if (this._childrenRenderOrder == ChildrenRenderOrder.Descent) {
                    for (i = cnt - 1; i > index; i--) {
                        g = this._children[i];
                        if (g.element.parent)
                            displayIndex++;
                    }
                    if (displayIndex == this._container.numChildren)
                        displayIndex--;
                    this._container.setChildIndex(child.element, displayIndex);
                }
                else {
                    Timers.callLater(this.buildNativeDisplayList, this);
                }
                this.setBoundsChangedFlag();
            }
            return index;
        }
        swapChildren(child1, child2) {
            var index1 = this._children.indexOf(child1);
            var index2 = this._children.indexOf(child2);
            if (index1 == -1 || index2 == -1)
                throw "Not a child of this container";
            this.swapChildrenAt(index1, index2);
        }
        swapChildrenAt(index1, index2) {
            var child1 = this._children[index1];
            var child2 = this._children[index2];
            this.setChildIndex(child1, index2);
            this.setChildIndex(child2, index1);
        }
        get numChildren() {
            return this._children.length;
        }
        getChildren() {
            return this._children;
        }
        // public isAncestorOf(child: GObject): boolean {
        //     if (child == null)
        //         return false;
        //     var p: GComponent = child.parent;
        //     while (p) {
        //         if (p == this)
        //             return true;
        //         p = p.parent;
        //     }
        //     return false;
        // }
        addController(controller) {
            this._controllers.push(controller);
            controller.parent = this;
            this.applyController(controller);
        }
        getControllerAt(index) {
            return this._controllers[index];
        }
        getController(name) {
            var cnt = this._controllers.length;
            for (var i = 0; i < cnt; ++i) {
                var c = this._controllers[i];
                if (c.name == name)
                    return c;
            }
            return null;
        }
        removeController(c) {
            var index = this._controllers.indexOf(c);
            if (index == -1)
                throw new Error("controller not exists");
            c.parent = null;
            this._controllers.splice(index, 1);
            var length = this._children.length;
            for (var i = 0; i < length; i++) {
                var child = this._children[i];
                child.handleControllerChanged(c);
            }
        }
        get controllers() {
            return this._controllers;
        }
        childStateChanged(child) {
            if (this._buildingDisplayList)
                return;
            var cnt = this._children.length;
            if (child instanceof GGroup) {
                for (let i = 0; i < cnt; i++) {
                    let g = this._children[i];
                    if (g.group == child)
                        this.childStateChanged(g);
                }
                return;
            }
            if (child.internalVisible /*&& child.element != this._element.mask*/) {
                if (!child.element.parent) {
                    var index = 0;
                    if (this._childrenRenderOrder == ChildrenRenderOrder.Ascent) {
                        for (let i = 0; i < cnt; i++) {
                            let g = this._children[i];
                            if (g == child)
                                break;
                            if (g.element.parent)
                                index++;
                        }
                        this._container.addChildAt(child.element, index);
                    }
                    else if (this._childrenRenderOrder == ChildrenRenderOrder.Descent) {
                        for (let i = cnt - 1; i >= 0; i--) {
                            let g = this._children[i];
                            if (g == child)
                                break;
                            if (g.element.parent)
                                index++;
                        }
                        this._container.addChildAt(child.element, index);
                    }
                    else {
                        this._container.addChild(child.element);
                        Timers.callLater(this.buildNativeDisplayList, this);
                    }
                }
            }
            else {
                if (child.element.parent) {
                    this._container.removeChild(child.element);
                    if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                        Timers.callLater(this.buildNativeDisplayList, this);
                }
            }
        }
        buildNativeDisplayList() {
            if (!this._element)
                return;
            var cnt = this._children.length;
            if (cnt == 0)
                return;
            switch (this._childrenRenderOrder) {
                case ChildrenRenderOrder.Ascent:
                    {
                        for (let i = 0; i < cnt; i++) {
                            let g = this._children[i];
                            if (g.internalVisible)
                                this._container.addChild(g.element);
                        }
                    }
                    break;
                case ChildrenRenderOrder.Descent:
                    {
                        for (let i = cnt - 1; i >= 0; i--) {
                            let g = this._children[i];
                            if (g.internalVisible)
                                this._container.addChild(g.element);
                        }
                    }
                    break;
                case ChildrenRenderOrder.Arch:
                    {
                        var apex = clamp(this._apexIndex, 0, cnt);
                        for (let i = 0; i < apex; i++) {
                            let g = this._children[i];
                            if (g.internalVisible)
                                this._container.addChild(g.element);
                        }
                        for (let i = cnt - 1; i >= apex; i--) {
                            let g = this._children[i];
                            if (g.internalVisible)
                                this._container.addChild(g.element);
                        }
                    }
                    break;
            }
        }
        applyController(c) {
            this._applyingController = c;
            var child;
            var length = this._children.length;
            for (var i = 0; i < length; i++) {
                child = this._children[i];
                child.handleControllerChanged(c);
            }
            this._applyingController = null;
            c.runActions();
        }
        applyAllControllers() {
            var cnt = this._controllers.length;
            for (var i = 0; i < cnt; ++i) {
                this.applyController(this._controllers[i]);
            }
        }
        adjustRadioGroupDepth(obj, c) {
            var cnt = this._children.length;
            var myIndex = -1, maxIndex = -1;
            for (let i = 0; i < cnt; i++) {
                let child = this._children[i];
                if (child == obj) {
                    myIndex = i;
                }
                else if (("relatedController" in child) /*is button*/ && child.relatedController == c) {
                    if (i > maxIndex)
                        maxIndex = i;
                }
            }
            if (myIndex < maxIndex) {
                //如果正在applyingController，此时修改显示列表是危险的，但真正排除危险只能用显示列表的副本去做，这样性能可能损耗较大，
                //这里取个巧，让可能漏过的child补一下handleControllerChanged，反正重复执行是无害的。
                if (this._applyingController)
                    this._children[maxIndex].handleControllerChanged(this._applyingController);
                this.swapChildrenAt(myIndex, maxIndex);
            }
        }
        getTransitionAt(index) {
            return this._transitions[index];
        }
        getTransition(transName) {
            var cnt = this._transitions.length;
            for (var i = 0; i < cnt; ++i) {
                var trans = this._transitions[i];
                if (trans.name == transName)
                    return trans;
            }
            return null;
        }
        isChildInView(child) {
            if (this._element.clipping) {
                return child.x + child._width >= 0 && child.x <= this._width
                    && child.y + child._height >= 0 && child.y <= this._height;
            }
            else if (this._scrollPane) {
                return this._scrollPane.isChildInView(child);
            }
            else
                return true;
        }
        getFirstChildInView() {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                var child = this._children[i];
                if (this.isChildInView(child))
                    return i;
            }
            return -1;
        }
        get scrollPane() {
            return this._scrollPane;
        }
        get opaque() {
            return this._element.opaque;
        }
        set opaque(value) {
            this._element.opaque = value;
        }
        get margin() {
            return this._margin;
        }
        set margin(value) {
            this._margin.copy(value);
            if (this._element.clipping) {
                this._container.setPosition(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
            }
            this.handleSizeChanged();
        }
        get childrenRenderOrder() {
            return this._childrenRenderOrder;
        }
        set childrenRenderOrder(value) {
            if (this._childrenRenderOrder != value) {
                this._childrenRenderOrder = value;
                this.buildNativeDisplayList();
            }
        }
        get apexIndex() {
            return this._apexIndex;
        }
        set apexIndex(value) {
            if (this._apexIndex != value) {
                this._apexIndex = value;
                if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                    this.buildNativeDisplayList();
            }
        }
        get baseUserData() {
            var buffer = this.packageItem.rawData;
            buffer.seek(0, 4);
            return buffer.readS();
        }
        setupScroll(buffer) {
            if (this._element == this._container) {
                this._container = new UIElement();
                this._container.$owner = this;
                this._container.initElement();
                this._element.addChild(this._container);
            }
            this._scrollPane = new ScrollPane(this);
            this._scrollPane.setup(buffer);
            this._trackBounds = true;
        }
        setupOverflow(overflow) {
            if (overflow == OverflowType.Hidden) {
                if (this._element == this._container) {
                    this._container = new UIElement();
                    this._container.$owner = this;
                    this._container.initElement();
                    this._element.addChild(this._container);
                }
                this._element.clipping = true;
                this._container.setPosition(this._margin.left, this._margin.top);
            }
            else {
                this._element.clipping = false;
                if (this._margin.left != 0 || this._margin.top != 0) {
                    if (this._element == this._container) {
                        this._container = new UIElement();
                        this._container.$owner = this;
                        this._container.initElement();
                        this._element.addChild(this._container);
                    }
                    this._container.setPosition(this._margin.left, this._margin.top);
                }
            }
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            if (this._scrollPane)
                this._scrollPane.onOwnerSizeChanged();
        }
        handleGrayedChanged() {
            var c = this.getController("grayed");
            if (c) {
                c.selectedIndex = this.grayed ? 1 : 0;
                return;
            }
            var v = this.grayed;
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                this._children[i].grayed = v;
            }
        }
        handleControllerChanged(c) {
            super.handleControllerChanged(c);
            if (this._scrollPane)
                this._scrollPane.handleControllerChanged(c);
        }
        setBoundsChangedFlag() {
            if (!this._trackBounds)
                return;
            if (!this._boundsChanged) {
                this._boundsChanged = true;
                Timers.callLater(this.__render, this);
            }
        }
        __render() {
            if (this._boundsChanged) {
                this.updateBounds();
            }
        }
        ensureBoundsCorrect() {
            if (this._boundsChanged)
                this.updateBounds();
        }
        updateBounds() {
            var ax = 0, ay = 0, aw = 0, ah = 0;
            var len = this._children.length;
            if (len > 0) {
                ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
                var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
                var tmp = 0;
                var i1 = 0;
                for (i1 = 0; i1 < len; i1++) {
                    var child = this._children[i1];
                    tmp = child.x;
                    if (tmp < ax)
                        ax = tmp;
                    tmp = child.y;
                    if (tmp < ay)
                        ay = tmp;
                    tmp = child.x + child.actualWidth;
                    if (tmp > ar)
                        ar = tmp;
                    tmp = child.y + child.actualHeight;
                    if (tmp > ab)
                        ab = tmp;
                }
                aw = ar - ax;
                ah = ab - ay;
            }
            this.setBounds(ax, ay, aw, ah);
        }
        setBounds(ax, ay, aw, ah) {
            this._boundsChanged = false;
            if (this._scrollPane)
                this._scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
        }
        get viewWidth() {
            if (this._scrollPane)
                return this._scrollPane.viewWidth;
            else
                return this.width - this._margin.left - this._margin.right;
        }
        set viewWidth(value) {
            if (this._scrollPane)
                this._scrollPane.viewWidth = value;
            else
                this.width = value + this._margin.left + this._margin.right;
        }
        get viewHeight() {
            if (this._scrollPane)
                return this._scrollPane.viewHeight;
            else
                return this.height - this._margin.top - this._margin.bottom;
        }
        set viewHeight(value) {
            if (this._scrollPane)
                this._scrollPane.viewHeight = value;
            else
                this.height = value + this._margin.top + this._margin.bottom;
        }
        getSnappingPosition(xValue, yValue, resultPoint) {
            return this.getSnappingPositionWithDir(xValue, yValue, 0, 0, resultPoint);
        }
        /**
         * dir正数表示右移或者下移，负数表示左移或者上移
         */
        getSnappingPositionWithDir(xValue, yValue, xDir, yDir, resultPoint) {
            if (!resultPoint)
                resultPoint = new Vec2();
            var cnt = this._children.length;
            if (cnt == 0) {
                resultPoint.x = 0;
                resultPoint.y = 0;
                return resultPoint;
            }
            this.ensureBoundsCorrect();
            var obj = null;
            var prev = null;
            var i = 0;
            if (yValue != 0) {
                for (; i < cnt; i++) {
                    obj = this._children[i];
                    if (yValue < obj.y) {
                        if (i == 0) {
                            yValue = 0;
                            break;
                        }
                        else {
                            prev = this._children[i - 1];
                            if (yValue < prev.y + prev.actualHeight / 2) //top half part
                                yValue = prev.y;
                            else //bottom half part
                                yValue = obj.y;
                            break;
                        }
                    }
                }
                if (i == cnt)
                    yValue = obj.y;
            }
            if (xValue != 0) {
                if (i > 0)
                    i--;
                for (; i < cnt; i++) {
                    obj = this._children[i];
                    if (xValue < obj.x) {
                        if (i == 0) {
                            xValue = 0;
                            break;
                        }
                        else {
                            prev = this._children[i - 1];
                            if (xValue < prev.x + prev.actualWidth / 2) //top half part
                                xValue = prev.x;
                            else //bottom half part
                                xValue = obj.x;
                            break;
                        }
                    }
                }
                if (i == cnt)
                    xValue = obj.x;
            }
            resultPoint.x = xValue;
            resultPoint.y = yValue;
            return resultPoint;
        }
        childSortingOrderChanged(child, oldValue, newValue) {
            if (newValue == 0) {
                this._sortingChildCount--;
                this.setChildIndex(child, this._children.length);
            }
            else {
                if (oldValue == 0)
                    this._sortingChildCount++;
                var oldIndex = this._children.indexOf(child);
                var index = this.getInsertPosForSortingChild(child);
                if (oldIndex < index)
                    this._setChildIndex(child, oldIndex, index - 1);
                else
                    this._setChildIndex(child, oldIndex, index);
            }
        }
        constructFromResource() {
            this.constructFromResource2(null, 0);
        }
        constructFromResource2(objectPool, poolIndex) {
            var contentItem = this.packageItem.getBranch();
            if (!contentItem.decoded) {
                contentItem.decoded = true;
            }
            var i;
            var dataLen;
            var curPos;
            var nextPos;
            var f1;
            var f2;
            var buffer = contentItem.rawData;
            buffer.seek(0, 0);
            this._underConstruct = true;
            this.sourceWidth = buffer.readInt();
            this.sourceHeight = buffer.readInt();
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this.setSize(this.sourceWidth, this.sourceHeight);
            if (buffer.readBool()) {
                this.minWidth = buffer.readInt();
                this.maxWidth = buffer.readInt();
                this.minHeight = buffer.readInt();
                this.maxHeight = buffer.readInt();
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setPivot(f1, f2, buffer.readBool());
            }
            if (buffer.readBool()) {
                this._margin.top = buffer.readInt();
                this._margin.bottom = buffer.readInt();
                this._margin.left = buffer.readInt();
                this._margin.right = buffer.readInt();
            }
            var overflow = buffer.readByte();
            if (overflow == OverflowType.Scroll) {
                var savedPos = buffer.pos;
                buffer.seek(0, 7);
                this.setupScroll(buffer);
                buffer.pos = savedPos;
                this.element.clipping = true;
            }
            else
                this.setupOverflow(overflow);
            if (buffer.readBool())
                buffer.skip(8);
            this._buildingDisplayList = true;
            buffer.seek(0, 1);
            var controllerCount = buffer.readShort();
            for (i = 0; i < controllerCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                var controller = new Controller();
                this._controllers.push(controller);
                controller.parent = this;
                controller.setup(buffer);
                buffer.pos = nextPos;
            }
            buffer.seek(0, 2);
            var child;
            var childCount = buffer.readShort();
            for (i = 0; i < childCount; i++) {
                dataLen = buffer.readShort();
                curPos = buffer.pos;
                if (objectPool)
                    child = objectPool[poolIndex + i];
                else {
                    buffer.seek(curPos, 0);
                    var type = buffer.readByte();
                    var src = buffer.readS();
                    var pkgId = buffer.readS();
                    var pi;
                    if (src) {
                        var pkg;
                        if (pkgId)
                            pkg = UIPackage.getById(pkgId);
                        else
                            pkg = contentItem.owner;
                        pi = pkg ? pkg.getItemById(src) : null;
                    }
                    else
                        pi = null;
                    if (pi) {
                        child = $.UIObjectFactory.newObject(pi, null, pi.name);
                        child.constructFromResource();
                    }
                    else
                        child = $.UIObjectFactory.newObject(type, null, ObjectType[type]);
                }
                child._underConstruct = true;
                child.setup_beforeAdd(buffer, curPos);
                child.parent = this;
                this._children.push(child);
                buffer.pos = curPos + dataLen;
            }
            buffer.seek(0, 3);
            this.relations.setup(buffer, true);
            buffer.seek(0, 2);
            buffer.skip(2);
            for (i = 0; i < childCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                buffer.seek(buffer.pos, 3);
                this._children[i].relations.setup(buffer, false);
                buffer.pos = nextPos;
            }
            buffer.seek(0, 2);
            buffer.skip(2);
            for (i = 0; i < childCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                child = this._children[i];
                child.setup_afterAdd(buffer, buffer.pos);
                child._underConstruct = false;
                buffer.pos = nextPos;
            }
            buffer.seek(0, 4);
            buffer.skip(2); //customData
            this.opaque = buffer.readBool();
            var maskId = buffer.readShort();
            if (maskId != -1) {
                buffer.readBool();
                //todo 
                //setMask(this.getChildAt(maskId).element, buffer.readBool())
            }
            buffer.readS();
            buffer.readInt();
            buffer.readInt();
            buffer.seek(0, 5);
            var transitionCount = buffer.readShort();
            for (i = 0; i < transitionCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                var trans = new Transition(this);
                trans.setup(buffer);
                this._transitions.push(trans);
                buffer.pos = nextPos;
            }
            if (this._transitions.length > 0) {
                this.onEvent("added_to_stage", () => { this._transitions.forEach(e => e.onOwnerAddedToStage()); }, this);
                this.onEvent("removed_from_stage", () => { this._transitions.forEach(e => e.onOwnerRemovedFromStage()); }, this);
            }
            this.applyAllControllers();
            this._buildingDisplayList = false;
            this._underConstruct = false;
            this.buildNativeDisplayList();
            this.setBoundsChangedFlag();
            if (contentItem.objectType != ObjectType.Component)
                this.constructExtension(buffer);
            this.onConstruct();
        }
        constructExtension(buffer) {
        }
        onConstruct() {
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            buffer.seek(beginPos, 4);
            var pageController = buffer.readShort();
            if (pageController != -1 && this._scrollPane)
                this._scrollPane.pageController = this._parent.getControllerAt(pageController);
            var cnt;
            var i;
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                var cc = this.getController(buffer.readS());
                var pageId = buffer.readS();
                if (cc)
                    cc.selectedPageId = pageId;
            }
            if (buffer.version >= 2) {
                cnt = buffer.readShort();
                for (i = 0; i < cnt; i++) {
                    var target = buffer.readS();
                    var propertyId = buffer.readShort();
                    var value = buffer.readS();
                    var obj = this.getChildByPath(target);
                    if (obj)
                        obj.setProp(propertyId, value);
                }
            }
        }
        clearTouchEvent() {
            super.clearTouchEvent();
            for (let child of this._children) {
                child.clearTouchEvent();
            }
        }
    }

    class GLoader extends GObject {
        constructor(name) {
            super(name);
            this._url = "";
            this._fill = LoaderFillType.None;
            this._align = "left";
            this._valign = "top";
            this._checkSourceSizeFunc = (keepTimer) => {
                if (!keepTimer) {
                    this._checkSourceSizeTimer = null;
                }
                this.checkSourceSize();
            };
        }
        createElement() {
            this._element = new Image();
            this._element.$owner = this;
            this._element.init();
            this._element.nativePanel.style.overflow = 'noclip';
            this._content = new MovieClip();
            this._content.$owner = this;
            this._content.init();
            this._content.setNotInteractable();
            this._element.addChild(this._content);
        }
        dispose() {
            if (this._content2)
                this._content2.dispose();
            if (this._checkSourceSizeTimer) {
                $.CancelScheduled(this._checkSourceSizeTimer);
                this._checkSourceSizeTimer = null;
            }
            super.dispose();
        }
        get url() {
            return this._url;
        }
        set url(value) {
            if (this._url == value)
                return;
            this._url = value;
            this.loadContent();
            this.updateGear(7);
        }
        get icon() {
            return this._url;
        }
        set icon(value) {
            this.url = value;
        }
        get align() {
            return this._align;
        }
        set align(value) {
            if (this._align != value) {
                this._align = value;
                this.updateLayout();
            }
        }
        get verticalAlign() {
            return this._valign;
        }
        set verticalAlign(value) {
            if (this._valign != value) {
                this._valign = value;
                this.updateLayout();
            }
        }
        get fill() {
            return this._fill;
        }
        set fill(value) {
            if (this._fill != value) {
                this._fill = value;
                this.updateLayout();
            }
        }
        get shrinkOnly() {
            return this._shrinkOnly;
        }
        set shrinkOnly(value) {
            if (this._shrinkOnly != value) {
                this._shrinkOnly = value;
                this.updateLayout();
            }
        }
        get autoSize() {
            return this._autoSize;
        }
        set autoSize(value) {
            if (this._autoSize != value) {
                this._autoSize = value;
                this.updateLayout();
            }
        }
        get playing() {
            return this._content.playing;
        }
        set playing(value) {
            if (this._content.playing != value) {
                this._content.playing = value;
                this.updateGear(5);
            }
        }
        get frame() {
            return this._content.frame;
        }
        set frame(value) {
            if (this._content.frame != value) {
                this._content.frame = value;
                this.updateGear(5);
            }
        }
        get color() {
            return this._content.color;
        }
        set color(value) {
            if (this._content.color != value) {
                this._content.color = value;
                this.updateGear(4);
            }
        }
        get fillMethod() {
            return this._content.fillMethod;
        }
        set fillMethod(value) {
            this._content.fillMethod = value;
        }
        get fillOrigin() {
            return this._content.fillOrigin;
        }
        set fillOrigin(value) {
            this._content.fillOrigin = value;
        }
        get fillClockwise() {
            return this._content.fillClockwise;
        }
        set fillClockwise(value) {
            this._content.fillClockwise = value;
        }
        get fillAmount() {
            return this._content.fillAmount;
        }
        set fillAmount(value) {
            this._content.fillAmount = value;
        }
        get content() {
            return this._content;
        }
        get component() {
            return this._content2;
        }
        loadContent() {
            this.clearContent2();
            if (!this._url) {
                this.clearContent();
                return;
            }
            this._content.nativePanel.AddClass("FGUI_OutScreen");
            if (this._url.startsWith("ui://")) {
                this.loadFromPackage(this._url);
            }
            else {
                //internal
                this._content.src = this._url;
                this.updateLayout();
            }
        }
        isSizeInValid() {
            if (this._content.nativePanel.contentheight == 0 || this._content.nativePanel.contentwidth == 0) {
                return true;
            }
            return false;
        }
        checkSourceSize() {
            if (this.isSizeInValid()) {
                if (!this._checkSourceSizeTimer) {
                    this._checkSourceSizeTimer = $.Schedule(0.01, this._checkSourceSizeFunc);
                }
                return;
            }
            this._content.nativePanel.RemoveClass("FGUI_OutScreen");
            this._checkSourceSizeTimer = null;
            this.sourceHeight = Math.floor(this._content.nativePanel.contentheight / this._content.nativePanel.actualuiscale_y);
            this.sourceWidth = Math.floor(this._content.nativePanel.contentwidth / this._content.nativePanel.actualuiscale_x);
            this.updateLayout();
        }
        loadFromPackage(itemURL) {
            this._contentItem = UIPackage.getItemByURL(itemURL);
            if (this._contentItem) {
                this._contentItem = this._contentItem.getBranch();
                this.sourceWidth = this._contentItem.width;
                this.sourceHeight = this._contentItem.height;
                this._contentItem = this._contentItem.getHighResolution();
                if (this._autoSize)
                    this.setSize(this.sourceWidth, this.sourceHeight);
                if (this._contentItem.type == PackageItemType.Image) {
                    this._content.scale9Grid = this._contentItem.scale9Grid;
                    this._content.scaleByTile = this._contentItem.scaleByTile;
                    this._content.tileGridIndice = this._contentItem.tileGridIndice;
                    if (this._content.scaleByTile)
                        this._content.textureScale = new Vec2(this.sourceWidth, this.sourceHeight);
                    else
                        this._content.textureScale = new Vec2(this._contentItem.width / this.sourceWidth, this._contentItem.height / this.sourceHeight);
                    this._content.src = this._contentItem.file;
                    this.updateLayout();
                }
                else if (this._contentItem.type == PackageItemType.MovieClip) {
                    this._content.interval = this._contentItem.interval;
                    this._content.swing = this._contentItem.swing;
                    this._content.repeatDelay = this._contentItem.repeatDelay;
                    this._content.frames = this._contentItem.frames;
                    this.updateLayout();
                }
                else if (this._contentItem.type == PackageItemType.Component) {
                    this.clearContent();
                    var obj = UIPackage.createObjectFromURL(itemURL);
                    if (!obj)
                        this.setErrorState();
                    else if (!(obj instanceof GComponent)) {
                        obj.dispose();
                        this.setErrorState();
                    }
                    else {
                        this._content2 = obj;
                        this._element.addChild(this._content2.element);
                        this.updateLayout();
                    }
                }
                else {
                    this.clearContent();
                    this.setErrorState();
                }
            }
            else {
                this.clearContent();
                this.setErrorState();
            }
        }
        setErrorState() {
        }
        clearErrorState() {
        }
        updateLayout() {
            if (!this._content2 && !this._content.src && !this._content.frames) {
                if (this._autoSize) {
                    this._updatingLayout = true;
                    this.setSize(50, 30);
                    this._updatingLayout = false;
                }
                return;
            }
            if (this._content.src && this.isSizeInValid()) {
                this._checkSourceSizeFunc(true);
                return;
            }
            let cw = this.sourceWidth;
            let ch = this.sourceHeight;
            if (this._autoSize) {
                this._updatingLayout = true;
                if (cw == 0)
                    cw = 50;
                if (ch == 0)
                    ch = 30;
                this.setSize(cw, ch);
                this._updatingLayout = false;
                if (cw == this._width && ch == this._height) {
                    if (this._content2) {
                        this._content2.setPosition(0, 0);
                        this._content2.setScale(1, 1);
                    }
                    else {
                        this._content.setSize(cw, ch);
                        this._content.setPosition(0, 0);
                    }
                    return;
                }
            }
            var sx = 1, sy = 1;
            if (this._fill != LoaderFillType.None) {
                sx = this.width / this.sourceWidth;
                sy = this.height / this.sourceHeight;
                if (sx != 1 || sy != 1) {
                    if (this._fill == LoaderFillType.ScaleMatchHeight)
                        sx = sy;
                    else if (this._fill == LoaderFillType.ScaleMatchWidth)
                        sy = sx;
                    else if (this._fill == LoaderFillType.Scale) {
                        if (sx > sy)
                            sx = sy;
                        else
                            sy = sx;
                    }
                    else if (this._fill == LoaderFillType.ScaleNoBorder) {
                        if (sx > sy)
                            sy = sx;
                        else
                            sx = sy;
                    }
                    if (this._shrinkOnly) {
                        if (sx > 1)
                            sx = 1;
                        if (sy > 1)
                            sy = 1;
                    }
                    cw = this.sourceWidth * sx;
                    ch = this.sourceHeight * sy;
                }
            }
            if (this._content2)
                this._content2.setScale(sx, sy);
            else
                this._content.setSize(cw, ch);
            var nx, ny;
            if (this._align == "center")
                nx = Math.floor((this.width - cw) / 2);
            else if (this._align == "right")
                nx = this.width - cw;
            else
                nx = 0;
            if (this._valign == "middle")
                ny = Math.floor((this.height - ch) / 2);
            else if (this._valign == "bottom")
                ny = this.height - ch;
            else
                ny = 0;
            if (this._content2)
                this._content2.setPosition(nx, ny);
            else
                this._content.setPosition(nx, ny);
        }
        clearContent2() {
            this.clearErrorState();
            if (this._content2) {
                this._content2.dispose();
                this._content2 = null;
            }
        }
        clearContent() {
            this._content.src = null;
            this._content.frames = null;
            this._contentItem = null;
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            if (!this._updatingLayout)
                this.updateLayout();
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Color:
                    return this.color;
                case ObjectPropID.Playing:
                    return this.playing;
                case ObjectPropID.Frame:
                    return this.frame;
                case ObjectPropID.TimeScale:
                    return this._content.timeScale;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Color:
                    this.color = value;
                    break;
                case ObjectPropID.Playing:
                    this.playing = value;
                    break;
                case ObjectPropID.Frame:
                    this.frame = value;
                    break;
                case ObjectPropID.TimeScale:
                    this._content.timeScale = value;
                    break;
                case ObjectPropID.DeltaTime:
                    this._content.advance(value);
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            var iv;
            this._url = buffer.readS();
            iv = buffer.readByte();
            this._align = iv == 0 ? "left" : (iv == 1 ? "center" : "right");
            iv = buffer.readByte();
            this._valign = iv == 0 ? "top" : (iv == 1 ? "middle" : "bottom");
            this._fill = buffer.readByte();
            this._shrinkOnly = buffer.readBool();
            this._autoSize = buffer.readBool();
            buffer.readBool(); //_showErrorSign
            this._content.playing = buffer.readBool();
            this._content.frame = buffer.readInt();
            if (buffer.readBool())
                this.color = buffer.readColor();
            this._content.fillMethod = buffer.readByte();
            if (this._content.fillMethod != 0) {
                this._content.fillOrigin = buffer.readByte();
                this._content.fillClockwise = buffer.readBool();
                this._content.fillAmount = buffer.readFloat();
            }
            if (this._url)
                this.loadContent();
        }
    }

    class GLoader3D extends GObject {
    }

    //此为标签 并非指常规的文本
    class GLabel extends GComponent {
        constructor(name) {
            super(name);
        }
        get icon() {
            if (this._iconObject)
                return this._iconObject.icon;
            else
                return null;
        }
        set icon(value) {
            if (this._iconObject)
                this._iconObject.icon = value;
            this.updateGear(7);
        }
        get title() {
            if (this._titleObject)
                return this._titleObject.text;
            else
                return null;
        }
        set title(value) {
            if (this._titleObject)
                this._titleObject.text = value;
            this.updateGear(6);
        }
        get text() {
            return this.title;
        }
        set text(value) {
            this.title = value;
        }
        get titleColor() {
            var tf = this.getTextField();
            if (tf)
                return tf.color;
            else
                return 0;
        }
        set titleColor(value) {
            var tf = this.getTextField();
            if (tf)
                tf.color = value;
            this.updateGear(4);
        }
        get titleFontSize() {
            var tf = this.getTextField();
            if (tf)
                return tf.textFormat.size;
            else
                return 0;
        }
        set titleFontSize(value) {
            var tf = this.getTextField();
            if (tf) {
                tf.textFormat.size = value;
                tf.applyFormat();
            }
        }
        get color() {
            return this.titleColor;
        }
        set color(value) {
            this.titleColor = value;
        }
        set editable(val) {
            if (this._titleObject instanceof GTextInput)
                this._titleObject.editable = val;
        }
        get editable() {
            if (this._titleObject instanceof GTextInput)
                return this._titleObject.editable;
            else
                return false;
        }
        getTextField() {
            if ((this._titleObject instanceof GTextField) || (this._titleObject instanceof GTextInput))
                return this._titleObject;
            else if ('getTextField' in this._titleObject)
                return this._titleObject.getTextField();
            else
                return null;
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Color:
                    return this.titleColor;
                case ObjectPropID.OutlineColor:
                    {
                        let tf = this.getTextField();
                        if (tf)
                            return tf.textFormat.outlineColor;
                        else
                            return 0;
                    }
                case ObjectPropID.FontSize:
                    return this.titleFontSize;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case ObjectPropID.OutlineColor:
                    {
                        let tf = this.getTextField();
                        if (tf) {
                            tf.textFormat.outlineColor = value;
                            tf.applyFormat();
                        }
                    }
                    break;
                case ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        constructExtension(buffer) {
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            if (!buffer.seek(beginPos, 6))
                return;
            if (buffer.readByte() != this.packageItem.objectType)
                return;
            var str;
            str = buffer.readS();
            if (str != null)
                this.title = str;
            str = buffer.readS();
            if (str != null)
                this.icon = str;
            if (buffer.readBool())
                this.titleColor = buffer.readColor();
            var iv = buffer.readInt();
            if (iv != 0)
                this.titleFontSize = iv;
            if (buffer.readBool()) {
                let input = this.getTextField();
                if (input instanceof GTextInput) {
                    str = buffer.readS();
                    if (str != null)
                        input.setPromptText(str);
                    str = buffer.readS();
                    if (str != null)
                        input.setRestrict(str);
                    iv = buffer.readInt();
                    if (iv != 0)
                        input.setMaxLength(iv);
                    iv = buffer.readInt();
                    if (iv != 0) {
                        if (iv == 4)
                            input.setKeyboardType('number');
                        else if (iv == 3)
                            input.setKeyboardType('url');
                    }
                    if (buffer.readBool())
                        input.password = true;
                }
                else
                    buffer.skip(13);
            }
        }
    }

    class GButton extends GComponent {
        constructor(name) {
            super(name);
            this._soundVolumeScale = 0;
            this._downEffect = 0;
            this._downEffectValue = 0;
            this._downScaled = false;
            this._mode = ButtonMode.Common;
            this._title = "";
            this._icon = "";
            this._sound = UIConfig.buttonSound;
            this._soundVolumeScale = UIConfig.buttonSoundVolumeScale;
            this._changeStateOnClick = true;
            this._downEffectValue = 0.8;
        }
        get icon() {
            return this._icon;
        }
        set icon(value) {
            this._icon = value;
            value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
            if (this._iconObject)
                this._iconObject.icon = value;
            this.updateGear(7);
        }
        get selectedIcon() {
            return this._selectedIcon;
        }
        set selectedIcon(value) {
            this._selectedIcon = value;
            value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
            if (this._iconObject)
                this._iconObject.icon = value;
        }
        get title() {
            return this._title;
        }
        set title(value) {
            this._title = value;
            if (this._titleObject)
                this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
            this.updateGear(6);
        }
        get text() {
            return this.title;
        }
        set text(value) {
            this.title = value;
        }
        get selectedTitle() {
            return this._selectedTitle;
        }
        set selectedTitle(value) {
            this._selectedTitle = value;
            if (this._titleObject)
                this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
        }
        get titleColor() {
            var tf = this.getTextField();
            if (tf)
                return tf.color;
            else
                return 0;
        }
        set titleColor(value) {
            var tf = this.getTextField();
            if (tf)
                tf.color = value;
            this.updateGear(4);
        }
        get titleFontSize() {
            var tf = this.getTextField();
            if (tf)
                return tf.textFormat.size;
            else
                return 0;
        }
        set titleFontSize(value) {
            var tf = this.getTextField();
            if (tf) {
                tf.textFormat.size = value;
                tf.applyFormat();
            }
        }
        get sound() {
            return this._sound;
        }
        set sound(val) {
            this._sound = val;
        }
        get soundVolumeScale() {
            return this._soundVolumeScale;
        }
        set soundVolumeScale(value) {
            this._soundVolumeScale = value;
        }
        set selected(val) {
            if (this._mode == ButtonMode.Common)
                return;
            if (this._selected != val) {
                this._selected = val;
                this.setCurrentState();
                if (this._selectedTitle && this._titleObject)
                    this._titleObject.text = this._selected ? this._selectedTitle : this._title;
                if (this._selectedIcon) {
                    var str = this._selected ? this._selectedIcon : this._icon;
                    if (this._iconObject)
                        this._iconObject.icon = str;
                }
                if (this._relatedController
                    && this._parent
                    && !this._parent._buildingDisplayList) {
                    if (this._selected) {
                        this._relatedController.selectedPageId = this._relatedPageId;
                        if (this._relatedController.autoRadioGroupDepth)
                            this._parent.adjustRadioGroupDepth(this, this._relatedController);
                    }
                    else if (this._mode == ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId)
                        this._relatedController.oppositePageId = this._relatedPageId;
                }
            }
        }
        get selected() {
            return this._selected;
        }
        get mode() {
            return this._mode;
        }
        set mode(value) {
            if (this._mode != value) {
                if (value == ButtonMode.Common)
                    this.selected = false;
                this._mode = value;
            }
        }
        get relatedController() {
            return this._relatedController;
        }
        set relatedController(val) {
            if (val != this._relatedController) {
                this._relatedController = val;
                this._relatedPageId = null;
            }
        }
        get relatedPageId() {
            return this._relatedPageId;
        }
        set relatedPageId(val) {
            this._relatedPageId = val;
        }
        get changeStateOnClick() {
            return this._changeStateOnClick;
        }
        set changeStateOnClick(value) {
            this._changeStateOnClick = value;
        }
        getTextField() {
            if ((this._titleObject instanceof GTextField) || (this._titleObject instanceof GTextInput))
                return this._titleObject;
            else if ('getTextField' in this._titleObject)
                return this._titleObject.getTextField();
            else
                return null;
        }
        fireClick(downEffect, clickCall) {
            downEffect = downEffect || false;
            if (downEffect && this._mode == ButtonMode.Common) {
                this.element.nativePanel.style.transitionProperty = "transform";
                this.element.nativePanel.style.transitionDuration = "0.1s";
                this.setState("down");
                // Timers.add(100, 1, this.setState, this, "down");
                Timers.add(200, 1, this.setState, this, () => {
                    this.setState("up");
                    if (clickCall)
                        this.emit.call(this, "click");
                });
            }
        }
        setState(val) {
            if (this._buttonController)
                this._buttonController.selectedPage = val;
            if (this._downEffect == 1) {
                var cnt = this.numChildren;
                if (val == "down" || val == "selectedOver" || val == "selectedDisabled") {
                    var p = this._downEffectValue * 255;
                    var r = (p << 16) + (p << 8) + p;
                    for (var i = 0; i < cnt; i++) {
                        var obj = this.getChildAt(i);
                        if (!(obj instanceof GTextField))
                            obj.setProp(ObjectPropID.Color, r);
                    }
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        obj = this.getChildAt(i);
                        if (!(obj instanceof GTextField))
                            obj.setProp(ObjectPropID.Color, 0xFFFFFF);
                    }
                }
            }
            else if (this._downEffect == 2) {
                if (val == "down" || val == "selectedOver" || val == "selectedDisabled") {
                    if (!this._downScaled) {
                        this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue);
                        this._downScaled = true;
                    }
                }
                else {
                    if (this._downScaled) {
                        this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue);
                        this._downScaled = false;
                    }
                }
            }
        }
        setCurrentState() {
            if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled")) {
                if (this._selected)
                    this.setState("selectedDisabled");
                else
                    this.setState("disabled");
            }
            else {
                if (this._selected)
                    this.setState(this._over ? "selectedOver" : "down");
                else
                    this.setState(this._over ? "over" : "up");
            }
        }
        handleControllerChanged(c) {
            super.handleControllerChanged(c);
            if (this._relatedController == c)
                this.selected = this._relatedPageId == c.selectedPageId;
        }
        handleGrayedChanged() {
            if (this._buttonController && this._buttonController.hasPage("disabled")) {
                if (this.grayed) {
                    if (this._selected && this._buttonController.hasPage("selectedDisabled"))
                        this.setState("selectedDisabled");
                    else
                        this.setState("disabled");
                }
                else if (this._selected)
                    this.setState("down");
                else
                    this.setState("up");
            }
            else
                super.handleGrayedChanged();
        }
        handleTouchableChanged() {
            if (!this.touchable) {
                this._over = false;
                this.setCurrentState();
            }
            super.handleTouchableChanged();
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Color:
                    return this.titleColor;
                case ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            return tf.textFormat.outlineColor;
                        else
                            return 0;
                    }
                case ObjectPropID.FontSize:
                    return this.titleFontSize;
                case ObjectPropID.Selected:
                    return this.selected;
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case ObjectPropID.OutlineColor:
                    {
                        let tf = this.getTextField();
                        if (tf) {
                            tf.textFormat.outlineColor = value;
                            tf.applyFormat();
                        }
                    }
                    break;
                case ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;
                case ObjectPropID.Selected:
                    this.selected = value;
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        constructExtension(buffer) {
            buffer.seek(0, 6);
            this._mode = buffer.readByte();
            var str = buffer.readS();
            if (str)
                this._sound = str;
            this._soundVolumeScale = buffer.readFloat();
            this._downEffect = buffer.readByte();
            this._downEffectValue = buffer.readFloat();
            if (this._downEffect == 2)
                this.setPivot(0.5, 0.5, this.pivotAsAnchor);
            this._buttonController = this.getController("button");
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");
            if (this._titleObject)
                this._title = this._titleObject.text;
            if (this._iconObject)
                this._icon = this._iconObject.icon;
            if (this._mode == ButtonMode.Common)
                this.setState("up");
            this.onEvent("removed_from_stage", this.__removeFromStage, this);
            this.onEvent('onTouchBegin', this.__btnTouchBegin, this);
            this.onEvent('onTouchEnd', this.__btnTouchEnd, this);
            this.onEvent('onactivate', this.__click, this);
            this.onEvent("onmouseover", this.__rollover, this);
            this.onEvent("onmouseout", this.__rollout, this);
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            if (!buffer.seek(beginPos, 6))
                return;
            if (buffer.readByte() != this.packageItem.objectType)
                return;
            var str;
            var iv;
            str = buffer.readS();
            if (str != null)
                this.title = str;
            str = buffer.readS();
            if (str != null)
                this.selectedTitle = str;
            str = buffer.readS();
            if (str != null)
                this.icon = str;
            str = buffer.readS();
            if (str != null)
                this.selectedIcon = str;
            if (buffer.readBool())
                this.titleColor = buffer.readColor();
            iv = buffer.readInt();
            if (iv != 0)
                this.titleFontSize = iv;
            iv = buffer.readShort();
            if (iv >= 0)
                this._relatedController = this.parent.getControllerAt(iv);
            this._relatedPageId = buffer.readS();
            str = buffer.readS();
            if (str != null)
                this._sound = str;
            if (buffer.readBool())
                this._soundVolumeScale = buffer.readFloat();
            this.selected = buffer.readBool();
        }
        __rollover() {
            if (!this._buttonController || !this._buttonController.hasPage("over"))
                return;
            this._over = true;
            if (this._down)
                return;
            if (this.grayed && this._buttonController.hasPage("disabled"))
                return;
            this.setState(this._selected ? "selectedOver" : "over");
        }
        __rollout() {
            if (!this._buttonController || !this._buttonController.hasPage("over"))
                return;
            this._over = false;
            if (this._down)
                return;
            if (this.grayed && this._buttonController.hasPage("disabled"))
                return;
            this.setState(this._selected ? "down" : "up");
        }
        __btnTouchBegin() {
            this._down = true;
            if (this._mode == ButtonMode.Common) {
                if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
                    this.setState("selectedDisabled");
                else
                    this.setState("down");
            }
        }
        __btnTouchEnd() {
            if (this._down) {
                this._down = false;
                if (this._mode == ButtonMode.Common) {
                    if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
                        this.setState("disabled");
                    else if (this._over)
                        this.setState("over");
                    else
                        this.setState("up");
                }
                else {
                    if (!this._over
                        && this._buttonController
                        && (this._buttonController.selectedPage == "over" || this._buttonController.selectedPage == "selectedOver")) {
                        this.setCurrentState();
                    }
                }
            }
        }
        __removeFromStage() {
            if (this._over)
                this.__rollout();
        }
        __click() {
            if (this._sound) {
                Game.EmitSound(this._sound);
            }
            if (this._mode == ButtonMode.Check) {
                if (this._changeStateOnClick) {
                    this.selected = !this._selected;
                    this.emit.call(this, "status_changed");
                }
            }
            else if (this._mode == ButtonMode.Radio) {
                if (this._changeStateOnClick && !this._selected) {
                    this.selected = true;
                    this.emit.call(this, "status_changed");
                }
            }
            else {
                if (this._relatedController)
                    this._relatedController.selectedPageId = this._relatedPageId;
            }
            this.fireClick(this._downEffect == 2, true);
        }
    }

    class GComboBox extends GComponent {
        constructor(name) {
            super(name);
            this.visibleItemCount = UIConfig.defaultComboBoxVisibleItemCount;
            this.popupDirection = PopupDirection.Auto;
            this._itemsUpdated = true;
            this._selectedIndex = -1;
            this._items = [];
            this._values = [];
            this._dropdownShown = false;
        }
        get text() {
            if (this._titleObject)
                return this._titleObject.text;
            else
                return null;
        }
        set text(value) {
            if (this._titleObject)
                this._titleObject.text = value;
            this.updateGear(6);
        }
        get titleColor() {
            var tf = this.getTextField();
            if (tf)
                return tf.color;
            else
                return 0;
        }
        set titleColor(value) {
            var tf = this.getTextField();
            if (tf)
                tf.color = value;
            this.updateGear(4);
        }
        get titleFontSize() {
            var tf = this.getTextField();
            if (tf)
                return tf.textFormat.size;
            else
                return 0;
        }
        set titleFontSize(value) {
            var tf = this.getTextField();
            if (tf) {
                tf.textFormat.size = value;
                tf.applyFormat();
            }
        }
        get icon() {
            if (this._iconObject)
                return this._iconObject.icon;
            else
                return null;
        }
        set icon(value) {
            if (this._iconObject)
                this._iconObject.icon = value;
            this.updateGear(7);
        }
        get items() {
            return this._items;
        }
        set items(value) {
            if (!value)
                this._items.length = 0;
            else
                this._items = value.concat();
            if (this._items.length > 0) {
                if (this._selectedIndex >= this._items.length)
                    this._selectedIndex = this._items.length - 1;
                else if (this._selectedIndex == -1)
                    this._selectedIndex = 0;
                this.text = this._items[this._selectedIndex];
                if (this._icons && this._selectedIndex < this._icons.length)
                    this.icon = this._icons[this._selectedIndex];
            }
            else {
                this.text = "";
                if (this._icons)
                    this.icon = null;
                this._selectedIndex = -1;
            }
            this._itemsUpdated = true;
        }
        get icons() {
            return this._icons;
        }
        set icons(value) {
            this._icons = value;
            if (this._icons && this._selectedIndex != -1 && this._selectedIndex < this._icons.length)
                this.icon = this._icons[this._selectedIndex];
        }
        get values() {
            return this._values;
        }
        set values(value) {
            if (!value)
                this._values.length = 0;
            else
                this._values = value.concat();
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(val) {
            if (this._selectedIndex == val)
                return;
            this._selectedIndex = val;
            if (this._selectedIndex >= 0 && this._selectedIndex < this._items.length) {
                this.text = this._items[this._selectedIndex];
                if (this._icons && this._selectedIndex < this._icons.length)
                    this.icon = this._icons[this._selectedIndex];
            }
            else {
                this.text = "";
                if (this._icons)
                    this.icon = null;
            }
            this.updateSelectionController();
        }
        get value() {
            return this._values[this._selectedIndex];
        }
        set value(val) {
            var index = this._values.indexOf(val);
            if (index == -1 && val == null)
                index = this._values.indexOf("");
            this.selectedIndex = index;
        }
        getTextField() {
            if ((this._titleObject instanceof GTextField) || (this._titleObject instanceof GTextInput))
                return this._titleObject;
            else if ('getTextField' in this._titleObject)
                return this._titleObject.getTextField();
            else
                return null;
        }
        setState(val) {
            if (this._buttonController)
                this._buttonController.selectedPage = val;
        }
        setCurrentState() {
            if (this.grayed && this._buttonController && this._buttonController.hasPage("disabled"))
                this.setState("disabled");
            else if (this.dropdown && this.dropdown.parent)
                this.setState("down");
            else
                this.setState(this._over ? "over" : "up");
        }
        get selectionController() {
            return this._selectionController;
        }
        set selectionController(value) {
            this._selectionController = value;
        }
        handleControllerChanged(c) {
            super.handleControllerChanged(c);
            if (this._selectionController == c)
                this.selectedIndex = c.selectedIndex;
        }
        updateSelectionController() {
            if (this._selectionController && !this._selectionController.changing
                && this._selectedIndex < this._selectionController.pageCount) {
                var c = this._selectionController;
                this._selectionController = null;
                c.selectedIndex = this._selectedIndex;
                this._selectionController = c;
            }
        }
        dispose() {
            if (this.dropdown) {
                this.dropdown.dispose();
                this.dropdown = null;
            }
            this._selectionController = null;
            super.dispose();
        }
        getProp(index) {
            switch (index) {
                case ObjectPropID.Color:
                    return this.titleColor;
                case ObjectPropID.OutlineColor:
                    {
                        let tf = this.getTextField();
                        if (tf)
                            return tf.textFormat.outlineColor;
                        else
                            return 0;
                    }
                case ObjectPropID.FontSize:
                    {
                        let tf = this.getTextField();
                        if (tf)
                            return tf.textFormat.size;
                        else
                            return 0;
                    }
                default:
                    return super.getProp(index);
            }
        }
        setProp(index, value) {
            switch (index) {
                case ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case ObjectPropID.OutlineColor:
                    {
                        let tf = this.getTextField();
                        if (tf) {
                            tf.textFormat.outlineColor = value;
                            tf.applyFormat();
                        }
                    }
                    break;
                case ObjectPropID.FontSize:
                    {
                        let tf = this.getTextField();
                        if (tf) {
                            tf.textFormat.size = value;
                            tf.applyFormat();
                        }
                    }
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }
        constructExtension(buffer) {
            this._buttonController = this.getController("button");
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");
            let str = buffer.readS();
            if (str) {
                let obj = UIPackage.createObjectFromURL(str);
                if (!(obj instanceof GComponent)) {
                    $.Msg(this.resourceURL + " should be a component.");
                    return;
                }
                this.dropdown = obj;
                this.dropdown.SetNativeParent($('#HiddenRoot'));
                this._list = this.dropdown.getChild("list");
                if (this._list == null) {
                    $.Msg(this.resourceURL + ": should container a list component named list.");
                    return;
                }
                this._list.onEvent("click_item", this.__clickItem, this);
                this._list.addRelation(this.dropdown, RelationType.Width);
                this._list.removeRelation(this.dropdown, RelationType.Height);
                this.dropdown.addRelation(this._list, RelationType.Height);
                this.dropdown.removeRelation(this._list, RelationType.Width);
                this.dropdown.onEvent("removed_from_stage", this.__popupWinClosed, this);
            }
            this.onEvent("onmouseout", this.__rollout, this);
            this.onEvent("onmouseover", this.__rollover, this);
            this.onEvent("onactivate", this.showDropdown, this);
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            if (!buffer.seek(beginPos, 6))
                return;
            if (buffer.readByte() != this.packageItem.objectType)
                return;
            var i;
            var iv;
            var nextPos;
            var str;
            var itemCount = buffer.readShort();
            for (i = 0; i < itemCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                this._items[i] = buffer.readS();
                this._values[i] = buffer.readS();
                str = buffer.readS();
                if (str != null) {
                    if (this._icons == null)
                        this._icons = [];
                    this._icons[i] = str;
                }
                buffer.pos = nextPos;
            }
            str = buffer.readS();
            if (str != null) {
                this.text = str;
                this._selectedIndex = this._items.indexOf(str);
            }
            else if (this._items.length > 0) {
                this._selectedIndex = 0;
                this.text = this._items[0];
            }
            else
                this._selectedIndex = -1;
            str = buffer.readS();
            if (str != null)
                this.icon = str;
            if (buffer.readBool())
                this.titleColor = buffer.readColor();
            iv = buffer.readInt();
            if (iv > 0)
                this.visibleItemCount = iv;
            this.popupDirection = buffer.readByte();
            iv = buffer.readShort();
            if (iv >= 0)
                this._selectionController = this.parent.getControllerAt(iv);
        }
        cancelDropdown() {
            this.dropdown.removeFromParent();
            this.dropdown.parent = null;
            this._list.clearSelection();
            this._dropdownShown = false;
            this.setCurrentState();
        }
        showDropdown() {
            if (this._dropdownShown == true) {
                this.cancelDropdown();
                return;
            }
            this._dropdownShown = true;
            if (this._itemsUpdated) {
                this._itemsUpdated = false;
                this._list.removeChildrenToPool();
                var cnt = this._items.length;
                for (var i = 0; i < cnt; i++) {
                    var item = this._list.addItemFromPool();
                    item.name = i < this._values.length ? this._values[i] : "";
                    item.text = this._items[i];
                    item.icon = (this._icons && i < this._icons.length) ? this._icons[i] : null;
                }
                this._list.resizeToFit(this.visibleItemCount);
            }
            this._list.selectedIndex = -1;
            this.dropdown.width = this.width;
            this._list.ensureBoundsCorrect();
            this.showDropdownAutoPosition();
            if (this.dropdown.parent)
                this.setState("down");
        }
        showDropdownAutoPosition() {
            this.parent.addChild(this.dropdown);
            var pos = new Vec2(this.x, this.y);
            var sizeW = this.width, sizeH = this.height;
            var xx, yy;
            xx = pos.x;
            var screenWidth = Game.GetScreenWidth();
            var screenHeight = Game.GetScreenHeight();
            if (xx + this.dropdown.width > screenWidth)
                xx = xx + sizeW - this.dropdown.width;
            yy = pos.y + sizeH;
            if (((this.popupDirection === undefined || this.popupDirection === PopupDirection.Auto) && yy + this.dropdown.height > screenHeight)
                || this.popupDirection === PopupDirection.Up) {
                yy = pos.y - this.dropdown.height - 1;
                if (yy < 0) {
                    yy = 0;
                    xx += sizeW / 2;
                }
            }
            this.dropdown.setPosition(xx, yy);
        }
        __popupWinClosed() {
            this.setCurrentState();
        }
        __clickItem(sender, evt) {
            this.cancelDropdown();
            this._selectedIndex = -1;
            this.selectedIndex = this._list.getChildIndex(evt.data);
            this.emit('status_changed');
        }
        __rollover() {
            this._over = true;
            if (this._down || this.dropdown && this.dropdown.parent)
                return;
            this.setCurrentState();
        }
        __rollout() {
            this._over = false;
            if (this._down || this.dropdown && this.dropdown.parent)
                return;
            this.setCurrentState();
        }
        clearTouchEvent() {
            super.clearTouchEvent();
            if (this._dropdownShown == false && this.dropdown) {
                this.dropdown.clearTouchEvent();
            }
        }
    }

    let s_vec2$1 = new Vec2();
    class GSlider extends GComponent {
        constructor(name) {
            super(name);
            this.changeOnClick = true;
            this.canDrag = true;
            this._min = 0;
            this._max = 0;
            this._value = 0;
            this._barMaxWidth = 0;
            this._barMaxHeight = 0;
            this._barMaxWidthDelta = 0;
            this._barMaxHeightDelta = 0;
            this._clickPercent = 0;
            this._barStartX = 0;
            this._barStartY = 0;
            this._titleType = ProgressTitleType.Percent;
            this._value = 50;
            this._max = 100;
            this._clickPos = new Vec2();
        }
        get titleType() {
            return this._titleType;
        }
        set titleType(value) {
            this._titleType = value;
        }
        get wholeNumbers() {
            return this._wholeNumbers;
        }
        set wholeNumbers(value) {
            if (this._wholeNumbers != value) {
                this._wholeNumbers = value;
                this.update();
            }
        }
        get min() {
            return this._min;
        }
        set min(value) {
            if (this._min != value) {
                this._min = value;
                this.update();
            }
        }
        get max() {
            return this._max;
        }
        set max(value) {
            if (this._max != value) {
                this._max = value;
                this.update();
            }
        }
        get value() {
            return this._value;
        }
        set value(value) {
            if (this._value != value) {
                this._value = value;
                this.update();
            }
        }
        update() {
            this.updateWithPercent((this._value - this._min) / (this._max - this._min), false);
        }
        updateWithPercent(percent, manual) {
            percent = clamp01(percent);
            if (manual) {
                var newValue = clamp(this._min + (this._max - this._min) * percent, this._min, this._max);
                if (this._wholeNumbers) {
                    newValue = Math.round(newValue);
                    percent = clamp01((newValue - this._min) / (this._max - this._min));
                }
                if (newValue != this._value) {
                    this._value = newValue;
                    if (this.emit("changed"))
                        return;
                }
            }
            if (this._titleObject) {
                switch (this._titleType) {
                    case ProgressTitleType.Percent:
                        this._titleObject.text = Math.floor(percent * 100) + "%";
                        break;
                    case ProgressTitleType.ValueAndMax:
                        this._titleObject.text = this._value + "/" + this._max;
                        break;
                    case ProgressTitleType.Value:
                        this._titleObject.text = "" + this._value;
                        break;
                    case ProgressTitleType.Max:
                        this._titleObject.text = "" + this._max;
                        break;
                }
            }
            var fullWidth = this.width - this._barMaxWidthDelta;
            var fullHeight = this.height - this._barMaxHeightDelta;
            if (!this._reverse) {
                if (this._barObjectH)
                    this._barObjectH.width = Math.round(fullWidth * percent);
                if (this._barObjectV)
                    this._barObjectV.height = Math.round(fullHeight * percent);
            }
            else {
                if (this._barObjectH) {
                    this._barObjectH.width = Math.round(fullWidth * percent);
                    this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                }
                if (this._barObjectV) {
                    this._barObjectV.height = Math.round(fullHeight * percent);
                    this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                }
            }
        }
        constructExtension(buffer) {
            buffer.seek(0, 6);
            this._titleType = buffer.readByte();
            this._reverse = buffer.readBool();
            if (buffer.version >= 2) {
                this._wholeNumbers = buffer.readBool();
                this.changeOnClick = buffer.readBool();
            }
            this._titleObject = this.getChild("title");
            this._barObjectH = this.getChild("bar");
            this._barObjectV = this.getChild("bar_v");
            this._gripObject = this.getChild("grip");
            if (this._barObjectH) {
                this._barMaxWidth = this._barObjectH.width;
                this._barMaxWidthDelta = this.width - this._barMaxWidth;
                this._barStartX = this._barObjectH.x;
            }
            else if (this._barObjectV) {
                this._barMaxHeight = this._barObjectV.height;
                this._barMaxHeightDelta = this.height - this._barMaxHeight;
                this._barStartY = this._barObjectV.y;
            }
            if (this._gripObject) {
                this.onEvent('onTouchBegin', this.__gripTouchBegin, this);
                this.onEvent('onTouchMove', this.__gripTouchMove, this);
                this.onEvent('onTouchEnd', this.__gripTouchEnd, this);
            }
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            if (this._barObjectH)
                this._barMaxWidth = this.width - this._barMaxWidthDelta;
            if (this._barObjectV)
                this._barMaxHeight = this.height - this._barMaxHeightDelta;
            if (!this._underConstruct)
                this.update();
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            if (!buffer.seek(beginPos, 6)) {
                this.update();
                return;
            }
            if (buffer.readByte() != this.packageItem.objectType) {
                this.update();
                return;
            }
            this._value = buffer.readInt();
            this._max = buffer.readInt();
            if (buffer.version >= 2)
                this._min = buffer.readInt();
            this.update();
        }
        __gripTouchBegin() {
            if (this.canDrag == false) {
                this.canDrag = true;
                var gpos = GameUI.GetCursorPosition();
                this.globalToLocal(gpos[0], gpos[1], this._clickPos);
                this._clickPercent = clamp01((this._value - this._min) / (this._max - this._min));
            }
        }
        __gripTouchMove() {
            if (!this.canDrag)
                return;
            if (ScrollPane.draggingPane || (GObject.draggingObject && GObject.draggingObject != this)) {
                return;
            }
            GObject.draggingObject = this;
            var gpos = GameUI.GetCursorPosition();
            var pt = this.globalToLocal(gpos[0], gpos[1], s_vec2$1);
            var deltaX = pt.x - this._clickPos.x;
            var deltaY = pt.y - this._clickPos.y;
            if (this._reverse) {
                deltaX = -deltaX;
                deltaY = -deltaY;
            }
            var percent;
            if (this._barObjectH)
                percent = this._clickPercent + deltaX / this._barMaxWidth;
            else
                percent = this._clickPercent + deltaY / this._barMaxHeight;
            this.updateWithPercent(percent, true);
        }
        __gripTouchEnd() {
            if (GObject.draggingObject == this) {
                GObject.draggingObject = null;
            }
        }
    }

    class GProgressBar extends GComponent {
        constructor(name) {
            super(name);
            this._min = 0;
            this._max = 0;
            this._value = 0;
            this._barMaxWidth = 0;
            this._barMaxHeight = 0;
            this._barMaxWidthDelta = 0;
            this._barMaxHeightDelta = 0;
            this._barStartX = 0;
            this._barStartY = 0;
            this._titleType = ProgressTitleType.Percent;
            this._value = 50;
            this._max = 100;
        }
        get titleType() {
            return this._titleType;
        }
        set titleType(value) {
            if (this._titleType != value) {
                this._titleType = value;
                this.update(value);
            }
        }
        get min() {
            return this._min;
        }
        set min(value) {
            if (this._min != value) {
                this._min = value;
                this.update(this._value);
            }
        }
        get max() {
            return this._max;
        }
        set max(value) {
            if (this._max != value) {
                this._max = value;
                this.update(this._value);
            }
        }
        get value() {
            return this._value;
        }
        set value(value) {
            if (this._value != value) {
                GTween.kill(this, false, this.update);
                this._value = value;
                this.update(value);
            }
        }
        tweenValue(value, duration) {
            var oldValule;
            var tweener = GTween.getTween(this, this.update);
            if (tweener) {
                oldValule = tweener.value.x;
                tweener.kill();
            }
            else
                oldValule = this._value;
            this._value = value;
            return GTween.to(oldValule, this._value, duration).setTarget(this, this.update).setEase(EaseType.Linear);
        }
        update(newValue) {
            var percent = clamp01((newValue - this._min) / (this._max - this._min));
            if (this._titleObject) {
                switch (this._titleType) {
                    case ProgressTitleType.Percent:
                        this._titleObject.text = Math.floor(percent * 100) + "%";
                        break;
                    case ProgressTitleType.ValueAndMax:
                        this._titleObject.text = Math.floor(newValue) + "/" + Math.floor(this._max);
                        break;
                    case ProgressTitleType.Value:
                        this._titleObject.text = "" + Math.floor(newValue);
                        break;
                    case ProgressTitleType.Max:
                        this._titleObject.text = "" + Math.floor(this._max);
                        break;
                }
            }
            var fullWidth = this.width - this._barMaxWidthDelta;
            var fullHeight = this.height - this._barMaxHeightDelta;
            if (!this._reverse) {
                if (this._barObjectH) {
                    if (!this.setFillAmount(this._barObjectH, percent))
                        this._barObjectH.width = Math.round(fullWidth * percent);
                }
                if (this._barObjectV) {
                    if (!this.setFillAmount(this._barObjectV, percent))
                        this._barObjectV.height = Math.round(fullHeight * percent);
                }
            }
            else {
                if (this._barObjectH) {
                    if (!this.setFillAmount(this._barObjectH, 1 - percent)) {
                        this._barObjectH.width = Math.round(fullWidth * percent);
                        this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                    }
                }
                if (this._barObjectV) {
                    if (!this.setFillAmount(this._barObjectV, 1 - percent)) {
                        this._barObjectV.height = Math.round(fullHeight * percent);
                        this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                    }
                }
            }
            if (this._aniObject)
                this._aniObject.setProp(ObjectPropID.Frame, Math.floor(percent * 100));
        }
        setFillAmount(bar, amount) {
            if (((bar instanceof GImage) || (bar instanceof GLoader)) && bar.fillMethod != FillMethod.None) {
                bar.fillAmount = amount;
                return true;
            }
            else
                return false;
        }
        constructExtension(buffer) {
            buffer.seek(0, 6);
            this._titleType = buffer.readByte();
            this._reverse = buffer.readBool();
            this._titleObject = this.getChild("title");
            this._barObjectH = this.getChild("bar");
            this._barObjectV = this.getChild("bar_v");
            this._aniObject = this.getChild("ani");
            if (this._barObjectH) {
                this._barMaxWidth = this._barObjectH.width;
                this._barMaxWidthDelta = this.width - this._barMaxWidth;
                this._barStartX = this._barObjectH.x;
            }
            if (this._barObjectV) {
                this._barMaxHeight = this._barObjectV.height;
                this._barMaxHeightDelta = this.height - this._barMaxHeight;
                this._barStartY = this._barObjectV.y;
            }
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            if (this._barObjectH)
                this._barMaxWidth = this.width - this._barMaxWidthDelta;
            if (this._barObjectV)
                this._barMaxHeight = this.height - this._barMaxHeightDelta;
            if (!this._underConstruct)
                this.update(this._value);
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            if (!buffer.seek(beginPos, 6)) {
                this.update(this._value);
                return;
            }
            if (buffer.readByte() != this.packageItem.objectType) {
                this.update(this._value);
                return;
            }
            this._value = buffer.readInt();
            this._max = buffer.readInt();
            if (buffer.version >= 2)
                this._min = buffer.readInt();
            this.update(this._value);
        }
    }

    var s_vec2 = new Vec2();
    class GScrollBar extends GComponent {
        constructor(name) {
            super(name);
            this._dragOffset = new Vec2();
            this._scrollPerc = 0;
        }
        setScrollPane(target, vertical) {
            this._target = target;
            this._vertical = vertical;
        }
        setDisplayPerc(value) {
            if (this._vertical) {
                if (!this._fixedGripSize)
                    this._grip.height = Math.floor(value * this._bar.height);
                this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
            }
            else {
                if (!this._fixedGripSize)
                    this._grip.width = Math.floor(value * this._bar.width);
                this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
            }
            this._grip.visible = value != 0 && value != 1;
        }
        setScrollPerc(val) {
            this._scrollPerc = val;
            if (this._vertical)
                this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
            else
                this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
        }
        get minSize() {
            if (this._vertical)
                return (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0);
            else
                return (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
        }
        get gripDragging() {
            return this._gripDragging;
        }
        constructExtension(buffer) {
            buffer.seek(0, 6);
            this._fixedGripSize = buffer.readBool();
            this._grip = this.getChild("grip");
            if (!this._grip) {
                $.Msg("需要定义grip");
                return;
            }
            this._bar = this.getChild("bar");
            if (!this._bar) {
                $.Msg("需要定义bar");
                return;
            }
            this._arrowButton1 = this.getChild("arrow1");
            this._arrowButton2 = this.getChild("arrow2");
            this._grip.onEvent("onTouchBegin", this.__gripTouchBegin, this);
            this._grip.onEvent("onTouchMove", this.__gripTouchMove, this);
            this._grip.onEvent("onTouchEnd", this.__gripTouchEnd, this);
            this.onEvent("onactivate", this.__barTouchBegin, this);
            if (this._arrowButton1)
                this._arrowButton1.onEvent("onactivate", this.__arrowButton1Click, this);
            if (this._arrowButton2)
                this._arrowButton2.onEvent("onactivate", this.__arrowButton2Click, this);
        }
        __gripTouchBegin() {
            if (this._bar == null)
                return;
            this._gripDragging = true;
            this._target.updateScrollBarVisible();
            var gpos = GameUI.GetCursorPosition();
            this.globalToLocal(gpos[0], gpos[1], this._dragOffset);
            this._dragOffset.x -= this._grip.x;
            this._dragOffset.y -= this._grip.y;
        }
        __gripTouchMove() {
            if (!this.onStage)
                return;
            if (ScrollPane.draggingPane || (GObject.draggingObject && GObject.draggingObject != this)) {
                return;
            }
            GObject.draggingObject = this;
            var gpos = GameUI.GetCursorPosition();
            var pt = this.globalToLocal(gpos[0], gpos[1], s_vec2);
            if (this._vertical) {
                let curY = pt.y - this._dragOffset.y;
                let diff = this._bar.height - this._grip.height;
                if (diff == 0)
                    this._target.percY = 0;
                else
                    this._target.percY = (curY - this._bar.y) / diff;
            }
            else {
                let curX = pt.x - this._dragOffset.x;
                let diff = this._bar.width - this._grip.width;
                if (diff == 0)
                    this._target.percX = 0;
                else
                    this._target.percX = (curX - this._bar.x) / (this._bar.width - this._grip.width);
            }
        }
        __gripTouchEnd() {
            if (GObject.draggingObject == this) {
                GObject.draggingObject = null;
            }
            this._gripDragging = false;
            this._target.updateScrollBarVisible();
        }
        __arrowButton1Click() {
            if (this._vertical)
                this._target.scrollUp();
            else
                this._target.scrollLeft();
        }
        __arrowButton2Click() {
            if (this._vertical)
                this._target.scrollDown();
            else
                this._target.scrollRight();
        }
        __barTouchBegin() {
            var cpos = GameUI.GetCursorPosition();
            var pt = this._grip.globalToLocal(cpos[0], cpos[1], s_vec2);
            if (this._vertical) {
                if (pt.y < 0)
                    this._target.scrollUp(4);
                else
                    this._target.scrollDown(4);
            }
            else {
                if (pt.x < 0)
                    this._target.scrollLeft(4);
                else
                    this._target.scrollRight(4);
            }
        }
    }

    class GObjectPool {
        constructor() {
            this._count = 0;
            this._pool = {};
        }
        clear() {
            for (var i1 in this._pool) {
                var arr = this._pool[i1];
                arr.forEach(obj => obj.dispose());
            }
            this._pool = {};
            this._count = 0;
        }
        get count() {
            return this._count;
        }
        getObject(url) {
            url = UIPackage.normalizeURL(url);
            if (url == null)
                return null;
            var arr = this._pool[url];
            if (arr && arr.length > 0) {
                this._count--;
                return arr.shift();
            }
            return UIPackage.createObjectFromURL(url);
        }
        returnObject(obj) {
            var url = obj.resourceURL;
            if (!url)
                return;
            var arr = this._pool[url];
            if (!arr) {
                arr = [];
                this._pool[url] = arr;
            }
            obj.SetNativeParent($('#HiddenRoot'));
            this._count++;
            arr.push(obj);
        }
    }

    class GList extends GComponent {
        constructor(name) {
            super(name);
            this._lineCount = 0;
            this._columnCount = 0;
            this._lineGap = 0;
            this._columnGap = 0;
            this._lastSelectedIndex = 0;
            this._numItems = 0;
            this._firstIndex = 0; //the top left index
            this._curLineItemCount = 0; //item count in one line
            this._virtualListChanged = 0; //1-content changed, 2-size changed
            this.itemInfoVer = 0; //用来标志item是否在本次处理中已经被重用了
            this._trackBounds = true;
            this._pool = new GObjectPool();
            this._layout = ListLayoutType.SingleColumn;
            this._autoResizeItem = true;
            this._lastSelectedIndex = -1;
            this._selectionMode = ListSelectionMode.Single;
            this.opaque = true;
            this.scrollItemToViewOnClick = true;
            this._align = "left";
            this._valign = "top";
            this._container = new UIElement();
            this._container.$owner = this;
            this._container.initElement();
            this._element.addChild(this._container);
        }
        dispose() {
            this._pool.clear();
            super.dispose();
        }
        get layout() {
            return this._layout;
        }
        set layout(value) {
            if (this._layout != value) {
                this._layout = value;
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get lineCount() {
            return this._lineCount;
        }
        set lineCount(value) {
            if (this._lineCount != value) {
                this._lineCount = value;
                if (this._layout == ListLayoutType.FlowVertical || this._layout == ListLayoutType.Pagination) {
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            }
        }
        get columnCount() {
            return this._columnCount;
        }
        set columnCount(value) {
            if (this._columnCount != value) {
                this._columnCount = value;
                if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.Pagination) {
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            }
        }
        get lineGap() {
            return this._lineGap;
        }
        set lineGap(value) {
            if (this._lineGap != value) {
                this._lineGap = value;
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get columnGap() {
            return this._columnGap;
        }
        set columnGap(value) {
            if (this._columnGap != value) {
                this._columnGap = value;
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get align() {
            return this._align;
        }
        set align(value) {
            if (this._align != value) {
                this._align = value;
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get verticalAlign() {
            return this._valign;
        }
        set verticalAlign(value) {
            if (this._valign != value) {
                this._valign = value;
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get virtualItemSize() {
            return this._itemSize;
        }
        set virtualItemSize(value) {
            if (this._virtual) {
                if (this._itemSize == null)
                    this._itemSize = new Vec2();
                this._itemSize.set(value.x, value.y);
                this.setVirtualListChangedFlag(true);
            }
        }
        get defaultItem() {
            return this._defaultItem;
        }
        set defaultItem(val) {
            this._defaultItem = val;
        }
        get autoResizeItem() {
            return this._autoResizeItem;
        }
        set autoResizeItem(value) {
            if (this._autoResizeItem != value) {
                this._autoResizeItem = value;
                this.setBoundsChangedFlag();
                if (this._virtual)
                    this.setVirtualListChangedFlag(true);
            }
        }
        get selectionMode() {
            return this._selectionMode;
        }
        set selectionMode(value) {
            this._selectionMode = value;
        }
        get selectionController() {
            return this._selectionController;
        }
        set selectionController(value) {
            this._selectionController = value;
        }
        get itemPool() {
            return this._pool;
        }
        getFromPool(url) {
            if (!url)
                url = this._defaultItem;
            var obj = this._pool.getObject(url);
            if (obj)
                obj.visible = true;
            return obj;
        }
        returnToPool(obj) {
            this._pool.returnObject(obj);
        }
        setDefaultItemSize(sizeX, sizeY) {
            this._itemSize.set(sizeX, sizeY);
            if (this._virtual) {
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                    this.scrollPane.scrollStep = this._itemSize.y;
                else
                    this.scrollPane.scrollStep = this._itemSize.x;
                this.setVirtualListChangedFlag(true);
            }
        }
        addChildAt(child, index) {
            super.addChildAt(child, index);
            if (child instanceof GButton) {
                child.selected = false;
                child.changeStateOnClick = false;
            }
            child.onEvent("onactivate", this.__clickItem, this);
            child.onEvent("oncontextmenu", this.__clickItem, this);
            return child;
        }
        addItem(url) {
            if (!url)
                url = this._defaultItem;
            return this.addChild(UIPackage.createObjectFromURL(url));
        }
        addItemFromPool(url) {
            return this.addChild(this.getFromPool(url));
        }
        removeChildAt(index, dispose) {
            var child = super.removeChildAt(index);
            if (dispose)
                child.dispose();
            else {
                child.offEvent("onactivate", this.__clickItem, this);
                child.offEvent("oncontextmenu", this.__clickItem, this);
            }
            return child;
        }
        removeChildToPoolAt(index) {
            var child = super.removeChildAt(index);
            this.returnToPool(child);
        }
        removeChildToPool(child) {
            super.removeChild(child);
            this.returnToPool(child);
        }
        removeChildrenToPool(beginIndex, endIndex) {
            beginIndex = beginIndex || 0;
            if (endIndex == null)
                endIndex = -1;
            if (endIndex < 0 || endIndex >= this._children.length)
                endIndex = this._children.length - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildToPoolAt(beginIndex);
        }
        get selectedIndex() {
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if ((ii.obj instanceof GButton) && ii.obj.selected || ii.obj == null && ii.selected) {
                        if (this._loop)
                            return i % this._numItems;
                        else
                            return i;
                    }
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i];
                    if ((obj instanceof GButton) && obj.selected)
                        return i;
                }
            }
            return -1;
        }
        set selectedIndex(value) {
            if (value >= 0 && value < this.numItems) {
                if (this._selectionMode != ListSelectionMode.Single)
                    this.clearSelection();
                this.addSelection(value);
            }
            else
                this.clearSelection();
        }
        getSelection(result) {
            if (!result)
                result = new Array();
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if ((ii.obj instanceof GButton) && ii.obj.selected
                        || ii.obj == null && ii.selected) {
                        var j = i;
                        if (this._loop) {
                            j = i % this._numItems;
                            if (result.indexOf(j) != -1)
                                continue;
                        }
                        result.push(j);
                    }
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i];
                    if ((obj instanceof GButton) && obj.selected)
                        result.push(i);
                }
            }
            return result;
        }
        addSelection(index, scrollItToView) {
            if (this._selectionMode == ListSelectionMode.None)
                return;
            this.checkVirtualList();
            if (this._selectionMode == ListSelectionMode.Single)
                this.clearSelection();
            if (scrollItToView)
                this.scrollToView(index);
            this._lastSelectedIndex = index;
            var obj;
            if (this._virtual) {
                var ii = this._virtualItems[index];
                if (ii.obj)
                    obj = ii.obj;
                ii.selected = true;
            }
            else
                obj = this.getChildAt(index);
            if ((obj instanceof GButton) && !obj.selected) {
                obj.selected = true;
                this.updateSelectionController(index);
            }
        }
        removeSelection(index) {
            if (this._selectionMode == ListSelectionMode.None)
                return;
            var obj;
            if (this._virtual) {
                var ii = this._virtualItems[index];
                if (ii.obj)
                    obj = ii.obj;
                ii.selected = false;
            }
            else
                obj = this.getChildAt(index);
            if (obj instanceof GButton)
                obj.selected = false;
        }
        clearSelection() {
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if (ii.obj instanceof GButton)
                        ii.obj.selected = false;
                    ii.selected = false;
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i];
                    if (obj instanceof GButton)
                        obj.selected = false;
                }
            }
        }
        clearSelectionExcept(g) {
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if (ii.obj != g) {
                        if ((ii.obj instanceof GButton))
                            ii.obj.selected = false;
                        ii.selected = false;
                    }
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i];
                    if ((obj instanceof GButton) && obj != g)
                        obj.selected = false;
                }
            }
        }
        selectAll() {
            this.checkVirtualList();
            var last = -1;
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if ((ii.obj instanceof GButton) && !ii.obj.selected) {
                        ii.obj.selected = true;
                        last = i;
                    }
                    ii.selected = true;
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i];
                    if ((obj instanceof GButton) && !obj.selected) {
                        obj.selected = true;
                        last = i;
                    }
                }
            }
            if (last != -1)
                this.updateSelectionController(last);
        }
        selectNone() {
            this.clearSelection();
        }
        selectReverse() {
            this.checkVirtualList();
            var last = -1;
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if (ii.obj instanceof GButton) {
                        ii.obj.selected = !ii.obj.selected;
                        if (ii.obj.selected)
                            last = i;
                    }
                    ii.selected = !ii.selected;
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i];
                    if (obj instanceof GButton) {
                        obj.selected = !obj.selected;
                        if (obj.selected)
                            last = i;
                    }
                }
            }
            if (last != -1)
                this.updateSelectionController(last);
        }
        enableSelectionFocusEvents(enabled) {
            if (this._triggerFocusEvents == enabled)
                return;
            this._triggerFocusEvents = enabled;
            if (enabled) {
                this.tabStopChildren = true;
                this.setPanelEvent('onfocus', () => { this.notifySelection(true); });
                this.setPanelEvent('onblur', () => { this.notifySelection(false); });
            }
            else {
                this.clearPanelEvent("onfocus");
                this.clearPanelEvent("onblur");
            }
        }
        notifySelection(isFocusIn) {
            let eventType = isFocusIn ? "list_focus_in" : "list_focus_out";
            let cnt = this._children.length;
            for (let i = 0; i < cnt; i++) {
                let obj = this._children[i];
                if ((obj instanceof GButton) && obj.selected)
                    obj.emit(eventType);
            }
        }
        __clickItem(sender, evt) {
            if (this._scrollPane && this._scrollPane.isDragged)
                return;
            this.setSelectionOnEvent(sender);
            if (this._scrollPane && this.scrollItemToViewOnClick)
                this._scrollPane.scrollToView(sender, true);
            this.dispatchItemEvent(sender);
        }
        dispatchItemEvent(item) {
            this.emit.call(this, "click_item", item);
        }
        setSelectionOnEvent(item) {
            if (!(item instanceof GButton) || this._selectionMode == ListSelectionMode.None)
                return;
            var dontChangeLastIndex = false;
            var index = this.childIndexToItemIndex(this.getChildIndex(item));
            if (this._selectionMode == ListSelectionMode.Single) {
                if (!item.selected) {
                    this.clearSelectionExcept(item);
                    item.selected = true;
                }
            }
            else {
                if (GameUI.IsShiftDown()) {
                    if (!item.selected) {
                        if (this._lastSelectedIndex != -1) {
                            var min = Math.min(this._lastSelectedIndex, index);
                            var max = Math.max(this._lastSelectedIndex, index);
                            max = Math.min(max, this.numItems - 1);
                            var i;
                            if (this._virtual) {
                                for (i = min; i <= max; i++) {
                                    var ii = this._virtualItems[i];
                                    if (ii.obj instanceof GButton)
                                        ii.obj.selected = true;
                                    ii.selected = true;
                                }
                            }
                            else {
                                for (i = min; i <= max; i++) {
                                    var obj = this.getChildAt(i);
                                    if (obj instanceof GButton)
                                        obj.selected = true;
                                }
                            }
                            dontChangeLastIndex = true;
                        }
                        else {
                            item.selected = true;
                        }
                    }
                }
                else if ((GameUI.IsControlDown()) || this._selectionMode == ListSelectionMode.Multiple_SingleClick) {
                    item.selected = !item.selected;
                }
                else {
                    if (!item.selected) {
                        this.clearSelectionExcept(item);
                        item.selected = true;
                    }
                    else
                        this.clearSelectionExcept(item);
                }
            }
            if (!dontChangeLastIndex)
                this._lastSelectedIndex = index;
            if (item.selected)
                this.updateSelectionController(index);
        }
        resizeToFit(itemCount, minSize) {
            this.ensureBoundsCorrect();
            var curCount = this.numItems;
            if (itemCount == null || itemCount > curCount)
                itemCount = curCount;
            minSize = minSize || 0;
            if (this._virtual) {
                var lineCount = Math.ceil(itemCount / this._curLineItemCount);
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                    this.viewHeight = lineCount * this._itemSize.y + Math.max(0, lineCount - 1) * this._lineGap;
                else
                    this.viewWidth = lineCount * this._itemSize.x + Math.max(0, lineCount - 1) * this._columnGap;
            }
            else if (itemCount == 0) {
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                    this.viewHeight = minSize;
                else
                    this.viewWidth = minSize;
            }
            else {
                var i = itemCount - 1;
                var obj = null;
                while (i >= 0) {
                    obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible)
                        break;
                    i--;
                }
                if (i < 0) {
                    if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal)
                        this.viewHeight = minSize;
                    else
                        this.viewWidth = minSize;
                }
                else {
                    var size = 0;
                    if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                        size = obj.y + obj.height;
                        if (size < minSize)
                            size = minSize;
                        this.viewHeight = size;
                    }
                    else {
                        size = obj.x + obj.width;
                        if (size < minSize)
                            size = minSize;
                        this.viewWidth = size;
                    }
                }
            }
        }
        getMaxItemWidth() {
            var cnt = this._children.length;
            var max = 0;
            for (var i = 0; i < cnt; i++) {
                var child = this.getChildAt(i);
                if (child.width > max)
                    max = child.width;
            }
            return max;
        }
        handleSizeChanged() {
            super.handleSizeChanged();
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        }
        handleControllerChanged(c) {
            super.handleControllerChanged(c);
            if (this._selectionController == c)
                this.selectedIndex = c.selectedIndex;
        }
        updateSelectionController(index) {
            if (this._selectionController && !this._selectionController.changing
                && index < this._selectionController.pageCount) {
                var c = this._selectionController;
                this._selectionController = null;
                c.selectedIndex = index;
                this._selectionController = c;
            }
        }
        shouldSnapToNext(dir, delta, size) {
            return dir < 0 && delta > UIConfig.defaultScrollSnappingThreshold * size
                || dir > 0 && delta > (1 - UIConfig.defaultScrollSnappingThreshold) * size
                || dir == 0 && delta > size / 2;
        }
        getSnappingPositionWithDir(xValue, yValue, xDir, yDir, resultPoint) {
            if (this._virtual) {
                if (!resultPoint)
                    resultPoint = new Vec2();
                var saved;
                var index;
                var size;
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                    saved = yValue;
                    s_n = yValue;
                    index = this.getIndexOnPos1(false);
                    yValue = s_n;
                    if (index < this._virtualItems.length && index < this._realNumItems) {
                        size = this._virtualItems[index].height;
                        if (this.shouldSnapToNext(yDir, saved - yValue, size))
                            yValue += size + this._lineGap;
                    }
                }
                else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                    saved = xValue;
                    s_n = xValue;
                    index = this.getIndexOnPos2(false);
                    xValue = s_n;
                    if (index < this._virtualItems.length && index < this._realNumItems) {
                        size = this._virtualItems[index].width;
                        if (this.shouldSnapToNext(xDir, saved - xValue, size))
                            xValue += size + this._columnGap;
                    }
                }
                else {
                    saved = xValue;
                    s_n = xValue;
                    index = this.getIndexOnPos3(false);
                    xValue = s_n;
                    if (index < this._virtualItems.length && index < this._realNumItems) {
                        size = this._virtualItems[index].width;
                        if (this.shouldSnapToNext(xDir, saved - xValue, size))
                            xValue += size + this._columnGap;
                    }
                }
                resultPoint.x = xValue;
                resultPoint.y = yValue;
                return resultPoint;
            }
            else
                return super.getSnappingPositionWithDir(xValue, yValue, xDir, yDir, resultPoint);
        }
        scrollToView(index, ani, setFirst) {
            if (this._virtual) {
                if (this._numItems == 0)
                    return;
                this.checkVirtualList();
                if (index >= this._virtualItems.length)
                    throw new Error("Invalid child index: " + index + ">" + this._virtualItems.length);
                if (this._loop)
                    index = Math.floor(this._firstIndex / this._numItems) * this._numItems + index;
                var rect;
                var ii = this._virtualItems[index];
                var pos = 0;
                var i;
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                    for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                        pos += this._virtualItems[i].height + this._lineGap;
                    rect = new Rect(0, pos, this._itemSize.x, ii.height);
                }
                else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                    for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                        pos += this._virtualItems[i].width + this._columnGap;
                    rect = new Rect(pos, 0, ii.width, this._itemSize.y);
                }
                else {
                    var page = index / (this._curLineItemCount * this._curLineItemCount2);
                    rect = new Rect(page * this.viewWidth + (index % this._curLineItemCount) * (ii.width + this._columnGap), (index / this._curLineItemCount) % this._curLineItemCount2 * (ii.height + this._lineGap), ii.width, ii.height);
                }
                if (this._scrollPane)
                    this._scrollPane.scrollToView(rect, ani, setFirst);
            }
            else {
                var obj = this.getChildAt(index);
                if (this._scrollPane)
                    this._scrollPane.scrollToView(obj, ani, setFirst);
                else if (this._parent && this._parent.scrollPane)
                    this._parent.scrollPane.scrollToView(obj, ani, setFirst);
            }
        }
        get touchItem() {
            //find out which item is under finger
            //逐层往上知道查到点击了那个item
            // let obj: GObject = GRoot.getInst(this).touchTarget;
            // if (!obj)
            //     return null;
            // let p: GObject = obj.parent;
            // while (p != null) {
            //     if (p == this)
            //         return obj;
            //     obj = p;
            //     p = p.parent;
            // }
            return null;
        }
        getFirstChildInView() {
            return this.childIndexToItemIndex(super.getFirstChildInView());
        }
        childIndexToItemIndex(index) {
            if (!this._virtual)
                return index;
            if (this._layout == ListLayoutType.Pagination) {
                for (var i = this._firstIndex; i < this._realNumItems; i++) {
                    if (this._virtualItems[i].obj) {
                        index--;
                        if (index < 0)
                            return i;
                    }
                }
                return index;
            }
            else {
                index += this._firstIndex;
                if (this._loop && this._numItems > 0)
                    index = index % this._numItems;
                return index;
            }
        }
        itemIndexToChildIndex(index) {
            if (!this._virtual)
                return index;
            if (this._layout == ListLayoutType.Pagination) {
                return this.getChildIndex(this._virtualItems[index].obj);
            }
            else {
                if (this._loop && this._numItems > 0) {
                    var j = this._firstIndex % this._numItems;
                    if (index >= j)
                        index = index - j;
                    else
                        index = this._numItems - j + index;
                }
                else
                    index -= this._firstIndex;
                return index;
            }
        }
        setVirtual() {
            this._setVirtual(false);
        }
        /**
         * Set the list to be virtual list, and has loop behavior.
         */
        setVirtualAndLoop() {
            this._setVirtual(true);
        }
        _setVirtual(loop) {
            if (!this._virtual) {
                if (this._scrollPane == null)
                    throw new Error("Virtual list must be scrollable!");
                if (loop) {
                    if (this._layout == ListLayoutType.FlowHorizontal || this._layout == ListLayoutType.FlowVertical)
                        throw new Error("Loop list instanceof not supported for FlowHorizontal or FlowVertical this.layout!");
                    this._scrollPane.bouncebackEffect = false;
                }
                this._virtual = true;
                this._loop = loop;
                this._virtualItems = new Array();
                this.removeChildrenToPool();
                if (this._itemSize == null) {
                    this._itemSize = new Vec2();
                    var obj = this.getFromPool(null);
                    if (obj == null) {
                        throw new Error("Virtual List must have a default list item resource.");
                    }
                    else {
                        this._itemSize.x = obj.width;
                        this._itemSize.y = obj.height;
                    }
                    this.removeChildToPool(obj);
                }
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                    this._scrollPane.scrollStep = this._itemSize.y;
                    if (this._loop)
                        this._scrollPane._loop = 2;
                }
                else {
                    this._scrollPane.scrollStep = this._itemSize.x;
                    if (this._loop)
                        this._scrollPane._loop = 1;
                }
                this.addEvent("scroll", this.__scrolled, this);
                this.setVirtualListChangedFlag(true);
            }
        }
        get numItems() {
            if (this._virtual)
                return this._numItems;
            else
                return this._children.length;
        }
        set numItems(value) {
            var i;
            if (this._virtual) {
                if (this.itemRenderer == null)
                    throw new Error("set itemRenderer first!");
                this._numItems = value;
                if (this._loop)
                    this._realNumItems = this._numItems * 6; //设置6倍数量，用于循环滚动
                else
                    this._realNumItems = this._numItems;
                //_virtualItems的设计是只增不减的
                var oldCount = this._virtualItems.length;
                if (this._realNumItems > oldCount) {
                    for (i = oldCount; i < this._realNumItems; i++) {
                        var ii = { width: 0, height: 0, flag: 0 };
                        ii.width = this._itemSize.x;
                        ii.height = this._itemSize.y;
                        this._virtualItems.push(ii);
                    }
                }
                else {
                    for (i = this._realNumItems; i < oldCount; i++)
                        this._virtualItems[i].selected = false;
                }
                if (this._virtualListChanged != 0)
                    Timers.remove(this._refreshVirtualList, this);
                //立即刷新
                this._refreshVirtualList();
            }
            else {
                var cnt = this._children.length;
                if (value > cnt) {
                    for (i = cnt; i < value; i++) {
                        if (this.itemProvider == null)
                            this.addItemFromPool();
                        else
                            this.addItemFromPool(this.itemProvider(i));
                    }
                }
                else {
                    this.removeChildrenToPool(value, cnt);
                }
                if (this.itemRenderer) {
                    for (i = 0; i < value; i++)
                        this.itemRenderer(i, this.getChildAt(i));
                }
            }
        }
        refreshVirtualList() {
            this.setVirtualListChangedFlag(false);
        }
        checkVirtualList() {
            if (this._virtualListChanged != 0) {
                this._refreshVirtualList();
                Timers.remove(this._refreshVirtualList, this);
            }
        }
        setVirtualListChangedFlag(layoutChanged) {
            if (layoutChanged)
                this._virtualListChanged = 2;
            else if (this._virtualListChanged == 0)
                this._virtualListChanged = 1;
            Timers.callLater(this._refreshVirtualList, this);
        }
        _refreshVirtualList() {
            if (!this._element)
                return;
            var layoutChanged = this._virtualListChanged == 2;
            this._virtualListChanged = 0;
            this._eventLocked = true;
            if (layoutChanged) {
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.SingleRow)
                    this._curLineItemCount = 1;
                else if (this._layout == ListLayoutType.FlowHorizontal) {
                    if (this._columnCount > 0)
                        this._curLineItemCount = this._columnCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                }
                else if (this._layout == ListLayoutType.FlowVertical) {
                    if (this._lineCount > 0)
                        this._curLineItemCount = this._lineCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                }
                else //pagination
                 {
                    if (this._columnCount > 0)
                        this._curLineItemCount = this._columnCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                    if (this._lineCount > 0)
                        this._curLineItemCount2 = this._lineCount;
                    else {
                        this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                        if (this._curLineItemCount2 <= 0)
                            this._curLineItemCount2 = 1;
                    }
                }
            }
            var ch = 0, cw = 0;
            if (this._realNumItems > 0) {
                var i;
                var len = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount;
                var len2 = Math.min(this._curLineItemCount, this._realNumItems);
                if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                    for (i = 0; i < len; i += this._curLineItemCount)
                        ch += this._virtualItems[i].height + this._lineGap;
                    if (ch > 0)
                        ch -= this._lineGap;
                    if (this._autoResizeItem)
                        cw = this._scrollPane.viewWidth;
                    else {
                        for (i = 0; i < len2; i++)
                            cw += this._virtualItems[i].width + this._columnGap;
                        if (cw > 0)
                            cw -= this._columnGap;
                    }
                }
                else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                    for (i = 0; i < len; i += this._curLineItemCount)
                        cw += this._virtualItems[i].width + this._columnGap;
                    if (cw > 0)
                        cw -= this._columnGap;
                    if (this._autoResizeItem)
                        ch = this._scrollPane.viewHeight;
                    else {
                        for (i = 0; i < len2; i++)
                            ch += this._virtualItems[i].height + this._lineGap;
                        if (ch > 0)
                            ch -= this._lineGap;
                    }
                }
                else {
                    var pageCount = Math.ceil(len / (this._curLineItemCount * this._curLineItemCount2));
                    cw = pageCount * this.viewWidth;
                    ch = this.viewHeight;
                }
            }
            this.handleAlign(cw, ch);
            this._scrollPane.setContentSize(cw, ch);
            this._eventLocked = false;
            this.handleScroll(true);
        }
        __scrolled() {
            this.handleScroll(false);
        }
        getIndexOnPos1(forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                s_n = 0;
                return 0;
            }
            var i;
            var pos2;
            var pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).y;
                if (pos2 > s_n) {
                    for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                        pos2 -= (this._virtualItems[i].height + this._lineGap);
                        if (pos2 <= s_n) {
                            s_n = pos2;
                            return i;
                        }
                    }
                    s_n = 0;
                    return 0;
                }
                else {
                    for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                        if (pos3 > s_n) {
                            s_n = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    s_n = pos2;
                    return this._realNumItems - this._curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                    if (pos3 > s_n) {
                        s_n = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                s_n = pos2;
                return this._realNumItems - this._curLineItemCount;
            }
        }
        getIndexOnPos2(forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                s_n = 0;
                return 0;
            }
            var i;
            var pos2;
            var pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).x;
                if (pos2 > s_n) {
                    for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                        pos2 -= (this._virtualItems[i].width + this._columnGap);
                        if (pos2 <= s_n) {
                            s_n = pos2;
                            return i;
                        }
                    }
                    s_n = 0;
                    return 0;
                }
                else {
                    for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                        if (pos3 > s_n) {
                            s_n = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    s_n = pos2;
                    return this._realNumItems - this._curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                    if (pos3 > s_n) {
                        s_n = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                s_n = pos2;
                return this._realNumItems - this._curLineItemCount;
            }
        }
        getIndexOnPos3(forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                s_n = 0;
                return 0;
            }
            var viewWidth = this.viewWidth;
            var page = Math.floor(s_n / viewWidth);
            var startIndex = page * (this._curLineItemCount * this._curLineItemCount2);
            var pos2 = page * viewWidth;
            var i;
            var pos3;
            for (i = 0; i < this._curLineItemCount; i++) {
                pos3 = pos2 + this._virtualItems[startIndex + i].width + this._columnGap;
                if (pos3 > s_n) {
                    s_n = pos2;
                    return startIndex + i;
                }
                pos2 = pos3;
            }
            s_n = pos2;
            return startIndex + this._curLineItemCount - 1;
        }
        handleScroll(forceUpdate) {
            if (this._eventLocked)
                return;
            if (this._layout == ListLayoutType.SingleColumn || this._layout == ListLayoutType.FlowHorizontal) {
                var enterCounter = 0;
                while (this.handleScroll1(forceUpdate)) {
                    enterCounter++;
                    forceUpdate = false;
                    if (enterCounter > 20) {
                        $.Msg("list will never be <the> filled item renderer function always returns a different size.");
                        break;
                    }
                }
                this.handleArchOrder1();
            }
            else if (this._layout == ListLayoutType.SingleRow || this._layout == ListLayoutType.FlowVertical) {
                enterCounter = 0;
                while (this.handleScroll2(forceUpdate)) {
                    enterCounter++;
                    forceUpdate = false;
                    if (enterCounter > 20) {
                        $.Msg("list will never be <the> filled item renderer function always returns a different size.");
                        break;
                    }
                }
                this.handleArchOrder2();
            }
            else {
                this.handleScroll3(forceUpdate);
            }
            this._boundsChanged = false;
        }
        handleScroll1(forceUpdate) {
            var pos = this._scrollPane.scrollingPosY;
            var max = pos + this._scrollPane.viewHeight;
            var end = max == this._scrollPane.contentHeight; //这个标志表示当前需要滚动到最末，无论内容变化大小
            //寻找当前位置的第一条项目
            s_n = pos;
            var newFirstIndex = this.getIndexOnPos1(forceUpdate);
            pos = s_n;
            if (newFirstIndex == this._firstIndex && !forceUpdate)
                return false;
            var oldFirstIndex = this._firstIndex;
            this._firstIndex = newFirstIndex;
            var curIndex = newFirstIndex;
            var forward = oldFirstIndex > newFirstIndex;
            var childCount = this.numChildren;
            var lastIndex = oldFirstIndex + childCount - 1;
            var reuseIndex = forward ? lastIndex : oldFirstIndex;
            var curX = 0, curY = pos;
            var needRender;
            var deltaSize = 0;
            var firstItemDeltaSize = 0;
            var url = this.defaultItem;
            var ii, ii2;
            var i, j;
            var partSize = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
            this.itemInfoVer++;
            while (curIndex < this._realNumItems && (end || curY < max)) {
                ii = this._virtualItems[curIndex];
                if (ii.obj == null || forceUpdate) {
                    if (this.itemProvider) {
                        url = this.itemProvider(curIndex % this._numItems);
                        if (url == null)
                            url = this._defaultItem;
                    }
                    url = UIPackage.normalizeURL(url);
                    if (ii.obj && ii.obj.resourceURL != url) {
                        if (ii.obj instanceof GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                if (ii.obj == null) {
                    //搜索最适合的重用item，保证每次刷新需要新建或者重新render的item最少
                    if (forward) {
                        for (j = reuseIndex; j >= oldFirstIndex; j--) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex--;
                                break;
                            }
                        }
                    }
                    else {
                        for (j = reuseIndex; j <= lastIndex; j++) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex++;
                                break;
                            }
                        }
                    }
                    if (ii.obj) {
                        this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                    }
                    else {
                        ii.obj = this._pool.getObject(url);
                        if (forward)
                            this.addChildAt(ii.obj, curIndex - newFirstIndex);
                        else
                            this.addChild(ii.obj);
                    }
                    if (ii.obj instanceof GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else
                    needRender = forceUpdate;
                if (needRender) {
                    if (this._autoResizeItem && (this._layout == ListLayoutType.SingleColumn || this._columnCount > 0))
                        ii.obj.setSize(partSize, ii.obj.height, true);
                    this.itemRenderer(curIndex % this._numItems, ii.obj);
                    if (curIndex % this._curLineItemCount == 0) {
                        deltaSize += Math.ceil(ii.obj.height) - ii.height;
                        if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                            //当内容向下滚动时，如果新出现的项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                            firstItemDeltaSize = Math.ceil(ii.obj.height) - ii.height;
                        }
                    }
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
                ii.flag = this.itemInfoVer;
                ii.obj.setPosition(curX, curY);
                if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
                    max += ii.height;
                curX += ii.width + this._columnGap;
                if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                    curX = 0;
                    curY += ii.height + this._lineGap;
                }
                curIndex++;
            }
            for (i = 0; i < childCount; i++) {
                ii = this._virtualItems[oldFirstIndex + i];
                if (ii.flag != this.itemInfoVer && ii.obj) {
                    if (ii.obj instanceof GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            childCount = this._children.length;
            for (i = 0; i < childCount; i++) {
                var obj = this._virtualItems[newFirstIndex + i].obj;
                if (this._children[i] != obj)
                    this.setChildIndex(obj, i);
            }
            if (deltaSize != 0 || firstItemDeltaSize != 0)
                this._scrollPane.changeContentSizeOnScrolling(0, deltaSize, 0, firstItemDeltaSize);
            if (curIndex > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y) //最后一页没填满！
                return true;
            else
                return false;
        }
        handleScroll2(forceUpdate) {
            var pos = this._scrollPane.scrollingPosX;
            var max = pos + this._scrollPane.viewWidth;
            var end = pos == this._scrollPane.contentWidth; //这个标志表示当前需要滚动到最末，无论内容变化大小
            //寻找当前位置的第一条项目
            s_n = pos;
            var newFirstIndex = this.getIndexOnPos2(forceUpdate);
            pos = s_n;
            if (newFirstIndex == this._firstIndex && !forceUpdate)
                return false;
            var oldFirstIndex = this._firstIndex;
            this._firstIndex = newFirstIndex;
            var curIndex = newFirstIndex;
            var forward = oldFirstIndex > newFirstIndex;
            var childCount = this.numChildren;
            var lastIndex = oldFirstIndex + childCount - 1;
            var reuseIndex = forward ? lastIndex : oldFirstIndex;
            var curX = pos, curY = 0;
            var needRender;
            var deltaSize = 0;
            var firstItemDeltaSize = 0;
            var url = this.defaultItem;
            var ii, ii2;
            var i, j;
            var partSize = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
            this.itemInfoVer++;
            while (curIndex < this._realNumItems && (end || curX < max)) {
                ii = this._virtualItems[curIndex];
                if (ii.obj == null || forceUpdate) {
                    if (this.itemProvider) {
                        url = this.itemProvider(curIndex % this._numItems);
                        if (url == null)
                            url = this._defaultItem;
                    }
                    url = UIPackage.normalizeURL(url);
                    if (ii.obj && ii.obj.resourceURL != url) {
                        if (ii.obj instanceof GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                if (ii.obj == null) {
                    if (forward) {
                        for (j = reuseIndex; j >= oldFirstIndex; j--) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex--;
                                break;
                            }
                        }
                    }
                    else {
                        for (j = reuseIndex; j <= lastIndex; j++) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj && ii2.flag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex++;
                                break;
                            }
                        }
                    }
                    if (ii.obj) {
                        this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                    }
                    else {
                        ii.obj = this._pool.getObject(url);
                        if (forward)
                            this.addChildAt(ii.obj, curIndex - newFirstIndex);
                        else
                            this.addChild(ii.obj);
                    }
                    if (ii.obj instanceof GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else
                    needRender = forceUpdate;
                if (needRender) {
                    if (this._autoResizeItem && (this._layout == ListLayoutType.SingleRow || this._lineCount > 0))
                        ii.obj.setSize(ii.obj.width, partSize, true);
                    this.itemRenderer(curIndex % this._numItems, ii.obj);
                    if (curIndex % this._curLineItemCount == 0) {
                        deltaSize += Math.ceil(ii.obj.width) - ii.width;
                        if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                            //当内容向下滚动时，如果新出现的一个项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                            firstItemDeltaSize = Math.ceil(ii.obj.width) - ii.width;
                        }
                    }
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
                ii.flag = this.itemInfoVer;
                ii.obj.setPosition(curX, curY);
                if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
                    max += ii.width;
                curY += ii.height + this._lineGap;
                if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                    curY = 0;
                    curX += ii.width + this._columnGap;
                }
                curIndex++;
            }
            for (i = 0; i < childCount; i++) {
                ii = this._virtualItems[oldFirstIndex + i];
                if (ii.flag != this.itemInfoVer && ii.obj) {
                    if (ii.obj instanceof GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            childCount = this._children.length;
            for (i = 0; i < childCount; i++) {
                var obj = this._virtualItems[newFirstIndex + i].obj;
                if (this._children[i] != obj)
                    this.setChildIndex(obj, i);
            }
            if (deltaSize != 0 || firstItemDeltaSize != 0)
                this._scrollPane.changeContentSizeOnScrolling(deltaSize, 0, firstItemDeltaSize, 0);
            if (curIndex > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x) //最后一页没填满！
                return true;
            else
                return false;
        }
        handleScroll3(forceUpdate) {
            var pos = this._scrollPane.scrollingPosX;
            //寻找当前位置的第一条项目
            s_n = pos;
            var newFirstIndex = this.getIndexOnPos3(forceUpdate);
            pos = s_n;
            if (newFirstIndex == this._firstIndex && !forceUpdate)
                return;
            var oldFirstIndex = this._firstIndex;
            this._firstIndex = newFirstIndex;
            //分页模式不支持不等高，所以渲染满一页就好了
            var reuseIndex = oldFirstIndex;
            var virtualItemCount = this._virtualItems.length;
            var pageSize = this._curLineItemCount * this._curLineItemCount2;
            var startCol = newFirstIndex % this._curLineItemCount;
            var viewWidth = this.viewWidth;
            var page = Math.floor(newFirstIndex / pageSize);
            var startIndex = page * pageSize;
            var lastIndex = startIndex + pageSize * 2; //测试两页
            var needRender;
            var i;
            var ii, ii2;
            var col;
            var url = this._defaultItem;
            var partWidth = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
            var partHeight = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
            this.itemInfoVer++;
            //先标记这次要用到的项目
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this._realNumItems)
                    continue;
                col = i % this._curLineItemCount;
                if (i - startIndex < pageSize) {
                    if (col < startCol)
                        continue;
                }
                else {
                    if (col > startCol)
                        continue;
                }
                ii = this._virtualItems[i];
                ii.flag = this.itemInfoVer;
            }
            var lastObj = null;
            var insertIndex = 0;
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this._realNumItems)
                    continue;
                ii = this._virtualItems[i];
                if (ii.flag != this.itemInfoVer)
                    continue;
                if (ii.obj == null) {
                    //寻找看有没有可重用的
                    while (reuseIndex < virtualItemCount) {
                        ii2 = this._virtualItems[reuseIndex];
                        if (ii2.obj && ii2.flag != this.itemInfoVer) {
                            if (ii2.obj instanceof GButton)
                                ii2.selected = ii2.obj.selected;
                            ii.obj = ii2.obj;
                            ii2.obj = null;
                            break;
                        }
                        reuseIndex++;
                    }
                    if (insertIndex == -1)
                        insertIndex = this.getChildIndex(lastObj) + 1;
                    if (ii.obj == null) {
                        if (this.itemProvider) {
                            url = this.itemProvider(i % this._numItems);
                            if (url == null)
                                url = this._defaultItem;
                        }
                        ii.obj = this._pool.getObject(url);
                        this.addChildAt(ii.obj, insertIndex);
                    }
                    else {
                        insertIndex = this.setChildIndexBefore(ii.obj, insertIndex);
                    }
                    insertIndex++;
                    if (ii.obj instanceof GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else {
                    needRender = forceUpdate;
                    insertIndex = -1;
                    lastObj = ii.obj;
                }
                if (needRender) {
                    if (this._autoResizeItem) {
                        if (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount)
                            ii.obj.setSize(partWidth, partHeight, true);
                        else if (this._curLineItemCount == this._columnCount)
                            ii.obj.setSize(partWidth, ii.obj.height, true);
                        else if (this._curLineItemCount2 == this._lineCount)
                            ii.obj.setSize(ii.obj.width, partHeight, true);
                    }
                    this.itemRenderer(i % this._numItems, ii.obj);
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
            }
            //排列item
            var borderX = (startIndex / pageSize) * viewWidth;
            var xx = borderX;
            var yy = 0;
            var lineHeight = 0;
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this._realNumItems)
                    continue;
                ii = this._virtualItems[i];
                if (ii.flag == this.itemInfoVer)
                    ii.obj.setPosition(xx, yy);
                if (ii.height > lineHeight)
                    lineHeight = ii.height;
                if (i % this._curLineItemCount == this._curLineItemCount - 1) {
                    xx = borderX;
                    yy += lineHeight + this._lineGap;
                    lineHeight = 0;
                    if (i == startIndex + pageSize - 1) {
                        borderX += viewWidth;
                        xx = borderX;
                        yy = 0;
                    }
                }
                else
                    xx += ii.width + this._columnGap;
            }
            //释放未使用的
            for (i = reuseIndex; i < virtualItemCount; i++) {
                ii = this._virtualItems[i];
                if (ii.flag != this.itemInfoVer && ii.obj) {
                    if (ii.obj instanceof GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
        }
        handleArchOrder1() {
            if (this.childrenRenderOrder == ChildrenRenderOrder.Arch) {
                var mid = this._scrollPane.posY + this.viewHeight / 2;
                var minDist = Number.POSITIVE_INFINITY;
                var dist = 0;
                var apexIndex = 0;
                var cnt = this.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible) {
                        dist = Math.abs(mid - obj.y - obj.height / 2);
                        if (dist < minDist) {
                            minDist = dist;
                            apexIndex = i;
                        }
                    }
                }
                this.apexIndex = apexIndex;
            }
        }
        handleArchOrder2() {
            if (this.childrenRenderOrder == ChildrenRenderOrder.Arch) {
                var mid = this._scrollPane.posX + this.viewWidth / 2;
                var minDist = Number.POSITIVE_INFINITY;
                var dist = 0;
                var apexIndex = 0;
                var cnt = this.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible) {
                        dist = Math.abs(mid - obj.x - obj.width / 2);
                        if (dist < minDist) {
                            minDist = dist;
                            apexIndex = i;
                        }
                    }
                }
                this.apexIndex = apexIndex;
            }
        }
        handleAlign(contentWidth, contentHeight) {
            var newOffsetX = 0;
            var newOffsetY = 0;
            if (contentHeight < this.viewHeight) {
                if (this._valign == "middle")
                    newOffsetY = Math.floor((this.viewHeight - contentHeight) / 2);
                else if (this._valign == "bottom")
                    newOffsetY = this.viewHeight - contentHeight;
            }
            if (contentWidth < this.viewWidth) {
                if (this._align == "center")
                    newOffsetX = Math.floor((this.viewWidth - contentWidth) / 2);
                else if (this._align == "right")
                    newOffsetX = this.viewWidth - contentWidth;
            }
            if (newOffsetX != this._alignOffset.x || newOffsetY != this._alignOffset.y) {
                this._alignOffset.set(newOffsetX, newOffsetY);
                if (this._scrollPane)
                    this._scrollPane.adjustMaskContainer();
                else
                    this._container.setPosition(this._margin.left + this._alignOffset.x, this._margin.top + this._alignOffset.y);
            }
        }
        updateBounds() {
            if (this._virtual)
                return;
            var i;
            var child;
            var curX = 0;
            var curY = 0;
            var maxWidth = 0;
            var maxHeight = 0;
            var cw, ch;
            var j = 0;
            var page = 0;
            var k = 0;
            var cnt = this._children.length;
            var viewWidth = this.viewWidth;
            var viewHeight = this.viewHeight;
            var lineSize = 0;
            var lineStart = 0;
            var ratio;
            if (this._layout == ListLayoutType.SingleColumn) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curY != 0)
                        curY += this._lineGap;
                    child.y = curY;
                    if (this._autoResizeItem)
                        child.setSize(viewWidth, child.height, true);
                    curY += Math.ceil(child.height);
                    if (child.width > maxWidth)
                        maxWidth = child.width;
                }
                ch = curY;
                if (ch <= viewHeight && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) {
                    viewWidth += this._scrollPane.vtScrollBar.width;
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        child.setSize(viewWidth, child.height, true);
                        if (child.width > maxWidth)
                            maxWidth = child.width;
                    }
                }
                cw = Math.ceil(maxWidth);
            }
            else if (this._layout == ListLayoutType.SingleRow) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curX != 0)
                        curX += this._columnGap;
                    child.x = curX;
                    if (this._autoResizeItem)
                        child.setSize(child.width, viewHeight, true);
                    curX += Math.ceil(child.width);
                    if (child.height > maxHeight)
                        maxHeight = child.height;
                }
                cw = curX;
                if (cw <= viewWidth && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) {
                    viewHeight += this._scrollPane.hzScrollBar.height;
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        child.setSize(child.width, viewHeight, true);
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                    }
                }
                ch = Math.ceil(maxHeight);
            }
            else if (this._layout == ListLayoutType.FlowHorizontal) {
                if (this._autoResizeItem && this._columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this._columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setPosition(curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), child.height, true);
                                    curX += Math.ceil(child.width) + this._columnGap;
                                }
                                else {
                                    child.setSize(viewWidth - curX, child.height, true);
                                }
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            //new line
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = viewWidth;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this._columnGap;
                        if (this._columnCount != 0 && j >= this._columnCount
                            || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            //new line
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                        }
                        child.setPosition(curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = Math.ceil(maxWidth);
                }
            }
            else if (this._layout == ListLayoutType.FlowVertical) {
                if (this._autoResizeItem && this._lineCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceHeight;
                        j++;
                        if (j == this._lineCount || i == cnt - 1) {
                            ratio = (viewHeight - lineSize - (j - 1) * this._lineGap) / lineSize;
                            curY = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setPosition(curX, curY);
                                if (j < i) {
                                    child.setSize(child.width, child.sourceHeight + Math.round(child.sourceHeight * ratio), true);
                                    curY += Math.ceil(child.height) + this._lineGap;
                                }
                                else {
                                    child.setSize(child.width, viewHeight - curY, true);
                                }
                                if (child.width > maxWidth)
                                    maxWidth = child.width;
                            }
                            //new line
                            curX += Math.ceil(maxWidth) + this._columnGap;
                            maxWidth = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = viewHeight;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curY != 0)
                            curY += this._lineGap;
                        if (this._lineCount != 0 && j >= this._lineCount
                            || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                            curY = 0;
                            curX += Math.ceil(maxWidth) + this._columnGap;
                            maxWidth = 0;
                            j = 0;
                        }
                        child.setPosition(curX, curY);
                        curY += Math.ceil(child.height);
                        if (curY > maxHeight)
                            maxHeight = curY;
                        if (child.width > maxWidth)
                            maxWidth = child.width;
                        j++;
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = Math.ceil(maxHeight);
                }
            }
            else //pagination
             {
                var eachHeight;
                if (this._autoResizeItem && this._lineCount > 0)
                    eachHeight = Math.floor((viewHeight - (this._lineCount - 1) * this._lineGap) / this._lineCount);
                if (this._autoResizeItem && this._columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (j == 0 && (this._lineCount != 0 && k >= this._lineCount
                            || this._lineCount == 0 && curY + child.height > viewHeight)) {
                            //new page
                            page++;
                            curY = 0;
                            k = 0;
                        }
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this._columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setPosition(page * viewWidth + curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), this._lineCount > 0 ? eachHeight : child.height, true);
                                    curX += Math.ceil(child.width) + this._columnGap;
                                }
                                else {
                                    child.setSize(viewWidth - curX, this._lineCount > 0 ? eachHeight : child.height, true);
                                }
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            //new line
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                            k++;
                        }
                    }
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this._columnGap;
                        if (this._autoResizeItem && this._lineCount > 0)
                            child.setSize(child.width, eachHeight, true);
                        if (this._columnCount != 0 && j >= this._columnCount
                            || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            //new line
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            k++;
                            if (this._lineCount != 0 && k >= this._lineCount
                                || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) //new page
                             {
                                page++;
                                curY = 0;
                                k = 0;
                            }
                        }
                        child.setPosition(page * viewWidth + curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                }
                ch = page > 0 ? viewHeight : curY + Math.ceil(maxHeight);
                cw = (page + 1) * viewWidth;
            }
            this.handleAlign(cw, ch);
            this.setBounds(0, 0, cw, ch);
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 5);
            var i1;
            this._layout = buffer.readByte();
            this._selectionMode = buffer.readByte();
            i1 = buffer.readByte();
            this._align = i1 == 0 ? "left" : (i1 == 1 ? "center" : "right");
            i1 = buffer.readByte();
            this._valign = i1 == 0 ? "top" : (i1 == 1 ? "middle" : "bottom");
            this._lineGap = buffer.readShort();
            this._columnGap = buffer.readShort();
            this._lineCount = buffer.readShort();
            this._columnCount = buffer.readShort();
            this._autoResizeItem = buffer.readBool();
            this._childrenRenderOrder = buffer.readByte();
            this._apexIndex = buffer.readShort();
            if (buffer.readBool()) {
                this._margin.top = buffer.readInt();
                this._margin.bottom = buffer.readInt();
                this._margin.left = buffer.readInt();
                this._margin.right = buffer.readInt();
            }
            var overflow = buffer.readByte();
            if (overflow == OverflowType.Scroll) {
                var savedPos = buffer.pos;
                buffer.seek(beginPos, 7);
                this.setupScroll(buffer);
                buffer.pos = savedPos;
            }
            else
                this.setupOverflow(overflow);
            if (buffer.readBool()) //clipSoftness
                buffer.skip(8);
            if (buffer.version >= 2) {
                this.scrollItemToViewOnClick = buffer.readBool();
                this.foldInvisibleItems = buffer.readBool();
            }
            buffer.seek(beginPos, 8);
            this._defaultItem = buffer.readS();
            this.readItems(buffer);
        }
        readItems(buffer) {
            var cnt;
            var i;
            var nextPos;
            var str;
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                str = buffer.readS();
                if (str == null) {
                    str = this.defaultItem;
                    if (!str) {
                        buffer.pos = nextPos;
                        continue;
                    }
                }
                var obj = this.getFromPool(str);
                if (obj) {
                    this.addChild(obj);
                    this.setupItem(buffer, obj);
                }
                buffer.pos = nextPos;
            }
        }
        setupItem(buffer, obj) {
            var str;
            str = buffer.readS();
            if (str != null)
                obj.text = str;
            str = buffer.readS();
            if (str != null && (obj instanceof GButton))
                obj.selectedTitle = str;
            str = buffer.readS();
            if (str != null)
                obj.icon = str;
            str = buffer.readS();
            if (str != null && (obj instanceof GButton))
                obj.selectedIcon = str;
            str = buffer.readS();
            if (str != null)
                obj.name = str;
            var cnt;
            var i;
            if (obj instanceof GComponent) {
                cnt = buffer.readShort();
                for (i = 0; i < cnt; i++) {
                    var cc = obj.getController(buffer.readS());
                    str = buffer.readS();
                    if (cc)
                        cc.selectedPageId = str;
                }
                if (buffer.version >= 2) {
                    cnt = buffer.readShort();
                    for (i = 0; i < cnt; i++) {
                        var target = buffer.readS();
                        var propertyId = buffer.readShort();
                        var value = buffer.readS();
                        var obj2 = obj.getChildByPath(target);
                        if (obj2)
                            obj2.setProp(propertyId, value);
                    }
                }
            }
        }
        setup_afterAdd(buffer, beginPos) {
            super.setup_afterAdd(buffer, beginPos);
            buffer.seek(beginPos, 6);
            var i = buffer.readShort();
            if (i != -1)
                this._selectionController = this._parent.getControllerAt(i);
        }
    }
    var s_n = 0;

    class GTreeNode {
        constructor(isFolder, resURL, addIndent) {
            this._expanded = false;
            this._level = 0;
            this._indentLevel = 0;
            this._isFolder = isFolder;
            if (resURL)
                this._resURL = resURL;
            if (addIndent)
                this._addIndent = addIndent;
            this._children = [];
        }
        set expanded(value) {
            if (this._expanded != value) {
                this._expanded = value;
                if (this._tree && this.isFolder) {
                    if (this._expanded)
                        this._tree._afterExpanded(this);
                    else
                        this._tree._afterCollapsed(this);
                }
                if (this._cell) {
                    let cc = this._cell.getController("expanded");
                    if (cc) {
                        cc.selectedIndex = this.expanded ? 1 : 0;
                    }
                }
            }
        }
        get expanded() {
            return this._expanded;
        }
        get isFolder() {
            return this._isFolder || this._children.length > 0;
        }
        set isFolder(value) {
            if (this._isFolder != value) {
                this._isFolder = value;
                if (this._leafController)
                    this._leafController.selectedIndex = this.isFolder ? 0 : 1;
            }
        }
        get parent() {
            return this._parent;
        }
        get text() {
            if (this._cell)
                return this._cell.text;
            else
                return null;
        }
        set text(value) {
            if (this._cell)
                this._cell.text = value;
        }
        get icon() {
            if (this._cell)
                return this._cell.icon;
            else
                return null;
        }
        set icon(value) {
            if (this._cell)
                this._cell.icon = value;
        }
        get cell() {
            return this._cell;
        }
        set cell(value) {
            if (this._cell) {
                this._cell._treeNode = null;
                let cc = this._cell.getController("expanded");
                if (cc)
                    cc.off("status_changed", this.__expandedStateChanged, this);
                let btn = this._cell.getChild("expandButton");
                if (btn)
                    btn.off("click", this.__clickExpandButton, this);
                this._cell.off("pointer_down", this.__cellMouseDown, this);
            }
            this._cell = value;
            this._cellFromPool = false;
            if (this._cell) {
                this._cell._treeNode = this;
                this._indentObj = this._cell.getChild("indent");
                if (this._tree && this._indentObj)
                    this._indentObj.width = Math.max(this._indentLevel - 1, 0) * this._tree.indent;
                let cc = this._cell.getController("expanded");
                if (cc) {
                    cc.on("status_changed", this.__expandedStateChanged, this);
                    cc.selectedIndex = this.expanded ? 1 : 0;
                }
                let btn = this._cell.getChild("expandButton");
                if (btn)
                    btn.on("click", this.__clickExpandButton, this);
                this._leafController = this._cell.getController("leaf");
                if (this._leafController)
                    this._leafController.selectedIndex = this.isFolder ? 0 : 1;
                this._cell.on("pointer_down", this.__cellMouseDown, this);
            }
        }
        createCell() {
            if (this._cell)
                return;
            var child = this._tree.getFromPool(this._resURL ? this._resURL : this._tree.defaultItem);
            if (!child)
                throw new Error("cannot create tree node object.");
            this.cell = child;
            this._cellFromPool = true;
        }
        get level() {
            return this._level;
        }
        addChild(child) {
            this.addChildAt(child, this._children.length);
            return child;
        }
        addChildAt(child, index) {
            if (!child)
                throw new Error("child is null");
            var numChildren = this._children.length;
            if (index >= 0 && index <= numChildren) {
                if (child._parent == this) {
                    this.setChildIndex(child, index);
                }
                else {
                    if (child._parent)
                        child._parent.removeChild(child);
                    if (index == numChildren)
                        this._children.push(child);
                    else
                        this._children.splice(index, 0, child);
                    if (this.isFolder && this._leafController)
                        this._leafController.selectedIndex = 0;
                    child._parent = this;
                    child._level = this._level + 1;
                    child._indentLevel = this._indentLevel + 1 + (child._addIndent != null ? child._addIndent : 0);
                    child._setTree(this._tree);
                    if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded)
                        this._tree._afterInserted(child);
                }
                return child;
            }
            else {
                throw new RangeError("Invalid child index");
            }
        }
        removeChild(child) {
            var childIndex = this._children.indexOf(child);
            if (childIndex != -1) {
                this.removeChildAt(childIndex);
            }
            return child;
        }
        removeChildAt(index) {
            if (index >= 0 && index < this.numChildren) {
                var child = this._children[index];
                this._children.splice(index, 1);
                if (!this.isFolder && this._leafController)
                    this._leafController.selectedIndex = 1;
                child._parent = null;
                if (this._tree) {
                    child._setTree(null);
                    this._tree._afterRemoved(child);
                }
                return child;
            }
            else {
                throw "Invalid child index";
            }
        }
        removeChildren(beginIndex, endIndex) {
            beginIndex = beginIndex || 0;
            if (endIndex == null)
                endIndex = -1;
            if (endIndex < 0 || endIndex >= this.numChildren)
                endIndex = this.numChildren - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildAt(beginIndex);
        }
        getChildAt(index) {
            if (index >= 0 && index < this.numChildren)
                return this._children[index];
            else
                throw "Invalid child index";
        }
        getChildIndex(child) {
            return this._children.indexOf(child);
        }
        getPrevSibling() {
            if (this._parent == null)
                return null;
            var i = this._parent._children.indexOf(this);
            if (i <= 0)
                return null;
            return this._parent._children[i - 1];
        }
        getNextSibling() {
            if (this._parent == null)
                return null;
            var i = this._parent._children.indexOf(this);
            if (i < 0 || i >= this._parent._children.length - 1)
                return null;
            return this._parent._children[i + 1];
        }
        setChildIndex(child, index) {
            var oldIndex = this._children.indexOf(child);
            if (oldIndex == -1)
                throw "Not a child of this container";
            var cnt = this._children.length;
            if (index < 0)
                index = 0;
            else if (index > cnt)
                index = cnt;
            if (oldIndex == index)
                return;
            this._children.splice(oldIndex, 1);
            this._children.splice(index, 0, child);
            if (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded)
                this._tree._afterMoved(child);
        }
        swapChildren(child1, child2) {
            var index1 = this._children.indexOf(child1);
            var index2 = this._children.indexOf(child2);
            if (index1 == -1 || index2 == -1)
                throw "Not a child of this container";
            this.swapChildrenAt(index1, index2);
        }
        swapChildrenAt(index1, index2) {
            var child1 = this._children[index1];
            var child2 = this._children[index2];
            this.setChildIndex(child1, index2);
            this.setChildIndex(child2, index1);
        }
        get numChildren() {
            return this._children.length;
        }
        getChildren() {
            return this._children;
        }
        expandToRoot() {
            var p = this;
            while (p) {
                p.expanded = true;
                p = p.parent;
            }
        }
        get tree() {
            return this._tree;
        }
        _setTree(value) {
            this._tree = value;
            if (this._tree && this._indentObj)
                this._indentObj.width = Math.max(this._indentLevel - 1, 0) * this._tree.indent;
            if (this._tree && this._tree.treeNodeWillExpand && this._expanded)
                this._tree.treeNodeWillExpand(this, true);
            var cnt = this._children.length;
            for (var i = 0; i < cnt; i++) {
                var node = this._children[i];
                node._level = this._level + 1;
                node._indentLevel = this._indentLevel + 1 + (node._addIndent != null ? node._addIndent : 0);
                node._setTree(value);
            }
        }
        __expandedStateChanged(evt) {
            let cc = evt.target;
            this.expanded = cc.selectedIndex == 1;
        }
        __cellMouseDown(evt) {
            if (this._tree && this.isFolder)
                this._tree._expandedStatusInEvt = this._expanded;
        }
        __clickExpandButton(evt) {
            //dont set selection if click on the expand button
            // evt.stopPropagation();
        }
    }

    var s_list = new Array();
    class GTree extends GList {
        constructor(name) {
            super(name);
            this._indent = 15;
            this._rootNode = new GTreeNode(true);
            this._rootNode._setTree(this);
            this._rootNode.expanded = true;
        }
        get rootNode() {
            return this._rootNode;
        }
        get indent() {
            return this._indent;
        }
        set indent(value) {
            this._indent = value;
        }
        get clickToExpand() {
            return this._clickToExpand;
        }
        set clickToExpand(value) {
            this._clickToExpand = value;
        }
        getSelectedNode() {
            if (this.selectedIndex != -1)
                return this.getChildAt(this.selectedIndex)._treeNode;
            else
                return null;
        }
        getSelectedNodes(result) {
            if (!result)
                result = new Array();
            s_list.length = 0;
            super.getSelection(s_list);
            var cnt = s_list.length;
            var ret = new Array();
            for (var i = 0; i < cnt; i++) {
                var node = this.getChildAt(s_list[i])._treeNode;
                ret.push(node);
            }
            return ret;
        }
        selectNode(node, scrollItToView) {
            var parentNode = node.parent;
            while (parentNode && parentNode != this._rootNode) {
                parentNode.expanded = true;
                parentNode = parentNode.parent;
            }
            if (!node.cell)
                return;
            this.addSelection(this.getChildIndex(node.cell), scrollItToView);
        }
        unselectNode(node) {
            if (!node.cell)
                return;
            this.removeSelection(this.getChildIndex(node.cell));
        }
        expandAll(folderNode) {
            if (!folderNode)
                folderNode = this._rootNode;
            folderNode.expanded = true;
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node = folderNode.getChildAt(i);
                if (node.isFolder)
                    this.expandAll(node);
            }
        }
        collapseAll(folderNode) {
            if (!folderNode)
                folderNode = this._rootNode;
            if (folderNode != this._rootNode)
                folderNode.expanded = false;
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node = folderNode.getChildAt(i);
                if (node.isFolder)
                    this.collapseAll(node);
            }
        }
        createCell(node) {
            node.createCell();
            if (this.treeNodeRender)
                this.treeNodeRender(node, node.cell);
        }
        /** @internal */
        _afterInserted(node) {
            if (!node.cell)
                this.createCell(node);
            var index = this.getInsertIndexForNode(node);
            this.addChildAt(node.cell, index);
            if (this.treeNodeRender)
                this.treeNodeRender(node, node.cell);
            if (node.isFolder && node.expanded)
                this.checkChildren(node, index);
        }
        getInsertIndexForNode(node) {
            var prevNode = node.getPrevSibling();
            if (prevNode == null)
                prevNode = node.parent;
            var insertIndex = this.getChildIndex(prevNode.cell) + 1;
            var myLevel = node.level;
            var cnt = this.numChildren;
            for (var i = insertIndex; i < cnt; i++) {
                var testNode = this.getChildAt(i)._treeNode;
                if (testNode.level <= myLevel)
                    break;
                insertIndex++;
            }
            return insertIndex;
        }
        /** @internal */
        _afterRemoved(node) {
            this.removeNode(node);
        }
        /** @internal */
        _afterExpanded(node) {
            if (node == this._rootNode) {
                this.checkChildren(this._rootNode, 0);
                return;
            }
            if (this.treeNodeWillExpand)
                this.treeNodeWillExpand(node, true);
            if (node.onExpanded)
                node.onExpanded(true);
            if (node.cell == null)
                return;
            if (this.treeNodeRender)
                this.treeNodeRender(node, node.cell);
            if (node.cell.parent)
                this.checkChildren(node, this.getChildIndex(node.cell));
        }
        /** @internal */
        _afterCollapsed(node) {
            if (node == this._rootNode) {
                this.checkChildren(this._rootNode, 0);
                return;
            }
            if (this.treeNodeWillExpand)
                this.treeNodeWillExpand(node, false);
            if (node.onExpanded)
                node.onExpanded(false);
            if (node.cell == null)
                return;
            if (this.treeNodeRender)
                this.treeNodeRender(node, node.cell);
            if (node.cell.parent)
                this.hideFolderNode(node);
        }
        /** @internal */
        _afterMoved(node) {
            var startIndex = this.getChildIndex(node.cell);
            var endIndex;
            if (node.isFolder)
                endIndex = this.getFolderEndIndex(startIndex, node.level);
            else
                endIndex = startIndex + 1;
            var insertIndex = this.getInsertIndexForNode(node);
            var i;
            var cnt = endIndex - startIndex;
            var obj;
            if (insertIndex < startIndex) {
                for (i = 0; i < cnt; i++) {
                    obj = this.getChildAt(startIndex + i);
                    this.setChildIndex(obj, insertIndex + i);
                }
            }
            else {
                for (i = 0; i < cnt; i++) {
                    obj = this.getChildAt(startIndex);
                    this.setChildIndex(obj, insertIndex);
                }
            }
        }
        getFolderEndIndex(startIndex, level) {
            var cnt = this.numChildren;
            for (var i = startIndex + 1; i < cnt; i++) {
                var node = this.getChildAt(i)._treeNode;
                if (node.level <= level)
                    return i;
            }
            return cnt;
        }
        checkChildren(folderNode, index) {
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                index++;
                var node = folderNode.getChildAt(i);
                if (node.cell == null)
                    this.createCell(node);
                if (!node.cell.parent)
                    this.addChildAt(node.cell, index);
                if (node.isFolder && node.expanded)
                    index = this.checkChildren(node, index);
            }
            return index;
        }
        hideFolderNode(folderNode) {
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node = folderNode.getChildAt(i);
                if (node.cell)
                    this.removeChild(node.cell);
                if (node.isFolder && node.expanded)
                    this.hideFolderNode(node);
            }
        }
        removeNode(node) {
            if (node.cell) {
                if (node.cell.parent)
                    this.removeChild(node.cell);
                if (node._cellFromPool) {
                    this.returnToPool(node.cell);
                    node.cell = null;
                }
            }
            if (node.isFolder) {
                var cnt = node.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var node2 = node.getChildAt(i);
                    this.removeNode(node2);
                }
            }
        }
        dispatchItemEvent(item) {
            if (this._clickToExpand != 0) {
                var node = item._treeNode;
                if (node && node.isFolder && this._expandedStatusInEvt == node.expanded) {
                    // if (this._clickToExpand == 2) {
                    //     if (evt.input.clickCount == 2)
                    //         node.expanded = !node.expanded;
                    // }
                    // else
                    node.expanded = !node.expanded;
                }
            }
            super.dispatchItemEvent(item);
        }
        setup_beforeAdd(buffer, beginPos) {
            super.setup_beforeAdd(buffer, beginPos);
            buffer.seek(beginPos, 9);
            this._indent = buffer.readInt();
            this._clickToExpand = buffer.readByte();
        }
        readItems(buffer) {
            var cnt;
            var i;
            var nextPos;
            var str;
            var isFolder;
            var lastNode;
            var level;
            var prevLevel = 0;
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.pos;
                str = buffer.readS();
                if (str == null) {
                    str = this.defaultItem;
                    if (!str) {
                        buffer.pos = nextPos;
                        continue;
                    }
                }
                isFolder = buffer.readBool();
                level = buffer.readByte();
                var node = new GTreeNode(isFolder, str);
                node.expanded = true;
                if (i == 0)
                    this._rootNode.addChild(node);
                else {
                    if (level > prevLevel)
                        lastNode.addChild(node);
                    else if (level < prevLevel) {
                        for (var j = level; j <= prevLevel; j++)
                            lastNode = lastNode.parent;
                        lastNode.addChild(node);
                    }
                    else
                        lastNode.parent.addChild(node);
                }
                lastNode = node;
                prevLevel = level;
                this.setupItem(buffer, node.cell);
                buffer.pos = nextPos;
            }
        }
    }

    class DOTAAbilityImage extends UIElement {
        constructor() {
            super();
        }
        init() {
            this.nativePanel = $.CreatePanel("DOTAAbilityImage", $('#HiddenRoot'), this.$owner.name);
        }
        get abilityname() {
            return this._abilityname;
        }
        set abilityname(value) {
            if (this._abilityname != value) {
                this._abilityname = value;
                this.nativePanel.abilityname = value;
            }
        }
        get contextEntityIndex() {
            return this._contextEntityIndex;
        }
        set contextEntityIndex(value) {
            if (this._contextEntityIndex != value) {
                this._contextEntityIndex = value;
                this.nativePanel.contextEntityIndex = value;
            }
        }
    }

    class GDOTAAbilityImage extends GComponent {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new DOTAAbilityImage();
            this._element.$owner = this;
            this._element.init();
        }
        get element() {
            return this._element;
        }
    }

    class DOTAAvatarImage extends UIElement {
        constructor() {
            super();
        }
        init() {
            this.nativePanel = $.CreatePanel("DOTAAvatarImage", $('#HiddenRoot'), this.$owner.name);
        }
        SetAccountID(accountid) {
            this.nativePanel.SetAccountID(accountid);
        }
        get steamid() {
            return this._steamid;
        }
        set steamid(value) {
            if (this._steamid != value) {
                this._steamid = value;
                this.nativePanel.steamid = value;
            }
        }
        get accountid() {
            return this._accountid;
        }
        set accountid(value) {
            if (this._accountid != value) {
                this._accountid = value;
                this.nativePanel.accountid = value;
            }
        }
    }

    class GDOTAAvatarImage extends GComponent {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new DOTAAvatarImage();
            this._element.$owner = this;
            this._element.init();
        }
        get element() {
            return this._element;
        }
    }

    class DOTAItemImage extends UIElement {
        constructor() {
            super();
        }
        init() {
            this.nativePanel = $.CreatePanel("DOTAItemImage", $('#HiddenRoot'), this.$owner.name);
        }
        get itemname() {
            return this._itemname;
        }
        set itemname(value) {
            if (this._itemname != value) {
                this._itemname = value;
                this.nativePanel.itemname = value;
            }
        }
        get contextEntityIndex() {
            return this._contextEntityIndex;
        }
        set contextEntityIndex(value) {
            if (this._contextEntityIndex != value) {
                this._contextEntityIndex = value;
                this.nativePanel.contextEntityIndex = value;
            }
        }
    }

    class GDOTAItemImage extends GComponent {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new DOTAItemImage();
            this._element.$owner = this;
            this._element.init();
        }
        get element() {
            return this._element;
        }
    }

    class DOTAHeroImage extends UIElement {
        constructor() {
            super();
        }
        init() {
            this.nativePanel = $.CreatePanel("DOTAHeroImage", $('#HiddenRoot'), this.$owner.name);
        }
        get heroid() {
            return this._heroid;
        }
        set heroid(value) {
            if (this._heroid != value) {
                this._heroid = value;
                this.nativePanel.heroid = value;
            }
        }
        get heroname() {
            return this._heroname;
        }
        set heroname(value) {
            if (this._heroname != value) {
                this._heroname = value;
                this.nativePanel.heroname = value;
            }
        }
        get heroimagestyle() {
            return this._heroimagestyle;
        }
        set heroimagestyle(value) {
            if (this._heroimagestyle != value) {
                this._heroimagestyle = value;
                this.nativePanel.heroimagestyle = value;
            }
        }
    }

    class GDOTAHeroImage extends GComponent {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new DOTAHeroImage();
            this._element.$owner = this;
            this._element.init();
        }
        get element() {
            return this._element;
        }
    }

    class DOTAUserName extends UIElement {
        constructor() {
            super();
        }
        init() {
            this.nativePanel = $.CreatePanel("DOTAUserName", $('#HiddenRoot'), this.$owner.name);
        }
        get steamid() {
            return this._steamid;
        }
        set steamid(value) {
            if (this._steamid != value) {
                this._steamid = value;
                this.nativePanel.steamid = value;
            }
        }
        get accountid() {
            return this._accountid;
        }
        set accountid(value) {
            if (this._accountid != value) {
                this._accountid = value;
                this.nativePanel.accountid = value;
            }
        }
    }

    class GDOTAUserName extends GComponent {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new DOTAUserName();
            this._element.$owner = this;
            this._element.init();
        }
        get element() {
            return this._element;
        }
    }

    class DOTAScenePanel extends UIElement {
        constructor() {
            super();
            //model
            this.light = "global_light";
            this.antialias = true;
            this.renderdeferred = false;
            //effect
            this.startActive = true;
            this.cameraOrigin = "0 0 100";
            this.lookAt = "0 0 0";
            this.fov = 60;
            this.squarePixels = true;
            this.scenePanel = undefined;
            this.effectPanel = undefined;
        }
        /**
         *
         * @param effectPath
         * @param properties
         * {
         *      particleName : this.particleName,
                startActive : this.startActive,
                cameraOrigin : this.cameraOrigin,
                lookAt : this.lookAt,
                fov : this.fov,
                squarePixels : this.squarePixels,
                particleonly : true
         * }
         */
        SetEffectWithParams(effectPath, squarePixels, height, fov) {
            if (this.effectPanel != undefined) {
                this.effectPanel.DeleteAsync(1);
            }
            this.effectPanel = $.CreatePanelWithProperties('DOTAParticleScenePanel', this.nativePanel, this.$owner.name, {
                particleName: effectPath,
                startActive: true,
                cameraOrigin: "0 0 " + ((height != undefined) ? height : this.width),
                lookAt: "0 0 0",
                fov: ((fov != undefined) ? fov : 60),
                squarePixels: squarePixels,
                camera: "camera_1",
                particleonly: true
            });
            this.effectPanel.style.width = "100%";
            this.effectPanel.style.height = "100%";
            // this.effectPanel.style.overflow = "noclip";
            // this.effectPanel.style.marginLeft = -this.width / 2 + "px";
            // this.effectPanel.style.marginTop = -this.height / 2 + "px";
        }
        /**
         *
         * @param unitName
         * @param properties
         * {
                light : this.light,
                antialias : this.antialias,
                renderdeferred : this.renderdeferred,
                camera : this.camera,
                particleonly : false,
                map : this.map,
                postProcessMaterial : this.postProcessMaterial,
                rotateonmousemove : this.rotateonmousemove,
                yawmin : this.yawmin,
                yawmax : this.yawmax,
                pitchmin : this.pitchmin,
                pitchmax : this.pitchmax,
                deferredalpha : this.deferredalpha,
                unit : this.unit
            }
         */
        setModelWithParams(unitName) {
            if (this.scenePanel != undefined) {
                this.scenePanel.DeleteAsync(1);
            }
            this.scenePanel = $.CreatePanelWithProperties('DOTAScenePanel', this.nativePanel, this.$owner.name, {
                light: this.light,
                antialias: this.antialias,
                renderdeferred: this.renderdeferred,
                camera: "camera_1",
                particleonly: false,
                // map : this.map,
                // postProcessMaterial : this.postProcessMaterial,
                // rotateonmousemove : this.rotateonmousemove,
                // yawmin : this.yawmin,
                // yawmax : this.yawmax, 
                // pitchmin : this.pitchmin, 
                // pitchmax : this.pitchmax,
                // deferredalpha : this.deferredalpha,
                unit: unitName
            });
            this.scenePanel.style.width = "100%";
            this.scenePanel.style.height = "100%";
            // this.scenePanel.style.marginLeft = -this.width / 2 + "px";
            // this.scenePanel.style.marginTop = -this.height / 2 + "px";
        }
        setSceneWithParams(params) {
            if (this.scenePanel != undefined) {
                this.scenePanel.DeleteAsync(1);
            }
            this.scenePanel = $.CreatePanelWithProperties('DOTAScenePanel', this.nativePanel, this.$owner.name, params);
            this.scenePanel.style.width = "100%";
            this.scenePanel.style.height = "100%";
        }
        init() {
            this.nativePanel = $.CreatePanel("Panel", $('#HiddenRoot'), this.$owner.name);
        }
        FireEntityInput(entityID, inputName, value) {
            this.scenePanel.FireEntityInput(entityID, inputName, value);
        }
        PlayEntitySoundEvent(arg1, arg2) {
            return this.scenePanel.PlayEntitySoundEvent(arg1, arg2);
        }
        SetUnit(unitName, environment, drawBackground) {
            this.scenePanel.SetUnit(unitName, environment, drawBackground);
        }
        GetPanoramaSurfacePanel() {
            return this.scenePanel.GetPanoramaSurfacePanel();
        }
        SetRotateParams(yawMin, yawMax, pitchMin, pitchMax) {
            this.scenePanel.SetRotateParams(yawMin, yawMax, pitchMin, pitchMax);
        }
        SpawnHeroInScenePanelByPlayerSlot(unknown1, unknown2, unknown3) {
            return this.scenePanel.SpawnHeroInScenePanelByPlayerSlot(unknown1, unknown2, unknown3);
        }
        SpawnHeroInScenePanelByHeroId(unknown1, unknown2, unknown3) {
            return this.scenePanel.SpawnHeroInScenePanelByHeroId(unknown1, unknown2, unknown3);
        }
        SetScenePanelToPlayerHero(heroName, player) {
            return this.scenePanel.SetScenePanelToPlayerHero(heroName, player);
        }
        SetScenePanelToLocalHero(heroId) {
            return this.scenePanel.SetScenePanelToLocalHero(heroId);
        }
        SetPostProcessFade(value) {
            this.scenePanel.SetPostProcessFade(value);
        }
        /**
         * @example
         * scenePanel.SetCustomPostProcessMaterial("materials/dev/deferred_post_process_graphic_ui.vmat")
         */
        SetCustomPostProcessMaterial(material) {
            this.scenePanel.SetCustomPostProcessMaterial(material);
        }
        SpawnHeroInScenePanelByPlayerSlotWithFullBodyView(heroName, player) {
            return this.scenePanel.SpawnHeroInScenePanelByPlayerSlotWithFullBodyView(heroName, player);
        }
        LerpToCameraEntity(unknown1, unknown2) {
            this.scenePanel.LerpToCameraEntity(unknown1, unknown2);
        }
    }

    class GDOTAScenePanel extends GComponent {
        constructor(name) {
            super(name);
        }
        createElement() {
            this._element = new DOTAScenePanel();
            this._element.$owner = this;
            this._element.init();
        }
        get element() {
            return this._element;
        }
    }

    class UIObjectFactory {
        static setExtension(url, type) {
            if (url == null)
                throw new Error("Invaild url: " + url);
            var pi = UIPackage.getItemByURL(url);
            if (pi)
                pi.extensionType = type;
            UIObjectFactory.extensions[url] = type;
        }
        static setExtensionWithPkg(pkgName, resName, type) {
            var url = UIPackage.getItemRawURL(pkgName, resName);
            this.setExtension(url, type);
        }
        static setLoaderExtension(type) {
            UIObjectFactory.loaderType = type;
        }
        static resolveExtension(pi) {
            var extensionType = UIObjectFactory.extensions["ui://" + pi.owner.id + pi.id];
            if (!extensionType)
                extensionType = UIObjectFactory.extensions["ui://" + pi.owner.name + "/" + pi.name];
            if (extensionType)
                pi.extensionType = extensionType;
        }
        static checkDOTAType(name) {
            if (name == "DOTAAbilityImage") {
                return new GDOTAAbilityImage(name);
            }
            else if (name == "DOTAItemImage") {
                return new GDOTAItemImage(name);
            }
            else if (name == "DOTAHeroImage") {
                return new GDOTAHeroImage(name);
            }
            else if (name == "DOTAAvatarImage") {
                return new GDOTAAvatarImage(name);
            }
            else if (name == "DOTAEffect" || name == "DOTAModel") {
                return new GDOTAScenePanel(name);
            }
            else if (name == "DOTAUserName") {
                return new GDOTAUserName(name);
            }
            return null;
        }
        static getAspectRadio() {
            if (UIObjectFactory.screenRadio == 0) {
                UIObjectFactory.screenRadio = 1080 / Game.GetScreenHeight();
            }
            return UIObjectFactory.screenRadio;
        }
        static openURL(url) {
        }
        static newObject(type, userClass, name) {
            var obj;
            if (typeof type === 'number') {
                switch (type) {
                    case ObjectType.Image:
                        return new GImage(name);
                    case ObjectType.MovieClip:
                        return new GMovieClip(name);
                    case ObjectType.Component:
                        {
                            var dtp = UIObjectFactory.checkDOTAType(name);
                            if (dtp) {
                                return dtp;
                            }
                            return new GComponent(name);
                        }
                    case ObjectType.Text:
                        return new GTextField(name);
                    case ObjectType.RichText:
                        return new GRichTextField(name);
                    case ObjectType.InputText:
                        return new GTextInput(name);
                    case ObjectType.Group:
                        return new GGroup(name);
                    case ObjectType.List:
                        return new GList(name);
                    case ObjectType.Graph:
                        return new GGraph(name);
                    case ObjectType.Loader:
                        if (UIObjectFactory.loaderType)
                            return new UIObjectFactory.loaderType(name);
                        else
                            return new GLoader(name);
                    case ObjectType.Button:
                        return new GButton(name);
                    case ObjectType.Label:
                        return new GLabel(name);
                    case ObjectType.ProgressBar:
                        return new GProgressBar(name);
                    case ObjectType.Slider:
                        return new GSlider(name);
                    case ObjectType.ScrollBar:
                        return new GScrollBar(name);
                    case ObjectType.ComboBox:
                        return new GComboBox(name);
                    case ObjectType.Tree:
                        return new GTree(name);
                    case ObjectType.Loader3D:
                        return new GLoader3D(name);
                    default:
                        return null;
                }
            }
            else {
                if (type.type == PackageItemType.Component) {
                    if (userClass)
                        obj = new userClass();
                    else if (type.extensionType)
                        obj = new type.extensionType();
                    else
                        obj = UIObjectFactory.newObject(type.objectType, null, type.name);
                }
                else
                    obj = UIObjectFactory.newObject(type.objectType, null, type.name);
                if (obj)
                    obj.packageItem = type;
            }
            return obj;
        }
    }
    UIObjectFactory.extensions = {};
    UIObjectFactory.screenRadio = 0;
    $.UIObjectFactory = UIObjectFactory;

    const LUMA_R = 0.299;
    const LUMA_G = 0.587;
    const LUMA_B = 0.114;
    const IDENTITY_MATRIX = [
        1, 0, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 0, 0, 1, 0
    ];
    const LENGTH = IDENTITY_MATRIX.length;
    class ColorMatrix {
        constructor() {
            this.matrix = new Array(LENGTH);
            this.reset();
        }
        static create(p_brightness, p_contrast, p_saturation, p_hue) {
            var ret = new ColorMatrix();
            ret.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
            return ret;
        }
        static getMatrix(p_brightness, p_contrast, p_saturation, p_hue, result) {
            if (!result)
                result = new Array(ColorMatrix.length);
            let mat = helper;
            mat.reset();
            mat.adjustColor(p_brightness, p_contrast, p_saturation, p_hue);
            var l = LENGTH;
            for (var i = 0; i < l; i++) {
                result[i] = mat.matrix[i];
            }
            return result;
        }
        reset() {
            for (var i = 0; i < LENGTH; i++) {
                this.matrix[i] = IDENTITY_MATRIX[i];
            }
        }
        invert() {
            this.multiplyMatrix([-1, 0, 0, 0, 255,
                0, -1, 0, 0, 255,
                0, 0, -1, 0, 255,
                0, 0, 0, 1, 0]);
        }
        adjustColor(p_brightness, p_contrast, p_saturation, p_hue) {
            this.adjustBrightness(p_brightness);
            this.adjustContrast(p_contrast);
            this.adjustSaturation(p_saturation);
            this.adjustHue(p_hue);
        }
        adjustBrightness(p_val) {
            p_val = this.cleanValue(p_val, 1) * 255;
            this.multiplyMatrix([
                1, 0, 0, 0, p_val,
                0, 1, 0, 0, p_val,
                0, 0, 1, 0, p_val,
                0, 0, 0, 1, 0
            ]);
        }
        adjustContrast(p_val) {
            p_val = this.cleanValue(p_val, 1);
            var s = p_val + 1;
            var o = 128 * (1 - s);
            this.multiplyMatrix([
                s, 0, 0, 0, o,
                0, s, 0, 0, o,
                0, 0, s, 0, o,
                0, 0, 0, 1, 0
            ]);
        }
        adjustSaturation(p_val) {
            p_val = this.cleanValue(p_val, 1);
            p_val += 1;
            var invSat = 1 - p_val;
            var invLumR = invSat * LUMA_R;
            var invLumG = invSat * LUMA_G;
            var invLumB = invSat * LUMA_B;
            this.multiplyMatrix([
                (invLumR + p_val), invLumG, invLumB, 0, 0,
                invLumR, (invLumG + p_val), invLumB, 0, 0,
                invLumR, invLumG, (invLumB + p_val), 0, 0,
                0, 0, 0, 1, 0
            ]);
        }
        adjustHue(p_val) {
            p_val = this.cleanValue(p_val, 1);
            p_val *= Math.PI;
            var cos = Math.cos(p_val);
            var sin = Math.sin(p_val);
            this.multiplyMatrix([
                ((LUMA_R + (cos * (1 - LUMA_R))) + (sin * -(LUMA_R))), ((LUMA_G + (cos * -(LUMA_G))) + (sin * -(LUMA_G))), ((LUMA_B + (cos * -(LUMA_B))) + (sin * (1 - LUMA_B))), 0, 0,
                ((LUMA_R + (cos * -(LUMA_R))) + (sin * 0.143)), ((LUMA_G + (cos * (1 - LUMA_G))) + (sin * 0.14)), ((LUMA_B + (cos * -(LUMA_B))) + (sin * -0.283)), 0, 0,
                ((LUMA_R + (cos * -(LUMA_R))) + (sin * -((1 - LUMA_R)))), ((LUMA_G + (cos * -(LUMA_G))) + (sin * LUMA_G)), ((LUMA_B + (cos * (1 - LUMA_B))) + (sin * LUMA_B)), 0, 0,
                0, 0, 0, 1, 0
            ]);
        }
        concat(p_matrix) {
            if (p_matrix.length != LENGTH) {
                return;
            }
            this.multiplyMatrix(p_matrix);
        }
        clone() {
            var result = new ColorMatrix();
            result.copyMatrix(this.matrix);
            return result;
        }
        copyMatrix(p_matrix) {
            var l = LENGTH;
            for (var i = 0; i < l; i++) {
                this.matrix[i] = p_matrix[i];
            }
        }
        multiplyMatrix(p_matrix) {
            var col = [];
            var i = 0;
            for (var y = 0; y < 4; ++y) {
                for (var x = 0; x < 5; ++x) {
                    col[i + x] = p_matrix[i] * this.matrix[x] +
                        p_matrix[i + 1] * this.matrix[x + 5] +
                        p_matrix[i + 2] * this.matrix[x + 10] +
                        p_matrix[i + 3] * this.matrix[x + 15] +
                        (x == 4 ? p_matrix[i + 4] : 0);
                }
                i += 5;
            }
            this.copyMatrix(col);
        }
        cleanValue(p_val, p_limit) {
            return Math.min(p_limit, Math.max(-p_limit, p_val));
        }
    }
    let helper = new ColorMatrix();

    //预载入UI界面和缓存
    class BinCache {
        constructor() {
        }
        static PrecachePackageWithArrayBuffer(pkgName, binData) {
            if (!BinCache.cacheData.has(pkgName)) {
                BinCache.cacheData.set(pkgName, binData);
            }
        }
        /**
         * GetPackageData
         */
        static GetPackageData(pkgName) {
            return BinCache.cacheData.get(pkgName);
        }
        /**
         * PreloadPackage
         */
        static PreloadPackage(pkgName) {
            let data = BinCache.GetPackageData(pkgName);
            if (data != null) {
                UIPackage.loadPackageWithArrayBuffer(pkgName, BinCache.GetPackageData(pkgName));
            }
            else {
                $.Msg("error PreloadPackage : " + pkgName);
            }
        }
    }
    BinCache.cacheData = new Map();

    class PackageRegister {
        constructor() {
        }
        static Init() {
            BinCache.PrecachePackageWithArrayBuffer("test", new Uint8Array([70, 71, 85, 73, 0, 0, 0, 6, 0, 0, 8, 107, 48, 98, 107, 122, 54, 103, 49, 0, 4, 116, 101, 115, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 26, 0, 0, 0, 38, 0, 0, 72, 223, 0, 0, 0, 0, 0, 0, 72, 225, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 3, 0, 0, 0, 27, 0, 0, 1, 238, 3, 0, 4, 0, 5, 0, 6, 255, 254, 0, 0, 0, 0, 212, 0, 0, 0, 60, 12, 0, 0, 1, 211, 8, 0, 0, 0, 0, 34, 0, 0, 0, 56, 0, 0, 0, 92, 0, 0, 1, 177, 0, 0, 1, 178, 0, 0, 1, 197, 0, 0, 1, 199, 0, 0, 0, 0, 0, 0, 0, 212, 0, 0, 0, 60, 0, 1, 63, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 80, 7, 1, 0, 16, 0, 53, 0, 57, 0, 69, 0, 0, 0, 77, 0, 80, 0, 0, 16, 0, 2, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 2, 3, 0, 10, 0, 0, 0, 0, 0, 84, 7, 1, 0, 16, 0, 53, 0, 57, 0, 73, 0, 0, 0, 81, 0, 84, 0, 0, 19, 0, 2, 0, 20, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 12, 0, 0, 0, 0, 3, 0, 10, 0, 12, 0, 14, 0, 1, 255, 255, 2, 3, 0, 10, 0, 0, 0, 0, 0, 169, 7, 1, 0, 16, 0, 61, 0, 65, 0, 123, 0, 0, 0, 131, 0, 167, 6, 255, 254, 255, 254, 0, 22, 0, 23, 0, 0, 0, 86, 0, 0, 0, 13, 1, 0, 0, 0, 40, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 54, 4, 0, 0, 0, 3, 0, 10, 255, 255, 255, 255, 0, 0, 0, 255, 0, 12, 0, 204, 0, 255, 0, 0, 0, 255, 0, 14, 255, 153, 51, 255, 0, 0, 0, 255, 1, 0, 0, 0, 255, 0, 0, 0, 255, 1, 5, 62, 153, 153, 154, 0, 0, 0, 0, 1, 255, 255, 2, 3, 0, 10, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 2, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 1, 230, 3, 0, 24, 0, 25, 0, 6, 255, 254, 0, 0, 0, 0, 160, 0, 0, 0, 40, 12, 0, 0, 1, 203, 8, 0, 0, 0, 0, 34, 0, 0, 0, 56, 0, 0, 0, 92, 0, 0, 1, 169, 0, 0, 1, 170, 0, 0, 1, 189, 0, 0, 1, 191, 0, 0, 0, 0, 0, 0, 0, 160, 0, 0, 0, 40, 0, 1, 63, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 84, 7, 1, 0, 16, 0, 53, 0, 57, 0, 73, 0, 0, 0, 81, 0, 84, 0, 0, 26, 0, 2, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 12, 0, 0, 0, 0, 3, 0, 8, 0, 12, 0, 14, 0, 1, 255, 255, 2, 3, 0, 10, 0, 0, 0, 0, 0, 82, 7, 1, 0, 16, 0, 53, 0, 57, 0, 71, 0, 0, 0, 79, 0, 82, 0, 0, 27, 0, 2, 0, 20, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 3, 0, 10, 0, 0, 0, 0, 0, 159, 7, 1, 0, 16, 0, 61, 0, 65, 0, 113, 0, 0, 0, 121, 0, 157, 6, 255, 254, 255, 254, 0, 28, 0, 23, 0, 0, 0, 75, 0, 0, 0, 3, 1, 0, 0, 0, 10, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 44, 4, 0, 0, 0, 2, 0, 10, 102, 102, 102, 255, 0, 0, 0, 255, 0, 14, 153, 153, 153, 255, 0, 0, 0, 255, 1, 0, 0, 0, 255, 0, 0, 0, 255, 1, 5, 62, 153, 153, 154, 0, 0, 0, 0, 1, 255, 255, 2, 3, 0, 10, 0, 255, 254, 0, 24, 153, 153, 153, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 1, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 1, 232, 3, 0, 29, 0, 30, 0, 6, 255, 254, 0, 0, 0, 0, 160, 0, 0, 0, 40, 12, 0, 0, 1, 205, 8, 0, 0, 0, 0, 34, 0, 0, 0, 56, 0, 0, 0, 92, 0, 0, 1, 171, 0, 0, 1, 172, 0, 0, 1, 191, 0, 0, 1, 193, 0, 0, 0, 0, 0, 0, 0, 160, 0, 0, 0, 40, 0, 1, 63, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 84, 7, 1, 0, 16, 0, 53, 0, 57, 0, 73, 0, 0, 0, 81, 0, 84, 0, 0, 26, 0, 2, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 12, 0, 0, 0, 0, 3, 0, 8, 0, 12, 0, 14, 0, 1, 255, 255, 2, 3, 0, 10, 0, 0, 0, 0, 0, 84, 7, 1, 0, 16, 0, 53, 0, 57, 0, 73, 0, 0, 0, 81, 0, 84, 0, 0, 27, 0, 2, 0, 20, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 12, 0, 0, 0, 0, 3, 0, 10, 0, 12, 0, 14, 0, 1, 255, 255, 2, 3, 0, 10, 0, 0, 0, 0, 0, 159, 7, 1, 0, 16, 0, 61, 0, 65, 0, 113, 0, 0, 0, 121, 0, 157, 6, 255, 254, 255, 254, 0, 28, 0, 23, 0, 0, 0, 75, 0, 0, 0, 3, 1, 0, 0, 0, 10, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 44, 4, 0, 0, 0, 2, 0, 10, 102, 102, 102, 255, 0, 0, 0, 255, 0, 14, 153, 153, 153, 255, 0, 0, 0, 255, 1, 0, 0, 0, 255, 0, 0, 0, 255, 1, 5, 62, 153, 153, 154, 0, 0, 0, 0, 1, 255, 255, 2, 3, 0, 10, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 2, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 0, 188, 3, 0, 31, 0, 32, 0, 6, 255, 254, 0, 0, 0, 0, 200, 0, 0, 0, 200, 0, 0, 0, 0, 161, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 124, 0, 0, 0, 125, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 146, 0, 0, 0, 200, 0, 0, 0, 200, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 71, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 71, 0, 0, 33, 0, 2, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 144, 0, 0, 1, 144, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 2, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 188, 3, 0, 34, 0, 35, 0, 6, 255, 254, 0, 0, 0, 0, 200, 0, 0, 0, 200, 0, 0, 0, 0, 161, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 124, 0, 0, 0, 125, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 146, 0, 0, 0, 200, 0, 0, 0, 200, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 71, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 71, 0, 0, 33, 0, 2, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 144, 0, 0, 1, 144, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 1, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 188, 3, 0, 36, 0, 37, 0, 6, 255, 254, 0, 0, 0, 0, 200, 0, 0, 0, 200, 0, 0, 0, 0, 161, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 124, 0, 0, 0, 125, 0, 0, 0, 144, 0, 0, 0, 0, 0, 0, 0, 146, 0, 0, 0, 200, 0, 0, 0, 200, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 71, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 71, 0, 0, 33, 0, 2, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 144, 0, 0, 1, 144, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 1, 209, 3, 0, 38, 0, 39, 0, 6, 255, 254, 0, 0, 0, 0, 100, 0, 0, 0, 30, 12, 0, 0, 1, 182, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 1, 148, 0, 0, 1, 149, 0, 0, 1, 168, 0, 0, 1, 170, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 12, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 51, 153, 255, 255, 0, 0, 101, 7, 1, 0, 16, 0, 61, 0, 65, 0, 79, 0, 0, 0, 87, 0, 101, 3, 255, 254, 255, 254, 0, 20, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 204, 204, 204, 255, 0, 0, 113, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 111, 6, 255, 254, 255, 254, 0, 28, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 2, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 1, 67, 3, 0, 40, 0, 41, 0, 6, 255, 254, 0, 0, 0, 0, 150, 0, 0, 0, 200, 0, 0, 0, 1, 40, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 1, 13, 0, 0, 1, 19, 0, 0, 1, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 89, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 89, 3, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 150, 0, 0, 0, 200, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 1, 160, 160, 160, 255, 240, 240, 240, 255, 0, 0, 125, 9, 1, 0, 20, 0, 65, 0, 69, 0, 71, 0, 77, 0, 83, 0, 104, 0, 106, 0, 121, 10, 255, 254, 255, 254, 0, 20, 0, 42, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 150, 0, 0, 0, 200, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 1, 14, 0, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 255, 255, 1, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 255, 254, 255, 254, 0, 43, 0, 0, 1, 0, 1, 1, 15, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 1, 195, 3, 0, 44, 0, 45, 0, 6, 255, 254, 0, 0, 0, 0, 10, 0, 0, 0, 19, 12, 0, 0, 1, 168, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 1, 134, 0, 0, 1, 135, 0, 0, 1, 154, 0, 0, 1, 156, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 10, 0, 0, 0, 19, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 240, 240, 240, 255, 0, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 20, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 10, 0, 0, 0, 19, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 12, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 250, 250, 250, 255, 0, 0, 101, 7, 1, 0, 16, 0, 61, 0, 65, 0, 79, 0, 0, 0, 87, 0, 101, 3, 255, 254, 255, 254, 0, 28, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 10, 0, 0, 0, 19, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 204, 204, 204, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 1, 96, 3, 0, 47, 0, 48, 0, 6, 255, 254, 0, 0, 0, 0, 50, 0, 0, 0, 10, 15, 0, 0, 1, 69, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 1, 43, 0, 0, 1, 44, 0, 0, 1, 63, 0, 0, 1, 65, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 89, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 89, 3, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 50, 0, 0, 0, 10, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 1, 160, 160, 160, 255, 240, 240, 240, 255, 0, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 20, 0, 49, 0, 0, 0, 5, 0, 0, 0, 3, 1, 0, 0, 0, 40, 0, 0, 0, 4, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 51, 153, 255, 255, 0, 0, 71, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 65, 0, 71, 0, 71, 9, 0, 44, 255, 254, 0, 28, 0, 50, 0, 0, 0, 40, 255, 255, 255, 251, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 0, 1, 1, 6, 0, 255, 255, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 0, 0, 1, 255, 254, 0, 0, 0, 0, 1, 195, 3, 0, 51, 0, 52, 0, 6, 255, 254, 0, 0, 0, 0, 17, 0, 0, 0, 20, 12, 0, 0, 1, 168, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 1, 134, 0, 0, 1, 135, 0, 0, 1, 154, 0, 0, 1, 156, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 169, 219, 246, 255, 0, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 54, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 12, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 250, 250, 250, 255, 0, 0, 101, 7, 1, 0, 16, 0, 61, 0, 65, 0, 79, 0, 0, 0, 87, 0, 101, 3, 255, 254, 255, 254, 0, 55, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 204, 204, 204, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 1, 195, 3, 0, 56, 0, 57, 0, 6, 255, 254, 0, 0, 0, 0, 17, 0, 0, 0, 20, 12, 0, 0, 1, 168, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 1, 134, 0, 0, 1, 135, 0, 0, 1, 154, 0, 0, 1, 156, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 169, 219, 246, 255, 0, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 54, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 12, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 250, 250, 250, 255, 0, 0, 101, 7, 1, 0, 16, 0, 61, 0, 65, 0, 79, 0, 0, 0, 87, 0, 101, 3, 255, 254, 255, 254, 0, 55, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 204, 204, 204, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 0, 203, 3, 0, 58, 0, 59, 0, 6, 255, 254, 0, 0, 0, 0, 17, 0, 0, 0, 20, 12, 0, 0, 0, 176, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 142, 0, 0, 0, 143, 0, 0, 0, 162, 0, 0, 0, 164, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 89, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 89, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 255, 153, 51, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 1, 195, 3, 0, 60, 0, 61, 0, 6, 255, 254, 0, 0, 0, 0, 20, 0, 0, 0, 17, 12, 0, 0, 1, 168, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 1, 134, 0, 0, 1, 135, 0, 0, 1, 154, 0, 0, 1, 156, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 169, 219, 246, 255, 0, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 54, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 12, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 250, 250, 250, 255, 0, 0, 101, 7, 1, 0, 16, 0, 61, 0, 65, 0, 79, 0, 0, 0, 87, 0, 101, 3, 255, 254, 255, 254, 0, 55, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 204, 204, 204, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 1, 195, 3, 0, 62, 0, 63, 0, 6, 255, 254, 0, 0, 0, 0, 20, 0, 0, 0, 17, 12, 0, 0, 1, 168, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 1, 134, 0, 0, 1, 135, 0, 0, 1, 154, 0, 0, 1, 156, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 3, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 169, 219, 246, 255, 0, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 54, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 12, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 250, 250, 250, 255, 0, 0, 101, 7, 1, 0, 16, 0, 61, 0, 65, 0, 79, 0, 0, 0, 87, 0, 101, 3, 255, 254, 255, 254, 0, 55, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 204, 204, 204, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 0, 203, 3, 0, 64, 0, 65, 0, 6, 255, 254, 0, 0, 0, 0, 20, 0, 0, 0, 17, 12, 0, 0, 0, 176, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 142, 0, 0, 0, 143, 0, 0, 0, 162, 0, 0, 0, 164, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 89, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 89, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 255, 153, 51, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 9, 17, 3, 0, 66, 0, 67, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 8, 246, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 8, 224, 0, 0, 8, 225, 0, 0, 8, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 12, 1, 188, 9, 1, 0, 20, 0, 65, 0, 69, 0, 71, 0, 72, 0, 78, 0, 99, 0, 101, 0, 116, 10, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 149, 0, 0, 1, 248, 1, 0, 0, 0, 244, 0, 0, 1, 193, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 255, 255, 1, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 255, 254, 255, 254, 0, 69, 0, 18, 0, 16, 255, 254, 0, 70, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 71, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 72, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 73, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 74, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 75, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 76, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 77, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 20, 0, 21, 0, 0, 0, 219, 0, 0, 1, 183, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 1, 188, 9, 1, 0, 20, 0, 65, 0, 69, 0, 71, 0, 72, 0, 78, 0, 99, 0, 101, 0, 116, 10, 255, 254, 255, 254, 0, 28, 0, 46, 0, 0, 2, 6, 0, 0, 1, 249, 1, 0, 0, 0, 244, 0, 0, 1, 202, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 79, 255, 254, 255, 254, 255, 254, 0, 69, 0, 18, 0, 16, 255, 254, 0, 80, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 81, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 82, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 83, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 84, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 85, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 86, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 87, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 22, 0, 88, 0, 0, 2, 73, 0, 0, 1, 185, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 1, 188, 9, 1, 0, 20, 0, 65, 0, 69, 0, 71, 0, 72, 0, 78, 0, 99, 0, 101, 0, 116, 10, 255, 254, 255, 254, 0, 90, 0, 91, 0, 0, 3, 75, 0, 0, 1, 243, 1, 0, 0, 0, 244, 0, 0, 1, 205, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 79, 255, 254, 255, 254, 255, 254, 0, 69, 0, 18, 0, 16, 255, 254, 0, 92, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 93, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 94, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 95, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 96, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 97, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 98, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 0, 99, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 16, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 113, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 111, 6, 255, 254, 255, 254, 0, 100, 0, 101, 0, 0, 3, 64, 0, 0, 1, 189, 1, 0, 0, 1, 12, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 0, 4, 2, 3, 0, 11, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 74, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 68, 0, 74, 0, 74, 9, 0, 31, 255, 254, 0, 103, 0, 104, 0, 0, 5, 84, 0, 0, 0, 253, 1, 0, 0, 1, 211, 0, 0, 0, 200, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 105, 0, 106, 0, 0, 5, 221, 0, 0, 0, 211, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 74, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 68, 0, 74, 0, 74, 9, 0, 36, 255, 254, 0, 108, 0, 109, 0, 0, 5, 87, 0, 0, 2, 45, 1, 0, 0, 1, 211, 0, 0, 0, 200, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 74, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 68, 0, 74, 0, 74, 9, 0, 34, 255, 254, 0, 110, 0, 111, 0, 0, 5, 81, 0, 0, 3, 52, 1, 0, 0, 1, 205, 0, 0, 0, 221, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 112, 0, 113, 0, 0, 5, 222, 0, 0, 2, 3, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 115, 0, 116, 0, 0, 5, 214, 0, 0, 3, 10, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 5, 116, 3, 0, 118, 0, 119, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 5, 89, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 5, 67, 0, 0, 5, 68, 0, 0, 5, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 105, 0, 0, 0, 220, 1, 0, 0, 2, 208, 0, 0, 0, 46, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 20, 0, 21, 0, 0, 0, 105, 0, 0, 1, 26, 1, 0, 0, 5, 212, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 28, 0, 46, 0, 0, 0, 105, 0, 0, 1, 97, 1, 0, 0, 2, 217, 0, 0, 0, 99, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 22, 0, 88, 0, 0, 0, 105, 0, 0, 1, 232, 1, 0, 0, 2, 231, 0, 0, 0, 39, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 90, 0, 124, 0, 0, 0, 105, 0, 0, 2, 44, 1, 0, 0, 2, 231, 0, 0, 0, 39, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 100, 0, 101, 0, 0, 0, 105, 0, 0, 2, 135, 1, 0, 0, 1, 44, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 127, 0, 128, 0, 0, 0, 105, 0, 0, 2, 189, 1, 0, 0, 1, 44, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 103, 0, 104, 0, 0, 0, 105, 0, 0, 2, 247, 1, 0, 0, 1, 44, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 105, 0, 106, 0, 0, 1, 205, 0, 0, 2, 134, 1, 0, 0, 1, 44, 0, 0, 0, 147, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 108, 0, 109, 0, 0, 3, 62, 0, 0, 2, 134, 1, 0, 0, 1, 44, 0, 0, 0, 147, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 110, 0, 111, 0, 0, 4, 193, 0, 0, 2, 134, 1, 0, 0, 1, 44, 0, 0, 0, 147, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 7, 255, 254, 255, 254, 0, 112, 0, 113, 0, 0, 0, 108, 0, 0, 3, 36, 1, 0, 0, 2, 111, 0, 0, 0, 220, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 3, 143, 3, 0, 135, 0, 136, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 3, 116, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 3, 75, 0, 0, 3, 76, 0, 0, 3, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 137, 0, 0, 4, 0, 8, 255, 253, 0, 10, 255, 253, 0, 12, 255, 253, 0, 14, 255, 253, 0, 0, 0, 0, 8, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 4, 255, 254, 0, 17, 0, 18, 0, 0, 1, 43, 0, 0, 0, 236, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 138, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 255, 255, 255, 254, 255, 254, 0, 0, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 24, 255, 254, 0, 20, 0, 21, 0, 0, 1, 54, 0, 0, 1, 97, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 139, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 255, 255, 255, 254, 255, 254, 0, 0, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 24, 255, 254, 0, 28, 0, 46, 0, 0, 1, 219, 0, 0, 1, 208, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 140, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 254, 0, 0, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 24, 255, 254, 0, 22, 0, 88, 0, 0, 2, 128, 0, 0, 1, 208, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 141, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 12, 255, 254, 0, 0, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 24, 255, 254, 0, 90, 0, 124, 0, 0, 3, 37, 0, 0, 1, 208, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 142, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 14, 255, 254, 0, 0, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 24, 255, 254, 0, 100, 0, 101, 0, 0, 1, 54, 0, 0, 1, 208, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 143, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 8, 255, 254, 0, 1, 0, 127, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 68, 0, 74, 0, 74, 9, 0, 144, 255, 254, 0, 127, 0, 145, 0, 0, 1, 46, 0, 0, 2, 170, 1, 0, 0, 1, 232, 0, 0, 0, 44, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 13, 0, 4, 0, 6, 0, 146, 255, 254, 255, 254, 0, 6, 0, 147, 255, 254, 255, 254, 0, 6, 0, 148, 255, 254, 255, 254, 0, 6, 0, 149, 255, 254, 255, 254, 0, 150, 255, 254, 0, 0, 0, 0, 10, 0, 255, 255, 255, 254, 63, 128, 0, 0, 0, 87, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 68, 0, 74, 0, 74, 9, 0, 47, 255, 254, 0, 103, 0, 151, 0, 0, 1, 18, 0, 0, 3, 144, 1, 0, 0, 1, 121, 0, 0, 0, 10, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 15, 0, 0, 0, 50, 0, 0, 0, 100, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 1, 0, 17, 0, 152, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 255, 254, 0, 0, 0, 0, 12, 112, 3, 0, 153, 0, 154, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 12, 85, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 3, 255, 0, 0, 4, 0, 0, 0, 4, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 91, 7, 1, 0, 16, 0, 70, 0, 74, 0, 76, 0, 0, 0, 77, 0, 91, 3, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 176, 0, 0, 0, 164, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 1, 63, 0, 0, 0, 63, 0, 0, 0, 1, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 20, 0, 21, 0, 0, 0, 130, 0, 0, 1, 28, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 28, 0, 46, 0, 0, 0, 123, 0, 0, 1, 204, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 91, 7, 1, 0, 16, 0, 70, 0, 74, 0, 76, 0, 0, 0, 77, 0, 91, 3, 255, 254, 255, 254, 0, 22, 0, 88, 0, 0, 0, 173, 0, 0, 2, 194, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 1, 63, 0, 0, 0, 63, 0, 0, 0, 1, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 91, 7, 1, 0, 16, 0, 70, 0, 74, 0, 76, 0, 0, 0, 77, 0, 91, 3, 255, 254, 255, 254, 0, 90, 0, 124, 0, 0, 0, 226, 0, 0, 3, 99, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 1, 63, 128, 0, 0, 0, 0, 0, 0, 1, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 100, 0, 101, 0, 0, 3, 227, 0, 0, 0, 119, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 91, 7, 1, 0, 16, 0, 70, 0, 74, 0, 76, 0, 0, 0, 77, 0, 91, 3, 255, 254, 255, 254, 0, 155, 0, 128, 0, 0, 4, 27, 0, 0, 2, 105, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 1, 63, 0, 0, 0, 63, 0, 0, 0, 1, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 156, 0, 109, 0, 0, 2, 186, 0, 0, 1, 74, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 4, 255, 254, 0, 157, 0, 158, 0, 0, 2, 144, 0, 0, 1, 209, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 159, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 255, 255, 255, 254, 255, 254, 0, 0, 0, 88, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 4, 255, 254, 0, 160, 0, 161, 0, 0, 2, 146, 0, 0, 2, 52, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 12, 0, 162, 255, 254, 255, 254, 255, 254, 0, 0, 0, 0, 0, 255, 255, 255, 254, 255, 254, 0, 0, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 163, 0, 116, 0, 0, 5, 128, 0, 0, 2, 102, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 9, 0, 109, 0, 164, 0, 0, 0, 0, 1, 255, 255, 255, 255, 0, 0, 0, 0, 0, 2, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 5, 0, 0, 0, 0, 0, 0, 255, 254, 1, 62, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 0, 0, 0, 0, 66, 180, 0, 0, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 5, 62, 128, 0, 0, 0, 0, 255, 254, 1, 62, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 66, 180, 0, 0, 67, 52, 0, 0, 0, 0, 0, 0, 0, 77, 0, 165, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 0, 0, 0, 0, 0, 1, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 61, 139, 67, 150, 62, 134, 167, 240, 1, 1, 1, 62, 180, 57, 88, 62, 134, 167, 240, 1, 0, 0, 0, 0, 0, 125, 0, 166, 0, 0, 0, 0, 1, 255, 255, 255, 255, 0, 0, 0, 0, 0, 2, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 0, 0, 0, 0, 0, 2, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 63, 128, 0, 0, 63, 128, 0, 0, 62, 76, 204, 205, 62, 76, 204, 205, 0, 0, 0, 0, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 63, 0, 0, 0, 0, 2, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 62, 76, 204, 205, 62, 76, 204, 205, 63, 128, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 0, 125, 0, 167, 0, 0, 0, 0, 1, 255, 255, 255, 255, 0, 0, 0, 0, 0, 2, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 0, 0, 0, 0, 0, 3, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 63, 128, 0, 0, 63, 128, 0, 0, 62, 76, 204, 205, 62, 76, 204, 205, 0, 0, 0, 0, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 63, 0, 0, 0, 0, 3, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 62, 76, 204, 205, 62, 76, 204, 205, 63, 128, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 0, 125, 0, 168, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 0, 0, 0, 0, 0, 4, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 63, 128, 0, 0, 63, 128, 0, 0, 62, 76, 204, 205, 62, 76, 204, 205, 0, 0, 0, 0, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 63, 0, 0, 0, 0, 4, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 62, 76, 204, 205, 62, 76, 204, 205, 63, 128, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 2, 9, 0, 169, 0, 0, 0, 0, 1, 255, 255, 255, 255, 0, 0, 0, 0, 0, 10, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 4, 0, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 6, 0, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 255, 255, 255, 255, 0, 204, 255, 255, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 5, 0, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 0, 0, 0, 0, 66, 180, 0, 0, 0, 0, 0, 0, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 0, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 63, 128, 0, 0, 63, 128, 0, 0, 62, 76, 204, 205, 63, 128, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 0, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 110, 128, 0, 67, 2, 0, 0, 0, 1, 0, 68, 192, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 4, 63, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 6, 63, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 0, 204, 255, 255, 0, 0, 0, 255, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 5, 63, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 66, 180, 0, 0, 67, 52, 0, 0, 0, 0, 0, 0, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 63, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 62, 76, 204, 205, 63, 128, 0, 0, 63, 128, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 63, 0, 0, 0, 0, 5, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 0, 68, 192, 32, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 68, 7, 0, 0, 0, 0, 0, 0, 0, 1, 8, 0, 152, 0, 0, 0, 0, 1, 255, 255, 255, 255, 0, 0, 0, 0, 0, 5, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 6, 0, 0, 0, 0, 0, 6, 255, 254, 1, 64, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 255, 255, 255, 255, 255, 153, 102, 255, 0, 0, 0, 0, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 0, 0, 0, 0, 0, 6, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 63, 128, 0, 0, 63, 128, 0, 0, 63, 76, 204, 205, 63, 76, 204, 205, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 0, 0, 0, 0, 0, 6, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 131, 96, 0, 68, 26, 64, 0, 0, 1, 1, 68, 90, 0, 0, 68, 26, 64, 0, 0, 0, 0, 0, 0, 0, 52, 4, 1, 0, 10, 0, 20, 0, 32, 0, 40, 2, 63, 128, 0, 0, 0, 6, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 63, 76, 204, 205, 63, 76, 204, 205, 63, 128, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 0, 31, 4, 1, 0, 10, 0, 0, 0, 20, 0, 0, 0, 64, 0, 0, 0, 0, 6, 255, 254, 0, 1, 1, 68, 131, 96, 0, 68, 26, 64, 0, 0, 2, 103, 0, 170, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 11, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 6, 0, 0, 0, 0, 0, 7, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 255, 255, 255, 255, 51, 51, 51, 255, 0, 0, 0, 0, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 13, 0, 0, 0, 0, 0, 7, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 66, 11, 40, 246, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 0, 0, 0, 0, 0, 7, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 46, 128, 0, 67, 165, 0, 0, 0, 1, 1, 68, 167, 224, 0, 67, 165, 0, 0, 0, 0, 0, 0, 0, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 13, 63, 0, 0, 0, 0, 7, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 66, 11, 40, 246, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 66, 59, 51, 51, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 6, 63, 128, 0, 0, 0, 7, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 51, 51, 51, 255, 0, 153, 255, 255, 0, 0, 0, 0, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 13, 63, 128, 0, 0, 0, 7, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 0, 0, 0, 0, 66, 59, 51, 51, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 63, 128, 0, 0, 0, 7, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 167, 224, 0, 67, 165, 0, 0, 0, 1, 1, 68, 167, 224, 0, 68, 86, 192, 0, 0, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 6, 63, 192, 0, 0, 0, 7, 255, 254, 1, 62, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 0, 153, 255, 255, 255, 204, 0, 255, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 63, 192, 0, 0, 0, 7, 255, 254, 1, 62, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 167, 224, 0, 68, 86, 192, 0, 0, 1, 1, 68, 44, 192, 0, 68, 86, 192, 0, 0, 0, 0, 0, 0, 0, 44, 4, 1, 0, 10, 0, 20, 0, 32, 0, 36, 6, 63, 224, 0, 0, 0, 7, 255, 254, 1, 62, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 255, 204, 0, 255, 153, 51, 0, 255, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 63, 224, 0, 0, 0, 7, 255, 254, 1, 62, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 44, 192, 0, 68, 86, 192, 0, 0, 1, 1, 68, 19, 192, 0, 67, 165, 0, 0, 0, 0, 0, 0, 0, 0, 133, 0, 171, 0, 0, 0, 0, 1, 255, 255, 255, 255, 0, 0, 0, 0, 0, 2, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 1, 0, 0, 0, 0, 0, 10, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 66, 200, 0, 0, 66, 200, 0, 0, 1, 1, 67, 143, 0, 0, 66, 200, 0, 0, 0, 0, 0, 0, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 1, 63, 0, 0, 0, 0, 10, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 67, 143, 0, 0, 66, 200, 0, 0, 1, 1, 67, 143, 0, 0, 67, 134, 0, 0, 0, 0, 0, 0, 255, 254, 0, 0, 0, 0, 2, 80, 3, 0, 172, 0, 173, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 2, 53, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 2, 31, 0, 0, 2, 32, 0, 0, 2, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 174, 0, 0, 0, 22, 0, 175, 0, 0, 0, 85, 0, 0, 1, 124, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 176, 0, 0, 0, 90, 0, 177, 0, 0, 0, 97, 0, 0, 2, 56, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 74, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 68, 0, 74, 0, 74, 9, 0, 178, 0, 0, 0, 100, 0, 179, 0, 0, 1, 236, 0, 0, 2, 42, 1, 0, 0, 1, 216, 0, 0, 1, 208, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 180, 0, 0, 0, 127, 0, 181, 0, 0, 2, 76, 0, 0, 1, 91, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 182, 0, 0, 0, 103, 0, 183, 0, 0, 4, 20, 0, 0, 1, 81, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 74, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 68, 0, 74, 0, 74, 9, 0, 184, 0, 0, 0, 105, 0, 185, 0, 0, 4, 178, 0, 0, 2, 20, 1, 0, 0, 2, 24, 0, 0, 1, 241, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 186, 0, 0, 0, 108, 0, 187, 0, 0, 0, 97, 0, 0, 3, 4, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 6, 193, 3, 0, 188, 0, 189, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 6, 166, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 6, 144, 0, 0, 6, 145, 0, 0, 6, 164, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 22, 0, 88, 0, 0, 0, 82, 0, 0, 2, 79, 1, 0, 0, 0, 168, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 190, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 90, 0, 124, 0, 0, 0, 9, 0, 0, 3, 93, 1, 0, 0, 0, 240, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 191, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 100, 0, 192, 0, 0, 1, 43, 0, 0, 3, 33, 1, 0, 0, 1, 85, 0, 0, 0, 198, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 28, 0, 193, 0, 0, 1, 44, 0, 0, 2, 35, 1, 0, 0, 0, 169, 0, 0, 0, 173, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 194, 0, 128, 0, 0, 1, 40, 0, 0, 1, 242, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 195, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 196, 0, 197, 0, 0, 3, 139, 0, 0, 1, 55, 1, 0, 0, 0, 169, 0, 0, 0, 173, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 198, 0, 199, 0, 0, 3, 135, 0, 0, 1, 6, 1, 0, 0, 0, 76, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 201, 0, 202, 0, 0, 5, 51, 0, 0, 2, 40, 1, 0, 0, 0, 169, 0, 0, 0, 173, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 203, 0, 204, 0, 0, 5, 47, 0, 0, 1, 247, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 206, 0, 207, 0, 0, 6, 5, 0, 0, 2, 53, 1, 0, 0, 0, 209, 0, 0, 0, 60, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 208, 0, 209, 0, 0, 6, 1, 0, 0, 2, 4, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 211, 0, 212, 0, 0, 1, 252, 0, 0, 2, 25, 1, 0, 0, 0, 169, 0, 0, 0, 173, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 213, 0, 109, 0, 0, 1, 248, 0, 0, 1, 232, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 214, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 215, 0, 216, 0, 0, 2, 208, 0, 0, 2, 25, 1, 0, 0, 0, 169, 0, 0, 0, 173, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 106, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 104, 6, 255, 254, 255, 254, 0, 217, 0, 116, 0, 0, 2, 204, 0, 0, 1, 232, 1, 0, 0, 0, 100, 0, 0, 0, 34, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 218, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 219, 0, 220, 0, 0, 3, 247, 0, 0, 3, 75, 1, 0, 0, 1, 18, 0, 0, 0, 146, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 0, 221, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 83, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 83, 4, 255, 254, 255, 254, 0, 222, 0, 223, 0, 0, 5, 70, 0, 0, 3, 70, 1, 0, 0, 1, 18, 0, 0, 0, 146, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 2, 182, 3, 0, 224, 0, 225, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 2, 155, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 135, 0, 0, 0, 136, 0, 0, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 234, 0, 0, 1, 214, 1, 0, 0, 1, 60, 0, 0, 1, 20, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 2, 1, 117, 0, 226, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 6, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 1, 0, 0, 0, 0, 0, 0, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 67, 158, 0, 0, 67, 138, 0, 0, 1, 1, 66, 200, 0, 0, 66, 200, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 67, 106, 0, 0, 67, 235, 0, 0, 0, 1, 1, 68, 51, 64, 0, 67, 235, 0, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 63, 0, 0, 0, 0, 0, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 51, 64, 0, 67, 235, 0, 0, 0, 1, 1, 68, 51, 64, 0, 66, 228, 0, 0, 0, 0, 0, 0, 0, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 1, 63, 128, 0, 0, 0, 0, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 66, 200, 0, 0, 66, 200, 0, 0, 1, 1, 67, 158, 0, 0, 67, 138, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 63, 128, 0, 0, 0, 0, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 51, 64, 0, 66, 228, 0, 0, 0, 1, 1, 67, 106, 0, 0, 66, 228, 0, 0, 0, 0, 0, 0, 0, 0, 58, 4, 1, 0, 10, 0, 20, 0, 32, 0, 43, 0, 63, 192, 0, 0, 0, 0, 255, 254, 1, 63, 0, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 67, 106, 0, 0, 66, 228, 0, 0, 0, 1, 1, 67, 106, 0, 0, 67, 235, 0, 0, 0, 0, 0, 0, 0, 0, 133, 0, 227, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 0, 2, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 1, 0, 0, 0, 0, 0, 0, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 67, 158, 0, 0, 67, 138, 0, 0, 1, 1, 68, 17, 128, 0, 67, 252, 128, 0, 0, 0, 0, 0, 0, 56, 4, 1, 0, 10, 0, 20, 0, 32, 0, 42, 1, 63, 128, 0, 0, 0, 0, 255, 254, 1, 63, 128, 0, 0, 5, 0, 0, 0, 0, 0, 255, 254, 1, 1, 68, 17, 128, 0, 67, 252, 128, 0, 1, 1, 67, 158, 0, 0, 67, 138, 0, 0, 0, 0, 0, 0, 255, 254, 0, 0, 0, 0, 2, 44, 3, 0, 144, 0, 228, 0, 6, 255, 254, 1, 0, 0, 0, 100, 0, 0, 0, 30, 13, 0, 0, 2, 17, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 83, 0, 0, 1, 249, 0, 0, 1, 250, 0, 0, 2, 13, 0, 0, 2, 15, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 1, 0, 32, 3, 1, 0, 8, 0, 11, 0, 30, 0, 7, 0, 0, 4, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 0, 14, 0, 15, 0, 0, 0, 0, 4, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 240, 240, 240, 255, 0, 0, 99, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 99, 3, 255, 254, 255, 254, 0, 20, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 12, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 250, 250, 250, 255, 0, 0, 101, 7, 1, 0, 16, 0, 61, 0, 65, 0, 79, 0, 0, 0, 87, 0, 101, 3, 255, 254, 255, 254, 0, 28, 0, 46, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 30, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 10, 0, 0, 0, 0, 2, 0, 10, 0, 14, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 204, 204, 204, 255, 0, 0, 113, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 111, 6, 255, 254, 255, 254, 0, 22, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 80, 0, 0, 0, 30, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 24, 0, 0, 0, 255, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 229, 255, 254, 0, 0, 0, 0, 1, 57, 3, 0, 230, 0, 231, 0, 68, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 1, 30, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 1, 8, 0, 0, 1, 9, 0, 0, 1, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 82, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 68, 0, 82, 3, 255, 254, 255, 254, 0, 232, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 153, 153, 153, 255, 0, 0, 127, 9, 1, 0, 20, 0, 65, 0, 69, 0, 71, 0, 79, 0, 85, 0, 106, 0, 108, 0, 123, 10, 255, 254, 255, 254, 0, 17, 0, 233, 0, 0, 0, 149, 0, 0, 0, 54, 1, 0, 0, 6, 85, 0, 0, 0, 88, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 3, 0, 7, 0, 255, 255, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 20, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 255, 255, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 255, 254, 255, 254, 0, 69, 0, 0, 0, 255, 254, 0, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 1, 233, 3, 0, 234, 0, 235, 0, 6, 255, 254, 1, 0, 0, 0, 17, 0, 0, 0, 200, 16, 0, 0, 1, 206, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 1, 183, 0, 0, 1, 184, 0, 0, 1, 203, 0, 0, 1, 205, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 89, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 89, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 17, 0, 0, 0, 200, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 240, 240, 240, 255, 0, 0, 86, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 73, 0, 86, 3, 255, 254, 255, 254, 0, 54, 0, 49, 0, 0, 0, 0, 0, 0, 0, 20, 1, 0, 0, 0, 17, 0, 0, 0, 160, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 1, 15, 0, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 51, 255, 254, 0, 55, 0, 236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 71, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 65, 0, 71, 0, 71, 9, 0, 56, 255, 254, 0, 237, 0, 238, 0, 0, 0, 0, 0, 0, 0, 180, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 1, 13, 0, 255, 255, 0, 0, 0, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 58, 255, 254, 0, 239, 0, 50, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 0, 0, 0, 0, 1, 233, 3, 0, 240, 0, 241, 0, 6, 255, 254, 1, 0, 0, 0, 200, 0, 0, 0, 17, 16, 0, 0, 1, 206, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 1, 183, 0, 0, 1, 184, 0, 0, 1, 203, 0, 0, 1, 205, 0, 0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 89, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 89, 3, 255, 254, 255, 254, 0, 53, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 200, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 240, 240, 240, 255, 0, 0, 86, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 73, 0, 86, 3, 255, 254, 255, 254, 0, 54, 0, 49, 0, 0, 0, 20, 0, 0, 0, 0, 1, 0, 0, 0, 160, 0, 0, 0, 17, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 1, 14, 0, 0, 0, 0, 1, 0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 60, 255, 254, 0, 55, 0, 236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 71, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 65, 0, 71, 0, 71, 9, 0, 62, 255, 254, 0, 237, 0, 238, 0, 0, 0, 180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 1, 6, 0, 255, 255, 0, 0, 0, 0, 0, 66, 7, 1, 0, 16, 0, 53, 0, 57, 0, 59, 0, 60, 0, 66, 0, 66, 9, 0, 64, 255, 254, 0, 239, 0, 50, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 0, 255, 255, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 0, 0, 0, 0, 0, 0, 0, 242, 0, 8, 52, 118, 48, 118, 108, 102, 113, 57, 0, 9, 100, 111, 116, 97, 112, 97, 110, 101, 108, 0, 8, 119, 100, 114, 99, 100, 56, 114, 112, 0, 8, 117, 105, 112, 117, 98, 108, 105, 99, 0, 5, 110, 104, 114, 101, 55, 0, 7, 66, 117, 116, 116, 111, 110, 49, 0, 12, 47, 99, 111, 109, 112, 111, 110, 101, 110, 116, 115, 47, 0, 6, 98, 117, 116, 116, 111, 110, 0, 1, 48, 0, 2, 117, 112, 0, 1, 49, 0, 4, 100, 111, 119, 110, 0, 1, 50, 0, 4, 111, 118, 101, 114, 0, 1, 51, 0, 12, 115, 101, 108, 101, 99, 116, 101, 100, 79, 118, 101, 114, 0, 6, 110, 104, 114, 101, 49, 108, 0, 7, 110, 48, 95, 110, 104, 114, 101, 0, 2, 110, 48, 0, 6, 110, 104, 114, 101, 49, 109, 0, 7, 110, 49, 95, 110, 104, 114, 101, 0, 2, 110, 49, 0, 7, 110, 51, 95, 110, 104, 114, 101, 0, 5, 116, 105, 116, 108, 101, 0, 5, 110, 104, 114, 101, 98, 0, 11, 66, 117, 116, 116, 111, 110, 67, 104, 101, 99, 107, 0, 6, 110, 104, 114, 101, 49, 110, 0, 6, 110, 104, 114, 101, 49, 111, 0, 7, 110, 50, 95, 110, 104, 114, 101, 0, 5, 110, 104, 114, 101, 104, 0, 12, 66, 117, 116, 116, 111, 110, 83, 105, 110, 103, 108, 101, 0, 5, 110, 104, 114, 101, 105, 0, 14, 83, 99, 114, 111, 108, 108, 67, 111, 109, 112, 70, 114, 101, 101, 0, 5, 106, 114, 108, 54, 57, 0, 5, 110, 104, 114, 101, 106, 0, 11, 83, 99, 114, 111, 108, 108, 67, 111, 109, 112, 86, 0, 5, 110, 104, 114, 101, 107, 0, 11, 83, 99, 114, 111, 108, 108, 67, 111, 109, 112, 72, 0, 5, 110, 104, 114, 101, 108, 0, 14, 67, 111, 109, 98, 111, 66, 111, 120, 49, 95, 105, 116, 101, 109, 0, 5, 110, 104, 114, 101, 109, 0, 15, 67, 111, 109, 98, 111, 66, 111, 120, 49, 95, 112, 111, 112, 117, 112, 0, 4, 108, 105, 115, 116, 0, 18, 117, 105, 58, 47, 47, 107, 48, 98, 107, 122, 54, 103, 49, 110, 104, 114, 101, 108, 0, 5, 110, 104, 114, 101, 111, 0, 12, 83, 108, 105, 100, 101, 114, 49, 95, 103, 114, 105, 112, 0, 2, 110, 50, 0, 5, 110, 104, 114, 101, 112, 0, 7, 83, 108, 105, 100, 101, 114, 49, 0, 3, 98, 97, 114, 0, 4, 103, 114, 105, 112, 0, 5, 113, 114, 116, 112, 114, 0, 17, 83, 99, 114, 111, 108, 108, 66, 97, 114, 86, 95, 97, 114, 114, 111, 119, 49, 0, 7, 110, 48, 95, 113, 114, 116, 112, 0, 7, 110, 49, 95, 113, 114, 116, 112, 0, 7, 110, 50, 95, 113, 114, 116, 112, 0, 5, 113, 114, 116, 112, 115, 0, 17, 83, 99, 114, 111, 108, 108, 66, 97, 114, 86, 95, 97, 114, 114, 111, 119, 50, 0, 5, 113, 114, 116, 112, 116, 0, 15, 83, 99, 114, 111, 108, 108, 66, 97, 114, 86, 95, 103, 114, 105, 112, 0, 5, 113, 114, 116, 112, 118, 0, 17, 83, 99, 114, 111, 108, 108, 66, 97, 114, 72, 95, 97, 114, 114, 111, 119, 49, 0, 5, 113, 114, 116, 112, 119, 0, 17, 83, 99, 114, 111, 108, 108, 66, 97, 114, 72, 95, 97, 114, 114, 111, 119, 50, 0, 5, 113, 114, 116, 112, 120, 0, 15, 83, 99, 114, 111, 108, 108, 66, 97, 114, 72, 95, 103, 114, 105, 112, 0, 5, 110, 104, 114, 101, 48, 0, 8, 84, 101, 115, 116, 76, 105, 115, 116, 0, 7, 47, 118, 105, 101, 119, 115, 47, 0, 18, 117, 105, 58, 47, 47, 107, 48, 98, 107, 122, 54, 103, 49, 110, 104, 114, 101, 104, 0, 1, 49, 0, 1, 50, 0, 1, 51, 0, 1, 52, 0, 1, 53, 0, 1, 54, 0, 1, 55, 0, 1, 56, 0, 12, 229, 141, 149, 233, 128, 137, 229, 136, 151, 232, 161, 168, 0, 18, 117, 105, 58, 47, 47, 107, 48, 98, 107, 122, 54, 103, 49, 113, 114, 116, 112, 117, 0, 1, 49, 0, 1, 50, 0, 1, 51, 0, 1, 52, 0, 1, 53, 0, 1, 54, 0, 1, 55, 0, 1, 56, 0, 2, 110, 51, 0, 12, 229, 164, 154, 233, 128, 137, 229, 136, 151, 232, 161, 168, 0, 7, 110, 52, 95, 110, 104, 114, 101, 0, 11, 118, 105, 114, 116, 117, 97, 108, 76, 105, 115, 116, 0, 1, 49, 0, 1, 50, 0, 1, 51, 0, 1, 52, 0, 1, 53, 0, 1, 54, 0, 1, 55, 0, 1, 56, 0, 7, 110, 53, 95, 110, 104, 114, 101, 0, 2, 110, 53, 0, 33, 232, 153, 154, 230, 139, 159, 229, 136, 151, 232, 161, 168, 239, 188, 140, 232, 138, 130, 231, 156, 129, 229, 164, 167, 233, 135, 143, 232, 181, 132, 230, 186, 144, 0, 7, 110, 55, 95, 110, 104, 114, 101, 0, 2, 110, 55, 0, 7, 110, 56, 95, 110, 104, 114, 101, 0, 2, 110, 56, 0, 12, 232, 135, 170, 231, 148, 177, 230, 187, 154, 229, 138, 168, 0, 7, 110, 57, 95, 110, 104, 114, 101, 0, 2, 110, 57, 0, 8, 110, 49, 48, 95, 110, 104, 114, 101, 0, 3, 110, 49, 48, 0, 8, 110, 49, 49, 95, 110, 104, 114, 101, 0, 3, 110, 49, 49, 0, 12, 230, 176, 180, 229, 185, 179, 230, 187, 154, 229, 138, 168, 0, 8, 110, 49, 50, 95, 110, 104, 114, 101, 0, 3, 110, 49, 50, 0, 12, 229, 158, 130, 231, 155, 180, 230, 187, 154, 229, 138, 168, 0, 5, 110, 104, 114, 101, 49, 0, 9, 84, 101, 115, 116, 76, 97, 98, 101, 108, 2, 52, 229, 155, 186, 229, 174, 154, 229, 174, 189, 233, 171, 152, 230, 150, 135, 230, 156, 172, 239, 188, 154, 232, 163, 129, 229, 137, 170, 229, 164, 154, 229, 135, 186, 229, 142, 187, 231, 154, 132, 233, 131, 168, 229, 136, 134, 227, 128, 130, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 0, 186, 232, 135, 170, 229, 138, 168, 229, 174, 189, 233, 171, 152, 230, 150, 135, 230, 156, 172, 239, 188, 154, 232, 135, 170, 229, 138, 168, 233, 128, 130, 229, 186, 148, 229, 174, 189, 229, 186, 166, 227, 128, 130, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 0, 201, 232, 135, 170, 229, 138, 168, 233, 171, 152, 229, 186, 166, 230, 150, 135, 230, 156, 172, 239, 188, 154, 229, 155, 186, 229, 174, 154, 229, 174, 189, 229, 186, 166, 239, 188, 140, 232, 135, 170, 229, 138, 168, 233, 128, 130, 229, 186, 148, 233, 171, 152, 229, 186, 166, 227, 128, 130, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 0, 195, 232, 135, 170, 229, 138, 168, 230, 148, 182, 231, 188, 169, 230, 150, 135, 230, 156, 172, 239, 188, 154, 229, 155, 186, 229, 174, 154, 229, 174, 189, 233, 171, 152, 239, 188, 140, 230, 150, 135, 229, 173, 151, 231, 188, 169, 230, 148, 190, 227, 128, 130, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 0, 2, 110, 52, 0, 198, 231, 156, 129, 231, 149, 165, 229, 143, 183, 230, 150, 135, 230, 156, 172, 239, 188, 154, 229, 155, 186, 229, 174, 154, 229, 174, 189, 233, 171, 152, 239, 188, 140, 232, 182, 133, 229, 135, 186, 233, 131, 168, 229, 136, 134, 231, 156, 129, 231, 149, 165, 227, 128, 130, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 229, 149, 138, 0, 15, 229, 183, 166, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 0, 7, 110, 54, 95, 110, 104, 114, 101, 0, 2, 110, 54, 0, 18, 228, 184, 173, 233, 151, 180, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 0, 15, 229, 143, 179, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 0, 45, 233, 161, 182, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 233, 161, 182, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 233, 161, 182, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 0, 60, 228, 184, 173, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 228, 184, 173, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 228, 184, 173, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 228, 184, 173, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 0, 57, 229, 186, 149, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 229, 186, 149, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 229, 186, 149, 229, 175, 185, 233, 189, 144, 230, 150, 135, 230, 156, 172, 229, 186, 149, 229, 175, 185, 233, 189, 144, 230, 150, 135, 1, 18, 229, 175, 140, 230, 150, 135, 230, 156, 172, 229, 175, 140, 91, 98, 93, 230, 150, 135, 230, 156, 172, 229, 175, 140, 91, 47, 98, 93, 230, 150, 135, 230, 156, 172, 91, 117, 93, 229, 175, 140, 230, 150, 135, 230, 156, 172, 91, 47, 117, 93, 91, 105, 93, 229, 175, 140, 230, 150, 135, 230, 156, 172, 91, 47, 105, 93, 91, 99, 111, 108, 111, 114, 61, 35, 48, 48, 102, 102, 54, 54, 93, 229, 175, 140, 230, 150, 135, 230, 156, 172, 91, 47, 99, 111, 108, 111, 114, 93, 229, 175, 140, 230, 150, 135, 230, 156, 172, 91, 115, 105, 122, 101, 61, 53, 53, 93, 229, 175, 140, 230, 150, 135, 230, 156, 172, 91, 47, 115, 105, 122, 101, 93, 91, 105, 109, 103, 93, 117, 105, 58, 47, 47, 119, 100, 114, 99, 100, 56, 114, 112, 106, 114, 108, 54, 57, 91, 47, 105, 109, 103, 93, 229, 175, 140, 230, 150, 135, 230, 156, 172, 91, 105, 109, 103, 93, 117, 105, 58, 47, 47, 119, 100, 114, 99, 100, 56, 114, 112, 106, 114, 108, 54, 49, 103, 91, 47, 105, 109, 103, 93, 10, 91, 98, 93, 114, 105, 99, 104, 116, 101, 120, 116, 228, 184, 173, 230, 150, 135, 228, 184, 141, 230, 148, 175, 230, 140, 129, 229, 138, 160, 231, 178, 151, 10, 91, 47, 98, 93, 91, 105, 93, 114, 105, 99, 104, 116, 101, 120, 116, 228, 184, 173, 230, 150, 135, 228, 184, 141, 230, 148, 175, 230, 140, 129, 230, 150, 156, 228, 189, 147, 91, 47, 105, 93, 0, 5, 110, 104, 114, 101, 50, 0, 10, 84, 101, 115, 116, 66, 117, 116, 116, 111, 110, 0, 9, 114, 97, 100, 105, 111, 99, 116, 114, 108, 0, 12, 230, 153, 174, 233, 128, 154, 230, 140, 137, 233, 146, 174, 0, 12, 229, 164, 141, 233, 128, 137, 230, 140, 137, 233, 146, 174, 0, 12, 231, 187, 132, 229, 144, 136, 230, 140, 137, 233, 146, 174, 0, 12, 231, 187, 132, 229, 144, 136, 230, 140, 137, 233, 146, 174, 0, 12, 231, 187, 132, 229, 144, 136, 230, 140, 137, 233, 146, 174, 0, 12, 231, 187, 132, 229, 144, 136, 230, 140, 137, 233, 146, 174, 0, 5, 110, 104, 114, 101, 110, 0, 7, 100, 114, 111, 112, 66, 111, 120, 0, 3, 49, 49, 49, 0, 2, 50, 50, 0, 3, 51, 51, 51, 0, 4, 52, 52, 52, 52, 0, 9, 228, 184, 139, 230, 139, 137, 230, 161, 134, 0, 6, 115, 108, 105, 100, 101, 114, 0, 5, 99, 111, 108, 111, 114, 0, 5, 110, 104, 114, 101, 52, 0, 14, 84, 101, 115, 116, 84, 114, 97, 110, 115, 105, 116, 105, 111, 110, 0, 7, 110, 54, 95, 113, 114, 116, 112, 0, 7, 110, 57, 95, 103, 105, 111, 102, 0, 8, 110, 49, 48, 95, 103, 105, 111, 102, 0, 7, 116, 101, 115, 116, 66, 116, 110, 0, 27, 229, 138, 168, 230, 149, 136, 230, 146, 173, 229, 174, 140, 229, 144, 142, 232, 174, 190, 231, 189, 174, 228, 189, 141, 231, 189, 174, 0, 8, 110, 49, 49, 95, 103, 105, 111, 102, 0, 9, 114, 101, 112, 108, 97, 121, 66, 116, 110, 0, 12, 233, 135, 141, 230, 150, 176, 230, 146, 173, 230, 148, 190, 0, 8, 110, 49, 50, 95, 101, 103, 110, 49, 0, 6, 114, 111, 116, 97, 116, 101, 0, 4, 109, 111, 118, 101, 0, 5, 115, 99, 97, 108, 101, 0, 12, 115, 99, 97, 108, 101, 95, 99, 101, 110, 116, 101, 114, 0, 11, 115, 99, 97, 108, 101, 95, 114, 105, 103, 104, 116, 0, 6, 103, 114, 111, 117, 112, 49, 0, 5, 114, 111, 117, 110, 100, 0, 4, 115, 105, 122, 101, 0, 5, 110, 104, 114, 101, 54, 0, 10, 84, 101, 115, 116, 78, 97, 116, 105, 118, 101, 0, 5, 107, 52, 48, 118, 53, 0, 12, 97, 98, 105, 108, 105, 116, 121, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 51, 0, 11, 97, 118, 97, 116, 97, 114, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 49, 0, 6, 101, 102, 102, 101, 99, 116, 0, 5, 107, 52, 48, 118, 50, 0, 9, 104, 101, 114, 111, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 52, 0, 9, 105, 116, 101, 109, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 48, 0, 5, 109, 111, 100, 101, 108, 0, 5, 107, 52, 48, 118, 54, 0, 8, 117, 115, 101, 114, 78, 97, 109, 101, 0, 5, 110, 104, 114, 101, 101, 0, 10, 84, 101, 115, 116, 76, 111, 97, 100, 101, 114, 0, 19, 232, 175, 187, 229, 143, 150, 102, 103, 117, 105, 232, 181, 132, 230, 186, 144, 239, 188, 154, 0, 26, 232, 175, 187, 229, 143, 150, 100, 111, 116, 97, 50, 229, 134, 133, 233, 131, 168, 232, 181, 132, 230, 186, 144, 239, 188, 154, 0, 7, 100, 108, 111, 97, 100, 101, 114, 0, 8, 102, 108, 111, 97, 100, 101, 114, 49, 0, 7, 110, 54, 95, 120, 117, 51, 100, 0, 12, 232, 135, 170, 231, 148, 177, 231, 188, 169, 230, 148, 190, 0, 8, 110, 49, 52, 95, 120, 117, 51, 100, 0, 8, 102, 108, 111, 97, 100, 101, 114, 52, 0, 8, 110, 49, 53, 95, 120, 117, 51, 100, 0, 3, 110, 49, 53, 0, 9, 230, 151, 160, 232, 190, 185, 230, 161, 134, 0, 8, 110, 49, 55, 95, 120, 117, 51, 100, 0, 8, 102, 108, 111, 97, 100, 101, 114, 53, 0, 8, 110, 49, 56, 95, 120, 117, 51, 100, 0, 3, 110, 49, 56, 0, 12, 230, 152, 190, 231, 164, 186, 229, 133, 168, 233, 131, 168, 0, 8, 110, 50, 48, 95, 120, 117, 51, 100, 0, 8, 102, 108, 111, 97, 100, 101, 114, 54, 0, 8, 110, 50, 49, 95, 120, 117, 51, 100, 0, 3, 110, 50, 49, 0, 12, 232, 135, 170, 229, 138, 168, 229, 164, 167, 229, 176, 143, 0, 7, 110, 56, 95, 120, 117, 51, 100, 0, 8, 102, 108, 111, 97, 100, 101, 114, 50, 0, 7, 110, 57, 95, 120, 117, 51, 100, 0, 12, 233, 128, 130, 233, 133, 141, 229, 174, 189, 229, 186, 166, 0, 8, 110, 49, 49, 95, 120, 117, 51, 100, 0, 8, 102, 108, 111, 97, 100, 101, 114, 51, 0, 8, 110, 49, 50, 95, 120, 117, 51, 100, 0, 12, 233, 128, 130, 233, 133, 141, 233, 171, 152, 229, 186, 166, 0, 8, 110, 50, 51, 95, 120, 117, 51, 100, 0, 3, 110, 50, 51, 0, 18, 117, 105, 58, 47, 47, 119, 100, 114, 99, 100, 56, 114, 112, 106, 114, 108, 54, 57, 0, 8, 110, 50, 52, 95, 120, 117, 51, 100, 0, 16, 115, 99, 97, 108, 101, 57, 103, 105, 114, 100, 108, 111, 97, 100, 101, 114, 0, 5, 110, 104, 114, 101, 102, 0, 12, 84, 101, 115, 116, 82, 101, 108, 97, 116, 105, 111, 110, 0, 2, 116, 48, 0, 2, 116, 49, 0, 9, 67, 111, 109, 98, 111, 66, 111, 120, 49, 0, 18, 117, 105, 58, 47, 47, 107, 48, 98, 107, 122, 54, 103, 49, 110, 104, 114, 101, 109, 0, 5, 110, 104, 114, 101, 113, 0, 7, 84, 101, 115, 116, 72, 117, 100, 0, 7, 110, 49, 95, 120, 117, 51, 100, 0, 7, 116, 97, 98, 76, 105, 115, 116, 0, 5, 113, 114, 116, 112, 117, 0, 10, 83, 99, 114, 111, 108, 108, 66, 97, 114, 86, 0, 6, 97, 114, 114, 111, 119, 49, 0, 7, 110, 51, 95, 113, 114, 116, 112, 0, 6, 97, 114, 114, 111, 119, 50, 0, 7, 110, 52, 95, 113, 114, 116, 112, 0, 5, 113, 114, 116, 112, 121, 0, 10, 83, 99, 114, 111, 108, 108, 66, 97, 114, 72]).buffer);
            BinCache.PrecachePackageWithArrayBuffer("uipublic", new Uint8Array([70, 71, 85, 73, 0, 0, 0, 6, 0, 0, 8, 119, 100, 114, 99, 100, 56, 114, 112, 0, 8, 117, 105, 112, 117, 98, 108, 105, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 26, 0, 0, 0, 34, 0, 0, 3, 7, 0, 0, 0, 0, 0, 0, 3, 9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 7, 0, 0, 2, 35, 3, 0, 2, 0, 3, 0, 4, 255, 254, 1, 0, 0, 0, 100, 0, 0, 0, 100, 12, 0, 0, 2, 8, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 101, 0, 0, 1, 230, 0, 0, 1, 231, 0, 0, 1, 250, 0, 0, 1, 252, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 2, 0, 24, 3, 1, 0, 8, 0, 11, 0, 22, 0, 5, 0, 0, 2, 0, 6, 0, 7, 0, 8, 0, 9, 0, 0, 0, 0, 24, 3, 1, 0, 8, 0, 11, 0, 22, 0, 10, 0, 0, 2, 0, 6, 255, 253, 0, 8, 255, 253, 0, 0, 0, 0, 4, 0, 104, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 89, 0, 104, 4, 255, 254, 255, 254, 0, 11, 0, 12, 255, 255, 255, 241, 255, 255, 255, 241, 1, 0, 0, 0, 132, 0, 0, 0, 132, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 0, 0, 1, 0, 8, 0, 1, 255, 255, 4, 14, 0, 15, 0, 3, 0, 10, 0, 0, 13, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 14, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 81, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 75, 0, 81, 0, 81, 9, 0, 16, 0, 0, 0, 17, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 255, 0, 0, 0, 0, 0, 100, 7, 1, 0, 16, 0, 61, 0, 65, 0, 77, 0, 0, 0, 85, 0, 100, 4, 255, 254, 255, 254, 0, 19, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 1, 0, 8, 0, 0, 1, 0, 1, 0, 8, 0, 1, 255, 255, 2, 14, 0, 15, 0, 0, 21, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 2, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 0, 24, 0, 0, 22, 0, 23, 0, 24, 0, 25, 1, 0, 0, 0, 79, 0, 0, 0, 81, 0, 1, 255, 254, 0, 0, 0, 0, 0, 44, 0, 0, 26, 0, 27, 0, 24, 0, 28, 1, 0, 0, 0, 20, 0, 0, 0, 20, 1, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 8, 0, 0, 0, 7, 0, 0, 0, 0, 1, 255, 254, 0, 0, 0, 0, 0, 24, 0, 0, 29, 0, 30, 0, 24, 0, 31, 1, 0, 0, 0, 212, 0, 0, 0, 60, 0, 1, 255, 254, 0, 0, 0, 0, 0, 24, 0, 0, 32, 0, 33, 0, 24, 0, 34, 1, 0, 0, 0, 209, 0, 0, 0, 60, 0, 1, 255, 254, 0, 0, 0, 0, 0, 24, 0, 0, 35, 0, 36, 0, 24, 0, 37, 1, 0, 0, 0, 160, 0, 0, 0, 40, 0, 1, 255, 254, 0, 0, 0, 0, 0, 24, 0, 0, 38, 0, 39, 0, 24, 0, 40, 1, 0, 0, 0, 160, 0, 0, 0, 40, 0, 1, 255, 254, 0, 0, 0, 0, 0, 0, 0, 41, 0, 8, 52, 118, 48, 118, 108, 102, 113, 57, 0, 9, 100, 111, 116, 97, 112, 97, 110, 101, 108, 0, 5, 99, 50, 110, 55, 49, 0, 8, 105, 116, 101, 109, 99, 101, 108, 108, 0, 12, 47, 99, 111, 109, 112, 111, 110, 101, 110, 116, 115, 47, 0, 6, 98, 117, 116, 116, 111, 110, 0, 1, 48, 0, 2, 117, 112, 0, 1, 49, 0, 4, 100, 111, 119, 110, 0, 5, 101, 109, 112, 116, 121, 0, 7, 110, 53, 95, 99, 50, 110, 55, 0, 2, 110, 53, 0, 19, 117, 105, 58, 47, 47, 119, 100, 114, 99, 100, 56, 114, 112, 106, 114, 108, 54, 49, 103, 0, 7, 110, 51, 95, 99, 50, 110, 55, 0, 13, 113, 117, 97, 108, 105, 116, 121, 76, 111, 97, 100, 101, 114, 0, 5, 107, 52, 48, 118, 52, 0, 7, 110, 50, 95, 99, 50, 110, 55, 0, 4, 105, 116, 101, 109, 0, 7, 110, 54, 95, 103, 111, 97, 102, 0, 2, 110, 54, 0, 18, 117, 105, 58, 47, 47, 52, 118, 48, 118, 108, 102, 113, 57, 100, 110, 51, 118, 55, 0, 6, 106, 114, 108, 54, 49, 103, 0, 11, 103, 103, 95, 99, 104, 97, 116, 95, 115, 101, 108, 0, 10, 47, 116, 101, 120, 116, 117, 114, 101, 115, 47, 0, 10, 106, 114, 108, 54, 49, 103, 46, 112, 110, 103, 0, 5, 106, 114, 108, 54, 57, 0, 12, 103, 103, 95, 120, 105, 97, 111, 100, 105, 95, 48, 49, 0, 9, 106, 114, 108, 54, 57, 46, 112, 110, 103, 0, 6, 110, 104, 114, 101, 49, 108, 0, 14, 83, 75, 73, 76, 76, 95, 67, 65, 84, 69, 95, 79, 70, 70, 0, 10, 110, 104, 114, 101, 49, 108, 46, 112, 110, 103, 0, 6, 110, 104, 114, 101, 49, 109, 0, 13, 83, 75, 73, 76, 76, 95, 67, 65, 84, 69, 95, 79, 78, 0, 10, 110, 104, 114, 101, 49, 109, 46, 112, 110, 103, 0, 6, 110, 104, 114, 101, 49, 110, 0, 6, 89, 78, 95, 111, 102, 102, 0, 10, 110, 104, 114, 101, 49, 110, 46, 112, 110, 103, 0, 6, 110, 104, 114, 101, 49, 111, 0, 5, 89, 78, 95, 111, 110, 0, 10, 110, 104, 114, 101, 49, 111, 46, 112, 110, 103]).buffer);
            BinCache.PrecachePackageWithArrayBuffer("dotapanel", new Uint8Array([70, 71, 85, 73, 0, 0, 0, 6, 0, 0, 8, 52, 118, 48, 118, 108, 102, 113, 57, 0, 9, 100, 111, 116, 97, 112, 97, 110, 101, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 26, 0, 0, 0, 30, 0, 0, 6, 103, 0, 0, 0, 0, 0, 0, 6, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 203, 3, 0, 0, 0, 1, 0, 2, 255, 254, 1, 0, 0, 7, 128, 0, 0, 4, 56, 12, 0, 0, 0, 176, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 142, 0, 0, 0, 143, 0, 0, 0, 162, 0, 0, 0, 164, 0, 0, 0, 0, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 89, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 89, 3, 255, 254, 255, 254, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 128, 0, 0, 4, 56, 0, 0, 0, 0, 63, 76, 204, 205, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 1, 0, 0, 0, 1, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 0, 255, 254, 63, 128, 0, 0, 0, 63, 76, 204, 205, 255, 254, 0, 0, 0, 0, 0, 192, 3, 0, 5, 0, 6, 0, 2, 255, 254, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 165, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 143, 0, 0, 0, 144, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 0, 192, 3, 0, 8, 0, 9, 0, 2, 255, 254, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 165, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 143, 0, 0, 0, 144, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 0, 192, 3, 0, 10, 0, 11, 0, 2, 255, 254, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 165, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 143, 0, 0, 0, 144, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 0, 192, 3, 0, 12, 0, 13, 0, 2, 255, 254, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 165, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 143, 0, 0, 0, 144, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 0, 192, 3, 0, 14, 0, 15, 0, 2, 255, 254, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 165, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 143, 0, 0, 0, 144, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 0, 192, 3, 0, 16, 0, 17, 0, 2, 255, 254, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 165, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 143, 0, 0, 0, 144, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 0, 192, 3, 0, 18, 0, 19, 0, 2, 255, 254, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 165, 8, 0, 0, 0, 0, 34, 0, 0, 0, 47, 0, 0, 0, 49, 0, 0, 0, 143, 0, 0, 0, 144, 0, 0, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 90, 7, 1, 0, 16, 0, 61, 0, 65, 0, 67, 0, 0, 0, 75, 0, 90, 4, 255, 254, 255, 254, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 0, 0, 0, 63, 128, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 255, 254, 255, 254, 255, 255, 0, 0, 1, 255, 255, 2, 14, 0, 15, 0, 255, 254, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 254, 1, 255, 255, 255, 254, 0, 0, 0, 0, 0, 0, 0, 0, 255, 254, 255, 254, 0, 0, 255, 254, 0, 0, 0, 0, 0, 24, 0, 0, 20, 0, 21, 0, 2, 0, 22, 1, 0, 0, 0, 128, 0, 0, 0, 128, 0, 1, 255, 254, 0, 0, 0, 0, 0, 0, 0, 23, 0, 5, 103, 111, 97, 102, 56, 0, 9, 66, 108, 97, 99, 107, 77, 97, 115, 107, 0, 1, 47, 0, 7, 110, 48, 95, 103, 111, 97, 102, 0, 2, 110, 48, 0, 5, 107, 52, 48, 118, 48, 0, 9, 68, 79, 84, 65, 77, 111, 100, 101, 108, 0, 7, 110, 48, 95, 100, 110, 51, 118, 0, 5, 107, 52, 48, 118, 49, 0, 10, 68, 79, 84, 65, 69, 102, 102, 101, 99, 116, 0, 5, 107, 52, 48, 118, 50, 0, 13, 68, 79, 84, 65, 72, 101, 114, 111, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 51, 0, 15, 68, 79, 84, 65, 65, 118, 97, 116, 97, 114, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 52, 0, 13, 68, 79, 84, 65, 73, 116, 101, 109, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 53, 0, 16, 68, 79, 84, 65, 65, 98, 105, 108, 105, 116, 121, 73, 109, 97, 103, 101, 0, 5, 107, 52, 48, 118, 54, 0, 12, 68, 79, 84, 65, 85, 115, 101, 114, 78, 97, 109, 101, 0, 5, 100, 110, 51, 118, 55, 0, 9, 101, 109, 112, 116, 121, 95, 112, 110, 103, 0, 9, 100, 110, 51, 118, 55, 46, 112, 110, 103]).buffer);
        }
    }

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
            UIPackage.loadPackageWithArrayBuffer(this.package, BinCache.GetPackageData(this.package));
            this.root = UIPackage.createObject(this.package, this.packageItem);
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
                    this.maskComp = UIPackage.createObject("dotapanel", "BlackMask");
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

    class uipublic_itemcell_data extends GButton {
        onConstruct() {
            this.panelName = "uipublic_itemcell";
            this.button_c = this.getController("button");
            this.empty_c = this.getController("empty");
            this.n5_GLoader = (this.getChild("n5"));
            this.qualityLoader_GLoader = (this.getChild("qualityLoader"));
            this.item_GDOTAItemImage = (this.getChild("item"));
            this.n6_GLoader = (this.getChild("n6"));
        }
    }

    class uipublic_itemcell extends uipublic_itemcell_data {
        constructor() {
            super();
            this.onEvent('onactivate', this.onCellClicked, this);
        }
        get itemname() {
            return this._itemname;
        }
        set itemname(value) {
            this._itemname = value;
            if (value == "") {
                this.empty_c.setSelectedIndex(1);
            }
            else {
                this.empty_c.setSelectedIndex(0);
                this.item_GDOTAItemImage.element.itemname = value;
            }
        }
        onCellClicked() {
        }
        OnShow() {
        }
        OnClose() {
        }
    }

    class ViewManager {
        constructor() {
            $.ViewManager = this;
            this.allViews = new Map();
            this.root = new GComponent("ViewRootComp");
            this.root.SetNativeParent($('#ViewRoot'));
            this.root.setFullScreen();
            $.TraceBack = function () {
                {
                    $.Msg(new Error().stack);
                }
            };
            PackageRegister.Init();
            UIConfig.buttonSound = "General.ButtonClick";
            //预载入 可提前到游戏载入阶段
            BinCache.PreloadPackage("dotapanel");
            BinCache.PreloadPackage("uipublic");
            //注册一些自定义类型 后面复用这些控件的时候会自动匹配类型
            $.UIObjectFactory.setExtensionWithPkg("uipublic", "itemcell", uipublic_itemcell);
        }
        static Get() {
            if (ViewManager.inst == null) {
                ViewManager.inst = new ViewManager();
            }
            return ViewManager.inst;
        }
        open(ctor, ...args) {
            let clsType = ctor.name;
            if (!this.allViews.has(clsType)) {
                let view = BaseView.GetCacheView(clsType);
                if (!view) {
                    view = new ctor();
                }
                view.viewName = clsType;
                this.allViews.set(clsType, view);
                this.addChild(view.root);
            }
            this.allViews.get(clsType).__OnShow(args);
        }
        close(name) {
            if (this.allViews.has(name)) {
                this.allViews.get(name).__OnClose();
                this.allViews.delete(name);
            }
        }
        closeAll() {
            for (var name in this.allViews) {
                this.allViews.get(name).__OnClose();
            }
            this.allViews.clear();
        }
        addChild(child) {
            this.root.addChild(child);
        }
        clearTempNode() {
            $('#HiddenRoot').RemoveAndDeleteChildren();
        }
    }

    class test_TestList_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestList";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.n0_GList = (this.getChild("n0"));
            this.n1_GTextField = (this.getChild("n1"));
            this.n2_GList = (this.getChild("n2"));
            this.n3_GTextField = (this.getChild("n3"));
            this.virtualList_GList = (this.getChild("virtualList"));
            this.n5_GTextField = (this.getChild("n5"));
            this.n7_GComponent = (this.getChild("n7"));
            this.n8_GTextField = (this.getChild("n8"));
            this.n9_GComponent = (this.getChild("n9"));
            this.n10_GComponent = (this.getChild("n10"));
            this.n11_GTextField = (this.getChild("n11"));
            this.n12_GTextField = (this.getChild("n12"));
        }
    }
    class test_TestLabel_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestLabel";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.n0_GTextField = (this.getChild("n0"));
            this.n1_GTextField = (this.getChild("n1"));
            this.n2_GTextField = (this.getChild("n2"));
            this.n3_GTextField = (this.getChild("n3"));
            this.n4_GTextField = (this.getChild("n4"));
            this.n5_GTextField = (this.getChild("n5"));
            this.n6_GTextField = (this.getChild("n6"));
            this.n7_GTextField = (this.getChild("n7"));
            this.n8_GTextField = (this.getChild("n8"));
            this.n9_GTextField = (this.getChild("n9"));
            this.n10_GTextField = (this.getChild("n10"));
            this.n11_GRichTextField = (this.getChild("n11"));
        }
    }
    class test_TestButton_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestButton";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.radioctrl_c = this.getController("radioctrl");
            this.n0_GButton = (this.getChild("n0"));
            this.n1_GButton = (this.getChild("n1"));
            this.n2_GButton = (this.getChild("n2"));
            this.n3_GButton = (this.getChild("n3"));
            this.n4_GButton = (this.getChild("n4"));
            this.n5_GButton = (this.getChild("n5"));
            this.dropBox_GComboBox = (this.getChild("dropBox"));
            this.slider_GSlider = (this.getChild("slider"));
            this.color_t = this.getTransition("color");
        }
    }
    class test_TestTransition_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestTransition";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.n0_GGraph = (this.getChild("n0"));
            this.n1_GGraph = (this.getChild("n1"));
            this.n2_GGraph = (this.getChild("n2"));
            this.n3_GGraph = (this.getChild("n3"));
            this.n4_GGraph = (this.getChild("n4"));
            this.n5_GGraph = (this.getChild("n5"));
            this.n6_GGraph = (this.getChild("n6"));
            this.n9_GGraph = (this.getChild("n9"));
            this.testBtn_GButton = (this.getChild("testBtn"));
            this.replayBtn_GButton = (this.getChild("replayBtn"));
            this.n12_GGraph = (this.getChild("n12"));
            this.rotate_t = this.getTransition("rotate");
            this.move_t = this.getTransition("move");
            this.scale_t = this.getTransition("scale");
            this.scale_center_t = this.getTransition("scale_center");
            this.scale_right_t = this.getTransition("scale_right");
            this.group1_t = this.getTransition("group1");
            this.color_t = this.getTransition("color");
            this.round_t = this.getTransition("round");
            this.size_t = this.getTransition("size");
        }
    }
    class test_TestNative_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestNative";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.abilityImage_GDOTAAbilityImage = (this.getChild("abilityImage"));
            this.avatarImage_GDOTAAvatarImage = (this.getChild("avatarImage"));
            this.effect_GDOTAScenePanel = (this.getChild("effect"));
            this.heroImage_GDOTAHeroImage = (this.getChild("heroImage"));
            this.itemImage_GDOTAItemImage = (this.getChild("itemImage"));
            this.model_GDOTAScenePanel = (this.getChild("model"));
            this.userName_GDOTAUserName = (this.getChild("userName"));
        }
    }
    class test_TestLoader_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestLoader";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.n3_GTextField = (this.getChild("n3"));
            this.n4_GTextField = (this.getChild("n4"));
            this.dloader_GLoader = (this.getChild("dloader"));
            this.floader1_GLoader = (this.getChild("floader1"));
            this.n6_GTextField = (this.getChild("n6"));
            this.floader4_GLoader = (this.getChild("floader4"));
            this.n15_GTextField = (this.getChild("n15"));
            this.floader5_GLoader = (this.getChild("floader5"));
            this.n18_GTextField = (this.getChild("n18"));
            this.floader6_GLoader = (this.getChild("floader6"));
            this.n21_GTextField = (this.getChild("n21"));
            this.floader2_GLoader = (this.getChild("floader2"));
            this.n9_GTextField = (this.getChild("n9"));
            this.floader3_GLoader = (this.getChild("floader3"));
            this.n12_GTextField = (this.getChild("n12"));
            this.n23_GLoader = (this.getChild("n23"));
            this.scale9girdloader_GLoader = (this.getChild("scale9girdloader"));
        }
    }
    class test_TestRelation_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestRelation";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.n0_GGraph = (this.getChild("n0"));
            this.t0_t = this.getTransition("t0");
            this.t1_t = this.getTransition("t1");
        }
    }
    class test_TestHud_data extends BaseView {
        constructor() {
            super();
            this.package = "test";
            this.packageItem = "TestHud";
            this.OnInit();
        }
        OnInit() {
            super.OnInit();
            this.n1_GGraph = (this.getChild("n1"));
            this.tabList_GList = (this.getChild("tabList"));
        }
    }

    class test_TestButton extends test_TestButton_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
            this.dropBox_GComboBox.onEvent('status_changed', this.onDropdownUpdate, this);
            this.slider_GSlider.onEvent('changed', this.onSliderUpdate, this);
        }
        onDropdownUpdate() {
            // $.Msg(this.dropBox_GComboBox.selectedIndex);
        }
        OnClose() {
        }
        onSliderUpdate() {
            // $.Msg(this.slider_GSlider.value);
        }
    }

    class test_TestLabel extends test_TestLabel_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
        }
        OnClose() {
        }
    }

    class test_TestList extends test_TestList_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
            this.virtualList_GList.setVirtual();
            let listData = [];
            for (let i = 0; i < 1000; i++) {
                listData.push("时光机" + i);
            }
            this.virtualList_GList.itemRenderer = (index, obj) => {
                let comp = obj;
                comp.getChild('title').text = listData[index];
            };
            this.virtualList_GList.setVirtual();
            this.virtualList_GList.numItems = listData.length;
        }
        OnClose() {
        }
    }

    class test_TestLoader extends test_TestLoader_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
            let url = UIPackage.getItemAssetPath("uipublic", "SKILL_CATE_ON");
            this.floader1_GLoader.url = url;
            this.floader2_GLoader.url = url;
            this.floader3_GLoader.url = url;
            this.floader4_GLoader.url = url;
            this.floader5_GLoader.url = url;
            this.floader6_GLoader.url = url;
            this.scale9girdloader_GLoader.url = "ui://wdrcd8rpjrl69";
            this.dloader_GLoader.url = "file://{images}/banners/dw_mo.psd";
        }
        OnClose() {
        }
    }

    class test_TestNative extends test_TestNative_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
            var playerInfo = Game.GetPlayerInfo(Players.GetLocalPlayer());
            var steamid = playerInfo.player_steamid;
            this.avatarImage_GDOTAAvatarImage.element.steamid = steamid;
            this.userName_GDOTAUserName.element.steamid = steamid;
            this.heroImage_GDOTAHeroImage.element.heroname = "npc_dota_hero_wisp";
            this.effect_GDOTAScenePanel.element.SetEffectWithParams("particles/ui/hud/autocasting_square.vpcf", true, 100);
            this.model_GDOTAScenePanel.element.setModelWithParams("npc_dota_hero_wisp");
            this.abilityImage_GDOTAAbilityImage.element.abilityname = "troll_warlord_whirling_axes_melee";
            this.abilityImage_GDOTAAbilityImage.onEvent('onmouseover', this.onAbilityHover, this);
            this.abilityImage_GDOTAAbilityImage.onEvent('onmouseout', this.onAbilityOut, this);
        }
        onAbilityHover() {
            $.DispatchEvent("DOTAShowAbilityTooltipForEntityIndex", this.abilityImage_GDOTAAbilityImage.element.nativePanel, "troll_warlord_whirling_axes_melee", Players.GetLocalPlayerPortraitUnit());
        }
        onAbilityOut() {
            $.DispatchEvent("DOTAHideAbilityTooltip", this.avatarImage_GDOTAAvatarImage.element.nativePanel);
        }
        OnClose() {
        }
    }

    class test_TestRelation extends test_TestRelation_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
        }
        OnClose() {
        }
    }

    class test_TestTransition extends test_TestTransition_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
            // UIConfig.useNativeTransition = false;
            this.testBtn_GButton.onEvent('onactivate', () => {
                GTween.to2(500, 500, 100, 100, 1, ActionType.XY).setTarget(this.testBtn_GButton, this.testBtn_GButton.setPosition);
                GTween.to2(1, 1, 0.5, 0.5, 1, ActionType.Scale).setTarget(this.testBtn_GButton, this.testBtn_GButton.setScale);
                GTween.to(0, 180, 1, ActionType.Rotation).setTarget(this.testBtn_GButton, this.testBtn_GButton.setRotation);
                GTween.to2(100, 100, 200, 200, 1, ActionType.XY).setDelay(1).setTarget(this.testBtn_GButton, this.testBtn_GButton.setPosition);
            });
            this.replayBtn_GButton.onEvent('onactivate', () => {
                this.round_t.play();
            });
        }
        OnClose() {
        }
    }

    class test_TestHud extends test_TestHud_data {
        constructor() {
            super();
            //add code to here
        }
        OnInit() {
            this.isFullScreen = true;
            super.OnInit();
        }
        OnShow() {
            let listData = [test_TestButton, test_TestLabel, test_TestList, test_TestLoader, test_TestNative, test_TestRelation, test_TestTransition];
            this.tabList_GList.itemRenderer = (index, obj) => {
                let comp = obj;
                comp.getChild('title').text = listData[index].name;
            };
            this.tabList_GList.onEvent('click_item', () => {
                for (let i = 0; i < listData.length; i++) {
                    if (i == this.tabList_GList.selectedIndex) {
                        ViewManager.Get().open(listData[i]);
                    }
                    else {
                        ViewManager.Get().close(listData[i].name);
                    }
                }
            });
            this.tabList_GList.setVirtual();
            this.tabList_GList.numItems = listData.length;
        }
        OnClose() {
        }
    }

    class ExampleUI {
        constructor(panel) {
            this.panel = panel;
            ViewManager.Get().clearTempNode();
            ViewManager.Get().open(test_TestHud);
        }
    }
    new ExampleUI($.GetContextPanel());

}));
