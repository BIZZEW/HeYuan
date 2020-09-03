//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.AllotQueryDetailController');
	com.yonyou.placeorder.AllotQueryDetailController = function () {
		com.yonyou.placeorder.AllotQueryDetailController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$AllotQueryDetailController$initialize() {
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

	function com$yonyou$placeorder$AllotQueryDetailController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$AllotQueryDetailController$back_onclick(sender, args) {
		$view.close();
	}

	function pageFresh() {
		var oldorder = $param.getJSONObject("oldorder");
		// alert(JSON.stringify(oldorder));
		var license1value = $cache.read("license1value");
		if (license1value) {
			$id("btn_license1").set("value", license1value);
		}
		var license2value = $cache.read("license2value");
		if (license2value) {
			$id("txt_license2").set("value", license2value);
		}
		$id("lbl_orderno").set("value", "请选择调拨订单");
		$id("lbl_matname").set("value", "");
		$id("lbl_dw1").set("value", "单位");
		$id("lbl_dw2").set("value", "单位");
		$id("lbl_porgname").set("value", "");
		$id("lbl_rcvstockorg").set("value", "");
		$id("lbl_splrname").set("value", "");
		$id("lbl_dbilldate").set("value", "");
		$id("lbl_rcvordercode").set("value", "调拨通知单号");
		$id("lbl_rcvorderdate").set("value", "");
		$id("lbl_remainnum").set("value", "");
		$id("num_yfjz").set("value", "");
		$id("num_dhl").set("value", "");
		$id("txt_transporter").set("value", "请选择运输商");
		$id("imgbtn_selectTransporter").set("value", "");
		$id("txt_vlicense").set("value", "");
		// if (Globals.checkvlicense(oldorder["vlicense"])) {
		// 	$id("txt_vlicense").set("display", "block");
		// } else {
		// 	$id("lbl_fmtvlicense").set("value", "");
		// }
		$id("txt_drivername").set("value", "");
		$id("txt_drivertelephone").set("value", "");
		$id("txt_driverid").set("value", "");
		$id("lbl_posimple").set("value", "货物--余量");

		var nowdate = Globals.getFormatDate(null, 0);
		$id("lbl_rcvorderdate").set("value", nowdate);

		var denddate = Globals.getFormatDate2(3);
		$id("denddate").set("value", denddate);
	}

	function com$yonyou$placeorder$AllotQueryDetailController$pageOnload(sender, args) {
		var denddate = Globals.getFormatDate2(3);
		$id("denddate").set("value", denddate);

		var oldorder = $param.getJSONObject("oldorder");

		alert(JSON.stringify(oldorder));

		var license1value = $cache.read("license1value");
		if (license1value) {
			$id("btn_license1").set("value", license1value);
		}
		var license2value = $cache.read("license2value");
		if (license2value) {
			$id("txt_license2").set("value", license2value);
		}
		if (oldorder) {
			$ctx.put("oldorder", oldorder);
			com.yonyou.placeorder.AllotQueryDetailController.oldorder = oldorder;

			// 调拨订单号
			$id("lbl_orderno").set("value", oldorder["vbillcode"]);
			// 货物--余量
			$id("lbl_posimple").set("value", oldorder["cinventoryid"]["name"] + "  余量" + oldorder["remainnum"]);

			// 调出库存组织
			if (oldorder["pk_org"])
				$id("outorg").set("value", oldorder["pk_org"]["name"]);
			// 调入库存组织
			if (oldorder["cinstockorgid"])
				$id("inorg").set("value", oldorder["cinstockorgid"]["name"]);
			// 调出仓库
			if (oldorder["coutstordocid"])
				$id("outwh").set("value", oldorder["coutstordocid"]["name"]);
			// 调入仓库
			if (oldorder["cinstordocid"])
				$id("inwh").set("value", oldorder["cinstordocid"]["name"]);

			// 调拨订单日期
			$id("lbl_dbilldate").set("value", oldorder["pdbilldate"]);

			// 货物
			$id("lbl_matname").set("value", oldorder["cinventoryid"]["name"]);
			// 货物单位
			$id("lbl_dw2").set("value", oldorder["cinventoryid"]["dw"]);
			// 数量
			$id("lbl_num").set("value", oldorder["nnum"]);
			// 余量
			$id("lbl_remainnum").set("value", oldorder["remainnum"]);
			// 调出数量
			$id("lbl_remainnum").set("value", oldorder["noutnum"]);
			// 调入数量
			$id("lbl_remainnum").set("value", oldorder["ninnum"]);

			// 调拨通知单号
			$id("noticecode").set("value", oldorder["noticecode"]);
			// 调拨类型
			$id("transtype").set("value", oldorder["transtype"]);
			// 调拨单日期
			$id("lbl_rcvorderdate").set("value", oldorder["dbilldate"]);
			// 失效日期
			$id("denddate").set("value", (oldorder["denddate"]).substring(0, 10));
			// 调拨数量
			$id("num_dhl").set("value", oldorder["num"]);

			// 车牌号码
			$id("txt_vlicense").set("value", oldorder["vlicense"]);

			if (Globals.checkvlicense(oldorder["vlicense"])) {
				$id("txt_vlicense").set("display", "block");
			} else {
				$id("lbl_fmtvlicense").set("value", oldorder["vlicense"]);
			}

			// 司机姓名
			$id("txt_drivername").set("value", oldorder["drivername"]);
			// 手机号
			$id("txt_drivertelephone").set("value", oldorder["drivertelephone"]);
			// 身份证号
			$id("txt_driverid").set("value", oldorder["driveridcode"]);

			if (oldorder["isedit"] == 'Y') {
				$id("btn_submit").set("disabled", "false");
				$id("btn_invalid").set("disabled", "false");
			} else {
				$id("btn_submit").set("display", "none");
				$id("btn_invalid").set("display", "none");
			}



			// $id("lbl_porgname").set("value", oldorder["purchaseorg"]["name"]);
			// $id("lbl_dw1").set("value", oldorder["cinventoryid"]["dw"]);
			// $id("lbl_rcvstockorg").set("value", oldorder["rcvstockorg"]["name"]);
			// $id("lbl_splrname").set("value", oldorder["supplier"]["name"]);
			// $id("lbl_rcvordercode").set("value", oldorder["noticecode"]);
			// $id("num_yfjz").set("value", oldorder["srcsendnum"]);
			// $id("txt_orespot").set("value", oldorder["orespotname"]);


			// if (oldorder["sendsupplier"]) {
			// 	$id("txt_transporter").set("value", oldorder["sendsupplier"]["name"]);
			// 	$id("imgbtn_selectTransporter").set("value", oldorder["sendsupplier"]["pk_supplier"]);
			// }

			com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj = {
				"pk_noticeorder": oldorder["pk_noticeorder"],
				"ordercode": oldorder["vbillcode"],
				// "pk_purchaseorder": oldorder["pk_order"],
				// "pk_stockorg": oldorder["rcvstockorg"]["pk_org"],
				// "cmaterialid": oldorder["material"]["pk_material"],
				// "pk_supplier": oldorder["supplier"]["pk_supplier"]
			}
			// var statuscode = oldorder.status.code;
			// if (oldorder.source == 'Y' && statuscode > -1 && statuscode < 4) {
			// 	$id("btn_invalid").set("disabled", "false");
			// } else {
			// 	$id("btn_submit").set("disabled", "disabled");
			// }
		} else {
			com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj = {};
			com.yonyou.placeorder.AllotQueryDetailController.oldorder = {};
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.material = {};
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.purchaseorg = {};
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.rcvstockorg = {};
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.supplier = {};

			var nowdate = Globals.getFormatDate(null, 0);
			$id("lbl_rcvorderdate").set("value", nowdate);
		}
	}

	function com$yonyou$placeorder$AllotQueryDetailController$changevender(sender, args) {
		var json = {
			"usercode": $cache.read("telephone"),
			"pk_appuser": $ctx.getApp("pk_appuser"),
		};

		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"otherparams": json,
			"reftype": Globals.RefInfoType.CURUSER_TRANSPORTER,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_TRANSPORTER, retvalue);

				$id("txt_transporter").set("value", retvalue.name);
				$id("imgbtn_selectTransporter").set("value", retvalue.pk);
			}
		})
	}

	function com$yonyou$placeorder$AllotQueryDetailController$selectOrderOnclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.PurchaseOrderList",
			"isKeep": "true",
			"callback": function () {
				var purchaseOrder = $param.getJSONObject("purchaseorder");
				if (purchaseOrder != undefined && purchaseOrder != null) {
					$ctx.put("purchaseOrder", purchaseOrder);
					$id("lbl_orderno").set("value", purchaseOrder["vbillcode"]);
					$id("lbl_matname").set("value", purchaseOrder["material"]["name"]);
					$id("lbl_dw1").set("value", purchaseOrder["material"]["dw"]);
					$id("lbl_dw2").set("value", purchaseOrder["material"]["dw"]);
					$id("lbl_porgname").set("value", purchaseOrder["purchaseorg"]["name"]);
					$id("lbl_rcvstockorg").set("value", purchaseOrder["rcvstockorg"]["name"]);
					$id("lbl_splrname").set("value", purchaseOrder["supplier"]["name"]);
					$id("lbl_dbilldate").set("value", purchaseOrder["dbilldate"]);
					$id("lbl_remainnum").set("value", purchaseOrder["remainnum"]);
					$id("lbl_posimple").set("value", purchaseOrder["material"]["name"] + "  余量" + purchaseOrder["remainnum"]);
					var orderobj = com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj;
					orderobj.pk_purchaseorder = purchaseOrder["pk_order"];
					orderobj.ordercode = purchaseOrder["vbillcode"];
					orderobj.pk_stockorg = purchaseOrder["rcvstockorg"]["pk_org"];
					orderobj.cmaterialid = purchaseOrder["material"]["pk_material"];
					orderobj.pk_supplier = purchaseOrder["supplier"]["pk_supplier"];
					//更新返回列表数据
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.material.pk_material = purchaseOrder["material"]["pk_material"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.material.name = purchaseOrder["material"]["name"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.material.dw = purchaseOrder["material"]["dw"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.purchaseorg.name = purchaseOrder["purchaseorg"]["name"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.rcvstockorg.pk_org = purchaseOrder["rcvstockorg"]["pk_org"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.rcvstockorg.name = purchaseOrder["rcvstockorg"]["name"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.supplier.pk_supplier = purchaseOrder["supplier"]["pk_supplier"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.supplier.name = purchaseOrder["supplier"]["name"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.pdbilldate = purchaseOrder["dbilldate"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.remainnum = purchaseOrder["remainnum"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.pk_order = purchaseOrder["pk_order"];
					com.yonyou.placeorder.AllotQueryDetailController.oldorder.vbillcode = purchaseOrder["vbillcode"];
				}
			}
		});
	}
	function com$yonyou$placeorder$AllotQueryDetailController$showDetail(sender, args) {
		var isDetailShow = $id("pnl_podetail").get("display");
		if (isDetailShow == "none") {
			$id("pnl_podetail").set("display", "block");
			$id("btn_showdetail").set("value", "-");
		} else {
			$id("pnl_podetail").set("display", "none");
			$id("btn_showdetail").set("value", "+");
		}
	}
	function com$yonyou$placeorder$AllotQueryDetailController$fmtvlicenseOnclick(sender, args) {
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
	function com$yonyou$placeorder$AllotQueryDetailController$showFreeLicense(sender, args) {
		var isfldisplay = $id("txt_vlicense").get("display");
		if (isfldisplay == "none") {
			$id("txt_vlicense").set("display", "block");
		} else {
			$id("txt_vlicense").set("display", "none");
		}
	}
	function com$yonyou$placeorder$AllotQueryDetailController$goselectcar(sender, args) {
		var pk_supplier = com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj.pk_supplier;
		$view.open({
			"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
			"isKeep": "true",
			"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
			"otherparams": {
				"pk_supplier": pk_supplier
			},
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
				$id("txt_vlicense").set("value", retvalue.code);
				if (Globals.checkvlicense(retvalue.code)) {
					$id("txt_vlicense").set("display", "block");
				} else {
					$id("lbl_fmtvlicense").set("value", retvalue.code);
				}
				/*天瑞要求选择车辆时不带出司机信息
				var driverinfo = retvalue.name.split(" ");
				$id("txt_drivername").set("value", driverinfo[0]);
				$id("txt_drivertelephone").set("value", driverinfo[1]);
				$id("txt_driverid").set("value", driverinfo[2]);
				*/
			}
		});
	}
	function com$yonyou$placeorder$AllotQueryDetailController$selectDriver(sender, args) {
		var isfldisplay = $id("txt_vlicense").get("display");
		var carno = "";
		if (isfldisplay == "none") {
			if ($id("lbl_fmtvlicense").get("value") != "点击输入车号") {
				carno = $id("lbl_fmtvlicense").get("value");
			}
		} else {
			carno = $id("txt_vlicense").get("value");
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
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.VEHICLE_DRIVER, retvalue);
				var driverinfo = retvalue.name.split(" ");
				$id("txt_drivername").set("value", retvalue.code);
				$id("txt_drivertelephone").set("value", driverinfo[1]);
				$id("txt_driverid").set("value", retvalue.pk);
			}
		})
	}
	function com$yonyou$placeorder$AllotQueryDetailController$yfjzOnchange(sender, args) {
		$id("num_dhl").set("value", $id("num_yfjz").get("value"));
	}

	function com$yonyou$placeorder$AllotQueryDetailController$submitOnclick(sender, args) {
		var denddate = $id("denddate").get("value");
		// alert(denddate);
		if (!denddate) {
			$alert("失效日期不能为空");
			return;
		}

		var pocode = $id("lbl_orderno").get("value");
		if (!pocode) {
			$alert("请选择调拨订单！");
			return;
		}

		var rcvnumstr = $id("num_dhl").get("value");
		if (!rcvnumstr) {
			$alert("到货量不能为空");
			return;
		}
		var rcvnum = parseFloat(rcvnumstr);
		if (rcvnum <= 0) {
			$alert("到货量必须大于0");
			return;
		}
		var remainnum = parseFloat($id("lbl_remainnum").get("value"));
		if (rcvnum > remainnum) {
			$alert("到货量不能大于余量");
			return;
		}

		var srcsendnum = $id("num_yfjz").get("value");
		var vlicense = $id("txt_vlicense").get("value");
		var transporter = $id("txt_transporter").get("value");
		var transporterpk = $id("imgbtn_selectTransporter").get("value");
		var isfldisplay = $id("txt_vlicense").get("display");
		if (isfldisplay == "none") {
			if ($id("lbl_fmtvlicense").get("value") != "点击输入车号") {
				vlicense = $id("lbl_fmtvlicense").get("value");
			}
		} else if (!vlicense) {
			$alert("请输入自定义车牌号码");
			return;
		}
		if (!vlicense) {
			$alert("车号不能为空");
			return;
		}
		com.yonyou.placeorder.AllotQueryDetailController.carno = vlicense;
		var drivername = $id("txt_drivername").get("value");
		// if (typeof (drivername) == "undefined" || drivername == null || drivername == "") {
		// 	$alert("司机姓名不能为空");
		// 	return;
		// }

		// if (Globals.checktruename(drivername)) {
		// 	$alert("请输入正确的司机姓名");
		// 	return;
		// }

		var drivertelephone = $id("txt_drivertelephone").get("value");
		// if (typeof (drivertelephone) == "undefined" || drivertelephone == null || drivertelephone == "") {
		// 	$alert("手机号不能为空");
		// 	return;
		// }

		// if (Globals.checktelephone(drivertelephone)) {
		// 	$alert("请输入正确的手机号码");
		// 	return
		// }

		var driveridcode = $id("txt_driverid").get("value");
		// if (typeof (driveridcode) == "undefined" || driveridcode == null || driveridcode == "") {
		// 	$alert("身份证号不能为空");
		// 	return;
		// }

		// if (Globals.checkidnum(driveridcode)) {
		// 	$alert("请输入正确的身份证号");
		// 	return
		// }
		var orderobj = com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj;
		var params = {
			"usercode": $cache.read("telephone"),
			"pk_purchaseorder": orderobj["pk_purchaseorder"],
			"ordercode": orderobj["ordercode"],
			"pk_stockorg": orderobj["pk_stockorg"],
			"pk_supplier": orderobj["pk_supplier"],
			// "pk_sendsupplier": transporterpk,
			"denddate": denddate,
			"cmaterialid": orderobj["cmaterialid"],
			"num": rcvnum,
			"srcsendnum": srcsendnum,
			"vlicense": vlicense,
			"drivername": drivername,
			"drivertelephone": drivertelephone,
			"driveridcode": driveridcode,
			"pk_appuser": $ctx.getApp("pk_appuser"),
			"appphone": $cache.read("telephone"),
			"isFixed": "Y"
		}

		if (transporterpk != "")
			params.pk_sendsupplier = transporterpk;

		if (orderobj.pk_noticeorder) {
			params["pk_noticeorder"] = orderobj.pk_noticeorder;
			$service.callAction({
				"usercode": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.TransOrderUMController", //后台Controller(带包名)的类名
				"action": "update", //后台Controller的方法名,
				"params": params, //自定义参数
				"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
				"contextmapping": "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
				"callback": "updateConnectSuccess()", //请求成功后回调js方法
				"error": "connectError()"//请求失败回调的js方法
			});
		} else {
			$service.callAction({
				"usercode": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.TransOrderUMController", //后台Controller(带包名)的类名
				"action": "add", //后台Controller的方法名,
				"params": params, //自定义参数
				"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
				"contextmapping": "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
				"callback": "addConnectSuccess()", //请求成功后回调js方法
				"error": "connectError()"//请求失败回调的js方法
			});
		}
		$js.showLoadingBar();
	}

	function com$yonyou$placeorder$AllotQueryDetailController$invalidOnclick(sender, args) {

		$window.showModalDialog({
			dialogId: "com.yonyou.placeorder.ConfirmDlg",
			arguments: {
				"content": "是否确认取消本单？"
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
			var orderobj = com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj;
			if (orderobj.pk_noticeorder) {
				var params = {
					"usercode": $cache.read("telephone"),
					"pk_noticeorder": orderobj.pk_noticeorder,
					"pk_stockorg": orderobj.pk_stockorg,
					"isFixed": "Y"
				}
				$service.callAction({
					"usercode": $cache.read("telephone"),
					"appid": "PlaceOrder",
					"viewid": "com.yonyou.placeorder.TransOrderUMController", //后台Controller(带包名)的类名
					"action": "invalid", //后台Controller的方法名,
					"params": params, //自定义参数
					"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
					"contextmapping": "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
					"callback": "invalidConnectSuccess()", //请求成功后回调js方法
					"error": "connectError()"//请求失败回调的js方法
				});
				$js.showLoadingBar();
			}
		}

	}

	function addConnectSuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getJSONObject("result");
		if (result && result.statuscode == "0") {
			$alert("新增调拨通知单成功！");
			pageFresh();
			//$view.close();
			// add by wangkem 20180625
			com.yonyou.placeorder.AllotQueryDetailController.pk_noticeorder = result.datas.pk_noticeorder;
			$id("btn_share").set("disabled", "false");
			$id("btn_invalid").set("disabled", "false");
			//end
		} else {
			var errinfo = "新增调拨通知单失败，失败原因：";
			if (result.errinfo) {
				errinfo = errinfo + result.errinfo + "!";
			} else {
				errinfo = errinfo + "系统错误！";
			}
			$alert(errinfo);
		}
	}

	function updateConnectSuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getJSONObject("result");
		if (result && result.statuscode == "0") {
			$alert("修改调拨通知单成功！");
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.srcsendnum = $id("num_yfjz").get("value");
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.num = $id("num_dhl").get("value");
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.vlicense = com.yonyou.placeorder.AllotQueryDetailController.carno;
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.driveridcode = $id("txt_driverid").get("value");
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.drivertelephone = $id("txt_drivertelephone").get("value");
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.drivername = $id("txt_drivername").get("value");
			$view.closeWithCallBack({
				"result": com.yonyou.placeorder.AllotQueryDetailController.oldorder
			});
		} else {
			var errinfo = "修改调拨通知单失败，失败原因：";
			if (result.errinfo) {
				errinfo = errinfo + result.errinfo + "!";
			} else {
				errinfo = errinfo + "系统错误！";
			}
			$alert(errinfo);
		}
	}

	function invalidConnectSuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getJSONObject("result");
		if (result && result.statuscode == "0") {
			$alert("取消调拨通知单成功！");
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.status.code = -1;
			com.yonyou.placeorder.AllotQueryDetailController.oldorder.status.name = "取消";
			$view.closeWithCallBack({
				"result": com.yonyou.placeorder.AllotQueryDetailController.oldorder
			});
		} else {
			var errinfo = "取消调拨通知单失败，失败原因：";
			if (result.errinfo) {
				errinfo = errinfo + result.errinfo + "!";
			} else {
				errinfo = errinfo + "系统错误！";
			}
			$alert(errinfo);
		}
	}

	function connectError() {
		$js.hideLoadingBar();
		$alert("访问MA服务器错误");
	}

	function com$yonyou$placeorder$AllotQueryDetailController$button0_onclick(sender, args) {
		$view.close();
	}
	function com$yonyou$placeorder$AllotQueryDetailController$shareOnClick(sender, args) {
		var isDisplay = $id("pnl_share").get("display");
		if (isDisplay == "none") {
			$id("pnl_share").set("display", "block");
		} else {
			$id("pnl_share").set("display", "none");
		}
	}

	//begin add by wangkem 20180625
	function com$yonyou$placeorder$AllotQueryDetailController$jumpToSharePage(sender, args) {
		var vlicense = $id("txt_vlicense").get("value");
		//车牌号
		var isfldisplay = $id("txt_vlicense").get("display");
		if (isfldisplay == "none") {
			vlicense = $id("lbl_fmtvlicense").get("value");
		}
		var splrname = $id("lbl_splrname").get("value");
		//供应商
		var matname = $id("lbl_matname").get("value");
		//物料
		var dhl = $id("num_dhl").get("value");
		//收货数量
		var rcvstockorg = $id("lbl_rcvstockorg").get("value");
		//收货库存组织
		var rcvwarehouse = "rcvwarehouse";
		//待加入(待修改)
		var rcvorderdate = $id("lbl_rcvorderdate").get("value");
		//收货日期
		var billtype = "rcvbill";
		//表示类型为调拨通知单
		var pk_rcvbill = "PK00000000";
		if (com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj && com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj.pk_noticeorder) {
			pk_rcvbill = com.yonyou.placeorder.AllotQueryDetailController.AllotOrderObj.pk_noticeorder;
		} else {
			pk_rcvbill = com.yonyou.placeorder.AllotQueryDetailController.pk_noticeorder;
		}
		var params = {
			"vlicense": vlicense,
			"splrname": splrname,
			"matname": matname,
			"dhl": dhl,
			"rcvstockorg": rcvstockorg,
			"rcvwarehouse": rcvwarehouse,
			"rcvorderdate": rcvorderdate,
			"billtype": billtype,
			"pk_rcvbill": pk_rcvbill
		}
		$view.open({
			"viewid": "com.yonyou.placeorder.ShareTwoCodeAndInfo",
			"isKeep": "true",
			"shareparams": params
		});
	}
	//end
	com.yonyou.placeorder.AllotQueryDetailController.prototype = {
		jumpToSharePage: com$yonyou$placeorder$AllotQueryDetailController$jumpToSharePage,
		fmtvlicenseOnclick: com$yonyou$placeorder$AllotQueryDetailController$fmtvlicenseOnclick,
		shareOnClick: com$yonyou$placeorder$AllotQueryDetailController$shareOnClick,
		selectDriver: com$yonyou$placeorder$AllotQueryDetailController$selectDriver,
		showFreeLicense: com$yonyou$placeorder$AllotQueryDetailController$showFreeLicense,
		showDetail: com$yonyou$placeorder$AllotQueryDetailController$showDetail,
		button0_onclick: com$yonyou$placeorder$AllotQueryDetailController$button0_onclick,
		selectOrderOnclick: com$yonyou$placeorder$AllotQueryDetailController$selectOrderOnclick,
		invalidOnclick: com$yonyou$placeorder$AllotQueryDetailController$invalidOnclick,
		submitOnclick: com$yonyou$placeorder$AllotQueryDetailController$submitOnclick,
		yfjzOnchange: com$yonyou$placeorder$AllotQueryDetailController$yfjzOnchange,
		goselectcar: com$yonyou$placeorder$AllotQueryDetailController$goselectcar,
		pageOnload: com$yonyou$placeorder$AllotQueryDetailController$pageOnload,
		back_onclick: com$yonyou$placeorder$AllotQueryDetailController$back_onclick,
		initialize: com$yonyou$placeorder$AllotQueryDetailController$initialize,
		evaljs: com$yonyou$placeorder$AllotQueryDetailController$evaljs,
		changevender: com$yonyou$placeorder$AllotQueryDetailController$changevender,
	};
	com.yonyou.placeorder.AllotQueryDetailController.registerClass('com.yonyou.placeorder.AllotQueryDetailController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}