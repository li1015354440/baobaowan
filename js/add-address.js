$(function (){
//	选择城市
	$("#change-address").on("click",function () {
		$("#alert-bg").show();
	})
	$("#alert-bg").on("click",function () {
		$("#alert-bg").hide();
	})
	$(".alert-address").on("click","p",function () {
		return false;
	})
	$("#cities").on("click","li", function () {
		$("#city").val(this.innerHTML);
		var city = this.innerHTML;
//		var province_id = this.atrr("data-region_id");  //城市 id;
		$.ajax({
			url:"http://localhost/wanbaobao/index.php/Home/User/getRegion",
			type:"post",
			datatype: "json",
			data: {"region_id":52},
			success: function (e) {
				console.log(e)
				if(e.error == 0){
					var _html = "";
					for(var i=0; i<e.data.length; i++){
						_html+='<li data-region_id='+e.data[i].region_id+'>'+e.data[i].title+'</li>';
					}
					$("#alert-bg2").show();
					$("#alert-country").html(
						'<p>请选择区/县</p>\
						<ul id="countrys" >'+_html+'</ul>'
					)
					$("#countrys").on("click","li", function () {
//						var city_id = this.attr("data-region_id");
//console.log(this.html())
						$("#alert-bg2").hide();
						$("#city").val(city+' '+this.innerHTML); 
						$("#id_content").attr({
							"province_id":52,
							"city_id":500
						})
					})
				}
			}
		});
	})
	
//	详细地址
	$("#detail-address").on("click",function () {
		this.className="active";
		this.innerHTML="";
	})
	
	//保存
	$("#save").on("click",function () {
		$.ajax({
			url:"http://localhost/wanbaobao/index.php/Home/User/addAddress",
			type:"post",
			dataType: "json",
//			data: {
//				"province_id":province_id,
//				"city_id":city_id,
//				"detail":$("#detail-address").innerHTML,
//				"tel":$("#delivery-phone").val(),
//				"recept_name":$("#delivery-man").val(),
//				"from":$("body").attr("data-from")
//			},
			data: {
				"province_id":52,
				"city_id":500,
				"detail":"哈哈",
				"tel":"15101517565",
				"recept_name":"李泽鑫",
				"from":"cart"
			},
			success: function (e) {
				console.log(e);
				window.location.href=e.url;
			}
		});
	})
})
