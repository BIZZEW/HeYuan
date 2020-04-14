<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="Register" controller="RegisterController" namespace="com.yonyou.placeorder">
    <import ref="Register.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="用户注册" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/> 
        </navigatorbar>
        <div id="panel0">
            <input id="textbox0" maxlength="256" placeholder="请输入您的手机号" type="text"/> 
        </div>
        <div id="panel1">
            <input id="textbox1" maxlength="256" placeholder="请输入您的密码" type="text"/> 
        </div>
        <div id="panel2">
            <input id="textbox2" maxlength="256" placeholder="请再次输入您的密码" type="text"/> 
        </div>
        <div id="panel3">
            <input id="textbox3" maxlength="256" placeholder="请输入验证码" type="text"/>
            <input id="sendmessage" value="获取验证码" class="textbtnclass" onclick="this.button1_onclick()" type="button"/> 
        </div>
        <div id="panel4">
            <input id="cbox_agree" type="checkbox" onchange="this.agreeOnchange()"/>
            <label id="label1">同意注册协议</label>
            <div id="panel6" onclick="this.lookAgreement()">
                <label id="label0">查看协议</label>
                <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
            </div> 
        </div>
        <div id="panel5">
            <input id="btn_register" value="立即注册" class="textbtnclass" onclick="this.button2_onclick()" type="button" disabled="disabled"/> 
        </div> 
    </div> 
</window>
