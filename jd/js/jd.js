$(".box>header>.nav>div>.one>li:nth-child(2)").click(function(){
//	window.location.href="https://www.jd.com/";
	window.open('https://www.jd.com/');//重新打开一个窗口，再打开此页面
})

$(".box>header>.logo>div>.logo_1>span").click(function(){
	window.location.href="https://www.jd.com/";//不重新打开新的窗口，直接覆盖原网页
})

setInterval(function(){
	var one_w=$("body").width();
	var body_h=$("body").height();
	$("section>.one").css({"width":one_w,"height":one_w/2.2});
	$(".duyiwuer").css("height",body_h);
},0);
//window.onresize = function(){
//	var one_w=$("body").width();
//	$("section>.one").css({"width":one_w,"height":one_w/2.3});
//}


$("nav>.one_2>ul>li").click(function(){
	$(this).addClass("add").siblings().removeClass("add");
})
$(".box>header>.logo>div>.logo_2>ul>li").click(function(){
	var t=$(this).text();
	alert("“"+t+"”"+"开发中,感谢支持");
})
$(".duyiwuer>ul>li").hover(function(){
	$(this).children("div").children("span").stop().animate({right:34},200);
},function(){
	$(this).children("div").children("span").stop().animate({right:-35},200);
})
$(".duyiwuer>ul>li:nth-child(8)").click(function(){
	$("body,html").animate({"scrollTop":0},500);
})

//倒计时
var isTime = new Date('2022-06-10 00:00:00');//修改结束时间，从现在到你设置的时间的差值
var isMillis = isTime.getTime() - new Date().getTime();
var showTime = document.getElementById('showTime');
if(isMillis > 0) {
	//计算倒计时的函数
	function datetime() {
		isMillis = isTime.getTime() - new Date().getTime();
		var tian = Math.floor(isMillis / 1000 / 60 / 60 / 24);
		if(tian < 10) {
			hours = '0' + hours;
		}
		var hours = Math.floor((isMillis - tian * 24 * 60 * 60 * 1000) / 1000 / 60 / 60);
		if(hours < 10) {
			hours = '0' + hours;
		}
		var minutes = Math.floor((isMillis - tian * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / 1000 / 60);
		if(minutes < 10) {
			minutes = '0' + minutes;
		}
		var seconds = Math.floor((isMillis - tian * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000);
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		showTime.innerHTML =  tian+"天"+hours + '时' + minutes + '分' + seconds + '秒';
	}
	datetime();
} else {
	document.write('结束时间不正确！')
}
//每个一秒执行一次，实现倒计时的效果
setInterval(datetime, 1000);

$(".box>header>.logo>div>.logo_2>div").hover(function(){
	$(".box>header>.logo>div>.logo_2>div>div").show();
},function(){
	$(".box>header>.logo>div>.logo_2>div>div").hide();
})

$(".box>header>.logo>div>.logo_2>div>div>ul>li").hover(function(){
	$(this).children("div").show();
},function(){
	$(this).children("div").hide();
})
$(".duyiwuer>ul>li>span>span").click(function(){
	
})

$(".box>header>.logo>div>.logo_2>div>div>ul>li:nth-child(n+2)").children("div").hide();



$("html,body").animate({"scrollTop":0},500);
$(document).on('scroll',function(){
	var scr=$(document).scrollTop();
	if(scr>=200){
		$(".box>header>.logo>div>.logo_2>div>div>ul>li>div").stop().css({"position":"fixed","top":5,"left":"50%","margin-left":"-300px"});
	}else{
		$(".box>header>.logo>div>.logo_2>div>div>ul>li>div").stop().css({"position":"absolute","top":-5,"right":'-800px',"left":"","margin-left":""});
	}
});


$("section>.one_1>div>.ul_1>li").hover(function(){
	$(this).addClass("add").siblings().removeClass("add");
})
$("section>.one_9>div>.ul_1>li").hover(function(){
	$(this).addClass("add").siblings().removeClass("add");
})

$("section>.one_1>div>div>div").eq(0).show().siblings().hide();

$("section>.one_1>div>.ul_1>li").hover(function(){
	var i=$(this).index();
	$("section>.one_1>div>div>div").eq(i).show().siblings().hide();
})

$("section>.one_9>div>div>div").eq(0).show().siblings().hide();

$("section>.one_9>div>.ul_1>li").hover(function(){
	var i=$(this).index();
	$("section>.one_9>div>div>div").eq(i).show().siblings().hide();
})
