<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="LoginController" namespace="com.yonyou.placeorder" id="Login">
    <import ref="Login.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0">
        <div id="wloginpanel" onload="this.pageonload()">
            <div id="panel2">
                <div id="panel0"/>
                <image src="logo_yonyou.png" zoom="true" id="image0" scaletype="fitcenter"/>
                <label id="label3"/> 
            </div>
            <div id="wuserpanel">
                <image src="fa_user.png" id="wuserimg" scaletype="fitcenter"/>
                <input bindfield="acount" maxlength="256" id="wusertext" placeholder="请输入手机号" type="text"/> 
            </div>
            <div id="wpasspanel">
                <image src="fa_password.png" id="wpassimg" scaletype="fitcenter"/>
                <input bindfield="password" maxlength="256" id="wpasstext" placeholder="请输入密码" type="password"/> 
            </div>
            <div id="wforgetpasspanel">
                <input checked="checked" id="remeber" type="checkbox"/>
                <label id="wforgetpasslabel" class="linklabelclass">记住密码</label>
                <label onclick="this.label1_onclick()" id="label1" class="linklabelclass">服务器设置</label> 
            </div>
            <input onclick="login()" id="wloginbutton" type="button" value="登    录" class="buttonclass loginbuttonclass"/>
            <div id="panel1"></div> 
        </div> 
    </div> 
</window>
