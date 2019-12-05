<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="HomePage3" canvaswidth="375" canvasheight="667" orientation="vertical" controller="HomePage3Controller" namespace="com.yonyou.placeorder">
    <import ref="HomePage3.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0">
        <div id="panel0">
            <flipper id="flipperdefine0" onnextflipper="next()" onpreviousflipper="previous()" viewindex="2">
                <div id="panel1">
                    <div id="panel3">
                        <label id="label0">手机下单服务中心</label> 
                    </div>
                    <div id="panel6">
                        <imageflipper titleheight="0" id="imageflipper0" descheight="0" interval="3000" flipperbtnvisible="true" isloop="true" scaletype="fitcenter" autoflip="true">
                            <imageflipperitem id="imageflipper0_0" title="" description="" src="fragmentone.png"/>
                            <imageflipperitem id="imageflipper0_1" title="" description="" src="fragmenttwo.png"/>
                            <imageflipperitem id="imageflipper0_2" title="" description="" src="fragmentthree.png"/>
                            <imageflipperitem id="imageflipper0_3" title="标题" description="" src="fragmentfour.png"/> 
                        </imageflipper> 
                    </div>
                    <div id="panel7">
                        <div id="myseles" onclick="myseles()">
                            <input id="imagebutton0" imagebuttontype="text" istogglebutton="false" class="imagebuttonclass" onclick="myseles()" type="imagebutton" checked="false"/>
                            <label id="label2">销售预订单</label> 
                        </div>
                        <div id="mydeliveryorder" onclick="mypickups()">
                            <input id="imagebutton1" imagebuttontype="text" istogglebutton="false" class="imagebuttonclass" onclick="mypickups()" type="imagebutton" checked="false"/>
                            <label id="label3">提货通知单</label> 
                        </div>
                        <div id="mypickup" onclick="myposts()">
                            <input id="imagebutton2" imagebuttontype="text" istogglebutton="false" class="imagebuttonclass" onclick="myposts()" type="imagebutton" checked="false"/>
                            <label id="label4">送货通知单</label> 
                        </div> 
                    </div>
                    <input id="addseleorder" value="下单" class="textbtnclass" onclick="this.addseleorder_onclick()" type="button"/>
                    <label id="selebill" onclick="this.selebillcheck()">销售订单查询</label>
                    <label id="Purchases" onclick="this.purchasecheck()">采购订单</label> 
                </div>
                <div id="panel2">
                    <div id="panel11"/> 
                </div>
                <div id="panel16">
                    <div id="panel17" onclick="login()">
                        <image id="icon" scaletype="fitxy" src="defualticon.png" roundstyle="circle"/>
                        <label id="telephone" onload="this.personInfoOnload()" onclick="login()">点击登录</label> 
                    </div>
                    <div id="panel18" onclick="changecustemor()">
                        <image id="image10" scaletype="fitcenter" src="bill_stye.png"/>
                        <label id="customer" maxlength="256">默认客户档案</label>
                        <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <div id="panel19">
                        <image id="image12" scaletype="fitcenter" src="icon_dangan.png"/>
                        <label id="billtype" maxlength="256">订单类型</label>
                        <image id="image3" visible="false" scaletype="fitcenter" src="arrow.png" disabled="disabled"/> 
                    </div>
                    <div id="panel20" onclick="changesellers()">
                        <image id="image11" scaletype="fitcenter" src="icon_vender.png"/>
                        <label id="seller" maxlength="256">默认销售组织</label>
                        <image id="image4" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <div id="panel21" onclick="changeposter()">
                        <image id="image14" scaletype="fitcenter" src="icon_buyer.png"/>
                        <label id="poster" maxlength="256">默认发货组织</label>
                        <image id="image5" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <div id="panel4"/>
                    <div id="panel22" onclick="changevender()">
                        <image id="image15" scaletype="fitcenter" src="icon_dangan.png"/>
                        <label id="vender" maxlength="256">默认供应商档案</label>
                        <image id="image6" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <div id="panel23" onclick="changebuyer()">
                        <image id="image16" scaletype="fitcenter" src="icon_vender.png"/>
                        <label id="buyer" maxlength="256">默认采购组织</label>
                        <image id="image7" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <div id="panel5" onclick="changegeter()">
                        <image id="image0" scaletype="fitcenter" src="icon_owner.png"/>
                        <label id="getter" maxlength="256">默认收货组织</label>
                        <image id="image8" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <div id="panel24" onclick="changepwd()">
                        <image id="image13" onclick="this.image13_onclick()" scaletype="fitcenter" src="icon_setting.png"/>
                        <label id="label1">修改密码</label>
                        <image id="image9" scaletype="fitcenter" src="arrow.png"/> 
                    </div> 
                </div> 
            </flipper> 
        </div> 
    </div> 
</window>
