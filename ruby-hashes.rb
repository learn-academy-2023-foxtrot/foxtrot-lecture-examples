# Ruby Hashes

# Hashes : are a data structure 
  # collection of key:value pairs
  # key : a symbol (data type in Ruby) / to access the value we refer to the key
  # value : any data type that Ruby recognizes
  # key:value pairs are separated by commas

# Create a Hash:
pets = {dog: 'Gus', cat: 'Dotty', fish: 'Mildred'}
# p pets
# output : {:dog=>"Gus", :cat=>"Dotty", :fish=>"Mildred"}
# symbol is a unique identifier with a colon appended to our key (:dog/:cat/:fish)
# hash rocket (=>) : separates the key => value pair
my_favorites = Hash.new
# p my_favorites
# output: {}

# Maniputlating Hashes:
  # 1. return the data (reading the data)
  # 2. create data (add something)
  # 3. updating existing data
  # 4. delete / remove data

# Returning data
# p pets
# output: {:dog=>"Gus", :cat=>"Dotty", :fish=>"Mildred"}
# p pets[:cat]
# output: "Dotty"

# Adding content
my_favorites[:movie] = 'Lion King'
# p my_favorites
# output: {:movie=>"Lion King"}
my_favorites[:color] = 'Blue'
# output : {:movie=>"Lion King", :color=>"Blue"}
my_favorites[:animal] = 'Tiger'
# ouput: {:movie=>"Lion King", :color=>"Blue", :animal=>"Tiger"}
my_favorites[:food] = 'Pasta'
# p my_favorites
# output: {:movie=>"Lion King", :color=>"Blue", :animal=>"Tiger", :food=>"Pasta"}

# Updating content
my_favorites[:movie] = 'They cloned Tyrone'
# p my_favorites
# ouptut: {:movie=>"They cloned Tyrone", :color=>"Blue", :animal=>"Tiger", :food=>"Pasta"}

# Delete content
my_favorites.delete(:food)
# p my_favorites
# {:movie=>"They cloned Tyrone", :color=>"Blue", :animal=>"Tiger"}

# module - a way of grouping things that are alike with similar properties
# enumerables module - the grouping of things that are iterable (arrays, hashes, ranges)
# duck typing - focusing on behavior / action of methods vs strictly to it's data type (ex. reverse will work on strings and arrays)
# "If it walks like a duck, quacks like a duck, than it is a duck."

# Each
foxtrot_talents = {juggler: 'Shaun', marathon_runner: 'Aleja', artist: 'Luis', magician: 'Nicole'}

foxtrot_talents.each do |key, value|
  p "#{value} is a #{key}"
end
# output: "Shaun is a juggler"
# "Aleja is a marathon_runner"
# "Luis is a artist"
# "Nicole is a magician"

# Map
def talent hash 
  hash.map do |key, value|
    "#{value} is a cool #{key}"
  end
end
# p talent foxtrot_talents
# output: ["Shaun is a cool juggler", "Aleja is a cool marathon_runner", "Luis is a cool artist", "Nicole is a cool magician"]