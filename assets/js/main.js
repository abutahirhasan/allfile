"user strict";

$('.client-wrapper').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false
      },
      430:{
        items:2,
        nav:false,
        dots: false
    },
    767:{
        items:3,
        nav:false,
        dots: false
    },
    991:{
        items:4,
        nav:false,
        dots: false
    },
      1199:{
          items:5,
          nav:false,
          loop:false,
          dots: false
      }
  }
})
$('.client-content').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          dots: false,
          nav:false
      },
      500:{
        items:1,
        dots: false,
        nav:false
    },
      767:{
          items:1,
          nav:false,
          dots: false
      },
      991:{
        items:1,
        nav:false,
        dots: false
    },
      1199:{
          items:1,
          nav:false,
          dots: true,
          loop:false
      }
  }
})
$('.testemonial-wrapper').owlCarousel({
  loop:true,
  margin:30,
  autoplay: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          dots: false,
          nav:false
      },
      575:{
        items:2,
        dots: false,
        nav:false
    },
      767:{
          items:2,
          nav:false,
          dots: false
      },
      991:{
        items:3,
        nav:true,
        dots: false
    },
      1199:{
          items:3,
          nav:true,
          dots: false,
          loop:false
      }
  }
})

var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");
var six = $("#six");
one.owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:5
      }
  }
})
two.owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }
  
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });

  $(document).ready(function(){
    $(".play-btn").magnificPopup({
      type: 'iframe',
        iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 
        
          patterns: {
            youtube: {
              index: 'youtube.com/',
        
              id: 'v=', 
        
              src: '//www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }
        
          },
        
          srcAction: 'iframe_src',
        }
    })
  })
  $(document).ready(function(){
    new WOW().init();
  });

  
    window.addEventListener('scroll', function (){
      let header = document.querySelector('header');

      header.classList.toggle('scrooling-active', window.scrollY > 0);
    })
  
    function openNav() {
      document.getElementById("myNav").style.height = "100%";
    }
    
    function closeNav() {
      document.getElementById("myNav").style.height = "0%";
    }
    