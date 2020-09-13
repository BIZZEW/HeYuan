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
            platenum: "",
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
    var allList = [];
    var user = JSON.parse($ctx.getApp("appuser"));

    if (user.hasOwnProperty("vehicle") && user.vehicle != undefined && user.vehicle != null) {
        // 司机
        if (user.hasOwnProperty("vehiclesaleorg") && user.vehiclesaleorg != undefined && user.vehiclesaleorg != null) {
            allList = allList.concat(
                // 司机销售 
                {
                    "module_title": "司机提货",
                    "module_id": "driver_pickup",
                },
                {
                    "module_title": "调拨出库",
                    "module_id": "allotout",
                }
            )
        }
        if (user.hasOwnProperty("vehiclebuyorg") && user.vehiclebuyorg != undefined && user.vehiclebuyorg != null) {
            allList = allList.concat(
                // 司机采购
                {
                    "module_title": "司机送货",
                    "module_id": "driver_deliver",
                },
                {
                    "module_title": "调拨入库",
                    "module_id": "allotin",
                }
            )
        }
    }

    if (user.hasOwnProperty("dfltcstm") && user.dfltcstm != undefined && user.dfltcstm != null) {
        allList = allList.concat(
            // 销售
            {
                "module_title": "车辆下单",
                "module_id": "addseleorder_onclick",
            },
            {
                "module_title": "长期销售订单",
                "module_id": "addlongtermsale_onclick",
            },
            {
                "module_title": "订单查询",
                "module_id": "myseles",
            },
            {
                "module_title": "余额查询",
                "module_id": "creditonclick",
            },
            {
                "module_title": "大票提货通知单",
                "module_id": "addhugepickups_onclick",
            },
            {
                "module_title": "提货单查询",
                "module_id": "mypickups",
            },
            {
                "module_title": "统计报表",
                "module_id": "report_onclick",
            },
            {
                "module_title": "消息中心",
                "module_id": "goNotif",
            }
        )
    }

    if (user.hasOwnProperty("dfltsupplier") && user.dfltsupplier != undefined && user.dfltsupplier != null) {
        allList = allList.concat(
            // 采购
            {
                "module_title": "新增送货单",
                "module_id": "myposts",
            },
            {
                "module_title": "送货单查询",
                "module_id": "deliverydetailclick",
            },
            {
                "module_title": "新增长期送货单",
                "module_id": "longtermclick",
            },
            {
                "module_title": "长期送货单查询",
                "module_id": "longtermclickquery",
            }
        )
    }

    if (user.hasOwnProperty("allot") && user.allot != undefined && user.allot != null) {
        allList = allList.concat(
            // 调拨
            {
                "module_title": "调拨订单查询",
                "module_id": "myallot",
            },
            {
                "module_title": "调拨通知单维护",
                "module_id": "addallot_onclick",
            },
            {
                "module_title": "长期调拨通知单维护",
                "module_id": "addlongallot_onclick",
            },
            {
                "module_title": "调拨通知单查询",
                "module_id": "allotsearch_onclick",
            }
        )
    }



    // if (user.vehicle == undefined || user.vehicle == null) {
    //     // 不是司机
    //     allList = [
    //         // 销售
    //         {
    //             "module_title": "车辆下单",
    //             "module_id": "addseleorder_onclick",
    //         }, {
    //             "module_title": "长期销售订单",
    //             "module_id": "addlongtermsale_onclick",
    //         }, {
    //             "module_title": "订单查询",
    //             "module_id": "myseles",
    //         }, {
    //             "module_title": "余额查询",
    //             "module_id": "creditonclick",
    //         }, {
    //             "module_title": "调拨订单查询",
    //             "module_id": "myallot",
    //         }, {
    //             "module_title": "调拨通知单维护",
    //             "module_id": "addallot_onclick",
    //         }, {
    //             "module_title": "长期调拨通知单维护",
    //             "module_id": "addlongallot_onclick",
    //         }, {
    //             "module_title": "调拨通知单查询",
    //             "module_id": "allotsearch_onclick",
    //         }, {
    //             "module_title": "大票提货通知单",
    //             "module_id": "addhugepickups_onclick",
    //         }, {
    //             "module_title": "提货单查询",
    //             "module_id": "mypickups",
    //         }, {
    //             "module_title": "统计报表",
    //             "module_id": "report_onclick",
    //         }, {
    //             "module_title": "消息中心",
    //             "module_id": "goNotif",
    //         },


    //         // 采购
    //         {
    //             "module_title": "新增送货单",
    //             "module_id": "myposts",
    //         }, {
    //             "module_title": "送货单查询",
    //             "module_id": "deliverydetailclick",
    //         }, {
    //             "module_title": "新增长期送货单",
    //             "module_id": "longtermclick",
    //         }, {
    //             "module_title": "长期送货单查询",
    //             "module_id": "longtermclickquery",
    //         }
    //     ];

    //     if (user.dfltcstm == undefined || user.dfltcstm == null)
    //         allList.splice(0, 12);
    //     if (user.dfltsupplier == undefined || user.dfltsupplier == null)
    //         allList.splice(12, 4);
    // } else {
    //     // 是司机
    //     allList = [
    //         // 销售 
    //         {
    //             "module_title": "司机提货",
    //             "module_id": "driver_pickup",
    //         },
    //         {
    //             "module_title": "调拨出库",
    //             "module_id": "allotout",
    //         },

    //         //采购
    //         {
    //             "module_title": "司机送货",
    //             "module_id": "driver_deliver",
    //         },
    //         {
    //             "module_title": "调拨入库",
    //             "module_id": "allotin",
    //         }
    //     ];

    //     // alert(JSON.stringify(user))

    //     if ((user.vehiclesaleorg == undefined || user.vehiclesaleorg == null) && (user.vehiclebuyorg == undefined || user.vehiclebuyorg == null))
    //         allList = []
    //     else {
    //         if (user.vehiclesaleorg == undefined || user.vehiclesaleorg == null)
    //             allList.splice(0, 2);
    //         if (user.vehiclebuyorg == undefined || user.vehiclebuyorg == null)
    //             allList.splice(2, 2);
    //     }
    // }

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
    var user = JSON.parse($ctx.getApp("appuser"));

    if (user.vehicle)
        vue.platenum = user.vehicle;

    vue.usrname = $cache.read("telephone");

    initModules();

    initSlider();
}