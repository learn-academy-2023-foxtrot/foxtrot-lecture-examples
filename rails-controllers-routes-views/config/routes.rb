Rails.application.routes.draw do
  get '/greeter' => 'home#greeter'
  get '/programmer' => 'home#programmer'
  get '/pasta' => 'home#pasta'
  get '/landing' => 'home#landing'
  root 'home#landing'
end
