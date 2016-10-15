# Netclips

[Netclips live][heroku]

[heroku]: http://netclips.herokuapp.com/

Netclips is a full-stack web application that combines the instant gratification of short video clips and highlights with the binge-watchability of Netflix. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

  **NB:** The series model is referred to as `serie` to give a sense of plurality.

### Authentication

  Back-end and front-end user authentication was built from scratch by encrypting user password and creating a unique session token for each user on sign up or login. This allows for secure access to one's account on the single-page application which then renders distinct content based on the current user.

### Videos

  Videos are organized in such a way that allows users to have their own favorite lists and currently watching lists that consists or either 'series', which have multiple 'episodes' or 'movies'. The following overview of the database schema explains how the videos were implemented to allow for episodes nested within a series, the maintained to track favorites and currently watching lists, and the organized on the main index and search results index.

#### Main Index

  The database consists of the following tables:
    * `series` with columns `title`, `description`, `year`, `avg_rating`, and a set of `image` columns created using the Paperclip gem.
    * `episodes` with columns `serie_id`, `title`, `summary`, `video_url`, `episode_number`, and a set of `image` columns created using the Paperclip gem. The `video_url` values are created using YouTube embedding and the videos are display using `react-youtube`, a React.js powered YouTube component.
    * `genres` with columns `name`
    * `serie_genres` with columns `serie_id` and `genre_id`

  On the database side, the there are a variety of associations to link together episodes and genres to series so the main index page displays each of the series in their respective genre rows. Additionally, because a series can belong to multiple genres and a genre can have multiple series, a `serie_genres` table was required to allow a many-to-many relationship.
  The series data was sent from the backend without any N+1 queries to the database by using ActiveRecord `includes` and `joins` and the necessary information was selected using JBuilder.

  All of the series

### Carousel Rows & Series Display
  - Fetching episodes on opening serie display then on episode panel
  - Keep track of different panels on the Serie Display
  - How to open and close serie display automatically

### Watching Videos
  - YouTube iframe API
  - Keep track of current episodes


### Search

### My List

### Currently Watching

### Reviews

### Autoplay
