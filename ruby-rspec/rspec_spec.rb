# rspec_spec
# require the rspec tools
require 'rspec'
# require the file that contains our code
require './book.rb'

# describe block with do/end block
describe 'Book' do
  # it block with do/end block
  it 'has to real' do
    # expect statement will run the new method and expect the creation of a new instance of Book
    # this expect statement is using curly brackets because the outcome is an action/behavior
    expect{Book.new}.to_not raise_error
  end

  # Book should have a title
  it 'has a title' do
    # create a new instance of Book
    my_book = Book.new
    # call on setter method to give this book a title
    my_book.title = 'The Hot Zone'
    # expect statement will use parenthesis because we are working with data NOT behavior
    expect(my_book.title).to be_a String
    expect(my_book.title).to eq 'The Hot Zone'
  end

  # each spec does not see the ones above (they have their own scopes)

  # Book has an author
  it 'has an author' do
    my_book = Book.new
    # our book will always start with an anonymous author
    expect(my_book.author).to be_a String
    expect(my_book.author).to eq 'anonymous'
    # update Book to have a real author name
    my_book = Book.new 'Richard Preston'
    # expect out Book to now have the authors real name NOT anonymous it was created with
    expect(my_book.author).to eq 'Richard Preston'
  end

  # Book has a current page (books page is just data)
  it 'has a current page' do
    my_book = Book.new
    expect(my_book.page).to be_a Integer
    expect(my_book.page).to eq 1
  end

  # Book can read the pages (changing the page is an action/behavior that is executed)
  it 'can read the pages' do
    my_book = Book.new
    # expect statement is going to change pages as we read our book
    expect{my_book.read 10}.to change{my_book.page}.from(1).to(11)
  end

end