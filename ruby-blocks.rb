# Ruby Blocks and Iterables 9/20/23 Foxtrot

# Learning Objectives
# can identify the syntax of a Ruby block when passed to a iterative method
# can determine the appropriate built-in Ruby method needed to accomplish a task
# can use block logic inside of a custom method
# can identify the scope of variables in a block

# Vocabulary
# Ruby block: a chunk of code encapsulated within do and end or {}, can be passed to a ruby method or an object

# range: a sequence of numbers or elements defined by using the range operator (...)

# Iteration: repeating an action until a condition is met

# Syntax of a ruby block
  # do and end
  # object.method do
  #   # executable code
  # end

  # {}
  # object.method {
  #   # executable code
  # }

# times: used to loop a specific number of times
# do and end
# 5.times do
#   p 'Aloha, Foxtrot'
# end
# Output:
# "Aloha, Foxtrot"
# "Aloha, Foxtrot"
# "Aloha, Foxtrot"
# "Aloha, Foxtrot"
# "Aloha, Foxtrot"

# {}
  # 5.times { p 'Aloha, Foxtrot '}
  # Output:
  # "Aloha, Foxtrot"
  # "Aloha, Foxtrot"
  # "Aloha, Foxtrot"
  # "Aloha, Foxtrot"
  # "Aloha, Foxtrot"

# each: iterate through a collection of elements (array, range) and peform a specified operation on each element

# fruits = ['mangoes', 'grapes', 'watermelon', 'persimmons']

# fruits.each do |value|
#   p "I love #{value}!"
# end

# Output:
# "I love mangoes!"
# "I love grapes!"
# "I love watermelon!"
# "I love persimmons!"

# while: repeat a block of code until a certain condition becomes false
# number = 1
# while number < 5
#   p "Current number: #{number}"
# end

# without iterator (or a description of how to increment or decrement), this while loop will create a stack overflow
# Ctrl + C to stop

# proper structure
# number = 1
# while number < 5
#   p "Current number: #{number}"
#   number += 1
# end
# output:
# "Current number: 1"
# "Current number: 2"
# "Current number: 3"
# "Current number: 4"

# range: to represent a sequential order of integers or characters
# (1..5).each do
#   p 'Number'
# end
# Output:
# "Number"
# "Number"
# "Number"
# "Number"
# "Number"

# (1..5).each do |value|
#   p "Number: #{value}"
# end
# Output:
# "Number: 1"
# "Number: 2"
# "Number: 3"
# "Number: 4"
# "Number: 5"

# map: creates a new array with each value transformed based on the executable code

fruits = ['mangoes', 'grapes', 'watermelon', 'persimmons']

# fruits.map do |value|
#  p "#{value} 🍽️"
# end

# Output: 4 strings
# "mangoes 🍽️"
# "grapes 🍽️"
# "watermelon 🍽️"
# "persimmons 🍽️"

# To see the array created from map, we have to store the map method in a variable

# eat_fruit = fruits.map do |value|
#   "#{value} 🍽️"
# end

# p eat_fruit

# Output: ["mangoes 🍽️", "grapes 🍽️", "watermelon 🍽️", "persimmons 🍽️"]

# ICEBOX
# how to print out just one value in an array
# why do we need to store as a variable
# clarify the example in syllabus - without p
# To print without storing in a variable: p()
my_array = [1, 2, 3, 4]
p(my_array.map do |value|
  value * value
end)
# output: [1, 4, 9, 16]

my_array
# output: [1, 2, 3, 4]

# block with curly braces
p my_array.map { |value| value * value }
# output: [1, 4, 9, 16]

# my_array