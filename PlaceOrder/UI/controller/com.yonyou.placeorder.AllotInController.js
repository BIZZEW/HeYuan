//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.AllotInController');
	com.yonyou.placeorder.AllotInController = function () {
		com.yonyou.placeorder.AllotInController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$AllotInController$initialize() {
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

	function com$yonyou$placeorder$AllotInController$evaljs(js) {
		eval(js)
	}
	function com$yonyou$placeorder$AllotInController$button0_onclick(sender, args) {
		$view.close()
	}
	function com$yonyou$placeorder$AllotInController$pageOnload(sender, args) {
		//查询条件参数
		var user = JSON.parse($ctx.getApp("appuser"));

		if (user.vehiclebuyorg != null && typeof (user.vehiclebuyorg) != undefined) {
			com.yonyou.placeorder.AllotInController.vehiclebuyorg = user.vehiclebuyorg
			com.yonyou.placeorder.AllotInController.vehicle = user.vehicle
		}

		//初始化列表信息
		com.yonyou.placeorder.AllotInController.page = 1;
		com.yonyou.placeorder.AllotInController.listdatas = {
			alldatas: []
		}
		//获取数据
		getDatas();
	}

	function com$yonyou$placeorder$AllotInController$alllistOndown(sender, args) {
		getDatas();
	}
	function com$yonyou$placeorder$AllotInController$alllistOnup(sender, args) {
		//初始化列表信息
		com.yonyou.placeorder.AllotInController.page = 1;
		com.yonyou.placeorder.AllotInController.listdatas = {
			alldatas: []
		}
		//获取数据
		getDatas();
	}
	function com$yonyou$placeorder$AllotInController$alllistOnitemclick(sender, args) {
		var item = JSON.parse($id("list_all").get("row"));
		com.yonyou.placeorder.AllotInController.clickItemIndex = $id("list_all").get("rowindex");

		item.billtype = "delivery";

		$view.open({
			"viewid": "com.yonyou.placeorder.DriverDetailQR",
			"isKeep": "true",
			"shareparams": item
		});
	}
	function itemClickCallback() {
		var retvalue = $param.getJSONObject("result");
		com.yonyou.placeorder.AllotInController.listdatas.alldatas[com.yonyou.placeorder.AllotInController.clickItemIndex] = retvalue;
		$ctx.push(com.yonyou.placeorder.AllotInController.listdatas);
	}
	function getDatas(status) {
		var param = {};
		param["pk_appuser"] = $cache.read("pk_appuser");
		param["page"] = com.yonyou.placeorder.AllotInController.page;
		param["vehicle"] = com.yonyou.placeorder.AllotInController.vehicle;
		param["vehiclebuyorg"] = com.yonyou.placeorder.AllotInController.vehiclebuyorg.pk_org;
		param["usercode"] = $cache.read("telephone");
		$service.callAction({
			"usercode": $cache.read("telephone"),
			"appid": "PlaceOrder",
			"viewid": "com.yonyou.placeorder.TransOrderUMController",
			"action": "queryTransOrderIn",
			"params": param,
			"autoDataBinding": false,
			"contextmapping": "result",
			"callback": "connectSuccess()",
			"error": "connectError()"
		});
		$js.showLoadingBar();
	}
	function connectSuccess() {
		$js.hideLoadingBar();
		var result = $ctx.get("result");
		if (result) {
			result = JSON.parse(result);
		} else {
			return;
		}
		var olddatas = com.yonyou.placeorder.AllotInController.listdatas.alldatas;
		if (result.statuscode == "0") {
			if (result.datas && result.datas.queryresults) {
				var newdatas = olddatas.concat(result.datas.queryresults);
				com.yonyou.placeorder.AllotInController.listdatas = {
					alldatas: newdatas
				}
				com.yonyou.placeorder.AllotInController.page++;
				$ctx.push(com.yonyou.placeorder.AllotInController.listdatas);
				var pagenuminfo = result.datas.maxindex + "/" + result.datas.allnums;
				$id("lbl_pagenum").set("value", pagenuminfo);
			} else {
				$alert("没有更多数据了");
			}
		} else if (result.statuscode == "1") {
			$alert("系统错误：" + result.errinfo);
		}
	}
	function connectError() {
		$js.hideLoadingBar();
		$alert("访问MA服务器错误");
	}

	com.yonyou.placeorder.AllotInController.prototype = {
		alllistOnitemclick: com$yonyou$placeorder$AllotInController$alllistOnitemclick,
		alllistOnup: com$yonyou$placeorder$AllotInController$alllistOnup,
		alllistOndown: com$yonyou$placeorder$AllotInController$alllistOndown,
		pageOnload: com$yonyou$placeorder$AllotInController$pageOnload,
		button0_onclick: com$yonyou$placeorder$AllotInController$button0_onclick,
		initialize: com$yonyou$placeorder$AllotInController$initialize,
		evaljs: com$yonyou$placeorder$AllotInController$evaljs
	};
	com.yonyou.placeorder.AllotInController.registerClass('com.yonyou.placeorder.AllotInController', UMP.UI.Mvc.Controller);
} catch (e) { $e(e); }
