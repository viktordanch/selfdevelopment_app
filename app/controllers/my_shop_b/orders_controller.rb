# MyShopB
module MyShopB
  # CartController
  class OrdersController < MyShopB::ShopApplicationController
    layout 'my_shop_b'
    before_action :authenticate_user!

    def index
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end
  end
end
