# Build
```
cd src_ui
npm install
gulp build
```

# Note
1.UIProject中的plugins目录是必须的，他会决定导出的ts代码格式以及界面数据。<BR>
2.项目结构推荐为
```
|-- UIProject
|-- content
|-- src_ui
```
其中content为软连接，例如：
```
需要先将对应目录(panorama)拷贝到对应的addon目录下，然后删掉当前目录(content)，再进行软连接（dota2不认软连接，但是版本控制软件是认的）。
mklink /J content "C:\Games\steamapps\common\dota 2 beta\content\dota_addons\xxx"
```
3.禁止使用FairyGUI的批量导出，因为这样会使插件的编译图片功能失效。<BR>
4.为了防止跟其他的ts项目冲突以及方便后续适配ts直译，将ts项目挪到单独的src_ui目录中<BR>

# Q & A
Q:如何编译图片到vtex_c?<BR>
A:导出后会在panorama目录下生成一个fgui_compile.vpdi文件，里面包含了需要编译的图片，需要在AssetBrowser中手动选中该文件，然后会自动编译所有的图片。

Q:如何在UI中使用kv表数据？<BR>
A1:在Lua端调用LoadKeyValues然后使用json组件encode成字符串，存到UI那边<BR>
A2:直接使用kv解析器（git上应该有比较多的实现，js和c#都有）将kv解析成json字符串或者json结构体存到UI那边<BR>


Q:如何分别导出继承自GComponent和BaseView的组件？<BR>
A:这个规则目前写死在导出插件里面，/view*目录下面的会继承BaseView，其他的则继承GComponent<BR>
