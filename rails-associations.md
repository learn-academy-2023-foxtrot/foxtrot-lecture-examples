## Rails Associations
### Process:
```shell
  $ rails new rails_associations -d postgresql -T
  $ cd rails_associations
  $ rails db:create
  $ code .
  $ rails s
```

### Concepts:
> Association: 
> - relationship between database models

> Primary Key: 
> - unique identifier generated by Rails automatically

> Foreign Key:
> - a column that holds the primary key from another model in order to establish an association

#### Generate a Cohort model
```shell
$ rails g model Cohort name:string year:string
$ rails db:migrate
```
```ruby
# db/migrate/20230929163524_create_cohorts.rb
class CreateCohorts < ActiveRecord::Migration[7.0]
  def change
    create_table :cohorts do |t|
      t.string :name
      t.string :year

      t.timestamps
    end
  end
end
```
```ruby
# app/models/cohort.rb
class Cohort < ApplicationRecord
end
```

#### Generate a Student model
```shell
$ rails g model Student first_name:string last_name:string cohort_id:integer
$ rails db:migrate
```
```ruby
# db/migrate/20230929164942_create_students.rb
class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.integer :cohort_id

      t.timestamps
    end
  end
end
```
```ruby
# app/models/student.rb
class Student < ApplicationRecord
end
```

#### Create the association:
```ruby
# app/models/cohort.rb
class Cohort < ApplicationRecord
  has_many :students
end
```
```ruby
# app/models/student.rb
class Student < ApplicationRecord
  belongs_to :cohort
end
```

#### Rails console:
> open rails console
```shell
$ rails c
```
>create a new instance of a cohort
```shell
> Cohort.create(name:"foxtrot", year:"2023")
 => 
 #<Cohort:0x0000000105ab4130
 id: 1,
 name: "foxtrot",
 year: "2023",
 created_at: Fri, 29 Sep 2023 16:54:57.057254000 UTC +00:00,
 updated_at: Fri, 29 Sep 2023 16:54:57.057254000 UTC +00:00> 
```
> assigning the foxtrot cohort to a variable
```shell
> foxtrot23 = Cohort.find(1)
```
> creating a new student in foxtrot cohort
```shell
> foxtrot23.students.create(first_name:"Joe", last_name:"Schmo")
 => 
 #<Student:0x0000000106413028
 id: 1,
 first_name: "Joe",
 last_name: "Schmo",
 cohort_id: 1,
 created_at: Fri, 29 Sep 2023 16:59:15.520579000 UTC +00:00,
 updated_at: Fri, 29 Sep 2023 16:59:15.520579000 UTC +00:00> 
```
#### Recap:
1) Create appropriate models
2) Assign the associations in the models
3) Create instances and assign appropiate associations
- Primary Key is the rails generated id
- Foreign Key is assigned by developer to establish the association
- If foreign key column is left out, use a migration to add_column to the model (remember to migrate)