<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="SalesOrderSearch" controller="SalesOrderSearchController" namespace="com.yonyou.placeorder">
    <import ref="SalesOrderSearch.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <div id="panel1">
            <navigatorbar id="navigatorbar0" title="销售订单查询" class="navigatorbarclass">
                <input id="back" class="ngbbuttonclass" onclick="this.back()" type="button"/>
                <label id="label0"/>
                <input id="imagebutton0" imagebuttontype="icon" value="图标名称" istogglebutton="false" class="imagebuttonclass" type="imagebutton" checked="false"/> 
            </navigatorbar> 
        </div>
        <div id="panel0">
            <div id="startdatepanel">
                <label id="startdatelabel">开始日期</label>
                <input id="begindate" onload="this.dateOnload()" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="overdatepanel">
                <label id="overdatelabel">结束日期</label>
                <input id="enddate" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
            </div>
            <div id="panel3">
                <label id="label1">订单号码</label>
                <div id="panel2" onclick="this.billcode()">
                    <input id="billcode" maxlength="256" placeholder="请输入订单号" type="text"/> 
                </div> 
            </div>
            <div id="panel4">
                <label id="label2">物料名称</label>
                <div id="changegoodsname" onclick="this.goodsname()">
                    <input id="goodsname" maxlength="256" placeholder="请输入物料名称" type="text"/>
                    <image id="image0" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
            </div>
            <div id="panel5">
                <label id="label3">车牌号码</label>
                <input id="vlicense" maxlength="256" placeholder="请输入车牌号" type="text"/> 
            </div> 
        </div> 
    </div> 
</window>
