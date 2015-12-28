/*global define*/

define(function(require) {
  var indexView = require("./views/index");
  var indexCollection = require("./collections/products");
  var view, collection;

  return {
    init: function(){
      collection = new indexCollection();
      view = new indexView({ el: ".shopContainer", collection: collection });
    }
  }
});
