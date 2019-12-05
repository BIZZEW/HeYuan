<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="WebViewWindow" controller="WebViewWindowController" namespace="com.yonyou.placeorder">
    <import ref="WebViewWindow.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <navigatorbar id="navigatorbar0" title="用户协议" class="navigatorbarclass">
            <input id="btn_back" value="返回" class="ngbbuttonclass" onclick="this.backOnclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <webView id="webview"/> 
    </div> 
</window>
