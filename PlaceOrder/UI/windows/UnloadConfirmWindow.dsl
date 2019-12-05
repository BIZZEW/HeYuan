<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="UnloadConfirmWindow" controller="UnloadConfirmWindowController" namespace="com.yonyou.placeorder">
    <import ref="UnloadConfirmWindow.css" type="css"/>
    <link type="text/css" href="sys/theme.css"/>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="收货确认" class="navigatorbarclass">
            <input id="button0" class="buttonclass" type="button"/>
            <label id="label0"/>
            <input id="btn_scanCode" class="buttonclass" onclick="this.scanCodeOnclick()" type="button"/> 
        </navigatorbar>
        <div id="wloginpanel">
            <div id="panel0">
                <label id="label1">采购订单号：</label>
                <input id="txt_pocode" maxlength="256" placeholder="采购订单号" type="text"/> 
            </div>
            <div id="panel1">
                <label id="label2">供应商：</label>
                <label id="label3">供应商</label> 
            </div>
            <div id="panel2">
                <label id="label4">原料品种：</label>
                <label id="label5">原料品种</label> 
            </div>
            <div id="panel3">
                <label id="label6">矿点：</label>
                <label id="label7">矿点</label> 
            </div>
            <div id="panel4">
                <label id="label8">车号：</label>
                <label id="label9">车号</label> 
            </div>
            <div id="panel5">
                <label id="label10">原发净重：</label>
                <label id="label11">原发净重</label> 
            </div>
            <div id="panel6">
                <label id="label12">卸货地点：</label>
                <label id="label13">卸货地点</label>
                <input id="imagebutton0" imagebuttontype="icon" value="图标名称" istogglebutton="false" class="imagebuttonclass" type="imagebutton" checked="false"/> 
            </div>
            <div id="panel7">
                <label id="label14">卸货方式：</label>
                <input id="cbox_xhfs1" type="checkbox" checked="checked"/>
                <label id="label15">自卸</label>
                <input id="cbox_xhfs2" type="checkbox"/>
                <label id="label16">人工</label> 
            </div>
            <div id="panel8">
                <label id="label17">扣杂：</label>
                <input id="textbox1" maxlength="256" placeholder="扣杂" type="text"/> 
            </div>
            <div id="panel9">
                <label id="label18">整车退货：</label>
                <input id="cbox_zcth1" type="checkbox"/>
                <label id="label19">是</label>
                <input id="cbox_zcth2" type="checkbox" checked="checked"/>
                <label id="label20">否</label> 
            </div>
            <input id="wregisterbutton" value="确认" class="buttonclass registerbuttonclass" type="button"/> 
        </div> 
    </div> 
</window>
