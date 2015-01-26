#= require underscore
#= require backbone
#= require viktor_backbone/index
#= require_tree ./viktor_backbone/models
#= require_tree ./viktor_backbone/collections

window.App.Collections.users = new window.App.Collections.Users( [new window.App.Models.User,
                                           new window.App.Models.User,
                                           new window.App.Models.User,
                                           new window.App.Models.User,
                                           new window.App.Models.User])
$(document).on 'click', '#add', ->
  window.u = new window.App.Models.User
  return false

$(document).on 'click', '#restore', ->
  window.App.Collections.users.reset( [new window.App.Models.User,
                                        new window.App.Models.User,
                                        new window.App.Models.User,
                                        new window.App.Models.User,
                                        new window.App.Models.User])
  return false

$(document).on 'click', '#destroy', ->
  window.u.destroy()
  return false