//JavaScript Framework 2.0 Code
try {
	Type.registerNamespace('com.yonyou.placeorder.DriverDetailQRController');
	com.yonyou.placeorder.DriverDetailQRController = function () {
		com.yonyou.placeorder.DriverDetailQRController.initializeBase(this);
		this.initialize();
	}
	function com$yonyou$placeorder$DriverDetailQRController$initialize() {
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

	function com$yonyou$placeorder$DriverDetailQRController$evaljs(js) {
		eval(js)
	}

	function pageOnLoad(sender, args) {
		var shareinfo = $param.getJSONObject("shareparams");
		var type = shareinfo.billtype;
		var text = ""; //生成二维码所需内容

		if (type == "delivery") {
			text = shareinfo.pk_noticeorder;
			if (shareinfo.vlicense)
				$id("label_vlicense").set("value", shareinfo.vlicense);
			if (shareinfo.supplier)
				$id("label_splrorpicker_name").set("value", shareinfo.supplier.name);
			if (shareinfo.material)
				$id("label_matname").set("value", shareinfo.material.name);
			if (shareinfo.num)
				$id("label_rcvorpick_no").set("value", shareinfo.num);
			if (shareinfo.stockorg)
				$id("label_rcvorpick_stockorg_name").set("value", shareinfo.stockorg.name);
			if (shareinfo.receivestore)
				$id("label_rcvorpick_warehouse_name").set("value", shareinfo.receivestore.name);
			if (shareinfo.dbilldate)
				$id("label_fetchorrcv_date").set("value", shareinfo.dbilldate);
		}

		if (type == "pickup") {//提货单	
			text = shareinfo.pk_noticeorder;
			if (shareinfo.vlicense)
				$id("label_vlicense").set("value", shareinfo.vlicense);
			if (shareinfo.material)
				$id("label_matname").set("value", shareinfo.material.name);

			$id("label_providerorclient").set("value", "客　　户：");
			if (shareinfo.customer)
				$id("label_splrorpicker_name").set("value", shareinfo.customer.name);

			$id("label_rcvorpick").set("value", "提货数量：");
			if (shareinfo.num)
				$id("label_rcvorpick_no").set("value", shareinfo.num);

			//$id("label_rcvorpick_stockorg").set("value", "提货库存组织：");
			if (shareinfo.stockorg)
				$id("label_rcvorpick_stockorg_name").set("value", shareinfo.stockorg.name);

			$id("label_rcvorpick_warehouse").set("value", "提货仓库：");

			if (shareinfo.receivestore)
				$id("label_rcvorpick_warehouse_name").set("value", shareinfo.receivestore.name);

			$id("label_fetchorscv_dt").set("value", "提货日期：");
			if (shareinfo.dbilldate)
				$id("label_fetchorrcv_date").set("value", shareinfo.dbilldate);
		}

		var twocodepath = $scanner.generateQRCode({
			"size": 240,
			"content": text//生成二维码所需的源文字
		});

		$id("image0").set("src", twocodepath);
		//if ($environment.DeviceType == $environment.DeviceIOS) {
		//	$id("imagebutton0").set("disabled","disabled");
		//}
	}

	function backOnClick(sender, args) {
		$view.close();
	}
	function shotAndShare(sender, args) {
		//截图并分享
		$device.screenShot({
			"bindfield": "dinfo", //信息回写的绑定字段
			"callback": "getScreenShotAndShareCallBack()" //回调执行的JS方法
		})
	}

	function getScreenShotAndShareCallBack() {
		//var info = $ctx.getString("dinfo");
		var shareshotimage = $ctx.getString("dinfo");
		//$id("image0").set("src", info);
		//$alert(shareshotimage);
		//var shareshotimage = $id("image0").get("src");
		$window.showModalDialog({
			"dialogId": "com.yonyou.placeorder.WeiXinDlg",//Dialog的唯一标识（包名+ID），ID要求首字母大写
			"arguments": {
				"imagepath": shareshotimage,
			},//arguments为传递至Dialog的自定义JSON参数
			"features": {
				//"dialogLeft" : "100",//Dialog距离屏幕左侧的位置
				"dialogTop": $device.getScreenHeight() - 190,//Dialog距离屏幕顶端的位置
				//"dialogBottom" : "0",
				"dialogWidth": "fill",
				//"dialogHeight" : 0,
				//"duration": "100"//毫秒，默认1000
			},
			"callback": " myDialogCallBack()",
			"animation-type": "bottom",//弹出Dialog的起始位置，取值范围为top|bottom|left|right|center
			"animation-time": "20"
		})
		//   $alert("截图成功！");
	}

	function myDialogCallBack() {

	}

	com.yonyou.placeorder.DriverDetailQRController.prototype = {
		initialize: com$yonyou$placeorder$DriverDetailQRController$initialize,
		evaljs: com$yonyou$placeorder$DriverDetailQRController$evaljs
	};
	com.yonyou.placeorder.DriverDetailQRController.registerClass('com.yonyou.placeorder.DriverDetailQRController', UMP.UI.Mvc.Controller);
} catch (e) { $e(e); }
