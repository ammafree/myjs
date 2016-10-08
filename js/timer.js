// 时间计时器 按秒计时
var $timerLayer = null;
var h = 0;
var m = 0;
var s = 0;
var begin = false;

var startTime = function($timerLayerIn) {
	if ($timerLayer == null) {
		$timerLayer = $timerLayerIn;
	}
	circleTime();
}
	

// 每秒循环
var t;
var circleTime = function () {
	begin = true;
	if ($timerLayer.length == 0) {
		clearTimeout(t);
		begin = false;
	}
	$timerLayer.html(checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s));
	if (s == 59) {
		if (m == 59) {
			h += 1;
			m = 0;
			s = 0;
		} else {
			m += 1;
			s = 0;
		}
	} else {
		s += 1;
	}
	t = setTimeout('circleTime('+ h +','+ m +','+ s +')', 1000);
}

// 分秒格式化
var checkTime = function(num) {
	if (num < 10) {
		return "0" + num;
	}
	return num;
}

// 暂停or开始
var stop = function() {
	if (begin) {
		clearTimeout(t);
		begin = false;
	} else {
		circleTime();
	}
}