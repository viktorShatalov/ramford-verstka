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

// timer




function timer() {
  // получаю время начала отсчета
  (function () {
    const DAYS_SPECIAL_OFFER = 3; // Положительное число (или 0, если отключено). Специальное предложение в днях
    const HOURS_SPECIAL_OFFER = 0; // Положительное число (или 0, если отключено). Специальное предложение в часах (работает если DAYS_SPECIAL_OFFER === 0)  
    let deadline;

    //***
    // Функции из библиотеки https://date-fns.org/ 
    //***

    const millisecondsInSecond = 1000;
    const millisecondsInMinute = 60000;
    const millisecondsInHour = 3600000;
    const millisecondsInDay = 86400000;


    function addDays(dirtyDate, dirtyAmount) {
      var date = dirtyDate;
      var amount = Number(dirtyAmount);
      date.setDate(date.getDate() + amount);
      return date;
    }

    function addMilliseconds(dirtyDate, dirtyAmount) {
      var timestamp = dirtyDate.getTime();
      var amount = Number(dirtyAmount);
      return new Date(timestamp + amount);
    }

    function addHours(dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return addMilliseconds(dirtyDate, amount * millisecondsInHour);
    }

    function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
      var dateLeft = dirtyDateLeft;
      var dateRight = dirtyDateRight;
      return dateLeft.getTime() - dateRight.getTime();
    }

    function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / millisecondsInSecond;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / millisecondsInMinute;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    function differenceInHours(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / millisecondsInHour;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }

    function differenceInDays(dirtyDateLeft, dirtyDateRight) {
      var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / millisecondsInDay;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
    }
    //***


    //***
    // Константы времени  
    //***  
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    //***   

    //***
    // Начальная проверка localStorage
    //***   

    if (localStorage.getItem("time")) {
      deadline = new Date(Number(localStorage.getItem("time")));
    } else {
      if (DAYS_SPECIAL_OFFER > 0) {
        deadline = addDays(new Date(), DAYS_SPECIAL_OFFER);
      } else if (HOURS_SPECIAL_OFFER > 0) {
        deadline = addHours(new Date(), HOURS_SPECIAL_OFFER);
      } else {
        deadline = addDays(new Date(), 3);
      }

      localStorage.setItem("time", deadline.getTime());
    }


    // получаю конечную дату отсчета
    function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date());

      let seconds = differenceInSeconds(endtime, new Date()) % secondsInMinute;
      let minutes = differenceInMinutes(endtime, new Date()) % minutesInHour;
      let hours = differenceInHours(endtime, new Date()) % hoursInDay;
      let days = differenceInDays(endtime, new Date());

      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    // закидываю данные в html документ

    function initializeClock(id, endtime) {
      let timeinterval = setInterval(updateClock, 1000);
      let clock = document.getElementById(id);
      let daysSpan = clock.querySelector('.days');
      let hoursSpan = clock.querySelector('.hours');
      let minutesSpan = clock.querySelector('.minutes');
      let secondsSpan = clock.querySelector('.seconds');

      //   запускаю счетчик
      function updateClock() {

        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = ('0' + t.days);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        //   если отсчет закончился - прибавляю еще нужное время,
        //   перезаписываю localStorage,
        //   вызываю начальную функцию 
        if (t.total <= 0) {
          clearInterval(timeinterval);
          if (DAYS_SPECIAL_OFFER > 0) {
            deadline = addDays(new Date(), DAYS_SPECIAL_OFFER);
          } else if (HOURS_SPECIAL_OFFER > 0) {
            deadline = addHours(new Date(), HOURS_SPECIAL_OFFER);
          } else {
            deadline = addDays(new Date(), 3);
          }
          localStorage.setItem("time", deadline.getTime());
          return initializeClock('countdown', deadline);
        }


      }

      updateClock();

    }

    initializeClock('countdown', deadline);
  })();
}
timer()

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

$(document).ready(function () {
  // создаю переменную для проверки всплывания окна
  let one = false;

  $(document).mouseleave(function () {
    // проверяю переменную
    if (!one) {
      // запускаю скрипт после проверки
      $('.re-modal__arthboard, #re-overlay').addClass('active');
      $('.close-button, #re-overlay').on('click', function () {
        $('.re-modal__arthboard, #re-overlay').removeClass('active')
      });
      // меняю переменной значение на противоположное
      one = true
    }
  })
})