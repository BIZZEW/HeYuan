package com.yonyou.placeorder.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Properties;

//import org.eclipse.jetty.util.security.Credential.MD5;//commented by wangkem

import com.yonyou.uap.um.controller.AbstractUMController;
import com.yyuap.upush.common.json.JSONException;
import com.yyuap.upush.common.json.JSONObject;

/**
 * 美联软通短信发送平台工具类
 * @author honglg
 */
public class MlrtSMSTools{
	private static final String DEFAULT_CONNECT_TIMEOUT="30000";
	private static final String DEFAULT_READ_TIMEOUT="30000";
	private static final String DEFAULT_ENCODE_TYPE="UTF-8";
	public static String sendMessage(String telephone,String content) throws Exception{
		if(telephone==null||content==null||telephone.length()==0||content.length()==0){
			String errinfo="发送短信时手机号和内容不能为空";
			ExceptionUtil4POApp.throwBusinessException(errinfo);
		}
		//连接超时及读取超时设置
		System.setProperty("sun.net.client.defaultConnectTimeout", DEFAULT_CONNECT_TIMEOUT);
		System.setProperty("sun.net.client.defaultReadTimeout", DEFAULT_READ_TIMEOUT);
		//对短信内容做Urlencode编码操作
		String contentUrlEncode = URLEncoder.encode(content,DEFAULT_ENCODE_TYPE);  
		//获取短信平台用户参数信息
		String username=ConfigReader.getSMSApiUsername();
		String password=ConfigReader.getSMSApiPassword();
		String apikey=ConfigReader.getSMSApiKey();
		//组装发送请求参数内容
		StringBuffer buffer = new StringBuffer();
		buffer.append("http://m.5c.com.cn/api/send/index.php?"
				+"username="+username
				+"&password_md5="+password
				+"&mobile="+telephone
				+"&apikey="+apikey
				+"&content="+contentUrlEncode
				+"&encode="+DEFAULT_ENCODE_TYPE);
		//发送请求并获取结果
		URL url = new URL(buffer.toString());
		HttpURLConnection connection = (HttpURLConnection)url.openConnection();
		connection.setRequestMethod("POST");
		connection.setRequestProperty("Connection", "Keep-Alive");
		BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
		String result = reader.readLine();
		if(result.startsWith("error:")){
			String errinfo=result.substring(6);
			ExceptionUtil4POApp.throwBusinessException(errinfo);
		}
		return result;
	}
}
