<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="PurchaseOrderSearch" controller="PurchaseOrderSearchController" namespace="com.yonyou.placeorder">
    <import ref="PurchaseOrderSearch.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <div id="panel1">
            <navigatorbar id="navigatorbar0" title="采购订单查询" class="navigatorbarclass">
                <input id="back" class="ngbbuttonclass" onclick="this.back()" type="button"/>
            </navigatorbar> 
        </div>
        <div id="panel0">
            <div id="pnl_query1">
                <label id="lbl_begindate">开始日期</label>
                <input id="begindate" bindfield="begindate" placeholder="2000-01-01" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="pnl_query2">
                <label id="lbl_enddate">结束日期</label>
                <input id="enddate" bindfield="enddate" placeholder="2999-12-31" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="pnl_query3">
                <label id="lbl_billcode">订单号码</label>
                <div id="pnl_order" onclick="this.billcode()">
                    <input id="orderno" maxlength="256" placeholder="请输入订单号" type="text"/> 
                </div> 
            </div>
            <div id="pnl_query4">
                <label id="lbl_material">物料名称</label>
                <div id="pnl_selectmat" onclick="this.selectMaterial()">
                    <label id="lbl_matname">请选择物料</label>
                    <image id="img_goselectmat" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="pnl_query5">
                <label id="lbl_queryvlience">车牌号码</label>
                <input id="queryvlicense" maxlength="256" placeholder="请输入车牌号" type="text"/> 
            </div>
            <div id="search">
                <input id="btn_search" value="查询" class="textbtnclass" onclick="this.searchbutton_onclick()" type="button"/> 
            </div> 
        </div> 
    </div> 
</window>
