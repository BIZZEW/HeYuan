package com.yonyou.placeorder.util;

import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;

import com.yonyou.uap.um.context.util.UmContextUtil;
import com.yonyou.uap.um.gateway.service.GatewayServiceFactory;
import com.yonyou.uap.um.gateway.service.IGatewayService;
import com.yonyou.uap.um.gateway.xml.GatewayNodeFactory;
import com.yonyou.uap.um.gateway.xml.IServiceNode;
/*import com.yonyou.um.log.ILogger;
import com.yonyou.um.log.UMLogger;*///commented by wangkem

public class NCServerCaller {
	public static final String GATEWAY_NODE="PlaceOrder";
	public static String callNCService(String serviceid,int action,String param){
		if(serviceid==null||param==null){
			return ExceptionUtil4POApp.getNCServiceByNullParam();
		}
		String result=ExceptionUtil4POApp.DEFAULT_ERROR;
		try{
			Map paramMap=new HashMap();
			paramMap.put("param", param);
			paramMap.put("action", action);
			String ncusercode=ConfigReader.getNCUsercode();
			String ncuserpassword=ConfigReader.getNCUserPassword();
			if(ncusercode==null||ncusercode.length()==0||ncuserpassword==null||ncuserpassword.length()==0){
				return ExceptionUtil4POApp.getNCServiceByNoneNCUser();
			}
			paramMap.put("ncusercode", ncusercode);
			paramMap.put("ncuserpassword", ncuserpassword);
			paramMap.put("appid", "PlaceOrder");
			IServiceNode svr = GatewayNodeFactory.getGatewayNode(GATEWAY_NODE)
					.getServiceNode(serviceid);
			LoggerUtil.debug("【call nc server begin】paramMap："+paramMap.toString());
			IGatewayService service = GatewayServiceFactory.findGatewayService(svr,
					paramMap);
			if (service != null) {
				result =(String)service.doService();
			}else{
				result=ExceptionUtil4POApp.getNCServiceError(serviceid);
			}
		}catch(Exception e){
			result=ExceptionUtil4POApp.wrapException(e);
			LoggerUtil.debug(e);
		}
		LoggerUtil.debug("【call nc server end】result："+result);
		return result;
	}
}
