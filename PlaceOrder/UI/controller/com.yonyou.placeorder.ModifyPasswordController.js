//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.ModifyPasswordController');
	com.yonyou.placeorder.ModifyPasswordController = function() {
		com.yonyou.placeorder.ModifyPasswordController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$ModifyPasswordController$initialize() {
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

	function com$yonyou$placeorder$ModifyPasswordController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$ModifyPasswordController$button0_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$ModifyPasswordController$panel3_onload(sender, args) {
		var oldpw=$id("txt_oldpw").get("value");
		var newpw1=$id("txt_newpw1").get("value");
		var newpw2=$id("txt_newpw2").get("value");
		
		if (oldpw==undefined||oldpw==null||oldpw == "") {
			$alert("请输入旧密码");
			return;
		}
		 if (newpw1==undefined||newpw1==null||newpw1 == "") {
			$alert("请输入新密码");
			return;
		}  
		if (newpw2==undefined||newpw2==null||newpw2 == "") {
			$alert("请确认新密码");
			return;
		}  
		if (newpw1!= newpw2) {
			$alert("两次输入密码必须相同");
			return;
		}  

			var json = {"usercode":$cache.read("telephone"),
				"pk_appuser" :$ctx.getApp("pk_appuser") ,
				"oldpassword" :oldpw,
				"newpassword" : newpw1,
				"refetch" : "0"
			}

			$service.callAction({
			"appid":"PlaceOrder",
			"usercode":$cache.read("telephone"),
				"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
				"action" : "changePassword", //后台Controller的方法名,
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

		if (status == "1001004") {
			$alert("密码错误");
		} else if (status == "1001001") {
			$alert("NC用户档案中无该用户");
		} else if (status == "1001002") {
			$alert("用户未注册（该用户档案密码为空）");
		} else if (status == "0") {
			$view.open({
				viewid : "com.yonyou.placeorder.Login", //目标页面（首字母大写）全名
				isKeep : "false"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
			})
		}else if(status == "1"){
		var errinfo = json.errinfo;
			$alert("系统错误:" + errinfo);
		}
	}

	function connectError() {
		$js.hideLoadingBar();
		$alert("连接MA服务器错误")
	}


	com.yonyou.placeorder.ModifyPasswordController.prototype = {
		panel3_onload : com$yonyou$placeorder$ModifyPasswordController$panel3_onload,
		button0_onclick : com$yonyou$placeorder$ModifyPasswordController$button0_onclick,
		initialize : com$yonyou$placeorder$ModifyPasswordController$initialize,
		evaljs : com$yonyou$placeorder$ModifyPasswordController$evaljs
	};
	com.yonyou.placeorder.ModifyPasswordController.registerClass('com.yonyou.placeorder.ModifyPasswordController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
