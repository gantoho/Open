$(function(){
		// let tit = $("section .demo .tit"),
		// 		demo = $("section .demo");
		// let disX,
		// 		disY;
		// tit.mousedown((e) => {
		// 	disX = e.pageX - parseInt(demo.offset().left);
		// 	disY = e.pageY - parseInt(demo.offset().top);
		// 	document.onmousemove = function(e){
		// 		let event = e || window.event;
		// 		demo.css({"left":event.pageX - disX + "px", "top":event.pageY - disY + "px"});
		// 	}
		// 	document.onmouseup = function(){
		// 		document.onmousemove = null;
		// 	}
		// })
		//阻止默认右键点击事件
		$("main,.demo,.s,header").bind("contextmenu", () => {
			return false;
		});
		//contextmenu鼠标右键点击事件
		$("main").contextmenu((ev) => {
			let x=ev.pageX;
			let y=ev.pageY;
			$(".s").css("left",x);
			$(".s").css("top",y);
			$(".s").show();
		});
		$("main").mousedown(() => {
			$(".s").hide();
		});
		$(".refresh").click(() => {
			location.reload();
		});
		
		let bgImg = [];
		$(".nextBgImg").click(() => {
			
		});
		
		$(".sec .search input").focus(() => {
			$(".sec .search").css("border-bottom","1px solid #26FF8E");
		})
		$(".sec .search input").blur(() => {
			$(".sec .search").css("border-bottom","1px solid #EEEEEE");
		})
		
		$(".sec .lef ul li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
		
		let flag = false;
		$(".k").click(function(){
			if(flag){
				$(".demo").animate({"width":"60%","height":"80%","top":"10%","left":"20%","border-radius":"10px"});
				flag = false;
			}else{
				$(".demo").animate({"width":"100%","height":"100%","top":"0","left":"0","border-radius":"0"});
				flag = true;
			}
		})
		
		let imgUrl = ["../img/unnamed.jpg","../img/unnamed0.jpg","../img/bing20210617.jpg","../img/background.jpg","../img/background_0.jpg","../img/backgroundImg.png","../img/wallhaven-rdglgq.jpg","../img/wallhaven-3z369y.jpg","https://ganto.cn/xer/img/yasuo_yongen.jpg","https://ganto.cn/xer/img/198.jpg","http://qzonestyle.gtimg.cn/qzone/qzactStatics/imgs/20171123181522_c48800.jpg","../img/win10.jpg","../img/win11.jpg"];
		$(".nextBgImg").click(function(){
			let numS = Math.floor(Math.random()*imgUrl.length);
			$("main").css({"background-image":"url(" + imgUrl[numS] + ")"})
		})
})
