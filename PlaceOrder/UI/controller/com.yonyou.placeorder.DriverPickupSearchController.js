//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.DriverPickupSearchController');
	com.yonyou.placeorder.DriverPickupSearchController = function () {
		com.yonyou.placeorder.DriverPickupSearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$DriverPickupSearchController$initialize() {
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

	var pk_customer,
		pk_saleorg,
		pk_stockorg,
		pk_material;

	function com$yonyou$placeorder$DriverPickupSearchController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$DriverPickupSearchController$billcode(sender, args) {

	}

	function com$yonyou$placeorder$DriverPickupSearchController$goodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changegoods()"
		})
	}

	function com$yonyou$placeorder$DriverPickupSearchController$back(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$DriverPickupSearchController$searchbutton_onclick(sender, args) {
		var json = {
			"pk_stockorg": pk_stockorg,
		};

		$view.open({
			viewid: "com.yonyou.placeorder.DriverPickup", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param": json
		});

	}

	function com$yonyou$placeorder$DriverPickupSearchController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$DriverPickupSearchController$dateOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	//选择物料
	function com$yonyou$placeorder$DriverPickupSearchController$changegoods(sender, args) {
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

	function com$yonyou$placeorder$DriverPickupSearchController$changeseller(sender, args) {
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

	function com$yonyou$placeorder$DriverPickupSearchController$changecustomer(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback": "callbackcustomer()"
		})
	}

	function com$yonyou$placeorder$DriverPickupSearchController$changeorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.VEHICLE_STOCK_ORG,
			"callback": "callbackorg()",
			// "otherparams": {
			// 	"pk_vehicle": com.yonyou.placeorder.DriverPickupSearchController.vehicle
			// },
		})
	}


	function com$yonyou$placeorder$DriverPickupSearchController$pageOnload(sender, args) {
		//查询条件参数
		var user = JSON.parse($ctx.getApp("appuser"));

		// alert(JSON.stringify(user))

		if (user.vehiclesaleorg != null && typeof (user.vehiclesaleorg) != undefined) {
			com.yonyou.placeorder.DriverPickupSearchController.vehiclesaleorg = user.vehiclesaleorg;
			com.yonyou.placeorder.DriverPickupSearchController.vehicle = user.vehicle;

			pk_stockorg = user.vehiclesaleorg.pk_org;

			if (user.vehiclesaleorg)
				$id("org").set("value", user.vehiclesaleorg.name);
		}
	}

	function callbackcustomer() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);

		$id("customer").set("value", retvalue.name);
		pk_customer = retvalue.pk;
	}

	function callbackorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.VEHICLE_STOCK_ORG, retvalue);

		$id("org").set("value", retvalue.name);
		pk_stockorg = retvalue.pk;
	}

	function com$yonyou$placeorder$DriverPickupSearchController$changesender(sender, args) {
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

	function com$yonyou$placeorder$DriverPickupSearchController$clearcustomer(sender, args) {
		$id("customer").set("value", "请选择客户");
		pk_customer = null;
	}

	function com$yonyou$placeorder$DriverPickupSearchController$clearorg(sender, args) {
		$id("org").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$DriverPickupSearchController$clearseller(sender, args) {
		$id("seller").set("value", "请选择销售组织");
		pk_saleorg = null;
	}

	function com$yonyou$placeorder$DriverPickupSearchController$clearsender(sender, args) {
		$id("sender").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$DriverPickupSearchController$cleargoods(sender, args) {
		$id("goodsname").set("value", "请选择物料");
		pk_material = null;
	}

	function com$yonyou$placeorder$DriverPickupSearchController$selectcar(sender, args) {
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

	function com$yonyou$placeorder$DriverPickupSearchController$goSelectDriver(sender, args) {
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

	function com$yonyou$placeorder$DriverPickupSearchController$selectstatus(sender, args) {
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

	function com$yonyou$placeorder$DriverPickupSearchController$picker0_onload(sender, args) {
		var context = {
			statuses: ["未完成", "已取消", "已完成"],
			types: ["是", "否"],
		}
		$ctx.push(context); //数据绑定,将context的值与picker进行绑定
	}

	com.yonyou.placeorder.DriverPickupSearchController.prototype = {
		picker0_onload: com$yonyou$placeorder$DriverPickupSearchController$picker0_onload,
		selectcar: com$yonyou$placeorder$DriverPickupSearchController$selectcar,
		goSelectDriver: com$yonyou$placeorder$DriverPickupSearchController$goSelectDriver,
		selectstatus: com$yonyou$placeorder$DriverPickupSearchController$selectstatus,
		cleargoods: com$yonyou$placeorder$DriverPickupSearchController$cleargoods,
		clearsender: com$yonyou$placeorder$DriverPickupSearchController$clearsender,
		clearseller: com$yonyou$placeorder$DriverPickupSearchController$clearseller,
		clearcustomer: com$yonyou$placeorder$DriverPickupSearchController$clearcustomer,
		clearorg: com$yonyou$placeorder$DriverPickupSearchController$clearorg,
		changesender: com$yonyou$placeorder$DriverPickupSearchController$changesender,
		changecustomer: com$yonyou$placeorder$DriverPickupSearchController$changecustomer,
		changeorg: com$yonyou$placeorder$DriverPickupSearchController$changeorg,
		changeseller: com$yonyou$placeorder$DriverPickupSearchController$changeseller,
		dateOnload: com$yonyou$placeorder$DriverPickupSearchController$dateOnload,
		changegoods: com$yonyou$placeorder$DriverPickupSearchController$changegoods,
		back_onclick: com$yonyou$placeorder$DriverPickupSearchController$back_onclick,
		searchbutton_onclick: com$yonyou$placeorder$DriverPickupSearchController$searchbutton_onclick,
		back: com$yonyou$placeorder$DriverPickupSearchController$back,
		goodsname: com$yonyou$placeorder$DriverPickupSearchController$goodsname,
		billcode: com$yonyou$placeorder$DriverPickupSearchController$billcode,
		initialize: com$yonyou$placeorder$DriverPickupSearchController$initialize,
		evaljs: com$yonyou$placeorder$DriverPickupSearchController$evaljs,
		pageOnload: com$yonyou$placeorder$DriverPickupSearchController$pageOnload,
	};
	com.yonyou.placeorder.DriverPickupSearchController.registerClass('com.yonyou.placeorder.DriverPickupSearchController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
