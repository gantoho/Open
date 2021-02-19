$.getJSON('index.json', data=>{
	for(var i = 0; i < data.data.length; i++){
		$("main section").append("<span class=" + data.data[i].class + "><a target='_blank' href=" + data.data[i].url + "></a><i>" + data.data[i].time + "</i></span>");
	}
})
$("section").slideUp();
$("footer").click(function(){
	$("section").slideToggle();
})
