//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.RegisterController');
	com.yonyou.placeorder.RegisterController = function() {
		com.yonyou.placeorder.RegisterController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$RegisterController$initialize() {
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

	function com$yonyou$placeorder$RegisterController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$RegisterController$button2_onclick(sender, args) {

		if ($id("textbox0").get("value") == "") {
			$alert("请输入手机号");
		} else if ($id("textbox1").get("value") == "") {
			$alert("请输入密码");
		} else if ($id("textbox2").get("value") == "") {
			$alert("请确认密码");
		} else if ($id("textbox3").get("value") == "") {
			$alert("请输入验证码");
		} else if ($id("textbox1").get("value") != $id("textbox2").get("value")) {
			$alert("两次输入密码必须相同");
		} else if ($id("textbox3").get("value") != $cache.read("verifycode")) {
			$alert("验证码错误");
		} else {

			var json = {
				"telephone" : $id("textbox0").get("value"),
				"password" : $id("textbox1").get("value")
			};

			$service.callAction({
			"appid":"PlaceOrder",
				"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
				"action" : "register", //后台Controller的方法名,
				"params" : json, //自定义参数
				"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
				"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
				"callback" : "registertSuccess()", //请求成功后回调js方法
				"error" : "registerError()"//请求失败回调的js方法
			});
			$js.showLoadingBar();

		}

	}

	function registertSuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getString("result");

		var json = eval('(' + result + ')');
		var status = json.statuscode;

		if (status == "1001003") {
			$alert("已经注册过");
		} else if (status == "1001001") {
			$alert("NC用户档案中无该用户");
		} else if (status == "0") {
			$alert("注册成功")
			$view.open({
				viewid : "com.yonyou.placeorder.Login", //目标页面（首字母大写）全名
				isKeep : "false"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
			})
		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误:" + errinfo);
		}

	}

	function registerError() {
		$js.hideLoadingBar();
		$alert("连接MA服务器错误");

	}

	function com$yonyou$placeorder$RegisterController$button1_onclick(sender, args) {
		var telephone=$id("textbox0").get("value");
		if(!telephone){
			$alert("请输入手机号");
			return;
		}
		if(Globals.checktelephone(telephone)){
			$alert("请输入正确的手机号");
			return;
		}
		var date = new Date();
		var time = date.getTime().toString();
		var verifycode = time.substring(7, 14);
		$cache.write("verifycode", verifycode);
		$alert(verifycode);
		return;
		var json = {
			"telephone" : $id("textbox0").get("value"),
			"verifycode" : verifycode
		};

		$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
			"action" : "smsVerify", //后台Controller的方法名,
			"params" : json, //自定义参数
			"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectSuccess()", //请求成功后回调js方法
			"error" : "connectError()"//请求失败回调的js方法
		});
		$js.showLoadingBar();
	}

	function connectSuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getString("result");

		var json = eval('(' + result + ')');
		var status = json.statuscode;

		if (status == "1001001") {
			$alert("NC用户档案中无该用户");
		} else if (status == "1001002") {
			$alert("用户未注册（该用户档案密码为空）");
		} else if (status == "0") {
			changetimer();
			$alert("验证码已发送");

		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误：" + errinfo);
		}
	}

	function connectError() {
		$js.hideLoadingBar();
		$alert("连接MA服务器错误");

	}

	function com$yonyou$placeorder$RegisterController$button0_onclick(sender, args) {
		$view.close();
	}

	var timeout;
	var time = 60;
	function changetimer() {

		$id("sendmessage").setAttribute("disabled", true);
		$id("sendmessage").set("value", time + "s");

		time--;
		if (time < 0) {
			time = 60;
			clearTimeout(timeout);
			$id("sendmessage").setAttribute("disabled", false);
			$id("sendmessage").set("value", "重新发送");
			return;
		}
		timeout = setTimeout(changetimer, 1000);

	}

function com$yonyou$placeorder$RegisterController$lookAgreement(sender, args){
	var json={
		"cpname":"agreementurl"
	}
	$service.callAction({
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.SystemCfgUMController",//后台Controller(带包名)的类名
			"action" : "getAgreementUrl",//后台Controller的方法名,
			"params" : json,//自定义参数
			"autoDataBinding" : false,//请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result",//将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "connectAgreementSuccess()",
			"error" : "connectAgreementError()"
		});
	$js.showLoadingBar();
}
function connectAgreementSuccess(){
	$js.hideLoadingBar();
	var result=$ctx.getJSONObject("result");
	if(result["statuscode"]=="0"){
		var agreementurl=result["datas"]["agreementurl"];
		$view.open({
	        "viewid" : "com.yonyou.placeorder.WebViewWindow",//目标页面（首字母大写）全名
	        "isKeep" : "true",
	        "url":agreementurl
	    })
	}else if(result["statuscode"]=="1"){
		$alert("系统异常："+result["errinfo"]);
	}
}

function connectAgreementError(){
	$js.hideLoadingBar();
	$alert("访问MA服务器异常");
}
function com$yonyou$placeorder$RegisterController$agreeOnchange(sender, args){
	if(com.yonyou.placeorder.RegisterController.agree==undefined){
		com.yonyou.placeorder.RegisterController.agree=1;
		$id("btn_register").set("disabled","false");
		$id("btn_register").set("background","#13b5f2");
	}else if(com.yonyou.placeorder.RegisterController.agree==0){
		com.yonyou.placeorder.RegisterController.agree=1;
		$id("btn_register").set("disabled","false");
		$id("btn_register").set("background","#13b5f2");
	}else if(com.yonyou.placeorder.RegisterController.agree==1){
		com.yonyou.placeorder.RegisterController.agree=0;
		$id("btn_register").set("disabled","true");
		$id("btn_register").set("background","#c0c0c0");
	}
}	
	com.yonyou.placeorder.RegisterController.prototype = {
    	agreeOnchange : com$yonyou$placeorder$RegisterController$agreeOnchange,
    	lookAgreement : com$yonyou$placeorder$RegisterController$lookAgreement,
		button0_onclick : com$yonyou$placeorder$RegisterController$button0_onclick,
		button1_onclick : com$yonyou$placeorder$RegisterController$button1_onclick,
		button2_onclick : com$yonyou$placeorder$RegisterController$button2_onclick,
		initialize : com$yonyou$placeorder$RegisterController$initialize,
		evaljs : com$yonyou$placeorder$RegisterController$evaljs
	};
	com.yonyou.placeorder.RegisterController.registerClass('com.yonyou.placeorder.RegisterController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
