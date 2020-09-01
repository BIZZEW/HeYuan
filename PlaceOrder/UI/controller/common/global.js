try {
	Type.registerNamespace('Globals');
	//定义网络请求返回状态码
	Globals.ReqStatusCode = {
		SUCCESS: "0",
		NCERROR: "1001001",
		USER_NON_REGISTER: "2001001",
		USER_NON_PASSWORD: "2001002",
		USER_WRONG_PASSWORD: "2001003"
	};
	Globals.RefInfoType = {
		CUSTOMER: {
			code: "1001",
			action: "getCstmRefInfo",
			title: "客户信息"
		},
		CURUSER_CUSTOMER: {
			code: "1011",
			action: "getCurUserCstmRefInfo",
			title: "客户信息"
		},
		SUPPLIER: {
			code: "1002",
			action: "getSplrRefInfo",
			title: "供应商信息"
		},
		CURUSER_SUPPLIER: {
			code: "1012",
			action: "getCurUserSplrRefInfo",
			title: "供应商信息"
		},
		CURUSER_TRANSPORTER: {
			code: "1055",
			action: "getTransporterInfo",
			title: "运输商信息"
		},
		SALE_ORG: {
			code: "1003",
			action: "getSaleOrgRefInfo",
			title: "销售单位信息"
		},
		BUY_ORG: {
			code: "1004",
			action: "getBuyOrgRefInfo",
			title: "采购单位信息"
		},
		SEND_STOCK_ORG: {
			code: "1005",
			action: "getStockOrgRefInfo",
			title: "发货企业信息"
		},
		RCV_STOCK_ORG: {
			code: "1006",
			action: "getStockOrgRefInfo",
			title: "收货企业信息"
		},
		AVAILGOODS: {
			code: "1007",
			action: "getAvailGoodsInfo",
			title: "可用商品"
		},
		CURUSER_VEHICLE: {
			code: "1008",
			action: "getCurUserVehicleInfo",
			title: "车辆档案信息"
		},
		VEHICLE_DRIVER: {
			code: "1009",
			action: "getVehicleDriverInfo",
			title: "司机档案信息"
		},
		VEHICLE_DRIVER_NEW: {
			code: "1010",
			action: "FixInferterAction",
			title: "司机档案信息"
		},
		ORESPOT: {
			code: "1014",
			action: "getRefOrespot",
			title: "矿点信息"
		},
		WAREHOUSE: {
			code: "1015",
			action: "getCangKuInfo",
			title: "仓库信息"
		},
		VEHICLE_STOCK_ORG: {
			code: "1016",
			action: "getVehicleStockOrgInfo",
			title: "库存组织信息"
		},
		// MATERIAL: {
		// 	code: "1013",
		// 	action: "SearchMaterialAction",
		// 	title: "物料档案信息"
		// },
	};
	Globals.callActionError = function () {
		$alert("访问MA服务器异常");
	};
	Globals.getFormatDate = function (thedate, offset) {
		if (thedate == undefined || thedate == null) {
			thedate = new Date();
		}
		if (offset != 0) {
			thedate.setDate(thedate.getDate() + offset);
		}
		var year = thedate.getFullYear();
		var month = thedate.getMonth() + 1;
		var date = thedate.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (date >= 1 && date <= 9) {
			date = "0" + date;
		}
		var formatdate = year + "-" + month + "-" + date;
		return formatdate;
	};
	Globals.getFormatDate2 = function (offset) {
		var thedate = new Date();
		var currentDate = thedate.getDate();//得到之前的日期
		thedate.setDate(1);//日期设置为这个月的1号
		thedate.setMonth(thedate.getMonth() + offset);//修改月份
		var daysInMonth = new Date(thedate.getYear(), thedate.getMonth() + 1, 0).getDate();//得到新的日期月份最大有几天
		thedate.setDate(Math.min(currentDate, daysInMonth));//日期设置为两者较小的一个。

		var year = thedate.getFullYear();
		var month = thedate.getMonth() + 1;
		var date = thedate.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (date >= 1 && date <= 9) {
			date = "0" + date;
		}
		var formatdate = year + "-" + month + "-" + date;
		return formatdate;
	};
	Globals.compareDate = function (date1, date2) {
		var time1 = new Date(date1).getTime();
		var time2 = new Date(date2).getTime();
		if (time1 == time2) {
			return 0;
		} else if (time1 < time2) {
			return -1;
		} else {
			return 1;
		}
	};
	//日期格式化，返回值形式为yy-mm-dd
	function timeFormat(date) {
		if (!date || typeof (date) === "string") {
			this.error("参数异常，请检查...");
		}
		var y = date.getFullYear(); //年
		var m = date.getMonth() + 1; //月
		var d = date.getDate(); //日

		return y + "-" + m + "-" + d;
	}
	Globals.firstDatein = function (type) {
		var date = new Date();
		if (type = "year") {
			date.setDate(1);
			date.setMonth(0);
			return timeFormat(date);
		}
	};
	Globals.checkSpecialChar = function (str) {
		if (str && (str.indexOf("%") >= 0 || str.indexOf("_") >= 0)) {
			return true;
		}
		return false;
	};
	/*
	 * 电话号码验证
	 */
	Globals.checktelephone = function (telephone) {

		var isMob = /^((\+?86)|(\(\+86\)))?(1[012356789][0-9]{9})$/;
		var value = telephone.toString().trim();

		if (value.length != 11) {
			return true;
		}

		if (isMob.test(value)) {
			return false;
		} else {
			return true;
		}

	}
	Globals.CityCode = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外"
	};
	/*
	 * 身份证验证
	 */
	Globals.checkidnum = function (card) {

		//检查省份
		if (checkProvince(card) === false) {
			alert('您输入的身份证号码不正确,请重新输入');
			return true;
		}
		//校验生日
		if (checkBirthday(card) === false) {
			alert('您输入的身份证号码生日不正确,请重新输入');
			return true;
		}
		//检验位的检测
		if (checkParity(card) === false) {
			alert('您的身份证校验位不正确,请重新输入');
			return true;
		}

		return false;

	}
	//取身份证前两位,校验省份
	checkProvince = function (card) {
		var province = card.substr(0, 2);
		if (Globals.CityCode[province] == undefined) {
			return false;
		}
		return true;
	};

	//检查生日是否正确
	checkBirthday = function (card) {
		var len = card.length;
		//身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
		if (len == '15') {
			var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
			var arr_data = card.match(re_fifteen);
			var year = arr_data[2];
			var month = arr_data[3];
			var day = arr_data[4];
			var birthday = new Date('19' + year + '/' + month + '/' + day);
			return verifyBirthday('19' + year, month, day, birthday);
		}
		//身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
		if (len == '18') {
			var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
			var arr_data = card.match(re_eighteen);
			var year = arr_data[2];
			var month = arr_data[3];
			var day = arr_data[4];
			var birthday = new Date(year + '/' + month + '/' + day);
			return verifyBirthday(year, month, day, birthday);
		}
		return false;
	};

	//校验日期
	verifyBirthday = function (year, month, day, birthday) {
		var now = new Date();
		var now_year = now.getFullYear();
		//年月日是否合理
		if (birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day) {
			//判断年份的范围（3岁到100岁之间)
			var time = now_year - year;
			if (time >= 3 && time <= 100) {
				return true;
			}
			return false;
		}
		return false;
	};

	//校验位的检测
	checkParity = function (card) {
		//15位转18位
		card = changeFivteenToEighteen(card);
		var len = card.length;
		if (len == 18) {
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var cardTemp = 0,
				i,
				valnum;
			for (i = 0; i < 17; i++) {
				cardTemp += card.substr(i, 1) * arrInt[i];
			}
			valnum = arrCh[cardTemp % 11];
			if (valnum == card.substr(17, 1)) {
				return true;
			}
			return false;
		}
		return false;
	};

	//15位转18位身份证号
	changeFivteenToEighteen = function (card) {
		if (card.length == '15') {
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var cardTemp = 0,
				i;
			card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
			for (i = 0; i < 17; i++) {
				cardTemp += card.substr(i, 1) * arrInt[i];
			}
			card += arrCh[cardTemp % 11];
			return card;
		}
		return card;
	};

	/*
	 * 车牌号验证
	 */
	Globals.checkvlicense = function (vlicense) {

		var city = ["京", "沪", "津", "渝", "黑", "吉", "辽", "蒙", "冀", "新", "甘", "青", "陕", "宁", "豫", "鲁", "晋", "皖", "鄂", "湘", "苏", "川", "黔", "滇", "桂", "藏", "浙", "赣", "粤", "闽", "台", "琼", "港", "澳"];

		var re = /^[\u4e00-\u9fa5]{1}[A-Za-z]{1}[A-Za-z0-9]{5}$/;
		var value = vlicense.toString().trim();
		var firstwrong = true;
		for (var i = 0; i < city.length; i++) {
			if (city[i] == value.charAt(0)) {
				firstwrong = false;
				break;
			}
		}
		if (firstwrong) {
			return true;
		}
		if (re.test(value)) {
			return false;
		} else {
			return true;
		}

	}
	/*
	 * 真实姓名验证
	 */
	Globals.checktruename = function (name) {
		var re = /^[\u4e00-\u9fa5]{2,10}$/;
		var value = name.toString().trim();
		if (re.test(value)) {
			return false;
		} else {
			return true;
		}
	}
} catch (e) {
	$e(e);
}