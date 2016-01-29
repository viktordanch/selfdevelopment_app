# Order model
class Order < ActiveRecord::Base
  belongs_to :user
  has_and_belongs_to_many :products
  has_and_belongs_to_many :statuses

  def to_s
    id.to_s
  end
end
