## Intro to PostgreSQL  9/27/2023 Foxtrot

- postgreSQL: flavor of sql that is very OOP
- database query: think of asking a question to abstract data entries

- SELECT statement: used to distinguish which columns you will query from the database table
```sql
  SELECT column_name1, column_name2
  FROM table_name
```
- to see all the data entries in the database table
  - * used to indicate all columns
  - country using singular text for the table name
```sql
  SELECT *
  FROM country
```

- to see data entries for specific columns
  - separate column names with a comma
```sql
  SELECT name, lifeexpectancy
  FROM country
```

WHERE clause
- to see data entries that meet a specified condition
```sql
  SELECT name, lifeexpectancy
  FROM country
  WHERE lifeexpectancy > 80
```
- using `e` operator to represent zeroes
```sql
  -- long hand
  SELECT name, lifeexpectancy, population
  FROM country
  WHERE population < 50000
  -- shortcut with `e`
  SELECT name, lifeexpectancy, population
  FROM country
  WHERE population < 5e4
```
- multiple conditions
```sql
SELECT name, region, lifeexpectancy, population
FROM country
WHERE region LIKE 'South%' AND population < 5e4
```

- wildcard
- LIKE: a string matcher that looks for a variation of the string indicated
  - `%` indicates the location of the string
```sql
SELECT name, region, lifeexpectancy, population
FROM country
WHERE region LIKE 'South%'
```

- ORDER BY
- automatically places records in ascending order based on the column designated
```sql
SELECT name, region, lifeexpectancy, population
FROM country
WHERE region LIKE 'South%'
ORDER BY population
```
- to create a descending use `DESC`
```sql
SELECT name, region, lifeexpectancy, population
FROM country
WHERE region LIKE 'South%'
ORDER BY population DESC
```

- LIMIT
- with only display the indicated amount of data entries
```sql
SELECT name, region, lifeexpectancy, population
FROM country
WHERE region LIKE 'South%'
ORDER BY population DESC
LIMIT 10
```

- create an alias or a temporary column header
```sql
SELECT name, region, lifeexpectancy, population, surfacearea,
population/surfacearea AS population_density
FROM country
```
- when removing null values
```sql
SELECT name, region, lifeexpectancy, population, surfacearea,
population/surfacearea AS population_density
FROM country
WHERE population != 0 AND lifeexpectancy IS NOT NULL
ORDER BY population_density DESC
LIMIT 20
```

- subquery
- WITH Clause
- structure
```sql
--  WITH <alias for the query> AS (
  -- query
-- )
-- query on the alias
```

```sql
WITH high_life_expectancy AS (
  SELECT name, population, lifeexpectancy
  FROM country
  WHERE lifeexpectancy IS NOT NULL AND population != 0
)
SELECT name, population, lifeexpectancy
FROM high_life_expectancy
ORDER BY population
LIMIT 25
```


## Icebox
- Why does name change color vice the other column names?
- What is the name of the `e` operator for integer?