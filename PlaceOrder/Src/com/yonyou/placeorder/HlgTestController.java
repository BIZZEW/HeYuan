package com.yonyou.placeorder;

import java.util.HashMap;
import java.util.Map;

import com.yonyou.placeorder.util.ExceptionUtil4POApp;
import com.yonyou.placeorder.util.NCServerCaller;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yonyou.uap.um.gateway.service.GatewayServiceFactory;
import com.yonyou.uap.um.gateway.service.IGatewayService;
import com.yonyou.uap.um.gateway.xml.GatewayNodeFactory;
import com.yonyou.uap.um.gateway.xml.IServiceNode;
import com.yyuap.upush.common.json.JSONObject;
import com.yyuap.upush.common.json.JSONArray;

import nc.pubitf.bd.poapp.user.ma.IAppUserService4MA;

public class HlgTestController extends AbstractUMController {

	public String login(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_LOGIN,param);
		return result;
	}
	
	public String pageQuery(String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		int page=paramobj.getInt("page");
		JSONObject obj=new JSONObject();
		obj.put("classify", "classify"+page);
		obj.put("description", "description"+page);
		JSONArray array=new JSONArray();
		array.put(obj);
		JSONObject result=new JSONObject();
		result.put("statuscode", "0");
		result.put("datas", array);
		return result.toString();
	}
	@Override
	public String load(String arg0) throws Exception {
		// TODO 自动生成的方法存根
		return null;
	}

	@Override
	public String save(String arg0) throws Exception {
		// TODO 自动生成的方法存根
		return null;
	}

}
