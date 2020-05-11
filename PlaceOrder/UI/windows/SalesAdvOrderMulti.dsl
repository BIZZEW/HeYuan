<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="SalesAdvOrderMulti" controller="SalesAdvOrderMultiController" namespace="com.yonyou.placeorder">  
    <import ref="SalesAdvOrderMulti.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <Scrollview id="Scrollview_viewPage0" height="fill" width="fill" hScrollEnabled="disabled"> 
        <div id="viewPage0" onload="this.changebill()"> 
            <navigatorbar id="navigatorbar0" title="车辆下单" class="navigatorbarclass"> 
                <input id="back" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/> 
            </navigatorbar>  
            <div id="panel0"> 
                <label id="label6">客商信息</label>  
                <div id="changecustomer" onclick="this.changecustomer()"> 
                    <label id="label5">客户：</label>  
                    <label id="customer">请选择客户</label>  
                    <image id="image4" scaletype="fitcenter" src="arrow.png"/> 
                </div>  
                <div id="changeseller" onclick="this.changeseller()"> 
                    <label id="label1">销售单位：</label>  
                    <label id="seller">请选择销售单位</label>  
                    <image id="image1" scaletype="fitcenter" src="arrow.png"/> 
                </div>  
                <div id="changesender" onclick="this.changesender()"> 
                    <label id="label3">发货企业：</label>  
                    <label id="sender">请选择发货企业</label>  
                    <image id="image2" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>  
            <div id="panel1"> 
                <label id="label8">货物信息</label>  
                <div id="goodsname" onclick="changegoodsname()"> 
                    <label id="label0">货物：</label>  
                    <label id="goods">请选择货物</label>  
                    <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
                </div>  
                <div id="panel9"> 
                    <label id="label2">购买数量：</label>  
                    <input id="weight" min="-9.99999999E8" autofocus="autofocus" precision="2" max="9.99999999E8" roundValue="5" placeholder="0.0" type="number" roundType="value"/>  
                    <label id="lbl_dw">单位</label> 
                </div> 
                <div id="panelvnote"> 
                    <label id="labelvnote">备注：</label>  
                    <input id="vnote" autofocus="autofocus" placeholder="请输入备注" type="text" roundType="value"/>  
                </div> 
            </div>  
            <div id="panel55"> 
                <label id="label9">车辆信息</label>  
                <div id="vehiclespanel" onclick="changevehicles()"> 
                    <label id="labelvehicles">当前0条信息</label>  
                    <label id="vehicles">编辑</label>  
                    <image id="vehiclesarrow" scaletype="fitcenter" src="arrow.png"/> 
                </div>  
            </div>  
            <div id="panel8"> 
                <input id="post" value="提交订单" class="textbtnclass" onclick="this.postbill()" type="button"/>  
                <input id="invalid" value="取消订单" class="textbtnclass" onclick="this.invalid_onclick()" type="button"/> 
            </div> 
        </div> 
    </Scrollview> 
</window>
