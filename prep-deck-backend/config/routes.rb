Rails.application.routes.draw do
  resources :decks
  #put/patch '/decks/:deck_id', to 'decks#update' is included in resources so I don't need to define it. 
  resources :questions
  resources :users
  post '/login', to: 'sessions#create'
  # get '/profile', to: 'users#show'
  # get '/logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
