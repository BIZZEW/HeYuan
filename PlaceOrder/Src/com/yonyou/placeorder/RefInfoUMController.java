package com.yonyou.placeorder;

import com.yonyou.placeorder.util.ConfigReader;
import com.yonyou.placeorder.util.NCServerCaller;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yyuap.upush.common.json.JSONObject;

import nc.pubitf.bd.poapp.ma.IRefInfoService4MA;
import nc.pubitf.bd.poapp.user.ma.IAppUserService4MA;

public class RefInfoUMController extends AbstractUMController {

	/**
	 * 获取客户参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getCstmRefInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_CUSTOMER, param);
	}
	
	/**
	 * 获取当前用户的客户参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getCurUserCstmRefInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_CURUSER_CUSTOMER, param);
	}
	
	/**
	 * 获取供应商参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getSplrRefInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_SUPPLIER, param);
	}
	
	/**
	 * 获取当前用户的供应商参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getCurUserSplrRefInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_CURUSER_SUPPLIER, param);
	}
	
	/**
	 * 获取销售组织参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getSaleOrgRefInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_SALE_ORG, param);
	}
	
	/**
	 * 获取采购组织参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getBuyOrgRefInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_BUY_ORG, param);
	}
	
	/**
	 * 获取库存组织参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getStockOrgRefInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_STOCK_ORG, param);
	}
	
	/**
	 * 获取可售商品参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getAvailGoodsInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_AVAILGOODS, param);
	}
	
	/**
	 * 获取当前客户车辆档案参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getCurUserVehicleInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_CURUSER_VEHICLE, param);
	}
	
	/**
	 * 获取车辆对应司机档案参照信息
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String getVehicleDriverInfo(String param) throws Exception {
		return this.getRefInfo(IRefInfoService4MA.REFINFO_VEHICLE_DRIVER, param);
	}
	
	private String getRefInfo(int actontype,String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		paramobj.put("numsperpage", ConfigReader.getNumsPerPage());
		String result=NCServerCaller.callNCService("refInfoService", actontype,paramobj.toString());
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
