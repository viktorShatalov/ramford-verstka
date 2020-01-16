// slick-slider
$('.re-info-slider').slick({
  autoplay: true,
  infinite: true,
  arrows: false,
  dots: true,
  autoplaySpeed: 1000,
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
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = ('0' + t.days);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

// modal
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

// Matrix
const t = [
  'Wake up, MARCUS...\n',
  'The Matrix has you...\n',
  'Follow the white rabbit.',
]

function tepyText() {
  let line = 0;
  let count = 0;
  let out = '';
  let htmlOut = document.querySelector('.out');

  function typeLine() {
      let interval = setTimeout(function () {
          out += t[line][count];
          htmlOut.innerHTML = out + '|';
          count++;
          // Проверки
          if (count >= t[line].length) {
              count = 0;
              line++;
              if (line == t.length) {
                  clearTimeout(interval);
                  htmlOut.innerHTML = out;
                  return true;
              }
          }
          typeLine();
      },getRandomInt(getRandomInt(250) * 2.5) )
  }
  typeLine();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

tepyText();