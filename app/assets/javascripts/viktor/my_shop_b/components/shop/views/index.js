/*global define*/

define(function(require) {
  require("hbs");
  var baseView = require("my_shop_b_base_view");
  var indexTemplate = require("hbs!./../templates/index");

  return baseView.extend({
    template: indexTemplate,
    initialize: function(){
      this.render();
    },

    render: function(){
      this.$el.html(this.template());
    }
  });

});