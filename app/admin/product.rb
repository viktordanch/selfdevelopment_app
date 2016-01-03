ActiveAdmin.register Product do
  permit_params :section_id, :title, :short_description, :description, :image
end
