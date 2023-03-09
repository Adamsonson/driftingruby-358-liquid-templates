Rails.application.routes.draw do
  resources :mail_templates
  resources :posts
  resource :previewer, only: :create
  root to: 'welcome#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
