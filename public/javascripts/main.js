$(function() {

	$('.dropdown-menu li a').click(function(){
	    $(".btn.drop:first-child").text($(this).text());
      	$(".btn.drop:first-child").val($(this).text());
	});

});