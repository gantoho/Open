$(function(){
		var one = $("section .demo .one"),
				demo = $("section .demo");
		var disX,
				disY;
		one.mousedown(function(e){
				disX = e.pageX - parseInt(demo.offset().left);
				disY = e.pageY - parseInt(demo.offset().top);
				document.onmousemove = function(e){
						var event = e || window.event;
						demo.css({"left":event.pageX - disX + "px", "top":event.pageY - disY + "px"});
				}
				document.onmouseup = function(){
						document.onmousemove = null;
				}
				
		})
		// $(".github").mousedown(function(e){
		// 		if(e.button == 2){
		// 				$(this).fadeOut();
		// 		}
		// })
})
