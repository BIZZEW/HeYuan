<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="AllotList" controller="AllotListController" namespace="com.yonyou.placeorder">  
    <import ref="AllotList.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="调拨订单" class="navigatorbarclass"> 
            <input id="back" onclick="back()" type="button"/> 
        </navigatorbar>  
        <div id="panel0"> 
            <div id="panel1" onload="this.pageOnload()"> 
                <listView id="totallist" bindfield="list" onuprefresh="this.listup()" ondownrefresh="this.listdown()" collapsed="true"> 
                    <div id="panel5"> 
                        <div id="panel6"> 
                            <image id="image0" scaletype="fitcenter" src="order11copy.png"/> 
                        </div>  
                        <div id="panel7"> 
                            <label id="billcode" bindfield="vbillcode">B1SYSO2016100300306</label>  
                            <label id="billdate" bindfield="dbilldate">2016年10月3日17:20:09</label>  

                            <label id="label6" bindfield="pk_org.name">调出库存组织</label>  
                            <label id="label5" bindfield="cinstockorgid.name">调入库存组织</label>  

                            <label id="name" bindfield="nnum">数量</label> 
                        </div>  
                        <div id="panel8"> 
                            <label id="label1" bindfield="coutstordocid.name">调出仓库</label>
                            <label id="label22" bindfield="cinstordocid.name">调入仓库</label>

                            <div id="panel33"> 
                                <label id="noutnumlabel">调出数量：</label>  
                                <label id="noutnum" bindfield="noutnum">调出数量</label>
                            </div>

                            <div id="panel44"> 
                                <label id="ninnumlabel">调入数量：</label>  
                                <label id="ninnum" bindfield="ninnum">调入数量</label>
                            </div>  
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
