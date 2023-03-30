Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :movies do
    resources :reviews
  end

  resources :actors
  resources :directors
  resources :users, only: [:create]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  resources :admins, only: [:index, :create, :update, :destroy]
end
