//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.SalesAdvOrderMultiController');
	com.yonyou.placeorder.SalesAdvOrderMultiController = function () {
		com.yonyou.placeorder.SalesAdvOrderMultiController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$SalesAdvOrderMultiController$initialize() {
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

	function com$yonyou$placeorder$SalesAdvOrderMultiController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$SalesAdvOrderMultiController$button0_onclick(sender, args) {
		$view.close()
	}
	function com$yonyou$placeorder$SalesAdvOrderMultiController$testInput(sender, args) {
		var params = {
			"viewid": "pnl_input",
			"isTouch": "true",
			"single": "true",
			"animation-direction": "bottom"
		};
		$view.openPop(params);
	}
	function com$yonyou$placeorder$SalesAdvOrderMultiController$testInput2(sender, args) {
		$id("pnl_input").set("visible", "true");
		var params = {
			"viewid": "pnl_input",
			"isTouch": "true",
			"single": "true",
			"animation-direction": "bottom"
		};
		$view.openPop(params);
	}
	//初始化
	var saleorg, //销售组织主键
		sendstockorg, //发货库存组织主键
		ccustomerid, //客户主键
		cmaterialid, //物料主键
		ordernum, //订单数量
		vlicense, //车牌号
		drivername, //司机姓名
		drivertelephone, //司机手机
		driveridcode, //司机身份证
		cpreorderid,
		cpreorderbid,
		vehicleslistNum = 0, vehicleslist = [];
	function com$yonyou$placeorder$SalesAdvOrderMultiController$changebill(sender, args) {
		var data = $param.getJSONObject("data");

		var flg = "";

		var otherparam = $param.getJSONObject("otherparams");

		// alert(JSON.stringify(otherparam));

		if (otherparam != null && typeof (otherparam) != undefined)
			if (otherparam.flg != null && typeof (otherparam.flg) != undefined)
				flg = otherparam.flg

		// alert(flg);

		if (flg == "SalesAdvOrderListController")
			$id("invalid").set('display', 'block');
		else
			$id("invalid").set('display', 'none');

		var license1value = $cache.read("license1value");
		if (license1value) {
			$id("btn_license1").set("value", license1value);
		}
		var license2value = $cache.read("license2value");
		if (license2value) {
			$id("txt_license2").set("value", license2value);
		}
		if (data) {
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata = data;
			$id("goods").set("value", data.cmaterialid.name);
			$id("weight").set("value", data.ordernum);
			$id("vnote").set("value", data.vnote);
			$id("seller").set("value", data.saleorg.name);
			$id("sender").set("value", data.sendstockorg.name);
			$id("customer").set("value", data.ccustomerid.name);
			// $id("carno").set("value", data.vlicense);
			$id("billdate").set("value", data.dbilldate);
			// $id("drivertel").set("value", data.drivertelephone);
			// $id("drivername").set("value", data.drivername);
			// $id("driverid").set("value", data.vdriverid);
			// vlicense = data.vlicense;
			// if (Globals.checkvlicense(vlicense)) {
			// 	$id("pnl_carno").set("display", "block");
			// } else {
			// 	$id("lbl_fmtvlicense").set("value", vlicense);
			// }
			saleorg = data.saleorg.pk_org;
			sendstockorg = data.sendstockorg.pk_org;
			ccustomerid = data.ccustomerid.pk_customer;
			cmaterialid = data.cmaterialid.pk_material;

			cpreorderid = data.cpreorderid;
			cpreorderbid = data.cpreorderbid;
			if (data.billstatus.code == "1") {
				$id("invalid").set("disabled", false);
			} else {
				$id("post").set("disabled", "disabled");
			}
		} else {
			defaultInfo();
		}

	}

	function jumpToSharePage(sender, args) {
		var vlicense = $id("carno").get("value");//自定义车牌号
		var isfldisplay = $id("carno").get("display");
		if (isfldisplay == "none") {//非自定义车牌号
			vlicense = $id("lbl_fmtvlicense").get("value");
		}
		var customer = $id("customer").get("value");//客户
		var matname = $id("goods").get("value");//物料

		// var fetchnum = $id("txt_fetchnum").get("value");//提货数量
		// var sendstockorg = $id("lbl_sendstockorg").get("value");//提货库存组织
		// var pickwarehouse = "pickwarehouse";//提货仓库，待加入(待修改)
		// var ftcorderdate = $id("lbl_ftcorderdate").get("value");//提货日期

		var billtype = "pickbill";//表示类型为提货单
		var pk_pickbill = "PK00000000";

		// if (com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj &&
		// 	com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj.pk_noticeorder) {
		// 	pk_pickbill = com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj.pk_noticeorder;
		// } else {
		// 	pk_pickbill = com.yonyou.placeorder.DeliveryOrderDetailController.pk_noticeorder;
		// }

		//pk_pickbill="PK00000000";
		var params = {
			"vlicense": vlicense,
			"customer": customer,
			"matname": matname,
			// "fetchnum": fetchnum,
			// "sendstockorg": sendstockorg,
			// "pickwarehouse": pickwarehouse,
			// "ftcorderdate": ftcorderdate,
			"billtype": billtype,
			"pk_pickbill": pk_pickbill
		}
		$view.open({
			"viewid": "com.yonyou.placeorder.ShareTwoCodeAndInfo",
			"isKeep": "true",
			"shareparams": params
		});
	}

	function defaultInfo() {
		var user = JSON.parse($ctx.getApp("appuser"));

		if (user.dfltcstm != null && typeof (user.dfltcstm) != undefined) {
			$id("customer").set("value", user.dfltcstm.name);
			ccustomerid = user.dfltcstm.pk_customer;
		}
		if (user.dfltsendstockorg != null && typeof (user.dfltsendstockorg) != undefined) {
			$id("sender").set("value", user.dfltsendstockorg.name);
			sendstockorg = user.dfltsendstockorg.pk_org;
		}

		if (user.dfltsaleorg != null && typeof (user.dfltsaleorg) != undefined) {
			$id("seller").set("value", user.dfltsaleorg.name);
			saleorg = user.dfltsaleorg.pk_org;
		}
		/*在维护页面中查询用户信息，先注释掉
		var pk_appuser=$ctx.getApp("pk_appuser");
		if(pk_appuser){
			var paramjson={
				"pk_appuser":pk_appuser
			}
			$service.callAction({
			"appid":"PlaceOrder",
				"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
				"action" : "getUserInfo", //后台Controller的方法名,
				"params" : paramjson, //自定义参数
				"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
				"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
				"callback" : "getUserInfoSuccess()", //请求成功后回调js方法
				"error" : "adderror()"//请求失败回调的js方法
			})
		}
		*/
	}
	function getUserInfoSuccess() {
		var user = $ctx.getJSONObject("result").datas;
		if (user.dfltcstm) {
			$id("customer").set("value", user.dfltcstm.name);
			ccustomerid = user.dfltcstm.pk_customer;
		}
		if (user.dfltsendstockorg) {
			$alert(user.dfltsendstockorg.name);
			$id("sender").set("value", user.dfltsendstockorg.name);
			sendstockorg = user.dfltsendstockorg.pk_org;
		}
		if (user.dfltsaleorg) {
			$alert(user.dfltsaleorg.name);
			$id("seller").set("value", user.dfltsaleorg.name);
			saleorg = user.dfltsaleorg.pk_org;
		}
	}
	//修改客户
	function com$yonyou$placeorder$SalesAdvOrderMultiController$changecustomer(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback": "changecustomerbac()"
		})
	}
	function changecustomerbac() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);
		$id("customer").set("value", retvalue.name);
		ccustomerid = retvalue.pk;
		if (com.yonyou.placeorder.SalesAdvOrderMultiController.olddata) {
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.ccustomerid.name = retvalue.name;
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.ccustomerid.pk_customer = retvalue.pk;
		}
	}
	//修改销售单位
	function com$yonyou$placeorder$SalesAdvOrderMultiController$changeseller(sender, args) {

		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"otherparams": {
				"pk_customer": ccustomerid
			},
			"reftype": Globals.RefInfoType.SALE_ORG,
			"callback": "changesellerbac()"
		})
	}
	function changesellerbac() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);
		$id("seller").set("value", retvalue.name);
		saleorg = retvalue.pk;
		if (com.yonyou.placeorder.SalesAdvOrderMultiController.olddata) {
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.saleorg.name = retvalue.name;
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.saleorg.pk_org = retvalue.pk;
		}
	}
	//修改发货企业
	function com$yonyou$placeorder$SalesAdvOrderMultiController$changesender(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "changesenderbac()"
		})
	}
	function changesenderbac() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);
		$id("sender").set("value", retvalue.name);
		sendstockorg = retvalue.pk;
		if (com.yonyou.placeorder.SalesAdvOrderMultiController.olddata) {
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.sendstockorg.name = retvalue.name;
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.sendstockorg.pk_org = retvalue.pk;
		}
	}
	//修改货物
	function changegoodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"otherparams": {
				"pk_stockorg": sendstockorg,
				"pk_customer": ccustomerid,
				"issaleorder": true
			},
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changgoods()"
		})
	}

	//修改车辆信息
	function changevehicles(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.VehiclesList", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"otherparams": {
				// "pk_stockorg": sendstockorg,
				"pk_customer": ccustomerid,
			},
			"vehicleslist": JSON.stringify(vehicleslist),
			// "reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "updatevehicles()"
		})
	}

	//更新车辆信息数
	function updatevehicles(sender, args) {
		var vehicleslistmp = $param.getJSONObject("vehicleslist");
		if (vehicleslistmp)
			vehicleslist = eval(vehicleslistmp)

		try {
			vehicleslistNum = vehicleslist.length ? vehicleslist.length : 0;
			$id("labelvehicles").set("value", "当前 " + vehicleslistNum + " 条信息");
		} catch (e) { console.log(e) }
	}


	function changgoods() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
		$id("goods").set("value", retvalue.name);
		if (retvalue.dw) {
			$id("lbl_dw").set("value", retvalue.dw);
		}
		cmaterialid = retvalue.pk;
		if (com.yonyou.placeorder.SalesAdvOrderMultiController.olddata) {
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.cmaterialid.name = retvalue.name;
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.cmaterialid.pk_material = retvalue.pk;
		}
	}
	//修改车牌
	function com$yonyou$placeorder$SalesAdvOrderMultiController$fmtvlicenseOnclick(sender, args) {
		var vlicense = $id("lbl_fmtvlicense").get("value");
		if (vlicense == "点击输入车号") {
			vlicense = "";
		}
		$window.showModalDialog({
			dialogId: "com.yonyou.placeorder.SelfInputDialog",
			arguments: {
				"vlicense": vlicense
			},
			features: {
				"dialogWidth": $device.getScreenWidth(),
				"dialogHeight": 210,
				"dialogTop": $device.getScreenHeight() - 290
			},
			callback: "selfInputDialogBack()"
		});
	}
	function selfInputDialogBack() {
		var vlicense = $jsonToString($param.getString("vlicense"));
		if (vlicense != "cancel") {
			$id("lbl_fmtvlicense").set("value", vlicense);
		}
	}
	function com$yonyou$placeorder$SalesAdvOrderMultiController$freelicenseOnclick(sender, args) {
		var isfldisplay = $id("pnl_carno").get("display");
		if (isfldisplay == "none") {
			$id("pnl_carno").set("display", "block");
		} else {
			$id("pnl_carno").set("display", "none");
		}
	}
	//修改参照车牌
	function com$yonyou$placeorder$SalesAdvOrderMultiController$changecar(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"otherparams": {
				"pk_customer": ccustomerid
			},
			"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
			"callback": "changecarbac()"
		})
	}
	function changecarbac() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
		$id("carno").set("value", retvalue.code);
		vlicense = retvalue.code;
		if (Globals.checkvlicense(vlicense)) {
			$id("pnl_carno").set("display", "block");
		} else {
			$id("lbl_fmtvlicense").set("value", vlicense);
		}
		/*天瑞要求选择车牌时不带出司机信息
		var driverinfo = retvalue.name.split(" ");
		drivername = driverinfo[0];
		drivertelephone = driverinfo[1];
		driveridcode = driverinfo[2];

		$id("drivername").set("value", drivername);
		$id("drivertel").set("value", drivertelephone);
		$id("driverid").set("value", driveridcode);
		*/

	}
	//修改司机参照
	function com$yonyou$placeorder$SalesAdvOrderMultiController$selectDriverOnclick(sender, args) {
		var isfldisplay = $id("pnl_carno").get("display");
		var carno = "";
		if (isfldisplay == "none") {
			if ($id("lbl_fmtvlicense").get("value") != "点击输入车号") {
				carno = $id("lbl_fmtvlicense").get("value")
			}
		} else {
			carno = $id("carno").get("value");
		}
		if (!carno) {
			$alert("参照司机前请先填写正确的车牌号");
			return;
		}
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"otherparams": {
				"vlicense": carno
			},
			"reftype": Globals.RefInfoType.VEHICLE_DRIVER,
			"callback": "selectDriverCallback()"
		})
	}
	function selectDriverCallback() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.VEHICLE_DRIVER, retvalue);
		driveridcode = retvalue.pk;
		drivername = retvalue.code;
		var driverinfo = retvalue.name.split(" ");
		drivertelephone = driverinfo[1];
		$id("drivername").set("value", drivername);
		$id("drivertel").set("value", drivertelephone);
		$id("driverid").set("value", driveridcode);
	}
	//提交订单
	function com$yonyou$placeorder$SalesAdvOrderMultiController$postbill(sender, args) {
		if (!cmaterialid) {
			$alert("请选择物料");
			return;
		}
		var weight = $id("weight").get("value");
		if (!weight) {
			$alert("请输入数量");
			return;
		}
		var weightnum = parseFloat(weight);
		if (weightnum <= 0) {
			$alert("数量必须大于0");
			return;
		}

		if (vehicleslistNum <= 0) {
			$alert("请至少录入一条车辆信息");
			return;
		}

		// var isfldisplay = $id("pnl_carno").get("display");
		// var carno = "";
		// if (isfldisplay == "none") {
		// 	if ($id("lbl_fmtvlicense").get("value") != "点击输入车号") {
		// 		carno = $id("lbl_fmtvlicense").get("value")
		// 	}
		// } else {
		// 	carno = $id("carno").get("value");
		// 	if (!carno) {
		// 		$alert("请输入自定义车牌号码");
		// 		return;
		// 	}
		// }
		// com.yonyou.placeorder.SalesAdvOrderMultiController.carno = carno;

		// if ($id("drivername").get("value") == "") {
		// 	$alert("请输入司机姓名");
		// 	return;
		// } else if (Globals.checktruename($id("drivername").get("value"))) {
		// 	$alert("请输入真实姓名");
		// 	return;

		// } else if ($id("drivertel").get("value") == "") {
		// 	$alert("请输入司机电话");
		// 	return;
		// } else if (Globals.checktelephone($id("drivertel").get("value"))) {
		// 	$alert("请输入正确的手机号码");
		// 	return;
		// } else if ($id("driverid").get("value") == "") {
		// 	$alert("请输入司机身份证号");
		// 	return;
		// } else if (Globals.checkidnum($id("driverid").get("value"))) {
		// 	$alert("请输入正确的身份证号");
		// 	return;
		// }

		var data = $param.getJSONObject("data");
		if (data != null && typeof (data) != undefined) {
			var json = {
				"usercode": $cache.read("telephone"),
				"user": $cache.read("telephone"),
				"pk_appuser": $ctx.getApp("pk_appuser"),
				"saleorg": saleorg, //销售组织主键
				"sendstockorg": sendstockorg, //发货库存组织主键
				"ccustomerid": ccustomerid, //客户主键
				"cmaterialid": cmaterialid, //物料主键
				"ordernum": $id("weight").get("value"), //订单数量
				"vnote": $id("vnote").get("value"), //备注
				// "vlicense": carno, //车牌号
				// "drivername": $id("drivername").get("value"), //司机姓名
				// "drivertelephone": $id("drivertel").get("value"), //司机手机
				// "vdriverid": $id("driverid").get("value"),
				"cpreorderid": cpreorderid,
				"cpreorderbid": cpreorderbid,//司机身份证
				"vehicles": vehicleslist
			};
			$service.callAction({
				"usercode": $cache.read("telephone"),
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.SaleAdvOrderUMController", //后台Controller(带包名)的类名
				"action": "update", //后台Controller的方法名,
				"params": json, //自定义参数
				"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
				"contextmapping": "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
				"callback": "addsuccess()", //请求成功后回调js方法
				"error": "adderror()"//请求失败回调的js方法
			});
		} else {
			var json = {
				"usercode": $cache.read("telephone"),
				"user": $cache.read("telephone"),
				"pk_appuser": $ctx.getApp("pk_appuser"),
				"saleorg": saleorg, //销售组织主键
				"sendstockorg": sendstockorg, //发货库存组织主键
				"ccustomerid": ccustomerid, //客户主键
				"cmaterialid": cmaterialid, //物料主键
				"ordernum": $id("weight").get("value"), //订单数量
				"vnote": $id("vnote").get("value"), //备注
				// "vlicense": carno, //车牌号
				// "drivername": $id("drivername").get("value"), //司机姓名
				// "drivertelephone": $id("drivertel").get("value"), //司机手机
				// "vdriverid": $id("driverid").get("value")//司机身份证
				"vehicles": vehicleslist
			};
			// alert(JSON.stringify(json));
			$service.callAction({
				"usercode": $cache.read("telephone"),
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"timeout": 60,
				"viewid": "com.yonyou.placeorder.SaleAdvOrderUMController", //后台Controller(带包名)的类名
				"action": "add", //后台Controller的方法名,
				"params": json, //自定义参数
				"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
				"contextmapping": "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
				"callback": "addsuccess()", //请求成功后回调js方法
				"error": "adderror()"//请求失败回调的js方法
			})
		}
		$js.showLoadingBar();

	}
	function addsuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getString("result");
		var json = eval('(' + result + ')');
		var status = json.statuscode;
		if (status == "1001004") {
			$alert("密码错误");
		} else if (status == "1001001") {
			$alert("NC用户档案中无该用户");
		} else if (status == "1001002") {
			$alert("用户未注册（该用户档案密码为空）");
		} else if (status == "0") {
			$alert("提交成功");
			if (com.yonyou.placeorder.SalesAdvOrderMultiController.olddata) {
				com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.ordernum = $id("weight").get("value");
				com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.vnote = $id("vnote").get("value");
				com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.vlicense = com.yonyou.placeorder.SalesAdvOrderMultiController.carno;
				com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.vdriverid = $id("driverid").get("value");
				com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.drivertelephone = $id("drivertel").get("value");
				com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.drivername = $id("drivername").get("value");
				$view.closeWithCallBack({
					"result": com.yonyou.placeorder.SalesAdvOrderMultiController.olddata
				});
			} else {
				$view.close();
			}
		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误：" + errinfo);
		}
	}
	function adderror() {
		$js.hideLoadingBar();
		$alert("连接MA服务器异常");
	}
	//取消订单
	function com$yonyou$placeorder$SalesAdvOrderMultiController$invalid_onclick(sender, args) {
		$window.showModalDialog({
			dialogId: "com.yonyou.placeorder.ConfirmDlg",
			arguments: {
				"content": "是否确认取消本预订单？"
			},
			features: {
				"dialogWidth": 250,
				"dialogHeight": 125
			},
			callback: "dialogcallback()"
		})

	}
	function dialogcallback(sender, args) {
		var result = $jsonToString($param.getString("code"));
		if (result == "0") {
			var json = {
				"usercode": $cache.read("telephone"),
				"user": $cache.read("telephone"),
				"cpreorderid": cpreorderid,
				"cpreorderbid": cpreorderbid//司机身份证
			};
			$service.callAction({
				"usercode": $cache.read("telephone"),
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.SaleAdvOrderUMController", //后台Controller(带包名)的类名
				"action": "invalid", //后台Controller的方法名,
				"params": json, //自定义参数
				"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
				"contextmapping": "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
				"callback": "invalidsuccess()", //请求成功后回调js方法
				"error": "invaliderror()"//请求失败回调的js方法
			});
			$js.showLoadingBar();
		}
	}
	function invalidsuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getString("result");
		var json = eval('(' + result + ')');
		var status = json.statuscode;
		if (status == "0") {
			$alert("已取消");
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.billstatus.code = 7;
			com.yonyou.placeorder.SalesAdvOrderMultiController.olddata.billstatus.name = "单据失效";
			$view.closeWithCallBack({
				"result": com.yonyou.placeorder.SalesAdvOrderMultiController.olddata
			});
		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误：" + errinfo);
		}
	}
	function invaliderror() {
		$js.hideLoadingBar();
		$alert("连接MA服务器异常");
	}




	com.yonyou.placeorder.SalesAdvOrderMultiController.prototype = {
		fmtvlicenseOnclick: com$yonyou$placeorder$SalesAdvOrderMultiController$fmtvlicenseOnclick,
		testInput2: com$yonyou$placeorder$SalesAdvOrderMultiController$testInput2,
		testInput: com$yonyou$placeorder$SalesAdvOrderMultiController$testInput,
		selectDriverOnclick: com$yonyou$placeorder$SalesAdvOrderMultiController$selectDriverOnclick,
		freelicenseOnclick: com$yonyou$placeorder$SalesAdvOrderMultiController$freelicenseOnclick,
		invalid_onclick: com$yonyou$placeorder$SalesAdvOrderMultiController$invalid_onclick,
		changebill: com$yonyou$placeorder$SalesAdvOrderMultiController$changebill,
		postbill: com$yonyou$placeorder$SalesAdvOrderMultiController$postbill,
		changecar: com$yonyou$placeorder$SalesAdvOrderMultiController$changecar,
		changecustomer: com$yonyou$placeorder$SalesAdvOrderMultiController$changecustomer,
		changesender: com$yonyou$placeorder$SalesAdvOrderMultiController$changesender,
		changeseller: com$yonyou$placeorder$SalesAdvOrderMultiController$changeseller,
		button0_onclick: com$yonyou$placeorder$SalesAdvOrderMultiController$button0_onclick,
		initialize: com$yonyou$placeorder$SalesAdvOrderMultiController$initialize,
		evaljs: com$yonyou$placeorder$SalesAdvOrderMultiController$evaljs
	};
	com.yonyou.placeorder.SalesAdvOrderMultiController.registerClass('com.yonyou.placeorder.SalesAdvOrderMultiController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
