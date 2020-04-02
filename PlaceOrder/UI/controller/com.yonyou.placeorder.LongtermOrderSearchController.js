//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.LongtermOrderSearchController');
	com.yonyou.placeorder.LongtermOrderSearchController = function () {
		com.yonyou.placeorder.LongtermOrderSearchController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$initialize() {
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

	function com$yonyou$placeorder$LongtermOrderSearchController$evaljs(js) {
		eval(js)
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$pageOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
		var user = JSON.parse($ctx.getApp("appuser"));
		var stockorg = user.dfltrcvstockorg;
		if (stockorg) {
			com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg = stockorg.pk_org;
			$id("lbl_stockorg").set("value", stockorg.name);
		}
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$back(sender, args) {
		$view.close();
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$stockOrgOnclick(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
			"isKeep": "true",
			"reftype": Globals.RefInfoType.RCV_STOCK_ORG,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.RCV_STOCK_ORG, retvalue);
				com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg = retvalue.pk;
				$id("lbl_stockorg").set("value", retvalue.name);
			}
		});
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$clearstock(sender, args) {
		delete com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg;
		$id("lbl_stockorg").set("value", "请选择收货企业");
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$changeSliper(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
			"isKeep": "true",
			"reftype": Globals.RefInfoType.CURUSER_SUPPLIER,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_SUPPLIER, retvalue);
				com.yonyou.placeorder.LongtermOrderSearchController.pk_supplier = retvalue.pk;
				$id("txt_supplier").set("value", retvalue.name);
			}
		});
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$changeMine(sender, args) {
		$view.open({
			"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
			"isKeep": "true",
			"reftype": Globals.RefInfoType.ORESPOT,
			"otherparams": {
				"pk_stockorg": com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg,
			},
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.ORESPOT, retvalue);
				com.yonyou.placeorder.LongtermOrderSearchController.pk_orespot = retvalue.pk;
				$id("txt_mine").set("value", retvalue.name);
			}
		});
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$clearMine(sender, args) {
		delete com.yonyou.placeorder.LongtermOrderSearchController.pk_orespot;
		$id("txt_mine").set("value", "请选择矿点");
	}

	function com$yonyou$placeorder$LongtermOrderSearchController$clearSliper(sender, args) {
		delete com.yonyou.placeorder.LongtermOrderSearchController.pk_supplier;
		$id("txt_supplier").set("value", "请选择供应商");
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$materialOnclick(sender, args) {
		if (com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg) {
			var otherparams = {
				"pk_stockorg": com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg
			};
			$view.open({
				"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
				"isKeep": "true",
				"reftype": Globals.RefInfoType.AVAILGOODS,
				"otherparams": otherparams,
				"callback": function () {
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
					com.yonyou.placeorder.LongtermOrderSearchController.cmaterialid = retvalue.pk;
					$id("lbl_material").set("value", retvalue.name);
				}
			});
		} else {
			$alert("请先选择库存组织");
		}
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$clearMaterial(sender, args) {
		delete com.yonyou.placeorder.LongtermOrderSearchController.cmaterialid;
		$id("lbl_material").set("value", "请选择货物");
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$vlicenseOnclick(sender, args) {
		if (com.yonyou.placeorder.LongtermOrderSearchController.pk_supplier) {
			var otherparams = {
				"pk_supplier": com.yonyou.placeorder.LongtermOrderSearchController.pk_supplier
			};
			$view.open({
				"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
				"isKeep": "true",
				"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
				"otherparams": otherparams,
				"callback": function () {
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
					$id("txt_vlicense").set("value", retvalue.code);
				}
			});
		} else {
			$alert("请先选择供应商");
		}
	}
	function com$yonyou$placeorder$LongtermOrderSearchController$searchOnclick(sender, args) {
		var begindate = $id("begindate").get("value");
		var enddate = $id("enddate").get("value");
		if (begindate && enddate) {
			if (Globals.compareDate(begindate, enddate) > 0) {
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		var queryparam = {
			"begindate": begindate,
			"enddate": enddate
		}
		if (com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg) {
			queryparam["pk_stockorg"] = com.yonyou.placeorder.LongtermOrderSearchController.pk_stockorg;
		} else {
			$alert("必须选择收货企业");
			return;
		}
		if (com.yonyou.placeorder.LongtermOrderSearchController.pk_supplier) {
			queryparam["pk_supplier"] = com.yonyou.placeorder.LongtermOrderSearchController.pk_supplier;
		}
		if (com.yonyou.placeorder.LongtermOrderSearchController.cmaterialid) {
			queryparam["cmaterialid"] = com.yonyou.placeorder.LongtermOrderSearchController.cmaterialid;
		}
		var vlicense = $id("txt_vlicense").get("value");
		if (vlicense) {
			if (Globals.checkSpecialChar(vlicense)) {
				$alert("车牌号不能包含特殊字符%或_");
				return;
			}
			queryparam["vlicense"] = vlicense;
		}
		var billcode = $id("txt_billcode").get("value");
		if (billcode) {
			if (Globals.checkSpecialChar(billcode)) {
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
			queryparam["noticecode"] = billcode;
		}
		$view.open({
			"viewid": "com.yonyou.placeorder.LongtermOrderList",
			"isKeep": "true",
			"queryparam": queryparam
		});
	}

	com.yonyou.placeorder.LongtermOrderSearchController.prototype = {
		clearMaterial: com$yonyou$placeorder$LongtermOrderSearchController$clearMaterial,
		clearSliper: com$yonyou$placeorder$LongtermOrderSearchController$clearSliper,
		changeSliper: com$yonyou$placeorder$LongtermOrderSearchController$changeSliper,
		clearMine: com$yonyou$placeorder$LongtermOrderSearchController$clearMine,
		changeMine: com$yonyou$placeorder$LongtermOrderSearchController$changeMine,
		clearstock: com$yonyou$placeorder$LongtermOrderSearchController$clearstock,
		back: com$yonyou$placeorder$LongtermOrderSearchController$back,
		searchOnclick: com$yonyou$placeorder$LongtermOrderSearchController$searchOnclick,
		pageOnload: com$yonyou$placeorder$LongtermOrderSearchController$pageOnload,
		vlicenseOnclick: com$yonyou$placeorder$LongtermOrderSearchController$vlicenseOnclick,
		materialOnclick: com$yonyou$placeorder$LongtermOrderSearchController$materialOnclick,
		stockOrgOnclick: com$yonyou$placeorder$LongtermOrderSearchController$stockOrgOnclick,
		initialize: com$yonyou$placeorder$LongtermOrderSearchController$initialize,
		evaljs: com$yonyou$placeorder$LongtermOrderSearchController$evaljs
	};
	com.yonyou.placeorder.LongtermOrderSearchController.registerClass('com.yonyou.placeorder.LongtermOrderSearchController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}
