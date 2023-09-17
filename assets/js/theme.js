(function($){
	'use strict';

	// Main slider js
	$('.slick_slider .slider_active').slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: false,
		slidesToScroll: 1,
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
			}
		}
		

		]


	});

	// testimonial_area slider js
	$('.testimonial_area .test_slide').slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 568,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]

	});

	// blog_slider js
	$('.blog_slide').slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 568,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]

	});
	
	// Counter js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	}); 
	
    // CounterUp Skillbar js
    $('.counter_s').counterUp({
    	delay: 10,
    	time: 1000
    }); 
    
    // VenoBox
    new VenoBox();

	// wow js
	new WOW().init();

	// scrolltotop
	$('.scrolltotop').click(function(){

		$(html).animate({'scrollTop' : '0'}, 1000);
		
		return false;
	});

	$(window).scroll(function() {

		if ($(window).scrollTop() > 200) {
			$('.scrolltotop').addClass('myclass');
		} else {
			$('.scrolltotop').removeClass('myclass');
		}
	});
	
	// sticky menu js
	$("#sticker").sticky({
		topSpacing:0,
		zIndex:9999
	});

	 // Sticky logo
	 $(window).scroll(function() {

	 	if ($(window).scrollTop() > 50) {
	 		$('.sticky_logo').addClass('stick_logo');
	 	} else {
	 		$('.sticky_logo').removeClass('stick_logo');
	 	}
	 });

	 $(window).scroll(function() {

	 	if ($(window).scrollTop() > 50) {
	 		$('.main_logo').addClass('header_logo');
	 	} else {
	 		$('.main_logo').removeClass('header_logo');
	 	}
	 });

	 // mobile_menu js
	 $('.mobile_menu nav').meanmenu({
	 	meanScreenWidth: "991",
	 	meanMenuContainer: ".mobile_menu"
	 });





	})(jQuery);