//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.HugeSalesOrderListController');
	com.yonyou.placeorder.HugeSalesOrderListController = function() {
		com.yonyou.placeorder.HugeSalesOrderListController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$initialize() {
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

	function com$yonyou$placeorder$HugeSalesOrderListController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$HugeSalesOrderListController$pageOnload(sender, args){
		var begindate=Globals.getFormatDate(null,-1);
		var enddate=Globals.getFormatDate(null,0);
		$id("begindate").set("value",begindate);
		$id("enddate").set("value",enddate);
		var otherparam = $param.getJSONObject("otherparams");
		var user = JSON.parse($ctx.getApp("appuser"));
		com.yonyou.placeorder.HugeSalesOrderListController.queryparam={
			"pk_appuser":user.pk_appuser,
			"begindate":begindate,
			"enddate":enddate
		};
		com.yonyou.placeorder.HugeSalesOrderListController.showquery=1;
	}	
	function com$yonyou$placeorder$HugeSalesOrderListController$back_onclick(sender, args) {
		$view.close()
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$selectCustomer(sender, args){
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);
				com.yonyou.placeorder.HugeSalesOrderListController.queryparam["ccustomerid"]=retvalue.pk;
				$id("lbl_querycustomer").set("value", retvalue.name);
				com.yonyou.placeorder.HugeSalesOrderListController.customername=retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$customerOnLongClick(sender, args){
		delete com.yonyou.placeorder.HugeSalesOrderListController.queryparam["ccustomerid"];
		$id("lbl_querycustomer").set("value", "请选择客户");
		delete com.yonyou.placeorder.HugeSalesOrderListController.customername;
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$selectSaleorg(sender, args){
		var pk_customer=com.yonyou.placeorder.HugeSalesOrderListController.queryparam["ccustomerid"];
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
					com.yonyou.placeorder.HugeSalesOrderListController.queryparam["pk_saleorg"]=retvalue.pk;
					$id("lbl_querysaleorg").set("value", retvalue.name);
					com.yonyou.placeorder.HugeSalesOrderListController.saleorgname=retvalue.name;
				}
			})
		}else{
			$alert("请先选择客户");
		}
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$saleorgOnlongClick(sender, args){
		delete com.yonyou.placeorder.HugeSalesOrderListController.queryparam["pk_saleorg"];
		$id("lbl_querysaleorg").set("value", "请选择销售单位");
		delete com.yonyou.placeorder.HugeSalesOrderListController.saleorgname;
	}	
	function com$yonyou$placeorder$HugeSalesOrderListController$selectStockorg(sender, args){
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.SEND_STOCK_ORG,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);
				com.yonyou.placeorder.HugeSalesOrderListController.queryparam["pk_stockorg"]=retvalue.pk;
				$id("lbl_querystockorg").set("value", retvalue.name);
				com.yonyou.placeorder.HugeSalesOrderListController.stockorgname=retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$stockorgOnlongClick(sender, args){
		delete com.yonyou.placeorder.HugeSalesOrderListController.queryparam["pk_stockorg"];
		$id("lbl_querystockorg").set("value", "请选择发货企业");
		delete com.yonyou.placeorder.HugeSalesOrderListController.stockorgname;
	}	
	function com$yonyou$placeorder$HugeSalesOrderListController$selectMatOnclick(sender, args){
		if(com.yonyou.placeorder.HugeSalesOrderListController.queryparam["pk_stockorg"]){
			var otherparams={
				"pk_stockorg":com.yonyou.placeorder.HugeSalesOrderListController.queryparam["pk_stockorg"]
			};
			$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.AVAILGOODS,
			"otherparams":otherparams,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
				com.yonyou.placeorder.HugeSalesOrderListController.queryparam["cmaterialid"]=retvalue.pk;
				$id("lbl_matname").set("value", retvalue.name);
				com.yonyou.placeorder.HugeSalesOrderListController.materialname=retvalue.name;
			}
		})
		}else{
			$alert("请先选择发货企业");
		}
		
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$matOnlongClick(sender, args){
		delete com.yonyou.placeorder.HugeSalesOrderListController.queryparam["cmaterialid"];
		$id("lbl_matname").set("value", "请选择货物");
		delete com.yonyou.placeorder.HugeSalesOrderListController.materialname;
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$selectCar(sender, args){
		var pk_customer=com.yonyou.placeorder.HugeSalesOrderListController.queryparam["cmaterialid"];
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
					com.yonyou.placeorder.HugeSalesOrderListController.vlicense=retvalue.code;
				}
			})
		}
	}	
	function com$yonyou$placeorder$HugeSalesOrderListController$search_onclick(sender, args) {
		var begindate=$id("begindate").get("value");
		var enddate=$id("enddate").get("value");
		if(begindate&&enddate){
			if(Globals.compareDate(begindate,enddate)>0){
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		// var orderno=$id("txt_vbillcode").get("value");
		// var vlicense=$id("txt_vlicense").get("value");
		com.yonyou.placeorder.HugeSalesOrderListController.queryparam["begindate"]=begindate;
		com.yonyou.placeorder.HugeSalesOrderListController.queryparam["enddate"]=enddate;
		// if(orderno){
		// 	if(Globals.checkSpecialChar(orderno)){
		// 		$alert("订单号不能包含特殊字符%或_");
		// 		return;
		// 	}
		// 	com.yonyou.placeorder.HugeSalesOrderListController.queryparam["orderno"]=orderno;
		// }else{
		// 	delete com.yonyou.placeorder.HugeSalesOrderListController.queryparam.orderno;
		// }
		// if(vlicense){
		// 	if(Globals.checkSpecialChar(vlicense)){
		// 		$alert("车牌号不能包含特殊字符%或_");
		// 		return;
		// 	}
		// 	com.yonyou.placeorder.HugeSalesOrderListController.queryparam["vlicense"]=vlicense;
		// }else{
		// 	delete delete com.yonyou.placeorder.HugeSalesOrderListController.queryparam.vlicense;
		// }
		$id("pnl_queryarea").set("display","none");
		com.yonyou.placeorder.HugeSalesOrderListController.showquery=0;
		com.yonyou.placeorder.HugeSalesOrderListController.datajson={
			datas:[]
		};
		com.yonyou.placeorder.HugeSalesOrderListController.page=1;
		fetchDatas();
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$showqueryOnclick(sender, args){
		if(com.yonyou.placeorder.HugeSalesOrderListController.showquery==0){
			com.yonyou.placeorder.HugeSalesOrderListController.showquery=1;
			$id("pnl_queryarea").set("display","block");
			var queryparam=com.yonyou.placeorder.HugeSalesOrderListController.queryparam;
			$id("begindate").set("value",queryparam["begindate"]);
			$id("enddate").set("value",queryparam["enddate"]);
			// $id("txt_vbillcode").set("value",queryparam["orderno"]);
			// $id("txt_vlicense").set("value",queryparam["vlicense"]);
			var mname=com.yonyou.placeorder.HugeSalesOrderListController.materialname;
			if(mname!=undefined&&mname!=null&&mname!=""){
				$id("lbl_matname").set("value", mname);
			}
			var saleorgname=com.yonyou.placeorder.HugeSalesOrderListController.saleorgname;
			if(saleorgname!=undefined&&saleorgname!=null&&saleorgname!=""){
				$id("lbl_querysaleorg").set("value", saleorgname);
			}
			var stockorgname=com.yonyou.placeorder.HugeSalesOrderListController.stockorgname;
			if(stockorgname!=undefined&&stockorgname!=null&&stockorgname!=""){
				$id("lbl_querystockorg").set("value", stockorgname);
			}
			var customername=com.yonyou.placeorder.HugeSalesOrderListController.customername;
			if(customername!=undefined&&customername!=null&&customername!=""){
				$id("lbl_querycustomer").set("value", customername);
			}
			
		}else if(com.yonyou.placeorder.HugeSalesOrderListController.showquery==1){
			com.yonyou.placeorder.HugeSalesOrderListController.showquery=0;
			$id("pnl_queryarea").set("display","none");
		}
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$itemOnclick(sender, args){
		$view.closeWithCallBack({
	        "saleorder":$id("list_saleorder").get("row")
	    });
	}
	function com$yonyou$placeorder$HugeSalesOrderListController$listOndown(sender, args){
		fetchDatas();
	}	
	function com$yonyou$placeorder$HugeSalesOrderListController$listOnup(sender, args){
		com.yonyou.placeorder.HugeSalesOrderListController.datajson={
			datas:[]
		};
		com.yonyou.placeorder.HugeSalesOrderListController.page=1;
		fetchDatas();
	}
	function fetchDatas(){
		var queryparam=com.yonyou.placeorder.HugeSalesOrderListController.queryparam;
		queryparam["page"]=com.yonyou.placeorder.HugeSalesOrderListController.page;
		queryparam["usercode"]=$cache.read("telephone");
		$service.callAction({
		"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
	        "viewid" : "com.yonyou.placeorder.BigTicketOrderUMController",
	        "action" : "queryBigTicketOrder",
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
		var olddatajson=com.yonyou.placeorder.HugeSalesOrderListController.datajson;
		if(result){
			if(result.statuscode=="0"){
				if(result.datas&&result.datas.queryresults){
					var newdatas=olddatajson["datas"].concat(result.datas.queryresults);
					com.yonyou.placeorder.HugeSalesOrderListController.datajson={
						datas:newdatas
					}
					com.yonyou.placeorder.HugeSalesOrderListController.page++;
					$ctx.push(com.yonyou.placeorder.HugeSalesOrderListController.datajson);
				}else{
					$alert("没有更多数据了");
					$ctx.push(com.yonyou.placeorder.HugeSalesOrderListController.datajson);
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
	com.yonyou.placeorder.HugeSalesOrderListController.prototype = {
    	matOnlongClick : com$yonyou$placeorder$HugeSalesOrderListController$matOnlongClick,
    	stockorgOnlongClick : com$yonyou$placeorder$HugeSalesOrderListController$stockorgOnlongClick,
    	saleorgOnlongClick : com$yonyou$placeorder$HugeSalesOrderListController$saleorgOnlongClick,
    	customerOnLongClick : com$yonyou$placeorder$HugeSalesOrderListController$customerOnLongClick,
    	selectCar : com$yonyou$placeorder$HugeSalesOrderListController$selectCar,
    	selectCustomer : com$yonyou$placeorder$HugeSalesOrderListController$selectCustomer,
    	selectStockorg : com$yonyou$placeorder$HugeSalesOrderListController$selectStockorg,
    	selectSaleorg : com$yonyou$placeorder$HugeSalesOrderListController$selectSaleorg,
    	showqueryOnclick : com$yonyou$placeorder$HugeSalesOrderListController$showqueryOnclick,
    	itemOnclick : com$yonyou$placeorder$HugeSalesOrderListController$itemOnclick,
    	listOnup : com$yonyou$placeorder$HugeSalesOrderListController$listOnup,
    	listOndown : com$yonyou$placeorder$HugeSalesOrderListController$listOndown,
    	pageOnload : com$yonyou$placeorder$HugeSalesOrderListController$pageOnload,
	    selectMatOnclick : com$yonyou$placeorder$HugeSalesOrderListController$selectMatOnclick,
		search_onclick : com$yonyou$placeorder$HugeSalesOrderListController$search_onclick,
		back_onclick : com$yonyou$placeorder$HugeSalesOrderListController$back_onclick,
		initialize : com$yonyou$placeorder$HugeSalesOrderListController$initialize,
		evaljs : com$yonyou$placeorder$HugeSalesOrderListController$evaljs
	};
	com.yonyou.placeorder.HugeSalesOrderListController.registerClass('com.yonyou.placeorder.HugeSalesOrderListController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
