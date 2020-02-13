/* by zhuhy */

// 页面加载完成后请求表格数据
window.onload = function () {

    // 页面加载请求数据
    requestData();
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    var mestype = $cache.read("mestype");
    switch (mestype) {
        case ("1"):
            $(".title").html("付款后消息提醒");
            break;
        case ("2"):
            $(".title").html("提货后消息提醒");
            break;
        case ("3"):
            $(".title").html("节假日消息提醒");
            break;
        default:
            $(".title").html("");
            break;
    }

    var resultDetail = $ctx.get("resultDetail");

    try {
        $ctx.put("resultDetail", "");
    } catch (e) {
        alert(e);
    }

    if (resultDetail) {
        resultDetail = JSON.parse(resultDetail);
        var data = resultDetail.datas[0];
        if (data) {
            $(".content").html(data.msg);
            $(".date").html(data.billdate);
        } else {
            alert("获取数据出错！code: 01");
            return;
        }
    } else {
        alert("获取数据出错！code: 02");
        return;
    }
}

// 调用位于JSController中的请求表格数据方法
function requestData() {
    $js.runjs({ "func": "com$yonyou$placeorder$InfoDetailController$requestData()" })
}


