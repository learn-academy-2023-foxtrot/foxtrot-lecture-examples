# Ruby Inheritance 9/22/23

# Learning Objectives
# can define the syntax to create an inheritance relationships between two classes
# can explain the purpose of the super method
# can describe how to access parent class methods from within a child class instance
# can articulate that instance variables are not inherited from parent classes

# Vocabulary
# four pillars of object-oriented programming: 
  # Abstraction: maintain access to data that is required for the application
  # Encapsulation: the scope of the class, the logic between class...end
  # Polymorphism: ability to change the values and data within the class
  # Inheritance: pass properties and behavior to other classes
# superclass: main class that is the template for the nested or subclasses
# subclass: inherits properties and behavior from the superclass
# super: a method to pass the values of the instance variables from the superclass to the subclass

# Create a superclass NinjaTurtle which will initialize objects with a name and weapon

# Superclass
class NinjaTurtle
  def initialize(name, weapon)
    @name = name
    @weapon = weapon
  end

  def greeter
    p "Cowbunga, I'm #{@name}!"
  end

  def defense_style
    p "#{@name} defends with the #{@weapon}."
  end
end

# instantiation of the super class to create an object
# leonardo = NinjaTurtle.new('Leonardo', 'katana')
# p leonardo
# Output: #<NinjaTurtle:0x000000010799e230 @name="Leonardo", @weapon="katana">
# leonardo.greeter
# Output: "Cowbunga, I'm Leonardo!"
# leonardo.defense_style
# Output: "Leonardo defends with the katana."

# Subclasses
# structure
# class SubClass < Superclass
# end

# inheritance of the values and behavior from the superclass to the subclass
# inheritance of the name and weapon instance variables from NinjaTurtle
# class Lenard < NinjaTurtle
#   def initialize(name, weapon)
#     super(name, weapon)
#   end
# end

# gecko = Lenard.new('Lenard', 'throwing stars')
# p gecko
# Output: #<Lenard:0x0000000102d2d900 @name="Lenard", @weapon="throwing stars">

# inheritance and initializing new data
# class Lenard < NinjaTurtle
#   def initialize(name, weapon, color)
#     super(name, weapon)
#     @color = color
#   end
# end
# gecko = Lenard.new('Lenard', 'throwing stars', 'aquamarine')
# p gecko
# Output: #<Lenard:0x00000001026dd7f8 @name="Lenard", @weapon="throwing stars", @color="aquamarine">

# hard-coded values
class Lenard < NinjaTurtle
  def initialize(name, weapon, color)
    super(name, weapon)
    @color = color
    @type = 'gecko'
  end
end
gecko = Lenard.new('Lenard', 'throwing stars', 'aquamarine')
# p gecko
#Output: #<Lenard:0x0000000104955560 @name="Lenard", @weapon="throwing stars", @color="aquamarine", @type="gecko">
# gecko.greeter
# output: "Cowbunga, I'm Lenard!"

# # additional subclasses
# class Sparkle < NinjaTurtle
#   def initialize(name, weapon, color)
#     super(name, weapon)
#     @color = color
#     @type = 'unicorn'
#   end
# end

# unicorn = Sparkle.new('Peter', 'rainbow spear', 'all of them')
# # p unicorn
# # Output: #<Sparkle:0x0000000104dc5190 @name="Peter", @weapon="rainbow spear", @color="all of them", @type="unicorn">
# unicorn.defense_style
# output: "Peter defends with the rainbow spear."

# adding behavior to the subclass
class Sparkle < NinjaTurtle
  def initialize(name, weapon, color)
    super(name, weapon)
    @color = color
    @type = 'unicorn'
  end

  def salutation
    p "HAIII!!! I'm #{@name}"
  end
end

unicorn = Sparkle.new('Peter', 'rainbow spear', 'all of them')
# unicorn.defense_style
# unicorn.salutation


# ****Additional Notes****
# attr_accessor: create getter and setter methods

# Superclass
class Turtle
  attr_accessor(:name, :weapon)
  def initialize(name, weapon)
    @name = name
    @weapon = weapon
  end

  def greeter
    p "Cowbunga, I'm #{@name}!"
  end

  def defense_style
    p "#{@name} defends with the #{@weapon}."
  end
end

class Pony < Turtle
  attr_accessor(:color, :type)
  def initialize(name, weapon, color)
    super(name, weapon)
    @color = color
    @type = 'unicorn'
  end

  def salutation
    p "HAIII!!! I'm #{@name}"
  end
end

pony = Pony.new('Beatrice', 'cast iron skillet', 'teal')
# pony.defense_style
# # Output: "Beatrice defends with the cast iron skillet."
# pony.salutation
# Output: "HAIII!!! I'm Beatrice"

# getter method from attr_accessor
# p pony.name
# # Output: "Beatrice"
# p pony.weapon
# # Output: "cast iron skillet"
# p pony.color
# # Output: "teal"
# p pony.type
# # Output: "unicorn"

# setter method from attr_accessor
# p pony
# # output: #<Pony:0x0000000100b13360 @name="Beatrice", @weapon="cast iron skillet", @color="teal", @type="unicorn">

# reassign new values for the instance variables
pony.name = 'Beatrix'
pony.weapon = 'run-on sentences'
# p pony
# # output: #<Pony:0x0000000102f33088 @name="Beatrix", @weapon="run-on sentences", @color="teal", @type="unicorn"> 

# ICEBOX 🥶
# Can subclasses inherit from other subclasses?

# Yes, it is a bit tricky. Here is an example
# this subclass will inherit from the subclass Pony
# because the Pony class requires three arguments, we can assign those values on the super method
class DanceBattle < Pony
  # attr_accessor(:opponent)
  def initialize(opponent)
    super('Penelope', 'bad cooking', 'trashcan water')
    @opponent = opponent
  end

  def challenge
    p "#{@name} is challenging #{@opponent} to a dance off."
  end
end

# when instantiating the DanceBattle it will require three arguments because it inherited from the subclass Pony which requires three arguments
dancer = DanceBattle.new('Lenard')
# p dancer
# Output: #<DanceBattle:0x0000000102602900 @name="Penelope", @weapon="bad cooking", @color="trashcan water", @type="unicorn", @opponent="Lenard">
dancer.challenge
# Output: "Penelope is challenging Lenard to a dance off."

# Here is the power of inheritance
dancer.salutation
# Output: "HAIII!!! I'm Penelope"
dancer.greeter
# Output: "Cowbunga, I'm Penelope!"
dancer.defense_style
# Output: "Penelope defends with the bad cooking.