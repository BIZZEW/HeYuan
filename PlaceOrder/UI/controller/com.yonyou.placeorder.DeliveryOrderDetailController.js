//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.DeliveryOrderDetailController');
	com.yonyou.placeorder.DeliveryOrderDetailController = function () {
		com.yonyou.placeorder.DeliveryOrderDetailController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$initialize() {
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

	function com$yonyou$placeorder$DeliveryOrderDetailController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$DeliveryOrderDetailController$pageOnload(sender, args) {
		var oldorder = $param.getJSONObject("oldorder");
		var license1value = $cache.read("license1value");
		if (license1value) {
			$id("btn_license1").set("value", license1value);
		}
		var license2value = $cache.read("license2value");
		if (license2value) {
			$id("txt_license2").set("value", license2value);
		}
		if (oldorder != undefined && oldorder != null) {
			$ctx.put("oldorder", oldorder);
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder = oldorder;

			// $alert(JSON.stringify(oldorder))

			if (oldorder["isbig"] == 'Y')
				$id("btn_invalid").set("disabled", "false");
			else
				$id("btn_invalid").set("display", "none");


			$id("lbl_orderno").set("value", oldorder["saleorderno"]);
			com.yonyou.placeorder.DeliveryOrderDetailController.srcSaleorderNo = oldorder["saleorderno"];
			$id("lbl_matname").set("value", oldorder["cmaterialid"]["name"]);
			$id("lbl_saleorg").set("value", oldorder["saleorg"]["name"]);
			$id("lbl_dw").set("value", oldorder["cmaterialid"]["dw"]);//add by wangkem 20180625
			$id("lbl_sendstockorg").set("value", oldorder["sendstockorg"]["name"]);
			$id("lbl_customer").set("value", oldorder["ccustomerid"]["name"]);
			$id("lbl_dbilldate").set("value", oldorder["sdbilldate"]);
			$id("lbl_fchordercode").set("value", oldorder["noticecode"]);
			$id("lbl_ftcorderdate").set("value", oldorder["dbilldate"]);
			$id("lbl_remainnum").set("value", oldorder["remainnum"]);
			$id("txt_fetchnum").set("value", oldorder["num"]);
			$id("txt_vlicense").set("value", oldorder["vlicense"]);
			if (Globals.checkvlicense(oldorder["vlicense"])) {
				$id("txt_vlicense").set("display", "block");
			} else {
				$id("lbl_fmtvlicense").set("value", oldorder["vlicense"]);
			}
			$id("txt_drivername").set("value", oldorder["drivername"]);
			$id("txt_drivertelephone").set("value", oldorder["drivertelephone"]);
			$id("txt_driveridcode").set("value", oldorder["driveridcode"]);
			$id("lbl_sosimple").set("value", oldorder["cmaterialid"]["name"] + "  余量" + oldorder["remainnum"]);
			com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj = {
				"pk_noticeorder": oldorder["pk_noticeorder"],
				"pk_saleorder": oldorder["csaleorderid"],
				"ordercode": oldorder["saleorderno"],
				"pk_sendstockorg": oldorder["sendstockorg"]["pk_org"],
				"cmaterialid": oldorder["cmaterialid"]["pk_material"],
				"pk_customer": oldorder["ccustomerid"]["pk_customer"]
			}
			var statuscode = oldorder.status.code;
			if (oldorder.source == 'Y' && statuscode > -10 && statuscode < 40) {
				$id("btn_invalid").set("disabled", "false");
			} else {
				$id("btn_submit").set("disabled", "disabled");
			}
		} else {
			com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj = {}
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder = {};
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.cmaterialid = {};
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.saleorg = {};
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.sendstockorg = {};
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.ccustomerid = {};
			var nowdate = Globals.getFormatDate(null, 0);
			$id("lbl_ftcorderdate").set("value", nowdate);
		}
	}

	function com$yonyou$placeorder$DeliveryOrderDetailController$selectSaleorder(sender, args) {
		var filterOrderNo = "none";
		if (com.yonyou.placeorder.DeliveryOrderDetailController.srcSaleorderNo) {
			filterOrderNo = com.yonyou.placeorder.DeliveryOrderDetailController.srcSaleorderNo;
		}
		$view.open({
			"viewid": "com.yonyou.placeorder.SalesOrderList",
			"isKeep": "true",
			"otherparams": {
				"filterOrderNo": filterOrderNo
			},
			"callback": function () {
				var saleorder = $param.getJSONObject("saleorder");
				if (saleorder) {
					$ctx.put("saleorder", saleorder);
					$id("lbl_orderno").set("value", saleorder["saleorderno"]);
					$id("lbl_matname").set("value", saleorder["cmaterialid"]["name"]);
					$id("lbl_dw").set("value", saleorder["cmaterialid"]["dw"]);
					$id("lbl_saleorg").set("value", saleorder["saleorg"]["name"]);
					$id("lbl_sendstockorg").set("value", saleorder["sendstockorg"]["name"]);
					$id("lbl_customer").set("value", saleorder["ccustomerid"]["name"]);
					$id("lbl_dbilldate").set("value", saleorder["dbilldate"]);
					$id("lbl_remainnum").set("value", saleorder["remainnum"]);
					if (saleorder["vcarnumber"]) {
						$id("txt_vlicense").set("value", saleorder["vcarnumber"]);
						if (Globals.checkvlicense(saleorder["vcarnumber"])) {
							$id("txt_vlicense").set("display", "block");
						} else {
							$id("lbl_fmtvlicense").set("value", saleorder["vcarnumber"]);
						}
						$id("lbl_remainnum").set("value", saleorder["vcarnumber"]);
					}
					if (saleorder["vdrivername"]) {
						$id("txt_drivername").set("value", saleorder["vdrivername"]);
					}
					if (saleorder["vdriverid"]) {
						$id("txt_driveridcode").set("value", saleorder["vdriverid"]);
					}
					if (saleorder["vdrivertel"]) {
						$id("txt_drivertelephone").set("value", saleorder["vdrivertel"]);
					}
					$id("lbl_sosimple").set("value", saleorder["cmaterialid"]["name"] + "  余量" + saleorder["remainnum"]);
					var orderobj = com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj;
					orderobj.pk_saleorder = saleorder["csaleorderid"];
					orderobj.ordercode = saleorder["saleorderno"];
					orderobj.pk_sendstockorg = saleorder["sendstockorg"]["pk_org"];
					orderobj.cmaterialid = saleorder["cmaterialid"]["pk_material"];
					orderobj.pk_customer = saleorder["ccustomerid"]["pk_customer"];
					//更新返回列表数据
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.cmaterialid.pk_material = saleorder["cmaterialid"]["pk_material"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.cmaterialid.name = saleorder["cmaterialid"]["name"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.cmaterialid.dw = saleorder["cmaterialid"]["dw"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.saleorg.name = saleorder["saleorg"]["name"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.sendstockorg.pk_org = saleorder["sendstockorg"]["pk_org"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.sendstockorg.name = saleorder["sendstockorg"]["name"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.ccustomerid.pk_customer = saleorder["ccustomerid"]["pk_customer"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.ccustomerid.name = saleorder["ccustomerid"]["name"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.sdbilldate = saleorder["dbilldate"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.remainnum = saleorder["remainnum"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.csaleorderid = saleorder["csaleorderid"];
					com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.saleorderno = saleorder["saleorderno"];
				}
			}
		});
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$showhidedetail(sender, args) {
		var isDetailShow = $id("pnl_sodetails").get("display");
		if (isDetailShow == "none") {
			$id("pnl_sodetails").set("display", "block");
			$id("btn_showdetail").set("value", "-");
		} else {
			$id("pnl_sodetails").set("display", "none");
			$id("btn_showdetail").set("value", "+");
		}
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$fmtvlicenseOnclick(sender, args) {
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
	function com$yonyou$placeorder$DeliveryOrderDetailController$showFreeLicense(sender, args) {
		var isfldisplay = $id("txt_vlicense").get("display");
		if (isfldisplay == "none") {
			$id("txt_vlicense").set("display", "block");
		} else {
			$id("txt_vlicense").set("display", "none");
		}
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$selectCar(sender, args) {
		var pk_customer = com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj.pk_customer;
		$view.open({
			"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
			"isKeep": "true",
			"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
			"otherparams": {
				"pk_customer": pk_customer
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
				/*天瑞要求选择车牌号不带出司机信息
				var driverinfo = retvalue.name.split(" ");
				$id("txt_drivername").set("value", driverinfo[0]);
				$id("txt_drivertelephone").set("value", driverinfo[1]);
				$id("txt_driveridcode").set("value", driverinfo[2]);
				*/
			}
		});
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$goSelectDriver(sender, args) {
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
				$id("txt_driveridcode").set("value", retvalue.pk);
			}
		})
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$submitOnclick(sender, args) {
		if (!com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj.pk_saleorder) {
			$alert("请选择销售订单！");
			return;
		}

		var fetchnumstr = $id("txt_fetchnum").get("value");
		if (!fetchnumstr) {
			$alert("提货量不能为空");
			return;
		}
		var fetchnum = parseFloat(fetchnumstr);
		if (fetchnum <= 0) {
			$alert("提货量必须大于0");
			return;
		}
		var remainnum = parseFloat($id("lbl_remainnum").get("value"));
		if (fetchnum > remainnum) {
			$alert("提货量不能大于余量");
			return;
		}
		var vlicense = $id("txt_vlicense").get("value");
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
		com.yonyou.placeorder.DeliveryOrderDetailController.carno = vlicense;
		var drivername = $id("txt_drivername").get("value");
		if (drivername == undefined || drivername == null || drivername == "") {
			$alert("司机姓名不能为空");
			return;
		}
		if (Globals.checktruename(drivername)) {
			$alert("请输入正确的司机姓名");
			return;
		}

		var drivertelephone = $id("txt_drivertelephone").get("value");
		if (drivertelephone == undefined || drivertelephone == null || drivertelephone == "") {
			$alert("手机号不能为空");
			return;
		}
		if (Globals.checktelephone(drivertelephone)) {
			$alert("请输入正确的手机号码");
			return
		}
		var driveridcode = $id("txt_driveridcode").get("value");
		if (driveridcode == undefined || driveridcode == null || driveridcode == "") {
			$alert("身份证号不能为空");
			return;
		}
		if (Globals.checkidnum(driveridcode)) {
			$alert("请输入正确的身份证号");
			return
		}
		var orderobj = com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj;
		var params = {
			"usercode": $cache.read("telephone"),
			"pk_saleorder": orderobj["pk_saleorder"],
			"pk_stockorg": orderobj["pk_sendstockorg"],
			"ordercode": orderobj["ordercode"],
			"pk_customer": orderobj["pk_customer"],
			"cmaterialid": orderobj["cmaterialid"],
			"num": fetchnum,
			"vlicense": vlicense,
			"drivername": drivername,
			"drivertelephone": drivertelephone,
			"driveridcode": driveridcode,
			"pk_appuser": $ctx.getApp("pk_appuser"),
			"appphone": $cache.read("telephone")
		}
		if (orderobj.pk_noticeorder) {
			params["pk_noticeorder"] = orderobj.pk_noticeorder;
			$service.callAction({
				"usercode": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.DeliveryOrderUMController", //后台Controller(带包名)的类名
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
				"viewid": "com.yonyou.placeorder.DeliveryOrderUMController", //后台Controller(带包名)的类名
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

	function com$yonyou$placeorder$DeliveryOrderDetailController$invalidOnclick(sender, args) {

		$window.showModalDialog({
			dialogId: "com.yonyou.placeorder.ConfirmDlg",
			arguments: {
				"content": "是否确认取消本提货单？"
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
			var orderobj = com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj;
			if (orderobj.pk_noticeorder) {
				var params = {
					"usercode": $cache.read("telephone"),
					"pk_noticeorder": orderobj.pk_noticeorder,
					"pk_stockorg": orderobj.pk_sendstockorg
				}
				$service.callAction({
					"usercode": $cache.read("telephone"),
					"appid": "PlaceOrder",
					"viewid": "com.yonyou.placeorder.DeliveryOrderUMController", //后台Controller(带包名)的类名
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
			$alert("新增提货单成功！");
			//begin modified by wangkem 20180625
			//$view.close();
			com.yonyou.placeorder.DeliveryOrderDetailController.pk_noticeorder = result.datas.pk_noticeorder;
			$id("btn_share").set("disabled", "false");
			$id("btn_invalid").set("disabled", "false");
			//end
		} else {
			var errinfo = "新增提货单失败，失败原因：";
			if (result.errinfo) {
				errinfo = errinfo + result.errinfo + "!";
			} else {
				errinfo = errinfo + "系统错误！";
			}
			$alert(errinfo);
		}
	}

	function updateConnectSuccess(sender, args) {
		$js.hideLoadingBar();
		var result = $ctx.getJSONObject("result");
		if (result && result.statuscode == "0") {
			$alert("修改提货单成功！");
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.num = $id("txt_fetchnum").get("value");
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.vlicense = com.yonyou.placeorder.DeliveryOrderDetailController.carno;
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.driveridcode = $id("txt_driveridcode").get("value");
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.drivertelephone = $id("txt_drivertelephone").get("value");
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.drivername = $id("txt_drivername").get("value");
			$view.closeWithCallBack({
				"result": com.yonyou.placeorder.DeliveryOrderDetailController.oldorder
			});
		} else {
			var errinfo = "修改提货单失败，失败原因：";
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
			$alert("取消提货单成功！");
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.status.code = -1;
			com.yonyou.placeorder.DeliveryOrderDetailController.oldorder.status.name = "取消";
			$view.closeWithCallBack({
				"result": com.yonyou.placeorder.DeliveryOrderDetailController.oldorder
			});
		} else {
			var errinfo = "取消提货单失败，失败原因：";
			if (result.errinfo) {
				errinfo = errinfo + result.errinfo + "!";
			} else {
				errinfo = errinfo + "系统错误！";
			}
			$alert(errinfo);
		}
	}

	function connectError(sender, args) {
		$js.hideLoadingBar();
		$alert("访问MA服务器错误:" + args.err_msg);
	}

	function com$yonyou$placeorder$DeliveryOrderDetailController$back_onclick(sender, args) {
		$view.close();
	}

	function com$yonyou$placeorder$DeliveryOrderDetailController$dnameOnfocus(sender, args) {
		$alert("onfocus");
		var animation = {
			type: "translate"
		}
		$id("viewPage0").animate(animation);
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$shareOnClick(sender, args) {
		var isDisplay = $id("pnl_share").get("display");
		if (isDisplay == "none") {
			$id("pnl_share").set("display", "block");
		} else {
			$id("pnl_share").set("display", "none");
		}
	}
	function com$yonyou$placeorder$DeliveryOrderDetailController$wxShareOnclick(sender, args) {
		$wxshare.init({
			"appid": "wxc96b35d33faedffe"//appid需要到微信开放平台获取
		});
		$wxshare.sendTextandImage({
			"type": "friend",
			"url": "http://www.baidu.com/",
			"title": "图文测试",
			"des": "分享文字",
			"image": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
		});
	}
	//begin add by wangkem 20180625
	function jumpToSharePage(sender, args) {
		var vlicense = $id("txt_vlicense").get("value");//自定义车牌号
		var isfldisplay = $id("txt_vlicense").get("display");
		if (isfldisplay == "none") {//非自定义车牌号
			vlicense = $id("lbl_fmtvlicense").get("value");
		}
		var customer = $id("lbl_customer").get("value");//客户
		var matname = $id("lbl_matname").get("value");//物料
		var fetchnum = $id("txt_fetchnum").get("value");//提货数量
		var sendstockorg = $id("lbl_sendstockorg").get("value");//提货库存组织
		var pickwarehouse = "pickwarehouse";//提货仓库，待加入(待修改)
		var ftcorderdate = $id("lbl_ftcorderdate").get("value");//提货日期
		var billtype = "pickbill";//表示类型为提货单
		var pk_pickbill = "PK00000000";
		if (com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj &&
			com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj.pk_noticeorder) {
			pk_pickbill = com.yonyou.placeorder.DeliveryOrderDetailController.DeliveryOrderObj.pk_noticeorder;
		} else {
			pk_pickbill = com.yonyou.placeorder.DeliveryOrderDetailController.pk_noticeorder;
		}
		//pk_pickbill="PK00000000";
		var params = {
			"vlicense": vlicense,
			"customer": customer,
			"matname": matname,
			"fetchnum": fetchnum,
			"sendstockorg": sendstockorg,
			"pickwarehouse": pickwarehouse,
			"ftcorderdate": ftcorderdate,
			"billtype": billtype,
			"pk_pickbill": pk_pickbill
		}
		$view.open({
			"viewid": "com.yonyou.placeorder.ShareTwoCodeAndInfo",
			"isKeep": "true",
			"shareparams": params
		});
	}
	//end
	com.yonyou.placeorder.DeliveryOrderDetailController.prototype = {
		fmtvlicenseOnclick: com$yonyou$placeorder$DeliveryOrderDetailController$fmtvlicenseOnclick,
		wxShareOnclick: com$yonyou$placeorder$DeliveryOrderDetailController$wxShareOnclick,
		shareOnClick: com$yonyou$placeorder$DeliveryOrderDetailController$shareOnClick,
		goSelectDriver: com$yonyou$placeorder$DeliveryOrderDetailController$goSelectDriver,
		showFreeLicense: com$yonyou$placeorder$DeliveryOrderDetailController$showFreeLicense,
		showhidedetail: com$yonyou$placeorder$DeliveryOrderDetailController$showhidedetail,
		dnameOnfocus: com$yonyou$placeorder$DeliveryOrderDetailController$dnameOnfocus,
		back_onclick: com$yonyou$placeorder$DeliveryOrderDetailController$back_onclick,
		invalidOnclick: com$yonyou$placeorder$DeliveryOrderDetailController$invalidOnclick,
		submitOnclick: com$yonyou$placeorder$DeliveryOrderDetailController$submitOnclick,
		selectCar: com$yonyou$placeorder$DeliveryOrderDetailController$selectCar,
		selectSaleorder: com$yonyou$placeorder$DeliveryOrderDetailController$selectSaleorder,
		pageOnload: com$yonyou$placeorder$DeliveryOrderDetailController$pageOnload,
		initialize: com$yonyou$placeorder$DeliveryOrderDetailController$initialize,
		evaljs: com$yonyou$placeorder$DeliveryOrderDetailController$evaljs
	};
	com.yonyou.placeorder.DeliveryOrderDetailController.registerClass('com.yonyou.placeorder.DeliveryOrderDetailController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
