Schema Information

users

column          name	   data type	 details
id	            integer	 not null,   primary key
username	      string	 not null,   indexed, unique
email	          string	 not null,   indexed, unique
password_digest	string	 not null
session_token	  string	 not null,   indexed, unique
admin           boolean              default: false
<!--
image_name      string   
image_type      string
image_size      integer -->

series

column          name	   data type	 details
id	            integer	 not null,   primary key
title	          string	 not null,   indexed
description     text     not null
cast	          string	 not null
year	          integer	 not null
image_name      string   
image_type      string
image_size      integer
avg_rating	    integer	             default: 0
current_episode	integer	             default: 1

episodes

column          name	   data type	 details
id	            integer	 not null,   primary key
series_id       integer  not null,   foreign key (references series), indexed
title	          string	 not null,   indexed
summary	        text   	 not null
image_name      string   
image_type      string
image_size      integer
video_url       string   not null

genres

column          name	   data type	 details
id	            integer	 not null,   primary key
name            string   not null    indexed

series_genres

column          name	   data type	 details
id	            integer	 not null,   primary key
series_id       integer  not null,   indexed
genre_id        integer  not null,   indexed

my_list_series

column          name	   data type	 details
id	            integer	 not null,   primary key
series_id       integer  not null,   indexed
user_id         integer  not null    indexed

reviews

column          name	   data type	 details
id	            integer	 not null,   primary key
series_id       integer  not null,   indexed
user_id         integer  not null    indexed
rating          integer  not null,   default: 0, indexed
body            text     not null
