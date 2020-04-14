<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="MyCreditController" namespace="com.yonyou.placeorder" id="MyCredit">
    <import ref="MyCredit.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <div id="viewPage0" onload="this.onpageloader()">
        <navigatorbar id="navigatorbar0" title="余额查询" class="navigatorbarclass">
            <input onclick="this.button0_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
        </navigatorbar>
        <web:mycredit startpage="mycredit.html" id="webcontrolcredit"/> 
    </div> 
</window>
