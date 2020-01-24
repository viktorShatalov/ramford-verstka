// определение города

$(document).ready(function () {
  window.onload = function () {
    $("#user-city,#user-city2").text(ymaps.geolocation.city);

    // убрал всплывашку
    $('.re-question').hide();
    // закрыть всплывашку рядом с городом
    // $('.re-unswer a').click(function () {
    //   $('.re-question').toggleClass('active');
    // });
  }
})

// slick-slider
$('.re-info-slider').slick({
  autoplay: false,
  infinite: true,
  arrows: false,
  dots: true,
  autoplaySpeed: 1800,
  responsive: [
    {
      breakpoint: 1024,
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
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
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
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

// menu -mobile
$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger,.re-mobile-menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
})

// // timer

// function timer() {
//   // получаю время начала отсчета
//   let deadline;

//   (function () {
//     if (localStorage.getItem("time")) {
//       deadline = new Date(Number(localStorage.getItem("time")));
//     } else {
//       deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000);
//     }
//     //alert(deadline);
//   })();

//   // получаю конечную дату отсчета
//   function getTimeRemaining(endtime) {
//     let t = Date.parse(endtime) - Date.parse(new Date());
//     let seconds = Math.floor((t / 1000) % 60);
//     let minutes = Math.floor((t / 1000 / 60) % 60);
//     let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     let days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//       'total': t,
//       'days': days,
//       'hours': hours,
//       'minutes': minutes,
//       'seconds': seconds
//     };
//   }
//   // закидываю данные в html документ

//   function initializeClock(id, endtime) {
//     let clock = document.getElementById(id);
//     let daysSpan = clock.querySelector('.days');
//     let hoursSpan = clock.querySelector('.hours');
//     let minutesSpan = clock.querySelector('.minutes');
//     let secondsSpan = clock.querySelector('.seconds');

//     //   запускаю счетчик
//     function updateClock() {

//       let t = getTimeRemaining(endtime);

//       daysSpan.innerHTML = ('0' + t.days);
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//       //   если отсчет закончился - прибавляю еще нужное время
//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//         let deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000);
//         initializeClock('countdown', deadline);
//       }

//     }

//     //   записываю в localstorage дату окончания 
//     localStorage.setItem("time", deadline.getTime());
//     //alert(JSON.stringify(deadline));

//     updateClock();
//     let timeinterval = setInterval(updateClock, 1000);

//   }

//   initializeClock('countdown', deadline);
// }
// timer()

// modal

function modal() {

  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('re-overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.re-modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.re-modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }
}
modal();

// footer sub-menu

if ($(window).width() > 768) {
  // Тут код для больших разрешений,
  //с шириной окна с сайтом больше 768 писелей
} else {
  // Тут код для маленьких экранов
  $(".re-menu-column ul li").hide();

  $(".re-menu-column h3").click(
    function () {
      $(".re-menu-column ul li").toggle('slow')
    }
  );

  // categoryPage sidebar-filtr

  $(".re-sidebar-filtr").hide();

  $(".re-sidebar-help__btn button").click(
    function () {
      $(".re-sidebar-filtr").toggle('slow')
    }
  );

}

// card ptoduct description TABS

$('.re-btn').click(function () {
  var id = $(this).attr('data-tab'),
    content = $('.re-specifications__block[data-tab="' + id + '"]');

  $('.re-btn.active').removeClass('active');
  $(this).addClass('active');

  $('.re-specifications__block.active').removeClass('active');
  content.addClass('active');
});

// сортировка по цене на странице category

$('#re-category__sortBy').ready(function () {
  $("#re-down-price").hide();

  $('#re-img-sort').on('click', function () {
    $("#re-down-price").toggle('slow');
  });
});

// categoryPage filtr

$('.re-sidebar-filtr').ready(function () {
  $(".re-filtr-item__sub").hide();

  $('.re-filtr-item').click(function () {
    $(this).children(".re-filtr-item__sub").stop(true, true).toggle('slow');
  });
});

// счетчик количества товара cart-page

// function addHandlers(count) {

//   let minus = count.querySelector("#btnMinus");
//   let number = count.querySelector("#product-input");
//   let plus = count.querySelector("#btnPlus");

//   plus.addEventListener("click", function () {
//     +number.value++;
//     if (number.value >= 1) {
//       minus.disabled = false;
//     }
//   });

//   minus.addEventListener("click", function () {
//     +number.value--;
//     if (number.value == 1) {
//       minus.disabled = true;
//     }
//   });
// }

// let counts = document.querySelectorAll(".re-order-product__count");
// counts.forEach(addHandlers);


// modal__arthboard

$(document).mouseleave(function(){
  $('.re-modal__arthboard, #re-overlay').addClass('active');
  $('.close-button, #re-overlay').on('click', function(){
    $('.re-modal__arthboard, #re-overlay').removeClass('active')
  });
});