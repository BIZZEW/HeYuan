//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.PersonalCenterController');
	com.yonyou.placeorder.PersonalCenterController = function() {
		com.yonyou.placeorder.PersonalCenterController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$PersonalCenterController$initialize() {
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

	function com$yonyou$placeorder$PersonalCenterController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$PersonalCenterController$login(sender, args) {
		$ctx.setApp({
            "appuser" : undefined,
            "pk_appuser" : undefined
        });
		$view.open({
			"viewid" : "com.yonyou.placeorder.Login", //目标页面（首字母大写）全名
			"isKeep" : "false"
		});
	}

	function com$yonyou$placeorder$PersonalCenterController$changecustemor(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback" : function() {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);

				$id("customer").set("text", retvalue.name);

				var json = {"usercode":$cache.read("telephone"),
					"pk_appuser" : user.pk_appuser,
					"pk_customer" : retvalue.pk
				};
				$service.callAction({
				"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
					"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
					"action" : "changeDefaultCustomer", //后台Controller的方法名,
					"params" : json, //自定义参数
					"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
					"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
					"callback" : "changeDefaultCustomersuccess()", //请求成功后回调js方法
					"error" : "error()"//请求失败回调的js方法
				});
				$js.showLoadingBar();
			}
		})
	}

	function changedefaultorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);

		var json = {"usercode":$cache.read("telephone"),
			"pk_appuser" : user.pk_appuser,
			"pk_org" : retvalue.pk,
			"orgtype" : orgtype
		};

		$service.callAction({
		"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
			"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
			"action" : "changeDefaultOrg", //后台Controller的方法名,
			"params" : json, //自定义参数
			"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
			"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
			"callback" : "changeorgsuccess()", //请求成功后回调js方法
			"error" : "changeorgerror()"//请求失败回调的js方法
		});
		$js.showLoadingBar();
	}

	function changeorgsuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getString("result");

		var json = eval('(' + result + ')');
		var status = json.statuscode;

		if (status == "0") {

			if (orgtype == 1) {
				$id("seller").set("text", json.datas.org.name);

				user.dfltsaleorg = json.datas.org;

			} else if (orgtype == 2) {
				$id("poster").set("text", json.datas.org.name);

				user.dfltsendstockorg = json.datas.org;
			} else if (orgtype == 3) {
				$id("buyer").set("text", json.datas.org.name);

				user.dfltbuyorg = json.datas.org;
			} else if (orgtype == 4) {
				$id("getter").set("text", json.datas.org.name);

				user.dfltrcvstockorg = json.datas.org;

			}

			$ctx.setApp({
				"appuser" : user
			});

		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误" + errinfo);
		}

	}

	function changeorgerror() {
		$js.hideLoadingBar();
		$alert("连接MA服务器异常");
	}

	function changeDefaultCustomersuccess() {
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
			$id("customer").set("text", json.datas.dfltcstm.name);
			$id("seller").set("text", json.datas.dfltsaleorg.name);
			$id("poster").set("text", json.datas.dfltsendstockorg.name);

			user.dfltcstm = json.datas.dfltcstm;
			user.billtype = json.datas.billtype;
			user.dfltsaleorg = json.datas.dfltsaleorg;
			user.dfltsendstockorg = json.datas.dfltsendstockorg;

			$ctx.setApp({
				"appuser" : user
			});
		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误" + errinfo);
		}

	}

	function error() {
		$js.hideLoadingBar();
		$alert("连接MA服务器异常");
	}

	var orgtype = 0;

	function com$yonyou$placeorder$PersonalCenterController$changesellers(sender, args) {
		orgtype = 1;
		if (user.dfltcstm && user.dfltcstm.pk_customer) {
			$view.open({
				viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"otherparams" : {
					"pk_customer" : user.dfltcstm.pk_customer
				},
				"reftype" : Globals.RefInfoType.SALE_ORG,
				"callback" : "changedefaultorg()"
			})
		} else {
			$alert("请先选择客户");
		}
	}

	function com$yonyou$placeorder$PersonalCenterController$changeposter(sender, args) {
		orgtype = 2;
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.SEND_STOCK_ORG,
			"callback" : "changedefaultorg()"
		})
	}

	function com$yonyou$placeorder$PersonalCenterController$changevender(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_SUPPLIER,
			"callback" : function() {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_SUPPLIER, retvalue);
				//
				$id("vender").set("text", retvalue.name);

				var json = {"usercode":$cache.read("telephone"),
					"pk_appuser" : user.pk_appuser,
					"pk_supplier" : retvalue.pk
				};
				$service.callAction({
				"usercode":$cache.read("telephone"),
			"appid":"PlaceOrder",
					"viewid" : "com.yonyou.placeorder.UserUMController", //后台Controller(带包名)的类名
					"action" : "changeDefaultSupplier", //后台Controller的方法名,
					"params" : json, //自定义参数
					"autoDataBinding" : false, //请求回来会是否进行数据绑定，默认不绑定
					"contextmapping" : "result", //将返回结果映射到指定的Context字段上，默认为替换整个Context
					"callback" : "changeDefaultSuppliersuccess()", //请求成功后回调js方法
					"error" : "error()"//请求失败回调的js方法
				});
				$js.showLoadingBar();
			}
		})
	}

	function changeDefaultSuppliersuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getString("result");

		var json = eval('(' + result + ')');
		var status = json.statuscode;

		if (status == "0") {

			$id("vender").set("text", json.datas.dfltsupplier.name);
			$id("getter").set("text", json.datas.dfltrcvstockorg.name);
			$id("buyer").set("text", json.datas.dfltbuyorg.name);

			user.dfltrcvstockorg = json.datas.dfltrcvstockorg;
			user.dfltsupplier = json.datas.dfltsupplier;
			user.dfltbuyorg = json.datas.dfltbuyorg;
			$ctx.setApp({
				"appuser" : user
			});
		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误" + errinfo);
		}

	}

	function com$yonyou$placeorder$PersonalCenterController$changebuyer(sender, args) {
		orgtype = 3;
		if (user.dfltsupplier && user.dfltsupplier.pk_supplier) {
			$view.open({
				viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"otherparams" : {
					"pk_supplier" : user.dfltsupplier.pk_supplier
				},
				"reftype" : Globals.RefInfoType.BUY_ORG,
				"callback" : "changedefaultorg()"
			})
		} else {
			$alert("请先选择供应商");
		}
	}

	function com$yonyou$placeorder$PersonalCenterController$changegeter(sender, args) {
		orgtype = 4;
		$view.open({
			viewid : "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.RCV_STOCK_ORG,
			"callback" : "changedefaultorg()"
		})
	}

	function com$yonyou$placeorder$PersonalCenterController$changepwd(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.ModifyPassword", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	var user;
	function com$yonyou$placeorder$PersonalCenterController$pageOnload(sender, args) {
		user = JSON.parse($ctx.getApp("appuser"));
		$id("telephone").set("text", user.telephone);

		if (user.dfltcstm != null && typeof (user.dfltcstm) != undefined) {
			$id("customer").set("text", user.dfltcstm.name);
		}

		if (user.dfltrcvstockorg != null && typeof (user.dfltrcvstockorg) != undefined) {
			$id("getter").set("text", user.dfltrcvstockorg.name);
		}
		if (user.dfltsupplier != null && typeof (user.dfltsupplier) != undefined) {
			$id("vender").set("text", user.dfltsupplier.name);
		}

		if (user.dfltbuyorg != null && typeof (user.dfltbuyorg) != undefined) {
			$id("buyer").set("text", user.dfltbuyorg.name);
		}

		if (user.dfltsendstockorg != null && typeof (user.dfltsendstockorg) != undefined) {
			$id("poster").set("text", user.dfltsendstockorg.name);
		}

		if (user.dfltsaleorg != null && typeof (user.dfltsaleorg) != undefined) {
			$id("seller").set("text", user.dfltsaleorg.name);
		}
	}

	function com$yonyou$placeorder$PersonalCenterController$lookPushinfo(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.NotifcationWindow", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$PersonalCenterController$goback(sender, args) {
		$view.close();
	}


	com.yonyou.placeorder.PersonalCenterController.prototype = {
		goback : com$yonyou$placeorder$PersonalCenterController$goback,
		lookPushinfo : com$yonyou$placeorder$PersonalCenterController$lookPushinfo,
		pageOnload : com$yonyou$placeorder$PersonalCenterController$pageOnload,
		changepwd : com$yonyou$placeorder$PersonalCenterController$changepwd,
		changegeter : com$yonyou$placeorder$PersonalCenterController$changegeter,
		changebuyer : com$yonyou$placeorder$PersonalCenterController$changebuyer,
		changevender : com$yonyou$placeorder$PersonalCenterController$changevender,
		changeposter : com$yonyou$placeorder$PersonalCenterController$changeposter,
		changesellers : com$yonyou$placeorder$PersonalCenterController$changesellers,
		changecustemor : com$yonyou$placeorder$PersonalCenterController$changecustemor,
		login : com$yonyou$placeorder$PersonalCenterController$login,
		initialize : com$yonyou$placeorder$PersonalCenterController$initialize,
		evaljs : com$yonyou$placeorder$PersonalCenterController$evaljs
	};
	com.yonyou.placeorder.PersonalCenterController.registerClass('com.yonyou.placeorder.PersonalCenterController', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
