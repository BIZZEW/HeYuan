//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.MatestController');
	com.yonyou.placeorder.MatestController = function() {
		com.yonyou.placeorder.MatestController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$MatestController$initialize() {
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

	function ipset() {
		$ctx.dataCollect();
		var ip = $id("textip").get("value");
		var port = $id("textport").get("value");
		$service.writeConfig({
			"host" : ip, //向configure中写入host键值
			"port" : port//向configure中写入port键值
		})
	}

	function com$yonyou$placeorder$MatestController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$MatestController$wloginbutton_onclick(sender, args) {
		$js.hideLoadingBar();
		$cache.write("host", $id("textip").get("value"));
		$cache.write("port", $id("textport").get("value"));
		$alert("设置MA服务器成功");
		$view.close()
	}
	
	function connectSuccess() {
		$js.hideLoadingBar();
		$cache.write("host", $id("textip").get("value"));
		$cache.write("port", $id("textport").get("value"));
		$alert("设置MA服务器成功");
		$view.close()
	}
	
	//modified by wangkem
	function connectError(sender, args) {
		$js.hideLoadingBar();
		$alert("连接MA服务器失败:"+args.err_msg);
	}



function com$yonyou$placeorder$MatestController$loadhost(sender, args){
var host = $cache.read("host");
		var port = $cache.read("port");
if (host != null&& port !=null){
		$id("textip").set("value",host);
		$id("textport").set("value",port);
		} 

}
function com$yonyou$placeorder$MatestController$button0_onclick(sender, args){
$view.close()
}	com.yonyou.placeorder.MatestController.prototype = {
    button0_onclick : com$yonyou$placeorder$MatestController$button0_onclick,
    loadhost : com$yonyou$placeorder$MatestController$loadhost,
		wloginbutton_onclick : com$yonyou$placeorder$MatestController$wloginbutton_onclick,
		initialize : com$yonyou$placeorder$MatestController$initialize,
		evaljs : com$yonyou$placeorder$MatestController$evaljs
	};
	com.yonyou.placeorder.MatestController.registerClass('com.yonyou.placeorder.MatestController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
