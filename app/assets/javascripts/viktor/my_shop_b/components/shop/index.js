/*global define*/

define(function(require) {
  var indexView = require("./views/index");
  var view;

  return {
    init: function(){
      view = new indexView({ el: ".shopContainer" });
    }
  }
});
