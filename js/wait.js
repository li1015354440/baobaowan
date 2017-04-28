$(document).ready(function(){
	$("#wait-pay").click(function(){
		$(".wait").hide();
		$(".wait-pay").show();
		$(".header a").css({"color":"#999","border-bottom":" .02rem solid #fff"});
		$("#wait-pay").css({"color":"#333","border-bottom":" .02rem solid #DCB469"});
	});
	$("#wait-send").click(function(){
		$(".wait").hide();
		$(".wait-send").show();
		$(".header a").css({"color":"#999","border-bottom":" .02rem solid #fff"});
		$("#wait-send").css({"color":"#333","border-bottom":" .02rem solid #DCB469"});
	});
	$("#wait-delivery").click(function(){
		$(".wait").hide();
		$(".wait-delivery").show();
		$(".header a").css({"color":"#999","border-bottom":" .02rem solid #fff"});
		$("#wait-delivery").css({"color":"#333","border-bottom":" .02rem solid #DCB469"});
	});
	$("#orders-finish").click(function(){
		$(".wait").hide();
		$(".orders-finish").show();
		$(".header a").css({"color":"#999","border-bottom":" .02rem solid #fff"});
		$("#orders-finish").css({"color":"#333","border-bottom":" .02rem solid #DCB469"});
	});
	
})

