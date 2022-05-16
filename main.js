$(document).ready(function(){
  $(".regbuttona").mouseover(function(){
    $(".regbuttona").css("background-color", "white");
    $(".regbuttona").css("color", "grey");
    
  });
  $(".regbuttona").mouseout(function(){
    $(".regbuttona").css("background-color", "#293f50");
	$(".regbuttona").css("color", "#fff");
	
  });
});

$(document).ready(function(){
  $(".jq").mouseover(function(){
    
    $(".jq").css("color", "#648880");
    $(".jq").css("fontSize", "17px");
    $(".jq").css("textAlign", "center");
  });
  $(".jq").mouseout(function(){
    
	$(".jq").css("color", "#fff");
	$(".jq").css("fontSize", "14px");
	$(".jq").css("background-color", "#293f50");
	
  });
});
