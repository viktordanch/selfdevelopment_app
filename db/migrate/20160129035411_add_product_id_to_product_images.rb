class AddProductIdToProductImages < ActiveRecord::Migration
  def change
    add_reference :product_images, :product, index: true, foreign_key: true
  end
end
