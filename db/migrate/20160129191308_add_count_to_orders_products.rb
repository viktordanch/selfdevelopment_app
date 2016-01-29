class AddCountToOrdersProducts < ActiveRecord::Migration
  def change
    add_column :orders_products, :count, :integer
  end
end
