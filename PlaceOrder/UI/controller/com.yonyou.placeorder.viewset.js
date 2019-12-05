Type.registerNamespace('com.yonyou.placeorder.viewset');

com.yonyou.placeorder.viewset.settingdialog=function() {
$menu.openDropDownList({
    "controlid" : "imagebutton0",
    "dropDownListWidth" : "150",
    "split-color":"#0080c0",
    "font-size":"15",
    "background":"#FFFFFF",
    "color":"#0080c0",
    "panelstyle":"round-div",
    "dropItemsArray" : [{
        "name" : "登录",
        "action" : "com.yonyou.placeorder.viewset.menu1_click()",
    },{
        "name" : "个人中心",
        "action" : "com.yonyou.placeorder.viewset.menu2_click()",
    },{
        "name" : "常用商品列表",
        "action" : "com.yonyou.placeorder.viewset.menu3_click()",
    },{
        "name" : "MA测试",
        "action" : "com.yonyou.placeorder.viewset.menu4_click()",
    }]
 })

com.yonyou.placeorder.viewset.menu4_click=function(){
$view.open({
    viewid: "com.yonyou.placeorder.MaSet",//目标页面（首字母大写）全名
    isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
})
}

com.yonyou.placeorder.viewset.menu1_click=function(){
$view.open({
    viewid: "com.yonyou.placeorder.Login",//目标页面（首字母大写）全名
    isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
})
}

com.yonyou.placeorder.viewset.menu2_click=function(){
$view.open({
    viewid: "com.yonyou.placeorder.Usercenter",//目标页面（首字母大写）全名
    isKeep: "true"//打开新页面的同时是否保留当前页面，true为保留，false为不保留
})
}

com.yonyou.placeorder.viewset.menu3_click=function(){

}

}