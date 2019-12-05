<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" id="BalanceQuerySearch" controller="BalanceQuerySearchController" namespace="com.yonyou.placeorder">  
    <!--<script src="#{path.controller}/com.yonyou.placeorder.BalanceQuerySearchController.js" type="text/javascript"/>
	<script src="#{path.controller}/UMP.UI.Mvc.controller.test2Controller.js" type="text/javascript"/>
	<script src="#{path.controller}/Controller.testController.js" type="text/javascript"/>
	<script src="#{path.controller}/UMP.UI.Mvc.Controller.BalanceQuerySearchController.js" type="text/javascript"/>
	<script src="#{path.controller}/com.yonyou.placeorder.BalanceQuerySearchControllerController.js" type="text/javascript"/> -->  
    <import ref="BalanceQuerySearch.css" type="css"/>  
    <link type="text/css" href="sys/theme.css"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <div id="viewPage0"> 
        <navigatorbar id="navigatorbar0" class="navigatorbarclass" title="余额查询"> 
            <input onclick="this.button0_onclick()" id="button0" type="button" class="ngbbuttonclass"/>  
            <!--<input id="button0" type="button"/>-->  
            <label id="label0"/> 
        </navigatorbar>  
        <div id="wloginpanel"> 
            <div id="wuserpanel"> 
                <label id="wuserlabel">客户</label>  
                <input id="wusertext" maxlength="256" placeholder="请选择客户" type="text" readonly="readonly" onclick="this.select_customer()"/> 
            </div>  
            <!--<div id="wpasspanel">
			<label id="wpasslabel">密码</label>
			<input id="wpasstext" maxlength="256" placeholder="请输入密�??" type="password"/>
			</div>
			<div id="wrepasspanel">
			<label id="wrepasslabel">确认密码</label>
			<input id="wrepasstext" maxlength="256" placeholder="请确认密�??" type="password"/>
			</div>  -->  
            <input id="wregisterbutton" value="查询" class="buttonclass registerbuttonclass" onclick="this.searchbutton_onclick()" type="button"/> 
        </div> 
    </div> 
</window>
