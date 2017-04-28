$(document).ready(function(){
	$(".header>li").on("click",function (){
		var index = $(this).index();
		show(index);
	})
	
	var id =window.location.href.split("=")[1];
	if(id){
		switch (id){
			case "0": show(id);
			break;
			case "1": show(id);
			break;
			case "2": show(id);
			break;
			case "3": show(id);
			default:
				break;
		}
	}
	
//	订单操作
	function show (id) {
		$(".header>li").eq(id).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
		$(".wait").eq(id).show().siblings(".wait").hide();
	}
})

