//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.HomePageController');
	com.yonyou.placeorder.HomePageController = function () {
		com.yonyou.placeorder.HomePageController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$HomePageController$initialize() {
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

	function com$yonyou$placeorder$HomePageController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$HomePageController$usercenter_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.PersonalCenter", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$mypickups(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.DeliveryOrderSearch", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$myposts(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.ReceiveOrderMulti", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$addseleorder_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderMulti", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$report_onclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.StatisticalReportMenu", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$myseles(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.SalesAdvOrderSearch", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$goNotif(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.NotificationMenu", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$balancequery(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BalanceQuerySearch", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$pageOnload(sender, args) {

		var user = JSON.parse($ctx.getApp("appuser"));
		if (user.dfltcstm == undefined || user.dfltcstm == null) {
			$id("div_pickuporder").set("display", "none");
			$id("div_pickuporder2").set("display", "none");
		}
		if (user.dfltsupplier == undefined || user.dfltsupplier == null) {
			$id("div_deliveryorder").set("display", "none");
			$id("div_deliveryorder2").set("display", "none");
		}
		SqliteUtil.createRctMostUseTbl();
	}

	function com$yonyou$placeorder$HomePageController$addpickup(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.DeliveryOrderDetail", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$deliverydetailclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.ReceiveOrderSearch", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$longtermclickquery(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LongtermOrderSearch", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$longtermclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LongtermOrderMulti", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$testOnclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.NotifcationWindow", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$restart(sender, args) {
		if (!$ctx.getApp("appuser")) {
			$view.close();
			return;
		}
	}

	function com$yonyou$placeorder$HomePageController$loadCfmOnclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.LoadConfirmWindow", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePageController$unloadCfmOnclick(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.UnloadConfirmWindow", //目标页面（首字母大写）全名
			isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
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
			"viewid": "com.yonyou.placeorder.MyCredit", //目标页面（首字母大写）全名
			"isKeep": "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"result": result
		})
	}

	function creditError(sender, args) {
		$js.hideLoadingBar();
		$alert("访问MA服务器错误:" + JSON.stringify(args));
	}

	function com$yonyou$placeorder$HomePageController$creditonclick(sender, args) {
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
				"timeout": 10000,
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

	com.yonyou.placeorder.HomePageController.prototype = {
		creditonclick: com$yonyou$placeorder$HomePageController$creditonclick,
		unloadCfmOnclick: com$yonyou$placeorder$HomePageController$unloadCfmOnclick,
		loadCfmOnclick: com$yonyou$placeorder$HomePageController$loadCfmOnclick,
		restart: com$yonyou$placeorder$HomePageController$restart,
		testOnclick: com$yonyou$placeorder$HomePageController$testOnclick,
		deliverydetailclick: com$yonyou$placeorder$HomePageController$deliverydetailclick,
		longtermclickquery: com$yonyou$placeorder$HomePageController$longtermclickquery,
		addpickup: com$yonyou$placeorder$HomePageController$addpickup,
		pageOnload: com$yonyou$placeorder$HomePageController$pageOnload,
		myseles: com$yonyou$placeorder$HomePageController$myseles,
		myposts: com$yonyou$placeorder$HomePageController$myposts,
		longtermclick: com$yonyou$placeorder$HomePageController$longtermclick,
		balancequery: com$yonyou$placeorder$HomePageController$balancequery,
		addseleorder_onclick: com$yonyou$placeorder$HomePageController$addseleorder_onclick,
		mypickups: com$yonyou$placeorder$HomePageController$mypickups,
		report_onclick: com$yonyou$placeorder$HomePageController$report_onclick,
		usercenter_onclick: com$yonyou$placeorder$HomePageController$usercenter_onclick,
		creditonclick: com$yonyou$placeorder$HomePageController$creditonclick,
		initialize: com$yonyou$placeorder$HomePageController$initialize,
		evaljs: com$yonyou$placeorder$HomePageController$evaljs,
		goNotif: com$yonyou$placeorder$HomePageController$goNotif
	};
	com.yonyou.placeorder.HomePageController.registerClass('com.yonyou.placeorder.HomePageController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
