$(document).ready(function(){
  var menubtn = $('.header__btn');
  var nav = $('.nav');

  menubtn.on('click', function(){
    nav.toggleClass('nav_active');
  });

});