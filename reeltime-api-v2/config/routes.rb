Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :movies do
    resources :reviews
  end

  resources :actors
  resources :directors
  resources :users, only: [:create]

  get 'movies', to: 'movies#index'
  get 'actors', to: 'actors#index'
  get 'users', to: 'users#index'
  get 'reviews', to: 'reviews#index'

  

  # Defines the root path route ("/")
  # root "articles#index"
end
