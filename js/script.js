$(() => {
	$("#owl-banner-pc").owlCarousel({
        loop: true,
        items: 1
    });

    $("#owl-banner-mb").owlCarousel({
        loop: true,
        items: 1
    });

	$("#owl-partner").owlCarousel({
        loop: true,
        items: 5,
        responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        768:{
	            items:3,
	            nav:false
	        },
	    }
    });

    $(".btn_menu_footer").click(function(event) {
    	event.preventDefault();
    	if ($(window).width() > 991) {
    		$("#menu_footer").slideToggle(400);
    		$('html').animate({scrollTop: $(document).height()}, 450);
    	}
    });

    $('li.level1').mouseenter(function(event) {
    	if ($(window).width() > 991) {
    		$(this).find('.sub_menu').css('left', '0');
    		$(this).find('.sub_menu').show(300);
    	}
    });

    $('li.level1').mouseleave(function(event) {
    	if ($(window).width() > 991) {
    		$(this).find('.sub_menu').css('left', '-9999');
    		$(this).find('.sub_menu').hide();
    	}
    });

    $('.search_group svg').click(function(event) {
    	$(this).next().toggleClass('open_search');
    });
});