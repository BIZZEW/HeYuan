//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.BalanceQuerySearchController');

	com.yonyou.placeorder.BalanceQuerySearchController = function () {
		com.yonyou.placeorder.BalanceQuerySearchController.initializeBase(this);
		this.initialize();
	};

	function com$yonyou$placeorder$BalanceQuerySearchController$initialize() {
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

	function com$yonyou$placeorder$BalanceQuerySearchController$select_customer(sender, args) {
		$view.open({
			viewid: "com.yonyou.placeorder.BalanceQuerySelectCustomer", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
		})
	}

	function com$yonyou$placeorder$BalanceQuerySearchController$searchbutton_onclick(sender, args) {
		/**var begindate=$id("begindate").get("value");
		 var enddate=$id("enddate").get("value");
		 if(begindate&&enddate){
		 if(Globals.compareDate(begindate,enddate)>0){
		 $alert("开始日期不能大于结束日期");
		 return;
		 }
		 }
		 var user = JSON.parse($ctx.getApp("appuser"));
		 var vlicense=$id("vlicense").get("value");
		 if(vlicense){
		 if(Globals.checkSpecialChar(vlicense)){
		 $alert("车牌号不能包含特殊字符%或_");
		 return;
		 }
		 }
		 var billcode=$id("billcode").get("value");
		 if(billcode){
		 if(Globals.checkSpecialChar(billcode)){
		 $alert("订单号不能包含特殊字符%或_");
		 return;
		 }
		 }**/
		var json = {
			"pk_appuser": "",
			"begindate": "",
			"enddate": "",
			"orderno": "",

			"pk_customer": "",
			"pk_saleorg": "",
			"pk_stockorg": "",

			"cmaterialid": "",
			"vlicense": ""

		};
		var data = $param.getJSONObject("data");
		$view.open({
			viewid: "com.yonyou.placeorder.BalanceQueryList", //目标页面（首字母大写）全名
			isKeep: "true", //打开新页面的同时是否保留当前页面，true为保留，false为不保留
			"param": json
		});

	}

	function com$yonyou$placeorder$BalanceQuerySearchController$button0_onclick(sender, args) {
		$view.close();
	}


	com.yonyou.placeorder.BalanceQuerySearchController.prototype = {
		button0_onclick: com$yonyou$placeorder$BalanceQuerySearchController$button0_onclick,
		initialize: com$yonyou$placeorder$BalanceQuerySearchController$initialize,
		select_customer: com$yonyou$placeorder$BalanceQuerySearchController$select_customer,
		searchbutton_onclick: com$yonyou$placeorder$BalanceQuerySearchController$searchbutton_onclick,
	};

	com.yonyou.placeorder.BalanceQuerySearchController.registerClass('com.yonyou.placeorder.BalanceQuerySearchController', UMP.UI.Mvc.Controller);
} catch (e) {
	$e(e);
}

