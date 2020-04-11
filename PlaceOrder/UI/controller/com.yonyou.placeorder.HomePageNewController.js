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

	function com$yonyou$placeorder$HomePageNewController$mypickups(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.DeliveryOrderSearch",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$myposts(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.ReceiveOrderMulti",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$addseleorder_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderMulti",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$report_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.StatisticalReportMenu",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$myseles(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderSearch",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$goNotif(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.NotificationMenu",
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
		SqliteUtil.createRctMostUseTbl();

		$js.runjs({
			"controlid": "webcontrolmenu",
			"func": "initFunk()"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$addpickup(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.DeliveryOrderDetail",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$deliverydetailclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.ReceiveOrderSearch",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$longtermclickquery(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LongtermOrderSearch",
			isKeep: "true"
		})
	}

	function com$yonyou$placeorder$HomePageNewController$longtermclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LongtermOrderMulti",
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

	com.yonyou.placeorder.HomePageNewController.prototype = {
		creditonclick: com$yonyou$placeorder$HomePageNewController$creditonclick,
		unloadCfmOnclick: com$yonyou$placeorder$HomePageNewController$unloadCfmOnclick,
		loadCfmOnclick: com$yonyou$placeorder$HomePageNewController$loadCfmOnclick,
		restart: com$yonyou$placeorder$HomePageNewController$restart,
		testOnclick: com$yonyou$placeorder$HomePageNewController$testOnclick,
		deliverydetailclick: com$yonyou$placeorder$HomePageNewController$deliverydetailclick,
		longtermclickquery: com$yonyou$placeorder$HomePageNewController$longtermclickquery,
		addpickup: com$yonyou$placeorder$HomePageNewController$addpickup,
		pageOnload: com$yonyou$placeorder$HomePageNewController$pageOnload,
		myseles: com$yonyou$placeorder$HomePageNewController$myseles,
		myposts: com$yonyou$placeorder$HomePageNewController$myposts,
		longtermclick: com$yonyou$placeorder$HomePageNewController$longtermclick,
		balancequery: com$yonyou$placeorder$HomePageNewController$balancequery,
		addseleorder_onclick: com$yonyou$placeorder$HomePageNewController$addseleorder_onclick,
		mypickups: com$yonyou$placeorder$HomePageNewController$mypickups,
		report_onclick: com$yonyou$placeorder$HomePageNewController$report_onclick,
		usercenter_onclick: com$yonyou$placeorder$HomePageNewController$usercenter_onclick,
		creditonclick: com$yonyou$placeorder$HomePageNewController$creditonclick,
		initialize: com$yonyou$placeorder$HomePageNewController$initialize,
		evaljs: com$yonyou$placeorder$HomePageNewController$evaljs,
		goNotif: com$yonyou$placeorder$HomePageNewController$goNotif
	};
	com.yonyou.placeorder.HomePageNewController.registerClass('com.yonyou.placeorder.HomePageNewController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
