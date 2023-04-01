Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :movies, only: [:index, :show, :create, :update, :destroy] do
    resources :reviews, only: [:index, :create, :destroy]
  end

  resources :actors, only: [:index, :show]

  resources :users, only: [:create, :update, :destroy] do
    resources :movies, only: [:index], controller: 'users/movies'
  end

  resources :sessions, only: [:create, :destroy]
  get '/authenticated', to: 'sessions#authenticated'
  

  # Defines the root path route ("/")
  # root "articles#index"
end
