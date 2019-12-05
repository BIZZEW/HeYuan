//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.DeliveryOrderSearchController');
	com.yonyou.placeorder.DeliveryOrderSearchController = function() {
		com.yonyou.placeorder.DeliveryOrderSearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$initialize() {
		//you can programing by $ctx API
		//get the context data through $ctx.get()
		//set the context data through $ctx.push(json)
		//set the field of the context through $ctx.put(fieldName, fieldValue)
		//get the parameter of the context through $ctx.param(parameterName)
		//Demo Code:
		//    var str = $ctx.getString();      //获取当前Context对应的字符串
		//    alert($ctx.getString())          //alert当前Context对应的字符串
		//    var json = $ctx.getJSONObject(); //获取当前Context，返回值为json
		//    json["x"] = "a";        //为当前json增加字段
		//    json["y"] = [];           //为当前json增加数组
		//    $ctx.push(json);            //设置context，并自动调用数据绑定
		//
		//    put方法需手动调用databind()
		//    var x = $ctx.get("x");    //获取x字段值
		//    $ctx.put("x", "b");     //设置x字段值
		//    $ctx.put("x", "b");     //设置x字段值
		//    $ctx.databind();            //调用数据绑定才能将修改的字段绑定到控件上
		//    var p1 = $param.getString("p1");   //获取参数p2的值，返回一个字符串
		//    var p2 = $param.getJSONObject("p2");   //获取参数p3的值，返回一个JSON对象
		//    var p3 = $param.getJSONArray("p3");   //获取参数p1的值，返回一个数组

		//your initialize code below...

	}

	function com$yonyou$placeorder$DeliveryOrderSearchController$evaljs(js) {
		eval(js)
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$pageonload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
		var user = JSON.parse($ctx.getApp("appuser"));
		if(user&&user.dfltsendstockorg){
			com.yonyou.placeorder.DeliveryOrderSearchController.pk_stockorg=user.dfltsendstockorg.pk_org
			$id("stockorg").set("value", user.dfltsendstockorg.name);
		}
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$back_onclick(sender, args) {
		$view.close()
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$stockOrgOnclick(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.SEND_STOCK_ORG,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);
				com.yonyou.placeorder.DeliveryOrderSearchController.pk_stockorg=retvalue.pk;
				$id("stockorg").set("value", retvalue.name);
			}
		})
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$clearsender(sender, args) {
		delete com.yonyou.placeorder.DeliveryOrderSearchController.pk_stockorg;
		$id("stockorg").set("value", "请选择发货企业");
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$changecustomer(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);
				com.yonyou.placeorder.DeliveryOrderSearchController.pk_customer=retvalue.pk;
				$id("customer").set("value", retvalue.name);
			}
		})
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$clearcustomer(sender, args) {
		delete com.yonyou.placeorder.DeliveryOrderSearchController.pk_customer;
		$id("customer").set("value", "请选择客户");
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$changegoods(sender, args) {
		if(com.yonyou.placeorder.DeliveryOrderSearchController.pk_stockorg){
			var otherparams={
				"pk_stockorg":com.yonyou.placeorder.DeliveryOrderSearchController.pk_stockorg
			};
			$view.open({
				viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype" : Globals.RefInfoType.AVAILGOODS,
				"otherparams":otherparams,
				"callback" : function(){
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
					com.yonyou.placeorder.DeliveryOrderSearchController.cmaterialid=retvalue.pk;
					$id("cmaterialid").set("value", retvalue.name);
				}
			});
		}else{
			$alert("请先选择发货企业");
		}
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$cleargoods(sender, args) {
		delete com.yonyou.placeorder.DeliveryOrderSearchController.cmaterialid;
		$id("cmaterialid").set("value", "请选择货物");
	}
	function com$yonyou$placeorder$DeliveryOrderSearchController$changecar(sender, args) {
		if(com.yonyou.placeorder.DeliveryOrderSearchController.pk_customer){
			var otherparams={
				"pk_customer":com.yonyou.placeorder.DeliveryOrderSearchController.pk_customer
			};
			$view.open({
				viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype" : Globals.RefInfoType.CURUSER_VEHICLE,
				"otherparams":otherparams,
				"callback" : function(){
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
					$id("vlicnese").set("value", retvalue.code);
				}
			})
		}else{
			$alert("请先选择客户");
		}
	}

	function com$yonyou$placeorder$DeliveryOrderSearchController$search_onclick(sender, args) {
		var begindate=$id("begindate").get("value");
		var enddate=$id("enddate").get("value");
		if(begindate&&enddate){
			if(Globals.compareDate(begindate,enddate)>0){
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		var queryparam={
			"pk_appuser" : $ctx.getApp("pk_appuser"),
			"begindate" : $id("begindate").get("value"),
			"enddate" : $id("enddate").get("value"),
		};
		if(com.yonyou.placeorder.DeliveryOrderSearchController.pk_stockorg){
			queryparam["pk_stockorg"]=com.yonyou.placeorder.DeliveryOrderSearchController.pk_stockorg;
		}else{
			$alert("发货企业必选");
			return;
		}
		if(com.yonyou.placeorder.DeliveryOrderSearchController.pk_customer){
			queryparam["pk_customer"]=com.yonyou.placeorder.DeliveryOrderSearchController.pk_customer;
		}
		if(com.yonyou.placeorder.DeliveryOrderSearchController.cmaterialid){
			queryparam["cmaterialid"]=com.yonyou.placeorder.DeliveryOrderSearchController.cmaterialid;
		}
		var vlicense=$id("vlicense").get("value");
		if(vlicense){
			if(Globals.checkSpecialChar(vlicense)){
				$alert("车牌号不能包含特殊字符%或_");
				return;
			}
			queryparam["vlicense"]=vlicense;
		}
		var ordercode=$id("ordercode").get("value");
		if(ordercode){
			if(Globals.checkSpecialChar(ordercode)){
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
			queryparam["noticecode"]=ordercode;
		}
		$view.open({
			viewid : "com.yonyou.placeorder.DeliveryOrderList", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param" : queryparam
		})
	}

	com.yonyou.placeorder.DeliveryOrderSearchController.prototype = {
		cleargoods : com$yonyou$placeorder$DeliveryOrderSearchController$cleargoods,
		clearsender : com$yonyou$placeorder$DeliveryOrderSearchController$clearsender,
		clearcustomer : com$yonyou$placeorder$DeliveryOrderSearchController$clearcustomer,
		changecustomer : com$yonyou$placeorder$DeliveryOrderSearchController$changecustomer,
		pageonload : com$yonyou$placeorder$DeliveryOrderSearchController$pageonload,
		changecar : com$yonyou$placeorder$DeliveryOrderSearchController$changecar,
		stockOrgOnclick : com$yonyou$placeorder$DeliveryOrderSearchController$stockOrgOnclick,
		stockOrgOnclick : com$yonyou$placeorder$DeliveryOrderSearchController$stockOrgOnclick,
		back_onclick : com$yonyou$placeorder$DeliveryOrderSearchController$back_onclick,
		changegoods : com$yonyou$placeorder$DeliveryOrderSearchController$changegoods,
		search_onclick : com$yonyou$placeorder$DeliveryOrderSearchController$search_onclick,
		initialize : com$yonyou$placeorder$DeliveryOrderSearchController$initialize,
		evaljs : com$yonyou$placeorder$DeliveryOrderSearchController$evaljs
	};
	com.yonyou.placeorder.DeliveryOrderSearchController.registerClass('com.yonyou.placeorder.DeliveryOrderSearchController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
