<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="NotifcationWindow" controller="NotifcationWindowController" namespace="com.yonyou.placeorder">
    <import ref="NotifcationWindow.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <navigatorbar id="navigatorbar0" title="消息" class="navigatorbarclass">
            <input id="button0" class="buttonclass" onclick="this.returnOnclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <search id="txt_search" placeholder="搜索" localstorage="true" onsearch="this.onsearch()"/>
        <listView id="listviewdefine0" bindfield="datas" onuprefresh="this.onup()" ondownrefresh="this.ondown()" collapsed="true">
            <div id="panel0">
                <div id="panel3">
                    <label id="label4">时间：</label>
                    <label id="label5" bindfield="time">时间</label> 
                </div>
                <div id="panel1">
                    <label id="label1">标题：</label>
                    <label id="label2" bindfield="title">标题</label> 
                </div>
                <div id="panel2">
                    <label id="label3">内容：</label>
                    <label id="label6" bindfield="content" type="multiline">内容</label> 
                </div> 
            </div> 
        </listView> 
    </div> 
</window>
