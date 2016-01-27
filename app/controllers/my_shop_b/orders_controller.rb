# MyShopB
module MyShopB
  # CartController
  class OrdersController < MyShopB::ShopApplicationController
    layout 'my_shop_b'
    before_action :authenticate_user!

    def create
      order = current_user.orders.create
      order.products << @cart.products

      @cart.products.delete_all

      redirect_to action: :index, notice: 'Order successfully created'
    end

    def index
      @orders = current_user.orders
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end
  end
end
