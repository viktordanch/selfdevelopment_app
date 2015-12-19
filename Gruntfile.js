module.exports = function(grunt) {
  grunt.initConfig({

    nightwatch: {
      options: {
        // task options
        standalone: true,

        // download settings
        //jar_version: '2.44.0',
        jar_path: 'selenium-server-standalone-2.48.2.jar',
        config_path: 'nightwatch.json',
        //jar_url: 'http://domain.com/files/selenium-server-standalone-2.48.2.jar',

        // nightwatch settings
        //globals: {foo: 'bar'},
        //globals_path: '',
        //custom_commands_path: 'custom_tests/helpers',
        //custom_assertions_path: 'custom_tests/asserts',
        //src_folders: ["test/e2e"],
        //output_folder: "reports",
        //selenium: {
        //  start_process: true,
        //  selenium_path: "selenium-server-standalone-2-48.2.jar",
        //  log_path: "",
        //  host: "127.0.0.1",
        //  port: 4444
        //},
        //test_settings: {
        //  default: {
        //    launch_url: "http://localhost",
        //    selenium_part: 4444,
        //    selenium_host: "localhost",
        //    silent: true,
        //    desiredCapabilities: {
        //      brouserName: "firefox",
        //      javascriptEnabled: true,
        //      acceptSslCerts: true
        //    }
        //  }
        //}
      }
      //custom: {
        // custom target + overrides
        //config_path: 'nightwatch.json',
        //src_folders: ['test/e2e']
      //}
    }
  });

  grunt.registerTask('default', []);
  grunt.loadNpmTasks('grunt-nightwatch');
};