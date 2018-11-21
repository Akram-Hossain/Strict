$(function(){

    // Preloader js    
    $(window).on('load', function(){
        $('.preloader').delay(1500).fadeOut(500);

    })
	$('.venobox').venobox(); 
	
	//slider part start 
    $('.ban-slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });
    // slider part end

    // for navbar background color when scrolling
    $(window).scroll(function () {
        var stickytop = $(".menu-section");
        var $scrolling = $(this).scrollTop();
        var bc2top = $(".back-top-btn");
        if ($scrolling >= 30) {
            stickytop.addClass('nav_bg');
        } else {
            stickytop.removeClass('nav_bg');
        }

        if ($scrolling > 150) {
                bc2top.fadeIn(1000);
            } else {
                bc2top.fadeOut(1000);
            }
    });

    //animation scroll js
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500, 'easeInOutCubic');
                return false;
            }
        }
    });

    //team part start
    $('.main-about').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//team part end

    // this is for back to top and sticky menu js
    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1600);
    });
});