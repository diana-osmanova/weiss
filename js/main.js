$(function(){
  $('.select-style').styler();

  $('.menu-btn').on('click', function () {
    $('.menu__list').toggleClass('active');
  });
});