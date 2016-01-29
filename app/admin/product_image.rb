ActiveAdmin.register ProductImage do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :image
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end

  # controller do
  #   def permitted_params
  #     params.permit project: [:image]
  #   end
  # end

  form do |f|
    f.inputs "Project Details" do
      f.input :product_id, label: 'Product', as: :select,
              collection: Product.all.map{|p| ["#{p.product_name}, #{p.product_sku}", p.id]}
      f.input :image, :as => :file , :hint => f.template.image_tag(f.object.image.url(:thumb))
      # Will preview the image when the object is edited
    end
    f.actions
  end

  show do |ad|
    attributes_table do
      row :image do
        image_tag(ad.image.url(:thumb))
      end
      # Will display the image on show object page
    end
  end
end
