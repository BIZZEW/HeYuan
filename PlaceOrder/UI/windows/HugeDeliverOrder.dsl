<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="HugeDeliverOrderController" namespace="com.yonyou.placeorder" id="HugeDeliverOrder">
    <import ref="HugeDeliverOrder.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <Scrollview vScrollEnabled="always" width="fill" hScrollEnabled="disabled" id="Scrollview_viewPage0" height="fill">
        <div id="viewPage0" onload="this.pageOnload()">
            <navigatorbar id="navigatorbar0" title="新增大票提货通知单" class="navigatorbarclass">
                <input onclick="this.button0_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
            </navigatorbar>
            <div id="goodsname">
                <label id="label0">销售订单号：</label>
                <div onclick="this.selectOrderOnclick()" id="panel14">
                    <label id="lbl_orderno">请选择销售订单</label>
                    <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_selectorder" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
                </div> 
            </div>
            <div id="pnl_posimple">
                <label id="lbl_posimple">货物--余量</label>
                <input onclick="this.showDetail()" id="btn_showdetail" type="button" value="+" class="textbtnclass"/> 
            </div>
            <div id="pnl_podetail">
                <div id="panel6">
                    <label id="label14">销售订单日期：</label>
                    <label id="lbl_dbilldate">订单日期</label> 
                </div>
                <div id="panel4">
                    <label id="label6">销售单位：</label>
                    <label id="lbl_porgname">销售单位</label> 
                </div>
                <div id="panel7">
                    <label id="label10">提货企业：</label>
                    <label id="lbl_rcvstockorg">提货企业</label> 
                </div>
                <div id="panel0">
                    <label id="label1">供应商：</label>
                    <label id="lbl_splrname">供应商</label> 
                </div>
                <div id="panel9">
                    <label id="label2">货物：</label>
                    <label id="lbl_matname">货物</label> 
                </div>
                <div id="panel3">
                    <label id="label7">余量：</label>
                    <label id="lbl_remainnum" class="textbtnclass">0</label>
                    <label id="label8">吨</label> 
                </div> 
            </div>
            <div id="pnl_rcvorder">
                <div id="panel15">
                    <label id="label18">提货单号：</label>
                    <label id="lbl_rcvordercode">提货单号</label> 
                </div>
                <div id="panel16">
                    <label id="label20">提货单日期：</label>
                    <label id="lbl_rcvorderdate">提货单日期</label> 
                </div>
                <div id="panel11">
                    <label id="label17">提货量：</label>
                    <input min="0.0" max="9.99999999E8" precision="2" roundType="value" id="num_dhl" roundValue="5" placeholder="0.00" type="number"/>
                    <label id="lbl_dw2">单位</label> 
                </div> 
                <div id="panelvnote"> 
                    <label id="labelvnote">备注：</label>  
                    <input id="vnote" placeholder="请输入备注" type="text" roundType="value"/>  
                </div> 
            </div>
            <div id="panel55">
                <label id="label9">车辆信息</label>
                <div onclick="changevehicles()" id="vehiclespanel">
                    <label id="labelvehicles">当前0条信息</label>
                    <label id="vehicles">编辑</label>
                    <image src="arrow.png" id="vehiclesarrow" scaletype="fitcenter"/> 
                </div> 
            </div>
            <div id="panel8">
                <input onclick="this.submitOnclick()" id="btn_submit" type="button" value="提交订单" class="textbtnclass"/> 
            </div>
            <div id="pnl_share">
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_wechatshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_qqshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_msgshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div> 
        </div>
    </Scrollview> 
</window>
