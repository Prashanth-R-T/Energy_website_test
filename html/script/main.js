$(document).ready(function(){
    $('.main-banner').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: false,
    });

    $('.client-logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        arrow: false,
        variableWidth: true
    });

    // open mobile menu
    $('.js-toggle-menu').click(function(e){
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $('.link').toggleClass('open');
    });

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    }); 

});