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
# super: 

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

# instantiation the class to create an object
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

# inheritance of the name and weapon from NinjaTurtle
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
unicorn.defense_style
unicorn.salutation

# Icebox
# Can subclasses inherit from other subclasses?