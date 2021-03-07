$("html,body").animate({"scrollTop":0},500);
			
$(document).on('scroll',function(){
	var scr=$(document).scrollTop();
	if(scr>=100){
		$(".navbar").css({"background":"white","box-shadow":"0px 5px 20px rgba(0,0,0,0.2)"});
		$(".navbar>.container>.navbar-right").css("background","white");
		$(".navbar>.container>.navbar-right>ul>li>a").css("color","#818A91");
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").css("color","white");
		$(".logo").hide();
		$(".logo1").show();
		$(".navbar>.container>.navbar-right>ul>li>a").hover(function(){
			$(this).css("color","#0CDAB3");
		},function(){
			$(this).css("color","#818A91");
		})
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").hover(function(){
			$(this).css("color","white");
		},function(){
			$(this).css("color","white");
		})
	}else{
		$(".navbar").css({"background":"","box-shadow":""});
		$(".navbar>.container>.navbar-right").css("background","");
		$(".navbar>.container>.navbar-right>ul>li>a").css("color","");
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").css("color","white");
		$(".logo").show();
		$(".logo1").hide();
		$(".navbar>.container>.navbar-right>ul>li>a").hover(function(){
			$(this).css("color","#0CDAB3");
		},function(){
			$(this).css("color","white");
		})
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").hover(function(){
			$(this).css("color","white");
		},function(){
			$(this).css("color","white");
		})
	}
});

var flag=true;

$(".navbar>.container>.navbar-left>button").click(function(){
	
	if(flag==true){
		$(".navbar").css({"background":"white","box-shadow":"0px 5px 20px rgba(0,0,0,0.2)"});
		$(".navbar>.container>.navbar-right").css("background","white");
		$(".navbar>.container>.navbar-right>ul>li>a").css("color","#818A91");
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").css("color","white");
		$(".logo").hide();
		$(".logo1").show();
		$(".navbar>.container>.navbar-right>ul>li>a").hover(function(){
			$(this).css("color","#0CDAB3");
		},function(){
			$(this).css("color","#818A91");
		})
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").hover(function(){
			$(this).css("color","white");
		},function(){
			$(this).css("color","white");
		})
		flag=false;
	}else{
		$(".navbar").css({"background":"","box-shadow":""});
		$(".navbar>.container>.navbar-right").css("background","");
		$(".navbar>.container>.navbar-right>ul>li>a").css("color","");
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").css("color","#818A91");
		$(".logo").show();
		$(".logo1").hide();
		$(".navbar>.container>.navbar-right>ul>li>a").hover(function(){
			$(this).css("color","#0CDAB3");
		},function(){
			$(this).css("color","white");
		})
		$(".navbar>.container>.navbar-right>ul>li:nth-child(7)>a").hover(function(){
			$(this).css("color","white");
		},function(){
			$(this).css("color","white");
		})
		flag=true;
	}
})
