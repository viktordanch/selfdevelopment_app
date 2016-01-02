define(function (require) {
  var mainView = require('./views/main');
  var mainModel = require('./models/main');

  return {
    view: null,
    model: null,
    init: function (params) {
      if (!this.model) {
        this.model = new mainModel();
      }
      if (!this.view) {
        this.view = new mainView({ model: this.model, el: 'body' });
      }
      this.view.renderStaticPage(params);
    },
  };
});
