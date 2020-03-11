/* by zhuhy */

// 页面加载完成后请求表格数据
window.onload = function () {
    initPage();

    // 页面加载请求数据
    requestData();
}

var infolist = null;

function initPage() {
    infolist = new Vue({
        el: '#infoList',
        data: {
            items: []
        },
        methods: {
            goDetail: function (index) {
                var billno = this.items[index].billno;
                $cache.write("currbillno", billno);
                $js.runjs({ "func": "com$yonyou$placeorder$InfoListController$goDetail()" });
            }
        }
    })
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    var mestype = $param.getString("mestype");

    var resultList = $ctx.get("resultList" + mestype);
    // alert("resultList" + mestype + " 的原始数据： " + resultList);

    if (resultList) {
        resultList = JSON.parse(resultList);
        var datas = resultList.datas;
        if (datas) {
            infolist.items = datas;
        } else {
            alert(resultList.errinfo ? resultList.errinfo : "获取数据出错！code: 01");
            return;
        }
    } else {
        alert("获取数据出错！code: 02");
        return;
    }
}

// 调用位于JSController中的请求表格数据方法
function requestData() {
    $js.runjs({ "func": "com$yonyou$placeorder$InfoListController$requestData()" });
}

