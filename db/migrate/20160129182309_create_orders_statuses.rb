class CreateOrdersStatuses < ActiveRecord::Migration
  def change
    create_table :orders_statuses do |t|
      t.references :order, index: true, foreign_key: true
      t.references :status, index: true, foreign_key: true
    end
  end
end
