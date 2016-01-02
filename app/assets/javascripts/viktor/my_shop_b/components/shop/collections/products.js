define(function (require) {
  var baseCollection = require('my_shop_b_base_collection');
  var product = require('../models/product');

  return baseCollection.extend({
    model: product,

    parse: function (response) {
      this.reset();
      this.add(response);
      this.trigger('afterParse', this.models);
    },

    url: '/my_shop_b/products/list',
  });
});
