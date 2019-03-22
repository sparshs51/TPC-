; (function ($) {
    "use strict"
    var nav_offset_top = $('.top_menu').height() ;
    /*-------------------------------------------------------------------------------
	  Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".main_menu").addClass("fixed-top");
                    $('#searchInput').fadeOut();
                } else {
                    $(".main_menu").removeClass("fixed-top");
                }
            });
        };
    };
    navbarFixed();


    //--------  Carousel --------// 
    if($('.active-review-carusel').length) {
        $('.active-review-carusel').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            nav: false,
            dots: true,
            responsiveClass: true,
            autoplay: 2500,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    //-------- Counter js --------//
    $(window).on("load", function() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    // $('.active-review-carusel').owlCarousel({
    //     items:1,
    //     loop:true,
    //     // autoplay:true,
    //     autoplayHoverPause: true,        
    //     margin:0,
    //     dots: true
    // });

    //------- Mailchimp js --------//  

    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


    $('select').niceSelect();

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    // Partner Map
    if (document.getElementById('mapBox')) {
        var map = new google.maps.Map(document.getElementById('mapBox'), {
            zoom: 12,
            center: new google.maps.LatLng(23.81, 90.41),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker;
        marker = new google.maps.Marker({
            map: map
        });
    }

})(jQuery)