<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Matest" controller="MatestController" namespace="com.yonyou.placeorder">
    <import ref="Matest.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <div id="wloginpanel">
            <navigatorbar id="navigatorbar0" title="MA Server" class="navigatorbarclass">
                <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
                <label id="label2"/> 
            </navigatorbar>
            <div id="wotherpanel">
                <div id="panel0">
                    <label id="label0" visible="false">*</label>
                    <label id="label1">IP</label>
                    <input id="textip" bindfield="ip" maxlength="256" onload="this.loadhost()" value="172.16.4.242" type="text"/> 
                </div>
                <div id="panel2">
                    <label id="label4" visible="false">*</label>
                    <label id="label5">PORT</label>
                    <input id="textport" bindfield="port" maxlength="256" value="9081" type="text"/> 
                </div>
                <input id="wloginbutton" value="MA连接测试" class="buttonclass loginbuttonclass" onclick="this.wloginbutton_onclick()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
