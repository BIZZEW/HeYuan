//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.ReportSearchController');
	com.yonyou.placeorder.ReportSearchController = function () {
		com.yonyou.placeorder.ReportSearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$ReportSearchController$initialize() {
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

	function com$yonyou$placeorder$ReportSearchController$evaljs(js) {
		eval(js)
	}

	function com$yonyou$placeorder$ReportSearchController$billcode(sender, args) {

	}

	function com$yonyou$placeorder$ReportSearchController$goodsname(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": "changegoods()"
		})
	}

	function com$yonyou$placeorder$ReportSearchController$back(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$ReportSearchController$requestData(sender, args) {
		// 起止日期
		var begindate = $id("begindate").get("value");
		var enddate = $id("enddate").get("value");
		// 物料
		var cmaterialname = $ctx.getString("cmaterialname");
		var cmaterialid = $ctx.getString("cmaterialid");
		// 起止日期校验
		if (begindate && enddate) {
			if (Globals.compareDate(begindate, enddate) > 0) {
				$alert("开始日期不能大于结束日期");
				return;
			}
		}

		try {
			var param = {
				"start_time": $id("begindate").get("value"),
				"end_time": $id("enddate").get("value"),
				"pk_customer": pk_customer,
				"customer_name": customer_name,
				"type": cmaterialname,
				"cmaterialid": cmaterialid
			};

			// 传参存好
			$cache.write("searchParam", JSON.stringify(param));

			// 直接关闭
			$view.close({
				"resultcode": "15",
			});
		} catch (e) { $alert(e + "，查询出错！code: 06"); }
	}

	function com$yonyou$placeorder$ReportSearchController$back_onclick(sender, args) {
		$view.close()
	}

	function com$yonyou$placeorder$ReportSearchController$dateOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	//选择物料
	function com$yonyou$placeorder$ReportSearchController$changegoods(sender, args) {
		// if (pk_stockorg) {
		var otherparams = {
			"pk_stockorg": pk_stockorg
		};
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"otherparams": otherparams,
			"callback": "changegoods()"
		})
		// } else {
		// 	$alert("请先选择发货企业");
		// }
	}

	function changegoods() {

		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);

		$id("goodsname").set("value", retvalue.name);
		pk_material = retvalue.pk;
	}

	function com$yonyou$placeorder$ReportSearchController$changeseller(sender, args) {
		if (pk_customer) {
			$view.open({
				viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype": Globals.RefInfoType.SALE_ORG,
				"otherparams": {
					"pk_customer": pk_customer
				},
				"callback": "callbackseller()"
			})
		} else {
			$alert("请先选择客户");
		}
	}

	var pk_customer,
		customer_name,
		pk_saleorg,
		pk_stockorg,
		pk_material;
	function callbackseller() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SALE_ORG, retvalue);

		$id("seller").set("value", retvalue.name);
		pk_saleorg = retvalue.pk;
	}

	function com$yonyou$placeorder$ReportSearchController$changecustomer(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_CUSTOMER,
			"callback": "callbackcustomer()"
		})
	}

	function callbackcustomer() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_CUSTOMER, retvalue);

		$id("customer").set("value", retvalue.name);
		pk_customer = retvalue.pk;
		customer_name = retvalue.name;
	}

	function com$yonyou$placeorder$ReportSearchController$changesender(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbacksender()"
		})
	}

	function callbacksender() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("sender").set("value", retvalue.name);
		pk_stockorg = retvalue.pk;
	}

	function com$yonyou$placeorder$ReportSearchController$clearcustomer(sender, args) {
		$id("customer").set("value", "请选择客户");
		pk_customer = null;
	}

	function com$yonyou$placeorder$ReportSearchController$clearseller(sender, args) {
		$id("seller").set("value", "请选择销售组织");
		pk_saleorg = null;
	}

	function com$yonyou$placeorder$ReportSearchController$clearsender(sender, args) {
		$id("sender").set("value", "请选择库存组织");
		pk_stockorg = null;
	}

	function com$yonyou$placeorder$ReportSearchController$cleargoods(sender, args) {
		$id("goodsname").set("value", "请选择物料");
		pk_material = null;
	}


	function com$yonyou$placeorder$ReportSearchController$selectMaterial(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
			"isKeep": "true",
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
				$ctx.put("cmaterialid", retvalue.pk);
				$ctx.put("cmaterialname", retvalue.name);
				$id("lbl_matname").set("value", retvalue.name);
			}
		});
	}

	function com$yonyou$placeorder$ReportSearchController$selectcar(sender, args) {
		if (pk_customer) {
			$view.open({
				viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
				"otherparams": {
					"pk_customer": pk_customer
				},
				"callback": function () {
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
					$id("vlicense").set("value", retvalue.code);
				}
			})
		} else {
			$alert("选择车辆信息前必须选择客户");
		}
	}

	function com$yonyou$placeorder$ReportSearchController$picker0_onload(sender, args) {
		var context = {
			statuses: ["未完成", "已取消", "已完成"],
		}
		$ctx.push(context); //数据绑定,将context的值与picker进行绑定
	}

	com.yonyou.placeorder.ReportSearchController.prototype = {
		picker0_onload: com$yonyou$placeorder$ReportSearchController$picker0_onload,
		selectcar: com$yonyou$placeorder$ReportSearchController$selectcar,
		cleargoods: com$yonyou$placeorder$ReportSearchController$cleargoods,
		clearsender: com$yonyou$placeorder$ReportSearchController$clearsender,
		clearseller: com$yonyou$placeorder$ReportSearchController$clearseller,
		clearcustomer: com$yonyou$placeorder$ReportSearchController$clearcustomer,
		changesender: com$yonyou$placeorder$ReportSearchController$changesender,
		changecustomer: com$yonyou$placeorder$ReportSearchController$changecustomer,
		changeseller: com$yonyou$placeorder$ReportSearchController$changeseller,
		dateOnload: com$yonyou$placeorder$ReportSearchController$dateOnload,
		changegoods: com$yonyou$placeorder$ReportSearchController$changegoods,
		back_onclick: com$yonyou$placeorder$ReportSearchController$back_onclick,
		// searchbutton_onclick: com$yonyou$placeorder$ReportSearchController$searchbutton_onclick,
		back: com$yonyou$placeorder$ReportSearchController$back,
		goodsname: com$yonyou$placeorder$ReportSearchController$goodsname,
		billcode: com$yonyou$placeorder$ReportSearchController$billcode,
		initialize: com$yonyou$placeorder$ReportSearchController$initialize,
		evaljs: com$yonyou$placeorder$ReportSearchController$evaljs,
		requestData: com$yonyou$placeorder$ReportSearchController$requestData,
		selectMaterial: com$yonyou$placeorder$ReportSearchController$selectMaterial,
	};
	com.yonyou.placeorder.ReportSearchController.registerClass('com.yonyou.placeorder.ReportSearchController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
