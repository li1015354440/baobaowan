//font-size换算
onresize = function(){
	document.documentElement.style.fontSize = innerWidth/3.75+'px';
}
document.documentElement.style.fontSize = innerWidth/3.75+'px';

//轮播图
function go () {
	var timer = null;
	var n = 1;
	timer = setInterval(function () {
		if(n>=5){
			n=0;
			$("#img-box").css("left",0);
		}else if(n>=4) {
			$("#pagination").children("span").eq(0).addClass("active").siblings().removeClass("active");
		}
		$("#img-box").animate({
			"left":-($("#img-box").children("img").eq(0).width())*n+"px"
		},500);
		$("#pagination").children("span").eq(n).addClass("active").siblings().removeClass("active");
		n++;
	},3000)
};