Rails.application.routes.draw do

  root to: 'home#index'

  resources :messages do
    patch "flag"  => "messages#update_flag"
  end

end
