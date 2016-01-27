requirejs.config({
  paths: {
    jquery: 'sources/jquery/jquery',
    backbone: 'sources/backbone/backbone',
    underscore: 'sources/underscore/underscore',
    // hbs: 'sources/hbs',
    handlebars: 'sources/handlebars',
    text: 'sources/text',
    // foundation: 'sources/foundation',
    // modernizr: 'sources/modernizr',
    precompiledTemplates: 'viktor/my_shop_b/precompiledTemplates',
    my_shop_b_router: 'viktor/my_shop_b/router',
    foundation_setup: 'viktor/foundation_setup',
    my_shop_b_controller: 'viktor/my_shop_b/controller',
    my_shop_b_base_view: 'viktor/my_shop_b/base/baseView',
    my_shop_b_base_model: 'viktor/my_shop_b/base/baseModel',
    my_shop_b_base_collection: 'viktor/my_shop_b/base/baseCollection'
  },
  packages: [
    {
      name: 'shop_b',
      location: 'viktor/my_shop_b/components/shop',
      main: 'index'
    },
    {
      name: 'layoutComponent',
      location: 'viktor/my_shop_b/components/layoutComponent',
      main: 'index'
    }
  ],

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore']
    },
    // foundation: {
    //   deps: ['jquery', 'modernizr']
    // }
  }
});

define(function(require){
  function sideNav() {
    console.log('sideNav')
    console.log($(window).width() < 769)
    if ($(window).width() < 769) {
      $('.off-canvas-wrap').removeClass('move-right');
      $('.left-off-canvas-toggle').show();
    } else {
      $('.off-canvas-wrap').addClass('move-right');
      $('.left-off-canvas-toggle').hide();
    }
  }

  $(window).resize(function() {
    sideNav();
  });

  $(document).on('click', '.asideProductMenu .productLink, .topProductMenu .productLink', function(e){
    var productsLayout = require('text!./templates/productsLayout.handlebars');
    var precompiledTemplates = require('precompiledTemplates');

    var precompiledProductsLayout = precompiledTemplates.getTemplates(productsLayout, 'list_template');

    var $el = $(e.target);
    if (!$el.is('a')) {
      return false
    } else {
      $.get($el.attr('href')).then(function (data) {
        console.log(data)
        $('.productsList').html('')
        var precompiledProductsLayout = precompiledProductsLayout;
      }).fail(function (data) {
        var parsedDate = JSON.parse(data.responseText);
        $('.productsList').html(precompiledProductsLayout(parsedDate));
        console.log(data)
      }.bind(this));
    }
    return false
  });

  $(document).ready(function(){
    sideNav();
    $(".off-canvas-submenu").hide();
    $(".off-canvas-submenu-call").click(function() {
      var icon = $(this).parent().next(".off-canvas-submenu").is(':visible') ? '+' : '-';
      $(this).parent().next(".off-canvas-submenu").slideToggle('fast');
      $(this).find("span").text(icon);
    });
  });

  var Backbone = require('backbone');
  var router = require('my_shop_b_router');

  window.appRouter = new router();

  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});
