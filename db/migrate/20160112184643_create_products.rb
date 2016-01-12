class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products, force: true do |t|
      t.string :product_sku
      t.string :manufacturer_name
      t.string :product_name
      t.string :product_price
      t.string :published
      t.string :category_path
      t.string :file_url

      t.timestamps null: false
    end
  end
end
