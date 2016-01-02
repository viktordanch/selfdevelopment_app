define(function (require) {
  'use strict';
  var chai = require('chai');
  var sinonChai = require("sinon-chai");
  var expect = chai.expect;
  var sinon = require('sinon');
  var controller = require('my_shop_b_controller');
  //var Backbone = require('backbone');

  chai.use(sinonChai);

  describe('my_shop_b controller', function () {
    it('controller has init function', function () {
      expect(controller.init).not.to.be.null;
      expect(typeof controller.init).to.be.eq('function');
    });
    it('controller has init layout function', function () {
      expect(controller.init_layout).not.to.be.null;
      expect(typeof controller.init_layout).to.be.eq('function');
    });
    it('controller has layout component', function () {
      expect(controller.layout_component).not.to.be.null;
      expect(typeof controller.layout_component).to.be.eq('object');
    });
    it('controller init layout function call init on layout component', function () {
      sinon.spy(controller.layout_component, "init");
      controller.layout_component.init = sinon.stub();
      controller.init_layout();
      expect(controller.layout_component.init).to.have.been.calledOnce;
    });
    it('controller init function call init layout function', function () {
      sinon.spy(controller, "init_layout");
      controller.layout_component.init = sinon.stub();
      controller.init();
      expect(controller.init_layout).to.have.been.calledOnce;
    });
  });
});
