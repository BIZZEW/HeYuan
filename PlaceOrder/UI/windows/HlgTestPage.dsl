<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="HlgTestPage" controller="HlgTestPageController" namespace="com.yonyou.placeorder">
    <import ref="HlgTestPage.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <div id="wloginpanel">
            <div id="wuserpanel">
                <image id="wuserimg" scaletype="fitcenter" src="fa_user.png"/>
                <input id="wusertext" bindfield="telephone" maxlength="256" placeholder="手机\\用户名\\邮箱" type="text"/> 
            </div>
            <div id="wpasspanel">
                <image id="wpassimg" scaletype="fitcenter" src="fa_password.png"/>
                <input id="wpasstext" bindfield="password" maxlength="256" placeholder="密码" type="password"/> 
            </div>
            <input id="wloginbutton" value="登录" class="buttonclass loginbuttonclass" onclick="this.wloginbutton_onclick()" type="button"/>
            <input id="txt_ip" bindfield="ip" maxlength="256" placeholder="" value="172.18.6.211" type="text"/>
            <input id="txt_port" bindfield="port" maxlength="256" placeholder="文本输入框" value="8081" type="text"/>
            <div id="pnl_btns">
                <input id="btn_createtbl" value="建表" class="textbtnclass" onclick="this.btn_createtbl_onclick()" type="button"/>
                <input id="btn_add" value="新增" class="textbtnclass" onclick="this.btn_add_onclick()" type="button"/>
                <input id="btn_query" value="查询" class="textbtnclass" onclick="this.btn_query_onclick()" type="button"/>
                <input id="btn_test" value="测试" class="textbtnclass" onclick="this.btn_test_onclick()" type="button"/> 
            </div>
            <div id="panel2">
                <label id="lbl_availgoods" bindfield="lbl_availgoods">可售商品</label>
                <label id="lbl_goagref" onclick="this.lbl_goagref_onclick()">&gt;</label> 
            </div>
            <div id="panel0">
                <picker id="picker_license1" showsSelectionIndicator="true" onload="this.pickOnload()">
                    <pickeritem onselectedchange="" bindfield="" id="picker_license1_0" value="京" datasource="license1s"/> 
                </picker>
                <input id="textbox0" maxlength="256" placeholder="1" type="text"/>
                <input id="textbox1" maxlength="256" placeholder="2" type="text"/>
                <input id="btn_picker" value="京" class="textbtnclass" onclick="this.openPicker()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
