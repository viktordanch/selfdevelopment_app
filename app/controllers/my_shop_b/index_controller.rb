# MyShopB
module MyShopB
  # IndexController
  class IndexController < MyShopB::ShopApplicationController
    layout 'my_shop_b'

    def landing
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end

    def about_us
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end

    def contact_us
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end

    def term_of_use
      respond_to do |format|
        format.js { render layout: false }
        format.html
      end
    end
  end
end
