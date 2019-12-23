<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="OverallreportController" namespace="com.yonyou.placeorder" id="Overallreport">
    <import ref="Overallreport.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" title="提货汇总报表" class="navigatorbarclass">
            <input onclick="this.button0_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
        </navigatorbar>
        <web:overallreport startpage="overallreport.html" id="webcontrol0"/> 
    </div> 
</window>
