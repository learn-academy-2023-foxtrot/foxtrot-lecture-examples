## Active Record Intro 9/28/23 Foxtrot

can define ORM
can differentiate between a database and an ORM
can visualize a database as a collection of rows and columns
can recall the command to generate a model
can differentiate between terminal and Rails console
can equate models with classes
can recognize that the schema cannot be updated directly
can use appropriate Active Record syntax to perform CRUD actions on a model

Vocabulary
ORM: programming technique that allows us to interact with databases using OOP

model class: database

generate commands: rails terminal command to create models with the applicable dependencies, files, and folders

database schema: current structure of your database

migrations: changes to the database schema

primary key: unique identifier to track each data entry

Active Record: ORM that allows us to perform CRUD actions to the database

rails console: a shell that allows us to interact with the database

## Process
- create the rails application
- Create an empty database
- Create a model
- Save changes
- Interact with the database

## Informational commands
- To see a list rails commands: `$ rails -h`  
- To see local databases: `$ psql`

## Create the rails application  
`$ rails new active-record -d postgresql -T `

## Create an empty database  
`$ rails db:create`

## Create a model  
`$ rails generate model PlayList artist:string song:string genre:string`
  - This command created two files
    1) migration file ---> db/migrate/20230928174228_create_play_lists.rb

        a) tracks the changes to the database schema
          - rails will convert the model PlayList into a table name play_lists, basically making the model name ito a plural snake_case title for the table 

        b) model file ---> app/models/play_list.rb
          - the class is inheriting from the ApplicationRecord

- Save changes  
`$ rails db:migrate`
  - created a schema file --> db/schema.rb
    - tracks the current structure of the database

- Interact with the database  
`$ rails console`

## CRUD
- Read or display all the data entries
> PlayList.all

- Create an instance
> PlayList.create(artist: 'Ahmad Jamal', song: 'The Awakening', genre: 'jazz')

```bash
#<PlayList:0x000000010ee9d888
 id: 1,
 artist: "Ahmad Jamal",
 song: "The Awakening",
 genre: "jazz",
 created_at: Thu, 28 Sep 2023 17:59:31.464251000 UTC +00:00,
 updated_at: Thu, 28 Sep 2023 17:59:31.464251000 UTC +00:00> 
3.2.0 :003 > 
```

- Update
  - identify which entry you will update
  > three = PlayList.find 3
  - then perform update method on the column(s) that need to be modified
  > three.update(genre: 'blues')
  ```bash
  #<PlayList:0x000000010f0f9758
  id: 3,
  artist: "Ahmad Jamal",
  song: "The Awakening",
  genre: "blues",
  created_at: Thu, 28 Sep 2023 18:02:07.690017000 UTC +00:00,
  updated_at: Thu, 28 Sep 2023 18:06:28.291805000 UTC +00:00> 
  ```
-  Delete
  - identify which entry you will delete
  > two = PlayList.find 2
  - then perform destroy method
  > two.destroy

- Exit rails console
  > exit