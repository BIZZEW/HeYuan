<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AllotOrderList" controller="AllotOrderListController" namespace="com.yonyou.placeorder">
    <import ref="AllotOrderList.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <navigatorbar id="navigatorbar0" title="调拨订单" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.btn_back_onclick()" type="button"/> 
        </navigatorbar>
        <div id="panel0">
            <div id="panel1">
                <div id="pnl_queryarea">
                    <div id="pnl_query1">
                        <label id="lbl_begindate">开始日期：</label>
                        <input id="begindate" placeholder="请选择开始时间" format="yyyy-MM-dd" type="date" onload="this.dateOnload()"/> 
                    </div>
                    <div id="pnl_query2">
                        <label id="lbl_enddate">结束日期：</label>
                        <input id="enddate" placeholder="请选择结束时间" format="yyyy-MM-dd" type="date"/> 
                    </div>

                    <div id="panel61">
                        <label id="label41">调出库存组织：</label>
                        <div onlongclick="this.clearoutorg()" onclick="this.changeoutorg()" id="changeoutorg">
                            <label id="outorg">请选择调出库存组织</label>
                            <image src="arrow.png" id="image11" scaletype="fitcenter"/> 
                        </div> 
                    </div>
                    <div id="panel62">
                        <label id="label42">调入库存组织：</label>
                        <div onlongclick="this.clearinorg()" onclick="this.changeinorg()" id="changeinorg">
                            <label id="inorg">请选择调入库存组织</label>
                            <image src="arrow.png" id="image12" scaletype="fitcenter"/> 
                        </div> 
                    </div>

                    <div id="panel63">
                        <label id="label43">调出仓库：</label>
                        <div onlongclick="this.clearoutwh()" onclick="this.changeoutwh()" id="changeoutwh">
                            <label id="outwh">请选择调出仓库</label>
                            <image src="arrow.png" id="image13" scaletype="fitcenter"/> 
                        </div> 
                    </div>
                    <div id="panel64">
                        <label id="label44">调入仓库：</label>
                        <div onlongclick="this.clearinwh()" onclick="this.changeinwh()" id="changeinwh">
                            <label id="inwh">请选择调入仓库</label>
                            <image src="arrow.png" id="image14" scaletype="fitcenter"/> 
                        </div> 
                    </div>

                    <div id="panel41">
                        <label id="label21">货物：</label>
                        <div onlongclick="this.cleargoods()" onclick="this.changegoods()" id="changegoodsname1">
                            <label id="goodsname1">请选择货物</label>
                            <image src="arrow.png" id="image01" scaletype="fitcenter"/> 
                        </div> 
                    </div>

                    <div id="panel31">
                        <label id="label11">订单号：</label>
                        <div id="panel21">
                            <input maxlength="256" id="billcode1" placeholder="请输入订单号" type="text"/> 
                        </div> 
                    </div>










                    
                    <!-- <div id="panel12">
                        <label id="label10">供应商：</label>
                        <div id="panel13" onlongclick="this.supplierOnlongClick()" onclick="this.selectSupplier()">
                            <label id="lbl_querysupplier">请选择供应商</label>
                            <image id="image3" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <div id="panel10">
                        <label id="label7">收货企业：</label>
                        <div id="panel11" onlongclick="this.stockorgOnlongClick()" onclick="this.selectStockOrg()">
                            <label id="lbl_querystockorg">请选择收货企业</label>
                            <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <div id="panel_mine">
                        <label id="label_mine">矿点：</label>
                        <div id="panel_mine_inner" onlongclick="this.mineOnlongClick()" onclick="this.selectMine()">
                            <label id="lbl_mine">请选择矿点</label>
                            <image id="image_mine" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <div id="panel_warehouse">
                        <label id="label_warehouse">仓库：</label>
                        <div id="panel_warehouse_inner" onlongclick="this.warehouseOnlongClick()" onclick="this.selectWarehouse()">
                            <label id="lbl_warehouse">请选择仓库</label>
                            <image id="image_warehouse" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <div id="panel4">
                        <label id="label3">采购单位：</label>
                        <div id="panel9" onlongclick="this.purorgOnlongClick()" onclick="this.selectPurchaseOrg()">
                            <label id="lbl_querypurorg">请选择采购单位</label>
                            <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <div id="pnl_query4">
                        <label id="lbl_querymaterial">货物：</label>
                        <div id="pnl_selectmat" onlongclick="this.matOnlongClick()" onclick="this.selectMatOnclick()">
                            <label id="lbl_matname">请选择货物</label>
                            <image id="img_goselectmat" scaletype="fitcenter" src="arrow.png"/> 
                        </div> 
                    </div>
                    <div id="pnl_query5">
                        <label id="lbl_queryvlience">车牌号码：</label>
                        <input id="txt_vlicensecode" maxlength="256" placeholder="请选择或输入车牌号码" type="text"/>
                        <input id="imagebutton0" imagebuttontype="icon" istogglebutton="false" class="imagebuttonclass" onclick="this.selectCar()" type="imagebutton" checked="false"/> 
                    </div>
                    <div id="pnl_query3">
                        <label id="lbl_billcode">订单号：</label>
                        <input id="orderno" maxlength="256" placeholder="请输入订单号" type="text"/> 
                    </div> -->
                    <input id="btn_query" value="查询" class="textbtnclass" onclick="this.queryOnclick()" type="button"/> 
                </div>
                <input id="imgbtn_showquery" imagebuttontype="icon" value="图标名称" istogglebutton="false" class="imagebuttonclass" onclick="this.showqueryOnclick()" type="imagebutton" checked="false"/>
                <listView id="list_allotorder" bindfield="datas" onuprefresh="this.onupRefresh()" onitemclick="this.itemOnclick()" ondownrefresh="this.ondownRefresh()" collapsed="true">
                    <div id="panel5">
                        <div id="panel6">
                            <image id="image0" scaletype="fitcenter" src="order2.png"/> 
                        </div>
                        <div id="panel7">
                            <label id="lbl_orderno" bindfield="vbillcode">B1SYSO2016100300306</label>
                            <label id="lbl_billdate" bindfield="dbilldate">2016年10月3日17:20:09</label>
                            
                            <label id="label61" bindfield="pk_org.name">调出库存组织</label>  
                            <label id="label51" bindfield="cinstockorgid.name">调入库存组织</label>  

                            <label id="name1" bindfield="nnum">数量</label> 


                            <!-- <label id="lbl_supplier" bindfield="supplier.name">供应商</label>
                            <label id="label1" bindfield="rcvstockorg.name">库存组织</label>
                            <label id="label6" bindfield="material.name">物料</label> 
                            <label id="labelorespot" bindfield="orespotname">矿点</label> 
                            <label id="labelwarehouse" bindfield="warehousename.name">仓库</label>  -->
                        </div>
                        <div id="panel8">
                            <label id="label111" bindfield="coutstordocid.name">调出仓库</label>
                            <label id="label22" bindfield="cinstordocid.name">调入仓库</label>

                            <div id="panel33"> 
                                <label id="noutnumlabel">调出数量：</label>  
                                <label id="noutnum" bindfield="noutnum">调出数量</label>
                            </div>

                            <div id="panel44"> 
                                <label id="ninnumlabel">调入数量：</label>  
                                <label id="ninnum" bindfield="ninnum">调入数量</label>
                            </div> 





                            <!-- <div id="panel2">
                                <label id="label8">总量：</label>
                                <label id="lbl_nnum" bindfield="nnum">0</label>
                                <label id="label0" bindfield="material.dw">单位</label> 
                            </div>
                            <div id="panel3">
                                <label id="label5">余量：</label>
                                <label id="lbl_remainnum" bindfield="remainnum">0</label>
                                <label id="label2" bindfield="material.dw">单位</label> 
                            </div>  -->
                        </div> 
                    </div> 
                </listView> 
            </div> 
        </div> 
    </div> 
</window>
