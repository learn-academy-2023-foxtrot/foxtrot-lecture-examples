# Ruby Classes and Objects 9/21/23 Foxtrot

# Learning Objectives
# can define what action .class method performs
# can demonstrate the syntax to write a custom class
# can define instance variables
# can define getter methods and setter methods
# can define the initialize method
# can explain how to create a new object that requires arguments in the initialize method
# can define attr_accessor

# Vocabulary
# Ruby classes: blueprint for objects, gives initial values and behavior for each object

# objects: instances of a class with specified data

# PascalCase: every word is capitalized, which means the first letter is capital

# instantiation: creating an object by instantiating the class, invoking the class

# instance variables: @ + variable_name, variable that belongs to the class

# getter method: allows you to retrive the values
# setter method: allows you to assign values

# initialize method: 
# helper methods

# Create a PokemonTrainer class
  # keyword class + ClassName
  # the scope of the class is defined by the end
# class PokemonTrainer
# end

# Instantiation
  # keyword new, which is a predefined method in Ruby
  # ClassName.new
# p PokemonTrainer.new
# Output: #<PokemonTrainer:0x00000001034ce560>
# output is a hash which is unique for each object

# Assign Values and Retrieve Them

# setter method
# create a method with def ... end
# name of method: set_trainer
# behavior: set a trainer name
# input: trainer name (string)
# process: assign the parameter as the value of the instance variable
# class PokemonTrainer
#   def set_trainer(trainer_name)
#     @trainer_name = trainer_name
#   end
# end

# instantiation
# nicole = PokemonTrainer.new
# p nicole
# Output: #<PokemonTrainer:0x0000000103c5e078>

# method: a function that belongs to an object
# p nicole.set_trainer('Snackologist')
# output: "Snackologist", gave the trainer name because of the implicit return on the setter method

# p nicole
# Output: #<PokemonTrainer:0x000000010361e028 @trainer_name="Snackologist">

# Add additional behavior

# requiring two arguments when instantiated
# class PokemonTrainer
#   def set_trainer(trainer_name, poke_ball)
#     @trainer_name = trainer_name
#     @poke_ball = poke_ball
#   end
# end

# instantiation
# nicole = PokemonTrainer.new
# p nicole
# # Output: #<PokemonTrainer:0x0000000103b0df98>
# p nicole.set_trainer('Snackologist', 5)


# hard coding the value
# class PokemonTrainer
#   def set_trainer(trainer_name)
#     @trainer_name = trainer_name
#     @poke_ball = 5
#   end
# end

# instantiation
# nicole = PokemonTrainer.new
# p nicole
# # Output: #<PokemonTrainer:0x0000000103b0df98>
# nicole.set_trainer('Snackologist')
# p nicole
# Output: #<PokemonTrainer:0x000000010377dc20 @trainer_name="Snackologist", @poke_ball=5>


# Obtain the values
# class PokemonTrainer
#   def set_trainer(trainer_name, poke_ball)
#     @trainer_name = trainer_name
#     @poke_ball = poke_ball
#   end

#   def get_trainer
#     @trainer_name
#   end

#   def get_poke_ball
#     @poke_ball
#   end
# end

# # instantiation
# nicole = PokemonTrainer.new
# nicole.set_trainer('Snackologist', 5)
# p nicole.get_trainer
# # "Snackologist"
# p nicole.get_poke_ball
# # 5

# # Refactor 
# class PokemonTrainer
#   # initialize method: a class method that runs automatically when the class is instantiated
#   def initialize(trainer_name, poke_ball)
#     @trainer_name = trainer_name
#     @poke_ball = poke_ball
#   end

#   def get_trainer
#     @trainer_name
#   end

#   def get_poke_ball
#     @poke_ball
#   end
# end

# # instantiation
# nicole = PokemonTrainer.new('Snackologist', 5)
# p nicole
# #<PokemonTrainer:0x000000010835d8c0 @trainer_name="Snackologist", @poke_ball=5>

# attr_accessor: automatically creates getter and setter methods

# Refactor 
class PokemonTrainer
  # attr_accessor: place above the initial, takes the symbol of each instance variable as an argument
  attr_accessor(:trainer_name, :poke_ball)

  def initialize(trainer_name, poke_ball)
    @trainer_name = trainer_name
    @poke_ball = poke_ball
  end
end

nicole = PokemonTrainer.new('Snackologist', 5)
p nicole.trainer_name
# "Snackologist"
p nicole.poke_ball
nicole.poke_ball = 3
p nicole
# #<PokemonTrainer:0x0000000103edd678 @trainer_name="Snackologist", @poke_ball=3>
