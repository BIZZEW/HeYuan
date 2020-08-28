//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.AllotSearchController');
	com.yonyou.placeorder.AllotSearchController = function () {
		com.yonyou.placeorder.AllotSearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$AllotSearchController$initialize() {
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

	function com$yonyou$placeorder$AllotSearchController$evaljs(js) {
		eval(js)
	}

	var pk_customer,
		pk_saleorg,
		pk_stockorg,
		pk_material,
		// 调出库存组织
		coutstockorgvid,
		// 调入库存组织
		cinstockorgvid,
		// 调出仓库
		coutstordocid,
		// 调入仓库
		cinstordocid;

	function com$yonyou$placeorder$AllotSearchController$pageOnload(sender, args) {
		var user = JSON.parse($ctx.getApp("appuser"));
		var stockorg = user.dfltrcvstockorg;
		if (stockorg) {
			pk_stockorg = stockorg.pk_org;
			coutstockorgvid = stockorg.pk_org;
			cinstockorgvid = stockorg.pk_org;

			com.yonyou.placeorder.AllotSearchController.pk_stockorg = stockorg.pk_org;

			$id("outorg").set("value", stockorg.name);
			$id("inorg").set("value", stockorg.name);
		}
	}

	function com$yonyou$placeorder$AllotSearchController$billcode(sender, args) {

	}

	function com$yonyou$placeorder$AllotSearchController$goodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changegoods()"
		})
	}

	function com$yonyou$placeorder$AllotSearchController$back(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$AllotSearchController$searchbutton_onclick(sender, args) {
		var begindate = $id("begindate").get("value");
		var enddate = $id("enddate").get("value");
		if (begindate && enddate) {
			if (Globals.compareDate(begindate, enddate) > 0) {
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		var user = JSON.parse($ctx.getApp("appuser"));

		var billcode = $id("billcode").get("value");
		if (billcode) {
			if (Globals.checkSpecialChar(billcode)) {
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
		}

		var json = {
			"pk_appuser": user.pk_appuser,

			"coutstockorgvid": coutstockorgvid,
			"cinstockorgvid": cinstockorgvid,

			"coutstordocid": coutstordocid,
			"cinstordocid": cinstordocid,

			"begindate": $id("begindate").get("value"),
			"enddate": $id("enddate").get("value"),

			"orderno": $id("billcode").get("value"),
			"cmaterialid": pk_material,

			"pk_stockorg": pk_stockorg,



			// "driver_name": $id("txt_drivername").get("value"),
			// 长期订单
			// "longterm": $id("switch0").get("value"),
			// 订单状态
			// "status": $ctx.getString("status"),

			// "pk_customer": pk_customer,
			// "pk_saleorg": pk_saleorg,
		};

		// alert("json: " + JSON.stringify(json));
		var data = $param.getJSONObject("data");
		$view.open({
			viewid: "com.yonyou.placeorder.AllotList", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param": json
		});

	}

	function com$yonyou$placeorder$AllotSearchController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$AllotSearchController$dateOnload(sender, args) {
		var begindate = Globals.firstDatein("year");
		// var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	//选择物料
	function com$yonyou$placeorder$AllotSearchController$changegoods(sender, args) {
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

	function changegoods() {

		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);

		$id("goodsname").set("value", retvalue.name);
		pk_material = retvalue.pk;
	}

	function com$yonyou$placeorder$AllotSearchController$changeseller(sender, args) {
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

	function com$yonyou$placeorder$AllotSearchController$changecustomer(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback": "callbackcustomer()"
		})
	}

	function com$yonyou$placeorder$AllotSearchController$changeinorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbackinorg()"
		})
	}

	function com$yonyou$placeorder$AllotSearchController$changeoutorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbackoutorg()"
		})
	}

	function com$yonyou$placeorder$AllotSearchController$changeinwh(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.WAREHOUSE,
			"otherparams": {
				"pk_stockorg": cinstockorgvid,
			},
			"callback": "callbackinwh()"
		})
	}

	function com$yonyou$placeorder$AllotSearchController$changeoutwh(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.WAREHOUSE,
			"otherparams": {
				"pk_stockorg": coutstockorgvid,
			},
			"callback": "callbackoutwh()"
		})
	}

	function callbackcustomer() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);

		$id("customer").set("value", retvalue.name);
		pk_customer = retvalue.pk;
	}

	function callbackinorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("inorg").set("value", retvalue.name);
		$id("inwh").set("value", "请选择调入仓库");

		cinstockorgvid = retvalue.pk;
		cinstordocid = "";
	}

	function callbackoutorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("outorg").set("value", retvalue.name);
		$id("outwh").set("value", "请选择调出仓库");

		coutstockorgvid = retvalue.pk;
		coutstordocid = "";
	}

	function callbackinwh() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.WAREHOUSE, retvalue);

		$id("inwh").set("value", retvalue.name);
		cinstordocid = retvalue.pk;
	}

	function callbackoutwh() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.WAREHOUSE, retvalue);

		$id("outwh").set("value", retvalue.name);
		coutstordocid = retvalue.pk;
	}

	function com$yonyou$placeorder$AllotSearchController$changesender(sender, args) {
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

	function com$yonyou$placeorder$AllotSearchController$clearcustomer(sender, args) {
		$id("customer").set("value", "请选择客户");
		pk_customer = null;
	}

	function com$yonyou$placeorder$AllotSearchController$clearinorg(sender, args) {
		$id("inorg").set("value", "请选择调入库存组织");
		cinstockorgvid = null;
	}

	function com$yonyou$placeorder$AllotSearchController$clearoutorg(sender, args) {
		$id("outorg").set("value", "请选择调出库存组织");
		coutstockorgvid = null;
	}

	function com$yonyou$placeorder$AllotSearchController$clearinwh(sender, args) {
		$id("inwh").set("value", "请选择调入仓库");
		cinstordocid = null;
	}

	function com$yonyou$placeorder$AllotSearchController$clearoutwh(sender, args) {
		$id("outwh").set("value", "请选择调出仓库");
		coutstordocid = null;
	}

	function com$yonyou$placeorder$AllotSearchController$clearseller(sender, args) {
		$id("seller").set("value", "请选择销售组织");
		pk_saleorg = null;
	}

	function com$yonyou$placeorder$AllotSearchController$clearsender(sender, args) {
		$id("sender").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$AllotSearchController$cleargoods(sender, args) {
		$id("goodsname").set("value", "请选择物料");
		pk_material = null;
	}

	function com$yonyou$placeorder$AllotSearchController$selectcar(sender, args) {
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

	function com$yonyou$placeorder$AllotSearchController$goSelectDriver(sender, args) {
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

	function com$yonyou$placeorder$AllotSearchController$selectstatus(sender, args) {
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

	function com$yonyou$placeorder$AllotSearchController$picker0_onload(sender, args) {
		var context = {
			statuses: ["未完成", "已取消", "已完成"],
			types: ["是", "否"],
		}
		$ctx.push(context); //数据绑定,将context的值与picker进行绑定
	}

	com.yonyou.placeorder.AllotSearchController.prototype = {
		pageOnload: com$yonyou$placeorder$AllotSearchController$pageOnload,
		picker0_onload: com$yonyou$placeorder$AllotSearchController$picker0_onload,
		selectcar: com$yonyou$placeorder$AllotSearchController$selectcar,
		goSelectDriver: com$yonyou$placeorder$AllotSearchController$goSelectDriver,
		selectstatus: com$yonyou$placeorder$AllotSearchController$selectstatus,
		cleargoods: com$yonyou$placeorder$AllotSearchController$cleargoods,
		clearsender: com$yonyou$placeorder$AllotSearchController$clearsender,
		clearseller: com$yonyou$placeorder$AllotSearchController$clearseller,
		clearcustomer: com$yonyou$placeorder$AllotSearchController$clearcustomer,
		clearinorg: com$yonyou$placeorder$AllotSearchController$clearinorg,
		clearoutorg: com$yonyou$placeorder$AllotSearchController$clearoutorg,
		clearinwh: com$yonyou$placeorder$AllotSearchController$clearinwh,
		clearoutwh: com$yonyou$placeorder$AllotSearchController$clearoutwh,
		changesender: com$yonyou$placeorder$AllotSearchController$changesender,
		changecustomer: com$yonyou$placeorder$AllotSearchController$changecustomer,
		changeinorg: com$yonyou$placeorder$AllotSearchController$changeinorg,
		changeoutorg: com$yonyou$placeorder$AllotSearchController$changeoutorg,
		changeinwh: com$yonyou$placeorder$AllotSearchController$changeinwh,
		changeoutwh: com$yonyou$placeorder$AllotSearchController$changeoutwh,
		changeseller: com$yonyou$placeorder$AllotSearchController$changeseller,
		dateOnload: com$yonyou$placeorder$AllotSearchController$dateOnload,
		changegoods: com$yonyou$placeorder$AllotSearchController$changegoods,
		back_onclick: com$yonyou$placeorder$AllotSearchController$back_onclick,
		searchbutton_onclick: com$yonyou$placeorder$AllotSearchController$searchbutton_onclick,
		back: com$yonyou$placeorder$AllotSearchController$back,
		goodsname: com$yonyou$placeorder$AllotSearchController$goodsname,
		billcode: com$yonyou$placeorder$AllotSearchController$billcode,
		initialize: com$yonyou$placeorder$AllotSearchController$initialize,
		evaljs: com$yonyou$placeorder$AllotSearchController$evaljs
	};
	com.yonyou.placeorder.AllotSearchController.registerClass('com.yonyou.placeorder.AllotSearchController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
