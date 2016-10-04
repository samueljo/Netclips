# Schema Information

## users
column              | data type |	 details
--------------------|-----------|---------------------------
id	                |  integer	| not null, primary key
email   	          |  string	  | not null, indexed, unique
password_digest     |	 string	  | not null
session_token	      |  string	  | not null, indexed, unique
admin               |  boolean  | default: false
current_episode_id  |  integer  | default: 1, foreign key (references episodes table)

## series
column              | data type |	 details
--------------------|-----------|---------------------------
id	                | integer	  | not null, primary key
title	              | string	  | not null, indexed
description         | text      | not null
year	              | integer	  | not null
image_name          | string    |
image_type          | string    |
image_size          | integer   |
avg_rating	        | integer	  | default: 0
bonus: castings_id  | integer   | foreign_key (references castings join table)

## episodes
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer	  | not null, primary key
series_id       | integer   | not null, foreign key (references series), indexed
title	          | string	  | not null, indexed
summary	        | text   	  | not null
image_name      | string    |
image_type      | string    |
image_size      | integer   |
video_url       | string    | not null

## genres
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer	  | not null, primary key
name            | string    | not null, indexed

## series_genres
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer	  | not null, primary key
series_id       | integer   | not null, foreign key (references series), indexed
genre_id        | integer   | not null, foreign key (references genres), indexed

## my_list_series
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer	  | not null, primary key
series_id       | integer   | not null, foreign key (references series), indexed
user_id         | integer   | not null, foreign key (references users), indexed

## reviews
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer   |	not null, primary key
series_id       | integer   | not null, indexed
user_id         | integer   | not null, indexed
rating          | integer   | not null, default: 0, indexed
body            | text      | not null

## watchings
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer   |	not null, primary key
series_id       | integer   | not null, indexed
user_id         | integer   | not null, indexed

## castings (bonus)
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer   |	not null, primary key
series_id       | integer   | not null, indexed, foreign_key(references castings series table)
cast_id         | integer   | not null, indexed, foreign_key(references castings users table)

## casts (bonus)
column          | data type |	 details
----------------|-----------|---------------------------
id	            | integer   |	not null, primary key
name            | string    | not null, indexed
castings_id     | integer   | indexed, foreign_key(references castings join table)
