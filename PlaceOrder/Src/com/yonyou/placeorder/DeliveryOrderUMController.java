package com.yonyou.placeorder;

import com.yonyou.placeorder.util.ConfigReader;
import com.yonyou.placeorder.util.NCServerCaller;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yyuap.upush.common.json.JSONObject;

import nc.pubitf.bd.poapp.placeorder.ma.IDeliveryOrderService4MA;

public class DeliveryOrderUMController extends AbstractUMController{

	/**
	 * 新增提货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String add(String param) throws Exception{
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_DELIVERYORDER_ADD,param);
		return result;
	}
	
	/**
	 * 修改提货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String update(String param) throws Exception{
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_DELIVERYORDER_UPDATE,param);
		return result;
	}
	
	/**
	 * 取消提货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String invalid(String param) throws Exception{
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_DELIVERYORDER_INVALID,param);
		return result;
	}
	
	/**
	 * 查询提货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String query(String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		paramobj.put("numsperpage", ConfigReader.getNumsPerPage());
		String result=NCServerCaller.callNCService("deliveryOrderService", IDeliveryOrderService4MA.ACTION_DELIVERYORDER_QUERY,paramobj.toString());
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
