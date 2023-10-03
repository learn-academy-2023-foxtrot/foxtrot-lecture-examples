Rails.application.routes.draw do
  get '/greeter' => 'home#greeter'
  get '/programmer' => 'home#programmer'
  get '/pasta' => 'home#pasta'
  get '/landing' => 'home#landing'
  get '/github_user/:username/:logged_in' => 'github_account#github_user'
  root 'home#landing'
end
