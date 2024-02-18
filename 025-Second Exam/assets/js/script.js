
// mobile menu

function toggleMobileNav() {
  $('body').toggleClass('open-mobile-menu');
  $('#hamburger_main').toggleClass('is-active');
}
$('#hamburger_main, #hamburger_mobile, #overlay').on('click', toggleMobileNav);


// slider in hero section

$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 1,
    slideMargin: 0,
    loop: true,
    // auto: true,
    speed: 3000,
    pause: 4000,
    freeMove: true,
    vertical: true
  });
});



// create articles
function doSlider() {
  $('.sliderArticles').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        
        
      }
    }, {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      }
    },  {
      breakpoint: 621,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
  });
}
async function getArticles() {
  const response = await fetch('../../data/news.json')
  if(response.ok) {
    const json = await response.json();
    let res = '';
    json.forEach(item => {
      res = articleHTML(item);
      $('.sliderArticles').append(res);
    })  
    doSlider()
  } else {
    toast.error('Server is not working now')
    checkForGit()
  }

}

function checkForGit() {
  const data = [
    {
      title: "SEE THE UNMATCHED BEAUTY OF THE GREAT.",
      anons: "Free directories: directories are perfect for customers that are searching for...",
      image: "assets/img/news1.jpg",
      date: "20 Jan 2020",
      author: {
        avatar: "assets/img/user1.jpg",
        name: "ALJA BRUN"
      }
    }, {
      title: "EFFECTIVE ADVERTISING POINTERS.",
      anons: "Having a home based business is a wonderful asset to your life...",
      image: "assets/img/news2.jpg",
      date: "13 Dec 2019",
      author: {
        avatar: "assets/img/user2.jpg",
        name: "DOMINIC FREEMAN"
      }
    }, {
      title: "HYPNOTIZE YOURSELF INTO THE GHOST.",
      anons: "There are many things that are important to catalog design...",
      image: "assets/img/news3.jpg",
      date: "30 Nov 2019",
      author: {
        avatar: "assets/img/user3.jpg",
        name: "ALICE WARD"
      }
    }, {
      title: "SEE THE UNMATCHED BEAUTY OF THE GREAT.",
      anons: "Free directories: directories are perfect for customers that are searching for...",
      image: "assets/img/news1.jpg",
      date: "20 Jan 2020",
      author: {
        avatar: "assets/img/user1.jpg",
        name: "ALJA BRUN"
      }
    },  {
      title: "EFFECTIVE ADVERTISING POINTERS.",
      anons: "Having a home based business is a wonderful asset to your life...",
      image: "assets/img/news2.jpg",
      date: "13 Dec 2019",
      author: {
        avatar: "assets/img/user2.jpg",
        name: "DOMINIC FREEMAN"
      }
    }
  ]
  let res = '';
  data.forEach(item => {
      res = articleHTML(item);
       $('.sliderArticles').append(res);
    })
  
    doSlider()
}


function articleHTML (item) {
  return `
  <div class="card">
    <div class="card-img">
      <img src="${item.image}"  alt="${item.title}">
    </div>
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-descr">${item.anons}</p>
      <div class="user">
        <div class="user-img">
          <img src="${item.author.avatar}">
        </div>
        <div>
          <div class="user-name">${item.author.name}</div>
          <div class="user-date">${item.date}</div>
        </div>
      </div>
    </div>
  </div>`
}

getArticles()


// map

function initMap(link) {
  link.remove()
  
  const map = L.map('map__wrapper', {scrollWheelZoom: false}).setView([40.657130058655116, -73.90082201331555], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
  }).addTo(map);

  const myIcon = L.icon({
    iconUrl: "assets/icons/Pin.png",
    iconSize: [106, 106],
  })

  L.marker([40.677130058655116, -73.90082201331555], {icon: myIcon}).addTo(map)
}


// form validation and send to telegram

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$('.form-control').on('focus', function() {
  if ($(this).hasClass('is-invalid')) {
    $(this).removeClass('is-invalid');
  }
});


const form = $('#form')
$('#form').on('submit', function(e) {
  e.preventDefault();

  const errors = [];

  const nameFld = $('#name');
  const emailFld = $('#email');

  const name = nameFld.val().trim();
  const email = emailFld.val().trim();

  if (name === '') {
    errors.push('Enter your name');
    nameFld.addClass('is-invalid');
  } else {
    if (name.length < 2) {
      errors.push('Your name is too short');
      nameFld.addClass('is-invalid');
    }
  }

  if (email === '') {
    errors.push('Enter your email');
    emailFld.addClass('is-invalid');
  } else {
    if (!isValidEmail(email)) {
      errors.push('Incorrect email');
      emailFld.addClass('is-invalid');
    }
  }

  if (errors.length) {
    toast.error(errors.join('. '));
    return;
  }

  const CHAT_ID = '-1002056646529';
  const BOT_TOKEN = '6441838686:AAFjcFr5wZcuAg-kI_12XEupsmc6SUUkPyE';

  const message = `<b>Name: ${name}\r\n</b><b>Email: </b> ${email}`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURI(message)}&parse_mode=HTML`;

  $.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    success: function(resp) {
      if (resp.ok) {
        nameFld.val('');
        emailFld.val('');
        toast.success('Your message was sent successfully');
      } else {
        toast.error('Some error occurred');
      }
    },
    error: function(err) {
      toast.error(err);
    }
  });

  return false;
});


// scroll to elem

function scrollToElem(selector) {
  const top = $(selector).offset().top;
  $('html, body').animate({
    scrollTop: top
  }, 'slow');
}


// change header position

// window.addEventListener('scroll', function() {
//   const header = document.querySelector('.header');
//   if(window.scrollY >= 60) {
//     if(!header.classList.contains('scrolled')) {
//       header.classList.add('scrolled')
//     }
//   } else {
//     if(header.classList.contains('scrolled')) {
//       header.classList.remove('scrolled')
//     }
//   }
// })

$(window).scroll(function() {
  const header = $('.header');
  if ($(window).scrollTop() >= 60) {
    if (!header.hasClass('scrolled')) {
      header.addClass('scrolled');
    }
  } else {
    if (header.hasClass('scrolled')) {
      header.removeClass('scrolled');
    }
  }
});



