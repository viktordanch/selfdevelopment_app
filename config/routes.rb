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
    resources :products, only: [:index]
  end
end
