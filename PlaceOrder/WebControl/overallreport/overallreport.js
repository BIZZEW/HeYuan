/* by zhuhy */

// 模拟页面查询数据
var source = [
    ['序号', '客户', '商品', '单价', '数量', '金额'],
    ['0', '特朗普', '歼50', 200, 200, 40000],
    ['1', '马克龙', '东风2000', 50, 30, 1500],
    ['2', '普京', '辽宁号', 2, 1000, 2000],
    ['3', '特朗普', '歼50', 200, 200, 40000],
    ['4', '马克龙', '东风2000', 50, 30, 1500],
    ['5', '普京', '辽宁号', 2, 1000, 2000],
    ['6', '特朗普', '歼50', 200, 200, 40000],
    ['7', '马克龙', '东风2000', 50, 30, 1500],
    ['8', '普京', '辽宁号', 2, 1000, 2000],
    ['9', '特朗普', '歼50', 200, 200, 40000],
    ['10', '马克龙', '东风2000', 50, 30, 1500],
    ['11', '普京', '辽宁号', 2, 1000, 2000],
    ['12', '特朗普', '歼50', 200, 200, 40000],
    ['13', '马克龙', '东风2000', 50, 30, 1500],
    ['14', '普京', '辽宁号', 2, 1000, 2000],
    ['15', '特朗普', '歼50', 200, 200, 40000],
    ['16', '马克龙', '东风2000', 50, 30, 1500],
    ['17', '普京', '辽宁号', 2, 1000, 2000],
    ['18', '特朗普', '歼50', 200, 200, 40000],
    ['19', '马克龙', '东风2000', 50, 30, 1500],
    ['20', '普京', '辽宁号', 2, 1000, 2000],
    ['21', '特朗普', '歼50', 200, 200, 40000],
    ['22', '马克龙', '东风2000', 50, 30, 1500],
    ['23', '普京', '辽宁号', 2, 1000, 2000],
    ['24', '特朗普', '歼50', 200, 200, 40000],
    ['25', '马克龙', '东风2000', 50, 30, 1500],
    ['26', '普京', '辽宁号', 2, 1000, 2000],
    ['27', '特朗普', '歼50', 200, 200, 40000],
    ['28', '马克龙', '东风2000', 50, 30, 1500],
    ['29', '普京', '辽宁号', 2, 1000, 2000],
];

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
    // requestData();
    loadData();

    $('input:radio[name="searchType"]').click(function () {
        var checkValue = $('input:radio[name="searchType"]:checked').val();

        if (checkValue == "advanced") {
            // 如果点击的是高级查询则跳转到对应的页面
            $view.open({
                viewid: "com.yonyou.placeorder.ReportSearch",
                isKeep: "true"
            })
        }
        else
            $cache.write("searchType", checkValue);
    });
}

// JSController中获取到数据之后会调用该方法以在页面上加载获得到的数据
function loadData() {
    // var result = $ctx.get("result");

    // if (result) {
    // var parsedResult = JSON.parse(result).datas;
    // $("#plan").html(get_contain(JSON.stringify(parsedResult)));

    $("#reportTable").html(get_contain(JSON.stringify(source)));
    // } else {
    //     return;
    // }
}

// 调用位于JSController中的请求表格数据方法
function requestData() {
    $js.runjs({ "func": "com$yonyou$placeorder$ReportSearchController$requestData()" })
}

// 把json转换成table
function get_contain(result) {
    // alert("接收到的数据格式： " + result);

    var html = "";
    var data = eval(result);
    try {
        $.each(data, function (index, item) {
            if (index === 0) {
                html += "<thead><tr>";
                $.each(item, function (vlaIndex, valItem) {
                    html += "<th><div class='heading'>";
                    html += valItem;
                    html += "</div></th>";
                });
                html += "</tr></thead><tbody>";
            } else {
                html += (index % 2 == 0) ? "<tr class='sub'>" : "<tr>";
                $.each(item, function (vlaIndex, valItem) {
                    html += (vlaIndex % 2 == 0) ? "<td class='current'>" : "<td>";
                    html += valItem;
                    html += "</td>";
                });
                html += "</tr>";
            }
        });
        html += "</tbody>";
    } catch (e) { alert(e); }

    return html;
}


