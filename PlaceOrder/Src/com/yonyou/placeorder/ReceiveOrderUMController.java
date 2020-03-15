package com.yonyou.placeorder;

import com.yonyou.placeorder.util.ConfigReader;
import com.yonyou.placeorder.util.NCServerCaller;
import com.yonyou.uap.um.controller.AbstractUMController;
import com.yyuap.upush.common.json.JSONObject;

import nc.pubitf.bd.poapp.placeorder.ma.IReceiveOrderService4MA;
import nc.pubitf.bd.poapp.user.ma.IAppUserService4MA;

public class ReceiveOrderUMController extends AbstractUMController {

	/**
	 * 查询采购订单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String queryPurchaseOrder(String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		paramobj.put("numsperpage", ConfigReader.getNumsPerPage());
		String result=NCServerCaller.callNCService("receiveOrderService", IReceiveOrderService4MA.ACTION_PURCHASEORDER_QUERY,paramobj.toString());
		return result;
	}
	/**
	 * 新增收货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String add(String param) throws Exception{
		String result=NCServerCaller.callNCService("receiveOrderService", IReceiveOrderService4MA.ACTION_REVEICEORDER_ADD,param);
		return result;
	}
	
	/**
	 * 修改收货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String update(String param) throws Exception{
		String result=NCServerCaller.callNCService("receiveOrderService", IReceiveOrderService4MA.ACTION_REVEICEORDER_UPDATE,param);
		return result;
	}
	
	/**
	 * 取消收货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String invalid(String param) throws Exception{
		String result=NCServerCaller.callNCService("receiveOrderService", IReceiveOrderService4MA.ACTION_REVEICEORDER_INVALID,param);
		return result;
	}
	
	/**
	 * 查询收货通知单
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public String query(String param) throws Exception{
		JSONObject paramobj=new JSONObject(param);
		paramobj.put("numsperpage", ConfigReader.getNumsPerPage());
		String result=NCServerCaller.callNCService("receiveOrderService", IReceiveOrderService4MA.ACTION_REVEICEORDER_QUERY,paramobj.toString());
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
