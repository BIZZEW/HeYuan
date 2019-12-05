//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.BalanceQueryListController');

	com.yonyou.placeorder.BalanceQueryListController = function() {
		com.yonyou.placeorder.BalanceQueryListController.initializeBase(this);
		this.initialize();
	};
	
	function com$yonyou$placeorder$BalanceQueryListController$initialize() {
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
	
	function com$yonyou$placeorder$BalanceQueryListController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$BalanceQueryListController$pageOnload(sender, args){
		var begindate=Globals.getFormatDate(null,-1);
		var enddate=Globals.getFormatDate(null,0);
		$id("begindate").set("value",begindate);
		$id("enddate").set("value",enddate);
		var otherparam = $param.getJSONObject("otherparams");
		var user = JSON.parse($ctx.getApp("appuser"));
		com.yonyou.placeorder.BalanceQueryListController.queryparam={
			"pk_appuser":user.pk_appuser,
			"begindate":begindate,
			"enddate":enddate
		};
		com.yonyou.placeorder.BalanceQueryListController.showquery=1;
	}	
	function com$yonyou$placeorder$BalanceQueryListController$back_onclick(sender, args) {
		$view.close()
	}
	function com$yonyou$placeorder$BalanceQueryListController$selectCustomer(sender, args){
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);
				com.yonyou.placeorder.BalanceQueryListController.queryparam["ccustomerid"]=retvalue.pk;
				$id("lbl_querycustomer").set("value", retvalue.name);
				com.yonyou.placeorder.BalanceQueryListController.customername=retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$BalanceQueryListController$customerOnLongClick(sender, args){
		delete com.yonyou.placeorder.BalanceQueryListController.queryparam["ccustomerid"];
		$id("lbl_querycustomer").set("value", "请选择客户");
		delete com.yonyou.placeorder.BalanceQueryListController.customername;
	}
	function com$yonyou$placeorder$BalanceQueryListController$selectSaleorg(sender, args){
		var pk_customer=com.yonyou.placeorder.BalanceQueryListController.queryparam["ccustomerid"];
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
					com.yonyou.placeorder.BalanceQueryListController.queryparam["pk_saleorg"]=retvalue.pk;
					$id("lbl_querysaleorg").set("value", retvalue.name);
					com.yonyou.placeorder.BalanceQueryListController.saleorgname=retvalue.name;
				}
			})
		}else{
			$alert("请先选择客户");
		}
	}
	function com$yonyou$placeorder$BalanceQueryListController$saleorgOnlongClick(sender, args){
		delete com.yonyou.placeorder.BalanceQueryListController.queryparam["pk_saleorg"];
		$id("lbl_querysaleorg").set("value", "请选择销售单位");
		delete com.yonyou.placeorder.BalanceQueryListController.saleorgname;
	}	
	function com$yonyou$placeorder$BalanceQueryListController$selectStockorg(sender, args){
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.SEND_STOCK_ORG,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);
				com.yonyou.placeorder.BalanceQueryListController.queryparam["pk_stockorg"]=retvalue.pk;
				$id("lbl_querystockorg").set("value", retvalue.name);
				com.yonyou.placeorder.BalanceQueryListController.stockorgname=retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$BalanceQueryListController$stockorgOnlongClick(sender, args){
		delete com.yonyou.placeorder.BalanceQueryListController.queryparam["pk_stockorg"];
		$id("lbl_querystockorg").set("value", "请选择发货企业");
		delete com.yonyou.placeorder.BalanceQueryListController.stockorgname;
	}	
	function com$yonyou$placeorder$BalanceQueryListController$selectMatOnclick(sender, args){
		if(com.yonyou.placeorder.BalanceQueryListController.queryparam["pk_stockorg"]){
			var otherparams={
				"pk_stockorg":com.yonyou.placeorder.BalanceQueryListController.queryparam["pk_stockorg"]
			};
			$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.AVAILGOODS,
			"otherparams":otherparams,
			"callback" : function(){
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
				com.yonyou.placeorder.BalanceQueryListController.queryparam["cmaterialid"]=retvalue.pk;
				$id("lbl_matname").set("value", retvalue.name);
				com.yonyou.placeorder.BalanceQueryListController.materialname=retvalue.name;
			}
		})
		}else{
			$alert("请先选择发货企业");
		}
		
	}
	function com$yonyou$placeorder$BalanceQueryListController$matOnlongClick(sender, args){
		delete com.yonyou.placeorder.BalanceQueryListController.queryparam["cmaterialid"];
		$id("lbl_matname").set("value", "请选择货物");
		delete com.yonyou.placeorder.BalanceQueryListController.materialname;
	}
	function com$yonyou$placeorder$BalanceQueryListController$selectCar(sender, args){
		var pk_customer=com.yonyou.placeorder.BalanceQueryListController.queryparam["cmaterialid"];
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
					com.yonyou.placeorder.BalanceQueryListController.vlicense=retvalue.code;
				}
			})
		}
	}	
	function com$yonyou$placeorder$BalanceQueryListController$search_onclick(sender, args) {
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
		com.yonyou.placeorder.BalanceQueryListController.queryparam["begindate"]=begindate;
		com.yonyou.placeorder.BalanceQueryListController.queryparam["enddate"]=enddate;
		if(orderno){
			if(Globals.checkSpecialChar(orderno)){
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
			com.yonyou.placeorder.BalanceQueryListController.queryparam["orderno"]=orderno;
		}else{
			delete com.yonyou.placeorder.BalanceQueryListController.queryparam.orderno;
		}
		if(vlicense){
			if(Globals.checkSpecialChar(vlicense)){
				$alert("车牌号不能包含特殊字符%或_");
				return;
			}
			com.yonyou.placeorder.BalanceQueryListController.queryparam["vlicense"]=vlicense;
		}else{
			delete delete com.yonyou.placeorder.BalanceQueryListController.queryparam.vlicense;
		}
		$id("pnl_queryarea").set("display","none");
		com.yonyou.placeorder.BalanceQueryListController.showquery=0;
		com.yonyou.placeorder.BalanceQueryListController.datajson={
			datas:[]
		};
		com.yonyou.placeorder.BalanceQueryListController.page=1;
		fetchDatas();
	}
	function com$yonyou$placeorder$BalanceQueryListController$showqueryOnclick(sender, args){
		if(com.yonyou.placeorder.BalanceQueryListController.showquery==0){
			com.yonyou.placeorder.BalanceQueryListController.showquery=1;
			$id("pnl_queryarea").set("display","block");
			var queryparam=com.yonyou.placeorder.BalanceQueryListController.queryparam;
			$id("begindate").set("value",queryparam["begindate"]);
			$id("enddate").set("value",queryparam["enddate"]);
			$id("txt_vbillcode").set("value",queryparam["orderno"]);
			$id("txt_vlicense").set("value",queryparam["vlicense"]);
			var mname=com.yonyou.placeorder.BalanceQueryListController.materialname;
			if(mname!=undefined&&mname!=null&&mname!=""){
				$id("lbl_matname").set("value", mname);
			}
			var saleorgname=com.yonyou.placeorder.BalanceQueryListController.saleorgname;
			if(saleorgname!=undefined&&saleorgname!=null&&saleorgname!=""){
				$id("lbl_querysaleorg").set("value", saleorgname);
			}
			var stockorgname=com.yonyou.placeorder.BalanceQueryListController.stockorgname;
			if(stockorgname!=undefined&&stockorgname!=null&&stockorgname!=""){
				$id("lbl_querystockorg").set("value", stockorgname);
			}
			var customername=com.yonyou.placeorder.BalanceQueryListController.customername;
			if(customername!=undefined&&customername!=null&&customername!=""){
				$id("lbl_querycustomer").set("value", customername);
			}
			
		}else if(com.yonyou.placeorder.BalanceQueryListController.showquery==1){
			com.yonyou.placeorder.BalanceQueryListController.showquery=0;
			$id("pnl_queryarea").set("display","none");
		}
	}
	function com$yonyou$placeorder$BalanceQueryListController$itemOnclick(sender, args){
		$view.closeWithCallBack({
	        "saleorder":$id("list_saleorder").get("row")
	    });
	}
	function com$yonyou$placeorder$BalanceQueryListController$listOndown(sender, args){
		fetchDatas();
	}	
	function com$yonyou$placeorder$BalanceQueryListController$listOnup(sender, args){
		com.yonyou.placeorder.BalanceQueryListController.datajson={
			datas:[]
		};
		com.yonyou.placeorder.BalanceQueryListController.page=1;
		fetchDatas();
	}
	function fetchDatas(){
		var queryparam=com.yonyou.placeorder.BalanceQueryListController.queryparam;
		queryparam["page"]=com.yonyou.placeorder.BalanceQueryListController.page;
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
		var olddatajson=com.yonyou.placeorder.BalanceQueryListController.datajson;
		if(result){
			if(result.statuscode=="0"){
				if(result.datas&&result.datas.queryresults){
					var newdatas=olddatajson["datas"].concat(result.datas.queryresults);
					com.yonyou.placeorder.BalanceQueryListController.datajson={
						datas:newdatas
					}
					com.yonyou.placeorder.BalanceQueryListController.page++;
					$ctx.push(com.yonyou.placeorder.BalanceQueryListController.datajson);
				}else{
					$alert("没有更多数据了");
					$ctx.push(com.yonyou.placeorder.BalanceQueryListController.datajson);
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
	com.yonyou.placeorder.BalanceQueryListController.prototype = {
    	matOnlongClick : com$yonyou$placeorder$BalanceQueryListController$matOnlongClick,
    	stockorgOnlongClick : com$yonyou$placeorder$BalanceQueryListController$stockorgOnlongClick,
    	saleorgOnlongClick : com$yonyou$placeorder$BalanceQueryListController$saleorgOnlongClick,
    	customerOnLongClick : com$yonyou$placeorder$BalanceQueryListController$customerOnLongClick,
    	selectCar : com$yonyou$placeorder$BalanceQueryListController$selectCar,
    	selectCustomer : com$yonyou$placeorder$BalanceQueryListController$selectCustomer,
    	selectStockorg : com$yonyou$placeorder$BalanceQueryListController$selectStockorg,
    	selectSaleorg : com$yonyou$placeorder$BalanceQueryListController$selectSaleorg,
    	showqueryOnclick : com$yonyou$placeorder$BalanceQueryListController$showqueryOnclick,
    	itemOnclick : com$yonyou$placeorder$BalanceQueryListController$itemOnclick,
    	listOnup : com$yonyou$placeorder$BalanceQueryListController$listOnup,
    	listOndown : com$yonyou$placeorder$BalanceQueryListController$listOndown,
    	pageOnload : com$yonyou$placeorder$BalanceQueryListController$pageOnload,
	    selectMatOnclick : com$yonyou$placeorder$BalanceQueryListController$selectMatOnclick,
		search_onclick : com$yonyou$placeorder$BalanceQueryListController$search_onclick,
		back_onclick : com$yonyou$placeorder$BalanceQueryListController$back_onclick,
		initialize : com$yonyou$placeorder$BalanceQueryListController$initialize,
		evaljs : com$yonyou$placeorder$BalanceQueryListController$evaljs
	};

	com.yonyou.placeorder.BalanceQueryListController.registerClass('com.yonyou.placeorder.BalanceQueryListController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}

