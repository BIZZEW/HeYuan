//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yonyou.placeorder.ReceiveOrderListController');
com.yonyou.placeorder.ReceiveOrderListController = function() {
    com.yonyou.placeorder.ReceiveOrderListController.initializeBase(this);
    this.initialize();
}
function com$yonyou$placeorder$ReceiveOrderListController$initialize(){
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
    
function com$yonyou$placeorder$ReceiveOrderListController$evaljs(js){
    eval(js)
}
function com$yonyou$placeorder$ReceiveOrderListController$button0_onclick(sender, args){
	$view.close()
}
function com$yonyou$placeorder$ReceiveOrderListController$pageOnload(sender, args){
	//查询条件参数
	var queryparam=$param.getJSONObject("queryparam");
	com.yonyou.placeorder.ReceiveOrderListController.queryparam=queryparam;
	//初始化列表信息
	com.yonyou.placeorder.ReceiveOrderListController.page=1;
	com.yonyou.placeorder.ReceiveOrderListController.listdatas={
		alldatas:[]
	}
	//获取数据
	getDatas();
}

function com$yonyou$placeorder$ReceiveOrderListController$alllistOndown(sender, args){
	getDatas();
}
function com$yonyou$placeorder$ReceiveOrderListController$alllistOnup(sender, args){
	//初始化列表信息
	com.yonyou.placeorder.ReceiveOrderListController.page=1;
	com.yonyou.placeorder.ReceiveOrderListController.listdatas={
		alldatas:[]
	}
	//获取数据
	getDatas();
}
function com$yonyou$placeorder$ReceiveOrderListController$alllistOnitemclick(sender, args){
	var item = $id("list_all").get("row");
	com.yonyou.placeorder.ReceiveOrderListController.clickItemIndex=$id("list_all").get("rowindex");
	$view.open({
		viewid : "com.yonyou.placeorder.ReceiveOrderDetail", //目标页面（首字母大写）全名
		isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
		"oldorder" : item,
		callback : "itemClickCallback()"
	});
}
function itemClickCallback(){
	var retvalue = $param.getJSONObject("result");
	com.yonyou.placeorder.ReceiveOrderListController.listdatas.alldatas[com.yonyou.placeorder.ReceiveOrderListController.clickItemIndex]=retvalue;
	$ctx.push(com.yonyou.placeorder.ReceiveOrderListController.listdatas);
}
function getDatas(status){
	var param=com.yonyou.placeorder.ReceiveOrderListController.queryparam;
	param["pk_appuser"]=$cache.read("pk_appuser");
	param["page"] = com.yonyou.placeorder.ReceiveOrderListController.page
	param["usercode"]=$cache.read("telephone");
	$service.callAction({
	"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
        "viewid" : "com.yonyou.placeorder.ReceiveOrderUMController",
        "action" : "query",
        "params" : param,
        "autoDataBinding" : false,
        "contextmapping" : "result",
        "callback" : "connectSuccess()",
        "error" : "connectError()"
    });
    $js.showLoadingBar();
}
function connectSuccess(){
	$js.hideLoadingBar();
	var result=$ctx.get("result");
	if(result){
		result=JSON.parse(result);
	}else{
		return;
	}
	var olddatas=com.yonyou.placeorder.ReceiveOrderListController.listdatas.alldatas;
	if (result.statuscode == "0") {
		if(result.datas&&result.datas.queryresults){
			var newdatas=olddatas.concat(result.datas.queryresults);
			com.yonyou.placeorder.ReceiveOrderListController.listdatas={
				alldatas:newdatas
			}
			com.yonyou.placeorder.ReceiveOrderListController.page++;
			$ctx.push(com.yonyou.placeorder.ReceiveOrderListController.listdatas);
			var pagenuminfo=result.datas.maxindex+"/"+result.datas.allnums;
			$id("lbl_pagenum").set("value",pagenuminfo);
		}else{
			$alert("没有更多数据了");
		}
	}else if(result.statuscode=="1"){
		$alert("系统错误："+result.errinfo);
	}
}
function connectError(){
	$js.hideLoadingBar();
	$alert("访问MA服务器错误");
}

com.yonyou.placeorder.ReceiveOrderListController.prototype = {
    alllistOnitemclick : com$yonyou$placeorder$ReceiveOrderListController$alllistOnitemclick,
    alllistOnup : com$yonyou$placeorder$ReceiveOrderListController$alllistOnup,
    alllistOndown : com$yonyou$placeorder$ReceiveOrderListController$alllistOndown,
    pageOnload : com$yonyou$placeorder$ReceiveOrderListController$pageOnload,
    button0_onclick : com$yonyou$placeorder$ReceiveOrderListController$button0_onclick,
    initialize : com$yonyou$placeorder$ReceiveOrderListController$initialize,
    evaljs : com$yonyou$placeorder$ReceiveOrderListController$evaljs
};
com.yonyou.placeorder.ReceiveOrderListController.registerClass('com.yonyou.placeorder.ReceiveOrderListController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
