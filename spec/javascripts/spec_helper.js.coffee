#= require application
#= require sinon
#= require sinon-chai

mocha.ignoreLeaks()

beforeEach ->
  @page = $("#konacha")
  @sandbox = sinon.sandbox.create()

afterEach ->
  @sandbox.restore()
