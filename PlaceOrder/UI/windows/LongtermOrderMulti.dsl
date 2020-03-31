<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="LongtermOrderMultiController" namespace="com.yonyou.placeorder" id="LongtermOrderMulti">  
    <import ref="LongtermOrderMulti.css" type="css"/>  
    <link href="sys/theme.css" type="text/css"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <Scrollview vScrollEnabled="always" width="fill" hScrollEnabled="disabled" id="Scrollview_viewPage0" height="fill"> 
        <div id="viewPage0" onload="this.pageOnload()"> 
            <navigatorbar id="navigatorbar0" title="长期送货单维护" class="navigatorbarclass"> 
                <input onclick="this.button0_onclick()" id="button0" type="button" class="ngbbuttonclass"/> 
            </navigatorbar>  
            <div id="goodsname"> 
                <label id="label0">采购订单号：</label>  
                <div onclick="this.selectOrderOnclick()" id="panel14"> 
                    <label id="lbl_orderno">请选择采购订单</label>  
                    <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_selectorder" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
                </div> 
            </div>  
            <div id="pnl_posimple"> 
                <label id="lbl_posimple">货物--余量</label>  
                <input onclick="this.showDetail()" id="btn_showdetail" type="button" value="+" class="textbtnclass"/> 
            </div>  
            <div id="pnl_podetail"> 
                <div id="panel6"> 
                    <label id="label14">采购订单日期：</label>  
                    <label id="lbl_dbilldate">订单日期</label> 
                </div>  
                <div id="panel4"> 
                    <label id="label6">采购单位：</label>  
                    <label id="lbl_porgname">采购单位</label> 
                </div>  
                <div id="panel7"> 
                    <label id="label10">收货企业：</label>  
                    <label id="lbl_rcvstockorg">收货企业</label> 
                </div>  
                <div id="panel0"> 
                    <label id="label1">供应商：</label>  
                    <label id="lbl_splrname">供应商</label> 
                </div>  
                <div id="panel9"> 
                    <label id="label2">货物：</label>  
                    <label id="lbl_matname">货物</label> 
                </div>  
                <div id="panel3"> 
                    <label id="label7">余量：</label>  
                    <label id="lbl_remainnum" class="textbtnclass">0</label>  
                    <label id="label8">吨</label> 
                </div> 
            </div>  
            <div id="pnl_rcvorder"> 
                <div id="panel15"> 
                    <label id="label18">长期收货单号：</label>  
                    <label id="lbl_rcvordercode">收货单号</label> 
                </div>  
                <div id="panel16"> 
                    <label id="label20">长期收货单日期：</label>  
                    <label id="lbl_rcvorderdate">收货单日期</label> 
                </div>  
				<div id="startdatepanel">
					<label id="startdatelabel">失效日期：</label>
					<input id="denddate" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
				</div>
                <!-- <div id="panel122" onclick="this.changevender()"> 
                    <label id="label32">失效日期：</label>  
                    <div id="panel102"> 
                        <label id="txt_transporter" maxlength="256">请选择运输商</label>  
                        <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_selectTransporter" type="imagebutton" value="图标名称" class="imagebuttonclass" readonly="readonly"/> 
                    </div> 
                </div>  -->
                <div id="panel5"> 
                    <label id="label12">原发净重：</label>  
                    <input min="0.0" max="9.99999999E8" precision="2" roundType="value" onchange="this.yfjzOnchange()" id="num_yfjz" roundValue="5" placeholder="0.00" type="number"/>  
                    <label id="lbl_dw1">单位</label> 
                </div>  
                <div id="panel11"> 
                    <label id="label17">到货量：</label>  
                    <input min="0.0" max="9.99999999E8" precision="2" roundType="value" id="num_dhl" roundValue="5" placeholder="0.00" type="number"/>  
                    <label id="lbl_dw2">单位</label> 
                </div>   
                <div id="panel122" onclick="this.changevender()"> 
                    <label id="label32">运输商：</label>  
                    <div id="panel102"> 
                        <label id="txt_transporter" maxlength="256">请选择运输商</label>  
                        <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_selectTransporter" type="imagebutton" value="" class="imagebuttonclass" readonly="readonly"/> 
                    </div> 
                </div> 
            </div>  
            <div id="panel55"> 
                <label id="label9">车辆信息</label>  
                <div id="vehiclespanel" onclick="changevehicles()"> 
                    <label id="labelvehicles">当前0条信息</label>  
                    <label id="vehicles">编辑</label>  
                    <image id="vehiclesarrow" scaletype="fitcenter" src="arrow.png"/> 
                </div>  
            </div>  
            <div id="panel8"> 
                <input onclick="this.submitOnclick()" id="btn_submit" type="button" value="提交订单" class="textbtnclass"/>  
                <input onclick="this.invalidOnclick()" disabled="disabled" id="btn_invalid" type="button" value="取消订单" class="textbtnclass"/>  
                <input onclick="this.jumpToSharePage()" id="btn_share" type="button" value="二维码转发" class="textbtnclass"/> 
            </div>  
            <div id="pnl_share"> 
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_wechatshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>  
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_qqshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>  
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_msgshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div> 
        </div> 
    </Scrollview> 
</window>
