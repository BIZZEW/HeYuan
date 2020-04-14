<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="BaseInfoRefWindow" onload="this.onload()" controller="BaseInfoRefWindowController" namespace="com.yonyou.placeorder">  
    <import ref="BaseInfoRefWindow.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <div id="viewPage0" onload="this.pageonload()"> 
        <!-- <navigatorbar id="navbar" title="默认库存组织" class="navigatorbarclass"> 
            <input id="btn_back" class="buttonclass" onclick="this.btn_back_onclick()" type="button"/>  
            <label id="lbl_title"/> 
        </navigatorbar>   -->
        <navigatorbar id="navigatorbar0" title="默认库存组织" class="navigatorbarclass">
            <input id="back" class="ngbbuttonclass" onclick="this.btn_back_onclick()" type="button"/> 
        </navigatorbar>
        <div id="wpanel0"> 
            <search id="txt_search" placeholder="搜索" onsearch="this.txt_search_onsearch()"/>  
            <toggleButtonGroup id="tgbtngrp" value="buttongroup" onchange="this.tgbtnchange()"> 
                <toggleButton id="tgbtn_recentuse" value="0" textOff="最近常用" textOn="最近常用" type="button" checked="true"/>  
                <toggleButton id="tgbtn_alldatas" value="1" textOff="所有信息" textOn="所有信息" type="button"/> 
            </toggleButtonGroup>  
            <div id="panel0"> 
                <flipper id="flipperpnl" onnextflipper="this.flipnext()" onpreviousflipper="this.flipprevious()" viewindex="0"> 
                    <div id="pnl_list1"> 
                        <listView id="list_recent" bindfield="datas_recent" onload="this.recentlistonload()" onitemclick="this.onItemClick()" collapsed="true"> 
                            <div id="pnl_recent"> 
                                <div id="panel4"> 
                                    <label id="label0">编码：</label>  
                                    <label id="lbl_code1" bindfield="code">code</label> 
                                </div>  
                                <div id="panel5"> 
                                    <label id="label2">名称：</label>  
                                    <label id="lbl_name1" bindfield="name" type="multiline"/> 
                                </div> 
                            </div> 
                        </listView> 
                    </div>  
                    <div id="pnl_list2"> 
                        <listView id="list_all" bindfield="datas_all" onuprefresh="this.allListUpRefresh()" onload="this.alllistonload()" onitemclick="this.allListItemClick()" ondownrefresh="this.allListDownRefresh()" collapsed="true"> 
                            <div id="panel6"> 
                                <div id="panel7"> 
                                    <label id="label4">编码：</label>  
                                    <label id="label5" bindfield="code">code</label> 
                                </div>  
                                <div id="panel8"> 
                                    <label id="label6">名称：</label>  
                                    <label id="lbl_name2" bindfield="name" type="multiline"/> 
                                </div> 
                            </div> 
                        </listView> 
                    </div> 
                </flipper> 
            </div> 
        </div> 
    </div> 
</window>
