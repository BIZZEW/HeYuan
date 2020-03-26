//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.VehiclesListController');
	com.yonyou.placeorder.VehiclesListController = function () {
		com.yonyou.placeorder.VehiclesListController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$VehiclesListController$initialize() {
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

	function com$yonyou$placeorder$VehiclesListController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$VehiclesListController$menu11_onclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclarePage", //目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	var vehicleslist = [];
	function com$yonyou$placeorder$VehiclesListController$onload(sender, args) {
		var vehicleslistmp = $param.getString("vehicleslist");
		vehicleslist = eval(vehicleslistmp);

		$js.runjs({
			"controlid": "webcontrolvehiclelist",//webControl的id
			"func": "loadData()"//要执行位于webControl中的js方法名
		})
		// $id("label1").set("value", $cache.read("userName"));
		$js.backConfirm();
	}

	function com$yonyou$placeorder$VehiclesListController$updateDetail(sender, args) {
		var vehicleslistmp = $cache.read("vehicleslist");
		vehicleslist = eval(vehicleslistmp);
	}

	function reload(sender, args) {
		var vehicleslistmp = $param.getString("returnvehicleslist");
		vehicleslist = eval(vehicleslistmp);

		$js.runjs({
			"controlid": "webcontrolvehiclelist",//webControl的id
			"func": "reloadData()"//要执行位于webControl中的js方法名
		})
		// $id("label1").set("value", $cache.read("userName"));
		$js.backConfirm();
	}

	function com$yonyou$placeorder$VehiclesListController$openDeclareList(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclareList", //目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	function com$yonyou$placeorder$VehiclesListController$button0_onclick(sender, args) {
		$view.close({
			"resultcode": "15",
			"vehicleslist": JSON.stringify(vehicleslist),
		});
	}

	function com$yonyou$placeorder$VehiclesListController$goDetail(i) {
		// 如果点击的是高级查询则跳转到对应的页面
		$view.open({
			viewid: "com.yonyou.placeorder.VehicleDetail",
			isKeep: "true",
			callback: "reload()",
			index: parseInt(i),
			vehicleslist: vehicleslist,
		})
	}

	function com$yonyou$placeorder$VehiclesListController$menu23_onclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclareChart",//目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	com.yonyou.placeorder.VehiclesListController.prototype = {
		menu23_onclick: com$yonyou$placeorder$VehiclesListController$menu23_onclick,
		openDeclareList: com$yonyou$placeorder$VehiclesListController$openDeclareList,
		onload: com$yonyou$placeorder$VehiclesListController$onload,
		menu11_onclick: com$yonyou$placeorder$VehiclesListController$menu11_onclick,
		initialize: com$yonyou$placeorder$VehiclesListController$initialize,
		evaljs: com$yonyou$placeorder$VehiclesListController$evaljs,
		button0_onclick: com$yonyou$placeorder$VehiclesListController$button0_onclick,
		updateDetail: com$yonyou$placeorder$VehiclesListController$updateDetail,
	};
	com.yonyou.placeorder.VehiclesListController.registerClass('com.yonyou.placeorder.VehiclesListController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
