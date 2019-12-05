<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="SalesOrderList" controller="SalesOrderListController" namespace="com.yonyou.placeorder">
    <import ref="SalesOrderList.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <navigatorbar id="navigatorbar0" title="销售订单" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.back_onclick()" type="button"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="pnl_queryarea">
                <div id="panel1">
                    <label id="label7">开始日期：</label>
                    <input id="begindate" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
                </div>
                <div id="panel2">
                    <label id="label8">结束日期：</label>
                    <input id="enddate" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
                </div>
                <div id="panel17">
                    <label id="label20">客户：</label>
                    <div id="pnl_selectcustomer" onlongclick="this.customerOnLongClick()" onclick="this.selectCustomer()">
                        <label id="lbl_querycustomer">请选择客户</label>
                        <image id="image5" scaletype="fitcenter" src="arrow.png"/> 
                    </div> 
                </div>
                <div id="panel13">
                    <label id="label16">销售单位：</label>
                    <div id="pnl_selectsaleorg" onlongclick="this.saleorgOnlongClick()" onclick="this.selectSaleorg()">
                        <label id="lbl_querysaleorg">请选择销售单位</label>
                        <image id="image3" scaletype="fitcenter" src="arrow.png"/> 
                    </div> 
                </div>
                <div id="panel15">
                    <label id="label18">发货企业：</label>
                    <div id="pnl_selectstockorg" onlongclick="this.stockorgOnlongClick()" onclick="this.selectStockorg()">
                        <label id="lbl_querystockorg">请选择发货企业</label>
                        <image id="image4" scaletype="fitcenter" src="arrow.png"/> 
                    </div> 
                </div>
                <div id="panel4">
                    <label id="label10">货物：</label>
                    <div id="div_selectmat" onlongclick="this.matOnlongClick()" onclick="this.selectMatOnclick()">
                        <label id="lbl_matname">请选择货物</label>
                        <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                    </div>
                    <div id="panel10" onclick="this.goodsname()">
                        <input id="textbox2" maxlength="256" placeholder="请输入物料名称" type="text"/>
                        <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
                    </div> 
                </div>
                <div id="panel11">
                    <label id="label11">车牌号码：</label>
                    <input id="txt_vlicense" maxlength="256" placeholder="请选择或输入车牌号码" type="text"/>
                    <input id="imgbtn_selectcar" imagebuttontype="icon" istogglebutton="false" class="imagebuttonclass" onclick="this.selectCar()" type="imagebutton" checked="false"/> 
                </div>
                <div id="panel3">
                    <label id="label9">订单号：</label>
                    <input id="txt_vbillcode" maxlength="256" placeholder="请输入订单号" type="text"/> 
                </div>
                <input id="btn_search" value="查询" class="textbtnclass" onclick="this.search_onclick()" type="button"/> 
            </div>
            <input id="imgbtn_showquery" imagebuttontype="icon" value="图标名称" istogglebutton="false" class="imagebuttonclass" onclick="this.showqueryOnclick()" type="imagebutton" checked="false"/>
            <listView id="list_saleorder" bindfield="datas" onuprefresh="this.listOnup()" onitemclick="this.itemOnclick()" ondownrefresh="this.listOndown()" collapsed="true">
                <div id="panel5">
                    <div id="panel6">
                        <image id="image0" scaletype="fitcenter" src="order2.png"/> 
                    </div>
                    <div id="panel7">
                        <label id="label2" bindfield="saleorderno">B1SYSO2016100300306</label>
                        <label id="label3" bindfield="dbilldate">2016年10月3日17:20:09</label>
                        <label id="label26" bindfield="sendstockorg.name">库存组织</label>
                        <label id="label1" bindfield="ccustomerid.name">客户</label>
                        <label id="label6" bindfield="saleorg.name">销售组织</label> 
                    </div>
                    <div id="panel8">
                        <label id="label4" bindfield="cmaterialid.name">物料</label>
                        <div id="panel9">
                            <label id="label0">总量：</label>
                            <label id="label5" bindfield="ordernum">0</label>
                            <label id="label12" bindfield="cmaterialid.dw">单位</label> 
                        </div>
                        <div id="panel12">
                            <label id="label13">余量：</label>
                            <label id="label14" bindfield="remainnum">0</label>
                            <label id="label15" bindfield="cmaterialid.dw">单位</label> 
                        </div> 
                    </div> 
                </div> 
            </listView> 
        </div> 
    </div> 
</window>
