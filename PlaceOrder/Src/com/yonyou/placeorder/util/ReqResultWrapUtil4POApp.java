package com.yonyou.placeorder.util;

import com.yyuap.upush.common.json.JSONObject;

public class ReqResultWrapUtil4POApp {
	public static String wrapResult(String statuscode,String errinfo,Object obj){
		JSONObject retobj=new JSONObject();
		try{
			if(statuscode==null){
				retobj.put("statuscode", "0");
			}else{
				retobj.put("statuscode", statuscode);
			}
			if(errinfo!=null){
				retobj.put("errinfo", errinfo);
			}
			if(obj!=null){
				retobj.put("datas", obj);
			}
			return retobj.toString();
		}catch(Exception e){
			String errresult="{\"statuscode\":\"1\",\"errinfo\":"
					+e.getMessage()+"\"}";
			return errresult;
		}
	}
}
