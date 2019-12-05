//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.SalesOrderSearchController');
	com.yonyou.placeorder.SalesOrderSearchController = function() {
		com.yonyou.placeorder.SalesOrderSearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$SalesOrderSearchController$initialize() {
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

	function com$yonyou$placeorder$SalesOrderSearchController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$SalesOrderSearchController$back(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$SalesOrderSearchController$search_onclick(sender, args) {
		var user = JSON.parse($ctx.getApp("appuser"));

		var json = {
			"pk_customer" : user.dfltcstm.pk_customer,
			"begindate" : $id("begindate").get("value"),
			"enddate" : $id("enddate").get("value"),
			"billcode" : $id("billcode").get("value"),
			"pk_material" : pk_material,
			"vlicense" : $id("vlicense").get("value")
		};
		$view.open({
			viewid : "com.yonyou.placeorder.SalesOrderList", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param" : json
		})

	}

	function com$yonyou$placeorder$SalesOrderSearchController$dateOnload(sender, args) {
		var nowdate = getNowFormatDate();
		$id("begindate").set("value", nowdate);
		$id("enddate").set("value", nowdate);
	}

	function getNowFormatDate() {
		var nowdate = new Date();
		var year = nowdate.getFullYear();
		var month = nowdate.getMonth() + 1;
		var date = nowdate.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (date >= 1 && date <= 9) {
			date = "0" + date;
		}
		var currentdate = year + "-" + month + "-" + date;
		return currentdate;
	}



function com$yonyou$placeorder$SalesOrderSearchController$goodsname(sender, args){

}	com.yonyou.placeorder.SalesOrderSearchController.prototype = {
    goodsname : com$yonyou$placeorder$SalesOrderSearchController$goodsname,
		dateOnload : com$yonyou$placeorder$SalesOrderSearchController$dateOnload,
		search_onclick : com$yonyou$placeorder$SalesOrderSearchController$search_onclick,
		back : com$yonyou$placeorder$SalesOrderSearchController$back,
		initialize : com$yonyou$placeorder$SalesOrderSearchController$initialize,
		evaljs : com$yonyou$placeorder$SalesOrderSearchController$evaljs
	};
	com.yonyou.placeorder.SalesOrderSearchController.registerClass('com.yonyou.placeorder.SalesOrderSearchController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
