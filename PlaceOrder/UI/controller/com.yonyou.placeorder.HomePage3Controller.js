//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.HomePage3Controller');
	com.yonyou.placeorder.HomePage3Controller = function() {
		com.yonyou.placeorder.HomePage3Controller.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$HomePage3Controller$initialize() {
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

	function com$yonyou$placeorder$HomePage3Controller$evaljs(js) {
		eval(js)
	}

	function previous(sender, args) {
		var i = $id("flipperdefine0").get("viewindex");
		//$alert("next:" + i);
		$id("tabbar0").set("selectedvalue", i);
	}

	function next(sender, args) {
		var i = $id("flipperdefine0").get("viewindex");
		//滑动到我的界面时，加载默认信息
		$id("tabbar0").set("selectedvalue", i);

		if (i == 2) {

			$id("telephone").set("value", user.telephone);

			if (user.billtype != null && typeof (user.billtype) != undefined) {
				$id("billtype").set("value", user.billtype.billtypename);
			}

			if (user.dfltcstm != null && typeof (user.dfltcstm) != undefined) {
				$id("customer").set("value", user.dfltcstm.name);
			}

			if (user.dfltrcvstockorg != null && typeof (user.dfltrcvstockorg) != undefined) {
				$id("getter").set("value", user.dfltrcvstockorg.name);
			}
			if (user.dfltsupplier != null && typeof (user.dfltsupplier) != undefined) {
				$id("vender").set("value", user.dfltsupplier.name);
			}

			if (user.dfltbuyorg != null && typeof (user.dfltbuyorg) != undefined) {
				$id("buyer").set("value", user.dfltbuyorg.name);
			}

			if (user.dfltsendstockorg != null && typeof (user.dfltsendstockorg) != undefined) {
				$id("poster").set("value", user.dfltsendstockorg.name);
			}

			if (user.dfltsaleorg != null && typeof (user.dfltsaleorg) != undefined) {
				$id("seller").set("value", user.dfltsaleorg.name);
			}

		}
	}

	var user = JSON.parse($ctx.getApp("appuser"));
	
	function buttonschange(sender, args) {

		var index = $id("tabbar0").get("selectedvalue");
		$id("flipperdefine0").set("viewindex", index);

		if (index == 2) {//点击我的按钮时，加载默认信息

			$id("telephone").set("value", user.telephone);

			if (user.billtype != null && typeof (user.billtype) != undefined) {
				$id("billtype").set("value", user.billtype.billtypename);
			}

			if (user.dfltcstm != null && typeof (user.dfltcstm) != undefined) {
				$id("customer").set("value", user.dfltcstm.name);
			}

			if (user.dfltrcvstockorg != null && typeof (user.dfltrcvstockorg) != undefined) {
				$id("getter").set("value", user.dfltrcvstockorg.name);
			}
			if (user.dfltsupplier != null && typeof (user.dfltsupplier) != undefined) {
				$id("vender").set("value", user.dfltsupplier.name);
			}

			if (user.dfltbuyorg != null && typeof (user.dfltbuyorg) != undefined) {
				$id("buyer").set("value", user.dfltbuyorg.name);
			}

			if (user.dfltsendstockorg != null && typeof (user.dfltsendstockorg) != undefined) {
				$id("poster").set("value", user.dfltsendstockorg.name);
			}

			if (user.dfltsaleorg != null && typeof (user.dfltsaleorg) != undefined) {
				$id("seller").set("value", user.dfltsaleorg.name);
			}

		}

	}

	function changepwd(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.ModifyPassword", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	//修改默认客户
	function changecustemor(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.HlgRefPage", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback" : function() {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);

				$id("customer").set("value", retvalue.name);

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
					"error" : "changeDefaultCustomererror()"//请求失败回调的js方法
				})

			}
		})

	}

	function changeDefaultCustomersuccess() {

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
			$id("customer").set("value", json.datas.dfltcstm.name);
			$id("seller").set("value", json.datas.dfltsaleorg.name);
			$id("billtype").set("value", json.datas.billtype.billtypename);
			$id("poster").set("value", json.datas.dfltsendstockorg.name);

			user.dfltcstm.name = json.datas.dfltcstm.name;
			user.billtype.billtypename = json.datas.billtype.billtypename;
			user.dfltsaleorg.name = json.datas.dfltsaleorg.nam;
			user.dfltsendstockorg.name = son.datas.dfltsendstockorg.name;

		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误" + errinfo);
		}

	}

	function changeDefaultCustomererror() {
		$alert("连接MA服务器异常");
	}

	//修改默认销售组织
	function changesellers(sender, args) {
		orgtype = 1;
		$view.open({
			viewid : "com.yonyou.placeorder.HlgRefPage", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.SALE_ORG,
			"callback" : "changedefualtorg()"
		})
	}

	var orgtype = 0;

	function changedefualtorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);
		//
		$id("seller").set("value", retvalue.name);

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
		})

	}

	function changeorgsuccess() {
		var result = $ctx.getString("result");

		var json = eval('(' + result + ')');
		var status = json.statuscode;

		if (status == "0") {

			if (orgtype == 1) {
				$id("seller").set("value", json.datas.org.name);

				user.dfltsaleorg.name = json.datas.org.name;

			} else if (orgtype == 2) {
				$id("poster").set("value", json.datas.org.name);

				user.dfltsendstockorg.name = json.datas.org.name;
			} else if (orgtype == 3) {
				$id("buyer").set("value", json.datas.org.name);

				user.dfltbuyorg.name = json.datas.org.name;
			} else if (orgtype == 4) {
				$id("getter").set("value", json.datas.org.name);

				user.dfltrcvstockorg.name = json.datas.org.name;
			}

		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误" + errinfo);
		}

	}

	function changeorgerror() {
		$alert("连接MA服务器异常");
	}

	//修改默认发货组织
	function changeposter(sender, args) {
		orgtype = 2;
		$view.open({
			viewid : "com.yonyou.placeorder.HlgRefPage", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.SEND_STOCK_ORG,
			"callback" : "changedefualtorg()"
		})
	}

	//修改默认供应商
	function changevender(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.HlgRefPage", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_SUPPLIER,
			"callback" : function() {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_SUPPLIER, retvalue);
				//
				$id("vender").set("value", retvalue.name);

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
					"error" : "changeDefaultSuppliererror()"//请求失败回调的js方法
				})
			}
		})
	}

	function changeDefaultSuppliersuccess() {
		var result = $ctx.getString("result");

		var json = eval('(' + result + ')');
		var status = json.statuscode;

		if (status == "0") {

			$id("vender").set("value", json.datas.dfltsupplier.name);
			$id("getter").set("value", json.datas.dfltrcvstockorg.name);
			$id("buyer").set("value", json.datas.dfltbuyorg.name);

			user.dfltrcvstockorg.name = json.datas.dfltrcvstockorg.name;
			user.dfltsupplier.name = json.datas.dfltsupplier.name;
			user.dfltbuyorg.name = json.datas.dfltbuyorg.name;

		} else if (status == "1") {
			var errinfo = json.errinfo;
			$alert("系统错误" + errinfo);
		}

	}

	function changeDefaultSuppliererror() {
		$alert("连接MA服务器异常");
	}

	//修改默认采购组织
	function changebuyer(sender, args) {
		orgtype = 3;
		$view.open({
			viewid : "com.yonyou.placeorder.HlgRefPage", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.CURUSER_SUPPLIER,
			"callback" : "changedefualtorg()"
		})
	}

	//修改默认收货组织
	function changegeter(sender, args) {
		orgtype = 4;
		$view.open({
			viewid : "com.yonyou.placeorder.HlgRefPage", //目标页面（首字母大写）全名
			isKeep : "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype" : Globals.RefInfoType.RCV_STOCK_ORG,
			"callback" : "changedefualtorg()"
		})
	}

	function login(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.Login", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePage3Controller$addseleorder_onclick(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.SalesAdvOrderDetail", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})

	}

	function myseles(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.SalesAdvOrderSearch", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function mypickups(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.PickOrderSearch", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function myposts(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.DeliveryOrderList", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePage3Controller$selebillcheck(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.SalesOrderList", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$HomePage3Controller$purchasecheck(sender, args) {
		$view.open({
			viewid : "com.yonyou.placeorder.PurchaseOrderSearch", //目标页面（首字母大写）全名
			isKeep : "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}


function com$yonyou$placeorder$HomePage3Controller$personInfoOnload(sender, args){

}
function com$yonyou$placeorder$HomePage3Controller$login(sender, args){

}	com.yonyou.placeorder.HomePage3Controller.prototype = {
    login : com$yonyou$placeorder$HomePage3Controller$login,
    personInfoOnload : com$yonyou$placeorder$HomePage3Controller$personInfoOnload,
		purchasecheck : com$yonyou$placeorder$HomePage3Controller$purchasecheck,
		selebillcheck : com$yonyou$placeorder$HomePage3Controller$selebillcheck,
		initialize : com$yonyou$placeorder$HomePage3Controller$initialize,
		evaljs : com$yonyou$placeorder$HomePage3Controller$evaljs,
		personInfoOnload : com$yonyou$placeorder$HomePage3Controller$personInfoOnload,
		addseleorder_onclick : com$yonyou$placeorder$HomePage3Controller$addseleorder_onclick
	};
	com.yonyou.placeorder.HomePage3Controller.registerClass('com.yonyou.placeorder.HomePage3Controller', UMP.UI.Mvc.Controller);
} catch(e) {
	$e(e);
}
