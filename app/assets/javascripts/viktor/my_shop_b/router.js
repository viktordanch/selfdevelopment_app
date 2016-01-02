define(function (require) {
  var Backbone = require('backbone');
  var controller = require('my_shop_b_controller');
  return Backbone.Router.extend({

    routes: {
      'my_shop_b/:page': 'renderStaticPage',
      '*path': 'init',
    },

    controller: controller,

    renderStaticPage: function (page) {
      this.controller.init({ url: page });
    },

    init: function () {
      this.controller.init({ url: '/my_shop_b' });
    },
  });
});
