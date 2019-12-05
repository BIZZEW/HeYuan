//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yonyou.placeorder.HlgTestPageController');
com.yonyou.placeorder.HlgTestPageController = function() {
    com.yonyou.placeorder.HlgTestPageController.initializeBase(this);
    this.initialize();
}
function com$yonyou$placeorder$HlgTestPageController$initialize(){
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
    
function com$yonyou$placeorder$HlgTestPageController$evaljs(js){
    eval(js)
}
function getServiceConfig(){
	$ctx.dataCollect();
	var ip=$ctx.getString("ip");
	var port=$ctx.getString("port");
	$service.writeConfig({
		"host" : ip, //向configure中写入host键值
		"port" : port//向configure中写入port键值
	});
}
function com$yonyou$placeorder$HlgTestPageController$wloginbutton_onclick(sender, args){
	getServiceConfig();
	$ctx.dataCollect();
	var telephone=$ctx.getString("telephone");
	var password=$ctx.getString("password");
	var json = {
		"telephone":telephone,
		"password":password
	};
	$alert(json);
	$service.callAction({
	"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.UserUMController",//后台Controller(带包名)的类名
			"action" : "login",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
		
}
function connectSuccess(){
	$alert("success");
	$alert($ctx.getString("result"));
}

function connectError(){
	$alert("err");
	$alert($ctx.getString("result"));
}
function com$yonyou$placeorder$HlgTestPageController$wregisterlabel_onclick(sender, args){
	var telephone=$ctx.getString("telephone");
	var password=$ctx.getString("password");
	var json = {
		"telephone":telephone,
		"password":password
	};
	$alert(json);
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.UserUMController",//后台Controller(带包名)的类名
			"action" : "register",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
}
function com$yonyou$placeorder$HlgTestPageController$wforgetpasslabel_onclick(sender, args){
	getServiceConfig();
	$ctx.dataCollect();
	var telephone=$ctx.getString("telephone");
	var password=$ctx.getString("password");
	var newpassword=$ctx.getString("newpassword");
	var json = {
		"telephone":telephone,
		"oldpassword":password,
		"newpassword":newpassword
	};
	$alert(json);
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.UserUMController",//后台Controller(带包名)的类名
			"action" : "register",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
}
function com$yonyou$placeorder$HlgTestPageController$lbl_goref_onclick(sender, args){
	getServiceConfig();
	$view.open({
        "viewid" : "com.yonyou.placeorder.HlgRefPage",
        "isKeep" : "true",
        "reftype":Globals.RefInfoType.CURUSER_CUSTOMER,
        "callback" : function(){
        	var retvalue = $param.getJSONObject("result");
        	SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER,retvalue);
        	$ctx.put("lbl_org",retvalue.pk);
        	$id("lbl_org_name").set("value", retvalue.name);
        	$alert($ctx.getString("lbl_org"));
        }
    });
}
function com$yonyou$placeorder$HlgTestPageController$btn_createtbl_onclick(sender, args){
	SqliteUtil.createRctMostUseTbl();
	$alert("建表成功");
}
function com$yonyou$placeorder$HlgTestPageController$btn_add_onclick(sender, args){
	var newvalue=$id("newpassword").get("value");
	SqliteUtil.updateRctMostUseData("1","pk"+newvalue,"code"+newvalue,"name"+newvalue);
	$alert("新增成功");
}
function com$yonyou$placeorder$HlgTestPageController$btn_query_onclick(sender, args){
	var result=SqliteUtil.getRctMostUseData(Globals.RefInfoType.CUSTOMER.code);
	$alert(result);
}
function com$yonyou$placeorder$HlgTestPageController$lbl_gocstmref_onclick(sender, args){
	getServiceConfig();
	$view.open({
        "viewid" : "com.yonyou.placeorder.HlgRefPage",
        "isKeep" : "true",
        "reftype":Globals.RefInfoType.CUSTOMER,
        "callback" : function(){
        	var retvalue = $param.getJSONObject("result");
        	SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CUSTOMER,retvalue);
        	$ctx.put("pk_customer",retvalue.pk);
        	$id("lbl_customer").set("value", retvalue.name);
        }
    });
}
function com$yonyou$placeorder$HlgTestPageController$lbl_govehref_onclick(sender, args){
	getServiceConfig();
	$view.open({
        "viewid" : "com.yonyou.placeorder.HlgRefPage",
        "isKeep" : "true",
        "reftype":Globals.RefInfoType.CURUSER_VEHICLE,
        "otherparams":{
        	"pk_customer":$ctx.get("pk_customer")
        },
        "callback" : function(){
        	var retvalue = $param.getJSONObject("result");
        	SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE,retvalue);
        	$id("lbl_vehicle").set("value", retvalue.name);
        }
    });
}
function com$yonyou$placeorder$HlgTestPageController$lbl_goagref_onclick(sender, args){
	getServiceConfig();
	$view.open({
        "viewid" : "com.yonyou.placeorder.HlgRefPage",
        "isKeep" : "true",
        "reftype":Globals.RefInfoType.AVAILGOODS,
        "callback" : function(){
        	var retvalue = $param.getJSONObject("result");
        	SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS,retvalue);
        	$id("lbl_availgoods").set("value", retvalue.name);
        }
    });
}
function com$yonyou$placeorder$HlgTestPageController$btn_test_onclick(sender, args){
	getServiceConfig();
	/*采购订单查询接口测试
	var json = {
		"pk_supplier":"1002P11000000000OP4A",
		"begindate":"2016-11-01",
		"enddate":"2016-12-08",
		"orderno":"CD201611010001",
		"cmaterialid":"1002P11000000000GS3O"
	};
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.DeliveryOrderUMController",//后台Controller(带包名)的类名
			"action" : "queryPurchaseOrder",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
		*/
	/*新增销售预订单接口测试
	var json = {
		"saleorg":"0001PP1000000000BS8G",
		"sendstockorg":"0001PP1000000000BS8G",
		"ccustomerid":"1002P11000000000PKUF",
		"vlicense":"京A56589",
		"drivername":"张三",
		"drivertelephone":"18569554684",
		"vdriverid":"371502156589456589",
		"cmaterialid":"1002PP10000000006N2A",
		"ordernum":"52"
	};
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.SaleAdvOrderUMController",//后台Controller(带包名)的类名
			"action" : "add",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
	*/
	/*销售预订单查询接口测试
	var json = {
		"saleorg":"0001PP1000000000BS8G",
		"begindate":"2016-12-01",
		"enddate":"2016-12-30",
		"ccustomerid":"1002P11000000000PKUF",
		"cmaterialid":"1002PP10000000006N2A",
		"orderno":"005"
	};
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.SaleAdvOrderUMController",//后台Controller(带包名)的类名
			"action" : "query",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
	*/
	/*销售订单查询接口测试
	var json = {
		"saleorg":"0001PP1000000000BSAJ",
		"begindate":"2016-12-01",
		"enddate":"2016-12-30",
		"ccustomerid":"1002P11000000005FCRW",
		"cmaterialid":"1002PP10000000006U6Y"
	};
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.SaleAdvOrderUMController",//后台Controller(带包名)的类名
			"action" : "querySaleOrder",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
	*/
	/*销售预订单修改接口测试
	var json = {
		"cpreorderid":"1002Z610000000HVPUHN",
		"cpreorderbid":"1002Z610000000HVPUHO",
		"saleorg":"0001PP1000000000BS8G",
		"sendstockorg":"0001PP1000000000BS8G",
		"ccustomerid":"1002P11000000000PKUF",
		"vlicense":"京A56589",
		"drivername":"张三",
		"drivertelephone":"18569554684",
		"vdriverid":"371502156589456589",
		"cmaterialid":"1002PP10000000006N2A",
		"ordernum":"45"
	};
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.SaleAdvOrderUMController",//后台Controller(带包名)的类名
			"action" : "update",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
	*/
	$service.writeConfig({
        "host" : "172.18.6.243",//向configure中写入host键值
        "port" : "8081"//向configure中写入port键值
    })
	var json = {
		"cpreorderid":"1002Z610000000HVPS6I",
		"cpreorderbid":"1002Z610000000HVPS6J",
	};
	var myparam={
		"myparam":json
	}
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.SaleAdvOrderUMController",//后台Controller(带包名)的类名
			"action" : "invalid",//后台Controller的方法名,
			"params" : myparam,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()",//请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
	/*用户协议测试
	$view.open({
        "viewid" : "com.yonyou.placeorder.WebViewWindow",//目标页面（首字母大写）全名
        "isKeep" : "true",
        "url":"http://172.18.6.243:8020/HelloHBuilder/agreement.html"
    })
    */
}
function com$yonyou$placeorder$HlgTestPageController$pickOnload(sender, args){
	var context = {
        license1s:["京","鲁","豫"]
    }
    $ctx.push(context); //数据绑定,将context的值与picker进行绑定
}
function com$yonyou$placeorder$HlgTestPageController$pageOnload(sender, args){
	var context = {
        license1s:["京","鲁","豫"]
    }
    $ctx.push(context); //数据绑定,将context的值与picker进行绑定
}
function com$yonyou$placeorder$HlgTestPageController$openPicker(sender, args){
	$view.openPicker({
		"okaction" : "ok1()", //确定后执行的JS方法
		"title" : "Hello Picker",
		"pickercount" : "1",
		"datasource" : {
			picker : [
				{select : [{value : 1, content : 1}, {value : 2, content : 2}, {value : 3, content : 3}]},
				]
		},
		"picker1binder" : "no", //Context字段名，存放选中项的value
	})
}
com.yonyou.placeorder.HlgTestPageController.prototype = {
    openPicker : com$yonyou$placeorder$HlgTestPageController$openPicker,
    pageOnload : com$yonyou$placeorder$HlgTestPageController$pageOnload,
    pickOnload : com$yonyou$placeorder$HlgTestPageController$pickOnload,
    btn_test_onclick : com$yonyou$placeorder$HlgTestPageController$btn_test_onclick,
    lbl_goagref_onclick : com$yonyou$placeorder$HlgTestPageController$lbl_goagref_onclick,
    lbl_govehref_onclick : com$yonyou$placeorder$HlgTestPageController$lbl_govehref_onclick,
    lbl_gocstmref_onclick : com$yonyou$placeorder$HlgTestPageController$lbl_gocstmref_onclick,
    btn_query_onclick : com$yonyou$placeorder$HlgTestPageController$btn_query_onclick,
    btn_add_onclick : com$yonyou$placeorder$HlgTestPageController$btn_add_onclick,
    btn_createtbl_onclick : com$yonyou$placeorder$HlgTestPageController$btn_createtbl_onclick,
    lbl_goref_onclick : com$yonyou$placeorder$HlgTestPageController$lbl_goref_onclick,
    wforgetpasslabel_onclick : com$yonyou$placeorder$HlgTestPageController$wforgetpasslabel_onclick,
    wregisterlabel_onclick : com$yonyou$placeorder$HlgTestPageController$wregisterlabel_onclick,
    wloginbutton_onclick : com$yonyou$placeorder$HlgTestPageController$wloginbutton_onclick,
    initialize : com$yonyou$placeorder$HlgTestPageController$initialize,
    evaljs : com$yonyou$placeorder$HlgTestPageController$evaljs
};
com.yonyou.placeorder.HlgTestPageController.registerClass('com.yonyou.placeorder.HlgTestPageController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
