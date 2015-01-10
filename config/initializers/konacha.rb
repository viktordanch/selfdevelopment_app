Konacha.configure do |config|
  config.spec_dir     = "spec/javascripts"
  config.spec_matcher = /_spec\.|_test\./
  config.stylesheets  = %w(application)
  config.driver       = :selenium
end if defined?(Konacha)

# if defined?(Konacha)
#   require 'capybara/poltergeist'
#   Konacha.configure do |config|
#     config.driver = :poltergeist
#   end
# end