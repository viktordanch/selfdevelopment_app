class CreateCartsProductsTable < ActiveRecord::Migration
  def change
    create_table :carts_products do |t|
      t.references :product, index: true, foreign_key: true
      t.references :cart, index: true, foreign_key: true
    end
  end
end
