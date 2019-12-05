if(!window || typeof(window)=='undefined')
{
    window = this.window = this;
}

JSON.isJSONString= JSON.isJSONString || function(src){
    if(!!src && typeof(src)==='string')
    {
        try{
            
            return !!JSON.parse(src);
        }
        catch(e)
        {
            return false;
        }
    }
    return false;
}

window.sqliteDB = UMP.Services.Sqlite.prototype;
sqliteDB.openOrCreateDB = function(json)
{
    
    if($isJSONObject(json) && !!json['db'])
    {
        
        return  $service.call('UMSQLite.openDB',{db:json['db']},true);
    }else{
        
        return false;
    }
};
/**
 * 开始数据库，注意，CRUD之前必须开启，否则无法执行成功
 * 数据库扩展名必须是 .db,.sqlite3,且数据库名不能含有特殊字符，除了 点号 "."
 */
sqliteDB.openDB = function(json)
{
    
    return this.openOrCreateDB(json);
};
/*
 * 关闭数据库
 */
sqliteDB.closeDB = function(json)
{
    if($environment.DeviceType!=$environment.DeviceIOS)
    {
        console.error('目前只有IOS实现了该方法');
        return false;
    }
    if($isJSONObject(json) && !!json['db'])
    {
        
        return  $service.call('UMSQLite.closeDB',{db:json['db']},true);
    }else{
        
        return false;
    }
}
/**
 *检查数据库中的数据表是否存在,不推荐使用该方法，使用价值不大
 */
sqliteDB.checkTable = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] && !!json['table'])
        {
            
            return  $service.call('UMSQLite.checkTable',{db:json['db'],table:json['table']},true);
        }
    }else{
        
        console.error('目前只有IOS实现了该方法');
    }
    return false;
    
}

sqliteDB.getTableFields = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] && !!json['table'])
        {
            
            return  $service.call('UMSQLite.getTableFields',{db:json['db'],table:json['table']},true);
        }
    }else{
        
        console.error('目前只有IOS实现了该方法');
    }
    return [];
    
}

sqliteDB.getTableFieldsInfo = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] && !!json['table'])
        {
            
            return  $service.call('UMSQLite.getTableFieldsInfo',{db:json['db'],table:json['table']},true);
        }
    }else{
        
        console.error('目前只有IOS实现了该方法');
    }
    return [];
    
}
/**
 *
 *数据库扩展名必须是 .db,.sqlite3,.sqlite
 *
 */
sqliteDB.deleteDB = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'])
        {
            
            $service.call('UMSQLite.deleteDB',{db:json['db']},false);
        }
    }else{
        
        console.error('目前只有iOS实现了该方法！');
        
    }
}

sqliteDB.execSql = function(json)
{
    
    if($isJSONObject(json) && !!json['db'] && !!json['sql'])
    {
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            json['sql'] = Base64.encode(json['sql']);
            
        }
        var  params = {
        db:json['db'],
        sql:json['sql']
        }
        
        if(!!json['callback'])
        {
            params['callback'] = json['callback'];
        }
        if(!!json['error'])
        {
            params['error'] = json['error'];
        }
        if(!!params['callback'])
        {
            $service.call('UMSQLite.execSql',params,false);
        }else{
            return $service.call(this.UMSQLite_execSql,params,true);
        }
        
    }
};
//

sqliteDB.getDBPath = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] )
        {
            
            return $service.call('UMSQLite.getPath',{db:json['db']},true);
        }
    }else{
        
        console.error('目前只有iOS实现了该方法！');
    }
    return "";
    
}

sqliteDB.begin = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'])
        {
            
            return $service.call('UMSQLite.begin',{db:json['db']},true);
        }
    }else{
        
        console.error('目前只有iOS实现了该方法！');
    }
    return false;
}

sqliteDB.rollback = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] )
        {
            
            return $service.call('UMSQLite.rollback',{db:json['db']},true);
        }
    }else{
        
        console.error('目前只有iOS实现了该方法！');
    }
    return false;
}

