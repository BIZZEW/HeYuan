<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PersonalCenter" canvaswidth="375" canvasheight="667" orientation="vertical" controller="PersonalCenterController" namespace="com.yonyou.placeorder">
    <import ref="PersonalCenter.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <div id="panel0">
            <Scrollview id="Scrollview_panel16" weight="1" height="0" width="fill" hScrollEnabled="disabled">
                <div id="panel16">
                    <div id="panel17">
                        <div id="panel1">
                            <input id="imgbtn_back" imagebuttontype="icon" value="图标名称" istogglebutton="false" class="imagebuttonclass" onclick="this.goback()" type="imagebutton" checked="false"/>
                            <label id="label9">个人中心</label>
                            <label id="label10"/> 
                        </div>
                        <image id="icon" scaletype="fitxy" src="defualticon.png" roundstyle="circle"/>
                        <label id="telephone"/> 
                    </div>
                    <div id="panel4"/>
                    <label id="label0">客户默认信息</label>
                    <div id="div_customerinfo">
                        <div id="panel18" onclick="this.changecustemor()">
                            <label id="label3">客户：</label>
                            <label id="customer" maxlength="256">请选择客户</label>
                            <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                        </div>
                        <div id="panel20" onclick="this.changesellers()">
                            <label id="label4">销售单位：</label>
                            <label id="seller" maxlength="256">请选择销售单位</label>
                            <image id="image4" scaletype="fitcenter" src="arrow.png"/> 
                        </div>
                        <div id="panel21" onclick="this.changeposter()">
                            <label id="label5">发货企业：</label>
                            <label id="poster" maxlength="256">请选择发货企业</label>
                            <image id="image5" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <label id="label2">供应商默认信息</label>
                    <div id="div_supplierinfo">
                        <div id="panel22" onclick="this.changevender()">
                            <label id="label6">供应商：</label>
                            <label id="vender" maxlength="256">请选择供应商</label>
                            <image id="image6" scaletype="fitcenter" src="arrow.png"/> 
                        </div>
                        <div id="panel23" onclick="this.changebuyer()">
                            <label id="label7">采购单位：</label>
                            <label id="buyer" maxlength="256">请选择采购单位</label>
                            <image id="image7" scaletype="fitcenter" src="arrow.png"/> 
                        </div>
                        <div id="panel5" onclick="this.changegeter()">
                            <label id="label8">收货企业：</label>
                            <label id="getter" maxlength="256">请选择收货企业</label>
                            <image id="image8" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <div id="panel24" onclick="this.changepwd()">
                        <image id="image13" scaletype="fitcenter" src="icon_setting.png"/>
                        <label id="label1">修改密码</label>
                        <image id="image9" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <input id="btn_logout" value="退出登录" class="textbtnclass" onclick="this.login()" type="button"/> 
                </div>
            </Scrollview> 
        </div> 
    </div> 
</window>
