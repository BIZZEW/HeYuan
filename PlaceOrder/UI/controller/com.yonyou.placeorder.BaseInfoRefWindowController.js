//JavaScript Framework 2.0 Code
try {
    Type.registerNamespace('com.yonyou.placeorder.BaseInfoRefWindowController');
    com.yonyou.placeorder.BaseInfoRefWindowController = function() {
        com.yonyou.placeorder.BaseInfoRefWindowController.initializeBase(this);
        this.initialize();
    }
    function com$yonyou$placeorder$BaseInfoRefWindowController$initialize() {
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
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$evaljs(js) {
        eval(js)
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$pageonload(sender, args) {
        //SqliteUtil.createRctMostUseTbl();
        var reftype = $param.getJSONObject("reftype");
        $id("navbar").set("title", reftype.title);
        //初始化最近常用
        var result = SqliteUtil.getRctMostUseData(reftype);
        if(reftype.code=="1008"||reftype.code=="1009"){
        	//车辆档案和司机档案的参照的最近常用不用考虑重新查询
        	com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson = {
	            datas_recent : result
	        };
	        $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson);
        }else{
        	if(result){
        		result=JSON.parse(result);
        		if(result.length>0){
	        		var pkarrays=new Array(result.length);
	        		for(var i=0;i<result.length;i++){
	        			pkarrays[i]=result[i].pk;
	        		}
	        		getRecentMostRefInfo(pkarrays);
	        	}else{
	        		com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson = {
			            datas_recent : []
			        };
			        $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson);
	        	}
        	}else{
        		com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson = {
		            datas_recent : []
		        };
		        $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson);
        	}
        }
        
        //初始化所有信息
        com.yonyou.placeorder.BaseInfoRefWindowController.alljson = {
            datas_all : []
        };
        com.yonyou.placeorder.BaseInfoRefWindowController.page = 1;
        com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall = 0;
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$txt_search_onsearch(sender, args) {
        var index = $id("flipperpnl").get("viewindex");
        if (index == "1") {
            com.yonyou.placeorder.BaseInfoRefWindowController.alljson = {
                datas_all : []
            };
            com.yonyou.placeorder.BaseInfoRefWindowController.page = 1;
            getAllRefInfo();
        } else {
            $id("flipperpnl").set("viewindex", 1);
            $id("tgbtngrp").set("selectedvalue", 1);
            //ios不会触发滑动事件，需要手动触发
	        if ($environment.DeviceType == $environment.DeviceIOS) {
                com.yonyou.placeorder.BaseInfoRefWindowController.alljson = {
	                datas_all : []
	            };
	            com.yonyou.placeorder.BaseInfoRefWindowController.page = 1;
	            getAllRefInfo();
	            com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall = 1;
	        }
        }
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$tgbtnchange(sender, args) {
        
        var index = $id("tgbtngrp").get("selectedvalue");
        $id("flipperpnl").set("viewindex", index);
        //ios不会触发滑动事件，需要手动触发
        if ($environment.DeviceType == $environment.DeviceIOS) {
            if (index == "1") {
                if (com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall == 0) {
                    getAllRefInfo();
                    com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall = 1;
                }
                $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.alljson);
            } else if (index == "0") {
                $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson);
            }
        }
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$flipnext(sender, args) {
        var index = $id("flipperpnl").get("viewindex");
        $id("tgbtngrp").set("selectedvalue", index);
        if (index == "1") {
            if (com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall == 0) {
                getAllRefInfo();
                com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall = 1;
            }
            $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.alljson);
        } else if (index == "0") {
            $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson);
        }
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$flipprevious(sender, args) {
        var index = $id("flipperpnl").get("viewindex");
        $id("tgbtngrp").set("selectedvalue", index);
        if (index == "1") {
            if (com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall == 0) {
                getAllRefInfo();
                com.yonyou.placeorder.BaseInfoRefWindowController.hasgetall = 1;
            }
            if (com.yonyou.placeorder.BaseInfoRefWindowController.alljson) {
                $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.alljson);
            }
        } else if (index == "0") {
            $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson);
        }
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$onload(sender, args) {
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$onItemClick(sender, args) {
        $view.closeWithCallBack({
                                "result" : $id("list_recent").get("row")
                                });
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$recentlistonload(sender, args) {
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$alllistonload(sender, args) {
    }
    function getRecentMostRefInfo(filterPKs) {
        var reftype = $param.getJSONObject("reftype");
        var otherparam = $param.getJSONObject("otherparams");
        var user = JSON.parse($ctx.getApp("appuser"));
        var param = {
        	        "usercode":$cache.read("telephone"),

            "pk_appuser" : $ctx.getApp("pk_appuser"),
            "keyword" : $id("txt_search").get("value"),
            "filterPKs":filterPKs,
            "page" : 1
        };
        if (otherparam != null && typeof (otherparam) != undefined) {
            for (item in otherparam) {
                param[item] = otherparam[item];
            }
        }
        $service.callAction({
			"appid":"PlaceOrder",
	        "viewid" : "com.yonyou.placeorder.RefInfoUMController",
	        "action" : reftype.action,
	        "usercode":$cache.read("telephone"),
	        "params" : param,
	        "autoDataBinding" : false,
	        "contextmapping" : "result",
	        "callback" : "connectRctMostSuccess()",
	        "error" : "connectError()"
	    });
	    $js.showLoadingBar();
    }
    function connectRctMostSuccess() {
    	$js.hideLoadingBar();
        var result = $ctx.get("result");
        if (result) {
            result = JSON.parse(result);
        } else {
            return;
        }
        if (result) {
            var statuscode = result["statuscode"];
            if (statuscode == "1") {
            	return;
            }
            var alldatas = result["datas"]&&result["datas"]["queryresults"];
            if (alldatas) {
                com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson = {
		            datas_recent : alldatas
		        };
		        $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.rencentjson);
            }
        }
    }
    function getAllRefInfo() {
        var reftype = $param.getJSONObject("reftype");
        var otherparam = $param.getJSONObject("otherparams");
        var user = JSON.parse($ctx.getApp("appuser"));
        var param = {
        	        "usercode":$cache.read("telephone"),

            "pk_appuser" : $ctx.getApp("pk_appuser"),
            "keyword" : $id("txt_search").get("value"),
            "page" : com.yonyou.placeorder.BaseInfoRefWindowController.page
        };
        if (otherparam != null && typeof (otherparam) != undefined) {
            for (item in otherparam) {
                param[item] = otherparam[item];
            }
        }
        $service.callAction({
			"appid":"PlaceOrder",
	        "viewid" : "com.yonyou.placeorder.RefInfoUMController",
	        "action" : reftype.action,
	        "usercode":$cache.read("telephone"),
	        "params" : param,
	        "autoDataBinding" : false,
	        "contextmapping" : "result",
	        "callback" : "connectSuccess()",
	        "error" : "connectError()"
	    });
	    $js.showLoadingBar();
    }
    
    function connectSuccess() {
    	$js.hideLoadingBar();
        var result = $ctx.get("result");
        if (result) {
            result = JSON.parse(result);
        } else {
            return;
        }
        var oldalljson = com.yonyou.placeorder.BaseInfoRefWindowController.alljson;
        if (!oldalljson) {
            com.yonyou.placeorder.BaseInfoRefWindowController.alljson = {
                datas_all : []
            };
            oldalljson = com.yonyou.placeorder.BaseInfoRefWindowController.alljson;
        }
        if (result) {
            var statuscode = result["statuscode"];
            if (statuscode == "1") {
                var errinfo = result["errinfo"];
                $alert("系统异常：" + errinfo);
                return;
            }
            var alldatas = result["datas"]&&result["datas"]["queryresults"];
            if (alldatas) {
                var oldalldatas = oldalljson["datas_all"];
                var newalldatas = oldalldatas.concat(alldatas);
                com.yonyou.placeorder.BaseInfoRefWindowController.alljson = {
                    datas_all : newalldatas
                };
                com.yonyou.placeorder.BaseInfoRefWindowController.page++;
                $ctx.push(com.yonyou.placeorder.BaseInfoRefWindowController.alljson);
            } else {
                $alert("没有更多数据了");
            }
        }
    }
    
    function connectError() {
    	$js.hideLoadingBar();
        Globals.callActionError();
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$allListItemClick(sender, args) {
        $view.closeWithCallBack({
                                "result" : $id("list_all").get("row")
                                });
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$allListDownRefresh(sender, args) {
        getAllRefInfo();
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$allListUpRefresh(sender, args) {
        com.yonyou.placeorder.BaseInfoRefWindowController.alljson = {
            datas_all : []
        };
        com.yonyou.placeorder.BaseInfoRefWindowController.page = 1;
        getAllRefInfo();
    }
    
    function com$yonyou$placeorder$BaseInfoRefWindowController$btn_back_onclick(sender, args) {
        $view.close();
    }
    
    
    com.yonyou.placeorder.BaseInfoRefWindowController.prototype = {
        btn_back_onclick : com$yonyou$placeorder$BaseInfoRefWindowController$btn_back_onclick,
        allListUpRefresh : com$yonyou$placeorder$BaseInfoRefWindowController$allListUpRefresh,
        allListDownRefresh : com$yonyou$placeorder$BaseInfoRefWindowController$allListDownRefresh,
        allListItemClick : com$yonyou$placeorder$BaseInfoRefWindowController$allListItemClick,
        alllistonload : com$yonyou$placeorder$BaseInfoRefWindowController$alllistonload,
        recentlistonload : com$yonyou$placeorder$BaseInfoRefWindowController$recentlistonload,
        pageonload : com$yonyou$placeorder$BaseInfoRefWindowController$pageonload,
        onItemClick : com$yonyou$placeorder$BaseInfoRefWindowController$onItemClick,
        onload : com$yonyou$placeorder$BaseInfoRefWindowController$onload,
        flipprevious : com$yonyou$placeorder$BaseInfoRefWindowController$flipprevious,
        flipnext : com$yonyou$placeorder$BaseInfoRefWindowController$flipnext,
        tgbtnchange : com$yonyou$placeorder$BaseInfoRefWindowController$tgbtnchange,
        txt_search_onsearch : com$yonyou$placeorder$BaseInfoRefWindowController$txt_search_onsearch,
        initialize : com$yonyou$placeorder$BaseInfoRefWindowController$initialize,
        evaljs : com$yonyou$placeorder$BaseInfoRefWindowController$evaljs
    };
    com.yonyou.placeorder.BaseInfoRefWindowController.registerClass('com.yonyou.placeorder.BaseInfoRefWindowController', UMP.UI.Mvc.Controller);
} catch(e) {
    $e(e);
}
