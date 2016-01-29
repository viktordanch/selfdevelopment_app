ActiveAdmin.register Order do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :user_id,
              product_ids: [],
              status_ids: []
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end
  form do |f|
    f.inputs 'Edit' do
      f.input :products, as: :select, html: { multipart: true }, collection: Product.all
      f.input :statuses, as: :check_boxes, collection: Status.all
      f.input :user, :as => :select
    end
    f.actions
  end
end
