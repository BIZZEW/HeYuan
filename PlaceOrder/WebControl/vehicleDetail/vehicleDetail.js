/* by zhuhy */

// 页面加载完成后请求表格数据
window.onload = function () {
    initPage();
}

var vehicledetail = null;

function initPage() {
    vehicledetail = new Vue({
        el: '#vehicleDetail',
        data: {
            index: 0,
            vlicense: "",
            drivername: "",
            drivertelephone: "",
            driveridcode: "",
            amount: "",
            inputStatus: true,
        },
        methods: {
            submit: function () {
                var currentVehicle = {
                    vlicense: vehicledetail.vlicense,
                    drivername: vehicledetail.drivername,
                    drivertelephone: vehicledetail.drivertelephone,
                    driveridcode: vehicledetail.driveridcode,
                    amount: parseInt(vehicledetail.amount),
                };

                $cache.write("currentVehicle", JSON.stringify(currentVehicle));
                $js.runjs({ "func": "com$yonyou$placeorder$VehicleDetailController$confirm()" });
            }
        }
    });

    // var winHeight = $(window).height();
    // //获取当前页面高度
    // $(window).resize(function () {
    //     var thisHeight = $(this).height();
    //     if (winHeight - thisHeight > 50) {
    //         //当软键盘弹出，在这里面操作
    //         vehicledetail.inputStatus = 1;
    //     } else {
    //         //当软键盘收起，在此处操作
    //         vehicledetail.inputStatus = 0;
    //     }
    // });

    var u = navigator.userAgent; //获取到的是个字符串，包括很多信息，我只匹配我想要的信息
    var isAnd = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //判断是安卓手机
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //判断是苹果手机
    if (isAnd) {
        var oh = document.documentElement.clientHeight || document.body.clientHeight; //获取变化之前的可视区域的高度
        window.addEventListener("resize", function () {
            //resize事件，这里有个小坑，当绑定多个事件是后面的会覆盖前面的事件
            //所以我是用addEventListener，绑定多个事件
            var rh = document.documentElement.clientHeight || document.body.clientHeight;//变化之后的高度
            if (rh < oh) {
                //软键盘弹出
                vehicledetail.inputStatus = false;
            } else {
                //软键盘收起
                vehicledetail.inputStatus = true;
            }
        })
    }
    //苹果中不会触发resize，但是可以用focusin/focusout
    if (isIOS) {
        document.body.addEventListener("focusin", function () {
            //软键盘弹出
            vehicledetail.inputStatus = false;
        });
        document.body.addEventListener("focusout", function () {
            //软键盘收起
            vehicledetail.inputStatus = true;
        })
    }
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    var vehicleslistmp = $param.getString("vehicleslist");
    var vehicleslist = [];
    if (vehicleslistmp)
        vehicleslist = eval(vehicleslistmp);

    vehicledetail.index = parseInt($cache.read("index"));

    if (vehicledetail.index >= 0 && vehicleslist[vehicledetail.index]) {
        vehicledetail.vlicense = vehicleslist[vehicledetail.index].vlicense;
        vehicledetail.drivername = vehicleslist[vehicledetail.index].drivername;
        vehicledetail.drivertelephone = vehicleslist[vehicledetail.index].drivertelephone;
        vehicledetail.driveridcode = vehicleslist[vehicledetail.index].driveridcode;
        vehicledetail.amount = vehicleslist[vehicledetail.index].amount;
    }
}


