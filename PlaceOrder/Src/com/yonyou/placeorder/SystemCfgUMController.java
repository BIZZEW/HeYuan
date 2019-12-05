package com.yonyou.placeorder;

import com.yonyou.placeorder.util.ConfigReader;
import com.yonyou.placeorder.util.ReqResultWrapUtil4POApp;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yyuap.upush.common.json.JSONObject;

public class SystemCfgUMController extends AbstractUMController{

	/**
	 * 获取用户协议网页地址
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getAgreementUrl(String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		String cpname=paramobj.getString("cpname");
		if("agreementurl".equals(cpname)){
			String agreementurl=ConfigReader.getAgreementUrl();
			if(agreementurl!=null){
				JSONObject resultobj=new JSONObject();
				resultobj.put("agreementurl", agreementurl);
				return ReqResultWrapUtil4POApp.wrapResult(null, null, resultobj);
			}else{
				String errinfo="查不到用户协议网页地址";
				return ReqResultWrapUtil4POApp.wrapResult("1", errinfo, null);
			}
		}else{
			String errinfo="请求参数错误";
			return ReqResultWrapUtil4POApp.wrapResult("1", errinfo, null);
		}
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
