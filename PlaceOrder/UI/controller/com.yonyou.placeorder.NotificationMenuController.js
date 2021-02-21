//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.NotificationMenuController');
	com.yonyou.placeorder.NotificationMenuController = function () {
		com.yonyou.placeorder.NotificationMenuController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$NotificationMenuController$initialize() {
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

	function com$yonyou$placeorder$NotificationMenuController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$NotificationMenuController$button0_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$NotificationMenuController$menu11_onclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclarePage", //目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	function com$yonyou$placeorder$NotificationMenuController$onload(sender, args) {
		// $id("label1").set("value", $cache.read("userName"));
		// $js.backConfirm();

		$js.showLoadingBar();

		try {
			var param = {};

			param.pk_appuser = $cache.read("pk_appuser");
			param.usercode = $cache.read("telephone");

			param.telephone = $cache.read("telephone");

			$service.callAction({
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.MessageBillUMController",
				"action": "queryMessageCenterNum",
				"params": param,
				"timeout": 10000,
				"autoDataBinding": false,
				"contextmapping": "result",
				"callback": "callbackSuccess()",
				"error": "callbackFail()"
			});
		} catch (e) { $alert(e + "，查询出错！code: 07"); }
	}

	function callbackSuccess() {
		$js.hideLoadingBar();

		var result = $ctx.get("result");
		result = JSON.parse(result);

		var datas = result.datas;
		if (datas) {
			// 收款
			if (datas.runread) $id("label16").set("value", datas.runread);
			if (datas.rread) $id("label18").set("value", datas.rread);
			// 提货
			if (datas.sunread) $id("label162").set("value", datas.sunread);
			if (datas.sread) $id("label182").set("value", datas.sread);
			// 节假日
			if (datas.hunread) $id("label163").set("value", datas.hunread);
			if (datas.hread) $id("label183").set("value", datas.hread);
		} else {
			alert("获取数据出错！code: 01");
			return;
		}
	}

	function callbackFail(sender, args) {
		$js.hideLoadingBar();

		$alert("访问MA服务器错误:" + JSON.stringify(args));
	}

	function com$yonyou$placeorder$NotificationMenuController$openDeclareList(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclareList", //目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}



	function com$yonyou$placeorder$NotificationMenuController$menu23_onclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclareChart",//目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	function com$yonyou$placeorder$NotificationMenuController$goPayInfoList(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.InfoList",//目标页面（首字母大写）全名，
			"isKeep": "true",
			"mestype": "1",
			"callback": "com$yonyou$placeorder$NotificationMenuController$onload()",
		});
	}

	function com$yonyou$placeorder$NotificationMenuController$goPickInfoList(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.InfoList",//目标页面（首字母大写）全名，
			"isKeep": "true",
			"mestype": "2",
			"callback": "com$yonyou$placeorder$NotificationMenuController$onload()",
		});
	}

	function com$yonyou$placeorder$NotificationMenuController$goHolidayInfoList(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.InfoList",//目标页面（首字母大写）全名，
			"isKeep": "true",
			"mestype": "3",
			"callback": "com$yonyou$placeorder$NotificationMenuController$onload()",
		});
	}

	com.yonyou.placeorder.NotificationMenuController.prototype = {
		menu23_onclick: com$yonyou$placeorder$NotificationMenuController$menu23_onclick,
		openDeclareList: com$yonyou$placeorder$NotificationMenuController$openDeclareList,
		onload: com$yonyou$placeorder$NotificationMenuController$onload,
		menu11_onclick: com$yonyou$placeorder$NotificationMenuController$menu11_onclick,
		initialize: com$yonyou$placeorder$NotificationMenuController$initialize,
		evaljs: com$yonyou$placeorder$NotificationMenuController$evaljs,
		button0_onclick: com$yonyou$placeorder$NotificationMenuController$button0_onclick,
		goPayInfoList: com$yonyou$placeorder$NotificationMenuController$goPayInfoList,
		goPickInfoList: com$yonyou$placeorder$NotificationMenuController$goPickInfoList,
		goHolidayInfoList: com$yonyou$placeorder$NotificationMenuController$goHolidayInfoList,
	};
	com.yonyou.placeorder.NotificationMenuController.registerClass('com.yonyou.placeorder.NotificationMenuController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
