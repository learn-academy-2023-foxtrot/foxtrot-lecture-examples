# Ruby Intro 9/20/2023

- Matz - MINASWAN
- dynamic, dynamically typed (opposite of statically typed)
- interpreted (opposite compiled)
- open-source - code base is free and available to anyone
- scripting - general purpose logic language, no UI
- OOP - instance of a class

### Ruby Versions

- version manager - software that allows you to switch between versions
- rvm - Ruby version manager
- Ruby comes on all Macs out of the box
- currently on Ruby version 3

### Data Types (Classes)

- Integers - whole numbers
- Floats - partial numbers
- Strings - single quotes
- Boolean
  - relational
  - equality ==
  - logical && ||
  - negation !=
- nil
- symbol

### Variables

- no declaration
- snake_case
- string interpolation "#{}"

### Methods

- lots of syntactical sugar
- methods that don't take arguments don't need parentheses
- best practice to use parentheses when passing an argument
- methods are accessors
- can become mutators with the bang operator

### Arrays

- methods are accessors
- shovel operator <<

```ruby
➜  foxtrot-lecture-examples git:(ruby) ✗ irb
 :001 > exit
➜  foxtrot-lecture-examples git:(ruby) ✗ irb
 :001 > exit
➜  foxtrot-lecture-examples git:(ruby) ✗ irb
 :001 > ls
 => nil
 :002 > 2 + 3
 => 5
 :003 > 5 - 2
 => 3
 :004 > 3 * 2
 => 6
 :005 > 4 / 2
 => 2
 :006 > 4 ** 3
 => 64
 :007 > 6 % 4
 => 2
 :008 > 4 / 3
 => 1
 :009 > 4.0 / 3
 => 1.3333333333333333
 :010 > 'sarah'
 => "sarah"
 :011 > "hello y'all"
 => "hello y'all"
 :012 > true
 => true
 :013 > false
 => false
 :014 > 5 > 4
 => true
 :015 > 4 < 9
 => true
 :016 > 4 <= 0
 => false
 :017 > 5 >= 3+2
 => true
 :018 > 4 == 2+2
 => true
 :019 > 4 == '4'
 => false
 :020 > 'hi' == 'hi' && 4 > 2
 => true
 :021 > 'hi' == 'hi' && 4 > 9
 => false
 :022 > 'hi' == 'hi' || 4 > 2
 => true
 :023 > 'hi' == 'hi' || 4 > 9
 => true
 :024 > 5 != 5
 => false
 :025 > nil
 => nil
 :026 > my_name = 'sarah'
 => "sarah"
 :027 > my_name
 => "sarah"
 :028 > "Hey, there #{my_name}"
 => "Hey, there sarah"
 :029 > my_name.length
 => 5
 :030 > my_name.upcase
 => "SARAH"
 :031 > my_name.capitalize
 => "Sarah"
 :032 > my_name.reverse
 => "haras"
 :033 > my_name.delete'h'
 => "sara"
 :034 > my_name.delete('h')
 => "sara"
 :035 > my_name.include?('s')
 => true
 :036 > my_name.include?('y')
 => false
 :037 > my_name
 => "sarah"
 :038 > my_name = my_name.capitalize
 => "Sarah"
 :039 > my_name
 => "Sarah"
 :040 > my_name.reverse
 => "haraS"
 :041 > my_name
 => "Sarah"
 :042 > my_name.reverse!
 => "haraS"
 :043 > my_name
 => "haraS"
 :044 > COHORT = 'foxtrot'
 => "foxtrot"
 :045 > COHORT.reverse!
 => "tortxof"
 :046 > COHORT
 => "tortxof"
 :047 > COHORT = 'yp'
(irb):47: warning: already initialized constant COHORT
(irb):44: warning: previous definition of COHORT was here
 => "yp"
 :048 > COHORT
 => "yp"
 :049 > 3.class
 => Integer
 :050 > 5.0.class
 => Float
 :051 > true.class
 => TrueClass
 :052 > false.class
 => FalseClass
 :053 > nil.class
 => NilClass
 :054 > 'yo'.class
 => String
 :055 > 4.to_s
 => "4"
 :056 > '9'.to_i
 => 9
 :057 > 'yo'.to_i
 => 0
 :058 > 'nine'.to_i
 => 0
 :059 > my_array = [3, 4, 5, 6, 7]
 => [3, 4, 5, 6, 7]
 :060 > my_array.length
 => 5
 :061 > my_array[0]
 => 3
 :062 > my_array[-1]
 => 7
 :063 > my_array[-2]
 => 6
 :064 > my_array.last
 => 7
 :065 > my_array.first
 => 3
 :066 > my_array.reverse
 => [7, 6, 5, 4, 3]
 :067 > my_array[3]
 => 6
 :068 > my_array.reverse.first
 => 7
 :069 > my_array.first.reverse
(irb):69:in `<main>': undefined method `reverse' for 3:Integer (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.8.1/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
 :070 > my_array[2]
 => 5
 :071 > my_array[2] = 100
 => 100
 :072 > my_array
 => [3, 4, 100, 6, 7]
 :073 > my_array << 99
 => [3, 4, 100, 6, 7, 99]
 :074 > my_array
 => [3, 4, 100, 6, 7, 99]
 :075 >
```
