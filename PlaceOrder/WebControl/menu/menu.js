/*by zhuhy*/
window.onload = function () {
    initPage();
    // initModules();
    // initSlider();
}

var vue = null;

function initPage() {
    // 构造控件Vue实例
    vue = new Vue({
        el: '#index',
        data: {
            modules: [],
            // touchStatus: 0,
            usrname: "",
        },
        methods: {
            // tapHold: function (index) {
            //     this.touchStatus = 1;
            // },
            // moveTapHold: function (index) {
            //     this.touchStatus = 0;
            // },
            // cancelTapHold: function (index) {
            //     var item = this.modules[index];
            //     // 取消长按
            //     if (this.touchStatus)
            //         $js.runjs({ "func": "com$yonyou$placeorder$HomePageNewController$" + item["module_id"] + "()" });
            //     this.touchStatus = 0;
            // },
            goModule: function (index) {
                var item = this.modules[index];
                $js.runjs({ "func": "com$yonyou$placeorder$HomePageNewController$" + item["module_id"] + "()" });
            },
        }
    });
}

function initModules() {
    var allList = [{
        "module_title": "车辆下单",
        "module_id": "addseleorder_onclick",
    }, {
        "module_title": "订单查询",
        "module_id": "myseles",
    }, {
        "module_title": "余额查询",
        "module_id": "creditonclick",
    }, {
        "module_title": "统计报表",
        "module_id": "report_onclick",
    }, {
        "module_title": "提货单查询",
        "module_id": "mypickups",
    }, {
        "module_title": "消息中心",
        "module_id": "goNotif",
    }, {
        "module_title": "新增送货单",
        "module_id": "myposts",
    }, {
        "module_title": "送货单查询",
        "module_id": "deliverydetailclick",
    }, {
        "module_title": "新增长期送货单",
        "module_id": "longtermclick",
    }, {
        "module_title": "长期送货单查询",
        "module_id": "longtermclickquery",
    }];

    var user = JSON.parse($ctx.getApp("appuser"));

    if (user.dfltcstm == undefined || user.dfltcstm == null)
        allList.splice(0, 6);

    if (user.dfltsupplier == undefined || user.dfltsupplier == null)
        allList.splice(6, 4);

    vue.modules = allList;
}

function initSlider() {
    var imgPath = "https://raw.githubusercontent.com/BIZZEW/rnbupdate/master/banner/";
    var list = [{
        content: imgPath + "receive/bg1.jpg"
    }, {
        content: imgPath + "receive/bg2.jpg"
    }, {
        content: imgPath + "receive/bg3.jpg"
    }, {
        content: imgPath + "receive/bg4.jpg"
    }, {
        content: imgPath + "receive/bg5.jpg"
    }, {
        content: imgPath + "receive/bg6.jpg"
    }];
    var islider = new iSlider({
        type: 'pic',
        data: list,
        dom: document.getElementById("iSlider-wrapper"),
        isLooping: true,
        animateType: 'default',
        animateEasing: 'ease-in-out',
        isAutoplay: true,
        animateTime: 800
    });
}

function initFunk() {
    vue.usrname = $cache.read("telephone");

    initModules();

    initSlider();
}