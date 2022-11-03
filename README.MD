# Note
1.UIProject中的plugins目录是必须的，他会决定导出的ts代码格式以及界面数据。<BR>
2.关于动效：目前支持高帧率和低帧率两种。
当 `UIConfig.useNativeTransition = true` 并且使用的动效类型在下列类型中时，会使用高帧率动画。
其他的情况下（包括Tween类方法的显式调用）都会使用低帧率（其实也可以在Lua端通过控制台提升UI渲染频率，这里不做推荐）。
```
enum ActionType {
    XY = 0,
    Size = 1,
    Scale = 2,
    Alpha = 4,
    Rotation = 5,
    Color = 6,
    Skew = 13,
}
```
3.九宫格：与Unity平台的有差异，插件会将图切成9份来还原九宫图的效果（无力吐槽这翻九倍的消耗）。


# 建议

1.由于Dota2阉割了Web的不少特性，你可能会遇到编辑器生效，游戏内不生效的问题。<BR>
2.项目结构为
```
|-- UIProject
|-- content
|-- game
|-- node_modules
```
其中content和game为软连接，例如：
```
需要先将对应目录(panorama)拷贝到对应的addon目录下，然后删掉当前目录(content)，再进行软连接（dota2不认软连接，但是版本控制软件是认的）。
mklink /J game "C:\Games\steamapps\common\dota 2 beta\game\dota_addons\testlink" 
mklink /J content "C:\Games\steamapps\common\dota 2 beta\content\dota_addons\testlink"
```

# Q & A
Q:如何编译导出的图片到vtex_c?<BR>
A:在custom_ui_manifest.xml中引用compile_helper.xml，这个平时是不引用的，需要编译图片才开出来，这个编译需要运行当前mod才能生效，可以自行删掉这里的数据，插件也会在导出后几秒内自动删掉。如果要离线生成，可以借助resourcecompiler.exe
```
<Panel>
    <CustomUIElement type="Hud" layoutfile="file://{resources}/layout/custom_game/main.xml" />
    <CustomUIElement type="Hud" layoutfile="file://{resources}/layout/custom_game/fgui/compile_helper.xml" />
</Panel>
```

Q:如何在UI中使用kv表数据？<BR>
A1:在Lua端调用LoadKeyValues然后使用json组件encode成字符串，存到UI那边<BR>
A2:直接使用kv解析器（git上应该有比较多的实现，js和c#都有）将kv解析成json字符串或者json结构体存到UI那边<BR>


Q:如何分别导出继承自GComponent和BaseView的组件？<BR>
A:这个规则目前写死在导出插件里面，/view*目录下面的会继承BaseView，其他的则继承GComponent<BR>
