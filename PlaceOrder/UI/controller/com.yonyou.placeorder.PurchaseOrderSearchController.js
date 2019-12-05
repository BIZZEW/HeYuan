//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yonyou.placeorder.PurchaseOrderSearchController');
com.yonyou.placeorder.PurchaseOrderSearchController = function() {
    com.yonyou.placeorder.PurchaseOrderSearchController.initializeBase(this);
    this.initialize();
}
function com$yonyou$placeorder$PurchaseOrderSearchController$initialize(){
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
    
function com$yonyou$placeorder$PurchaseOrderSearchController$evaljs(js){
    eval(js)
}
function com$yonyou$placeorder$PurchaseOrderSearchController$searchbutton_onclick(sender, args){
	var begindate=$id("begindate").get("value");
	var enddate=$id("enddate").get("value");
	if(begindate&&enddate){
		if(Globals.compareDate(begindate,enddate)>0){
			$alert("开始日期不能大于结束日期");
			return;
		}
	}
	var begindate=$id("begindate").get("value");
	var enddate=$id("enddate").get("value");
	var orderno=$id("orderno").get("value");
	var cmaterialid=$ctx.getString("cmaterialid");
	var vlicense=$id("vlicense").get("value");
	var queryparam={
		"pk_appuser":"1002ZA10000000HTUB5V",
		"begindate":begindate,
		"enddate":enddate
	};
	if(typeof(orderno)!=undefined&&orderno!=null){
		queryparam["orderno"]=orderno;
	}
	if(typeof(cmaterialid)!=undefined&&cmaterialid!=null){
		queryparam["cmaterialid"]=cmaterialid;
	}
	if(typeof(vlicense)!=undefined&&vlicense!=null){
		queryparam["vlicense"]=vlicense;
	}
	
	$view.open({
	     "viewid": "com.yonyou.placeorder.PurchaseOrderList",
	     "isKeep": "true",
	     "queryparam":queryparam
	});
}
function com$yonyou$placeorder$PurchaseOrderSearchController$pageOnload(sender, args){
	var nowdate=getNowFormatDate();
	$id("begindate").set("value",nowdate);
	$id("enddate").set("value",nowdate);
}
function getNowFormatDate(){
	var nowdate=new Date();
	var year=nowdate.getFullYear();
	var month=nowdate.getMonth()+1;
	var date=nowdate.getDate();
	if(month>=1&&month<=9){
		month="0"+month;
	}
	if(date>=1&&date<=9){
		date="0"+date;
	}
	var currentdate=year+"-"+month+"-"+date;
	return currentdate;
}
function com$yonyou$placeorder$PurchaseOrderSearchController$selectMaterial(sender, args){
	$view.open({
        "viewid" : "com.yonyou.placeorder.HlgRefPage",
        "isKeep" : "true",
        "reftype":Globals.RefInfoType.AVAILGOODS,
        "callback" : function(){
        	var retvalue = $param.getJSONObject("result");
        	SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS,retvalue);
        	$ctx.put("cmaterialid",retvalue.pk);
        	$id("lbl_matname").set("value", retvalue.name);
        }
    });
}
function com$yonyou$placeorder$PurchaseOrderSearchController$back(sender, args){
$view.close();
}
com.yonyou.placeorder.PurchaseOrderSearchController.prototype = {
    back : com$yonyou$placeorder$PurchaseOrderSearchController$back,
    selectMaterial : com$yonyou$placeorder$PurchaseOrderSearchController$selectMaterial,
    pageOnload : com$yonyou$placeorder$PurchaseOrderSearchController$pageOnload,
    searchbutton_onclick : com$yonyou$placeorder$PurchaseOrderSearchController$searchbutton_onclick,
    initialize : com$yonyou$placeorder$PurchaseOrderSearchController$initialize,
    evaljs : com$yonyou$placeorder$PurchaseOrderSearchController$evaljs
};
com.yonyou.placeorder.PurchaseOrderSearchController.registerClass('com.yonyou.placeorder.PurchaseOrderSearchController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
