/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function(context, settings) {
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



/**
 * dropdown toggle show and null
 */
const _navItem = document.querySelectorAll(".menu-item--expanded");
//console.log(_navItem[0].lastElementChild);

for(let i = 0; i <= _navItem.length; i++){
  _navItem[i].addEventListener('mouseover', function(){
    //console.log("mouse over", _navItem[i].classList);
    _navItem[i].lastElementChild.classList.add("show");
  });
  _navItem[i].addEventListener("mouseleave", function(){
    //console.log("mosue leave", _navItem[i].classList);
    _navItem[i].lastElementChild.classList.remove("show");
  });
}
