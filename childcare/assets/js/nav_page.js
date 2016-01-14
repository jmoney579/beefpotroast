$(document).ready(function($){
	$("#nav_ccv").click(function(){
		$(".section").css("display", "none");
		$("#ccv").fadeIn();
	});
	$("#nav_complaint").click(function(){
		$(".section").css("display", "none");
		$("#complaint").fadeIn();
	});	
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
		}
	/*var test = getUrlVars()["ccv"];*/
if (getUrlVars()["ccv"] == 1){
		$(".section").css("display", "none");
		$("#ccv").fadeIn();
	}else if(getUrlVars()["complaint"] == 1){
		$(".section").css("display", "none");
		$("#complaint").fadeIn();
	}
});