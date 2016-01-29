ActiveAdmin.register Product do

  # filter :category_path,
  #        collection: -> { Category.all },
  #        label:      'Category'

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :product_sku, :manufacturer_name,
              :product_name, :product_price, :published, :category_path,
              :product_desc
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end
  form do |f|
    f.inputs :product_name
    f.inputs :manufacturer_name
    f.inputs :product_price
    f.inputs :published
    f.inputs :product_sku
    f.inputs :product_desc
    f.inputs :product_s_desc
    f.inputs do
      f.input :category, label: 'category', as: :select,
              collection: Category.all.map{|c| ["#{c.category_name}", c.category_path]}
    end
    f.actions
  end
end
