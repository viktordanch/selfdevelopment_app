//= require 'sources/masonry.pkgd.min'
//= require 'sources/foundation-datepicker'
//= require 'sources/motion-ui.min.js'

console.log('Hello Lessons');
var $button = $('#button');
var $panel = $('#panel');

$(window).load(function(){

  $('#masonry-container').masonry({
    itemSelector: '#masonry-container li',
  });
  sideNav();
  $('.fdatepicker').fdatepicker({
    pickTime: true,
    minView: 0
  });

  $button.click(function() {
    console.log('22222')
    if ($panel.is(':visible')) {
      MotionUI.animateOut($panel, 'fadeOut');
    }
    else {
      MotionUI.animateIn($panel, 'fadeIn');
    }
  });
});

function sideNav() {
  console.log('sideNav')
  console.log($(window).width() < 769)
  if ($(window).width() < 769) {
    $('.off-canvas-wrap').removeClass('move-to-right');
    $('.left-off-canvas-toggle').show();
  } else {
    $('.off-canvas-wrap').addClass('move-to-right');
    $('.left-off-canvas-toggle').hide();
  }
}

$(window).resize(function() {
  sideNav();
});