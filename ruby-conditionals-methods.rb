# Ruby Conditionals + Methods

# Ruby uses methods to create functionality
# In Ruby we define our methods
# Methods can take any number of arguments

# Method Syntax
  # def : define
  # end : end of our method (closing curly in JS)
  # method names are in snake_case
def name_of_our_method
  executable code
end

# define a greeter method
def greeter
  'Hello Foxtrot'
end
# p greeter
# output: "Hello Foxtrot"

# implicit return : Ruby will automatically return the last line of a Method without the keyword 'return'

# local variables:
def best_cohort
  response = 'Foxtrot!'
end
# p best_cohort
# output : "Foxtrot"
# p response
# (NameError) : undefined local variable or method `response'

# Methods with arguments:
def checking_out feeling
  "I am feeling #{feeling}, checking out!"
end
# p checking_out 'spicy'
# "I am feeling spicy, checking out!"

# Multiple arguments:
# best practice for readability purposes, multiple parameters/ arguments should be inside of parenthesis
def divided_by (num1, num2)
  num1 / num2
end
# p divided_by(100, 5)
# 20

# Conditional Logic:
  # keywords: if / else / elsif / end
  # every 'def' needs an 'end'
  # every 'if' needs and 'end'

def greater_or_lesser
  my_num = 5
  if my_num == 10
    "#{my_num} is 10!"
  elsif my_num > 10
    "#{my_num} is greater than 10."
  else 
    "#{my_num} is less than 10"
  end
end
# p greater_or_lesser
# my_num = 13 -- "13 is greater than 10."
# my_num = 10 -- "10 is 10!"
# my_num = 5 -- "5 is less than 10"

# Gathering User Input:
  # gets : allows Ruby to pause the execution of the program to gather user input from the terminal 

# Examples:
# my_name variable will store the user input
my_name = gets
# p my_name
# input: Nicole
# output : "Nicole\n"
# ( \n ) is a character for a line break that the computer sees
# ( .chomp ) - removes the line break character from our output

my_name = gets.chomp
# p my_name
# input : Charlean
# output : "Charlean"

# Can you vote?
# prints a string to prompt the user to input their name
p 'Enter your name'
user_name = gets.chomp
# prints a string to prompt the user to input their age
p 'Enter your age'
# Ruby will stringify our output
# user_age = gets.chomp
# output : "27"
# .to_i will convert that string into an integer allowing us to run the logic below in our can_you_vote method
user_age = gets.chomp.to_i
# output : 27

def can_you_vote (name, age)
  if age >= 18
    "#{name}, you are old enough to vote"
  elsif age < 18
    "#{name}, sorry you are not old enough yet to vote"
  else
    'Please try again later'
  end
end
p can_you_vote(user_name, user_age)
# output before .to_i - (ArgumentError) : comparison of String with 18 failed
# output after .to_i - "Nicole, you are old enough to vote"