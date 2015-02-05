window.App.Models.User = Backbone.Model.extend
  defaults:
    id: 4,
    name: 'name',
    email: 'mail@gmail.com'

  urlRoot: '/users'