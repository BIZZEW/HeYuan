//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.SalesOrderListController');
	com.yonyou.placeorder.SalesOrderListController = function() {
		com.yonyou.placeorder.SalesOrderListController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$SalesOrderListController$initialize() {
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

	function com$yonyou$placeorder$SalesOrderListController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$SalesOrderListController$pageOnload(sender, args){
		var begindate=Globals.getFormatDate(null,-1);
		var enddate=Globals.getFormatDate(null,0);
		$id("begindate").set("value",begindate);
		$id("enddate").set("value",enddate);
		var otherparam = $param.getJSONObject("otherparams");
		var user = JSON.parse($ctx.getApp("appuser"));
		com.yonyou.placeorder.SalesOrderListController.queryparam={
			"pk_appuser":user.pk_appuser,
			"begindate":begindate,
			"enddate":enddate
		};
		com.yonyou.placeorder.SalesOrderListController.showquery=1;
	}	
	function com$yonyou$placeorder$SalesOrderListController$back_onclick(sender, args) {
		$view.close()
	}
	function com$yonyou$placeorder$SalesOrderListController$selectCustomer(sender, args){
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);
				com.yonyou.placeorder.SalesOrderListController.queryparam["ccustomerid"]=retvalue.pk;
				$id("lbl_querycustomer").set("value", retvalue.name);
				com.yonyou.placeorder.SalesOrderListController.customername=retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$SalesOrderListController$customerOnLongClick(sender, args){
		delete com.yonyou.placeorder.SalesOrderListController.queryparam["ccustomerid"];
		$id("lbl_querycustomer").set("value", "请选择客户");
		delete com.yonyou.placeorder.SalesOrderListController.customername;
	}
	function com$yonyou$placeorder$SalesOrderListController$selectSaleorg(sender, args){
		var pk_customer=com.yonyou.placeorder.SalesOrderListController.queryparam["ccustomerid"];
		if(pk_customer){
			$view.open({
				viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype" : Globals.RefInfoType.SALE_ORG,
				"otherparams":{
					"pk_customer":pk_customer
				},
				"callback" : function(){
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);
					com.yonyou.placeorder.SalesOrderListController.queryparam["pk_saleorg"]=retvalue.pk;
					$id("lbl_querysaleorg").set("value", retvalue.name);
					com.yonyou.placeorder.SalesOrderListController.saleorgname=retvalue.name;
				}
			})
		}else{
			$alert("请先选择客户");
		}
	}
	function com$yonyou$placeorder$SalesOrderListController$saleorgOnlongClick(sender, args){
		delete com.yonyou.placeorder.SalesOrderListController.queryparam["pk_saleorg"];
		$id("lbl_querysaleorg").set("value", "请选择销售单位");
		delete com.yonyou.placeorder.SalesOrderListController.saleorgname;
	}	
	function com$yonyou$placeorder$SalesOrderListController$selectStockorg(sender, args){
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.SEND_STOCK_ORG,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);
				com.yonyou.placeorder.SalesOrderListController.queryparam["pk_stockorg"]=retvalue.pk;
				$id("lbl_querystockorg").set("value", retvalue.name);
				com.yonyou.placeorder.SalesOrderListController.stockorgname=retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$SalesOrderListController$stockorgOnlongClick(sender, args){
		delete com.yonyou.placeorder.SalesOrderListController.queryparam["pk_stockorg"];
		$id("lbl_querystockorg").set("value", "请选择发货企业");
		delete com.yonyou.placeorder.SalesOrderListController.stockorgname;
	}	
	function com$yonyou$placeorder$SalesOrderListController$selectMatOnclick(sender, args){
		if(com.yonyou.placeorder.SalesOrderListController.queryparam["pk_stockorg"]){
			var otherparams={
				"pk_stockorg":com.yonyou.placeorder.SalesOrderListController.queryparam["pk_stockorg"]
			};
			$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.AVAILGOODS,
			"otherparams":otherparams,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
				com.yonyou.placeorder.SalesOrderListController.queryparam["cmaterialid"]=retvalue.pk;
				$id("lbl_matname").set("value", retvalue.name);
				com.yonyou.placeorder.SalesOrderListController.materialname=retvalue.name;
			}
		})
		}else{
			$alert("请先选择发货企业");
		}
		
	}
	function com$yonyou$placeorder$SalesOrderListController$matOnlongClick(sender, args){
		delete com.yonyou.placeorder.SalesOrderListController.queryparam["cmaterialid"];
		$id("lbl_matname").set("value", "请选择货物");
		delete com.yonyou.placeorder.SalesOrderListController.materialname;
	}
	function com$yonyou$placeorder$SalesOrderListController$selectCar(sender, args){
		var pk_customer=com.yonyou.placeorder.SalesOrderListController.queryparam["cmaterialid"];
		if(pk_customer==undefined||pk_customer==null||pk_customer==""){
			$alert("选择车辆信息前必须选择客户");
		}else{
			$view.open({
				viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype" : Globals.RefInfoType.CURUSER_VEHICLE,
				"otherparams":{
		        	"pk_customer":pk_customer
		        },
				"callback" : function(){
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
					$id("txt_vlicense").set("value", retvalue.code);
					com.yonyou.placeorder.SalesOrderListController.vlicense=retvalue.code;
				}
			})
		}
	}	
	function com$yonyou$placeorder$SalesOrderListController$search_onclick(sender, args) {
		var begindate=$id("begindate").get("value");
		var enddate=$id("enddate").get("value");
		if(begindate&&enddate){
			if(Globals.compareDate(begindate,enddate)>0){
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		var orderno=$id("txt_vbillcode").get("value");
		var vlicense=$id("txt_vlicense").get("value");
		com.yonyou.placeorder.SalesOrderListController.queryparam["begindate"]=begindate;
		com.yonyou.placeorder.SalesOrderListController.queryparam["enddate"]=enddate;
		if(orderno){
			if(Globals.checkSpecialChar(orderno)){
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
			com.yonyou.placeorder.SalesOrderListController.queryparam["orderno"]=orderno;
		}else{
			delete com.yonyou.placeorder.SalesOrderListController.queryparam.orderno;
		}
		if(vlicense){
			if(Globals.checkSpecialChar(vlicense)){
				$alert("车牌号不能包含特殊字符%或_");
				return;
			}
			com.yonyou.placeorder.SalesOrderListController.queryparam["vlicense"]=vlicense;
		}else{
			delete delete com.yonyou.placeorder.SalesOrderListController.queryparam.vlicense;
		}
		$id("pnl_queryarea").set("display","none");
		com.yonyou.placeorder.SalesOrderListController.showquery=0;
		com.yonyou.placeorder.SalesOrderListController.datajson={
			datas:[]
		};
		com.yonyou.placeorder.SalesOrderListController.page=1;
		fetchDatas();
	}
	function com$yonyou$placeorder$SalesOrderListController$showqueryOnclick(sender, args){
		if(com.yonyou.placeorder.SalesOrderListController.showquery==0){
			com.yonyou.placeorder.SalesOrderListController.showquery=1;
			$id("pnl_queryarea").set("display","block");
			var queryparam=com.yonyou.placeorder.SalesOrderListController.queryparam;
			$id("begindate").set("value",queryparam["begindate"]);
			$id("enddate").set("value",queryparam["enddate"]);
			$id("txt_vbillcode").set("value",queryparam["orderno"]);
			$id("txt_vlicense").set("value",queryparam["vlicense"]);
			var mname=com.yonyou.placeorder.SalesOrderListController.materialname;
			if(mname!=undefined&&mname!=null&&mname!=""){
				$id("lbl_matname").set("value", mname);
			}
			var saleorgname=com.yonyou.placeorder.SalesOrderListController.saleorgname;
			if(saleorgname!=undefined&&saleorgname!=null&&saleorgname!=""){
				$id("lbl_querysaleorg").set("value", saleorgname);
			}
			var stockorgname=com.yonyou.placeorder.SalesOrderListController.stockorgname;
			if(stockorgname!=undefined&&stockorgname!=null&&stockorgname!=""){
				$id("lbl_querystockorg").set("value", stockorgname);
			}
			var customername=com.yonyou.placeorder.SalesOrderListController.customername;
			if(customername!=undefined&&customername!=null&&customername!=""){
				$id("lbl_querycustomer").set("value", customername);
			}
			
		}else if(com.yonyou.placeorder.SalesOrderListController.showquery==1){
			com.yonyou.placeorder.SalesOrderListController.showquery=0;
			$id("pnl_queryarea").set("display","none");
		}
	}
	function com$yonyou$placeorder$SalesOrderListController$itemOnclick(sender, args){
		$view.closeWithCallBack({
	        "saleorder":$id("list_saleorder").get("row")
	    });
	}
	function com$yonyou$placeorder$SalesOrderListController$listOndown(sender, args){
		fetchDatas();
	}	
	function com$yonyou$placeorder$SalesOrderListController$listOnup(sender, args){
		com.yonyou.placeorder.SalesOrderListController.datajson={
			datas:[]
		};
		com.yonyou.placeorder.SalesOrderListController.page=1;
		fetchDatas();
	}
	function fetchDatas(){
		var queryparam=com.yonyou.placeorder.SalesOrderListController.queryparam;
		queryparam["page"]=com.yonyou.placeorder.SalesOrderListController.page;
		queryparam["usercode"]=$cache.read("telephone");
		$service.callAction({
		"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
	        "viewid" : "com.yonyou.placeorder.SaleAdvOrderUMController",
	        "action" : "querySaleOrder",
	        "params" : queryparam,
	        "autoDataBinding" : false,
	        "contextmapping" : "result",
	        "callback" : "connectSuccess()",
	        "error" : "connectError()"
	    });
	    $js.showLoadingBar();
	}
	function connectSuccess() {
		$js.hideLoadingBar();
		var result=$ctx.getJSONObject("result");
		var olddatajson=com.yonyou.placeorder.SalesOrderListController.datajson;
		if(result){
			if(result.statuscode=="0"){
				if(result.datas&&result.datas.queryresults){
					var newdatas=olddatajson["datas"].concat(result.datas.queryresults);
					com.yonyou.placeorder.SalesOrderListController.datajson={
						datas:newdatas
					}
					com.yonyou.placeorder.SalesOrderListController.page++;
					$ctx.push(com.yonyou.placeorder.SalesOrderListController.datajson);
				}else{
					$alert("没有更多数据了");
					$ctx.push(com.yonyou.placeorder.SalesOrderListController.datajson);
				}
			}else if(result.statuscode=="1"){
				$alert("系统错误:"+result.errinfo);
			}
		}
	}

	function connectError() {
		$js.hideLoadingBar();
		$alert("连接MA服务器异常");
	}
	com.yonyou.placeorder.SalesOrderListController.prototype = {
    	matOnlongClick : com$yonyou$placeorder$SalesOrderListController$matOnlongClick,
    	stockorgOnlongClick : com$yonyou$placeorder$SalesOrderListController$stockorgOnlongClick,
    	saleorgOnlongClick : com$yonyou$placeorder$SalesOrderListController$saleorgOnlongClick,
    	customerOnLongClick : com$yonyou$placeorder$SalesOrderListController$customerOnLongClick,
    	selectCar : com$yonyou$placeorder$SalesOrderListController$selectCar,
    	selectCustomer : com$yonyou$placeorder$SalesOrderListController$selectCustomer,
    	selectStockorg : com$yonyou$placeorder$SalesOrderListController$selectStockorg,
    	selectSaleorg : com$yonyou$placeorder$SalesOrderListController$selectSaleorg,
    	showqueryOnclick : com$yonyou$placeorder$SalesOrderListController$showqueryOnclick,
    	itemOnclick : com$yonyou$placeorder$SalesOrderListController$itemOnclick,
    	listOnup : com$yonyou$placeorder$SalesOrderListController$listOnup,
    	listOndown : com$yonyou$placeorder$SalesOrderListController$listOndown,
    	pageOnload : com$yonyou$placeorder$SalesOrderListController$pageOnload,
	    selectMatOnclick : com$yonyou$placeorder$SalesOrderListController$selectMatOnclick,
		search_onclick : com$yonyou$placeorder$SalesOrderListController$search_onclick,
		back_onclick : com$yonyou$placeorder$SalesOrderListController$back_onclick,
		initialize : com$yonyou$placeorder$SalesOrderListController$initialize,
		evaljs : com$yonyou$placeorder$SalesOrderListController$evaljs
	};
	com.yonyou.placeorder.SalesOrderListController.registerClass('com.yonyou.placeorder.SalesOrderListController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
