Rails.application.routes.draw do
  resources :decks, only: [:show, :update, :destroy]
  resources :questions, only: [:index]
  resources :users, only: [:index, :create]
  post '/login', to: 'sessions#create'
  # get '/profile', to: 'users#show'
  # get '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
