# Netclips

[Netclips live][heroku]

[heroku]: http://netclips.herokuapp.com/

Netclips is a full-stack web application that combines the instant gratification of short video clips and highlights with the binge-watchability of Netflix. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Authentication

  Back-end and front-end user authentication was built from scratch by encrypting user password and creating a unique session token for each user on sign up or login. This allows for secure access to one's account on the single-page application which then renders distinct content based on the current user.

### Videos

  Videos are organized in such a way that allows users to have their own favorite lists and currently watching lists that consists or either 'series', which have multiple 'episodes' or 'movies'. The following overview of the database schema explains how the videos were implemented to allow for episodes nested within a series, the maintained to track favorites and currently watching lists, and the organized on the main index and search results index.

#### Main Index

  On the database side, the there are a variety of associations to link together episodes and genres to series so the main index page displays each of the series in their respective genre rows. Additionally, because a series can belong to multiple genres and a genre can have multiple series, a `serie_genres` table was required to allow a many-to-many relationship.
  The series data was sent from the backend without any N+1 queries to the database by using ActiveRecord `includes` and `joins` and the necessary information was selected using JBuilder.

  [Picture of main index page]

#### Carousel Rows & Series Display

  Building the carousel rows for each genre was one of the more difficult aspects of building this application. Depending on the user, the index must have 4 different capabilities.
  - Expand any given series to display more information right beneath the its respective row
  - Play current episode for any given series (default is the first episode)
  - Search for a series via the search bar or by clicking on a genre
  - Add any given series to a user's 'list' and add it to the store.

  In order to implement the automatic opening and closing of a series display in the correct position, a `focusedGenreId` property was implemented such that if a user opens up a new series display in the same row, the display will stay in the same position and render different information. However, if a user opens up a new series display in a different row (i.e. different `genreId`), the existing display will close and the new series will display its information in the correct location.

  [Picture of main index page with a display show open]

#### Watching Videos

  The video player was created using the react component `react-youtube` and other functions from the YouTube IFrame Player API. One interesting challenge was handling the video player once an video clip ended. In order to make the user experience of Netclips as seamless as possible, the video player will autoplay to the next episode in the series if it exists or render the main index page so the user can find another video to watch.

  Additionally, once a user starts a video clip, it will automatically be added to his or her `currently watching` list. Then if the user finishes the final episode it that series, the series will be automatically removed from the user's `currently watching` list.

  The currently watching aspect of the application was another difficult problem to solve as it involved juggling data from the user, series, and episodes. By utilizing this triple-join table, a user can have many series that he or she is watching and also keep keep track of which episodes he or she is currently on. From the index standpoint, a series can have many current watchers, but for any given session, the user will only be shown the series that he or she is watching.

  [picture of view page]

### Search & My List

  The search bar allows a user to search for video clips by either title or genre and renders live search results. Users may also click on a genre to view all series that are tagged with that genre.

  Updating a user's list can be done a couple of places, the index or the series' overview panel. While the user is searching through the index and hovers over a given series, it will scale up and an 'add' button will appear on the lower right corner along with the series title, episode, and play button. However, if the series is already on the user's list, a 'check' button will appear and the user can click to remove the series from his or her list. This was another case where a join table had to be created in order to accommodate for the many-to-many relationship between users and series.

  picture of mylist genre page

### Ratings & Reviews

  Users can rate reviews from the series' overview panel on the display page or while writing a review. In order to implement this, all of the validations for creating a review had to be done on the front end. When rating a series from the overview panel, no body is required. However, if a user were on the details panel and tried to create a review, the review will not be submitted unless a body is attached to the rating.

  [Picture of details panel]

  Additionally, once a user does rate a series, his or her rating will appear with yellow stars vs. the average rating red stars if the current user has not rated the series. Once a rating is created, it will persist to the review form so that the user will only have to write a review to go along with his or her existing rating.

  The review list will show the first 3 reviews with the user's review at the top. If there are more reviews for that particular series, a button will appear to open a `react-modal` that will display all reviews.

  [Picture of review modal]
