# MyShopB
module MyShopB
  # CartController
  class ShopApplicationController < ApplicationController

    before_action :cart
    # def set_locale
    #   # I18n.locale = params[:locale]
    #   I18n.locale = params[:locale]
    # end
    #
    # def self.default_url_options(options={})
    #   options.merge({ :locale => I18n.locale })
    # end


    protected

    def cart
      @cart = Cart.find_by_id(session[:cart_id])

      unless @cart
        @cart = Cart.create
        session[:cart_id] = @cart.id
      end
    end

    def authenticate_user!
      if user_signed_in?
        super
      else
        message = "Please <a href='#{new_user_session_path}'" \
                  " title='Sign in'>sign in</a> before"
        redirect_to my_shop_b_root_path,
                    notice: message
      end
    end
  end
end
