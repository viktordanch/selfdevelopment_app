# MyShopB
module MyShopB
  # CartController
  class OrdersController < ApplicationController
    layout 'my_shop_b'

    def index
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end
  end
end
