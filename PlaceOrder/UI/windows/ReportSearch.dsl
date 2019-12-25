<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="ReportSearchController" namespace="com.yonyou.placeorder" id="ReportSearch">
    <import ref="ReportSearch.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0">
        <div id="panel1">
            <navigatorbar id="navigatorbar0" title="报表查询" class="navigatorbarclass">
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
            <div id="panel6">
                <label id="label4">客户：</label>
                <div onlongclick="this.clearcustomer()" onclick="this.changecustomer()" id="changecustomer">
                    <label id="customer">请选择客户</label>
                    <image src="arrow.png" id="image1" scaletype="fitcenter"/> 
                </div> 
            </div>
            <div id="panel333">
                <label id="label11">物料：</label>
                <div id="pnl_selectmat" onclick="this.selectMaterial()">
                    <label id="lbl_matname">请选择物料</label>
                    <image id="img_goselectmat" scaletype="fitcenter" src="arrow.png"/> 
                </div> 
                <!-- <div id="panel22">
                    <picker id="picker0" showsSelectionIndicator="true" onload="this.picker0_onload()">
                        <pickeritem bindfield="status" datasource="statuses" onselectedchange="this.selectcar()" id="picker0_0" value="订单状态"/> 
                    </picker> 
                </div>  -->
            </div>
            <!-- <div id="panel33">
                <label id="label7">司机姓名：</label>
                <input maxlength="256" id="txt_drivername" placeholder="司机姓名" type="text"/>
                <input imagebuttontype="icon" istogglebutton="false" onclick="this.goSelectDriver()" checked="false" id="imgbtn_selectDriver" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div> -->
            <!-- <div id="panel4">
                <label id="label2">货物：</label>
                <div onlongclick="this.cleargoods()" onclick="this.changegoods()" id="changegoodsname">
                    <label id="goodsname">请选择货物</label>
                    <image src="arrow.png" id="image0" scaletype="fitcenter"/> 
                </div> 
            </div> -->


            <!-- <div id="panel5">
                <label id="label3">车牌号码：</label>
                <input maxlength="256" id="vlicense" placeholder="请选择或输入车牌号码" type="text"/>
                <input imagebuttontype="icon" istogglebutton="false" onclick="this.selectcar()" checked="false" id="imgbtn_selectcar" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div>
            <div id="outfactorypanel">
                <label id="outfactorylabel">出厂日期：</label>
                <input format="yyyy-MM-dd" id="outfactory" placeholder="请选择结束时间" type="date"/> 
            </div> -->


            <!-- <div id="panel3">
                <label id="label1">订单号：</label>
                <div id="panel2">
                    <input maxlength="256" id="billcode" placeholder="请输入订单号" type="text"/> 
                </div> 
            </div> -->
            <!-- <input onclick="this.searchbutton_onclick()" id="searchbutton" type="button" value="查询" class="textbtnclass"/>  -->
            <input onclick="this.requestData()" id="searchbutton" type="button" value="查询" class="textbtnclass"/>             
        </div> 
    </div> 
</window>
