define(function (require) {
  'use strict';
  var chai = require('chai');
  var jQuery = require('jquery');
  var sinonChai = require("sinon-chai");
  var expect = chai.expect;
  var sinon = require('sinon');
  require('jquery');
  require('underscore');
  var Backbone = require('backbone');
  var layoutComponent = require('layoutComponent');

  chai.use(sinonChai);

  describe('layoutComponent component', function () {
    it('layoutComponent in not null object', function () {
      expect(layoutComponent).not.to.be.null;
      expect(typeof layoutComponent).to.be.eq('object');
    });
    it('layoutComponent has not null init function', function () {
      expect(layoutComponent.init).not.to.be.null;
      expect(typeof layoutComponent.init).to.be.eq('function');
    });
  });

  context('before call init function', function () {
    describe('test', function () {
      it('layoutComponent has null view', function () {
        expect(layoutComponent.view).to.be.null;
      });
      it('layoutComponent has null model', function () {
        expect(layoutComponent.model).to.be.null;
      });
    })
  });
  //context('after call init function', function () {
  //  beforeEach(function () {
  //    layoutComponent.init({ url: '/help' });
  //    sinon.stub(jQuery, "ajax").yieldsTo("success", '[1, 2, 3]');
  //  });
  //  afterEach(function () {
  //    jQuery.ajax.restore();
  //  });
  //  describe('test', function () {
  //    it('layoutComponent has not null view', function () {
  //      expect(layoutComponent.view).not.to.be.null;
  //      expect(layoutComponent.view).to.be.an.instanceof(Backbone.View);
  //    });
  //    it('layoutComponent has not null model', function () {
  //      expect(layoutComponent.model).not.to.be.null;
  //      expect(layoutComponent.model).to.be.an.instanceof(Backbone.Model);
  //    });
  //  });
  //  describe('layoutComponent view', function () {
      //it('view has model', function () {
      //  expect(layoutComponent.view.model).not.to.be.null;
      //  expect(layoutComponent.view.model).to.be.an.instanceof(Backbone.Model);
      //  expect(layoutComponent.view.$el.is('body')).to.be.true;
      //});
    //});
  //});
});
