$(() => {
    $('#toggle').click(() => {
        $('#main-nav ul').toggleClass('show')
        $('#toggle .fa-solid').toggleClass('fa-times')
    });

    $('.acc-title').click(function () {

        $('.acc-title').children('.fa-solid').removeClass('fa-angle-up');

        if ($(this).next().is(':visible')) {
            $(this).children('.fa-solid').removeClass('fa-angle-up')
        } else {
            $(this).children('.fa-solid').addClass('fa-angle-up')
        }

        $(this).next().slideToggle(500).siblings('.acc-body').slideUp(500);
    })

    $('#filter>li>a').click(function () {
        let className = $(this).attr('class');

        $('#filter>li>a.active').removeClass('active')
        $(this).addClass('active')

        if (className   ==='all') {
            $('.course').fadeIn()
        }else{
            $('.course')
                .hide()
                .filter('.' + className)
                .fadeIn()

        }
        return false;
    })

    $('.bxslider').bxSlider({
        nextText : '<i class="fa-solid fa-circle-chevron-right"></i>',
        prevText : '<i class="fa-solid fa-circle-chevron-left"></i>',
        nextSelector    : $('#next-slide'),
        prevSelector    : $('#prev-slide')
    });

    $('#teachers-wrapper').slick({
        rtl: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    Fancybox.bind('[data-fancybox="courseGallery"]', {
        infinite : false,
        Image: {
            zoom: true
        },
        showClass: "animate__bounceIn",
        hideClass: "animate__fadeOut"
    });

    AOS.init();
});

