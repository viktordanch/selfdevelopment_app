class AddImageColumnsToProductImage < ActiveRecord::Migration
  def up
    add_attachment :product_images, :image
  end

  def down
    remove_attachment :product_images, :image
  end
end
