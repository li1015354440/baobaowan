$(function (){
//	选择城市
	$("#change-address").on("click",function () {
		$("#alert-bg").show();
	})
	$("#alert-bg").on("click",function () {
		$("#alert-bg").hide();
	})
	$("#alert-address").on("click","p",function () {
		return false;
	})
	$("#cities").on("click","li", function () {
		$("#city").val(this.innerHTML);
	})
//	详细地址
	$("#detail-address").on("click",function () {
		this.className="active";
		this.innerHTML="";
	})
})
