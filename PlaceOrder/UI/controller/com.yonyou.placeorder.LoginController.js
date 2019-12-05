//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.LoginController');
	com.yonyou.placeorder.LoginController = function() {
		com.yonyou.placeorder.LoginController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$LoginController$initialize() {
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

	function com$yonyou$placeorder$LoginController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$LoginController$button0_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$LoginController$label1_onclick(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.Matest", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$LoginController$label0_onclick(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.PWRecovery", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$LoginController$label2_onclick(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.Register", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$LoginController$pageonload(sender, args) {
		var telephone=$cache.read("telephone");
		var password=$cache.read("password");
		if(telephone){
			$id("wusertext").set("value",telephone);
		}
		if(password){
			$id("wpasstext").set("value",password);
		}
		SqliteUtil.initDB();
	}
	function login(sender, args) {
		var host = $cache.read("host");
		var port = $cache.read("port");
		if (host&&port) {
			$service.writeConfig({
				"host" : host, //向configure中写入host键值
				"port" : port//向configure中写入port键值
			});
		} else {
			$alert("请设置服务器");
			$view.open({
				viewid : "com.yonyou.placeorder.Matest", //目标页面（首字母大写）全名
				isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
			})
			return;
		}
		var telephone=$id("wusertext").get("value");
		if(!telephone){
			$alert("请输入手机号");
			return;
		}
		var password=$id("wpasstext").get("value");
		if(!password){
			$alert("请输入密码");
			return;
		}
		var json = {
			"telephone" : telephone,
			"usercode" : telephone,
			"password" : password,
			"user":telephone
		};
		$service.callAction({
			"appid":"PlaceOrder",
			"user" : telephone,
			"usercode" : telephone,
			"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
			"action" : "login", //后台Controller的方法名,
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
		var json = JSON.parse(result);
		var status = json.statuscode;
		if (status == "1001004") {
			$alert("密码错误");
		} else if (status == "1001001") {
			$alert("NC用户档案中无该用户");
		} else if (status == "1001002") {
			$alert("用户未注册（该用户档案密码为空）");
		} else if (status == "0") {
			$cache.write("telephone", $id("wusertext").get("value"));
			if ($id("remeber").get("checked") == "true") {
				$cache.write("password", $id("wpasstext").get("value"));
			} else {
				$cache.write("password", "");
			}
			$ctx.setApp({
				"appuser" : json.datas,
				"pk_appuser" : json.datas.pk_appuser
			});
			$cache.write("pk_appuser", json.datas.pk_appuser);
			//将该设备注册到推送服务器
			/*推送先不用了，暂时注释掉
			$upush.registerDevice({
                "host" : "push.yyuap.com",
                "port" : "5000",
                "notificationPage" : "com.yonyou.placeorder.NotifcationWindow",
                "appid" : "725"
            })
            */
			$view.open({
				viewid : "com.yonyou.placeorder.HomePage", //目标页面（首字母大写）全名
				isKeep : "false"//打开新页面的同时是否保留当前页面，true为保留，false为不保留

			})
		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误" + errinfo);
		}
	}
	function connectError(sender,args) {
		$js.hideLoadingBar();
		$alert("连接MA服务器异常,"+args.err_msg);
	}
	com.yonyou.placeorder.LoginController.prototype = {
		pageonload : com$yonyou$placeorder$LoginController$pageonload,
		label2_onclick : com$yonyou$placeorder$LoginController$label2_onclick,
		label0_onclick : com$yonyou$placeorder$LoginController$label0_onclick,
		label1_onclick : com$yonyou$placeorder$LoginController$label1_onclick,
		button0_onclick : com$yonyou$placeorder$LoginController$button0_onclick,
		initialize : com$yonyou$placeorder$LoginController$initialize,
		evaljs : com$yonyou$placeorder$LoginController$evaljs
	};
	com.yonyou.placeorder.LoginController.registerClass('com.yonyou.placeorder.LoginController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
