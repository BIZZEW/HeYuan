package com.yonyou.placeorder;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

//import org.eclipse.jetty.util.security.Credential.MD5;//commented by wangkem

import com.yonyou.placeorder.util.ConfigReader;
import com.yonyou.placeorder.util.ExceptionUtil4POApp;
import com.yonyou.placeorder.util.MlrtSMSTools;
import com.yonyou.placeorder.util.NCServerCaller;
import com.yonyou.placeorder.util.ReqResultWrapUtil4POApp;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yyuap.upush.common.json.JSONObject;

import nc.pubitf.bd.poapp.user.ma.IAppUserService4MA;

public class UserUMController extends AbstractUMController {
	
	/**
	 * 登录
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String login(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_LOGIN,param);
		return result;
	}
	/**
	 * 注册
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String register(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_REGISTER,param);
		return result;
	}
	/**
	 * 修改密码
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String changePassword(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_CHANGE_PASSWORD,param);
		return result;
	}
	/**
	 * 修改默认客户
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String changeDefaultCustomer(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_CHANGE_DEFAULT_CUSTOMER,param);
		return result;
	}
	/**
	 * 修改默认供应商
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String changeDefaultSupplier(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_CHANGE_DEFAULT_SUPPLIER,param);
		return result;
	}
	/**
	 * 修改默认组织
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String changeDefaultOrg(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_CHANGE_DEFAULT_ORG,param);
		return result;
	}
	/**
	 * 发送短信验证码
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String smsVerify(String param) throws Exception {
		JSONObject jsonObj = new JSONObject(param);
		String telephone = jsonObj.getString("telephone");
		String verifycode = jsonObj.getString("verifycode");
		try{
			String smsformat=ConfigReader.getSmsFormat();
			if(smsformat==null){
				String errinfo="验证短信格式模板未配置,无法发送短信";
				ExceptionUtil4POApp.throwBusinessException(errinfo);
			}
			if(verifycode==null){
				String errinfo="验码为空,无法发送短信";
				ExceptionUtil4POApp.throwBusinessException(errinfo);
			}
			String content=smsformat.replace("@verifycode@", verifycode);
//			MlrtSMSTools.sendMessage(telephone, content) ;测试阶段先不要真实发信息
			return ReqResultWrapUtil4POApp.wrapResult(null,null, null);
		}catch(Exception e){
			return ReqResultWrapUtil4POApp.wrapResult("1", e.getMessage(), null);
		}
	}

	/**
	 * 获取用户推送消息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getPushInfo(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_GET_PUSHINFO,param);
		return result;
	}
	
	/**
	 * 获取用户详细消息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getUserInfo(String param) throws Exception {
		String result=NCServerCaller.callNCService("appUserService", IAppUserService4MA.ACTION_GET_USERINFO,param);
		return result;
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
