define(function (require) {
  var Backbone = require('backbone');
  var baseView = require('my_shop_b_base_view');
  var precompiledTemplates = require('precompiledTemplates');
  var textTemplate = require('text!./../templates/item.handlebars');
  // require('hbs');
  require('text');

  return baseView.extend({
    textTemplate: textTemplate,
    tagName: 'li',
    tagClass: 'productItem',

    close: function () {
      this.undelegateEvents();
      this.$el.removeData().unbind();
      this.remove();
      Backbone.View.prototype.remove.call(this);
    },

    template: function () {
      return precompiledTemplates.getTemplates(this.textTemplate, 'list_item');
    },

    render: function () {
      this.$el.html(this.template()(this.model.toJSON()));
      return this;
    },
  });
});
