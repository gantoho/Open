$("header>ul>li").eq(0).show().siblings().hide();
var i=0;
function fun(){
	i=i>2? 0:i;
	$("header>ul>li").eq(i).stop().fadeIn().siblings().fadeOut();
}
var time = setInterval(function(){
	i++
	fun();
},4000);

$("header>ul,header>.an").hover(function(){
	clearInterval(time);
},function(){
	time=setInterval(function(){
		i++
		fun();
	},4000);
});
$("header>.an>.prev").click(function(){
	i--;
	fun();
})
$("header>.an>.next").click(function(){
	i++;
	fun();
})
$("header>.one_0>i").click(function(){
	window.location.href="index.html";
})


$("header>.one_0>ul>li").eq(0).children("i").stop().animate({bottom:45},150).parent().siblings().children("i").stop().animate({bottom:0},150);
$("header>.one_0>ul>li").hover(function(){
	$(this).addClass("add").siblings().removeClass("add");
	$(this).children("i").stop().animate({bottom:45},150).parent().siblings().children("i").stop().animate({bottom:0},150);
},function(){
	$("header>.one_0>ul>li").eq(0).addClass("add").siblings().removeClass("add");
	$("header>.one_0>ul>li").eq(0).children("i").stop().animate({bottom:45},150).parent().siblings().children("i").stop().animate({bottom:0},150);
})

$("header>.one_0>div>#wx").hover(function(){
	$(this).children("span").show();
},function(){
	$(this).children("span").hide();
})

$("section>.one_4>div>.num>ul>li").hover(function(){
	if($(this).hasClass("add")){
		return;
	}else{
		$(this).css("color","green");
	}
},function(){
	$(this).css("color","");
})

$("section>.one_4>div>.num>ul>li").click(function(){
	var i=$(this).index();
	$(this).addClass("add").siblings().removeClass("add");
	$("section>.one_4>div>div>ul").eq(i).show().siblings().hide();
})

$("section>.one_4>div>div>ul").eq(0).show().siblings().hide();

do//do...while循环
	var suinum = Math.floor(Math.random()*10000);
while( suinum < 1000 )
$(".yzm").text(suinum);

$(".yzm").click(function(){
	do
		var suinum = Math.floor(Math.random()*10000);
	while( suinum < 1000 )
	$(".yzm").text(suinum);
	var c_text=$("section>.one_5>div>div>.left>.c").val("");
})
$(".tj").click(function(){
	var a=$("section>.one_5>div>div>.left>.c").val();
	console.log(a);
	var aa=$(".yzm").text();
	console.log(aa);
	if(a==aa){
		alert("提交成功，感谢提交！");
	}else{
		alert("错误：请输入验证码！");
		do
			var suinum = Math.floor(Math.random()*10000);
		while( suinum < 1000 )
		$(".yzm").text(suinum);
		var c_text=$("section>.one_5>div>div>.left>.c").val("");
	}
})

function aaa(){
	var i=0;
	$("section>.one_5>div>div>.right>div>ul").animate({top: - 39 * i},500);
}

setInterval(function(){
	i++;
	aaa();
},1000)


