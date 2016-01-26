# MyShopB
module MyShopB
  # ProductsController
  class ProductsController < MyShopB::ShopApplicationController
    layout 'my_shop_b'

    def index
      @catalog = Category.catalog
      @products = Product.page(params[:page] || 1).per(4)

      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end

    def list
      books = [1, 2, 3, 4].map do |n|
        { title: "book #{n}",
          description: "Some description for book #{n}",
          image: "/iamge#{n}.png"
        }
      end

      respond_to do |format|
        format.js { render json: books.to_json }
        format.html
      end
    end
  end
end
