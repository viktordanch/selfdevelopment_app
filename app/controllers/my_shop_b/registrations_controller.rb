# MyShopB
module MyShopB
  # CartController
  class RegistrationsController < Devise::RegistrationsController
    layout 'my_shop_b'

    def after_inactive_sign_up_path_for(_resource)
      my_shop_b_root_path
    end
  end
end
