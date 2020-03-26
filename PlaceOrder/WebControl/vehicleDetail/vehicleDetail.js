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
            platenum: "",
            driver: "",
            phone: "",
            id: "",
            amount: 0,
        },
        methods: {
            submit: function () {
                var currentVehicle = {
                    platenum: vehicledetail.platenum,
                    driver: vehicledetail.driver,
                    phone: vehicledetail.phone,
                    id: vehicledetail.id,
                    amount: parseInt(vehicledetail.amount),
                };

                $cache.write("currentVehicle", JSON.stringify(currentVehicle));
                $js.runjs({ "func": "com$yonyou$placeorder$VehicleDetailController$confirm()" });
            }
        }
    })
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    var vehicleslistmp = $param.getString("vehicleslist");
    var vehicleslist = [];
    if (vehicleslistmp)
        vehicleslist = eval(vehicleslistmp);

    var indextmp = $cache.read("index");
    if (indextmp)
        vehicledetail.index = parseInt(indextmp);

    if (vehicledetail.index >= 0 && vehicleslist[vehicledetail.index]) {
        vehicledetail.platenum = vehicleslist[vehicledetail.index].platenum;
        vehicledetail.driver = vehicleslist[vehicledetail.index].driver;
        vehicledetail.phone = vehicleslist[vehicledetail.index].phone;
        vehicledetail.id = vehicleslist[vehicledetail.index].id;
        vehicledetail.amount = vehicleslist[vehicledetail.index].amount;
    }
}


