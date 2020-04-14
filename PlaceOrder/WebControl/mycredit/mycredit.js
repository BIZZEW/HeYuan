/* by zhuhy */

// 页面加载完成后请求表格数据
window.onload = function () {
    initPage();

    // 页面加载请求数据
    // requestData();
}

var infolist = null;

function initPage() {
    infolist = new Vue({
        el: '#infoList',
        data: {
            items: []
        }
    })
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    var ret = $param.getJSONObject("result");
    if (ret) {
        var datas = ret.datas;
        infolist.items = datas
    }
}

