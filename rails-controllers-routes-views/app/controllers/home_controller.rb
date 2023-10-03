class HomeController < ApplicationController
  def greeter
    render html: 'Hello World'
  end
  def programmer
    render html: 'We are Rails developers!'
  end
  def pasta
    # return views/home/pasta.html.erb
    @spag = 'spaghetti'
    @mac = 'mac and cheese'
  end
  def landing
  end
end
