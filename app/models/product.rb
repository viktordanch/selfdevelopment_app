# Product model
class Product < ActiveRecord::Base
  belongs_to :section
end
