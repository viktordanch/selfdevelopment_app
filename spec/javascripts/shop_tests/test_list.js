define(function () {
  //var backbone = require('backbone');
  //console.log(require('../../../spec/javascripts/shop_tests/app/route.spec'));
  console.log('in test run')
  return {
    run: function () {
      console.log('all tests list')
      require('../../../spec/javascripts/shop_tests/app/route.spec');
    }
  }
});