sqliteDB.commit = function(json)
{
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] )
        {
            
            return $service.call('UMSQLite.commit',{db:json['db']},true);
        }
    }else{
        
        console.error('目前只有iOS实现了该方法！');
    }
    return false;
}
sqliteDB.getAffectRowCount = function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] )
        {
            
            return $service.call('UMSQLite.getAffectRowCount',{db:json['db']},true);
        }
    }else{
        
        console.error('目前只有iOS实现了该方法！');
        
    }
    return -1;
}


sqliteDB.getLastInsertId =function(json)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        
        if($isJSONObject(json) && !!json['db'] )
        {
            
            return $service.call('UMSQLite.getLastInsertId',{db:json['db']},true);
        }
    }else{
        
        console.error('目前只有iOS实现了该方法！');
        
    }
    return -1;
}

sqliteDB.queryByPage = function(args)
{
    var params = {
        'db' :'',
        'sql':'' ,
        'pageIndex':'' , //pageIndex=页号，从0开始
        'pageSize':''     //pageSize=每页的记录数，从1开始
    }
    
    if($isJSONObject(args)){
        
        if($isEmpty(args["pageSize"]) || isNaN(args["pageSize"])){
            args["pageSize"] = 10;
        }
        if($isEmpty(args["pageIndex"]) || isNaN(args["pageIndex"])){
            args["pageIndex"] = 0;
        }
        if($isEmpty(args["db"]) || $isEmpty(args["sql"])){
            console.error('查询数据信息不正确');
            return [];//表示sql信息不全
        }
        for(var key in params)
        {
            if(args.hasOwnProperty(key))
            {
                params[key] = args[key]; //
                
            }
        };
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            params['sql'] = Base64.encode(params['sql']);
            
        }
        
        if(!!args["callback"])
        {
            params['callback'] = args["callback"];
            $service.call(this.UMSQLite_queryByPage, params, false);
            return [];
        }else{
            
            var dataResult =  $service.call(this.UMSQLite_queryByPage, params, true) || [];
            if(JSON.isJSONString(dataResult))
            {
                return JSON.parse(dataResult);
            }else if(Array.isArray(dataResult)){
                return dataResult;
            }else{
                return [dataResult]; //如果是其他类型数据，自动加一层数组
            }
        }
        
    }else{
        return false; //表示参数错误
    }
    
}

sqliteDB.query = function(args)
{
    
    if($isJSONObject(args))
    {
        var params = {
            'db' :args['db'],
            'sql':args['sql'] ,
            'startIndex':args['startIndex'] , //pageIndex=页号，从0开始
            'endIndex':args['endIndex']     //pageSize=每页的记录数，从1开始
        }
        
        if($isEmpty(params["db"]) || $isEmpty(params["sql"])){
            console.error('查询数据信息不正确');
            return []; //表示sql信息不全
        }
        if(!params['startIndex'] || isNaN(params['startIndex']) ) //r如果开始索引不存在，删除所有索引
        {
            params['startIndex'] = 0;
        }
        if(!params['endIndex'] || isNaN(params['endIndex'])) //如果开始索引存在，结束索引不存在
        {
            params['endIndex'] = Number.MAX_VALUE;
        }
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            params['sql'] = Base64.encode(params['sql']); //针对ios sql语句使用Base64处理，否则无法解析JSON
            
        }
        if(!!args["callback"])
        {
            params['callback'] = args["callback"];
            $service.call(this.UMSQLite_query, params, false); //异步执行
            return [];
        }else{
            
            var dataResult =$service.call(this.UMSQLite_query, params, true);
            if(JSON.isJSONString(dataResult))
            {
                return JSON.parse(dataResult);
            }else if(Array.isArray(dataResult)){
                return dataResult;
            }else{
                return [dataResult]; //如果是其他类型数据，自动加一层数组
            }
        }
    }
    
    return false; //返回false表示参数错误
}

