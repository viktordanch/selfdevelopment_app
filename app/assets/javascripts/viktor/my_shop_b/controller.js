define(function (require) {
  // var shopComponent = require('shop_b');
  var navigationComponent = require('layoutComponent');
  return {
    init_layout: function (params) {
      this.layout_component.init(params);
    },
    layout_component: navigationComponent,
    init: function (params) {
      this.init_layout(params);
      // shopComponent.init();
    },
  };
});
