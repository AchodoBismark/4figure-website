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
// File name: app-demo.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. SVG Fallback
//  3. Chrome Smooth Scroll
//  4. Images Moving Ban
//  5. Mailchimp Subscribition Form
//  6. Smooth Scrolling
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  $(".loader-logo").addClass('scaleOut');

  setTimeout(function(){
    $('body').removeClass('overflow-hidden');
    $(".loader").addClass('loaded');
  },1000);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

});

$(document).ready(function() {

  // --------------------------------------------- //
  // SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Subscribition Form Start
  // --------------------------------------------- //
  $('.subscribe-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=b382fff780'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.subscribe-container').find('.form').addClass('is-hidden');
      $('.subscribe-container').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe-container').find('.subscription-ok').removeClass('is-visible');
        $('.subscribe-container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.subscribe-container').find('.form').addClass('is-hidden');
      $('.subscribe-container').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.subscribe-container').find('.subscription-error').removeClass('is-visible');
        $('.subscribe-container').find('.form').delay(300).removeClass('is-hidden');
        $('.subscribe-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Subscribition Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Smooth Scrolling Start
  // --------------------------------------------- //
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  // --------------------------------------------- //
  // Smooth Scrolling End
  // --------------------------------------------- //

});
