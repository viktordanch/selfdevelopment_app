Rails.application.routes.draw do
  get 'welcome/index', to: 'welcome#index'
  get 'viktor', to: 'viktor#index'
  get 'viktor/backbone', to: 'viktor#index_backbone', as: :viktor_backbone
  get 'ihor', to: 'ihor#index'
  get 'kris', to: 'kris#index'
  get 'vasiliy', to: 'vasiliy#index'

  root 'welcome#index'

  resource :users do
    delete '/:id', to: 'users#destroy', on: :collection
  end
end
