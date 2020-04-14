<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="DeliveryOrderList" controller="DeliveryOrderListController" namespace="com.yonyou.placeorder">
    <import ref="DeliveryOrderList.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <navigatorbar id="navigatorbar0" title="提货单" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <listView id="listviewdefine0" bindfield="alldatas" onuprefresh="this.listup()" onitemclick="this.itemclick()" ondownrefresh="this.listdown()" collapsed="true">
                    <div id="panel5">
                        <div id="panel6">
                            <image id="image0" scaletype="fitcenter" src="order01copy.png"/> 
                        </div>
                        <div id="panel7">
                            <label id="label2" bindfield="noticecode">B1SYSO2016100300306</label>
                            <label id="label3" bindfield="dbilldate">2016年10月3日17:20:09</label>
                            <label id="label7" bindfield="sendstockorg.name">天瑞集团汝州水泥有限公司</label>
                            <label id="label6" bindfield="ccustomerid.name">客户</label>
                            <label id="label4" bindfield="cmaterialid.name">PO42.5散装水泥</label> 
                        </div>
                        <div id="panel8">
                            <div id="panel4">
                                <label id="label25" bindfield="num">50</label>
                                <label id="lbl_dw" bindfield="cmaterialid.dw">单位</label> 
                            </div>
                            <label id="label1" bindfield="vlicense">车牌号码</label>
                            <label id="label8" bindfield="status.name">已提交</label> 
                        </div> 
                    </div> 
                </listView>
                <div id="panel2">
                    <label id="lbl_pagenums">0/0</label> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
