## Active Record Migrations 9/28/23 Foxtrot

## Learning Objectives
- can describe the purpose of a migration
- can correctly generate a migration in the terminal
- can determine when a migration should be used
- can apply correct naming conventions to terminal commands and migration files

## Vocabulary
- migrations: tracks changes to the database schema
### Purpose
- manages the changes to the database schema
- create, modify, or delete database tables, columns, rows
- tracking system of all the changes in the order they were implemented

## Signs for the different shells
`>`: represents the rails console commands
`$`: represents the terminal commands
`#`: represents the psql commands

## Task
- Create a FoxtrotTalent database that includes the artist name as a string, the talent as a string.

  ### Initial Process:
  - Create the rails application √
  - Create an empty database √
  - Create a model with the naming convention of singular, PascalCase case √
  - Save those changes √
  - Interact with the database √

## Create Data Entries
> FoxtrotTalent.create(artist: 'Shaun', talent: 'juggler')  
> FoxtrotTalent.create(artist: 'Aleja', talent: 'marathon runner')  
> FoxtrotTalent.create(artist: 'Louis', talent: 'sketch artist')  
> FoxtrotTalent.create(artist: 'Nicole', talent: 'magician')  

```bash
#<FoxtrotTalent:0x0000000109310498
 id: 1,
 artist: "Shaun",
 talent: "juggler",
 created_at: Thu, 28 Sep 2023 20:58:46.026392000 UTC +00:00,
 updated_at: Thu, 28 Sep 2023 20:58:46.026392000 UTC +00:00> 
```
To see all entries: 
> FoxtrotTalent.all
```bash
[#<FoxtrotTalent:0x0000000109fd2fa0
  id: 1,
  artist: "Shaun",
  talent: "juggler",
  created_at: Thu, 28 Sep 2023 20:58:46.026392000 UTC +00:00,
  updated_at: Thu, 28 Sep 2023 20:58:46.026392000 UTC +00:00>,
 #<FoxtrotTalent:0x0000000109fd2e60
  id: 2,
  artist: "Aleja",
  talent: "marathon runner",
  created_at: Thu, 28 Sep 2023 21:02:37.117447000 UTC +00:00,
  updated_at: Thu, 28 Sep 2023 21:02:37.117447000 UTC +00:00>,
 #<FoxtrotTalent:0x0000000109fd2d20
  id: 3,
  artist: "Louis",
  talent: "sketch artist",
  created_at: Thu, 28 Sep 2023 21:02:50.313700000 UTC +00:00,
  updated_at: Thu, 28 Sep 2023 21:02:50.313700000 UTC +00:00>,
 #<FoxtrotTalent:0x0000000109fd2be0
  id: 4,
  artist: "Nicole",
  talent: "magician",
  created_at: Thu, 28 Sep 2023 21:03:08.968049000 UTC +00:00,
  updated_at: Thu, 28 Sep 2023 21:03:08.968049000 UTC +00:00>] 
```

## Delete an entry
> louis = FoxtrotTalent.find 3  
> louis.destroy

## Exit console
> exit

## Make migration files
- `$ rails g migration AddPayColumn`
  - PascalCase: AddPayColumn
  - snake_case: add_pay_column

- command creates a migration file ---> db/migrate/20230928211409_add_pay_column.rb
```rb
  class AddPayColumn < ActiveRecord::Migration[7.0]
    def change
    end
  end
```

- modify the change method with an appropriate change definition
```rb
  def change
    # add_column :table_name, :column_name, :datatype
    add_column :foxtrot_talents, :pay, :string
  end
```

## Save changes to the db schema
- `$ rails db:migrate`


## Update an entry
- When we view the database entires on the rails console, we will see a `nil` value for the `pay` attribute. We will have to update the values for the entries. 
> nicole = FoxtrotTalent.where(artist: 'Nicole')  
> nicole.update(pay: '$500')
```bash
[#<FoxtrotTalent:0x00000001094a2270
  id: 4,
  artist: "Nicole",
  talent: "magician",
  created_at: Thu, 28 Sep 2023 21:03:08.968049000 UTC +00:00,
  updated_at: Thu, 28 Sep 2023 21:03:08.968049000 UTC +00:00,
  pay: nil>]
```

## Delete the rails app:
  - If you made changes on README.md, make sure to copy and paste code from that file unto a separate markdown file created on the database challenges repo..
  - Drop the database: `$ rails db:drop`
  - Go up one level: `$ cd ..`
  - Permanently delete the rails app: `$ rm -rf <app-name>`
- Check to see if remove from local storage: `$ psql` 
- To see a list of all the local databases: `# \l`
- To exit psql shell: `# q`
- To return to the terminal: `# \q`