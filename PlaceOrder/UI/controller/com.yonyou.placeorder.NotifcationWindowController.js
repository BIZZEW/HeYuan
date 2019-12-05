//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yonyou.placeorder.NotifcationWindowController');
com.yonyou.placeorder.NotifcationWindowController = function() {
    com.yonyou.placeorder.NotifcationWindowController.initializeBase(this);
    this.initialize();
}
function com$yonyou$placeorder$NotifcationWindowController$initialize(){
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
    
function com$yonyou$placeorder$NotifcationWindowController$evaljs(js){
    eval(js)
}
function com$yonyou$placeorder$NotifcationWindowController$pageOnload(sender, args){
	var host = $cache.read("host");
	var port = $cache.read("port");
	if (host&&port) {
		$service.writeConfig({
			"host" : host, //向configure中写入host键值
			"port" : port//向configure中写入port键值
		});
	}
	var pk_appuser = $cache.read("pk_appuser");
	if(pk_appuser){
		com.yonyou.placeorder.NotifcationWindowController.pk_appuser=pk_appuser;
	}
	com.yonyou.placeorder.NotifcationWindowController.page=1;
	com.yonyou.placeorder.NotifcationWindowController.datajson={
		"datas":[]
	}
	fetchDatas();
}
function com$yonyou$placeorder$NotifcationWindowController$ondown(sender, args){
	fetchDatas();
}
function com$yonyou$placeorder$NotifcationWindowController$onup(sender, args){
	com.yonyou.placeorder.NotifcationWindowController.page=1;
	com.yonyou.placeorder.NotifcationWindowController.datajson={
		"datas":[]
	}
	fetchDatas();
}
function fetchDatas(){
	var json = {"usercode":$cache.read("telephone"),
		"pk_appuser" : com.yonyou.placeorder.NotifcationWindowController.pk_appuser,
		"page":com.yonyou.placeorder.NotifcationWindowController.page
	};
	var keyword=$id("txt_search").get("value");
	if(keyword){
		json["keyword"]=keyword
	}
	$service.callAction({
	"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
		"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
		"action" : "getPushInfo", //后台Controller的方法名,
		"params" : json, //自定义参数
		"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
		"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
		"callback" : "connectSuccess()", //请求成功后回调js方法
		"error" : "connectError()"//请求失败回调的js方法
	});
}
function connectSuccess(){
	var result=$ctx.getJSONObject("result");
	var oldalljson=com.yonyou.placeorder.NotifcationWindowController.datajson;
	if(result){
		var statuscode=result["statuscode"];
		if(statuscode=="1"){
			var errinfo=result["errinfo"];
			$alert("系统异常："+errinfo);
			return;
		}
		if(result["datas"]){
			var olddatas=oldalljson["datas"];
			var newdatas=result["datas"];
			var mergeddatas=olddatas.concat(newdatas);
			com.yonyou.placeorder.NotifcationWindowController.datajson={
				"datas":mergeddatas
			}
			com.yonyou.placeorder.NotifcationWindowController.page++;
		}
		$ctx.push(com.yonyou.placeorder.NotifcationWindowController.datajson);
	}else{
		$alert("未获取到数据");
	}
}
function connectError(){
	$alert("访问MA服务器异常");
}
function com$yonyou$placeorder$NotifcationWindowController$returnOnclick(sender, args){
	$view.close();
}
function com$yonyou$placeorder$NotifcationWindowController$onsearch(sender, args){
	com.yonyou.placeorder.NotifcationWindowController.page=1;
	com.yonyou.placeorder.NotifcationWindowController.datajson={
		"datas":[]
	}
	fetchDatas();
}
com.yonyou.placeorder.NotifcationWindowController.prototype = {
    onsearch : com$yonyou$placeorder$NotifcationWindowController$onsearch,
    returnOnclick : com$yonyou$placeorder$NotifcationWindowController$returnOnclick,
    onup : com$yonyou$placeorder$NotifcationWindowController$onup,
    ondown : com$yonyou$placeorder$NotifcationWindowController$ondown,
    pageOnload : com$yonyou$placeorder$NotifcationWindowController$pageOnload,
    initialize : com$yonyou$placeorder$NotifcationWindowController$initialize,
    evaljs : com$yonyou$placeorder$NotifcationWindowController$evaljs
};
com.yonyou.placeorder.NotifcationWindowController.registerClass('com.yonyou.placeorder.NotifcationWindowController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
