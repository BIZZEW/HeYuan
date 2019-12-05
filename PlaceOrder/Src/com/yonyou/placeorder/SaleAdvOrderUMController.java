package com.yonyou.placeorder;

import java.util.HashMap;
import java.util.Map;

import com.yonyou.placeorder.util.ConfigReader;
import com.yonyou.placeorder.util.NCServerCaller;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yyuap.upush.common.json.JSONObject;

import nc.pubitf.bd.poapp.placeorder.ma.IDeliveryOrderService4MA;
import nc.pubitf.bd.poapp.user.ma.IAppUserService4MA;

public class SaleAdvOrderUMController extends AbstractUMController {

	/**
	 * 新增销售预订单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String add(String param) throws Exception{
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_SALEADVORDER_ADD,param);
		return result;
	}
	
	/**
	 * 修改销售预订单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String update(String param) throws Exception{
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_SALEADVORDER_UPDATE,param);
		return result;
	}
	
	/**
	 * 作废销售预订单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String invalid(String param) throws Exception{
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_SALEADVORDER_INVALID,param);
		return result;
	}
	
	/**
	 * 查询销售预订单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String query(String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		paramobj.put("numsperpage", ConfigReader.getNumsPerPage());
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_SALEADVORDER_QUERY,paramobj.toString());
		return result;
	}
	
	/**
	 * 查询销售订单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String querySaleOrder(String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		paramobj.put("numsperpage", ConfigReader.getNumsPerPage());
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_SALEORDER_QUERY,paramobj.toString());
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