sqliteDB.queryTable = function(args)
{
    if($isJSONObject(args))
    {
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            var params = {
                'db' :args['db'],
                'table':args['table'],
                'fields':args['fields'],
                'condition':args['condition'],
                'pageIndex':args['pageIndex'],
                'pageSize':args['pageSize'],
                'callback':args['callback']
            }
            
            if($isEmpty(params["db"]) || $isEmpty(params["table"])){
                console.error('查询数据信息不正确');
                return []; //表示sql信息不全
            }
            if(!params['pageIndex'] || isNaN(params['pageIndex']) ) //r如果开始索引不存在，删除所有索引
            {
                params['pageIndex'] = 0;
            }
            if(!params['pageSize'] || isNaN(params['pageSize'])) //如果开始索引存在，结束索引不存在
            {
                params['pageSize'] = 10;
            }
            if($environment.DeviceType==$environment.DeviceIOS && !!params['condition'])
            {
                params['condition'] = Base64.encode(params['condition']); //针对ios sql语句使用Base64处理，否则无法解析JSON
            }
            $service.call('UMSQLite.queryTable', params, false); //异步执行
            
        }else{
            
            console.error('目前只有iOS实现了该方法！');
        }
        
    }
    
}

sqliteDB.exist = function(args)
{
    if($isJSONObject(args))
    {
        
        if($isEmpty(args["db"]))
        {
            return false;
        }
        return $service.call(this.UMSQLite_exist,{db:args["db"]}, true); //防止非法注入
    }else{
        return false;
    }
}
UMP.Services.Sqlite.prototype = sqliteDB;
/******--IMAGE--*******/

var imageObject = {};

imageObject.scale = function(args){
    
    if($isJSONObject(args) && !!args["src"])
    {
        var json = {
        src:args["src"]
        };
        
        if(isNaN(args["width"])|| Number(args["width"])<0)
        {
            json['width'] = 0;
        }else{
            json['width'] = args["width"];
            
        }
        if(isNaN(args["heigth"]) || Number(args["heigth"])<0)
        {
            json['height'] = 0;
        }else{
            json['height'] = args["heigth"];
            
        }
        
        
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            
            return  $service.call('UIImageMatrix.scale', json, true); //异步执行
            
        }else{
            console.error('目前只有iOS实现了该方法！');
        }
        
    }
    
    return '';
}

imageObject.compress = function(args){
    
    
    if($isJSONObject(args))
    {
        var json = {
        src:args['src'],
        ratio:args['ratio']
        };
        
        if(!json.src)
        {
            return '';
        }
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            
            return  $service.call('UIImageMatrix.compress', json, true); //异步执行
            
        }else{
            console.error('目前只有iOS实现了该方法！');
        }
    }
    
    return '';
    
}

imageObject.fitQuality = function(args)
{
    
    if($isJSONObject(args))
    {
        var json = {
        src:args['src'],
        maxSize:args['maxSize'] //从质量上限制
        };
        
        if(!json.src)
        {
            return false;
        }
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            
            return  $service.call('UIImageMatrix.fitQuality', json, true); //异步执行
            
        }else{
            console.error('目前只有iOS实现了该方法！');
        }
    }
    
    return '';
    
}
/////////////////////////
//canOverScroll
/////////////////////////

imageObject.drawWaterImage = function(args){
    
    if($isJSONObject(args))
    {
        var json = {
        src:args['src'],
        text:args['text'],
        image:args['image'],
        maxSize:args['maxSize'] //从质量上限制
        };
        
        if(!json.src)
        {
            return '';
        }
        
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            
            return  $service.call('UIImageMatrix.drawWaterImage', json, true); //执行
            
        }else{
            console.error('目前只有iOS实现了该方法！');
        }
    }
    
    return '';
}


