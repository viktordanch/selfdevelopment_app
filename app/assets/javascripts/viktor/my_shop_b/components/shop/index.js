define(function (require) {
  var indexView = require('./views/index');
  var indexCollection = require('./collections/products');

  return {
    view: null,
    collection: null,
    init: function () {
      this.collection = new indexCollection();
      this.view = new indexView({ el: '.shopContainer', collection: this.collection });
    },
  };
});
