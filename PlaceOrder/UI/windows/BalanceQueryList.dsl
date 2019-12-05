<?xml version="1.0" encoding="UTF-8"?>

<window id="BalanceQueryList" namespace="com.yonyou.placeorder" controller="BalanceQueryListController"> 
    <!--<script src="#{path.controller}/com.yonyou.placeorder.BalanceQueryListControllerController.js" type="text/javascript"/>-->  
    <!--<script src="#{path.controller}/com.yonyou.placeorder.BalanceQueryListController.js" type="text/javascript"/>-->  
    <import ref="BalanceQueryList.css" type="css"/>  
    <link href="sys/theme.css" type="text/css"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="余额查询结果" class="navigatorbarclass"> 
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
                            <label id="billdate" bindfield="dbilldate">2016�??10�??3�??17:20:09</label>  
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
                            <label id="orderstatus" bindfield="billstatus.name">已提�??</label> 
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
