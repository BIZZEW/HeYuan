<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="DetailreportController" namespace="com.yonyou.placeorder" id="Detailreport">
    <import ref="Detailreport.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <div id="viewPage0" onload="this.pageOnload()"> 
        <navigatorbar id="navigatorbar0" title="提货明细报表" class="navigatorbarclass">
            <input onclick="this.button0_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
        </navigatorbar>
        <web:detailreport startpage="detailreport.html" id="webcontrol1" onload="this.pageOnload()"/> 
    </div> 
</window>
