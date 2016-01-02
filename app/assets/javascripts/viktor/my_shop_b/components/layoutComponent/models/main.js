define(function (require) {
  var baseModel = require('my_shop_b_base_model');

  return baseModel.extend({
    goTo: function (params) {
      return $.ajax({
        url: params.url,
        type: 'GET',
        // headers: { 'X-CSRF-Token': params.token },
      });
    },
  });
});
