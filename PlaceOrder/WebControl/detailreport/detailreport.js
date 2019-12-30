/* by zhuhy */

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
    requestData();

    $('input:radio[name="searchType"]').click(function () {
        var checkValue = $('input:radio[name="searchType"]:checked').val();
        $cache.write("searchType", checkValue);

        if (checkValue == "advanced")
            $js.runjs({ "func": "com$yonyou$placeorder$DetailreportController$goSearch()" })
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
    $js.runjs({ "func": "com$yonyou$placeorder$DetailreportController$requestData()" })
}

// 把json转换成table
function get_contain(result) {
    var html = "";
    var data = eval(result);

    if (!data) {
        alert("抱歉，获取数据出错！");
        return;
    } else if (data.length <= 0) {
        alert("抱歉，暂时没有数据！");
        return;
    }

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


