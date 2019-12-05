package com.yonyou.placeorder.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;

/*import com.yonyou.um.log.ILogger;
import com.yonyou.um.log.UMLogger;*///commented by wangkem 

import nc.bs.logging.Log;

public class LoggerUtil {
	public static Log logger=Log.getInstance("poapp");
	public static void debug(String content){
		logger.debug(content);
	}
	public static void debug(Exception e){
		String errdetail=getExceptionStack(e);
		logger.debug("【Error begin】");
		logger.debug(errdetail);
		logger.debug("【Error end】");
	}
	private static String getExceptionStack(Exception e){
		StringWriter sw = new StringWriter();    
		PrintWriter pw = new PrintWriter(sw);    
		e.printStackTrace(pw);  
		return sw.toString();
	}
	
}
