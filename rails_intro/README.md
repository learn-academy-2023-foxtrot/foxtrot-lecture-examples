## Intro to Rails 9/27/23 Foxtrot
- Rails: 'Convention over Configuration', comes with a predetermined layout of files and folders with naming conventions, eases the development phase of creating a web application

- Framework: Rails
- Programming language: Ruby

### MVC architecture:
  - Model: the database
  - View: what the user sees
  - Controller: dictates what data is needed from the model and then sent to the view

### Setup
- Create a new rails application: $ rails new rails_intro -d postgresql -T
- Cd into the application: cd rails_intro
- Create a database: $ rails db:create
- Start the server: $ rails server
- Open application in the web browser: `http://localhost:3000`

### Local databases
- To see all the databases on local machine: 
  - $ `psql`
  - $ `\l`
  - To exit:
    - $ `q`
    - $ `\q`

### Rails tour
  - Gemfile: all the ruby gems in the application
  - MVC:
    - model --> app/models
    - view --> app/views
    - controller --> app/controllers
  - config/routes.rb: describes what controller actions to take for http requests
  - db: database schema and changes to the database

