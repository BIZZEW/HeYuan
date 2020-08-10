//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.SalesAdvOrderSearchController');
	com.yonyou.placeorder.SalesAdvOrderSearchController = function () {
		com.yonyou.placeorder.SalesAdvOrderSearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$SalesAdvOrderSearchController$initialize() {
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

	function com$yonyou$placeorder$SalesAdvOrderSearchController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$billcode(sender, args) {

	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$goodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changegoods()"
		})
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$back(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$searchbutton_onclick(sender, args) {
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
		var json = {
			"pk_appuser": user.pk_appuser,
			"begindate": $id("begindate").get("value"),
			"enddate": $id("enddate").get("value"),
			"orderno": $id("billcode").get("value"),

			"pk_customer": pk_customer,
			"pk_saleorg": pk_saleorg,
			"pk_stockorg": pk_stockorg,

			"cmaterialid": pk_material,
			"vlicense": $id("vlicense").get("value"),
			// "driver_name": $id("txt_drivername").get("value"),
			// 长期订单
			"longterm": $id("switch0").get("value"),
			// 订单状态
			"status": $ctx.getString("status"),
		};

		// alert("json: " + JSON.stringify(json));
		var data = $param.getJSONObject("data");
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderList", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param": json
		});

	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$dateOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	//选择物料
	function com$yonyou$placeorder$SalesAdvOrderSearchController$changegoods(sender, args) {
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

	function com$yonyou$placeorder$SalesAdvOrderSearchController$changeseller(sender, args) {
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
		pk_saleorg,
		pk_stockorg,
		pk_material;
	function callbackseller() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);

		$id("seller").set("value", retvalue.name);
		pk_saleorg = retvalue.pk;
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$changecustomer(sender, args) {
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

	function com$yonyou$placeorder$SalesAdvOrderSearchController$changesender(sender, args) {
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

	function com$yonyou$placeorder$SalesAdvOrderSearchController$clearcustomer(sender, args) {
		$id("customer").set("value", "请选择客户");
		pk_customer = null;
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$clearseller(sender, args) {
		$id("seller").set("value", "请选择销售组织");
		pk_saleorg = null;
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$clearsender(sender, args) {
		$id("sender").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$cleargoods(sender, args) {
		$id("goodsname").set("value", "请选择物料");
		pk_material = null;
	}

	function com$yonyou$placeorder$SalesAdvOrderSearchController$selectcar(sender, args) {
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

	function com$yonyou$placeorder$SalesAdvOrderSearchController$goSelectDriver(sender, args) {
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

	function com$yonyou$placeorder$SalesAdvOrderSearchController$selectstatus(sender, args) {
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

	function com$yonyou$placeorder$SalesAdvOrderSearchController$picker0_onload(sender, args) {
		var context = {
			statuses: ["未完成", "已取消", "已完成"],
			types: ["是", "否"],
		}
		$ctx.push(context); //数据绑定,将context的值与picker进行绑定
	}

	com.yonyou.placeorder.SalesAdvOrderSearchController.prototype = {
		picker0_onload: com$yonyou$placeorder$SalesAdvOrderSearchController$picker0_onload,
		selectcar: com$yonyou$placeorder$SalesAdvOrderSearchController$selectcar,
		goSelectDriver: com$yonyou$placeorder$SalesAdvOrderSearchController$goSelectDriver,
		selectstatus: com$yonyou$placeorder$SalesAdvOrderSearchController$selectstatus,
		cleargoods: com$yonyou$placeorder$SalesAdvOrderSearchController$cleargoods,
		clearsender: com$yonyou$placeorder$SalesAdvOrderSearchController$clearsender,
		clearseller: com$yonyou$placeorder$SalesAdvOrderSearchController$clearseller,
		clearcustomer: com$yonyou$placeorder$SalesAdvOrderSearchController$clearcustomer,
		changesender: com$yonyou$placeorder$SalesAdvOrderSearchController$changesender,
		changecustomer: com$yonyou$placeorder$SalesAdvOrderSearchController$changecustomer,
		changeseller: com$yonyou$placeorder$SalesAdvOrderSearchController$changeseller,
		dateOnload: com$yonyou$placeorder$SalesAdvOrderSearchController$dateOnload,
		changegoods: com$yonyou$placeorder$SalesAdvOrderSearchController$changegoods,
		back_onclick: com$yonyou$placeorder$SalesAdvOrderSearchController$back_onclick,
		searchbutton_onclick: com$yonyou$placeorder$SalesAdvOrderSearchController$searchbutton_onclick,
		back: com$yonyou$placeorder$SalesAdvOrderSearchController$back,
		goodsname: com$yonyou$placeorder$SalesAdvOrderSearchController$goodsname,
		billcode: com$yonyou$placeorder$SalesAdvOrderSearchController$billcode,
		initialize: com$yonyou$placeorder$SalesAdvOrderSearchController$initialize,
		evaljs: com$yonyou$placeorder$SalesAdvOrderSearchController$evaljs
	};
	com.yonyou.placeorder.SalesAdvOrderSearchController.registerClass('com.yonyou.placeorder.SalesAdvOrderSearchController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
