define(function (require) {
  var Backbone = require('backbone');
  var controller = require('my_shop_b_controller');
  return Backbone.Router.extend({

    routes: {
      // 'my_shop_b/:page': 'renderStaticPage',
      // 'users/:page(/:params)': 'renderUsersPage',
      // '*path': 'init',
    },

    controller: controller,

    renderStaticPage: function (page) {
      this.controller.init({ url: page });
    },

    renderUsersPage: function (page, params) {
      this.controller.init({ url: page, params: params });
    },

    init: function () {
      this.controller.init({ url: '/my_shop_b' });
    },
  });
});
