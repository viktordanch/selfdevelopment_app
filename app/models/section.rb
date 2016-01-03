# Section model
class Section < ActiveRecord::Base
  has_many :products
  belongs_to :department
end
