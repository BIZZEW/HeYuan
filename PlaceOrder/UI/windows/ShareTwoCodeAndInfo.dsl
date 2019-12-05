<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="ShareTwoCodeAndInfoController" namespace="com.yonyou.placeorder" id="ShareTwoCodeAndInfo">  
    <import ref="ShareTwoCodeAndInfo.css" type="css"/>  
    <link href="sys/theme.css" type="text/css"/>  
    <div id="viewPage0" onload="pageOnLoad()"> 
        <div id="panel0"> 
            <navigatorbar id="navigatorbar0" title="二维码分享" class="navigatorbarclass"> 
                <input onclick="backOnClick()" id="button0" type="button" class="ngbbuttonclass"/>  
                <label id="label0"/>  
                <input imagebuttontype="icon" istogglebutton="false" onclick="shotAndShare()" checked="false" id="imagebutton0" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </navigatorbar> 
        </div>  
        <div id="panel1"> 
            <image src="blank.png" scaletype="fitcenter" id="image0"/> 
        </div>  
        <div id="panel2"> 
            <div id="panel3"> 
                <label id="label_carno">车　　号：</label>  
                <label id="label_vlicense"/> 
            </div> 
        </div>  
        <div id="panel4"> 
            <label id="label_providerorclient">供 应 商：</label>  
            <label id="label_splrorpicker_name" type="multiline"/> 
        </div>  
        <div id="panel5"> 
            <label onclick="this.label5_onclick()" id="label5">物　　料：</label>  
            <label id="label_matname" type="multiline"/> 
        </div>  
        <div id="panel6"> 
            <label id="label_rcvorpick">收货数量：</label>  
            <label id="label_rcvorpick_no"/>  
            <label id="label1">吨</label> 
        </div>  
        <div id="panel7"> 
            <label id="label_rcvorpick_stockorg">库存组织：</label>  
            <label id="label_rcvorpick_stockorg_name" type="multiline"/> 
        </div>  
        <div id="panel8"> 
            <label id="label_rcvorpick_warehouse">收货仓库：</label>  
            <label id="label_rcvorpick_warehouse_name"/> 
        </div>  
        <div id="panel9"> 
            <label id="label_fetchorscv_dt">收货日期：</label>  
            <label id="label_fetchorrcv_date"/> 
        </div> 
    </div> 
</window>
