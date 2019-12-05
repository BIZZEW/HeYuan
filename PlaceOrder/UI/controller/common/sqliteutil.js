try {
	Type.registerNamespace('SqliteUtil');
	SqliteUtil.dbname="applocaldb.db";
	SqliteUtil.rctMostUseTblName="RctMostUseInfo";
	SqliteUtil.initDB=function(){
		var param={
			"db":SqliteUtil.dbname
		}
		$sqlite.openDB(param);
	};
	SqliteUtil.createRctMostUseTbl=function(){
		var isTblCreated=$cache.read("isTblCreated");
		if(isTblCreated){
			return;
		}
		var sql="CREATE TABLE IF NOT EXISTS "+SqliteUtil.rctMostUseTblName+"("
			+"type TEXT,"
			+"pk TEXT,"
			+"code TEXT,"
			+"name TEXT,"
			+"usenums INTEGER,"
			+"rctuse INTEGER)";
		param = {
    		db : SqliteUtil.dbname,
    		sql : sql
		};
		$sqlite.execSql(param);
		$cache.write("isTblCreated", "1");
	};
	SqliteUtil.getRctMostUseData=function(type){
		var typecode=type.code;
		var getRctUseSql="select pk,code,name from "+SqliteUtil.rctMostUseTblName+" where "
			+" type='"+typecode+"' and rctuse=1";
		var getMostUseSql="select pk,code,name from "+SqliteUtil.rctMostUseTblName+" where "
			+" type='"+typecode+"' and rctuse=0 order by usenums desc limit 0,5";
		//获取最近使用数据
		var param1 = {
	        db : SqliteUtil.dbname,
	        sql : getRctUseSql
	    }
	    var rctUseData = $sqlite.query(param1);
	    //获取最常使用数据
	    var param2 = {
	        db : SqliteUtil.dbname,
	        sql : getMostUseSql
	    }
	    var mostUseData = $sqlite.query(param2);
	    //合并最近使用和最常使用
	    var result="[]";
	    if(rctUseData&&rctUseData!="[]"&&(!mostUseData||mostUseData=="[]")){
	    	result=rctUseData;
	    }else if(mostUseData&&mostUseData!="[]"&&(!rctUseData||rctUseData=="[]")){
	    	result=mostUseData;
	    }else if(rctUseData&&rctUseData!="[]"&&mostUseData&&mostUseData!="[]"){
	    	result=rctUseData.slice(0,-1)+","+mostUseData.substring(1);
	    }
	    return result;
	};
	SqliteUtil.updateRctMostUseData=function(type,value){
		var typecode=type.code;
		var pk=value.pk;
		var code=value.code;
		var name=value.name;
		//将原来的最近使用消除
		var updateRctUseSql="update "+SqliteUtil.rctMostUseTblName+" set rctuse=0 where type='"+typecode+"' and rctuse=1";
		var param1 = {
	        db : SqliteUtil.dbname,
	        sql : updateRctUseSql
	    }
	    $sqlite.execSql(param1);
	    //查询是否存在本条数据的使用信息
		var getUseInfoSql="select pk from "+SqliteUtil.rctMostUseTblName+" where type='"+typecode+"' and pk='"+pk+"'";
		var param2 = {
	        db : SqliteUtil.dbname,
	        sql : getUseInfoSql
	    }
	    var useInfoData = $sqlite.query(param2);
	    if(useInfoData!="[]"){
	    	//更新使用次数和最近使用
	    	var updateUseInfoSql="update "+SqliteUtil.rctMostUseTblName+" set usenums=usenums+1,rctuse=1 where type='"
	    		+typecode+"'"+" and pk='"+pk+"'";
	    	var param3 = {
	    		db : SqliteUtil.dbname,
	    		sql : updateUseInfoSql
			};
			$sqlite.execSql(param3);
	    }else{
	    	//新增使用信息
	    	var insertUseInfoSql="insert into "+SqliteUtil.rctMostUseTblName+" values("
	    		+"'"+typecode+"',"
	    		+"'"+pk+"',"
	    		+"'"+code+"',"
	    		+"'"+name+"',"
	    		+"1,1)";
	    	var param4 = {
	    		db : SqliteUtil.dbname,
	    		sql : insertUseInfoSql
			};
			$sqlite.execSql(param4);
	    }
	}
}catch(e) {
	$e(e);
}