<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="NotificationMenu" controller="NotificationMenuController" namespace="com.yonyou.placeorder">
    <import ref="NotificationMenu.css" type="css"></import>
    <link type="text/css" href="sys/theme.css"/>
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>
    <action id="ddd" animation-direction="right" method="UMView.open" iskeep="false" animation-type="Push"></action>
    <div id="viewPage0" onload="this.onload()">
        <navigatorbar id="navigatorbar0" title="消息中心" class="navigatorbarclass"> 
            <input id="back" class="ngbbuttonclass" onclick="this.button0_onclick()" type="button"/> 
        </navigatorbar>  
        <Scrollview id="Scrollview_panel4" height="0" weight="1" width="fill" hScrollEnabled="disabled">
            <div id="panel4">
            
                <div id="panel8" onclick="this.menu23_onclick()">
                    <div id="panel14">
                        <input id="menu21" value="收款消息" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                        <div id="panel155"><label id="label14" type="multiline">收款后消息提醒</label>
                            <div id="panel165"><label bindfield="price" id="label15">label</label><label bindfield="present"
                                    id="label16">label</label> </div>
                            <div id="panel175"><label bindfield="rate" id="label17">label</label><label bindfield="num"
                                    id="label18">label</label> </div>
                        </div>
                        <image id="image0" scaletype="fitcenter" src="arrow.png"></image>
                    </div>
                </div>

                <div id="panel9">
                    <div id="panel142">
                        <input id="menu22" value="销售出库" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                        <div id="panel1552"><label id="label142" type="multiline">销售出库（每辆车出厂后）后消息提醒</label>
                            <div id="panel1652"><label bindfield="price" id="label152">label</label><label bindfield="present"
                                    id="label162">label</label> </div>
                            <div id="panel1752"><label bindfield="rate" id="label172">label</label><label bindfield="num"
                                    id="label182">label</label> </div>
                        </div>
                        <image id="image1" scaletype="fitcenter" src="arrow.png"></image>
                    </div>
                </div>

                <div id="panel10">
                    <div id="panel143">
                        <input id="menu23" value="节假余额" onclick="this.menu23_onclick()" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                        <div id="panel1553"><label id="label143" type="multiline">节假日消息提醒</label>
                            <div id="panel1653"><label bindfield="price" id="label153">label</label><label bindfield="present"
                                    id="label163">label</label> </div>
                            <div id="panel1753"><label bindfield="rate" id="label173">label</label><label bindfield="num"
                                    id="label183">label</label> </div>
                        </div>
                        <image id="image222" scaletype="fitcenter" src="arrow.png"></image>
                    </div>
                </div>
            </div>
        </Scrollview>
    </div>
</window>