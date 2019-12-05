<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="ModifyPassword" controller="ModifyPasswordController" namespace="com.yonyou.placeorder">
    <import ref="ModifyPassword.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="修改密码" class="navigatorbarclass">
            <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
            <label id="label0"/> 
        </navigatorbar>
        <div id="panel0">
            <input id="txt_oldpw" maxlength="256" placeholder="请输入原密码" type="text"/> 
        </div>
        <div id="panel1">
            <input id="txt_newpw1" maxlength="256" placeholder="请输入新密码" type="text"/> 
        </div>
        <div id="panel2">
            <input id="txt_newpw2" maxlength="256" placeholder="请再次输入新密码" type="text"/> 
        </div>
        <div id="panel3" onclick="this.panel3_onload()">
            <input id="button1" value="完   成" class="textbtnclass" onclick="this.panel3_onload()" type="button"/> 
        </div> 
    </div> 
</window>
