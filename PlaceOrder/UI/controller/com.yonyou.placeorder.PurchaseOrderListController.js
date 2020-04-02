//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.PurchaseOrderListController');
	com.yonyou.placeorder.PurchaseOrderListController = function () {
		com.yonyou.placeorder.PurchaseOrderListController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$PurchaseOrderListController$initialize() {
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

	function com$yonyou$placeorder$PurchaseOrderListController$evaljs(js) {
		eval(js)
	}
	function com$yonyou$placeorder$PurchaseOrderListController$pageOnload(sender, args) {
		var begindate = Globals.getFormatDate(null, -1);
		var enddate = Globals.getFormatDate(null, 0);
		$id("begindate").set("value", begindate);
		$id("enddate").set("value", enddate);
		var user = JSON.parse($ctx.getApp("appuser"));
		com.yonyou.placeorder.PurchaseOrderListController.queryparam = {
			"pk_appuser": user.pk_appuser,
			"begindate": begindate,
			"enddate": enddate
		};
		com.yonyou.placeorder.PurchaseOrderListController.showquery = 1;
	}
	function com$yonyou$placeorder$PurchaseOrderListController$btn_back_onclick(sender, args) {
		$view.close();
	}
	function com$yonyou$placeorder$PurchaseOrderListController$selectSupplier(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.CURUSER_SUPPLIER,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.CURUSER_SUPPLIER, retvalue);
				com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_supplier"] = retvalue.pk;
				$id("lbl_querysupplier").set("value", retvalue.name);
				com.yonyou.placeorder.PurchaseOrderListController.suppliername = retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$PurchaseOrderListController$selectMine(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.ORESPOT,
			"otherparams": {
				pk_stockorg: com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_stockorg"],
			},
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				// alert(JSON.stringify(retvalue));
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.ORESPOT, retvalue);
				com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_orespot"] = retvalue.pk;
				$id("lbl_mine").set("value", retvalue.name);
				com.yonyou.placeorder.PurchaseOrderListController.minename = retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$PurchaseOrderListController$supplierOnlongClick(sender, args) {
		delete com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_supplier"];
		$id("lbl_querysupplier").set("value", "请选择供应商");
		delete com.yonyou.placeorder.PurchaseOrderListController.suppliername;
	}
	function com$yonyou$placeorder$PurchaseOrderListController$mineOnlongClick(sender, args) {
		delete com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_orespot"];
		$id("lbl_mine").set("value", "请选择矿点");
		delete com.yonyou.placeorder.PurchaseOrderListController.minename;
	}
	function com$yonyou$placeorder$PurchaseOrderListController$selectPurchaseOrg(sender, args) {
		var pk_supplier = com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_supplier"];
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
					com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_purchaseorg"] = retvalue.pk;
					$id("lbl_querypurorg").set("value", retvalue.name);
					com.yonyou.placeorder.PurchaseOrderListController.purorgname = retvalue.name;
				}
			})
		} else {
			$alert("请先选择供应商");
		}
	}
	function com$yonyou$placeorder$PurchaseOrderListController$purorgOnlongClick(sender, args) {
		delete com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_purchaseorg"];
		$id("lbl_querypurorg").set("value", "请选择采购单位");
		delete com.yonyou.placeorder.PurchaseOrderListController.purorgname;
	}
	function com$yonyou$placeorder$PurchaseOrderListController$selectStockOrg(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BaseInfoRefWindow", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"reftype": Globals.RefInfoType.RCV_STOCK_ORG,
			"callback": function () {
				var retvalue = $param.getJSONObject("result");
				SqliteUtil.updateRctMostUseData(Globals.RefInfoType.RCV_STOCK_ORG, retvalue);
				com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_stockorg"] = retvalue.pk;
				$id("lbl_querystockorg").set("value", retvalue.name);
				com.yonyou.placeorder.PurchaseOrderListController.stockorgname = retvalue.name;
			}
		})
	}
	function com$yonyou$placeorder$PurchaseOrderListController$stockorgOnlongClick(sender, args) {
		delete com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_stockorg"];
		$id("lbl_querystockorg").set("value", "请选择收货企业");
		delete com.yonyou.placeorder.PurchaseOrderListController.stockorgname;
	}
	function com$yonyou$placeorder$PurchaseOrderListController$selectCar(sender, args) {
		var pk_supplier = com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_supplier"];
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
					com.yonyou.placeorder.PurchaseOrderListController.vlicense = retvalue.code;
				}
			})
		}
	}
	function com$yonyou$placeorder$PurchaseOrderListController$selectMatOnclick(sender, args) {
		if (com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_stockorg"]) {
			var otherparams = {
				"pk_stockorg": com.yonyou.placeorder.PurchaseOrderListController.queryparam["pk_stockorg"]
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
						com.yonyou.placeorder.PurchaseOrderListController.queryparam["cmaterialid"] = retvalue.pk;
						$id("lbl_matname").set("value", retvalue.name);
						com.yonyou.placeorder.PurchaseOrderListController.materialname = retvalue.name;
					}
				}
			});
		} else {
			$alert("请先选择收货企业");
		}
	}
	function com$yonyou$placeorder$PurchaseOrderListController$matOnlongClick(sender, args) {
		delete com.yonyou.placeorder.PurchaseOrderListController.queryparam["cmaterialid"];
		$id("lbl_matname").set("value", "请选择货物");
		delete com.yonyou.placeorder.PurchaseOrderListController.materialname;
	}
	function com$yonyou$placeorder$PurchaseOrderListController$queryOnclick(sender, args) {
		var begindate = $id("begindate").get("value");
		var enddate = $id("enddate").get("value");
		if (begindate && enddate) {
			if (Globals.compareDate(begindate, enddate) > 0) {
				$alert("开始日期不能大于结束日期");
				return;
			}
		}
		var orderno = $id("orderno").get("value");
		var vlicense = $id("txt_vlicensecode").get("value");
		com.yonyou.placeorder.PurchaseOrderListController.queryparam["begindate"] = begindate;
		com.yonyou.placeorder.PurchaseOrderListController.queryparam["enddate"] = enddate;
		if (orderno) {
			if (Globals.checkSpecialChar(orderno)) {
				$alert("订单号不能包含特殊字符%或_");
				return;
			}
			com.yonyou.placeorder.PurchaseOrderListController.queryparam["orderno"] = orderno;
		} else {
			delete com.yonyou.placeorder.PurchaseOrderListController.queryparam.orderno;
		}
		if (vlicense) {
			if (Globals.checkSpecialChar(vlicense)) {
				$alert("车牌号不能包含特殊字符%或_");
				return;
			}
			com.yonyou.placeorder.PurchaseOrderListController.queryparam["vlicense"] = vlicense;
		} else {
			delete delete com.yonyou.placeorder.PurchaseOrderListController.queryparam.vlicense;
		}
		$id("pnl_queryarea").set("display", "none");
		com.yonyou.placeorder.PurchaseOrderListController.showquery = 0;
		com.yonyou.placeorder.PurchaseOrderListController.datajson = {
			datas: []
		};
		com.yonyou.placeorder.PurchaseOrderListController.page = 1;
		fetchDatas();
	}
	function com$yonyou$placeorder$PurchaseOrderListController$showqueryOnclick(sender, args) {
		if (com.yonyou.placeorder.PurchaseOrderListController.showquery == 0) {
			com.yonyou.placeorder.PurchaseOrderListController.showquery = 1;
			$id("pnl_queryarea").set("display", "block");
			var queryparam = com.yonyou.placeorder.PurchaseOrderListController.queryparam;
			$id("begindate").set("value", queryparam["begindate"]);
			$id("enddate").set("value", queryparam["enddate"]);
			$id("orderno").set("value", queryparam["orderno"]);
			$id("txt_vlicensecode").set("value", queryparam["vlicense"]);
			var mname = com.yonyou.placeorder.PurchaseOrderListController.materialname;
			if (mname != undefined && mname != null && mname != "") {
				$id("lbl_matname").set("value", mname);
			}
			var purorgname = com.yonyou.placeorder.PurchaseOrderListController.purorgname;
			if (purorgname != undefined && purorgname != null && purorgname != "") {
				$id("lbl_querypurorg").set("value", purorgname);
			}
			var stockorgname = com.yonyou.placeorder.PurchaseOrderListController.stockorgname;
			if (stockorgname != undefined && stockorgname != null && stockorgname != "") {
				$id("lbl_querystockorg").set("value", stockorgname);
			}
			var suppliername = com.yonyou.placeorder.PurchaseOrderListController.suppliername;
			if (suppliername != undefined && suppliername != null && suppliername != "") {
				$id("lbl_querysupplier").set("value", suppliername);
			}
		} else if (com.yonyou.placeorder.PurchaseOrderListController.showquery == 1) {
			com.yonyou.placeorder.PurchaseOrderListController.showquery = 0;
			$id("pnl_queryarea").set("display", "none");
		}
	}
	function com$yonyou$placeorder$PurchaseOrderListController$ondownRefresh(sender, args) {
		fetchDatas();
	}
	function com$yonyou$placeorder$PurchaseOrderListController$onupRefresh(sender, args) {
		com.yonyou.placeorder.PurchaseOrderListController.datajson = {
			datas: []
		};
		com.yonyou.placeorder.PurchaseOrderListController.page = 1;
		fetchDatas();
	}
	function com$yonyou$placeorder$PurchaseOrderListController$itemOnclick(sender, args) {
		$view.closeWithCallBack({
			"purchaseorder": $id("list_purchaseorder").get("row")
		});
	}
	function fetchDatas() {
		var queryparam = com.yonyou.placeorder.PurchaseOrderListController.queryparam;
		queryparam["page"] = com.yonyou.placeorder.PurchaseOrderListController.page;
		queryparam["usercode"] = $cache.read("telephone");
		$service.callAction({
			"usercode": $cache.read("telephone"),
			"appid": "PlaceOrder",
			"viewid": "com.yonyou.placeorder.ReceiveOrderUMController",
			"action": "queryPurchaseOrder",
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
		var olddatajson = com.yonyou.placeorder.PurchaseOrderListController.datajson;
		if (result) {
			if (result.statuscode == "0") {
				if (result.datas && result.datas.queryresults) {
					var newdatas = olddatajson["datas"].concat(result.datas.queryresults);
					com.yonyou.placeorder.PurchaseOrderListController.datajson = {
						datas: newdatas
					}
					com.yonyou.placeorder.PurchaseOrderListController.page++;
					$ctx.push(com.yonyou.placeorder.PurchaseOrderListController.datajson);
				} else {
					$alert("没有更多数据了");
					$ctx.push(com.yonyou.placeorder.PurchaseOrderListController.datajson);
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

	com.yonyou.placeorder.PurchaseOrderListController.prototype = {
		matOnlongClick: com$yonyou$placeorder$PurchaseOrderListController$matOnlongClick,
		stockorgOnlongClick: com$yonyou$placeorder$PurchaseOrderListController$stockorgOnlongClick,
		purorgOnlongClick: com$yonyou$placeorder$PurchaseOrderListController$purorgOnlongClick,
		supplierOnlongClick: com$yonyou$placeorder$PurchaseOrderListController$supplierOnlongClick,
		mineOnlongClick: com$yonyou$placeorder$PurchaseOrderListController$mineOnlongClick,
		selectCar: com$yonyou$placeorder$PurchaseOrderListController$selectCar,
		selectSupplier: com$yonyou$placeorder$PurchaseOrderListController$selectSupplier,
		selectMine: com$yonyou$placeorder$PurchaseOrderListController$selectMine,
		selectStockOrg: com$yonyou$placeorder$PurchaseOrderListController$selectStockOrg,
		selectPurchaseOrg: com$yonyou$placeorder$PurchaseOrderListController$selectPurchaseOrg,
		showqueryOnclick: com$yonyou$placeorder$PurchaseOrderListController$showqueryOnclick,
		queryOnclick: com$yonyou$placeorder$PurchaseOrderListController$queryOnclick,
		selectMatOnclick: com$yonyou$placeorder$PurchaseOrderListController$selectMatOnclick,
		itemOnclick: com$yonyou$placeorder$PurchaseOrderListController$itemOnclick,
		btn_back_onclick: com$yonyou$placeorder$PurchaseOrderListController$btn_back_onclick,
		onupRefresh: com$yonyou$placeorder$PurchaseOrderListController$onupRefresh,
		ondownRefresh: com$yonyou$placeorder$PurchaseOrderListController$ondownRefresh,
		pageOnload: com$yonyou$placeorder$PurchaseOrderListController$pageOnload,
		initialize: com$yonyou$placeorder$PurchaseOrderListController$initialize,
		evaljs: com$yonyou$placeorder$PurchaseOrderListController$evaljs
	};
	com.yonyou.placeorder.PurchaseOrderListController.registerClass('com.yonyou.placeorder.PurchaseOrderListController', UMP.UI.Mvc.Controller);
} catch (e) { $e(e); }
