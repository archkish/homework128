$(document).ready(function() {
  $("#lightSlider").lightSlider({
    item: 1,
    slideMargin: 0,
    loop: true,
    auto: true,
    speed: 3000,
    pause: 4000,
    freeMove: true
  }); 

  $(".arrivals__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [{

      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
      }

    }, {

      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }

    },{

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }

    }, {

      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }

    }]
    
  })

  $(".partners__slider").slick({
    arrows: true,
    infinite: true,
  })

});



