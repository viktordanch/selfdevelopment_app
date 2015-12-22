requirejs.config({
  paths: {
    jquery: 'sources/jquery/jquery',
    backbone: 'sources/backbone/backbone',
    underscore: 'sources/underscore/underscore',
    hbs: 'sources/hbs',
    my_shop_b_router: 'viktor/my_shop_b/router',
    my_shop_b_controller: 'viktor/my_shop_b/controller',
    my_shop_b_base_view: 'viktor/my_shop_b/base/baseView'
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
