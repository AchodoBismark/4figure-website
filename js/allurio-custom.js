// ------------------------------------------------
// Project Name: Allurio - Coming Soon & Portfolio Template
// Project Description: Allurio - versatile and trendy coming soon & portfolio template to kick-start your project.
// Tags: allurio, coming soon, under construction, template, coming soon page, landing page, portfolio, one page, html5, css3
// Version: 1.0.0
// Build Date: September 2019
// Last Update: September 2019
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: allurio-custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. Main Section Loading Animation
//  3. Swiper Slider Settings
//  4. YTPlayer Settings
//  5. Vegas Settings
//  6. KBW-Countdown Settings
//  7. Skillbar Settings
//  8. Mailchimp Notify Form
//  9. Contact Form
//  10. ParticlesJS Backgrounds
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  $(".loader-logo").addClass('scaleOut');

  setTimeout(function(){
    $('body').removeClass('overflow-hidden');
    $(".loader").addClass('loaded');

  },600);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    $('body').addClass('loaded');
    $('.headline__animate').textillate({
      in: {
        effect: 'fadeInUp',
        delayScale: 1.2,
        delay: 40,
      }
    });
  },600);
  // --------------------------------------------- //
  // Main Section Loading Animation End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Swiper Slider Settings Start
  // --------------------------------------------- //
  var slider = $('.media-slider'),
      aboutSlider = $('.about-slider'),
      partnersSlider = $('.partners-slider');

  if (slider.length) {
    var swiper = new Swiper('.swiper-container', {
      effect: 'fade',
      speed: 1000,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  if (aboutSlider.length) {
    var swiper = new Swiper('.about-swiper-container', {
        slidesPerView: 'auto',
        autoplay: true,
        loop: true,
        spaceBetween: 0,
        navigation: {
          nextEl: '.about-swiper-button-next',
          prevEl: '.about-swiper-button-prev',
        },
      });
  };

  if (partnersSlider.length) {
    var swiper = new Swiper('.partners-swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: true,
      loop: true,
      breakpoints: {
        1600: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        667: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        }
      }
    });
  };
  // --------------------------------------------- //
  // Swiper Slider Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // YTPlayer Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo");

  if(bgndVideo.length){
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: '#video-wrapper',
      showControls:false,
      autoPlay:true,
      loop:true,
      startAt:0,
      quality:'default'
    });
  };
  // --------------------------------------------- //
  // YTPlayer End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns1 = $('#bgndKenburns-1');
  if(bgndKenburns1.length){
    bgndKenburns1.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/bg-main-1440x900-1.jpg" },
        { src: "img/backgrounds/bg-main-1440x900-2.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburns2 = $('#bgndKenburns-2');
  if(bgndKenburns2.length){
    bgndKenburns2.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/bg-main-1440x900-3.jpg" },
        { src: "img/backgrounds/bg-main-1440x900-4.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburnsFull = $('#bgndKenburnsFull');
  if(bgndKenburnsFull.length){
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/bg-fullscreen-1.jpg" },
        { src: "img/backgrounds/bg-fullscreen-2.jpg" },
        { src: "img/backgrounds/bg-fullscreen-3.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2021, 1, 26), format: 'D'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbar Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
    decimals: 0
  });
  // --------------------------------------------- //
  // Skillbar Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=0f58c08fd1'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  // Night Sky BG - particlesJS
  var bgndNightSky = $('#nightsky-js');
  if (bgndNightSky.length) {
    particlesJS('nightsky-js', {
      "particles": {
        "number": {
          "value": 500,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "opacity_min": 0.05,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };

  // Particles BG - particlesJS
  var bgndParticles = $('#particles-js');
  if (bgndParticles.length) {
    particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#ffffff",
            "opacity": 0.7,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
  };
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //

});
