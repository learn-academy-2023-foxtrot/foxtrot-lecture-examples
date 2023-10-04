## Restful Routes 10/4/23 Foxtrot

### Restful Routes
- REST stands for Representational State Transfer
- Restful routes: URL that maps to a particular action and HTTP verb without our web application
- Structured, standardized way to create, read, update, and delete data in the web application.
- Makes it easier for developers to build and maintain applications and for clients to interact with the application

## CRUD actions --> HTTP verb --> Resftul routes

- When creating a data entry, it requires two steps: new, create
- When updating a data entry, it requires two steps: edit, update

### Create --> POST
- create: saves a new data entry in the database from the values given on the new html form

### Read --> GET
- new: displays a html form to allow the user to give values for the required attributes that will be used to create a data entry
- index: displays all the data entries
- show: displays one data entry, requires a param
- edit: displays a html form to allow the user to give values for the required attributes that will be used to update a data entry, requires a param

### Update --> PUT or PATCH
- update: saves the changes to an existing data entry in the database from the values given on the edit html form, requires a param

### Delete --> DELETE
- destroy: removes a data entry from the database, requires a param

## Controllers
- methods will be named after the restful route
```rb
def index
  @businesses = Business.all
end
```

## Routes
```rb
  # http verb '/url' => 'controller#method'
  get '/businesses' => 'business#index'
```