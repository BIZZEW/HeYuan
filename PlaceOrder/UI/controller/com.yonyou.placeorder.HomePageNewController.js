//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.HomePageNewController');
	com.yonyou.placeorder.HomePageNewController = function () {
		com.yonyou.placeorder.HomePageNewController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$HomePageNewController$initialize() {

	}

	function com$yonyou$placeorder$HomePageNewController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$HomePageNewController$usercenter_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.PersonalCenter",
			isKeep: "true"
		})
	}

	// 车辆下单
	function com$yonyou$placeorder$HomePageNewController$addseleorder_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderMulti",
			isKeep: "true"
		})
	}

	// 长期销售订单
	function com$yonyou$placeorder$HomePageNewController$addlongtermsale_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LongtermSaleMulti",
			isKeep: "true"
		})
	}

	// 订单查询
	function com$yonyou$placeorder$HomePageNewController$myseles(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderSearch",
			isKeep: "true"
		})
	}

	// 余额查询
	function com$yonyou$placeorder$HomePageNewController$creditonclick(sender, args) {
		var param = {};
		// if ($cache.read("roletype") == "worker") {
		// 	param.pk_ncuser = $cache.read("pk_appuser");
		// } else {
		// 	param.pk_appuser = $cache.read("pk_appuser");
		// }

		param.pk_appuser = $cache.read("pk_appuser");
		param.usercode = $cache.read("telephone");

		//$alert($environment.DeviceType == $environment.DeviceAndroid)
		if ($environment.DeviceType == $environment.DeviceAndroid) {
			$service.callAction({
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.SaleOrderUMController",
				"action": "querySaleOrderCredit",
				"params": param,
				"timeout": 300,
				"autoDataBinding": false,
				"contextmapping": "result",
				"callback": "creditSuccess()",
				"error": "creditError()"
			});
		} else {
			$service.callAction({
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.SaleOrderUMController",
				"action": "querySaleOrderCredit",
				"params": param,
				//"timeout" : 30,
				"autoDataBinding": false,
				"contextmapping": "result",
				"callback": "creditSuccess()",
				"error": "creditError()"
			});
		}

		$js.showLoadingBar();
	}

	// 大票提货通知单
	function com$yonyou$placeorder$HomePageNewController$addhugepickups_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderMulti",
			isKeep: "true"
		})
	}

	// 提货单查询
	function com$yonyou$placeorder$HomePageNewController$mypickups(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.DeliveryOrderSearch",
			isKeep: "true"
		})
	}

	// 统计报表
	function com$yonyou$placeorder$HomePageNewController$report_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.StatisticalReportMenu",
			isKeep: "true"
		})
	}

	// 消息中心
	function com$yonyou$placeorder$HomePageNewController$goNotif(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.NotificationMenu",
			isKeep: "true"
		})
	}






	// 新增送货单
	function com$yonyou$placeorder$HomePageNewController$myposts(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.ReceiveOrderMulti",
			isKeep: "true"
		})
	}

	// 送货单查询
	function com$yonyou$placeorder$HomePageNewController$deliverydetailclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.ReceiveOrderSearch",
			isKeep: "true"
		})
	}

	// 新增长期送货单
	function com$yonyou$placeorder$HomePageNewController$longtermclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LongtermOrderMulti",
			isKeep: "true"
		})
	}

	// 长期送货单查询
	function com$yonyou$placeorder$HomePageNewController$longtermclickquery(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LongtermOrderSearch",
			isKeep: "true"
		})
	}




	function com$yonyou$placeorder$HomePageNewController$balancequery(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BalanceQuerySearch",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$pageOnload(sender, args) {
		var appKey = (CurrentEnvironment.DeviceType == CurrentEnvironment.DeviceAndroid) ? "bd24063406da86e43c3e313534e6ae3a" : "fd8887fdf449ad62eda4e0a489edc3fe";
		var accountkey = "706dea0e787c151c278696fa885e38c4";
		var version = $ctx.getApp("versionName");
		var url = "http://www.pgyer.com/apiv2/app/check?_api_key=" + accountkey + "&appKey=" + appKey + "&buildVersion=" + version;

		//检查版本是否需要更新
		$service.post({
			"url": url,
			"callback": "checkUpdateCallBack()",
			"timeout": "5"
		});



		SqliteUtil.createRctMostUseTbl();

		$js.runjs({
			"controlid": "webcontrolmenu",
			"func": "initFunk()"
		})
	}

	function checkUpdateCallBack() {
		var result = $stringToJSON($ctx.param("result"));
		if (!result) {
			return;
		}
		var data = result.data;
		if (!data) {
			return;
		}

		if (data.buildHaveNewVersion) {
			if (confirm("发现新版本：" + data.buildVersion + "，更新内容：" + data.buildUpdateDescription + "，需要更新吗？")) {
				$device.openWebView({
					url: data.downloadURL
				});
			}
		}
	}

	function com$yonyou$placeorder$HomePageNewController$addpickup(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.DeliveryOrderDetail",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$testOnclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.NotifcationWindow",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$restart(sender, args) {
		if (!$ctx.getApp("appuser")) {
			$view.close();
			return;
		}
	}

	function com$yonyou$placeorder$HomePageNewController$loadCfmOnclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LoadConfirmWindow",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$unloadCfmOnclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.UnloadConfirmWindow",
			isKeep: "true"
		})
	}

	function creditSuccess() {
		$js.hideLoadingBar();

		var result = $ctx.get("result");

		if (result) {
			result = JSON.parse(result);
		} else {
			return;
		}

		$view.open({
			"viewid": "com.yonyou.placeorder.MyCredit",
			"isKeep": "true",
			"result": result
		})
	}

	function creditError(sender, args) {
		$js.hideLoadingBar();
		$alert("访问MA服务器错误:" + JSON.stringify(args));
	}

	com.yonyou.placeorder.HomePageNewController.prototype = {
		addseleorder_onclick: com$yonyou$placeorder$HomePageNewController$addseleorder_onclick,
		addlongtermsale_onclick: com$yonyou$placeorder$HomePageNewController$addlongtermsale_onclick,
		myseles: com$yonyou$placeorder$HomePageNewController$myseles,
		creditonclick: com$yonyou$placeorder$HomePageNewController$creditonclick,
		addhugepickups_onclick: com$yonyou$placeorder$HomePageNewController$addhugepickups_onclick,
		mypickups: com$yonyou$placeorder$HomePageNewController$mypickups,
		report_onclick: com$yonyou$placeorder$HomePageNewController$report_onclick,
		goNotif: com$yonyou$placeorder$HomePageNewController$goNotif,


		myposts: com$yonyou$placeorder$HomePageNewController$myposts,
		deliverydetailclick: com$yonyou$placeorder$HomePageNewController$deliverydetailclick,
		longtermclick: com$yonyou$placeorder$HomePageNewController$longtermclick,
		longtermclickquery: com$yonyou$placeorder$HomePageNewController$longtermclickquery,



		unloadCfmOnclick: com$yonyou$placeorder$HomePageNewController$unloadCfmOnclick,
		loadCfmOnclick: com$yonyou$placeorder$HomePageNewController$loadCfmOnclick,
		restart: com$yonyou$placeorder$HomePageNewController$restart,
		testOnclick: com$yonyou$placeorder$HomePageNewController$testOnclick,
		addpickup: com$yonyou$placeorder$HomePageNewController$addpickup,
		pageOnload: com$yonyou$placeorder$HomePageNewController$pageOnload,
		balancequery: com$yonyou$placeorder$HomePageNewController$balancequery,
		usercenter_onclick: com$yonyou$placeorder$HomePageNewController$usercenter_onclick,
		initialize: com$yonyou$placeorder$HomePageNewController$initialize,
		evaljs: com$yonyou$placeorder$HomePageNewController$evaljs,
	};
	com.yonyou.placeorder.HomePageNewController.registerClass('com.yonyou.placeorder.HomePageNewController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
