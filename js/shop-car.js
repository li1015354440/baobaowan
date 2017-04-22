$(function () {
//	联动全选
	(function () {
		var oBtn = 	$("#checks")[0];
		var oDiv = $("#check-list")[0];
		var aInput = $(".check");
		var n=3;
	//	全选
		oBtn.onclick = function(){
			if(oBtn.getAttribute("check") == "false"){
				oBtn.setAttribute("check","true");
				oBtn.getElementsByTagName("span")[0].className="active";
				for(var i=0;i<aInput.length;i++){
					aInput[i].setAttribute("check","true");
					aInput[i].className="active";
				}
				n=3;
			}else{
				oBtn.setAttribute("check","false");
				oBtn.getElementsByTagName("span")[0].className="";
				for(var i=0;i<aInput.length;i++){
					aInput[i].setAttribute("check","false");
					aInput[i].className="";
				}
				n=0;
			}
		};
	//	联动
		for(var i=0;i<aInput.length;i++){
			aInput[i].onclick = function(){
				if(this.getAttribute("check") == "false"){
					this.setAttribute("check","true");
					this.className="active";
					n++;
				}else{
					this.setAttribute("check","false");
					this.className="";
					n--;
				}
				
				if(n == aInput.length){
					oBtn.setAttribute("check","true");
					oBtn.getElementsByTagName("span")[0].className="active";
				}else{
					oBtn.setAttribute("check","false");
					oBtn.getElementsByTagName("span")[0].className="";
				}
			};
		}
	})()
	
//	数量
	
})
