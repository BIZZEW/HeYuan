package com.yonyou.placeorder;

import java.util.HashMap;
import java.util.Map;

import com.yonyou.uap.um.context.util.UmContextUtil;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yonyou.uap.um.gateway.service.GatewayServiceFactory;
import com.yonyou.uap.um.gateway.service.IGatewayService;
import com.yonyou.uap.um.gateway.xml.GatewayNodeFactory;
import com.yonyou.uap.um.gateway.xml.IServiceNode;
/*import com.yonyou.um.log.ILogger;
import com.yonyou.um.log.UMLogger;*///commented by wangkem
import com.yyuap.upush.common.json.JSONObject;

/**
 * ma连接测试
 * @author Administrator
 *
 */
public class MAConnect extends AbstractUMController {

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

	//连接测试
	public String checkLogin(String arg0) throws Exception{
		JSONObject jsonObj = new JSONObject(arg0);
		String user = jsonObj.getString("username");
		String password = jsonObj.getString("password");
		if(user!=null&&user.equals("maclient")&&password!=null&&password.equals("123456")){
			return "success";
		}else{
			return "failed";
		}
	}
}
