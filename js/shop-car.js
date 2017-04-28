$(function() {
	//计算价格
	(function () {
		var n=3;
		var price = 0;
		
//		默认全选
		totalcount();
		
//		全选
		$("#checks").on("click",function () {
			totalcount();
		})
		
//		分别计算
		$("#check-list").children("li").on("click",".check",function () {
			if($(this).hasClass("active")){
				n--;
			}else{
				n++;
			}
			if(n>=3){
				$("#checks>span:eq(0)").addClass("active");
			}else {
				$("#checks>span:eq(0)").removeClass("active");
			}
			if($(this).attr("check") == "true"){
				$(this).attr("check","false").toggleClass("active");
				price -= parseFloat($(this).siblings("div").find(".price").text())*parseFloat($(this).siblings("div").find(".counts").text());
			}else{
				$(this).attr("check","true").toggleClass("active");
				price += parseFloat($(this).siblings("div").find(".price").text())*parseFloat($(this).siblings("div").find(".counts").text());
			}
			$("#total").html(price+".<smallest>00</smallest>");
		})
		
//		数量更改
		$(".add").on("click",function () {
			if($(this).parent().parent().siblings(".check").hasClass("active")){
				$(this).siblings("span").text(parseFloat($(this).siblings("span").text())+1);
				count();
			}
		})
		$(".less").on("click",function () {
			if($(this).parent().parent().siblings(".check").hasClass("active")){
				if(parseFloat($(this).siblings("span").text())<=2){
					$(this).siblings("span").text(1);
				}else{
					$(this).siblings("span").text(parseFloat($(this).siblings("span").text())-1);
				}
				count();
			}
		})
		
	//		默认计算总价
			function totalcount () {
				if($("#checks>span:eq(0)").hasClass("active")){
					$("#checks>span:eq(0)").removeClass("active");
					for(var i = 0; i < $(".check").length; i++) {
						$(".check").attr("check", "false");
						$(".check").removeClass("active");
						price = 0;
					}
				}else{
					for(var i = 0; i < $(".check").length; i++) {
						$("#checks>span:eq(0)").addClass("active");
						$(".check").attr("check", "true");
						$(".check").addClass("active");
						price += parseFloat($(".price").eq(i).html()) * parseFloat($(".counts").eq(i).html()); //算出每件商品的总价;
					}
				}
				$("#total").html(price+".<smallest>00</smallest>");
			}
//			数量更改时计算价格
			function count () {
				price=0;
				for(var i = 0; i < $(".check").length; i++) {
					price += parseFloat($(".price").eq(i).html()) * parseFloat($(".counts").eq(i).html()); //算出每件商品的总价;
				}
				$("#total").html(price+".<smallest>00</smallest>");
			}
			
//			结算
			$("#accounts").on("click",function () {
				$.ajax({
					url: "http://localhost/wanbaobao/index.php/Home/Buy/checkGoods",
					type: "post",
					dataType: "json",
					data: {"goods_keys":[1,2]},
					success: function (e) {
						if(e.error=="0"){
							$.ajax({
								url: "http://localhost/wanbaobao/index.php/Home/Buy/cartUpdate",
								type: "post",
								dataType: "json",
								data: {"data":[{"key":1,"quantity":20}]},
								success: function (e) {
									window.location=e.url;
								}
							})
						}
					}
				})
			})
	})()
})