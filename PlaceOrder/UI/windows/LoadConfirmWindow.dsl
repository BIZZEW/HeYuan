<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="LoadConfirmWindow" controller="LoadConfirmWindowController" namespace="com.yonyou.placeorder">
    <import ref="LoadConfirmWindow.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0" onload="this.pageOnload()">
        <navigatorbar id="navigatorbar0" title="装货确认" class="navigatorbarclass">
            <input id="button0" class="buttonclass" type="button"/>
            <label id="label0"/>
            <input id="imgbtn_scanCode" imagebuttontype="icon" istogglebutton="false" class="imagebuttonclass" onclick="this.scanCodeOnclick()" type="imagebutton" checked="false"/> 
        </navigatorbar>
        <div id="wloginpanel">
            <div id="panel0">
                <label id="label1">提货分厂：</label>
                <label id="lbl_factory">提货分厂</label> 
            </div>
            <div id="panel1">
                <label id="label3">计量单号：</label>
                <input id="txt_msbillcode" maxlength="256" placeholder="请输入或选择计量单号" type="text"/>
                <input id="imgbtn_selectMSBill" imagebuttontype="icon" istogglebutton="false" class="imagebuttonclass" type="imagebutton" checked="false"/> 
            </div>
            <div id="panel2">
                <label id="label4">车号：</label>
                <input id="txt_vlicense" maxlength="256" placeholder="请输入或选择车号" type="text"/> 
            </div>
            <div id="panel3">
                <label id="label5">客户：</label>
                <label id="lbl_customer">客户</label> 
            </div>
            <div id="panel4">
                <label id="label7">产品：</label>
                <label id="label8">产品</label> 
            </div>
            <div id="panel5">
                <div id="panel6">
                    <label id="label2">装货班组</label>
                    <picker id="picker_bz" showsSelectionIndicator="false">
                        <pickeritem onselectedchange="onBzChange()" bindfield="bz" id="picker_bz_0" value="1" datasource="bzs"/> 
                    </picker> 
                </div>
                <div id="panel11">
                    <label id="label6">装卸类型</label>
                    <picker id="picker_zxlx" showsSelectionIndicator="false">
                        <pickeritem onselectedchange="onZxlxChange()" bindfield="zxlx" id="picker_zxlx_0" value="1" datasource="zxlxs"/> 
                    </picker> 
                </div> 
            </div>
            <div id="panel7">
                <label id="label9">批次号：</label> 
            </div>
            <div id="panel8">
                <label id="label10">库位：</label> 
            </div>
            <div id="panel9">
                <label id="label11">预提重量：</label>
                <label id="lbl_canfetchnum">0</label>
                <label id="label13">吨</label> 
            </div>
            <div id="panel10">
                <label id="label14">提货重量：</label>
                <input id="number0" min="-9.99999999E8" precision="2" max="9.99999999E8" roundValue="5" placeholder="1,000.32" type="number" roundType="value"/> 
            </div>
            <input id="btn_confirm" value="确认" class="textbtnclass" type="button"/> 
        </div> 
    </div> 
</window>
