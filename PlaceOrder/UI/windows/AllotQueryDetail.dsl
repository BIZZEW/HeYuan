<?xml version="1.0" encoding="UTF-8"?>

<window xmlns:web="http://www.yonyou.com/uapmobile/dsl" controller="AllotQueryDetailController" namespace="com.yonyou.placeorder" id="AllotQueryDetail">  
    <import ref="AllotQueryDetail.css" type="css"/>  
    <link href="sys/theme.css" type="text/css"/>  
    <script src="#{path.controller}/common/global.js" type="text/javascript"/>  
    <script src="#{path.controller}/common/sqliteutil.js" type="text/javascript"/>  
    <Scrollview vScrollEnabled="always" width="fill" hScrollEnabled="disabled" id="Scrollview_viewPage0" height="fill"> 
        <div id="viewPage0" onload="this.pageOnload()"> 
            <navigatorbar id="navigatorbar0" title="调拨通知单维护" class="navigatorbarclass"> 
                <input onclick="this.button0_onclick()" id="back" type="button" class="ngbbuttonclass"/> 
            </navigatorbar>  
            <div id="goodsname"> 
                <label id="label0">调拨订单号：</label>  
                <div id="panel14"> 
                    <label id="lbl_orderno">调拨订单</label>  
                    <!-- <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_selectorder" type="imagebutton" value="图标名称" class="imagebuttonclass"/>  -->
                </div> 
            </div>  
            <div id="pnl_posimple"> 
                <label id="lbl_posimple">货物--余量</label>  
                <input onclick="this.showDetail()" id="btn_showdetail" type="button" value="+" class="textbtnclass"/> 
            </div>  
            <div id="pnl_podetail"> 
                <div id="panel41"> 
                    <label id="label61">调出库存组织：</label>  
                    <label id="outorg">调出库存组织</label> 
                </div>  
                <div id="panel42"> 
                    <label id="label62">调入库存组织：</label>  
                    <label id="inorg">调入库存组织</label> 
                </div>  
                <div id="panel43"> 
                    <label id="label63">调出仓库：</label>  
                    <label id="outwh">调出仓库</label> 
                </div>  
                <div id="panel44"> 
                    <label id="label64">调入仓库：</label>  
                    <label id="inwh">调入仓库</label> 
                </div> 


                <div id="panel6"> 
                    <label id="label14">调拨订单日期：</label>  
                    <label id="lbl_dbilldate">订单日期</label> 
                </div>  

                <div id="panel9"> 
                    <label id="label2">货物：</label>  
                    <label id="lbl_matname">货物</label> 
                </div>

                <div id="panel32"> 
                    <label id="label72">数量：</label>  
                    <label id="lbl_num" class="textbtnclass">0</label>  
                    <label id="label82">吨</label> 
                </div>

                <div id="panel3"> 
                    <label id="label7">余量：</label>  
                    <label id="lbl_remainnum" class="textbtnclass">0</label>  
                    <label id="label8">吨</label> 
                </div> 

                <div id="panel33"> 
                    <label id="label73">调出数量：</label>  
                    <label id="lbl_outnum" class="textbtnclass">0</label>  
                    <label id="label83">吨</label> 
                </div>

                <div id="panel34"> 
                    <label id="label74">调入数量：</label>  
                    <label id="lbl_innum" class="textbtnclass">0</label>  
                    <label id="label84">吨</label> 
                </div>
            </div>  


            <div id="pnl_rcvorder"> 
                <div id="panel161"> 
                    <label id="label201">调拨通知单号：</label>  
                    <label id="noticecode">调拨通知单号</label> 
                </div>  
                <div id="panel162"> 
                    <label id="label202">调拨类型：</label>  
                    <label id="transtype">调拨类型</label> 
                </div>  
                <div id="panel16"> 
                    <label id="label20">调拨日期：</label>  
                    <label id="lbl_rcvorderdate">调拨日期</label> 
                </div>  
				<div id="startdatepanel">
					<label id="startdatelabel">失效日期：</label>
					<input id="denddate" placeholder="2016-12-09" format="yyyy-MM-dd" type="date"/> 
				</div>
                <div id="panel11"> 
                    <label id="label17">调拨数量：</label>  
                    <input min="0.0" max="9.99999999E8" precision="2" roundType="value" id="num_dhl" roundValue="5" placeholder="0.00" type="number"/>  
                    <label id="lbl_dw2">吨</label> 
                </div>   
            </div>  
            
            <div id="panel2"> 
                <label id="label5">车牌号码：</label>  
                <label onclick="this.fmtvlicenseOnclick()" id="lbl_fmtvlicense">点击输入车号</label>  
                <input onclick="this.showFreeLicense()" id="btn_freelicense" type="button" value="自定义" class="textbtnclass"/>  
                <input imagebuttontype="icon" istogglebutton="false" onclick="this.goselectcar()" checked="false" id="img_goselectcar" type="imagebutton" class="imagebuttonclass"/> 
            </div>  
            <input maxlength="256" id="txt_vlicense" placeholder="请输入车牌号" type="text"/>  
            <div id="panel1"> 
                <label id="label3">司机姓名：</label>  
                <div id="panel10"> 
                    <input maxlength="256" id="txt_drivername" placeholder="司机姓名" type="text"/>  
                    <input imagebuttontype="icon" istogglebutton="false" onclick="this.selectDriver()" checked="false" id="imgbtn_selectDriver" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
                </div> 
            </div>  
            <div id="panel12"> 
                <label id="label11">手机号：</label>  
                <input maxlength="11" id="txt_drivertelephone" placeholder="手机号" type="text"/> 
            </div>  
            <div id="panel13"> 
                <label id="label16">身份证号：</label>  
                <input maxlength="18" id="txt_driverid" placeholder="身份证号" type="text"/> 
            </div> 

            
            <div id="panel8"> 
                <input onclick="this.submitOnclick()" disabled="disabled" id="btn_submit" type="button" value="提交订单" class="textbtnclass"/>  
                <input onclick="this.invalidOnclick()" disabled="disabled" id="btn_invalid" type="button" value="取消订单" class="textbtnclass"/>  
                <!-- <input onclick="this.jumpToSharePage()" id="btn_share" type="button" value="二维码转发" class="textbtnclass"/>  -->
            </div>  
            <div id="pnl_share"> 
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_wechatshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>  
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_qqshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/>  
                <input imagebuttontype="icon" istogglebutton="false" checked="false" id="imgbtn_msgshare" type="imagebutton" value="图标名称" class="imagebuttonclass"/> 
            </div> 
        </div> 
    </Scrollview> 
</window>
