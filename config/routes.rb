Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json}  do
    resources :users, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :series do
      resources :episodes, only: [:index, :create]
    end
    resources :episodes, only: [:show]
    resources :reviews, only: [:update, :destroy, :create]
    resources :search, only: [:index]

  end
end


# resources :favorites, only: [:index, :create, :destroy, :update, :show] do
  # member do
  #   post 'add_serie'
  #   delete 'remove_serie'
  # end
# end
