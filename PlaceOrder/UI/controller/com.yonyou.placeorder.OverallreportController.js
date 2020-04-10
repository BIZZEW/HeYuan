//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.OverallreportController');
	com.yonyou.placeorder.OverallreportController = function () {
		com.yonyou.placeorder.OverallreportController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$OverallreportController$initialize() {
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

	function com$yonyou$placeorder$OverallreportController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$OverallreportController$button0_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$OverallreportController$requestData() {
		$js.showLoadingBar();

		try {
			var param = {};

			var user = JSON.parse($ctx.getApp("appuser"));

			var searchType = $cache.read("searchType") || "currentday";

			if (searchType == "advanced") {
				// 从高级查询过来的,所以取出额外参数

				var searchParam = $cache.read("searchParam");
				// alert("searchParam: " + searchParam);

				var parsedSearchParam = JSON.parse(searchParam);

				if (parsedSearchParam)
					param = parsedSearchParam;
				else
					alert("抱歉，获取数据出错！code: 05");
			}

			var dfltsaleorg = user.dfltsaleorg;
			var pk_org = "";
			if (dfltsaleorg)
				pk_org = dfltsaleorg.pk_org

			param.pk_appuser = $cache.read("pk_appuser");
			param.usercode = $cache.read("telephone");
			param.searchType = searchType;
			param.pk_org = pk_org;

			$service.callAction({
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.ReportController",
				"action": "DeliverySummaryAction",
				"params": param,
				"timeout": 300,
				"autoDataBinding": false,
				"contextmapping": searchType,
				"callback": "callbackSuccess()",
				"error": "callbackFail()"
			});
		} catch (e) { $alert(e + "，查询出错！code: 07"); }
	}

	function com$yonyou$placeorder$OverallreportController$goSearch() {
		// 如果点击的是高级查询则跳转到对应的页面
		$view.open({
			viewid: "com.yonyou.placeorder.ReportSearch",
			isKeep: "true",
			callback: "com$yonyou$placeorder$OverallreportController$requestData()"
		})
	}

	function callbackSuccess() {
		$js.hideLoadingBar();

		$js.runjs({
			"controlid": "webcontrol0",//webControl的id
			"func": "loadData()"//要执行位于webControl中的js方法名
		})
	}

	function callbackFail(sender, args) {
		$js.hideLoadingBar();

		$alert("访问MA服务器错误:" + JSON.stringify(args));
	}

	function com$yonyou$placeorder$OverallreportController$pageOnload(sender, args) {
		$js.runjs({
			"controlid": "webcontrol0",//webControl的id
			"func": "bindClick()"//要执行位于webControl中的js方法名
		})

		$cache.write("searchType", "currentday");

		$js.showLoadingBar();

		try {
			var param = {};

			var user = JSON.parse($ctx.getApp("appuser"));

			var dfltsaleorg = user.dfltsaleorg;
			var pk_org = "";
			if (dfltsaleorg)
				pk_org = dfltsaleorg.pk_org

			param.pk_appuser = $cache.read("pk_appuser");
			param.usercode = $cache.read("telephone");
			param.searchType = "currentday";
			param.pk_org = pk_org;

			$service.callAction({
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.ReportController",
				"action": "DeliverySummaryAction",
				"params": param,
				"timeout": 300,
				"autoDataBinding": false,
				"contextmapping": "currentday",
				"callback": "callbackSuccess()",
				"error": "callbackFail()"
			});
		} catch (e) { $alert(e + "，查询出错！code: 07"); }
	}

	function com$yonyou$placeorder$OverallreportController$imagebutton0_onclick(sender, args) {
		$view.close();
	}


	com.yonyou.placeorder.OverallreportController.prototype = {
		imagebutton0_onclick: com$yonyou$placeorder$OverallreportController$imagebutton0_onclick,
		initialize: com$yonyou$placeorder$OverallreportController$initialize,
		evaljs: com$yonyou$placeorder$OverallreportController$evaljs,
		button0_onclick: com$yonyou$placeorder$OverallreportController$button0_onclick,
		requestData: com$yonyou$placeorder$OverallreportController$requestData,
		goSearch: com$yonyou$placeorder$OverallreportController$goSearch,
		pageOnload: com$yonyou$placeorder$OverallreportController$pageOnload,
	};
	com.yonyou.placeorder.OverallreportController.registerClass('com.yonyou.placeorder.OverallreportController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
