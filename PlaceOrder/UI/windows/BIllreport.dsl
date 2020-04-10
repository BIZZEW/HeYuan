<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="BIllreportController" namespace="com.yonyou.placeorder" id="BIllreport">
    <import ref="BIllreport.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="账单报表" class="navigatorbarclass">
            <input onclick="this.button0_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
        </navigatorbar>
        <web:billreport startpage="billreport.html" id="webcontrol2" onload="this.pageOnload()"/> 
    </div> 
</window>
