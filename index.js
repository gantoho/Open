
$(".lastDate b").html(localStorage.getItem("lastDate"));
$(function(){
	$.getJSON('index.json', data=>{
		for(var i = 0; i < data.data.length; i++){
			$("main section").append("<span class=" + data.data[i].class + "><a target='_blank' href=" + data.data[i].url + " onclick='return false'></a><i>" + data.data[i].time + "</i></span>");
		}
	})
	console.log(1);
	$("section span").click(function(){
		console.log(2);
		var lastDate = $(this).children("i").html();
		localStorage.setItem("lastDate", lastDate);
		$(".lastDate b").html(localStorage.getItem("lastDate"));
		var url = $(this).children("a").attr("href");
		window.open(url);
	})
	
	
})
