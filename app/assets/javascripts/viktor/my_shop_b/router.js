define(function (require) {
  var Backbone = require('backbone');
  var controller = require('my_shop_b_controller');
  return Backbone.Router.extend({

    routes: {
      '*path': 'init',
    },

    controller: controller,

    init: function () {
      this.controller.init();
    },
  });
});
