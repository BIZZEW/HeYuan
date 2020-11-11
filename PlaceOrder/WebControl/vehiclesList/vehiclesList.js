/* by zhuhy */

// 页面加载完成后请求表格数据
window.onload = function () {
    initPage();
}

var vehicleslist = null;

function initPage() {
    vehicleslist = new Vue({
        el: '#vehiclesList',
        data: {
            items: []
        },
        methods: {
            goDetail: function (index) {
                $cache.write("index", index + "");
                $js.runjs({ "func": "com$yonyou$placeorder$VehiclesListController$goDetail('" + index + "')" });
            },
            confirm: function (index) {
                $view.close({
                    "resultcode": "15",
                    "vehicleslist": JSON.stringify(vehicleslist.items),
                });
            },
            deleteItem: function (index) {
                vehicleslist.items.splice(index, 1);
                $cache.write("vehicleslist", JSON.stringify(vehicleslist.items));
                $js.runjs({ "func": "com$yonyou$placeorder$VehiclesListController$updateDetail()" });
            }
        }
    })
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    var list = $param.getString("vehicleslist");
    list = eval(list);

    if (list)
        vehicleslist.items = list;
    else {
        alert("获取数据出错！code: 02");
        return;
    }
}

function reloadData() {
    var list = $param.getString("returnvehicleslist");
    list = eval(list);

    if (list)
        vehicleslist.items = list;
    else {
        alert("获取数据出错！code: 02");
        return;
    }
}
