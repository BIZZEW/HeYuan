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
                        <div id="paneleft"> 
                        </div> 
                        <label id="label0">金圆水泥</label>  
                        <div id="panelright"> 
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
                    <div id="viewPage1">
                        <div id="div_pickuporder">
                            <div id="panel39">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.addseleorder_onclick()" checked="false" id="imagebutton0" type="imagebutton" class="imagebuttonclass" value="车辆下单" />  
                            </div>
                            <div id="panel49">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.myseles()" checked="false" id="imagebutton1" type="imagebutton" class="imagebuttonclass" value="订单查询" />
                            </div>
                            <div id="panel59">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.creditonclick()" checked="false" id="imagebutton2" type="imagebutton" class="imagebuttonclass" value="余额查询" /> 
                            </div>
                        </div>
                        <div id="div_pickuporder2">
                            <div id="panel89">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.report_onclick()" checked="false" id="imagebutton3" type="imagebutton" class="imagebuttonclass" value="统计报表" />  
                            </div>
                            <div id="panel79">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.mypickups()" checked="false" id="imagebutton4" type="imagebutton" class="imagebuttonclass" value="提货单查询" />
                            </div>
                            <div id="panel69">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.goNotif()" checked="false" id="imagebutton5" type="imagebutton" class="imagebuttonclass" value="消息中心" />  
                            </div>
                        </div>
                        <div id="div_deliveryorder">
                            <div id="panel99">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.myposts()" checked="false" id="imagebutton6" type="imagebutton" class="imagebuttonclass" value="新增送货单" /> 
                            </div>
                            <div id="panel109">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.deliverydetailclick()" checked="false" id="imagebutton7" type="imagebutton" class="imagebuttonclass" value="送货单查询" /> 
                            </div>
                            <div id="panel119">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.longtermclick()" checked="false" id="imagebutton8" type="imagebutton" class="imagebuttonclass" value="新增长期送货单" /> 
                            </div>
                        </div>
                        <div id="div_deliveryorder2">
                            <div id="panel999">
                                <input imagebuttontype="text" istogglebutton="false" onclick="this.longtermclickquery()" checked="false" id="imagebutton9" type="imagebutton" class="imagebuttonclass" value="长期送货单查询" />  
                            </div>
                            <div id="panel9992">
                            </div>
                            <div id="panel9993">
                            </div>
                        </div>
                    </div>  
                </div> 
            </Scrollview> 
        </div> 
    </div> 
</window>
