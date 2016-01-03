class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.references :section, index: true, foreign_key: true
      t.string :title
      t.string :short_description
      t.text :description
      t.string :image

      t.timestamps null: false
    end
  end
end
