//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.DriverDeliverySearchController');
	com.yonyou.placeorder.DriverDeliverySearchController = function () {
		com.yonyou.placeorder.DriverDeliverySearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$DriverDeliverySearchController$initialize() {
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

	function com$yonyou$placeorder$DriverDeliverySearchController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$billcode(sender, args) {

	}

	function com$yonyou$placeorder$DriverDeliverySearchController$goodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changegoods()"
		})
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$back(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$searchbutton_onclick(sender, args) {
		var json = {
			"pk_stockorg": pk_stockorg,
		};

		$view.open({
			viewid: "com.yonyou.placeorder.DriverDelivery", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param": json
		});

	}

	function com$yonyou$placeorder$DriverDeliverySearchController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$dateOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	//选择物料
	function com$yonyou$placeorder$DriverDeliverySearchController$changegoods(sender, args) {
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

	function com$yonyou$placeorder$DriverDeliverySearchController$changeseller(sender, args) {
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

	function com$yonyou$placeorder$DriverDeliverySearchController$changecustomer(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback": "callbackcustomer()"
		})
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$changeorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.VEHICLE_STOCK_ORG,
			"callback": "callbackorg()",
			// "otherparams": {
			// 	"pk_vehicle": com.yonyou.placeorder.DriverDeliverySearchController.vehicle
			// },
		})
	}


	function com$yonyou$placeorder$DriverDeliverySearchController$pageOnload(sender, args) {
		//查询条件参数
		var user = JSON.parse($ctx.getApp("appuser"));

		// alert(JSON.stringify(user))

		if (user.vehiclebuyorg != null && typeof (user.vehiclebuyorg) != undefined) {
			com.yonyou.placeorder.DriverDeliverySearchController.vehiclebuyorg = user.vehiclebuyorg;
			com.yonyou.placeorder.DriverDeliverySearchController.vehicle = user.vehicle;

			pk_stockorg = user.vehiclebuyorg.pk_org;

			if (user.vehiclebuyorg)
				$id("org").set("value", user.vehiclebuyorg.name);
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

	function com$yonyou$placeorder$DriverDeliverySearchController$changesender(sender, args) {
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

	function com$yonyou$placeorder$DriverDeliverySearchController$clearcustomer(sender, args) {
		$id("customer").set("value", "请选择客户");
		pk_customer = null;
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$clearorg(sender, args) {
		$id("org").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$clearseller(sender, args) {
		$id("seller").set("value", "请选择销售组织");
		pk_saleorg = null;
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$clearsender(sender, args) {
		$id("sender").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$cleargoods(sender, args) {
		$id("goodsname").set("value", "请选择物料");
		pk_material = null;
	}

	function com$yonyou$placeorder$DriverDeliverySearchController$selectcar(sender, args) {
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

	function com$yonyou$placeorder$DriverDeliverySearchController$goSelectDriver(sender, args) {
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

	function com$yonyou$placeorder$DriverDeliverySearchController$selectstatus(sender, args) {
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

	function com$yonyou$placeorder$DriverDeliverySearchController$picker0_onload(sender, args) {
		var context = {
			statuses: ["未完成", "已取消", "已完成"],
			types: ["是", "否"],
		}
		$ctx.push(context); //数据绑定,将context的值与picker进行绑定
	}

	com.yonyou.placeorder.DriverDeliverySearchController.prototype = {
		picker0_onload: com$yonyou$placeorder$DriverDeliverySearchController$picker0_onload,
		selectcar: com$yonyou$placeorder$DriverDeliverySearchController$selectcar,
		goSelectDriver: com$yonyou$placeorder$DriverDeliverySearchController$goSelectDriver,
		selectstatus: com$yonyou$placeorder$DriverDeliverySearchController$selectstatus,
		cleargoods: com$yonyou$placeorder$DriverDeliverySearchController$cleargoods,
		clearsender: com$yonyou$placeorder$DriverDeliverySearchController$clearsender,
		clearseller: com$yonyou$placeorder$DriverDeliverySearchController$clearseller,
		clearcustomer: com$yonyou$placeorder$DriverDeliverySearchController$clearcustomer,
		clearorg: com$yonyou$placeorder$DriverDeliverySearchController$clearorg,
		changesender: com$yonyou$placeorder$DriverDeliverySearchController$changesender,
		changecustomer: com$yonyou$placeorder$DriverDeliverySearchController$changecustomer,
		changeorg: com$yonyou$placeorder$DriverDeliverySearchController$changeorg,
		changeseller: com$yonyou$placeorder$DriverDeliverySearchController$changeseller,
		dateOnload: com$yonyou$placeorder$DriverDeliverySearchController$dateOnload,
		changegoods: com$yonyou$placeorder$DriverDeliverySearchController$changegoods,
		back_onclick: com$yonyou$placeorder$DriverDeliverySearchController$back_onclick,
		searchbutton_onclick: com$yonyou$placeorder$DriverDeliverySearchController$searchbutton_onclick,
		back: com$yonyou$placeorder$DriverDeliverySearchController$back,
		goodsname: com$yonyou$placeorder$DriverDeliverySearchController$goodsname,
		billcode: com$yonyou$placeorder$DriverDeliverySearchController$billcode,
		initialize: com$yonyou$placeorder$DriverDeliverySearchController$initialize,
		evaljs: com$yonyou$placeorder$DriverDeliverySearchController$evaljs,
		pageOnload: com$yonyou$placeorder$DriverDeliverySearchController$pageOnload,
	};
	com.yonyou.placeorder.DriverDeliverySearchController.registerClass('com.yonyou.placeorder.DriverDeliverySearchController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
