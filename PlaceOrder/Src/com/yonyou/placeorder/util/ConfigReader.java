package com.yonyou.placeorder.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

import com.ufida.iufo.pub.tools.MD5;

public class ConfigReader {
	private static Map<String,String> properties=new HashMap<String,String>();
	public static String getSMSApiUsername(){
		return getPropValue("smsapi_username");
	}
	public static String getSMSApiPassword(){
		String password=getPropValue("smsapi_password");
		String encryptPassword=getPropValue("smsapi_password2");
		if(encryptPassword!=null){
			return encryptPassword;
		}
		if(password==null||password.length()==0){
			return null;
		}
		String md5=MD5.encrypt(password);
		encryptPassword=md5.replace("MD5:", "");
		properties.put("smsapi_password2", encryptPassword);
		return encryptPassword;
	}
	public static String getSMSApiKey(){
		return getPropValue("smsapi_key");
	}
	public static String getAgreementUrl(){
		return getPropValue("agreementurl");
	}
	public static String getSmsFormat(){
		return getPropValue("smsformat");
	}
	public static String getNCUsercode(){
		return getPropValue("ncusercode");
	}
	public static String getNCUserPassword(){
		return getPropValue("ncuserpassword");
	}
	public static int getNumsPerPage(){
		String numsperpage=getPropValue("numsperpage");
		return Integer.parseInt(numsperpage);
	}
	private static void readConfigFile(){
		File nowfile=new File("");
		String abspath=nowfile.getAbsolutePath();
		File file = new File(abspath+"\\conf\\poappcfg.txt");
		Properties props = new Properties();
		FileInputStream fis;
		try {
			fis = new FileInputStream(file);
			props.load(new InputStreamReader(fis,"UTF-8"));//将属性文件流装载到Properties对象中   
			Set<String> pnames=props.stringPropertyNames();
			if(pnames!=null&&pnames.size()>0){
				for(String pname:pnames){
					properties.put(pname, props.getProperty(pname));
				}
			}
		} catch (Exception e) {
			ExceptionUtil4POApp.dealException(e);
		}
	}
	private static String getPropValue(String pname){
		if(pname==null){
			return null;
		}
		//支持重新读取配置文件
		if(!properties.containsKey(pname)){
			readConfigFile();
		}
		if(properties.containsKey(pname)){
			return properties.get(pname);
		}else{
			return null;
		}
	}
}
