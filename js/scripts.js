$(document).ready(function() {
  $('.mobile__menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.nav__mobile').addClass('nav__mobile_active');
  });

  $('.nav__mobile-close').on('click', function(e) {
    e.preventDefault();
    $('.nav__mobile').removeClass('nav__mobile_active');
  });
  
});






