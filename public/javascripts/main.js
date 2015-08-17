$(function() {

	//set dropdown inside of form
	$('.dropdown-menu li a').click(function(){
	    $(".btn.drop:first-child").text($(this).text());
      	$(".btn.drop:first-child").val($(this).text());
	});

	//set navigation bar of website
	$(".nav li a").click(function(){
	   $(this).parent().parent().find(".active").removeClass("active");
	   $(this).parent().addClass("active").css('font-weight', 'bold');
	});

});