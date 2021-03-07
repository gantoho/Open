$("header>span").click(function(){
	window.location.href="index.html";
});
$("header>ul>li").click(function(){
	$(this).addClass("add").siblings().removeClass("add");
});
$("header>ul>li").hover(function(){
	$(this).children("span").css("transform","rotateZ(180deg)");
	$(this).children("ul").stop().slideDown(100);
},function(){
	$(this).children("span").css("transform","rotateZ(0deg)");
	$(this).children("ul").stop().slideUp(100);
});
$("section>.one_1>div>ul>li").hover(function(){
	$(this).children("a").children("div").stop().animate({top:-189,opacity:1},300);
	$(this).children("a").css("border","1px solid #222222");
},function(){
	$(this).children("a").children("div").stop().animate({top:0,opacity:0},300);
	$(this).children("a").css("border","");
});
$("section>.one_1>div>.numnav>ul>li").click(function(){
	$(this).addClass("add").siblings().removeClass("add");
});

$("section>.one_1>div>.top>span:nth-child(6)").hide();
$(document).on('scroll',function(){
	var scr=$(document).scrollTop();
	if(scr > 100){
		$("section>.one_1>div>.top>span:nth-child(6)").slideDown(100);
	}else{
		$("section>.one_1>div>.top>span:nth-child(6)").slideUp(100);
	}
});
$("section>.one_1>div>.top>span:nth-child(6)").click(function(){
	$("body,html").animate({scrollTop:0});
})
$("body,html").animate({scrollTop:0},500);

$("section>.one_2>div>ul>li").hover(function(){
	$(this).children("a").children("div").stop().animate({top:-374,opacity:1},300);
	$(this).children("a").css("border","1px solid #222222");
},function(){
	$(this).children("a").children("div").stop().animate({top:0,opacity:0},300);
	$(this).children("a").css("border","");
});
$("section>.one_3>div>ul>li").hover(function(){
	$(this).children("a").children("div").stop().animate({top:-189,opacity:1},300);
	$(this).children("a").css("border","1px solid #222222");
},function(){
	$(this).children("a").children("div").stop().animate({top:0,opacity:0},300);
	$(this).children("a").css("border","");
});
$("section>.one_1>div>.top>span:nth-child(4)").hover(function(){
	$(this).children("div").show();
},function(){
	$(this).children("div").hide();
})
