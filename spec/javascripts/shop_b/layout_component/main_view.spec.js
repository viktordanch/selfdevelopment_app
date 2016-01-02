define(function (require) {
  'use strict';
  var chai = require('chai');
  var sinonChai = require("sinon-chai");
  var expect = chai.expect;
  var sinon = require('sinon');
  require('jquery');
  require('underscore');
  var Backbone = require('backbone');
  var view;
  var layoutComponent = require('layoutComponent');

  chai.use(sinonChai);

  describe('layoutComponent main view', function () {
    //before(function () {
    //  layoutComponent.init({ url: '/help' });
    //  view = layoutComponent.view;
    //});
    //it('view call init_user method when initiated', function () {
    //  sinon.spy(view, 'init_user');
    //  view.initialize();
    //  expect(view.init_user).to.have.been.calledOnce;
    //  view.init_user.restore();
    //});
    //it('view has events', function () {
    //  expect(typeof view.events).to.be.eq('object');
    //  expect(Object.keys(view.events).length).to.be.eq(1);
    //});
    //it('view has renderStaticPage function', function () {
    //  expect(view.renderStaticPage).not.to.be.null;
    //  expect(typeof view.renderStaticPage).to.be.eq('function');
    //});
    //it('view renderStaticPage call model goTo function', function () {
      //var model = view.model;
      //sinon.spy(model, 'goTo');

      //var e = { target: '<a href="/test"></a>' };
      //view.renderStaticPage(e);
      //expect(model.goTo).to.have.been.calledOnce;
      //expect(model.goTo).to.have.been.calledWith({ url: '/test' });
      //model.goTo.restore();
    //});
  });

});