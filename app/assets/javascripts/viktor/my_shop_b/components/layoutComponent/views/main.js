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

    checkUsersLink: function () {
      if (location.href.match('\/users')) {
        if (this.$el.find('.main').html().length < 10) {
          this.renderStaticPage({ url: '/my_shop_b', skipChking: true });
        }
        return true;
      }
      return false;
    },

    renderStaticPage: function (params) {
      if (this.checkUsersLink(params) && !params.skipChking) {
        return;
      }

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
