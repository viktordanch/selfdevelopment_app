var requirejs = require('requirejs');

requirejs.config({
  paths: {
    //jquery: '../../app/assets/javascripts/sources/jquery/jquery',
    tests_list: '../../../spec/javascripts/shop_tests/test_list',
    backbone: '../../../app/assets/javascripts/sources/backbone/backbone',
    underscore: '../../../app/assets/javascripts/sources/underscore/underscore',
    hbs: '../../../app/assets/javascripts/sources/hbs',
    text: '../../../app/assets/javascripts/sources/text',
    foundation: '../../../spec/javascripts/shop_tests/hacks/foundation',
    precompiledTemplates: '../../../app/assets/javascripts/viktor/my_shop_b/precompiledTemplates',
    my_shop_b_router: '../../../app/assets/javascripts/viktor/my_shop_b/router',
    foundation_setup: '../../../app/assets/javascripts/viktor/foundation_setup',
    my_shop_b_controller: '../../../app/assets/javascripts/viktor/my_shop_b/controller',
    my_shop_b_base_view: '../../../app/assets/javascripts/viktor/my_shop_b/base/baseView',
    my_shop_b_base_model: '../../../app/assets/javascripts/viktor/my_shop_b/base/baseModel',
    my_shop_b_base_collection: '../../../app/assets/javascripts/viktor/my_shop_b/base/baseCollection'
  },
  packages: [
    {
      name: 'shop_b',
      location: '../../../app/assets/javascripts/viktor/my_shop_b/components/shop',
      main: 'index'
    }
  ],

  shim: {
    jquery: { exports: 'jQuery' },
    backbone: {
      deps: ['jquery', 'underscore']
    },
    foundation: {
      deps: ['jquery']
    }
  }
});

requirejs(['tests_list', 'jquery'], function(tests_list, $){
  console.log($)
  tests_list.run()
});

describe('Init Travis test', function () {
  it('always true', function () {});
});
