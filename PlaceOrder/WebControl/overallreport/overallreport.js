/* by zhuhy */

// 模拟页面查询数据
var source = '{{"散装测试","散装测试客户","600.00000000","38.65000000","600.00000000","072201","2019-07-24 10:26:57","2019-07-24 10:27:08","2019-07-22 16:08:26","XJY2019072200006618"},{"散装测试1","散装测试客户","601.00000000","39.65000000","601.00000000","072202","2019-07-25 10:26:57","2019-07-26 10:27:08","2019-07-23 16:08:26","XJY2019072200006619"}}';

// function formatJson(ary) {
//     var result = [];
//     var keys = ary[0];

//     for (var i = 1; i < ary.length; i++) {

//         var obj = {};
//         var vals = ary[i];
//         for (var j = 0; j < vals.length; j++) {
//             obj[keys[j]] = vals[j];
//         }
//         result.push(obj);
//     }

//     return result;
// }

// 页面加载完成后请求表格数据
window.onload = function () {
    $cache.write("searchType", "currentday");

    // 页面加载请求数据
    // requestData();

    $('input:radio[name="searchType"]').click(function () {
        var checkValue = $('input:radio[name="searchType"]:checked').val();
        $cache.write("searchType", checkValue);

        if (checkValue == "advanced") {
            // 如果点击的是高级查询则跳转到对应的页面
            $view.open({
                viewid: "com.yonyou.placeorder.ReportSearch",
                isKeep: "true"
            })
        }
        else
            requestData();
    });
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    var result = $ctx.get("result");
    if (result) {
        result = JSON.parse(result);
        var datas = result.datas;
        if (datas) {
            var tranformedData = datas.replace(/\{/g, "[").replace(/\}/g, "]");
            // alert("转换后数据： " + tranformedData);
            $("#reportTable").html(get_contain(tranformedData));
        } else {
            alert("获取数据出错！");
            return;
        }
    } else {
        alert("获取数据出错！");
        return;
    }
}

// 调用位于JSController中的请求表格数据方法
function requestData() {
    $js.runjs({ "func": "com$yonyou$placeorder$OverallreportController$requestData()" })
}

// 把json转换成table
function get_contain(result) {
    var html = "";
    var data = eval(result);
    try {
        $.each(data, function (index, item) {
            if (index === 0) {
                html += "<thead><tr>";
                $.each(item, function (vlaIndex, valItem) {
                    html += "<th><div class='heading'>";
                    html += (valItem + "");
                    html += "</div></th>";
                });
                html += "</tr></thead><tbody>";
            } else {
                html += (index % 2 == 0) ? "<tr class='sub'>" : "<tr>";
                $.each(item, function (vlaIndex, valItem) {
                    html += (vlaIndex % 2 == 0) ? "<td class='current'>" : "<td>";
                    html += (valItem + "");
                    html += "</td>";
                });
                html += "</tr>";
            }
        });
        html += "</tbody>";
    } catch (e) { alert(e); }

    return html;
}


