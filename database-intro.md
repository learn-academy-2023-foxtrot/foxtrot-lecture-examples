## Intro to Databases 9/27/2023 Foxtrot

- database: container that organizes data
- relational database: type of database that organizes data into table with rows and columns.
- database columns: establishes the type of data to place in the vertical section as well as the desired property
- database rows: represents the individual data entries or records in the horizontal section
database instance
database table
- schema: structure of the database table
- primary key: unique identifier for each row or data entry


- SQL: domain-specific language used for interacting with relational databases (CRUD actions)
- PostgreSQL: open-source relational database management system

```rb
  class Developer
    attr_accessor(:artist, :song, :genre)
    def initialize(artist, song, genre)
      @artist = artist
      @song = song
      @genre = genre
    end
  end
``````