imageObject.fitSizeQuality = function(args)
{
    
    if($isJSONObject(args))
    {
        var json = {
        src:args['src'],
        maxSize:args['maxSize'],
        maxLong:args['maxLong']
        };
        
        if(!json.src)
        {
            return false;
        }
        if(isNaN(json.maxSize) || Number(json.maxSize)<0)
        {
            json.maxSize = 0;
        }
        if(isNaN(json.maxLong) || Number(json.maxLong)<0)
        {
            json.maxLong = 0;
        }
        if($environment.DeviceType==$environment.DeviceIOS)
        {
            
            return  $service.call('UIImageMatrix.drawWaterImage', json, true); //异步执行
            
        }else{
            console.error('目前只有iOS实现了该方法！');
        }
    }
    
    return false;
}


window.$image = imageObject;

/********--mimeType************/
var __umfilePrototype = UMP.Services.UMFile.prototype;
__umfilePrototype.getMimeType = function(args)
{
    
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        if($isJSONObject(args) &&!!args['path'])
        {
            return   $service.call('UMFile.getMimeType', {path:args['path']}, true); //执行
        }
    }
    return null;
}
__umfilePrototype.getFileListAtPath = function(args)
{
    if($environment.DeviceType==$environment.DeviceIOS)
    {
        if($isJSONObject(args) &&!!args['path'])
        {
            var param = {path:args['path'],mimeType:args['mimeType']};
            var result =  $service.call('UMFile.getFileListAtDir',param , true); //执行
            return result;
        }
    }
    return [];
}
UMP.Services.UMFile.prototype = __umfilePrototype;
/******--WebViewFramework--*******/

if( typeof(Base64)=='undefined' || !Base64)
{
    window.Base64 = {};
    window.Base64.encode = function(s){
        
        if(!s || typeof(s)!='string' || s.trim().length==0)
        {
            return '';
        }
        
        return '@'+window.btoa(window.encodeURI(s));  //为了防止后台没有decodeURI
    }
};

$js.closeDevelopeMode = function(isClose){
    
    if(arguments.length==0)
    {
        isClose = true;
    }
    else if(isClose=='false' || isClose=='no')
    {
        isClose = false;
    }
    $cache.write('_close_develope_mode_',''+!!isClose);
    
};

$js.setLoadingBarStyle = function(style){
    if(arguments.length==0)
    {
        style = "default";
    }
    style = (style +'').toLowerCase();
    var stylesheet = ['self-adaptive','default','small','large'];
    if(stylesheet.indexOf(style)==-1)
    {
        style = 'default';
    }
    
    var content = style;
    //同步
    $service.call("UMFile.write", {path:'um.cache.sizeOfLoadView',content:content}, true);
}

$exception = function (e, msg){
    
    var closeDevMode = $cache.read('_close_develope_mode_');
    if(closeDevMode=='true')
    {
        console.error(msg);
        console.error(e);
    }else{
        msg = msg ? msg + "\r\n" : "";
        if(e){
            if(e.stack){
                alert(msg + e.stack);
            }else{
                alert(msg + e);
            }
        }else{
            alert("未知错误:" + msg);
        }
    }
};
$e = $exception;


function jsCallNative(str){
    var execXhr = new XMLHttpRequest();
    execXhr.open('POST', "UMP://syncJsHttp?sync=" + (Math.random()), false); //设置scheme
    try{
        execXhr.withCredentials = true;
        var jsStr=Base64.encode(str);
        execXhr.setRequestHeader('jsStr',jsStr);//设置参数等
        execXhr.setRequestHeader('Connection','Keep-Alive');
        execXhr.setRequestHeader('Cache-Control','no-cache,private');
        execXhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
        execXhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded,application/json');
        execXhr.setRequestHeader('User-Agent',navigator.userAgent||"");
    }catch(ee){
        console.dir(ee);
    }finally{
        
        try{
            execXhr.send('data='+jsStr);
        }catch(ee2){}
    }
    // 发起请求
    if (execXhr.readyState == 4) {
        
        if (execXhr.status == 200) {
            return execXhr.responseText;
        } else {
            return execXhr.responseText;
        }
    }
};

