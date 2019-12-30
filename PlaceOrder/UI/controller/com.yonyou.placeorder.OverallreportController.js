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

	// function com$yonyou$placeorder$OverallreportController$onpageloader(sender, args) {
	// var testjson = { "result": "datas" };
	// $ctx.push(testjson);
	// $js.runjs({
	// 	"controlid": "overallreport",//webControl的id
	// 	"func": "loaddata()"//要执行位于webControl中的js方法名
	// })
	// }

	function com$yonyou$placeorder$OverallreportController$requestData() {
		$js.showLoadingBar();

		try {
			var param = {};

			param.pk_appuser = $cache.read("pk_appuser");
			param.usercode = $cache.read("telephone");
			param.searchType = $cache.read("searchType") || "currentday";
			// param.phone_customer = "安徽省枞阳县金岭矿业有限公司";

			alert(JSON.stringify(param));

			// param.start_time = "2019-05-01";
			// param.end_time = "2019-12-20";
			// param.type = "铜锍含铜";
			// param.customer_name = "安徽省枞阳县金岭矿业有限公司";

			$service.callAction({
				"user": $cache.read("telephone"),
				"appid": "PlaceOrder",
				"viewid": "com.yonyou.placeorder.ReportController",
				"action": "DeliverySummaryAction",
				"params": param,
				"timeout": 300,
				"autoDataBinding": false,
				"contextmapping": "result",
				"callback": "callbackSuccess()",
				"error": "callbackFail()"
			});
		} catch (e) { $alert(e); }
	}

	function com$yonyou$placeorder$OverallreportController$goSearch() {
		// 如果点击的是高级查询则跳转到对应的页面
		$view.open({
			viewid: "com.yonyou.placeorder.ReportSearch",
			isKeep: "true",
			callback: "callbackSuccess()"
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

	var pageIndex = 1;
	var pageCount = 20;
	var action;
	var finalret = new Array();
	var userName;
	function com$yonyou$placeorder$OverallreportController$listviewdefine0_onload(sender, args) {
		userName = $cache.read("userName");

		//调用MA获取数据
		action = "getPendingReports";
		$service.callAction({
			"viewid": "com.yonyou.uap.haiguan.HaiguanController", //后台Controller(带包名)的类名
			"action": action, //后台Controller的方法名,
			"userName": userName,
			"pageIndex": pageIndex,
			"pageCount": pageCount,
			"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
			"contextmapping": "fieldPath", //将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback": "pendingReportsCallBack()", //请求成功后回调js方法
			"error": "pendingReportsErrCallBack()"//请求失败回调的js方法
		});
	}

	function changetogglebutton(sender, args) {
		var value = $id("togglebuttongroup0").get("selectedValue");
		if (value == "0") {
			//全部
			action = "getAllReports";
		} else if (value == "1") {
			//待审批
			action = "getPendingReports";
		} else if (value == "2") {
			//审批中
			action = "getCheckingReports";
		} else if (value == "3") {
			//退回
			action = "getBackReports";
		} else {
			//已审、关闭
			action = "getCompletedReports";
		}
		pageIndex = 1;
		finalret = [];
		$service.callAction({
			"viewid": "com.yonyou.uap.haiguan.HaiguanController", //后台Controller(带包名)的类名
			"action": action, //后台Controller的方法名,
			"userName": userName,
			"pageIndex": pageIndex,
			"pageCount": pageCount,
			"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
			"contextmapping": "fieldPath", //将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback": "pendingReportsCallBack()", //请求成功后回调js方法
			"error": "pendingReportsErrCallBack()"//请求失败回调的js方法
		});
	}

	function com$yonyou$placeorder$OverallreportController$onitemcreate(sender, args) {
		var checklist = $stringToJSON(args.event);
		var approvestatus = checklist.row.approvestatus;
		var color;
		var value;
		if (approvestatus == "0") {
			//待审
			color = "#fdcc56";
			value = "待审";
		} else if (approvestatus == "1") {
			//审核中
			color = "#5293ff";
			value = "审核中";
		} else if (approvestatus == "2") {
			//已审、退回
			color = "#6cc58f";
			value = "已审";
		} else if (approvestatus == "3") {
			//退回
			color = "#ee4f52";
			value = "退回";
		} else if (approvestatus == "4") {
			//关闭
			color = "#780002";
			value = "关闭";
		}
		$id("checklistview").initListItem({
			"itemtype": "child",
			"childindex": checklist.childindex, //当前的child行的索引号
			"row": [{
				"controlid": "panel3",
				"background": color
			}, {
				"controlid": "label6",
				"value": value
			}]
		})
	}

	function com$yonyou$placeorder$OverallreportController$onitemclick(sender, args) {
		var row = $stringToJSON($id("checklistview").get("row"));
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclareDetail", //目标页面（首字母大写）全名，
			"seq_no": row.seq_no,
			"isKeep": "true" //保留当前页面不关闭
		});
	}

	//下滑刷新
	function com$yonyou$placeorder$OverallreportController$ondownrefresh(sender, args) {
		pageIndex++;
		$service.callAction({
			"viewid": "com.yonyou.uap.haiguan.HaiguanController", //后台Controller(带包名)的类名
			"action": action, //后台Controller的方法名,
			"userName": userName,
			"pageIndex": pageIndex,
			"pageCount": pageCount,
			"autoDataBinding": false, //请求回来会是否进行数据绑定，默认不绑定
			"contextmapping": "fieldPath", //将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback": "pendingReportsCallBack()", //请求成功后回调js方法
			"error": "pendingReportsErrCallBack()"//请求失败回调的js方法
		});
	}

	function pendingReportsCallBack() {
		var ret = $stringToJSON($ctx.getString());
		var newret = ret.fieldPath.result;
		if ($stringToJSON(newret) != null) {
			finalret = finalret.concat(newret)
		}
		$ctx.push({
			"result": finalret
		});
	}

	function pendingReportsErrCallBack() {
		$alert("请求失败");
	}

	function com$yonyou$placeorder$OverallreportController$imagebutton0_onclick(sender, args) {
		$view.close();
	}


	com.yonyou.placeorder.OverallreportController.prototype = {
		imagebutton0_onclick: com$yonyou$placeorder$OverallreportController$imagebutton0_onclick,
		ondownrefresh: com$yonyou$placeorder$OverallreportController$ondownrefresh,
		onitemclick: com$yonyou$placeorder$OverallreportController$onitemclick,
		onitemcreate: com$yonyou$placeorder$OverallreportController$onitemcreate,
		listviewdefine0_onload: com$yonyou$placeorder$OverallreportController$listviewdefine0_onload,
		initialize: com$yonyou$placeorder$OverallreportController$initialize,
		evaljs: com$yonyou$placeorder$OverallreportController$evaljs,
		button0_onclick: com$yonyou$placeorder$OverallreportController$button0_onclick,
		requestData: com$yonyou$placeorder$OverallreportController$requestData,
		goSearch: com$yonyou$placeorder$OverallreportController$goSearch,
	};
	com.yonyou.placeorder.OverallreportController.registerClass('com.yonyou.placeorder.OverallreportController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
