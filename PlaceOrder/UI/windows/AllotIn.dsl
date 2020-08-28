<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AllotIn" controller="AllotInController" namespace="com.yonyou.placeorder">
    <import ref="AllotIn.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <navigatorbar id="navigatorbar0" title="调拨入库" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <listView id="list_all" bindfield="alldatas" onuprefresh="this.alllistOnup()" onitemclick="this.alllistOnitemclick()" ondownrefresh="this.alllistOndown()" collapsed="true">
                    <div id="panel5">
                        <div id="panel6">
                            <image id="image0" scaletype="fitcenter" src="order2copy.png"/> 
                        </div>
                        <div id="panel7">
                            <label id="label2" bindfield="noticecode">B1SYSO2016100300306</label>
                            <label id="label3" bindfield="dbilldate">2016年10月3日17:20:09</label>
                            <label id="label1" bindfield="stockorg.name">库存组织</label>
                            <label id="label6" bindfield="supplier.name">供应商</label>
                            <label id="label7" bindfield="material.name">物料名称</label> 
                        </div>
                        <div id="panel8">
                            <div id="panel18">
                                <label id="label5" bindfield="num">50</label>
                            </div>
                            <label id="label4" bindfield="vlicense">车牌号</label>
                        </div> 
                    </div> 
                </listView>
                <div id="pnl_bottom">
                    <label id="lbl_pagenum">0/0</label> 
                </div> 
            </div> 
        </div> 
    </div> 
</window>
