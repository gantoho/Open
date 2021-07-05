$(function(){
		let one = $("section .demo .one"),
				demo = $("section .demo");
		let disX,
				disY;
		one.mousedown(function(e){
				disX = e.pageX - parseInt(demo.offset().left);
				disY = e.pageY - parseInt(demo.offset().top);
				document.onmousemove = function(e){
						let event = e || window.event;
						demo.css({"left":event.pageX - disX + "px", "top":event.pageY - disY + "px"});
				}
				document.onmouseup = function(){
						document.onmousemove = null;
				}
		})
		//阻止默认右键点击事件
		$("main").bind("contextmenu", function(){
				return false;
		});
		$(".s").bind("contextmenu", function(){
				return false;
		});
		//contextmenu鼠标右键点击事件
		$("main").contextmenu(function(ev){
			let x=ev.pageX;
			let y=ev.pageY;
			$(".s").css("left",x);
			$(".s").css("top",y);
			$(".s").show();
		});
		$("main").mousedown(function(){
			$(".s").hide();
		});
		$(".p").click(function(){
			location.reload();
		});
})


