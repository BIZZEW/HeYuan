//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.AllotOrderListController');
	com.yonyou.placeorder.AllotOrderListController = function () {
		com.yonyou.placeorder.AllotOrderListController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$AllotOrderListController$initialize() {
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

	var pk_customer,
		pk_saleorg,
		pk_stockorg,
		pk_material,
		// 调出库存组织
		coutstockorgvid,
		// 调入库存组织
		cinstockorgvid,
		// 调出仓库
		coutstordocid,
		// 调入仓库
		cinstordocid;

	function com$yonyou$placeorder$AllotOrderListController$evaljs(js) {
		eval(js)
	}
	function com$yonyou$placeorder$AllotOrderListController$pageOnload(sender, args) {
		// var begindate = Globals.getFormatDate(null, -1);
		// var enddate = Globals.getFormatDate(null, 0);
		// $id("begindate").set("value", begindate);
		// $id("enddate").set("value", enddate);
		var user = JSON.parse($ctx.getApp("appuser"));
		com.yonyou.placeorder.AllotOrderListController.queryparam = {
			"pk_appuser": user.pk_appuser,
			// "begindate": begindate,
			// "enddate": enddate
		};
		com.yonyou.placeorder.AllotOrderListController.showquery = 1;


		var stockorg = user.dfltrcvstockorg;
		if (stockorg) {
			pk_stockorg = stockorg.pk_org;
			coutstockorgvid = stockorg.pk_org;
			cinstockorgvid = stockorg.pk_org;

			com.yonyou.placeorder.AllotOrderListController.pk_stockorg = stockorg.pk_org;

			com.yonyou.placeorder.AllotOrderListController.queryparam["coutstockorgvid"] = stockorg.pk_org;
			com.yonyou.placeorder.AllotOrderListController.queryparam["cinstockorgvid"] = stockorg.pk_org;

			$id("outorg").set("value", stockorg.name);
			$id("inorg").set("value", stockorg.name);
		}
	}
	function com$yonyou$placeorder$AllotOrderListController$btn_back_onclick(sender, args) {
		$view.close();
	}
	function com$yonyou$placeorder$AllotOrderListController$selectSupplier(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_SUPPLIER,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_SUPPLIER, retvalue);
				com.yonyou.placeorder.AllotOrderListController.queryparam["pk_supplier"] = retvalue.pk;
				$id("lbl_querysupplier").set("value", retvalue.name);
				com.yonyou.placeorder.AllotOrderListController.suppliername = retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$AllotOrderListController$selectMine(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.ORESPOT,
			"otherparams": {
				pk_stockorg: com.yonyou.placeorder.AllotOrderListController.queryparam["pk_stockorg"],
			},
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				// alert(JSON.stringify(retvalue));
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.ORESPOT, retvalue);
				com.yonyou.placeorder.AllotOrderListController.queryparam["pk_orespot"] = retvalue.pk;
				$id("lbl_mine").set("value", retvalue.name);
				com.yonyou.placeorder.AllotOrderListController.minename = retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$AllotOrderListController$selectWarehouse(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.WAREHOUSE,
			"otherparams": {
				pk_stockorg: com.yonyou.placeorder.AllotOrderListController.queryparam["pk_stockorg"],
			},
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				// alert(JSON.stringify(retvalue));
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.WAREHOUSE, retvalue);
				com.yonyou.placeorder.AllotOrderListController.queryparam["pk_warehouse"] = retvalue.pk;
				$id("lbl_warehouse").set("value", retvalue.name);
				com.yonyou.placeorder.AllotOrderListController.warehousename = retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$AllotOrderListController$supplierOnlongClick(sender, args) {
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["pk_supplier"];
		$id("lbl_querysupplier").set("value", "请选择供应商");
		delete com.yonyou.placeorder.AllotOrderListController.suppliername;
	}
	function com$yonyou$placeorder$AllotOrderListController$mineOnlongClick(sender, args) {
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["pk_orespot"];
		$id("lbl_mine").set("value", "请选择矿点");
		delete com.yonyou.placeorder.AllotOrderListController.minename;
	}
	function com$yonyou$placeorder$AllotOrderListController$warehouseOnlongClick(sender, args) {
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["pk_warehouse"];
		$id("lbl_warehouse").set("value", "请选择仓库");
		delete com.yonyou.placeorder.AllotOrderListController.warehousename;
	}
	function com$yonyou$placeorder$AllotOrderListController$selectPurchaseOrg(sender, args) {
		var pk_supplier = com.yonyou.placeorder.AllotOrderListController.queryparam["pk_supplier"];
		if (pk_supplier) {
			$view.open({
				viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype": Globals.RefInfoType.BUY_ORG,
				"otherparams": {
					"pk_supplier": pk_supplier
				},
				"callback": function () {
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.BUY_ORG, retvalue);
					com.yonyou.placeorder.AllotOrderListController.queryparam["pk_purchaseorg"] = retvalue.pk;
					$id("lbl_querypurorg").set("value", retvalue.name);
					com.yonyou.placeorder.AllotOrderListController.purorgname = retvalue.name;
				}
			})
		} else {
			$alert("请先选择供应商");
		}
	}
	function com$yonyou$placeorder$AllotOrderListController$purorgOnlongClick(sender, args) {
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["pk_purchaseorg"];
		$id("lbl_querypurorg").set("value", "请选择采购单位");
		delete com.yonyou.placeorder.AllotOrderListController.purorgname;
	}
	function com$yonyou$placeorder$AllotOrderListController$selectStockOrg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.RCV_STOCK_ORG,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.RCV_STOCK_ORG, retvalue);
				com.yonyou.placeorder.AllotOrderListController.queryparam["pk_stockorg"] = retvalue.pk;
				$id("lbl_querystockorg").set("value", retvalue.name);
				com.yonyou.placeorder.AllotOrderListController.stockorgname = retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$AllotOrderListController$stockorgOnlongClick(sender, args) {
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["pk_stockorg"];
		$id("lbl_querystockorg").set("value", "请选择收货企业");
		delete com.yonyou.placeorder.AllotOrderListController.stockorgname;
	}
	function com$yonyou$placeorder$AllotOrderListController$selectCar(sender, args) {
		var pk_supplier = com.yonyou.placeorder.AllotOrderListController.queryparam["pk_supplier"];
		if (pk_supplier == undefined || pk_supplier == null || pk_supplier == "") {
			$alert("选择车辆信息前必须选择供应商");
		} else {
			$view.open({
				viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
				isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
				"reftype": Globals.RefInfoType.CURUSER_VEHICLE,
				"otherparams": {
					"pk_supplier": pk_supplier
				},
				"callback": function () {
					var retvalue = $param.getJSONObject("result");
					SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_VEHICLE, retvalue);
					$id("txt_vlicensecode").set("value", retvalue.code);
					com.yonyou.placeorder.AllotOrderListController.vlicense = retvalue.code;
				}
			})
		}
	}
	function com$yonyou$placeorder$AllotOrderListController$selectMatOnclick(sender, args) {
		if (com.yonyou.placeorder.AllotOrderListController.queryparam["pk_stockorg"]) {
			var otherparams = {
				"pk_stockorg": com.yonyou.placeorder.AllotOrderListController.queryparam["pk_stockorg"]
			};
			$view.open({
				"viewid": "com.yonyou.placeorder.BaseInfoRefWindow",
				"isKeep": "true",
				"reftype": Globals.RefInfoType.AVAILGOODS,
				"otherparams": otherparams,
				"callback": function () {
					var retvalue = $param.getJSONObject("result");
					if (retvalue != undefined && retvalue != null) {
						SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);
						com.yonyou.placeorder.AllotOrderListController.queryparam["cmaterialid"] = retvalue.pk;
						$id("lbl_matname").set("value", retvalue.name);
						com.yonyou.placeorder.AllotOrderListController.materialname = retvalue.name;
					}
				}
			});
		} else {
			$alert("请先选择收货企业");
		}
	}
	function com$yonyou$placeorder$AllotOrderListController$matOnlongClick(sender, args) {
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["cmaterialid"];
		$id("lbl_matname").set("value", "请选择货物");
		delete com.yonyou.placeorder.AllotOrderListController.materialname;
	}
	function com$yonyou$placeorder$AllotOrderListController$queryOnclick(sender, args) {
		var begindate = $id("begindate").get("value");
		var enddate = $id("enddate").get("value");
		if (begindate && enddate) {
			if (Globals.compareDate(begindate, enddate) > 0) {
				$alert("开始日期不能大于结束日期");
				return;
			}
		}

		com.yonyou.placeorder.AllotOrderListController.queryparam["begindate"] = begindate;
		com.yonyou.placeorder.AllotOrderListController.queryparam["enddate"] = enddate;


		var orderno = $id("billcode1").get("value");
		if (orderno) {
			if (Globals.checkSpecialChar(orderno)) {
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
			com.yonyou.placeorder.AllotOrderListController.queryparam["orderno"] = orderno;
		} else {
			delete com.yonyou.placeorder.AllotOrderListController.queryparam.orderno;
		}


		// if (vlicense) {
		// 	if (Globals.checkSpecialChar(vlicense)) {
		// 		$alert("车牌号不能包含特殊字符%或_");
		// 		return;
		// 	}
		// 	com.yonyou.placeorder.AllotOrderListController.queryparam["vlicense"] = vlicense;
		// } else {
		// 	delete delete com.yonyou.placeorder.AllotOrderListController.queryparam.vlicense;
		// }


		$id("pnl_queryarea").set("display", "none");
		com.yonyou.placeorder.AllotOrderListController.showquery = 0;
		com.yonyou.placeorder.AllotOrderListController.datajson = {
			datas: []
		};
		com.yonyou.placeorder.AllotOrderListController.page = 1;
		fetchDatas();
	}
	function com$yonyou$placeorder$AllotOrderListController$showqueryOnclick(sender, args) {
		if (com.yonyou.placeorder.AllotOrderListController.showquery == 0) {
			com.yonyou.placeorder.AllotOrderListController.showquery = 1;
			$id("pnl_queryarea").set("display", "block");
			var queryparam = com.yonyou.placeorder.AllotOrderListController.queryparam;
			$id("begindate").set("value", queryparam["begindate"]);
			$id("enddate").set("value", queryparam["enddate"]);
			$id("orderno").set("value", queryparam["orderno"]);
			$id("txt_vlicensecode").set("value", queryparam["vlicense"]);
			var mname = com.yonyou.placeorder.AllotOrderListController.materialname;
			if (mname != undefined && mname != null && mname != "") {
				$id("lbl_matname").set("value", mname);
			}
			var purorgname = com.yonyou.placeorder.AllotOrderListController.purorgname;
			if (purorgname != undefined && purorgname != null && purorgname != "") {
				$id("lbl_querypurorg").set("value", purorgname);
			}
			var stockorgname = com.yonyou.placeorder.AllotOrderListController.stockorgname;
			if (stockorgname != undefined && stockorgname != null && stockorgname != "") {
				$id("lbl_querystockorg").set("value", stockorgname);
			}
			var suppliername = com.yonyou.placeorder.AllotOrderListController.suppliername;
			if (suppliername != undefined && suppliername != null && suppliername != "") {
				$id("lbl_querysupplier").set("value", suppliername);
			}
		} else if (com.yonyou.placeorder.AllotOrderListController.showquery == 1) {
			com.yonyou.placeorder.AllotOrderListController.showquery = 0;
			$id("pnl_queryarea").set("display", "none");
		}
	}
	function com$yonyou$placeorder$AllotOrderListController$ondownRefresh(sender, args) {
		fetchDatas();
	}
	function com$yonyou$placeorder$AllotOrderListController$onupRefresh(sender, args) {
		com.yonyou.placeorder.AllotOrderListController.datajson = {
			datas: []
		};
		com.yonyou.placeorder.AllotOrderListController.page = 1;
		fetchDatas();
	}
	function com$yonyou$placeorder$AllotOrderListController$itemOnclick(sender, args) {
		alert(JSON.stringify($id("list_allotorder").get("row")))
		$view.closeWithCallBack({
			"allotOrder": $id("list_allotorder").get("row")
		});
	}
	function fetchDatas() {
		var queryparam = com.yonyou.placeorder.AllotOrderListController.queryparam;
		queryparam["page"] = com.yonyou.placeorder.AllotOrderListController.page;
		queryparam["usercode"] = $cache.read("telephone");

		alert(JSON.stringify(queryparam))

		$service.callAction({
			"usercode": $cache.read("telephone"),
			"appid": "PlaceOrder",
			"viewid": "com.yonyou.placeorder.TransOrderUMController",
			"action": "queryTransOrderDown",
			"params": queryparam,
			"autoDataBinding": false,
			"contextmapping": "result",
			"callback": "connectSuccess()",
			"error": "connectError()"
		});
		$js.showLoadingBar();
	}
	function connectSuccess() {
		$js.hideLoadingBar();
		var result = $ctx.getJSONObject("result");

		alert(JSON.stringify(result))

		var olddatajson = com.yonyou.placeorder.AllotOrderListController.datajson;
		if (result) {
			if (result.statuscode == "0") {
				if (result.datas && result.datas.queryresults) {
					var newdatas = olddatajson["datas"].concat(result.datas.queryresults);
					com.yonyou.placeorder.AllotOrderListController.datajson = {
						datas: newdatas
					}
					com.yonyou.placeorder.AllotOrderListController.page++;
					$ctx.push(com.yonyou.placeorder.AllotOrderListController.datajson);
				} else {
					$alert("没有更多数据了");
					$ctx.push(com.yonyou.placeorder.AllotOrderListController.datajson);
				}
			} else if (result.statuscode == "1") {
				$alert("系统错误：" + result.errinfo);
			}
		}
	}
	function connectError() {
		$js.hideLoadingBar();
		$alert("访问MA服务器异常");
	}

	function com$yonyou$placeorder$AllotOrderListController$dateOnload(sender, args) {
		var begindate = Globals.firstDatein("year");
		// var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
	}

	function com$yonyou$placeorder$AllotOrderListController$changeinorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbackinorg()"
		})
	}

	function com$yonyou$placeorder$AllotOrderListController$changeoutorg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.SEND_STOCK_ORG,
			"callback": "callbackoutorg()"
		})
	}

	function com$yonyou$placeorder$AllotOrderListController$changeinwh(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.WAREHOUSE,
			"otherparams": {
				"pk_stockorg": cinstockorgvid,
			},
			"callback": "callbackinwh()"
		})
	}

	function com$yonyou$placeorder$AllotOrderListController$changeoutwh(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.WAREHOUSE,
			"otherparams": {
				"pk_stockorg": coutstockorgvid,
			},
			"callback": "callbackoutwh()"
		})
	}

	function callbackinorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("inorg").set("value", retvalue.name);
		$id("inwh").set("value", "请选择调入仓库");

		alert(retvalue.pk)

		com.yonyou.placeorder.AllotOrderListController.queryparam["cinstockorgvid"] = retvalue.pk;
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["cinstordocid"];

		alert(JSON.stringify(com.yonyou.placeorder.AllotOrderListController.queryparam))

		cinstockorgvid = retvalue.pk;
		cinstordocid = "";
	}

	function callbackoutorg() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.SEND_STOCK_ORG, retvalue);

		$id("outorg").set("value", retvalue.name);
		$id("outwh").set("value", "请选择调出仓库");

		com.yonyou.placeorder.AllotOrderListController.queryparam["coutstockorgvid"] = retvalue.pk;
		delete com.yonyou.placeorder.AllotOrderListController.queryparam["coutstordocid"];

		coutstockorgvid = retvalue.pk;
		coutstordocid = "";
	}

	function callbackinwh() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.WAREHOUSE, retvalue);

		com.yonyou.placeorder.AllotOrderListController.queryparam["cinstordocid"] = retvalue.pk;
		$id("inwh").set("value", retvalue.name);
		cinstordocid = retvalue.pk;
	}

	function callbackoutwh() {
		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.WAREHOUSE, retvalue);

		com.yonyou.placeorder.AllotOrderListController.queryparam["coutstordocid"] = retvalue.pk;
		$id("outwh").set("value", retvalue.name);
		coutstordocid = retvalue.pk;
	}

	function com$yonyou$placeorder$AllotOrderListController$clearinorg(sender, args) {
		$id("inorg").set("value", "请选择调入库存组织");
		cinstockorgvid = null;
	}

	function com$yonyou$placeorder$AllotOrderListController$clearoutorg(sender, args) {
		$id("outorg").set("value", "请选择调出库存组织");
		coutstockorgvid = null;
	}

	function com$yonyou$placeorder$AllotOrderListController$clearinwh(sender, args) {
		$id("inwh").set("value", "请选择调入仓库");
		cinstordocid = null;
	}

	function com$yonyou$placeorder$AllotOrderListController$clearoutwh(sender, args) {
		$id("outwh").set("value", "请选择调出仓库");
		coutstordocid = null;
	}

	function com$yonyou$placeorder$AllotOrderListController$cleargoods(sender, args) {
		$id("goodsname1").set("value", "请选择物料");
		pk_material = null;
	}

	//选择物料
	function com$yonyou$placeorder$AllotOrderListController$changegoods(sender, args) {
		// if (pk_stockorg) {
		var otherparams = {
			"pk_stockorg": pk_stockorg,
			"pk_customer": pk_customer,
			"issaleorder": true
		};
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.AVAILGOODS,
			"otherparams": otherparams,
			"callback": "callbackgoods()"
		})
		// } else {
		// 	$alert("请先选择发货企业");
		// }
	}

	function callbackgoods() {

		var retvalue = $param.getJSONObject("result");
		SqliteUtil.updateRctMostUseData(Globals.RefInfoType.AVAILGOODS, retvalue);

		com.yonyou.placeorder.AllotOrderListController.queryparam["cmaterialid"] = retvalue.pk;
		$id("goodsname1").set("value", retvalue.name);
		pk_material = retvalue.pk;
	}

	com.yonyou.placeorder.AllotOrderListController.prototype = {
		matOnlongClick: com$yonyou$placeorder$AllotOrderListController$matOnlongClick,
		stockorgOnlongClick: com$yonyou$placeorder$AllotOrderListController$stockorgOnlongClick,
		purorgOnlongClick: com$yonyou$placeorder$AllotOrderListController$purorgOnlongClick,
		supplierOnlongClick: com$yonyou$placeorder$AllotOrderListController$supplierOnlongClick,
		mineOnlongClick: com$yonyou$placeorder$AllotOrderListController$mineOnlongClick,
		warehouseOnlongClick: com$yonyou$placeorder$AllotOrderListController$warehouseOnlongClick,
		selectCar: com$yonyou$placeorder$AllotOrderListController$selectCar,
		selectSupplier: com$yonyou$placeorder$AllotOrderListController$selectSupplier,
		selectMine: com$yonyou$placeorder$AllotOrderListController$selectMine,
		selectWarehouse: com$yonyou$placeorder$AllotOrderListController$selectWarehouse,
		selectStockOrg: com$yonyou$placeorder$AllotOrderListController$selectStockOrg,
		selectPurchaseOrg: com$yonyou$placeorder$AllotOrderListController$selectPurchaseOrg,
		showqueryOnclick: com$yonyou$placeorder$AllotOrderListController$showqueryOnclick,
		queryOnclick: com$yonyou$placeorder$AllotOrderListController$queryOnclick,
		selectMatOnclick: com$yonyou$placeorder$AllotOrderListController$selectMatOnclick,
		itemOnclick: com$yonyou$placeorder$AllotOrderListController$itemOnclick,
		btn_back_onclick: com$yonyou$placeorder$AllotOrderListController$btn_back_onclick,
		onupRefresh: com$yonyou$placeorder$AllotOrderListController$onupRefresh,
		ondownRefresh: com$yonyou$placeorder$AllotOrderListController$ondownRefresh,
		pageOnload: com$yonyou$placeorder$AllotOrderListController$pageOnload,
		initialize: com$yonyou$placeorder$AllotOrderListController$initialize,
		evaljs: com$yonyou$placeorder$AllotOrderListController$evaljs,
		clearinorg: com$yonyou$placeorder$AllotOrderListController$clearinorg,
		clearoutorg: com$yonyou$placeorder$AllotOrderListController$clearoutorg,
		clearinwh: com$yonyou$placeorder$AllotOrderListController$clearinwh,
		clearoutwh: com$yonyou$placeorder$AllotOrderListController$clearoutwh,
		changeinorg: com$yonyou$placeorder$AllotOrderListController$changeinorg,
		changeoutorg: com$yonyou$placeorder$AllotOrderListController$changeoutorg,
		changeinwh: com$yonyou$placeorder$AllotOrderListController$changeinwh,
		changeoutwh: com$yonyou$placeorder$AllotOrderListController$changeoutwh,
		changegoods: com$yonyou$placeorder$AllotOrderListController$changegoods,
		dateOnload: com$yonyou$placeorder$AllotOrderListController$dateOnload,
	};
	com.yonyou.placeorder.AllotOrderListController.registerClass('com.yonyou.placeorder.AllotOrderListController', UMP.UI.Mvc.Controller);
} catch (e) { $e(e); }