function jsCallNativeAsyn(str){
    var execXhr = new XMLHttpRequest();
    execXhr.open('POST', "UMP://asyncJsHttp?asyn=" + (Math.random()), true); //设置scheme
    try{
        execXhr.withCredentials = true;
        var jsStr=Base64.encode(str);
        execXhr.setRequestHeader('jsStr',jsStr);//设置参数等
        execXhr.setRequestHeader('Connection','Keep-Alive');
        execXhr.setRequestHeader('Cache-Control','no-cache,private');
        execXhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
        execXhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        execXhr.setRequestHeader('User-Agent',navigator.userAgent||"");
    }catch(ee){
        
    }finally{
        
        try{
            execXhr.send('data='+jsStr);
        }catch(ee2){}
    }
    execXhr.onreadystatechange = function (msg){
        if(execXhr.status == 200)
        {
            
        }
    };
};

var _umService =  UMP.Services.Controls.prototype;
_umService.set = function(cid, propertyName, propertyValue)
{
    if(!propertyName)
    {
        return null;
    }
    var args = {};
    args["id"] = cid;
    
    var props = ['text','content','title','value'];
    if($environment.DeviceType==$environment.DeviceIOS &&props.indexOf(propertyName.toLowerCase())!=-1 && typeof(propertyValue)=='string')
    {
        propertyValue = propertyValue + '';
        args[propertyName] = window.encodeURI(propertyValue);
        args['UM_EncodeURI'] = propertyName;
    }else{
        args[propertyName] = propertyValue;
    }
    var strArgs = $jsonToString(args);
    $service.callService("UMJS.setProperty", strArgs, false);
    
}

UMP.Services.Controls.prototype = _umService;

var _commonNativeCallService =  CommonNativeCallService.prototype;
_commonNativeCallService.callAction=function(controllerName, actionName, params, isDataCollect, contextmapping,callbackActionID, errorBackAction,customArgs){
    if(arguments.length == 1 && typeof arguments[0] == "object"){
        var args = {};
        args = controllerName;
        var sysParam = {
        viewid:"",
        action:"",
        autoDataBinding:true,
        contextmapping:"",
        callback:"",
        error:"",
        timeout:0
        };
        for(key in args)
        {
            if(!sysParam.hasOwnProperty(key) && (typeof args[key] == "string")){
                args[key] = $stringToJSON(args[key]);
            }
        }
        return UM_NativeCall.callService("UMService.callAction", args, false);
    }else{
        var args = {};
        args["viewid"] = controllerName;
        args["action"] = actionName;
        args["params"] = params;
        args["isDataCollect"] = isDataCollect;
        args["callback"] = callbackActionID;
        args["error"] = errorBackAction;
        args["contextmapping"] = contextmapping;
        if(customArgs){
            for(key in customArgs){
                args[key] = customArgs[key];
            }
        }
        return UM_NativeCall.callService("UMService.callAction", args,false);
    }
};

_commonNativeCallService.get = function(json){
    
    if($isJSONObject(json))
    {
        if(!json.url){
            json.url = "http://about:blank";
        }
        var args = json;
        $service.call("UMService.get", args, false);
    }
};

$device.saveContact = UMP.Services.UMDevice.prototype.saveContact = function(args)
{
    
    if($isJSONObject(args))
    {
        
        return $service.call('UMDevice.saveContact',args,true);
        
    }
    return false;
}

_commonNativeCallService.post = function(json){
    
    if($isJSONObject(json))
    {
        if(!json.url){
            json.url = "http://about:blank";
        }
        
        return $service.call("UMService.post", json, false);
    }
};
CommonNativeCallService.prototype = _commonNativeCallService;


UM.isJSONObject = function (obj) {
    var isJSON = false;
    try{
        isJSON = Object.prototype.toString.call(obj) === '[object Object]';
    }catch(e){
        isJSON =  false;
    }
    return isJSON;
};

