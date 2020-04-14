<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" canvaswidth="375" orientation="vertical" controller="PersonalCenterController" canvasheight="667" namespace="com.yonyou.placeorder" id="PersonalCenter">  
    <import ref="PersonalCenter.css" type="css"/>  
    <link href="sys/theme.css" type="text/css"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <div id="viewPage0" onload="this.pageOnload()"> 
        <div id="panel0"> 
            <Scrollview width="fill" hScrollEnabled="disabled" weight="1" id="Scrollview_panel16" height="0"> 
                <div id="panel16"> 
                    <div id="panel17"> 
                        <image roundstyle="circle" src="defualticon.png" id="icon" scaletype="fitxy"/>  
                        <label id="telephone"/> 
                    </div>  
                    <!-- <div id="panel1">
                        <input imagebuttontype="icon" istogglebutton="false" onclick="this.goback()" checked="false" id="imgbtn_back" type="imagebutton" value="图标名称" class="imagebuttonclass"/>
                        <label id="label9">个人中心</label>
                        <label id="label10"/> 
                    </div> -->  
                    <navigatorbar id="navigatorbar0" title="个人中心" class="navigatorbarclass"> 
                        <input id="back" class="ngbbuttonclass" onclick="this.goback()" type="button"/> 
                    </navigatorbar>  
                    <div id="panel4"/>  
                    <label id="label0">客户默认信息</label>  
                    <div id="div_customerinfo"> 
                        <div onclick="this.changecustemor()" id="panel18"> 
                            <label id="label3">客户：</label>  
                            <label maxlength="256" id="customer">请选择客户</label>  
                            <image src="arrow.png" id="image1" scaletype="fitcenter"/> 
                        </div>  
                        <div onclick="this.changesellers()" id="panel20"> 
                            <label id="label4">销售单位：</label>  
                            <label maxlength="256" id="seller">请选择销售单位</label>  
                            <image src="arrow.png" id="image4" scaletype="fitcenter"/> 
                        </div>  
                        <div onclick="this.changeposter()" id="panel21"> 
                            <label id="label5">发货企业：</label>  
                            <label maxlength="256" id="poster">请选择发货企业</label>  
                            <image src="arrow.png" id="image5" scaletype="fitcenter"/> 
                        </div> 
                    </div>  
                    <label id="label2">供应商默认信息</label>  
                    <div id="div_supplierinfo"> 
                        <div onclick="this.changevender()" id="panel22"> 
                            <label id="label6">供应商：</label>  
                            <label maxlength="256" id="vender">请选择供应商</label>  
                            <image src="arrow.png" id="image6" scaletype="fitcenter"/> 
                        </div>  
                        <div onclick="this.changebuyer()" id="panel23"> 
                            <label id="label7">采购单位：</label>  
                            <label maxlength="256" id="buyer">请选择采购单位</label>  
                            <image src="arrow.png" id="image7" scaletype="fitcenter"/> 
                        </div>  
                        <div onclick="this.changegeter()" id="panel5"> 
                            <label id="label8">收货企业：</label>  
                            <label maxlength="256" id="getter">请选择收货企业</label>  
                            <image src="arrow.png" id="image8" scaletype="fitcenter"/> 
                        </div> 
                    </div>  
                    <div onclick="this.changepwd()" id="panel24"> 
                        <image src="icon_setting.png" id="image13" scaletype="fitcenter"/>  
                        <label id="label1">修改密码</label>  
                        <image src="arrow.png" id="image9" scaletype="fitcenter"/> 
                    </div>  
                    <input onclick="this.login()" id="btn_logout" type="button" value="退出登录" class="textbtnclass"/> 
                </div> 
            </Scrollview> 
        </div> 
    </div> 
</window>
