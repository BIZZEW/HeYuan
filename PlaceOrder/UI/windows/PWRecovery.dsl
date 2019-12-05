<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PWRecovery" controller="PWRecoveryController" namespace="com.yonyou.placeorder">
    <import ref="PWRecovery.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <div id="viewPage0">
        <div id="panel0">
            <navigatorbar id="navigatorbar0" title="找回密码" class="navigatorbarclass">
                <input id="button0" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/>
                <label id="label0"/> 
            </navigatorbar> 
        </div>
        <div id="panel1">
            <input id="txt_telephone" maxlength="256" placeholder="请输入手机号码" type="text"/> 
        </div>
        <div id="panel2">
            <input id="txt_vcode" maxlength="256" placeholder="请输入验证码" type="text"/>
            <input id="sendmessage" value="获取验证码" class="textbtnclass" onclick="this.sendmessage_onclick()" type="button"/> 
        </div>
        <div id="panel3">
            <input id="txt_password1" maxlength="256" placeholder="请输入新密码" type="text"/> 
        </div>
        <input id="txt_password2" maxlength="256" placeholder="请确认新密码" type="text"/>
        <div id="panel4">
            <input id="button2" value="提   交" class="textbtnclass" onclick="this.button2_onclick()" type="button"/> 
        </div> 
    </div> 
</window>
