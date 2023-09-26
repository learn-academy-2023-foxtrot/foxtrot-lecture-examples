# book
class Book
  # attr_accessor will give us getter and setter method
  attr_accessor :title, :author, :page

  # initialize method
  def initialize author = 'anonymous'
    @title = title
    @author = author
    @page = 1
  end

  # method that will change our current page number (as if we are reading the book and changing the pages)
  # it will take a number of how many pages were read
  def read pages_read
    # then increment our current page that we initialized our new Books from 1 - the number of pages they read
    @page += pages_read
  end

end