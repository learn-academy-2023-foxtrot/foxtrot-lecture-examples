## Active Record Validations 10/2/23 Foxtrot

## Goal: Halloween party, Contest Databases
- Halloween party: guest name(string), costume description(text), if adult has to bring two bags of candy(integer), check to see child(boolean)
- Contest: name of the contest(string), the time it will start(datetime), who is hosting the contest(integer ---> foreign key)

## Initial process
- Create a new Rails app in the appropriate folder: $ `rails new validations -d postgresql -T`
- $ `cd validations`
- Create a database: $ `rails db:create`
- Add the dependencies for RSpec:
  - $ `bundle add rspec-rails`
  - $ `rails generate rspec:install`
- Generate the model with appropriate columns and data types
  - $ `rails g model HalloweenParty guest_name:string description:text candy:integer child:boolean`
- $ `rails db:migrate`
- Begin the rails server: $ `rails server`
- In a browser navigate to: http://localhost:3000

## TDD
- Write a test
- See it fail
- Write the code to make it pass
- See it pass
- Refactor

## Write a test
- spec/models/halloween_party.rb
```rb
  # boilerplate code

  # import the software needed for the testing file
  require 'rails_helper'

  # Rspec encapsulation of the test created for this model spec
  RSpec.describe HalloweenParty, type: :model do
    # placeholder for the it blocks that will check for the valid data entries
    pending "add some examples to (or delete) #{__FILE__}"
  end
```

- modify the placeholder with it blocks and expect statements

```rb
  # boilerplate code

  # import the software needed for the testing file
  require 'rails_helper'

  # Rspec encapsulation of the test created for this model spec
  RSpec.describe HalloweenParty, type: :model do

    # it blocks that will check for the valid data entries
    # check to see if the model is valid with all the attributes
    it 'is valid with all attributes' do
      # create an entry
      dre = HalloweenParty.create(guest_name: 'Dre', description: 'Patrick Star with a brown cowboy hat', candy: 2, child: false)

      # looks at each attribute
      expect(dre.errors[:guest_name]).to be_empty

      # looking at the whole error hash to be empty
      expect(dre.errors).to be_empty
    end
  end
```

## See the valid attributes pass
- $ rspec spec/models/halloween_party_spec.rb

## Tests for missing attributes

## Write a test for guest name
```rb
  it 'is not valid if missing the guest name' do
    # create the data entry
    dre = HalloweenParty.create(guest_name: nil, description: 'Patrick Star with a brown cowboy hat', candy: 2, child: false)

    # print the error log for the attribute
      # p 'guest name errors', dre.errors[:guest_name]
      # # Output: "guest name errors" []
      
    # expect an error on guest name
    expect(dre.errors[:guest_name]).to_not be_empty
  end
```

## See it fail
- $ rspec spec/models/halloween_party_spec.rb
```bash
  HalloweenParty
    is valid with all attributes
  "guest name errors"
  []
    is not valid if missing the guest name (FAILED - 1)

  Failures:

    1) HalloweenParty is not valid if missing the guest name
      Failure/Error: expect(dre.errors[:guest_name]).to_not be_empty
        expected `[].empty?` to be falsey, got true
      # ./spec/models/halloween_party_spec.rb:26:in `block (2 levels) in <top (required)>'

  Finished in 0.02246 seconds (files took 0.7301 seconds to load)
  2 examples, 1 failure

  Failed examples:

  rspec ./spec/models/halloween_party_spec.rb:19 # HalloweenParty is not valid if missing the guest name
```

## Write the code to make it pass
- app/models/halloween_party.rb
```rb
  class HalloweenParty < ApplicationRecord
    # validation to state that each data entry requires the specified attribute 
    validates :guest_name, presence: true
  end
```

## Write a test for description
```rb
  # missing description
  it 'is not valid if missing the description' do
    # create the data entry
    dre = HalloweenParty.create(guest_name: 'Dre', description: nil, candy: 2, child: false)

    # print the error log for the attribute
      # p 'description errors:', dre.errors[:description]
      # Output without validations: "description errors:" []
      # Output with validations: "description errors:" ["can't be blank"]

    # expect an error on description
    expect(dre.errors[:description]).to_not be_empty
  end
```

## See it pass
- $ rspec spec/models/halloween_party_spec.rb
```bash
  HalloweenParty
    is valid with all attributes
    is not valid if missing the guest name

  Finished in 0.04615 seconds (files took 0.71476 seconds to load)
  2 examples, 0 failures
```
```bash
  HalloweenParty
    is valid with all attributes
    is not valid if missing the guest name
    is not valid if missing the description
```

## Refactor
```rb
  # address redundant code in app/models
  validates :guest_name, presence: true
  validates :description, presence: true
  
  # refactored
  validates :guest_name, :description, presence: true
```
- Make sure that the refactored code is still passing

# Icebox
## unexpected error when running be_valid method
  ## data entry
  ```rb
    dre = HalloweenParty.create(guest_name: 'Dre', description: 'Patrick Star with a brown cowboy hat', candy: 2, child: false)
  ```
  ## incorrect structure --> looking at the whole error hash to be valid
  `expect(dre.errors[:guest_name]).to be_valid`

  ## Solution
  ## be_valid evaluates an instance, an object, an active record, a data entry
  `expect(dre).to be_valid`

## Missing the markdown process for github repo
- will create a PR on the main syllabus to add the following process
***
## Introductory Phase Documentation:  

During the introductory phase of Ruby on Rails, we will create documentation to keep track of the actions taken to build the Rails application and interactions with the database. This documentation will be saved in a markdown file, which will be uploaded to GitHub. This allows other team members to contribute and access the team's code.

### Process for GitHub Repository:
- cd into the database-challenges repository
- Create a new branch: $ `git checkout -b validations-initials1-initials2` (ex. validations-cb-nmr)
- Create a new markdown file: $ `touch validations-student1-student2.md` (ex. validations-charlean-nicole.md)
- Use the markdown file to document the code commands and process
- Code!  

However, please note that the Rails application itself will not be uploaded to GitHub. Consequently, other team members will not have access to the application or the database through the repository. The application and database will only be available on your local machine. For the duration of the challenges, all team members should create their own Rails applications on their respective local machines. After the challenges are completed, it is important to drop and delete the Rails application from your local machine.  

### Process for Rails Application on Local Machine:
- cd to your Desktop
- $ `rails new validations -d postgresql -T`
- cd into the project
- $ `rails db:create`
- Open the project in a text editor
- Open a new terminal tab (command + t)
- Begin the rails server: $ `rails server`
- In a browser navigate to: http://localhost:3000

### Dropping/Deleting a Rails Application
- Drop the database: $ `rails db:drop`
- cd to your Desktop
- Permanently delete the rails app: $ `rm -rf <app-name>`

***