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

describe 'Library' do

  it 'has to be real' do
    expect{Library.new}.to_not raise_error
  end

  it 'uses an array to hold the books' do
    my_library = Library.new
    expect(my_library.book_collection).to be_a Array
  end  

  it 'has an array of books' do
    # create new instances of books to use for our library
    the_giver = Book.new
    hunger_games = Book.new
    # create a new instance of library to store the books above
    my_library = Library.new
    # add_books will be our method to add the new books we want to see in our library
    my_library.add_books the_giver
    my_library.add_books hunger_games
    # we can expect that the array in our book_collection will not be empty
    expect(my_library.book_collection).not_to be_empty
    # we can also expect that the method we created to add the books will shovel the books into our array
    # our expect statement is just showing the data inside of the array so we will use parenthesis (the above method has already preformed the behavior and we are now just expecting to see the data in there)
    expect(my_library.book_collection).to contain_exactly(the_giver, hunger_games)
  end

end