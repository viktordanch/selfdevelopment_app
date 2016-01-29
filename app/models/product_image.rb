class ProductImage < ActiveRecord::Base
  # This method associates the attribute ":avatar" with a file attachment
  has_attached_file :image, default_url: '/system/missing.png',
                            url: "/system/:attachment/:style_:basename.:extension",
                            path: ":rails_root/public/system/:attachment/:style_:basename.:extension",
                            styles: {
                                thumb: '100x100>',
                                square: '200x200#'
                            }

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
