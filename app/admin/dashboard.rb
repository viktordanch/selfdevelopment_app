require 'roo'

ActiveAdmin.register_page 'Dashboard' do
  menu priority: 1, label: proc { I18n.t('active_admin.dashboard') }

  content title: proc { I18n.t('active_admin.dashboard') } do
    div class: 'blank_slate_container', id: 'dashboard_default_message' do
      span class: 'blank_slate' do
        span I18n.t('active_admin.dashboard_welcome.welcome')
        small I18n.t('active_admin.dashboard_welcome.call_to_action')
      end
    end

    section "Search Links", :priority => 1 do
      div do
        render 'product'
      end
    end

    # active_admin_form_for '/import/products' do |f|
    #   inputs :title
    #   actions
    # end

    # form partial: 'product'
    # form render partial: 'product'
    # Here is an example of a simple dashboard with columns and panels.
    #
    # columns do
    #   column do
    #     panel "Recent Posts" do
    #       ul do
    #         Post.recent(5).map do |post|
    #           li link_to(post.title, admin_post_path(post))
    #         end
    #       end
    #     end
    #   end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content

  page_action :import_categories, method: :post do
    begin
      message = Category.import(params[:file])

      if message && message[:error_row]
        notification = { alert: "error to load #{message[:error_row].to_json}" }
      elsif message && message[:loaded_rows_count]
        notification = { notice: "Loaded #{message[:loaded_rows_count]} categories" }
      end
    rescue => ex
      notification = { alert: (notification || '') + "error to load #{ex.message}" }
    end

    redirect_to :back, notification
  end

  page_action :import_products, method: :post do
    Product.all.destroy_all if params[:total_remove]

    begin
      message = Product.import(params[:file])

      if message && message[:error_row]
        notification = { alert: "error to load #{message[:error_row].to_json}" }
      elsif message && message[:loaded_rows_count]
        notification = { notice: "Loaded #{message[:loaded_rows_count]} products" }
      end
    rescue => ex
      notification = { alert: (notification || '') + "error to load #{ex.message}" }
    end

    redirect_to :back, notification
  end

  page_action :import_products_description, method: :post do
    begin
      message = Product.import_description(params[:file])

      if message && message[:error_row]
        notification = { alert: "error to load #{message[:error_row].to_json}" }
      elsif message && message[:loaded_rows_count]
        notification = { notice: "Loaded #{message[:loaded_rows_count]} products" }
      end
    rescue => ex
      notification = { alert: (notification || '') + "error to load #{ex.message}" }
    end

    redirect_to :back, notification
  end
end
