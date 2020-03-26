//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.VehicleDetailController');
	com.yonyou.placeorder.VehicleDetailController = function () {
		com.yonyou.placeorder.VehicleDetailController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$VehicleDetailController$initialize() {
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

	function com$yonyou$placeorder$VehicleDetailController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$VehicleDetailController$menu11_onclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclarePage", //目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	var vehicleslist = [];
	var currentVehicle, index;
	function com$yonyou$placeorder$VehicleDetailController$onload(sender, args) {
		var vehicleslistmp = $param.getString("vehicleslist");
		if (eval(vehicleslistmp))
			vehicleslist = eval(vehicleslistmp);

		index = parseInt($cache.read("index"));

		if (index >= 0) {
			currentVehicle = vehicleslist[index];

			$js.runjs({
				"controlid": "webcontrolvehicledetail",//webControl的id
				"func": "loadData()"//要执行位于webControl中的js方法名
			})
		}
	}

	function com$yonyou$placeorder$VehicleDetailController$confirm(sender, args) {
		var currentVehicletmp = $cache.read("currentVehicle");

		if (currentVehicletmp)
			currentVehicle = JSON.parse(currentVehicletmp);

		if (index >= 0)
			vehicleslist[index] = currentVehicle
		else
			vehicleslist.push(currentVehicle)

		$view.close({
			"resultcode": "15",
			"returnvehicleslist": JSON.stringify(vehicleslist),
		});
	}

	function com$yonyou$placeorder$VehicleDetailController$openDeclareList(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclareList", //目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	function com$yonyou$placeorder$VehicleDetailController$button0_onclick(sender, args) {
		$view.close();
	}

	function com$yonyou$placeorder$VehicleDetailController$menu23_onclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.hgdeclare.DeclareChart",//目标页面（首字母大写）全名，
			"isKeep": "true"
		});
	}

	com.yonyou.placeorder.VehicleDetailController.prototype = {
		menu23_onclick: com$yonyou$placeorder$VehicleDetailController$menu23_onclick,
		openDeclareList: com$yonyou$placeorder$VehicleDetailController$openDeclareList,
		onload: com$yonyou$placeorder$VehicleDetailController$onload,
		menu11_onclick: com$yonyou$placeorder$VehicleDetailController$menu11_onclick,
		initialize: com$yonyou$placeorder$VehicleDetailController$initialize,
		evaljs: com$yonyou$placeorder$VehicleDetailController$evaljs,
		button0_onclick: com$yonyou$placeorder$VehicleDetailController$button0_onclick,
		confirm: com$yonyou$placeorder$VehicleDetailController$confirm,
	};
	com.yonyou.placeorder.VehicleDetailController.registerClass('com.yonyou.placeorder.VehicleDetailController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
