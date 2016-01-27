# MyShopB
module MyShopB
  # CartController
  class CartController < MyShopB::ShopApplicationController
    layout 'my_shop_b'

    def add_product
      product = Product.find_by_id(params[:product_id])

      if product
        @cart.products << product
        render json: { message: 'product added' }.to_json
      else
        render json: { message: 'product not found' }.to_json, status: 404
      end

    end

    def index
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end
  end
end
