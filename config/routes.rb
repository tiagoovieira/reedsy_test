Rails.application.routes.draw do
  root 'books#home'

  resources :books, :defaults => { :format => :json}

end
