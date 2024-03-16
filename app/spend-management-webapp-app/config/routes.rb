Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :tests, only: [:index, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :test, only: [:index]
    end
  end
end
