<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="VehiclesListController" namespace="com.yonyou.placeorder" id="VehiclesList">
    <import ref="VehiclesList.css" type="css"/>
    <link href="sys/theme.css" type="text/css"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <action method="UMView.open" id="ddd" animation-direction="right" iskeep="false" animation-type="Push"/>
    <div id="viewPage0" onload="this.onload()">
        <navigatorbar id="navigatorbar0" title="车辆信息列表" class="navigatorbarclass">
            <input onclick="this.button0_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
        </navigatorbar>
        <web:vehiclesList startpage="vehiclesList.html" id="webcontrolvehiclelist"/> 
    </div> 
</window>
