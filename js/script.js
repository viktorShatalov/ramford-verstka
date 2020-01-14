// slick-slider
$('.re-info-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                dots: false,
            }
        }
    ]
});

$('.re-currentOffers-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
      ]
});

$('.re-newProduct-items').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 1800,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
});

// menu -mobile
// $(document).ready(function () {
//     $('.burger-menu').click(function () {
//         $('.burger-menu,.header-menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     })
// })