define(function (require) {
  var Backbone = require('backbone');
  var baseView = require('my_shop_b_base_view');
  var itemView = require('./itemView');
  var precompiledTemplates = require('precompiledTemplates');
  var textTemplate = require('text!./../templates/index.hbs');
  require('hbs');
  require('text');
  // require('foundation_setup');

  return baseView.extend({
    textTemplate: textTemplate,
    nestedView: itemView,
    nestedViews: [],

    template: function () {
      return precompiledTemplates.getTemplates(this.textTemplate, 'list_template');
    },

    initialize: function () {
      this.collection.on('afterParse', this.renderItems, this);
      this.render();
      this.collection.fetch();
    },

    clearNestedViews: function () {
      this.nestedViews.forEach(function (view) {
        view.close();
      });
    },

    close: function () {
      this.clearNestedViews();
      this.collection.off('afterParse');
      this.undelegateEvents();
      this.$el.removeData().unbind();
      this.remove();
      Backbone.View.prototype.remove.call(this);
    },

    renderItems: function (items) {
      var fragment = document.createDocumentFragment();
      var container = this.$el.find('.productItems');
      var itemView;

      this.clearNestedViews();

      items.forEach(function (item) {
        itemView = new this.nestedView({ model: item });
        fragment.appendChild(itemView.render().el);
        this.nestedViews.push(itemView);
      }.bind(this));

      container.html(fragment);
    },

    render: function () {
      this.$el.html(this.template());
    },
  });
});
