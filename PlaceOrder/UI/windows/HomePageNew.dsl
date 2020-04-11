<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="HomePageNewController" onrestart="this.restart()" namespace="com.yonyou.placeorder" id="HomePageNew">
    <import ref="HomePageNew.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0">
        <div id="panel0" onload="this.pageOnload()">
            <div id="panel3">
                <div id="paneleft"/>
                <label id="label0">金 圆 水 泥</label>
                <div id="panelright">
                    <input imagebuttontype="icon" istogglebutton="false" onclick="this.usercenter_onclick()" checked="false" id="usercenter" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
                </div> 
            </div>
            <web:menu startpage="menu.html" id="webcontrolmenu"/> 
        </div> 
    </div> 
</window>
