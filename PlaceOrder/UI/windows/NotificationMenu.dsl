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
            
                <div id="panel8" onclick="this.goPayInfoList()">
                    <div id="panel14">
                        <input id="menu21" value="付款" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                        <div id="panel155"><label id="label14" type="multiline">付款后消息提醒</label>
                            <div id="panel165"><label id="label15">未读</label><label id="label16">0</label></div>
                            <div id="panel175"><label id="label17">已读</label><label id="label18">0</label></div>
                        </div>
                        <image id="image0" scaletype="fitcenter" src="arrow.png"></image>
                    </div>
                </div>

                <div id="panel9" onclick="this.goPickInfoList()">
                    <div id="panel142">
                        <input id="menu22" value="提货" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                        <div id="panel1552"><label id="label142" type="multiline">提货后消息提醒</label>
                            <div id="panel1652"><label id="label152">未读</label><label id="label162">0</label></div>
                            <div id="panel1752"><label id="label172">已读</label><label id="label182">0</label></div>
                        </div>
                        <image id="image1" scaletype="fitcenter" src="arrow.png"></image>
                    </div>
                </div>

                <div id="panel10" onclick="this.goHolidayInfoList()">
                    <div id="panel143">
                        <input id="menu23" value="节假日" onclick="this.menu23_onclick()" class="imagebuttonclass" istogglebutton="false" type="imagebutton" checked="false"></input>
                        <div id="panel1553"><label id="label143" type="multiline">节假日消息提醒</label>
                            <div id="panel1653"><label id="label153">未读</label><label id="label163">0</label></div>
                            <div id="panel1753"><label id="label173">已读</label><label id="label183">0</label></div>
                        </div>
                        <image id="image222" scaletype="fitcenter" src="arrow.png"></image>
                    </div>
                </div>
            </div>
        </Scrollview>
    </div>
</window>