window.onload = function(){
	let arr = ["animate__jackInTheBox","animate__rollIn","animate__zoomIn","animate__zoomInDown","animate__zoomInLeft","animate__zoomInLeft","animate__zoomInUp","animate__slideInDown","animate__slideInLeft","animate__slideInRight","animate__slideInUp","animate__rubberBand","animate__swing","animate__wobble","animate__backInDown","animate__backInLeft","animate__backInRight","animate__backInUp","animate__bounceInDown","animate__bounceInLeft","animate__bounceInRight","animate__bounceInUp","animate__fadeInDown","animate__fadeInDownBig","animate__fadeInLeft","animate__fadeInLeftBig","animate__fadeInRight","animate__fadeInRightBig","animate__fadeInUp","animate__fadeInUpBig","animate__fadeInTopLeft","animate__fadeInTopRight","animate__fadeInBottomLeft","animate__fadeInBottomRight","animate__flip","animate__flipInX","animate__flipInY","animate__lightSpeedInRight","animate__lightSpeedInLeft","animate__rotateIn","animate__rotateInDownLeft"];
	let rad = Math.floor(Math.random()*arr.length);
	let item = document.querySelectorAll(".article");
	let itemH = item[1].clientHeight;
	(function(){
		for(let [index,i] of item.entries()){
			if(item[index].offsetTop-document.documentElement.scrollTop+200 < document.documentElement.clientHeight){
				item[index].style.visibility = "visible";
				item[index].classList.add(arr[rad]);
			}
		}
	})();
	window.onscroll = function(){
		for(let [index,i] of item.entries()){
			//          每个元素距离上方的距离  鼠标滚动了多少距离                  窗口的高度
			// console.log(item[index].offsetTop,document.documentElement.scrollTop,document.documentElement.clientHeight);
			if(item[index].offsetTop-document.documentElement.scrollTop+(itemH/2) < document.documentElement.clientHeight){
				item[index].style.visibility = "visible";
				item[index].classList.add(arr[rad]);
			}
		}
	}
}
