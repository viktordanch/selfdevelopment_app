class CreateOrdersProducts < ActiveRecord::Migration
  def change
    create_table :orders_products do |t|
      t.references :order, index: true, foreign_key: true
      t.references :product, index: true, foreign_key: true
    end
  end
end
