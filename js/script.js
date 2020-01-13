// slick-slider
$('.re-info-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
});

$('.re-currentOffers-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    // responsive: [
    //     {
    //       breakpoint: 1360,
    //       settings: {
    //         slidesToShow: 4,
    //         slidesToScroll: 4,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //   ]
});


// menu -mobile
// $(document).ready(function () {
//     $('.burger-menu').click(function () {
//         $('.burger-menu,.header-menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     })
// })