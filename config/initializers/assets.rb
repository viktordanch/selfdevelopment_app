# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w(kris.js kris.css)
Rails.application.config.assets.precompile += %w(ihor.js ihor.css)
Rails.application.config.assets.precompile += %w(vasiliy.js vasiliy.css)
Rails.application.config.assets.precompile += %w(modernizr.js)
Rails.application.config.assets.precompile += %w(viktor.js viktor.css)
Rails.application.config.assets.precompile += %w(my_shop_b.js shop_b.css)
