 $(document).ready(function (){ 
	"use strict";

	// Open menu on tablet/mobile
	$('.menu-btn').on('click', function(){
		$(this).toggleClass('opened');
		$('.main-nav').toggleClass('opened');   
	});

	// Slider initialization
	if ($.isFunction($.fn.slick)) {
		$('.carousel').slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: 1200, 
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 544,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}]
		});
	}

	// Main menu links scroll
	$('.main-nav').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top
		}, 500);
		$('.menu-btn, .main-nav').removeClass('opened');
	});

	// Scroll link
	$('.scroll-indicator').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.description').offset().top
		}, 500);
	});

	$('.main-header .header-inner').on('click', 'a', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.getAttribute('href')).offset().top
		}, 500);
	});

});