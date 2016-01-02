define(function (require) {
  var shopComponent = require('shop_b');
  var navigationComponent = require('shop_b');
  return {
    init_layout: function () {
      this.layout_component.init();
    },
    layout_component: navigationComponent,
    init: function () {
      this.init_layout();
      //shopComponent.init();
    }
  };
});
