# Department model
class Department < ActiveRecord::Base
  has_many :sections
end
