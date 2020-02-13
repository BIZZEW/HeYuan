<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="DeliveryOrderDetailController" namespace="com.yonyou.placeorder" id="DeliveryOrderDetail">
    <import ref="DeliveryOrderDetail.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <Scrollview width="fill" hScrollEnabled="disabled" id="Scrollview_viewPage0" height="fill">
        <div id="viewPage0" onload="this.pageOnload()">
            <navigatorbar id="navigatorbar0" title="提货单维护" class="navigatorbarclass">
                <input onclick="this.back_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
            </navigatorbar>
            <div id="panel4">
                <label id="billid">销售订单号：</label>
                <div onclick="this.selectSaleorder()" id="div_selectsaleorder">
                    <label id="lbl_orderno">请选择销售订单</label>
                    <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imagebutton0" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
                </div> 
            </div>
            <div id="pnl_sosimple">
                <label id="lbl_sosimple">货物--余量</label>
                <input onclick="this.showhidedetail()" id="btn_showdetail" type="button" value="+" class="textbtnclass"/> 
            </div>
            <div id="pnl_sodetails">
                <div id="panel2">
                    <label id="label5">销售订单日期：</label>
                    <label id="lbl_dbilldate">订单日期</label> 
                </div>
                <div id="goodsname">
                    <label id="label0">销售单位：</label>
                    <label id="lbl_saleorg">销售单位</label> 
                </div>
                <div id="panel0">
                    <label id="label1">发货企业：</label>
                    <label id="lbl_sendstockorg">发货企业</label> 
                </div>
                <div id="panel1">
                    <label id="label3">客户：</label>
                    <label id="lbl_customer">客户</label> 
                </div>
                <div id="panel7">
                    <label id="label11">货物：</label>
                    <label id="lbl_matname">货物</label> 
                </div>
                <div id="panel12">
                    <label id="label8">余量：</label>
                    <label id="lbl_remainnum">0</label>
                    <label id="label10">吨</label> 
                </div> 
            </div>
            <div id="panel10">
                <label id="label6">提货单号：</label>
                <label id="lbl_fchordercode">提货单号</label> 
            </div>
            <div id="panel13">
                <label id="label13">提货单日期：</label>
                <label id="lbl_ftcorderdate">提货单日期</label> 
            </div>
            <div id="panel9">
                <label id="label2">提货数量：</label>
                <input min="0.0" max="9.99999999E8" precision="2" roundType="value" id="txt_fetchnum" roundValue="5" placeholder="0.0" type="number"/>
                <label id="lbl_dw">单位</label> 
            </div>
            <div id="panel6">
                <label id="label14">车号：</label>
                <label onclick="this.fmtvlicenseOnclick()" id="lbl_fmtvlicense">点击输入车号</label>
                <input onclick="this.showFreeLicense()" id="button0" type="button" value="自定义" class="textbtnclass"/>
                <input imagebuttontype="icon" istogglebutton="false" onclick="this.selectCar()" checked="false" id="imgbtn_selectcar" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div>
            <input maxlength="256" id="txt_vlicense" placeholder="车号" type="text"/>
            <div id="panel3">
                <label id="label7">司机姓名：</label>
                <input maxlength="256" id="txt_drivername" placeholder="司机姓名" type="text"/>
                <input imagebuttontype="icon" istogglebutton="false" onclick="this.goSelectDriver()" checked="false" id="imgbtn_selectDriver" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div>
            <div id="panel5">
                <label id="label12">手机号：</label>
                <input maxlength="256" id="txt_drivertelephone" placeholder="手机号" type="text"/> 
            </div>
            <div id="panel11">
                <label id="label17">身份证号：</label>
                <input maxlength="256" id="txt_driveridcode" placeholder="身份证号" type="text"/> 
            </div>
            <div id="panel8">
                <!-- <input onclick="this.submitOnclick()" id="btn_submit" type="button" value="提交订单" class="textbtnclass"/>
                <input onclick="this.invalidOnclick()" disabled="disabled" id="btn_invalid" type="button" value="作废订单" class="textbtnclass"/> -->
                <input onclick="jumpToSharePage()" id="btn_share" type="button" value="二维码转发" class="textbtnclass"/> 
            </div>
            <div id="pnl_share">
                <input imagebuttontype="icon" istogglebutton="false" onclick="this.wxShareOnclick()" checked="false" id="imgbtn_wechatshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_qqshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_msgshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div> 
        </div>
    </Scrollview> 
</window>
