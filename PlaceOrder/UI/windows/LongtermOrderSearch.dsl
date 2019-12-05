<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="LongtermOrderSearch" controller="LongtermOrderSearchController" namespace="com.yonyou.placeorder">
    <import ref="LongtermOrderSearch.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <div id="panel1">
            <navigatorbar id="navigatorbar0" title="长期送货单查询" class="navigatorbarclass">
                <input id="back" class="ngbbuttonclass" onclick="this.back()" type="button"/>
                <label id="label0"/> 
            </navigatorbar> 
        </div>
        <div id="panel0">
            <div id="panel6">
                <label id="label4">收货企业：</label>
                <div id="div_stockorg" onlongclick="this.clearstock()" onclick="this.stockOrgOnclick()">
                    <label id="lbl_stockorg">请选择收货企业</label>
                    <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="startdatepanel">
                <label id="startdatelabel">开始日期：</label>
                <input id="begindate" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="overdatepanel">
                <label id="overdatelabel">结束日期：</label>
                <input id="enddate" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="panel10">
                <label id="label5">供应商：</label>
                <div id="div_supplier" onlongclick="this.clearSliper()" onclick="this.changeSliper()">
                    <label id="txt_supplier">请选择供应商</label>
                    <image id="image3" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="panel4">
                <label id="label2">货物：</label>
                <div id="changegoodsname" onclick="this.goodsname()">
                    <div id="panel8" onlongclick="this.clearMaterial()" onclick="this.materialOnclick()">
                        <label id="lbl_material">请选择货物</label>
                        <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
                    </div> 
                </div> 
            </div>
            <div id="panel5">
                <label id="label3">车牌号码：</label>
                <div id="panel9">
                    <input id="txt_vlicense" maxlength="256" placeholder="请选择或输入车牌号码" type="text"/>
                    <image id="image2" onclick="this.vlicenseOnclick()" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="panel3">
                <label id="label1">订单号：</label>
                <div id="panel2" onclick="this.billcode()">
                    <input id="txt_billcode" maxlength="256" placeholder="请输入订单号" type="text"/> 
                </div> 
            </div>
            <input id="btn_search" value="查询" class="textbtnclass" onclick="this.searchOnclick()" type="button"/> 
        </div> 
    </div> 
</window>
