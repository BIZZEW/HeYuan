<?xml version="1.0" encoding="UTF-8"?>

<window id="StatisticalReportMenu" controller="StatisticalReportMenuController" namespace="com.yonyou.placeorder">
    <import ref="StatisticalReportMenu.css" type="css"></import>
    <link type="text/css" href="sys/theme.css">
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    </link>
    <action id="ddd" animation-direction="right" method="UMView.open" iskeep="false" animation-type="Push"></action>
    <div id="viewPage0">
        <navigatorbar id="navigatorbar0" title="统计报表" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/> 
        </navigatorbar>
        <Scrollview id="Scrollview_panel4" height="0" weight="1" width="fill" hScrollEnabled="disabled">
            <div id="panel4">
                <div id="row0">
                    <div id="th00"></div><input id="menu11" value="提货汇总报表" onclick="this.overallreport_onclick()"
                        class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                    <div id="th01"></div><input id="menu12" value="提货明细报表" onclick="this.detailreport_onclick()"
                        class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                    <div id="th02"></div><input id="menu13" value="账单报表"  onclick="this.billreport_onclick()"
                        class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                    <div id="th03"></div>
                </div>
            </div>
        </Scrollview>
    </div>
</window>