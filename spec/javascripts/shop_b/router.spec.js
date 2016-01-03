define(function (require) {
  'use strict';
  var chai = require('chai');
  var sinonChai = require("sinon-chai")
  var expect = chai.expect;
  var sinon = require('sinon');
  var router = require('my_shop_b_router');
  var Backbone = require('backbone');
  var shopRoute = new router;

  chai.use(sinonChai);

  describe('my_shop_b router', function () {
    it('routes is instance or Backbone Router', function () {
      expect(shopRoute).to.be.an.instanceof(Backbone.Router);
    });
    //it('routes to respond to *path and call init method', function () {
    //  expect(shopRoute.routes).to.have.any.keys('*path');
    //  expect(shopRoute.routes['*path']).to.eq('init');
    //});
    it('routes has not null controller', function () {
      expect(shopRoute.controller).not.to.be.null;
      expect(typeof shopRoute.controller).to.be.eq('object');
    });
    it('routes has not null init function', function () {
      expect(shopRoute.init).not.to.be.null;
      expect(typeof shopRoute.init).to.be.eq('function');
    });
    it('routes init function call controller init function', function () {
      sinon.spy(shopRoute.controller, "init");
      shopRoute.init();
      expect(shopRoute.controller.init).to.have.been.calledOnce;
      shopRoute.controller.init.restore();
    });
  });
});
