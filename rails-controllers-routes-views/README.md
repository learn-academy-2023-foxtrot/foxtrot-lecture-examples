# Rails Controllers, Routes, Views

- `-d` drops the sqlite database
- `postgresql` - database that replaces sqlite
- `-T` - drops the minitest framework
- MVC - model, view, controller, architecture pattern
- model - class, data layer, business logic
- views - the thing the user sees and interacts with
- ORM - object relational mapper, Active Record is the ORM for Rails, ruby-like code and translate it to SQL
- controller - manages traffic on the app, routes
- request - location (url, IP address) and action (http verb - get, put, patch, delete, post)
- response - status code and payload (HTML)
- rails g controller Home
  - controller class
  - view directory
- erb - embedded Ruby `<%=  %>`
- link
  - `<a href="link-here">go here</a>`
  - link_to is a Ruby helper method, takes two arguments - the text for the link, the route


# Params
- https://github.com/sjproctor?tab=repositories
- pass information through the URL which can dynamically influence out app

- param structure is a hash:
params = {username: 'Sarah'}
params[:username]

Params were optional:
http://localhost:3000/github_user/?username=Sarah

Params are required:
http://localhost:3000/github_user/Sarah

Route requiring params: get '/github_user/:username' => 'github_account#github_user'

- params will always be a string