(function ($) {
    "use strict";

    $(document).ready(function ($) {

        //        $('.features, .works, .reviews').on('click', function (event) {
        //            var $anchor = $(this);
        //            $('html, body').stop().animate({
        //                scrollTop: $($anchor.attr('href')).offset().top - 71
        //            }, 1500, 'easeInOutExpo');
        //            event.preventDefault();
        //        });
        $('.features, .works, .reviews, .content').on('click', function (e) {
            var target = $(this).attr('href');
            var offset = $(target).offset().top - 80;
            $('body, html').animate({
                scrollTop: offset
            }, 1500);
            e.preventDefault();
        });


        // slicknav
        if ($.fn.slicknav) {
            $('.main-menu').slicknav({
                appendTo: '.menu-col',
                allowParentLinks: true
            });
        }
        // Header Menu collapse in will remove when will click menu to smooth scroll.
//		$('.current-menu-item a').on('click', function(){
//			$('.slicknav_btn').addClass('slicknav_collapsed', 4000);
//			$('.slicknav_btn').removeClass(slicknav_open);
//			$('.slicknav_hidden', 4000).css("display", "none");
//		});
        
        // Header Menu collapse in will remove when will click menu to smooth scroll.
//        var slikNavButton = $('.slicknav_btn');
//        var mainMenu_a = $('.main-menu ul li a');
//		mainMenu_a.on("click",function(){
//			slikNavButton.removeClass('slicknav_open');
//		});
        
        
        var slikNavButton = $('.slicknav_btn');
        var removeMenuMox = $('.remove-menu-box');
		removeMenuMox.on("click",function(){
			slikNavButton.removeClass('slicknav_open');
		});
		removeMenuMox.on("click",function(){
			slikNavButton.addClass('slicknav_collapsed');
		});
		removeMenuMox.on("click",function(){
			$('nav.slicknav_nav').addClass('slicknav_hidden');
		});
        
//		mainMenu_a.on("click",function(){
//			$('.slicknav_nav').addClass('slicknav_hidden');
//		});
        
        
        if ($.fn.sticky) {
            $("#header-area").sticky({
                topSpacing: 0
            });
        }

        if ($.fn.owlCarousel) {

        
        $('#app-slider-wrapper').owlCarousel({
            loop: true,
            items: 6,
            center: true,
            autoplay: true,
            margin: 0,
            nav: false,
            mouseDrag: true,
            smartSpeed: 500,
            dots: true,
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                320: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 2
                },
                // breakpoint from 768 up
                768: {
                    items: 4
                },
                // breakpoint from 768 up
                992: {
                    items: 6
                }
            }
        });
        $('#client-slider-wrapper').owlCarousel({
            loop: true,
            items: 1,
            dotsEach: false,
            center: false,
            autoplay: false,
            margin: 30,
            nav: false,
            mouseDrag: true,
            smartSpeed: 500,
            dots: true,
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                320: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 1
                },
                // breakpoint from 768 up
                992: {
                    items: 1
                }
            }
        });

        }
        if ($.fn.magnificPopup) {
            $(".video-play-btn").magnificPopup({
                type: 'video',
                src: 'img/video-img.jpg',
            })
        }
            
        // Pricing Carousel    
        if ($.fn.owlCarousel) {
            $('#price-slider-wrapper').owlCarousel({
                loop: true,
                items: 4,
                margin: 30,
                nav: true,
                navText: ['<img src="images/arow-left.png">', '<img src="images/arow-right.png">'],
                autoplay: false,
                responsiveClass: true,
                responsive: {
                    300: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 2,
                        margin: 10
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
        
        
        // Isotope Masonry 
         // 2. Sortable Masonary with Filters
        function enableMasonry() {
            if ($('.sortable-masonry').length) {
                var winDow = $(window);
                // Needed variables
                var $container = $('.sortable-masonry .items-container');
                var $filter = $('.filter-btns');

                $container.isotope({
                    filter: '*',
                    masonry: {
                        columnWidth: 0
                    },
                    animationOptions: {
                        duration: 500,
                        easing: 'linear'
                    }
                });


                // Isotope Filter 
                $filter.find('li').on('click', function () {
                    var selector = $(this).attr('data-filter');
                    try {
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 500,
                                easing: 'linear',
                                queue: false
                            }
                        });
                    } catch (err) {

                    }
                    return false;
                });


                winDow.bind('resize', function () {
                    var selector = $filter.find('li.active').attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                });

                var filterItemA = $('.filter-btns li');
                filterItemA.on('click', function () {
                    var $this = $(this);
                    if (!$this.hasClass('active')) {
                        filterItemA.removeClass('active');
                        $this.addClass('active');
                    }
                });
            }
        }

        enableMasonry();
        // Isotope Masonry 




    });

}(jQuery));