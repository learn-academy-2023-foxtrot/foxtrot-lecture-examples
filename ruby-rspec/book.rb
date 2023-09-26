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

  # method that will change our page number (as if we are reading the book and changing the pages)
  def read pages_read
    @page += pages_read
  end

end