function iOSNativeCallService(serviceType, jsonArgs, isSync)
{
    
    try{
        var serviceparams = '';
        if(!jsonArgs || typeof(jsonArgs)=='undefined')
        {
            serviceparams = "{}";
        }
        if(typeof(jsonArgs)=='string')
        {
            
            var jsonStr = $stringToJSON(jsonArgs);
            if(typeof(jsonStr)=='object')
            {
                serviceparams = jsonToString(jsonStr) || jsonArgs;
            }else{
                var msg = {'msg':'参数转换失败，无法转为合法的json字符串','code':1001};
                throw new Error(jsonToString(msg));
                
            }
            
        }
        else if(typeof(jsonArgs)=='object')
        {
            for(var key in jsonArgs)
            {
                if(typeof(jsonArgs[key]) == "function")
                {
                    var funcName = key+'_funcID_'+Math.round(Math.random()*1000000);
                    if(!window.__tempFunctions__ || typeof(window.__tempFunctions__)=='undefined')
                    {
                        window.__tempFunctions__= [];
                    }
                    while(window.__tempFunctions__.indexOf(funcName)>=0)
                    {
                        var index = window.__tempFunctions__.indexOf(funcName);
                        funcName = key+'_funcID_'+index+'_'+Math.round(Math.random()*1000000);
                    }
                    window.__tempFunctions__.push(funcName);
                    window[funcName] = jsonArgs[key];
                    jsonArgs[key] = funcName+'()';
                }
            }
            serviceparams = jsonToString(jsonArgs);
            
            if(typeof(serviceparams) == "object")
            {
                var msg = {'msg':'参数转换失败','code':1001};
                throw new Error(jsonToString(msg));
                
            }
        }else{
            
            var msg = {'msg':'参数类型错误,type:'+(typeof(jsonArgs)),'code':1002};
            throw new Error(jsonToString(msg));
        }
        if(CurrentEnvironment.DeviceType==CurrentEnvironment.DeviceIOS){
            
            if(isSync){
                return UM_callNativeService(serviceType,serviceparams);//同步调用
            }else{
                return UM_callNativeServiceNoraml(serviceType,serviceparams);//异步调用，多用于
            }
        }
        
    }catch(e){
        var info = serviceType+"调用异常,参数:"+jsonArgs+"\n错误信息:"+e.message;
        $alert(info+",\n错误堆栈信息为:" + +e.stack);
    }
    
};
(function(_window){
 var pathname = window.location.pathname || '';
 var lastPaths = pathname.match(/\/\w+.html/ig) ||[];
 var htmlPage = !!lastPaths[0]?lastPaths[0]:'';
 var pageName = htmlPage.split('.')[0]||'';
 pageName = pageName.replace('/load','');
 _window.ump_currentController = pageName;
 window.CurrentEnvironment = !CurrentEnvironment?CurrentEnvironment:{}
 CurrentEnvironment.DeviceIOS="ios";
 CurrentEnvironment.DeviceAndroid="android";
 CurrentEnvironment.DeviceWin8="win8";
 CurrentEnvironment.DevicePC="pc";
 CurrentEnvironment.Debug="debug";
 
 var  _browser = {};
 _browser.versions = _window['getVersions']();
 
 if(_browser.versions.ios || _browser.versions.iPad || _browser.versions.iPhone)
 {
 CurrentEnvironment.DeviceType="ios";
 }else if(_browser.versions.android){
 CurrentEnvironment.DeviceType="android";
 }else if(_browser.versions.mobile){
 CurrentEnvironment.DeviceType="mobile";
 }else{
 CurrentEnvironment.DeviceType="pc";
 }
 $environment = CurrentEnvironment;
 
 if($environment.DeviceType=='ios')
 {
 CommonNativeCallService.prototype.callService = iOSNativeCallService;
 $service.call = CommonNativeCallService.prototype.callService;
 
 }
 
 })(window);

function getVersions(){
    var u = navigator.userAgent, app = navigator.appVersion;
    return {//移动终端浏览器版本信息
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                   android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                   iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                   iPad: u.indexOf('iPad') > -1, //是否iPad
                   webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                   };
                   };
                   
                   
