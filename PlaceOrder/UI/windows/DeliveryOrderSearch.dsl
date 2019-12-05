<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="DeliveryOrderSearch" controller="DeliveryOrderSearchController" namespace="com.yonyou.placeorder">
    <import ref="DeliveryOrderSearch.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageonload()">
        <div id="panel1">
            <navigatorbar id="navigatorbar0" title="提货单查询" class="navigatorbarclass">
                <input id="back" class="ngbbuttonclass" onclick="this.back_onclick()" type="button"/>
                <label id="label0"/>
                <input id="imagebutton0" imagebuttontype="icon" value="图标名称" istogglebutton="false" class="imagebuttonclass" type="imagebutton" checked="false" disabled="disabled"/> 
            </navigatorbar> 
        </div>
        <div id="panel0">
            <div id="panel6">
                <label id="label4">发货企业：</label>
                <div id="changesender" onlongclick="this.clearsender()" onclick="this.stockOrgOnclick()">
                    <label id="stockorg">请选择发货企业</label>
                    <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="startdatepanel">
                <label id="startdatelabel">开始日期：</label>
                <input id="begindate" placeholder="请输入开始时间" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="overdatepanel">
                <label id="overdatelabel">结束日期：</label>
                <input id="enddate" placeholder="请输入结束时间" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="panel12">
                <label id="label7">客户：</label>
                <div id="changecustomer" onlongclick="this.clearcustomer()" onclick="this.changecustomer()">
                    <label id="customer">请选择客户</label>
                    <image id="image4" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="panel4">
                <label id="label2">货物：</label>
                <div id="panel7" onclick="this.changegoods()">
                    <div id="changegoods" onlongclick="this.cleargoods()" onclick="this.changegoods()">
                        <label id="cmaterialid">请选择货物</label>
                        <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
                    </div> 
                </div> 
            </div>
            <div id="panel5">
                <label id="label3">车牌号码：</label>
                <div id="changecar">
                    <input id="vlicense" maxlength="256" placeholder="请选择或输入车牌号码" type="text"/>
                    <image id="image2" onclick="this.changecar()" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="panel3">
                <label id="label1">订单号：</label>
                <div id="panel2">
                    <input id="ordercode" maxlength="256" placeholder="请输入订单号" type="text" onchange="this.textbox0_onchange()"/> 
                </div> 
            </div>
            <input id="search" value="查询" class="textbtnclass" onclick="this.search_onclick()" type="button"/> 
        </div> 
    </div> 
</window>
