<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="HomePageController" onrestart="this.restart()" namespace="com.yonyou.placeorder" id="HomePage">  
    <import ref="HomePage.css" type="css"/>  
    <link href="sys/theme.css" type="text/css"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <div id="viewPage0"> 
        <div id="panel0" onload="this.pageOnload()"> 
            <Scrollview width="fill" hScrollEnabled="disabled" id="Scrollview_panel1" height="fill"> 
                <div id="panel1"> 
                    <div id="panel3"> 
                        <label id="label0">手机下单服务中心</label>  
                        <div id="panel10"> 
                            <input imagebuttontype="icon" istogglebutton="false" onclick="this.usercenter_onclick()" checked="false" id="usercenter" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
                        </div> 
                    </div>  
                    <div id="panel6">
                        <imageflipper titleheight="0" descheight="0" flipperbtnvisible="true" autoflip="true" interval="3000" isloop="true" id="imageflipper0" scaletype="fitxy">
                            <imageflipperitem src="banner1.png" description="" id="imageflipper0_0" title=""/> 
                            <imageflipperitem src="banner2.png" description="" id="imageflipper0_1" title=""/> 
                            <imageflipperitem src="banner3.png" description="" id="imageflipper0_2" title=""/> 
                            <imageflipperitem src="banner4.png" description="" id="imageflipper0_3" title=""/> 
                            <imageflipperitem src="banner5.png" description="" id="imageflipper0_4" title=""/> 
                            <imageflipperitem src="banner6.png" description="" id="imageflipper0_5" title=""/> 
                        </imageflipper> 
                    </div>
                    <div id="div_pickuporder"> 
                        <div onclick="this.addseleorder_onclick()" id="myseles"> 
                            <input imagebuttontype="text" istogglebutton="false" onclick="this.addseleorder_onclick()" checked="false" id="imagebutton0" type="imagebutton" class="imagebuttonclass"/>  
                            <label id="label2">车辆下单</label>
                        </div>  
                        <div onclick="this.myseles()" id="mydeliveryorder"> 
                            <input imagebuttontype="text" istogglebutton="false" onclick="this.myseles()" checked="false" id="imagebutton1" type="imagebutton" class="imagebuttonclass"/>  
                            <label id="label3">订单查询</label>  
                        </div>  
                        <div onclick="this.creditonclick()" id="creditpanel"> 
                            <input imagebuttontype="icon" istogglebutton="false" onclick="this.creditonclick()" checked="false" id="imagebutton18" type="imagebutton" class="imagebuttonclass"/>  
                            <label id="label21">余额查询</label> 
                        </div>  
                        <div onclick="this.report_onclick()" id="panel8"> 
                            <input imagebuttontype="icon" istogglebutton="false" onclick="this.report_onclick()" checked="false" id="imagebutton5" type="imagebutton" value="图标名称" class="imagebuttonclass"/>  
                            <label id="label6">统计报表</label> 
                        </div> 
                    </div>  
                </div> 
            </Scrollview> 
        </div> 
    </div> 
</window>
