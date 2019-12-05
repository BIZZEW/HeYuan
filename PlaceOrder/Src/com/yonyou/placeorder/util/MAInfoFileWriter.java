package com.yonyou.placeorder.util;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class MAInfoFileWriter {
	public static void write2file(String content){
		File nowfile=new File("");
		String abspath=nowfile.getAbsolutePath();
		File file = new File(abspath+"\\nclogs\\poapplog.txt");
		FileWriter fw=null;
		PrintWriter writer=null;
		try {
			fw = new FileWriter(file, true);
			writer=new PrintWriter(fw);
			writer.write(content);
			writer.write("\n");
			writer.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			if(writer!=null){
				writer.close();
			}
			if(fw!=null){
				try {
					fw.close();
				} catch (IOException e) {
					// TODO 自动生成的 catch 块
					e.printStackTrace();
				}
			}
		}
	}
}
