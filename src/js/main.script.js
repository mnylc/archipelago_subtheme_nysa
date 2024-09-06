// * Bootstrap libraries
import "./_bootstrap";

// * Any other global site-wide JavaScript should be placed below.
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_nysa = {
    attach: function (context, settings) {

      var position = $(window).scrollTop();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('body').addClass("scrolled");
        }
        else {
          $('body').removeClass("scrolled");
        }
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          $('body').addClass("scrolldown");
          $('body').removeClass("scrollup");
        } else {
          $('body').addClass("scrollup");
          $('body').removeClass("scrolldown");
        }
        position = scroll;
      });
    }
  };
})(jQuery, Drupal);
