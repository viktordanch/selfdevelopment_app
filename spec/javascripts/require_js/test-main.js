var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
        // then do not normalize the paths
        var normalizedTestModule = file.replace(/^\.js$/g, '');
        allTestFiles.push(normalizedTestModule);
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',

    paths: {
        chai: '../node_modules/chai/chai',
        sinon: '../spec/javascripts/libs/sinon-1.17.2',
        'sinon-chai': '../node_modules/sinon-chai/lib/sinon-chai',
        jquery: '../app/assets/javascripts/sources/jquery/jquery',
        underscore: '../app/assets/javascripts/sources/underscore/underscore',
        backbone: '../app/assets/javascripts/sources/backbone/backbone',
        //hbs: '../app/assets/javascripts/sources/hbs',
        handlebars: '../app/assets/javascripts/sources/handlebars',
        text: '../app/assets/javascripts/sources/text',
        foundation: '../app/assets/javascripts/sources/foundation',
        foundation_setup: '../app/assets/javascripts/viktor/foundation_setup',
        precompiledTemplates: '../app/assets/javascripts/viktor/my_shop_b/precompiledTemplates',
        my_shop_b_router: '../app/assets/javascripts/viktor/my_shop_b/router',
        my_shop_b_controller: '../app/assets/javascripts/viktor/my_shop_b/controller',
        my_shop_b_base_view: '../app/assets/javascripts/viktor/my_shop_b/base/baseView',
        my_shop_b_base_model: '../app/assets/javascripts/viktor/my_shop_b/base/baseModel',
        my_shop_b_base_collection: '../app/assets/javascripts/viktor/my_shop_b/base/baseCollection'
    },

    packages: [
        {
            name: 'shop_b',
            location: '../app/assets/javascripts/viktor/my_shop_b/components/shop',
            main: 'index'
        }
    ],

    // dynamically load all test files
    //deps: ['../javascripts/sample.spec'],
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
