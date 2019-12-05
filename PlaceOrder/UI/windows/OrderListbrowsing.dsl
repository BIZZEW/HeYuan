<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="OrderListbrowsing" controller="OrderListbrowsingController" namespace="com.yonyou.placeorder">
    <import ref="OrderListbrowsing.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <Scrollview id="Scrollview_viewPage0" height="fill" vScrollEnabled="always" width="fill" hScrollEnabled="disabled">
        <div id="viewPage0" onload="this.viewOnload()">
            <navigatorbar id="navigatorbar0" class="navigatorbarclass">
                <input id="back" value="预订单详情" class="ngbbuttonclass" onclick="this.back_onclick()" type="button"/> 
            </navigatorbar>
            <div id="panel4">
                <image id="image0" scaletype="fitcenter" src="order11copy.png"/>
                <label id="label0">名称：</label>
                <label id="goods">name</label> 
            </div>
            <div id="panel9">
                <label id="weight">0.0</label>
                <label id="label6">吨</label> 
            </div>
            <div id="panel10">
                <label id="stutas">已提交</label> 
            </div>
            <div id="panel0">
                <label id="label1">销售订单号</label>
                <label id="billcode">id</label> 
            </div>
            <div id="panel1">
                <label id="label3">发货企业</label>
                <label id="sender">sender</label> 
            </div>
            <div id="panel2">
                <label id="label5">客户名称</label>
                <label id="customer">customer</label> 
            </div>
            <div id="panel6">
                <label id="label14">车牌号码</label>
                <label id="carno">carno</label> 
            </div>
            <div id="panel7">
                <label id="label15">单据日期</label>
                <label id="billdate">label</label> 
            </div> 
        </div>
    </Scrollview> 
</window>
