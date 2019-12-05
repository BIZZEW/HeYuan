//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.DeliveryOrderListController');
	com.yonyou.placeorder.DeliveryOrderListController = function() {
		com.yonyou.placeorder.DeliveryOrderListController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$DeliveryOrderListController$initialize() {
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

	function com$yonyou$placeorder$DeliveryOrderListController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$DeliveryOrderListController$button0_onclick(sender, args) {
		$view.close()
	}
	function com$yonyou$placeorder$DeliveryOrderListController$pageOnload(sender, args){
		var json = $param.getJSONObject("param");
		com.yonyou.placeorder.DeliveryOrderListController.queryparam = json;
		com.yonyou.placeorder.DeliveryOrderListController.page=1;
		com.yonyou.placeorder.DeliveryOrderListController.listdatas={
			alldatas:[]
		}
		getDatas();		
	}
	function com$yonyou$placeorder$DeliveryOrderListController$listup(sender, args) {
		com.yonyou.placeorder.DeliveryOrderListController.page=1;
		com.yonyou.placeorder.DeliveryOrderListController.listdatas={
			alldatas:[]
		}
		getDatas();
	}
	function com$yonyou$placeorder$DeliveryOrderListController$listdown(sender, args) {
		getDatas();
	}
	function com$yonyou$placeorder$DeliveryOrderListController$itemclick(sender, args) {
		var item = $id("listviewdefine0").get("row");
		com.yonyou.placeorder.DeliveryOrderListController.clickItemIndex=$id("listviewdefine0").get("rowindex");
		$view.open({
			viewid : "com.yonyou.placeorder.DeliveryOrderDetail", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"oldorder" : item,
			callback : "itemClickCallback()"
		})
	}
	function itemClickCallback(){
		var retvalue = $param.getJSONObject("result");
		com.yonyou.placeorder.DeliveryOrderListController.listdatas.alldatas[com.yonyou.placeorder.DeliveryOrderListController.clickItemIndex]=retvalue;
		$ctx.push(com.yonyou.placeorder.DeliveryOrderListController.listdatas);
	}
	function getDatas() {
		var param = com.yonyou.placeorder.DeliveryOrderListController.queryparam;
		param["page"] = com.yonyou.placeorder.DeliveryOrderListController.page
		param["usercode"]=$cache.read("telephone");
		$service.callAction({
		"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.DeliveryOrderUMController", //后台Controller(带包名)的类名
			"action" : "query", //后台Controller的方法名,
			"params" : param, //自定义参数
			"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "querysuccess()", //请求成功后回调js方法
			"error" : "queryerror()"//请求失败回调的js方法
		});
		$js.showLoadingBar();
	}

	function querysuccess() {
		$js.hideLoadingBar();
		var result=$ctx.get("result");
		if(result){
			result=JSON.parse(result);
		}else{
			return;
		}
		var olddatas=com.yonyou.placeorder.DeliveryOrderListController.listdatas.alldatas;
		if (result.statuscode == "0") {
			if(result.datas&&result.datas.queryresults){
				var newdatas=olddatas.concat(result.datas.queryresults);
				com.yonyou.placeorder.DeliveryOrderListController.listdatas={
					alldatas:newdatas
				}
				com.yonyou.placeorder.DeliveryOrderListController.page++;
				$ctx.push(com.yonyou.placeorder.DeliveryOrderListController.listdatas);
				var pagenuminfo=result.datas.maxindex+"/"+result.datas.allnums;
				$id("lbl_pagenums").set("value",pagenuminfo);
			}else{
				$alert("没有更多数据了");
			}
		}else if(result.statuscode=="1"){
			$alert("系统错误："+result.errinfo);
		}
	}
	function queryerror() {
		$js.hideLoadingBar();
		$alert("连接MA服务器异常");
	}
	com.yonyou.placeorder.DeliveryOrderListController.prototype = {
    	pageOnload : com$yonyou$placeorder$DeliveryOrderListController$pageOnload,
		listup : com$yonyou$placeorder$DeliveryOrderListController$listup,
		listdown : com$yonyou$placeorder$DeliveryOrderListController$listdown,
		itemclick : com$yonyou$placeorder$DeliveryOrderListController$itemclick,
		button0_onclick : com$yonyou$placeorder$DeliveryOrderListController$button0_onclick,
		initialize : com$yonyou$placeorder$DeliveryOrderListController$initialize,
		evaljs : com$yonyou$placeorder$DeliveryOrderListController$evaljs
	};
	com.yonyou.placeorder.DeliveryOrderListController.registerClass('com.yonyou.placeorder.DeliveryOrderListController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
