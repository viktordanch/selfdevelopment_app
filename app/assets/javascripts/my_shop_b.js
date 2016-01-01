requirejs.config({
  paths: {
    jquery: 'sources/jquery/jquery',
    backbone: 'sources/backbone/backbone',
    underscore: 'sources/underscore/underscore',
    hbs: 'sources/hbs',
    text: 'sources/text',
    foundation: 'sources/foundation',
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
    }
  ],

  shim: {
    backbone: {
      deps: ['jquery', 'underscore']
    },
    foundation: {
      deps: ['jquery']
    }
  }
});

define(function(require){
  var Backbone = require('backbone');
  var router = require('my_shop_b_router');

  window.appRouter = new router();

  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});
