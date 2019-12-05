package com.yonyou.placeorder.util;

import com.yyuap.upush.common.json.JSONException;
import com.yyuap.upush.common.json.JSONObject;

public class ExceptionUtil4POApp {
	public static final String DEFAULT_ERROR="error";
	public static void dealException(Exception e){
		e.printStackTrace();
	}
	public static void throwBusinessException(String errinfo) throws Exception{
		throw new Exception(errinfo);
	}
	public static String wrapException(Exception e){
		JSONObject obj=new JSONObject();
		try {
			obj.put("statuscode", "1");
			obj.put("errinfo", e.getMessage());
			return obj.toString();
		} catch (JSONException ex) {
			ExceptionUtil4POApp.dealException(ex);
			return DEFAULT_ERROR;
		}
	}
	public static String getNCServiceError(String serviceid){
		JSONObject obj=new JSONObject();
		try {
			obj.put("statuscode", "1");
			obj.put("errinfo", "获取不到serviceid为"+serviceid+"的NC服务，请联系运维人员");
			return obj.toString();
		} catch (JSONException ex) {
			ExceptionUtil4POApp.dealException(ex);
			return DEFAULT_ERROR;
		}
	}
	public static String getNCServiceByNullParam(){
		JSONObject obj=new JSONObject();
		try {
			obj.put("statuscode", "1");
			obj.put("errinfo", "调用NC服务时serviceid和参数不能为空");
			return obj.toString();
		} catch (JSONException ex) {
			ExceptionUtil4POApp.dealException(ex);
			return DEFAULT_ERROR;
		}
	}
	public static String getNCServiceByNoneNCUser(){
		JSONObject obj=new JSONObject();
		try {
			obj.put("statuscode", "1");
			obj.put("errinfo", "调用NC服务时请正确配置NC账号信息");
			return obj.toString();
		} catch (JSONException ex) {
			ExceptionUtil4POApp.dealException(ex);
			return DEFAULT_ERROR;
		}
	}
}
