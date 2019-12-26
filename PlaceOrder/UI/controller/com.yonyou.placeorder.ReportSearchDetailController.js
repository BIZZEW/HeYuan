//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.ReportSearchDetailController');
	com.yonyou.placeorder.ReportSearchDetailController = function () {
		com.yonyou.placeorder.ReportSearchDetailController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$ReportSearchDetailController$initialize() {
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

	function com$yonyou$placeorder$ReportSearchDetailController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$ReportSearchDetailController$billcode(sender, args) {

	}

	function com$yonyou$placeorder$ReportSearchDetailController$goodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changegoods()"
		})
	}

	function com$yonyou$placeorder$ReportSearchDetailController$back(sender, args) {
		$view.close()
	}

	// function com$yonyou$placeorder$ReportSearchDetailController$requestData() {
	// 	$js.showLoadingBar();

	// 	try {
	// 		var param = {};

	// 		param.pk_appuser = $cache.read("pk_appuser");
	// 		param.usercode = $cache.read("telephone");
	// 		param.searchType = $cache.read("searchType") || "currentday";


	// 		param.start_time = "2019-05-01";
	// 		param.end_time = "2019-12-20";
	// 		param.type = "铜锍含铜";
	// 		param.customer_name = "安徽省枞阳县金岭矿业有限公司";

	// 		alert("传参为： " + JSON.stringify(param));

	// 		$service.callAction({
	// 			"user": $cache.read("telephone"),
	// 			"appid": "PlaceOrder",
	// 			"viewid": "com.yonyou.placeorder.ReportController",
	// 			"action": "DeliverySummaryAction",
	// 			"params": param,
	// 			"timeout": 300,
	// 			"autoDataBinding": false,
	// 			"contextmapping": "result",
	// 			"callback": "callbackSuccess()",
	// 			"error": "callbackFail()"
	// 		});
	// 	} catch (e) { $alert(e); }
	// }

	function com$yonyou$placeorder$ReportSearchDetailController$requestData(sender, args) {
		// 起止日期
		var begindate = $id("begindate").get("value");
		var enddate = $id("enddate").get("value");
		// 物料
		var cmaterialname = $ctx.getString("cmaterialname");
		var cmaterialid = $ctx.getString("cmaterialid");
		// 起止日期校验
		if (begindate && enddate) {
			if (Globals.compareDate(begindate, enddate) > 0) {
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		var user = JSON.parse($ctx.getApp("appuser"));
		// var vlicense = $id("vlicense").get("value");
		// if (vlicense) {
		// 	if (Globals.checkSpecialChar(vlicense)) {
		// 		$alert("车牌号不能包含特殊字符%或_");
		// 		return;
		// 	}
		// }
		// var billcode = $id("billcode").get("value");
		// if (billcode) {
		// 	if (Globals.checkSpecialChar(billcode)) {
		// 		$alert("订单号不能包含特殊字符%或_");
		// 		return;
		// 	}
		// }

		$js.showLoadingBar();

		try {
			var param = {
				"pk_appuser": user.pk_appuser,
				"usercode": $cache.read("telephone"),
				"phone_customer": "安徽省枞阳县金岭矿业有限公司",


				// 起止日期
				"start_time": $id("begindate").get("value"),
				"end_time": $id("enddate").get("value"),
				// 客户
				"pk_customer": pk_customer,
				"customer_name": customer_name,
				// 物料品种
				"type": cmaterialname,
				"cmaterialid": cmaterialid,
				// 车牌号
				"vlicense": $id("vlicense").get("value"),
				// 出厂日期：
				"outfactory": $id("outfactory").get("value"),


				// 查询类型
				"searchType": "advanced"

				// "orderno": $id("billcode").get("value"),
				// "pk_saleorg": pk_saleorg,
				// "pk_stockorg": pk_stockorg,
			};

			alert("传参为： " + JSON.stringify(param));

			$service.callAction({
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.ReportController",
				"action": "DeliveryDetailsAction",
				"params": param,
				"timeout": 300,
				"autoDataBinding": false,
				"contextmapping": "result",
				"callback": "callbackSuccess()",
				"error": "callbackFail()"
			});
		} catch (e) { $alert(e); }
	}

	function callbackSuccess() {
		$js.hideLoadingBar();

		$view.close({
			"resultcode": "15",
		});
	}

	function callbackFail(sender, args) {
		$js.hideLoadingBar();

		$alert("访问MA服务器错误:" + JSON.stringify(args));
	}

	function com$yonyou$placeorder$ReportSearchDetailController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$ReportSearchDetailController$dateOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	//选择物料
	function com$yonyou$placeorder$ReportSearchDetailController$changegoods(sender, args) {
		// if (pk_stockorg) {
		var otherparams = {
			"pk_stockorg": pk_stockorg
		};
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"otherparams": otherparams,
			"callback": "changegoods()"
		})
		// } else {
		// 	$alert("请先选择发货企业");
		// }
	}

	function changegoods() {

		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);

		$id("goodsname").set("value", retvalue.name);
		pk_material = retvalue.pk;
	}

	function com$yonyou$placeorder$ReportSearchDetailController$changeseller(sender, args) {
		if (pk_customer) {
			$view.open({
				viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype": Globals.RefInfoType.SALE_ORG,
				"otherparams": {
					"pk_customer": pk_customer
				},
				"callback": "callbackseller()"
			})
		} else {
			$alert("请先选择客户");
		}
	}

	var pk_customer,
		customer_name,
		pk_saleorg,
		pk_stockorg,
		pk_material;
	function callbackseller() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);

		$id("seller").set("value", retvalue.name);
		pk_saleorg = retvalue.pk;
	}

	function com$yonyou$placeorder$ReportSearchDetailController$changecustomer(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback": "callbackcustomer()"
		})
	}

	function callbackcustomer() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);

		$id("customer").set("value", retvalue.name);
		pk_customer = retvalue.pk;
		customer_name = retvalue.name;
	}

	function com$yonyou$placeorder$ReportSearchDetailController$changesender(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbacksender()"
		})
	}

	function callbacksender() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("sender").set("value", retvalue.name);
		pk_stockorg = retvalue.pk;
	}

	function com$yonyou$placeorder$ReportSearchDetailController$clearcustomer(sender, args) {
		$id("customer").set("value", "请选择客户");
		pk_customer = null;
	}

	function com$yonyou$placeorder$ReportSearchDetailController$clearseller(sender, args) {
		$id("seller").set("value", "请选择销售组织");
		pk_saleorg = null;
	}

	function com$yonyou$placeorder$ReportSearchDetailController$clearsender(sender, args) {
		$id("sender").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$ReportSearchDetailController$cleargoods(sender, args) {
		$id("goodsname").set("value", "请选择物料");
		pk_material = null;
	}


	function com$yonyou$placeorder$ReportSearchDetailController$selectMaterial(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.HlgRefPage",
			"isKeep": "true",
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
				$ctx.put("cmaterialid", retvalue.pk);
				$ctx.put("cmaterialname", retvalue.name);
				$id("lbl_matname").set("value", retvalue.name);
			}
		});
	}

	function com$yonyou$placeorder$ReportSearchDetailController$selectcar(sender, args) {
		if (pk_customer) {
			$view.open({
				viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
				"otherparams": {
					"pk_customer": pk_customer
				},
				"callback": function () {
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
					$id("vlicense").set("value", retvalue.code);
				}
			})
		} else {
			$alert("选择车辆信息前必须选择客户");
		}
	}

	function com$yonyou$placeorder$ReportSearchDetailController$picker0_onload(sender, args) {
		var context = {
			statuses: ["未完成", "已作废", "已完成"],
		}
		$ctx.push(context); //数据绑定,将context的值与picker进行绑定
	}

	com.yonyou.placeorder.ReportSearchDetailController.prototype = {
		picker0_onload: com$yonyou$placeorder$ReportSearchDetailController$picker0_onload,
		selectcar: com$yonyou$placeorder$ReportSearchDetailController$selectcar,
		cleargoods: com$yonyou$placeorder$ReportSearchDetailController$cleargoods,
		clearsender: com$yonyou$placeorder$ReportSearchDetailController$clearsender,
		clearseller: com$yonyou$placeorder$ReportSearchDetailController$clearseller,
		clearcustomer: com$yonyou$placeorder$ReportSearchDetailController$clearcustomer,
		changesender: com$yonyou$placeorder$ReportSearchDetailController$changesender,
		changecustomer: com$yonyou$placeorder$ReportSearchDetailController$changecustomer,
		changeseller: com$yonyou$placeorder$ReportSearchDetailController$changeseller,
		dateOnload: com$yonyou$placeorder$ReportSearchDetailController$dateOnload,
		changegoods: com$yonyou$placeorder$ReportSearchDetailController$changegoods,
		back_onclick: com$yonyou$placeorder$ReportSearchDetailController$back_onclick,
		// searchbutton_onclick: com$yonyou$placeorder$ReportSearchDetailController$searchbutton_onclick,
		back: com$yonyou$placeorder$ReportSearchDetailController$back,
		goodsname: com$yonyou$placeorder$ReportSearchDetailController$goodsname,
		billcode: com$yonyou$placeorder$ReportSearchDetailController$billcode,
		initialize: com$yonyou$placeorder$ReportSearchDetailController$initialize,
		evaljs: com$yonyou$placeorder$ReportSearchDetailController$evaljs,
		requestData: com$yonyou$placeorder$ReportSearchDetailController$requestData,
		selectMaterial: com$yonyou$placeorder$ReportSearchDetailController$selectMaterial,
	};
	com.yonyou.placeorder.ReportSearchDetailController.registerClass('com.yonyou.placeorder.ReportSearchDetailController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
