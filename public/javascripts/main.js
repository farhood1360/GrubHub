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

	//set backToTop bar of website
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

	$('.scroll-top-wrapper').on('click', scrollToTop);

});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}