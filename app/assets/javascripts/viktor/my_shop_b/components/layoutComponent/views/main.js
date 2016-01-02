define(function (require) {
  var baseView = require('my_shop_b_base_view');

  return baseView.extend({
    initialize: function () {
      this.init_user();
    },

    init_user: function () {
      $('meta[name=csrf-token]').attr('content');
    },

    events: {
      'click header li a, footer a': 'navigateTo',
    },

    renderStaticPage: function (params) {
      this.model.goTo({ url: params.url }).then(
        function (response) {
          this.$el.find('.main').html(response);
        }.bind(this)
      ).fail(
        function (response) {
          this.$el.find('.main').html(response.responseText);
        }.bind(this)
      );
    },

    navigateTo: function (e) {
      var $link = $(e.target).is('a') ? $(e.target) : $(e.target).parents('a');

      window.appRouter.navigate($link.attr('href'), { trigger: true });
      return false;
    },
  });
});
