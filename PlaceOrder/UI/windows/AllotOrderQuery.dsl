<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="AllotOrderQueryController" namespace="com.yonyou.placeorder" id="AllotOrderQuery">
    <import ref="AllotOrderQuery.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <div id="panel1">
            <navigatorbar id="navigatorbar0" title="调拨通知单查询" class="navigatorbarclass">
                <input onclick="this.back_onclick()" id="back" type="button" class="ngbbuttonclass"/>
                <label id="label0"/> 
            </navigatorbar> 
        </div>
        <div id="panel0">
            <div id="startdatepanel">
                <label id="startdatelabel">开始日期：</label>
                <input format="yyyy-MM-dd" id="begindate" placeholder="请选择开始时间" type="date" onload="this.dateOnload()"/> 
            </div>
            <div id="overdatepanel">
                <label id="overdatelabel">结束日期：</label>
                <input format="yyyy-MM-dd" id="enddate" placeholder="请选择结束时间" type="date"/> 
            </div>



            <div id="panel61">
                <label id="label41">调拨组织：</label>
                <div onlongclick="this.clearoutorg()" onclick="this.changeoutorg()" id="changeoutorg">
                    <label id="outorg">请选择调拨组织</label>
                    <image src="arrow.png" id="image11" scaletype="fitcenter"/> 
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


            <div id="panel5">
                <label id="label3">车牌号码：</label>
                <input maxlength="256" id="vlicense" placeholder="请选择或输入车牌号码" type="text"/>
                <input imagebuttontype="icon" istogglebutton="false" onclick="this.selectcar()" checked="false" id="imgbtn_selectcar" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div>
            <div id="panel3">
                <label id="label1">调拨订单号：</label>
                <div id="panel2">
                    <input maxlength="256" id="billcode" placeholder="请输入调拨订单号" type="text"/> 
                </div> 
            </div>
            <div id="panel31">
                <label id="label11">调拨通知单号：</label>
                <div id="panel21">
                    <input maxlength="256" id="billcode1" placeholder="请输入调拨通知单号" type="text"/> 
                </div> 
            </div>
            <div id="panel4">
                <label id="label2">货物：</label>
                <div onlongclick="this.cleargoods()" onclick="this.changegoods()" id="changegoodsname">
                    <label id="goodsname">请选择货物</label>
                    <image src="arrow.png" id="image0" scaletype="fitcenter"/> 
                </div> 
            </div>
            <div id="panel41">
                <label id="label21">调拨类型：</label>
                <div onlongclick="this.cleartype()" onclick="this.changetype()" id="changetype">
                    <label id="transtype">请选择调拨类型</label>
                    <image src="arrow.png" id="image01" scaletype="fitcenter"/> 
                </div> 
            </div>
            <!-- <div id="panel333">
                <label id="label111">调拨类型：</label>
                <div id="panel22">
                    <picker id="picker0" showsSelectionIndicator="true" onload="this.picker0_onload()">
                        <pickeritem iscyclic="false" bindfield="status" datasource="statuses" onselectedchange="this.selectstatus()" id="picker0_0" value="订单状态"/> 
                    </picker> 
                </div> 
            </div> -->
            <input onclick="this.searchbutton_onclick()" id="searchbutton" type="button" value="查询" class="textbtnclass"/> 
        </div> 
    </div> 
</window>
