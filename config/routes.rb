Rails.application.routes.draw do


  get 'welcome/index', to: 'welcome#index'
  get 'viktor', to: 'viktor#index'
  get 'viktor/california_birds', to: 'viktor#california_birds'
  get 'ihor', to: 'ihor#index'
  get 'kris', to: 'kris#index'
  get 'vasiliy', to: 'vasiliy#index'

  root 'welcome#index'

  namespace :my_shop_b do
    root 'index#landing'
    get '/about_us', to: 'index#about_us'
    get '/contact_us', to: 'index#contact_us'
    get '/term_of_use', to: 'index#term_of_use'
    resources :orders, only: [:index]
    resources :cart, only: [:index]

    resources :products, only: [:index] do
      get '/list', to: 'products#list', on: :collection
    end
  end
  devise_for :users, controllers: { sessions: 'my_shop_b/sessions',
                                    registrations: 'my_shop_b/registrations',
                                    confirmations: 'my_shop_b/confirmations',
                                    passwords: 'my_shop_b/passwords' }
end
