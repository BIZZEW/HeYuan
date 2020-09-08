//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.AllotOrderQueryController');
	com.yonyou.placeorder.AllotOrderQueryController = function () {
		com.yonyou.placeorder.AllotOrderQueryController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$AllotOrderQueryController$initialize() {
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

	function com$yonyou$placeorder$AllotOrderQueryController$evaljs(js) {
		eval(js)
	}

	var pk_customer,
		pk_saleorg,
		pk_stockorg,
		pk_material,
		pk_transtype,
		// 调出库存组织
		coutstockorgvid,
		// 调入库存组织
		cinstockorgvid,
		// 调出仓库
		coutstordocid,
		// 调入仓库
		cinstordocid;

	function com$yonyou$placeorder$AllotOrderQueryController$pageOnload(sender, args) {
		var user = JSON.parse($ctx.getApp("appuser"));
		com.yonyou.placeorder.AllotOrderQueryController.queryparam = {
			"pk_appuser": user.pk_appuser,
		};
		com.yonyou.placeorder.AllotOrderQueryController.showquery = 1;

		if (user.dfltcstm)
			pk_customer = user.dfltcstm.pk_customer

		var stockorg = user.dfltrcvstockorg;
		if (stockorg) {
			pk_stockorg = stockorg.pk_org;
			// coutstockorgvid = stockorg.pk_org;
			// cinstockorgvid = stockorg.pk_org;

			com.yonyou.placeorder.AllotOrderQueryController.pk_stockorg = stockorg.pk_org;

			com.yonyou.placeorder.AllotOrderQueryController.queryparam["pk_stockorg"] = stockorg.pk_org;

			$id("outorg").set("value", stockorg.name);
		}
	}

	function com$yonyou$placeorder$AllotOrderQueryController$billcode(sender, args) {

	}

	function com$yonyou$placeorder$AllotOrderQueryController$goodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changegoods()"
		})
	}

	function com$yonyou$placeorder$AllotOrderQueryController$back(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$AllotOrderQueryController$searchbutton_onclick(sender, args) {
		var begindate = $id("begindate").get("value");
		var enddate = $id("enddate").get("value");
		if (begindate && enddate) {
			if (Globals.compareDate(begindate, enddate) > 0) {
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		var user = JSON.parse($ctx.getApp("appuser"));
		var vlicense = $id("vlicense").get("value");
		if (vlicense) {
			if (Globals.checkSpecialChar(vlicense)) {
				$alert("车牌号不能包含特殊字符%或_");
				return;
			}
		}
		var billcode = $id("billcode").get("value");
		if (billcode) {
			if (Globals.checkSpecialChar(billcode)) {
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
		}

		// var allottype = $ctx.getString("status");
		// var transtype = "";

		// switch (allottype) {
		// 	case ("调拨入库通知单"):
		// 		transtype = "4EAC";
		// 		break;
		// 	case ("调拨出库通知"):
		// 		transtype = "4EAB";
		// 		break;
		// 	case ("长期调拨出库通知单"):
		// 		transtype = "4EAF";
		// 		break;
		// }

		var json = {
			"pk_appuser": user.pk_appuser,

			// 调拨组织
			"pk_stockorg": pk_stockorg,
			//调出仓库
			"pk_sendstore": coutstordocid,
			// 调入仓库
			"pk_receivestore": cinstordocid,

			"begindate": $id("begindate").get("value"),
			"enddate": $id("enddate").get("value"),

			// 车牌
			"vlicense": $id("vlicense").get("value"),
			// 调拨类型
			"transtype": pk_transtype,
			// 物料
			"cmaterialid": pk_material,

			// 调拨订单号
			"orderno": $id("billcode").get("value"),
			// 调拨通知单号
			"noticecode": $id("billcode1").get("value"),

			// "driver_name": $id("txt_drivername").get("value"),
			// "pk_customer": pk_customer,
			// "pk_saleorg": pk_saleorg,
			// // 长期订单
			// "longterm": $id("switch0").get("value"),
			// // 订单状态
			// "status": $ctx.getString("status"),
		};

		// alert("json: " + JSON.stringify(json));
		var data = $param.getJSONObject("data");
		$view.open({
			viewid: "com.yonyou.placeorder.AllotQueryList", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param": json
		});

	}

	function com$yonyou$placeorder$AllotOrderQueryController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$AllotOrderQueryController$dateOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	//选择物料
	function com$yonyou$placeorder$AllotOrderQueryController$changegoods(sender, args) {
		// if (pk_stockorg) {
		var otherparams = {
			"pk_stockorg": pk_stockorg,
			"pk_customer": pk_customer,
			"issaleorder": true
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

	//选择调拨类型
	function com$yonyou$placeorder$AllotOrderQueryController$changetype(sender, args) {
		// if (pk_stockorg) {
		var otherparams = {
			// "pk_stockorg": pk_stockorg,
			// "pk_customer": pk_customer,
			// "issaleorder": true
		};
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.TRANSTYPE,
			"otherparams": otherparams,
			"callback": "changetypecallback()"
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

	function changetypecallback() {

		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.TRANSTYPE, retvalue);

		$id("transtype").set("value", retvalue.name);
		pk_transtype = retvalue.pk;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$changeseller(sender, args) {
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

	function callbackseller() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);

		$id("seller").set("value", retvalue.name);
		pk_saleorg = retvalue.pk;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$changecustomer(sender, args) {
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
	}

	function com$yonyou$placeorder$AllotOrderQueryController$changesender(sender, args) {
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

	function com$yonyou$placeorder$AllotOrderQueryController$clearcustomer(sender, args) {
		$id("customer").set("value", "请选择客户");
		pk_customer = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$clearseller(sender, args) {
		$id("seller").set("value", "请选择销售组织");
		pk_saleorg = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$clearsender(sender, args) {
		$id("sender").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$cleargoods(sender, args) {
		$id("goodsname").set("value", "请选择物料");
		pk_material = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$cleartype(sender, args) {
		$id("transtype").set("value", "请选择调拨类型");
		pk_transtype = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$selectcar(sender, args) {
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
		// } else {
		// 	$alert("选择车辆信息前必须选择客户");
		// }
	}

	function com$yonyou$placeorder$AllotOrderQueryController$goSelectDriver(sender, args) {
		// var isfldisplay=$id("txt_vlicense").get("display");
		// var carno="";
		// if(isfldisplay=="none"){
		// 	if($id("lbl_fmtvlicense").get("value")!="点击输入车号"){
		// 		carno=$id("lbl_fmtvlicense").get("value");
		// 	}
		// }else{
		// 	carno=$id("txt_vlicense").get("value");
		// }
		// if(!carno){
		// 	$alert("参照司机前请先填写正确的车牌号");
		// 	return;
		// }
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"otherparams": {
				"pk_customer": pk_customer
			},
			"reftype": Globals.RefInfoType.VEHICLE_DRIVER,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.VEHICLE_DRIVER, retvalue);
				var driverinfo = retvalue.name.split(" ");
				alert(JSON.stringify(driverinfo));
				// $id("txt_drivername").set("value", retvalue.code);
				// $id("txt_drivertelephone").set("value", driverinfo[1]);
				// $id("txt_driveridcode").set("value", retvalue.pk);
			}
		})
	}

	function com$yonyou$placeorder$AllotOrderQueryController$selectstatus(sender, args) {
		// if (pk_customer) {
		// 	$view.open({
		// 		viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
		// 		isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
		// 		"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
		// 		"otherparams": {
		// 			"pk_customer": pk_customer
		// 		},
		// 		"callback": function () {
		// 			var retvalue = $param.getJSONObject("result");
		// 			SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
		// 			$id("vlicense").set("value", retvalue.code);
		// 		}
		// 	})
		// } else {
		// 	$alert("选择车辆信息前必须选择客户");
		// }
	}

	function com$yonyou$placeorder$AllotOrderQueryController$picker0_onload(sender, args) {
		var context = {
			statuses: ["", "调拨入库通知单", "调拨出库通知", "长期调拨出库通知单"],
			values: ["4EAC", "4EAB", "4EAF"],
		}
		$ctx.push(context); //数据绑定,将context的值与picker进行绑定
	}






	function com$yonyou$placeorder$AllotOrderQueryController$changeinorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbackinorg()"
		})
	}

	function com$yonyou$placeorder$AllotOrderQueryController$changeoutorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbackoutorg()"
		})
	}

	function com$yonyou$placeorder$AllotOrderQueryController$changeinwh(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.WAREHOUSE,
			"otherparams": {
				"pk_stockorg": pk_stockorg,
			},
			"callback": "callbackinwh()"
		})
	}

	function com$yonyou$placeorder$AllotOrderQueryController$changeoutwh(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.WAREHOUSE,
			"otherparams": {
				"pk_stockorg": pk_stockorg,
			},
			"callback": "callbackoutwh()"
		})
	}

	function callbackinorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("inorg").set("value", retvalue.name);
		$id("inwh").set("value", "请选择调入仓库");

		// alert(retvalue.pk)

		com.yonyou.placeorder.AllotOrderQueryController.queryparam["cinstockorgvid"] = retvalue.pk;
		delete com.yonyou.placeorder.AllotOrderQueryController.queryparam["cinstordocid"];

		// alert(JSON.stringify(com.yonyou.placeorder.AllotOrderQueryController.queryparam))

		cinstockorgvid = retvalue.pk;
		cinstordocid = "";
	}

	function callbackoutorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("outorg").set("value", retvalue.name);
		$id("outwh").set("value", "请选择调出仓库");

		com.yonyou.placeorder.AllotOrderQueryController.queryparam["pk_stockorg"] = retvalue.pk;
		delete com.yonyou.placeorder.AllotOrderQueryController.queryparam["coutstordocid"];

		pk_stockorg = retvalue.pk;
		coutstordocid = "";
	}

	function callbackinwh() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.WAREHOUSE, retvalue);

		com.yonyou.placeorder.AllotOrderQueryController.queryparam["cinstordocid"] = retvalue.pk;
		$id("inwh").set("value", retvalue.name);
		cinstordocid = retvalue.pk;
	}

	function callbackoutwh() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.WAREHOUSE, retvalue);

		com.yonyou.placeorder.AllotOrderQueryController.queryparam["coutstordocid"] = retvalue.pk;
		$id("outwh").set("value", retvalue.name);
		coutstordocid = retvalue.pk;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$clearinorg(sender, args) {
		$id("inorg").set("value", "请选择调入库存组织");
		cinstockorgvid = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$clearoutorg(sender, args) {
		$id("outorg").set("value", "请选择调出库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$clearinwh(sender, args) {
		$id("inwh").set("value", "请选择调入仓库");
		cinstordocid = null;
	}

	function com$yonyou$placeorder$AllotOrderQueryController$clearoutwh(sender, args) {
		$id("outwh").set("value", "请选择调出仓库");
		coutstordocid = null;
	}

	com.yonyou.placeorder.AllotOrderQueryController.prototype = {
		pageOnload: com$yonyou$placeorder$AllotOrderQueryController$pageOnload,
		picker0_onload: com$yonyou$placeorder$AllotOrderQueryController$picker0_onload,
		selectcar: com$yonyou$placeorder$AllotOrderQueryController$selectcar,
		goSelectDriver: com$yonyou$placeorder$AllotOrderQueryController$goSelectDriver,
		selectstatus: com$yonyou$placeorder$AllotOrderQueryController$selectstatus,
		cleargoods: com$yonyou$placeorder$AllotOrderQueryController$cleargoods,
		cleartype: com$yonyou$placeorder$AllotOrderQueryController$cleartype,
		clearsender: com$yonyou$placeorder$AllotOrderQueryController$clearsender,
		clearseller: com$yonyou$placeorder$AllotOrderQueryController$clearseller,
		clearcustomer: com$yonyou$placeorder$AllotOrderQueryController$clearcustomer,
		changesender: com$yonyou$placeorder$AllotOrderQueryController$changesender,
		changecustomer: com$yonyou$placeorder$AllotOrderQueryController$changecustomer,
		changeseller: com$yonyou$placeorder$AllotOrderQueryController$changeseller,
		dateOnload: com$yonyou$placeorder$AllotOrderQueryController$dateOnload,
		changegoods: com$yonyou$placeorder$AllotOrderQueryController$changegoods,
		changetype: com$yonyou$placeorder$AllotOrderQueryController$changetype,
		changetype: com$yonyou$placeorder$AllotOrderQueryController$changetype,
		back_onclick: com$yonyou$placeorder$AllotOrderQueryController$back_onclick,
		searchbutton_onclick: com$yonyou$placeorder$AllotOrderQueryController$searchbutton_onclick,
		back: com$yonyou$placeorder$AllotOrderQueryController$back,
		goodsname: com$yonyou$placeorder$AllotOrderQueryController$goodsname,
		billcode: com$yonyou$placeorder$AllotOrderQueryController$billcode,
		initialize: com$yonyou$placeorder$AllotOrderQueryController$initialize,
		evaljs: com$yonyou$placeorder$AllotOrderQueryController$evaljs,

		clearinorg: com$yonyou$placeorder$AllotOrderQueryController$clearinorg,
		clearoutorg: com$yonyou$placeorder$AllotOrderQueryController$clearoutorg,
		clearinwh: com$yonyou$placeorder$AllotOrderQueryController$clearinwh,
		clearoutwh: com$yonyou$placeorder$AllotOrderQueryController$clearoutwh,

		changeinorg: com$yonyou$placeorder$AllotOrderQueryController$changeinorg,
		changeoutorg: com$yonyou$placeorder$AllotOrderQueryController$changeoutorg,
		changeinwh: com$yonyou$placeorder$AllotOrderQueryController$changeinwh,
		changeoutwh: com$yonyou$placeorder$AllotOrderQueryController$changeoutwh,
	};
	com.yonyou.placeorder.AllotOrderQueryController.registerClass('com.yonyou.placeorder.AllotOrderQueryController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
