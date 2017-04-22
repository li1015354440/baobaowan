$(function () {
//	轮播图
	go();
//	添加购物车
	$("#add-car").on("click",function () {
		$("#alert-bg").show();
		var count = parseInt($("#count").text());
		$("#count-more").on("click",function () {
			count++;
			$("#count").text(count);
			return false;
		})
		$("#count-shot").on("click",function () {
			if(count==1){
				count=1;
			}else {
				count--;
			}
			$("#count").text(count);
			return false;
		})
	})
	$("#alert-bg").on("click","li:not(:last-child)",function () {
		return false;
	})
	$("#alert-bg").on("click",function (e) {
		$("#alert-bg").hide();
	})
})
