//JavaScript Framework 2.0 Code
try{
Type.registerNamespace('com.yonyou.placeorder.SelfInputDialogController');
com.yonyou.placeorder.SelfInputDialogController = function() {
    com.yonyou.placeorder.SelfInputDialogController.initializeBase(this);
    this.initialize();
}
function com$yonyou$placeorder$SelfInputDialogController$initialize(){
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
    
function com$yonyou$placeorder$SelfInputDialogController$evaljs(js){
    eval(js)
}
function com$yonyou$placeorder$SelfInputDialogController$pageOnload(sender, args){
	//初始化按钮大小
	$id("pnl_vlicense").set("width",getBtnWidth(5));
	$id("btn_cancel").set("width",getBtnWidth(2.5));
	$id("btn_done").set("width",getBtnWidth(2.5));
	var numBtnArray=[1,2,3,4,5,6,7,8,9,0]
	var charBtnArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	for(var numBtn in numBtnArray){
		$id("btn_numchar"+numBtnArray[numBtn]).set("width",getBtnWidth(1));
	}
	for(var charBtn in charBtnArray){
		$id("btn_numchar"+charBtnArray[charBtn]).set("width",getBtnWidth(1));
	}
	$id("btn_showhz").set("width",getBtnWidth(1.5));
	$id("btn_delete").set("width",getBtnWidth(1.5));
	var i=1;
	for(;i<=5;i++){
		$id("btn_pabbr"+i).set("width",getBtnWidth(1.5));
	}
	for(;i<=31;i++){
		$id("btn_pabbr"+i).set("width",getBtnWidth(1));
	}
	$id("btn_showywsz").set("width",getBtnWidth(3));
	//初始化默认值
	var param=$param.getJSONObject("arguments");
	var oldvlicense=param.vlicense;
	com.yonyou.placeorder.SelfInputDialogController.vlicense1="京";
	com.yonyou.placeorder.SelfInputDialogController.vlicense2="A";
	com.yonyou.placeorder.SelfInputDialogController.vlicense3="";
	if(oldvlicense){
		com.yonyou.placeorder.SelfInputDialogController.vlicense1=oldvlicense.slice(0,1);
		com.yonyou.placeorder.SelfInputDialogController.vlicense2=oldvlicense.slice(1,2);
		com.yonyou.placeorder.SelfInputDialogController.vlicense3=oldvlicense.slice(2);
	}else{
		var license1value=$cache.read("license1value");
		if(license1value){
			com.yonyou.placeorder.SelfInputDialogController.vlicense1=license1value;
		}
		var license2value=$cache.read("license2value");
		if(license2value){
			com.yonyou.placeorder.SelfInputDialogController.vlicense2=license2value;
		}
		$id("pnl_numchar").set("display","block");
		$id("pnl_firsthz").set("display","none");
	}
	refreshUI(0);
}
function getBtnWidth(btnplacenum){
	return btnplacenum*30*$device.getScreenWidth()/310-4;
}
function com$yonyou$placeorder$SelfInputDialogController$showFirstHzPanel(sender, args){
	$id("pnl_numchar").set("display","none");
	$id("pnl_firsthz").set("display","block");
}
function com$yonyou$placeorder$SelfInputDialogController$showYwszPanel(sender, args){
	$id("pnl_firsthz").set("display","none");
	$id("pnl_numchar").set("display","block");
}
function com$yonyou$placeorder$SelfInputDialogController$hzOnclick(sender, args){
	var btnvalue=$id(sender).get("value");
	com.yonyou.placeorder.SelfInputDialogController.vlicense1=btnvalue;
	com.yonyou.placeorder.SelfInputDialogController.vlicense2="";
	com.yonyou.placeorder.SelfInputDialogController.vlicense3="";
	$id("pnl_firsthz").set("display","none");
	$id("pnl_numchar").set("display","block");
	refreshUI(0);
}
function com$yonyou$placeorder$SelfInputDialogController$numOnclick(sender, args){
	if(com.yonyou.placeorder.SelfInputDialogController.vlicense2){
		if(com.yonyou.placeorder.SelfInputDialogController.vlicense3.length<5){
			var btnvalue=$id(sender).get("value");
			com.yonyou.placeorder.SelfInputDialogController.vlicense3+=btnvalue;
		}
	}
	refreshUI(3);
}
function com$yonyou$placeorder$SelfInputDialogController$charOnclick(sender, args){
	var btnvalue=$id(sender).get("value");
	if(com.yonyou.placeorder.SelfInputDialogController.vlicense2){
		if(com.yonyou.placeorder.SelfInputDialogController.vlicense3.length<5){
			com.yonyou.placeorder.SelfInputDialogController.vlicense3+=btnvalue;
			refreshUI(3);
		}
	}else{
		com.yonyou.placeorder.SelfInputDialogController.vlicense2=btnvalue;
		refreshUI(2);
	}
	
}
function com$yonyou$placeorder$SelfInputDialogController$deleteOnclick(sender, args){
	if(com.yonyou.placeorder.SelfInputDialogController.vlicense3){
		com.yonyou.placeorder.SelfInputDialogController.vlicense3=com.yonyou.placeorder.SelfInputDialogController.vlicense3.slice(0,-1);
		refreshUI(3);
	}else if(com.yonyou.placeorder.SelfInputDialogController.vlicense2){
		com.yonyou.placeorder.SelfInputDialogController.vlicense2="";
		refreshUI(2);
	}else{
		$id("pnl_numchar").set("display","none");
		$id("pnl_firsthz").set("display","block");
	}
}
function refreshUI(index){
	if(index==1){
		$id("lbl_vlicense1").set("value",com.yonyou.placeorder.SelfInputDialogController.vlicense1);
	}else if(index==2){
		$id("lbl_vlicense2").set("value",com.yonyou.placeorder.SelfInputDialogController.vlicense2);
	}else if(index==3){
		$id("lbl_vlicense3").set("value",com.yonyou.placeorder.SelfInputDialogController.vlicense3);
	}else{
		$id("lbl_vlicense1").set("value",com.yonyou.placeorder.SelfInputDialogController.vlicense1);
		$id("lbl_vlicense2").set("value",com.yonyou.placeorder.SelfInputDialogController.vlicense2);
		$id("lbl_vlicense3").set("value",com.yonyou.placeorder.SelfInputDialogController.vlicense3);
	}
}
function com$yonyou$placeorder$SelfInputDialogController$cancelOnclick(sender, args){
	$window.close({
		"vlicense":"cancel"
	});
}
function com$yonyou$placeorder$SelfInputDialogController$doneOnclick(sender, args){
	if(com.yonyou.placeorder.SelfInputDialogController.vlicense1
		&&com.yonyou.placeorder.SelfInputDialogController.vlicense2
		&&com.yonyou.placeorder.SelfInputDialogController.vlicense3
		&&com.yonyou.placeorder.SelfInputDialogController.vlicense3.length==5){
		var vlicense=com.yonyou.placeorder.SelfInputDialogController.vlicense1
			+com.yonyou.placeorder.SelfInputDialogController.vlicense2
			+com.yonyou.placeorder.SelfInputDialogController.vlicense3;
		$cache.write("license1value", com.yonyou.placeorder.SelfInputDialogController.vlicense1);
		$cache.write("license2value", com.yonyou.placeorder.SelfInputDialogController.vlicense2);
		$window.close({
			"vlicense":vlicense
		});
	}else{
		$alert("请输入正确的车牌号");
	}
}
com.yonyou.placeorder.SelfInputDialogController.prototype = {
    pageOnload : com$yonyou$placeorder$SelfInputDialogController$pageOnload,
    hzOnclick : com$yonyou$placeorder$SelfInputDialogController$hzOnclick,
    doneOnclick : com$yonyou$placeorder$SelfInputDialogController$doneOnclick,
    cancelOnclick : com$yonyou$placeorder$SelfInputDialogController$cancelOnclick,
    deleteOnclick : com$yonyou$placeorder$SelfInputDialogController$deleteOnclick,
    charOnclick : com$yonyou$placeorder$SelfInputDialogController$charOnclick,
    numOnclick : com$yonyou$placeorder$SelfInputDialogController$numOnclick,
    showYwszPanel : com$yonyou$placeorder$SelfInputDialogController$showYwszPanel,
    showFirstHzPanel : com$yonyou$placeorder$SelfInputDialogController$showFirstHzPanel,
    initialize : com$yonyou$placeorder$SelfInputDialogController$initialize,
    evaljs : com$yonyou$placeorder$SelfInputDialogController$evaljs
};
com.yonyou.placeorder.SelfInputDialogController.registerClass('com.yonyou.placeorder.SelfInputDialogController',UMP.UI.Mvc.Controller);
}catch(e){$e(e);}
