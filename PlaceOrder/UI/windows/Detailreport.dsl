<?xml version="1.0" encoding="UTF-8"?>

<window id="Detailreport" controller="DetailreportController" namespace="com.yonyou.placeorder">
    <import ref="Detailreport.css" type="css"></import>
    <link type="text/css" href="sys/theme.css">
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    </link>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="销售明细报表" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/> 
        </navigatorbar>
        <toggleButtonGroup id="togglebuttongroup0" onchange="changetogglebutton()">
            <toggleButton id="togglebutton0" value="0" class="togglebtnitemclass" textOff="全部" textOn="全部"
                type="button"></toggleButton>
            <toggleButton id="togglebutton1" value="1" class="togglebtnitemclass" textOff="待审" textOn="待审" type="button"
                checked="true"></toggleButton>
            <toggleButton id="togglebutton2" value="2" class="togglebtnitemclass" textOff="审批中" textOn="审批中"
                type="button"></toggleButton>
            <toggleButton id="togglebutton3" value="3" class="togglebtnitemclass" textOff="退回" textOn="退回"
                type="button"></toggleButton>
            <toggleButton id="togglebutton4" value="4" textOff="完成" textOn="完成" type="button"></toggleButton>
        </toggleButtonGroup>
        <listView bindfield="result" id="checklistview" onload="this.listviewdefine0_onload()"
            onitemcreate="this.onitemcreate()" onitemclick="this.onitemclick()" ondownrefresh="this.ondownrefresh()"
            collapsed="true">
            <div id="panel0">
                <div id="panel4">
                    <div id="panel1"><label bindfield="trade_name" id="label3">经营单位</label><label
                            id="label2"></label><label bindfield="bill_no" id="label4">提运单号</label> </div>
                    <div id="panel2"><label bindfield="seq_no" id="label5">统一编号</label><label id="label8"></label><label
                            bindfield="i_e_date" id="label7">进出口日期</label> </div>
                </div>
                <div id="panel3"><label id="label6">状态</label> </div>
            </div>
        </listView><label id="label1"></label>
    </div>
</window>