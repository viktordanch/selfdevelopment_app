define(function (require) {
  var Handlebars = require('hbs/handlebars');

  return {
    precompile: function (template) {
      var precompiled = new Function('return ' + Handlebars.precompile(template))();
      var theTemplate = Handlebars.template(precompiled);
      return theTemplate;
    },
    getTemplates: function (template, key) {
      var _template = this.templates[key];
      if (!_template) {
        _template = this.precompile(template);
        this.templates[key] = _template;
      }
      return _template;
    },
    templates: {},
  };
});
