<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="SalesAdvOrderList" controller="SalesAdvOrderListController" namespace="com.yonyou.placeorder">  
    <import ref="SalesAdvOrderList.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="销售订单" class="navigatorbarclass"> 
            <input id="back" onclick="back()" type="button"/> 
        </navigatorbar>  
        <div id="panel0"> 
            <div id="panel1" onload="this.pageOnload()"> 
                <listView id="totallist" bindfield="list" onuprefresh="this.listup()" onitemclick="this.itemclick()" ondownrefresh="this.listdown()" collapsed="true"> 
                    <div id="panel5"> 
                        <div id="panel6"> 
                            <image id="image0" scaletype="fitcenter" src="order11copy.png"/> 
                        </div>  
                        <div id="panel7"> 
                            <label id="billcode" bindfield="salepreorderno">B1SYSO2016100300306</label>  
                            <label id="billdate" bindfield="dbilldate">2016年10月3日17:20:09</label>  
                            <label id="label6" bindfield="sendstockorg.name">发货企业</label>  
                            <label id="label5" bindfield="ccustomerid.name">客户</label>  
                            <label id="name" bindfield="cmaterialid.name">PO42.5散装水泥</label> 
                        </div>  
                        <div id="panel8"> 
                            <div id="panel22"> 
                                <label id="weight" bindfield="ordernum">50</label>  
                                <label id="label2" bindfield="cmaterialid.dw">单位</label> 
                            </div>  
                            <label id="label1" bindfield="vlicense">车牌号码</label>  
                            <label id="orderstatus" bindfield="billstatus.name">已提交</label> 
                        </div> 
                    </div> 
                </listView>  
                <div id="pnl_down"> 
                    <label id="lbl_nums">0/0</label> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
