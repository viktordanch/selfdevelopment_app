//= require 'sources/masonry.pkgd.min'

console.log('Hello Lessons');

$(window).load(function(){

  $('#masonry-container').masonry({
    itemSelector: '#masonry-container li',
  });
});