<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="MyCreditController" namespace="com.yonyou.placeorder" id="MyCredit">  
    <import ref="MyCredit.css" type="css"/>  
    <link href="sys/theme.css" type="text/css"/>  
    <div id="viewPage0" onload="this.onpageloader()"> 
        <navigatorbar id="navigatorbar0" title="余额查询" class="navigatorbarclass"> 
            <input onclick="this.button0_onclick()" id="button0" type="button" value="返回" class="ngbbuttonclass"/>  
            <label id="label0"/> 
        </navigatorbar>  
        <listView bindfield="result" collapsed="true" id="listviewdefine0"> 
            <div id="panel0"> 
                <!-- <image src="credit.png" scaletype="fitcenter" id="image0"/>   -->
                <div id="panel1"> 
                    <div id="panel2"> 
                        <label bindfield="customer.name" onclick="this.label1_onclick()" id="label1" type="multiline"/> 
                    </div>  
                    <div id="panel3"> 
                        <label id="label3">余额:</label>  
                        <label bindfield="money" id="label4"/>  
                        <label id="label5">元</label> 
                    </div> 
                </div> 
            </div> 
        </listView> 
    </div> 
</window>
