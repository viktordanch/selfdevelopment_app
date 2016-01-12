class AddProductDescAndProductSDescToProducts < ActiveRecord::Migration
  def change
    add_column :products, :product_s_desc, :text
    add_column :products, :product_desc, :string
  end
end
