$(function () {
//	轮播图
	go();
//	添加购物车
	(function () {
		var count=0;
		$("#add-car").on("click",function () {
			$("#alert-bg").show();
			count = parseInt($("#count").text());
			
	//		增加数量
			$("#count-more").on("click",function () {
				count++;
				$("#count").text(count);
				return false;
			})
			
	//		减少数量
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
		
	//	确认
		$("#add-sure").on("click",function () {
			$.ajax({
				url:"http://localhost/wanbaobao/index.php/Home/Buy/cartadd",
				type:"post",
				datatype: "json",
				data: {"goods_id":1,"quantity":count},
				success: function (e) {
					console.log(e);
					if(e.error == 1){
						window.location="/wanbaobao/index.php/Home/User/login.html";
					}
				}
			});
		})
		count=null;
	})()
})
