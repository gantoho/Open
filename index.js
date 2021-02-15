$.getJSON('index.json', data=>{
	console.log(data.data);
	for(var i = 0; i < data.data.length; i++){
		console.log(data.data[i].time,data.data[i].url,"\n");
		$("main section").append("<span class=" + data.data[i].class + "><a target='_blank' href=" + data.data[i].url + "></a><i>" + data.data[i].time + "</i></span>");
	}
})
