//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.OrderListbrowsingController');
	com.yonyou.placeorder.OrderListbrowsingController = function() {
		com.yonyou.placeorder.OrderListbrowsingController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$OrderListbrowsingController$initialize() {
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

	function com$yonyou$placeorder$OrderListbrowsingController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$OrderListbrowsingController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$OrderListbrowsingController$viewOnload(sender, args) {

		var data=$param.getJSONObject("data");
		$id("goods").set("value",data.cmaterialid.name);
		$id("weight").set("value",data.ordernum);
		$id("stutas").set("value",data.billstatus.name);
		$id("billcode").set("value",data.salepreorderno);
		$id("sender").set("value",data.sendstockorg.name);
		$id("customer").set("value",data.ccustomerid.name);
		$id("carno").set("value",data.vlicense);
		$id("billdate").set("value",data.dbilldate);
		
	}
	com.yonyou.placeorder.OrderListbrowsingController.prototype = {
		viewOnload : com$yonyou$placeorder$OrderListbrowsingController$viewOnload,
		back_onclick : com$yonyou$placeorder$OrderListbrowsingController$back_onclick,
		initialize : com$yonyou$placeorder$OrderListbrowsingController$initialize,
		evaljs : com$yonyou$placeorder$OrderListbrowsingController$evaljs
	};
	com.yonyou.placeorder.OrderListbrowsingController.registerClass('com.yonyou.placeorder.OrderListbrowsingController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
