# Netclips

[Heroku link][heroku] **Note:** Link to Netclips

## Minimum Viable Product

Netclips and code! Netclips is a web application inspired by Netflix built using Ruby on Rails & React/Redux. The main features of this website will include:

- [X] New account creation, login, and guest/demo login
- [X] Hosting on Heroku
- [ ] A production README
- [ ] Smooth, bug-free navigation, adequate seed data and sufficient CSS styling

- [X] Videos
  - Access various series to pick & play video clips

- [X] Reviews
  - Read reviews (top reviews & all) for a series
  - Write only one review per series
  - Rate a series

- [X] MyList
  - Create a 'My List' to keep track of series-to-watch

- [X] Wrap-around Scroll
  - Series are organized by genre with a 'wrap-around' scroll

- [X] Search
  - Search for a series by genre or title (cast as a bonus)

- Bonus:
  - [ ] Track Current Episodes for Many Series
    - Keep track of which episode a user was on for a given series

  - [ ] Feature
    - Browse page will have a 'feature' series to watch based on most recent addition

  - [ ] OAuth
    - Login using OAuth through Facebook

  - [ ] Feature: Infinite Scroll
    - More genres will load if you scroll to the bottom

  - [ ] Feature: Auto-play
    - Clips will auto-play to the next clip in the series

  - [ ] Feature: Suggested Series
    - Series will be suggested based on user's history of watching a genre

  - [ ] Feature: Submitting New Series/Clips
    - Submit a new clip - reserved only for admins

  - [ ] Feature: Notification
    - Notifications for new clips added to database

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [X] New Rails project
- [X] User model/migration
- [X] Back end authentication (session/password)
- [X] StaticPages controller and root view
- [X] Webpack & react/redux modules
- [X] APIUtil to interact with the API
- [X] Redux cycle for frontend authentication
- [X] User signup/signin components
- [X] Blank landing component after signup/signin
- [X] Style signup/signin components
- [X] Seed users
- [ ] Review phase 1

### Phase 2: Series Model, API, and components (2 days)

**Objective:** Series can be created, read, edited and destroyed through the API.

- [X] Series model
- [X] Seed database with a small amount of test data
- [X] CRUD API for series (SeriesController)
- [X] JBuilder views for series
- Series components and respective Redux loops
  - [X] SeriesIndex
    - Will be primary portion of app
      * Included in 'browse', 'mylist' and 'search'
  - [X] SeriesIndexRow
    - Each row in the index that implements 'wrap-around' scrolling
  - [X] SeriesIndexItem
    - Ratings
    - Play current episode
  - [X] SeriesDetailPane
      - SeriesDetail
      - SeriesOverview
      - SeriesEpisodes
  - [X] Seed series

### Phase 3: Episode Model, API, and components (3 days)

**Objective:** Episodes can be created, read, edited and destroyed through the API.

- [X] Episode model
- [X] Seed database with a small amount of test data
- [X] CRUD API for episodes (EpisodesController)
- [X] JBuilder views for episodes
- Episodes components and respective Redux loops
  - [X] EpisodeIndex
    - Nested in SeriesIndexItem::SeriesEpisodes
    - Implement 'wrap-around' scrolling
  - [X] EpisodeIndexItem
  - [X] EpisodeShow
    - Be able to watch an episode through YouTube API
  - [X] Seed episodes within series

### Phase 4: Reviews (2 day)

**Objective:** Reviews belong to series that can be created, read, edited and destroyed through the API.

- [X] Review model
- [X] Seed database with a small amount of test data
- [X] CRUD API for reviews (ReviewsController)
- [X] JBuilder views for reviews
- [X] Adding reviews requires a series
- Reviews components and respective Redux loops
  - [X] ReviewsIndex
    - Preview shown in SeriesIndexItem::SeriesDetail

      - All reviews shown through Modal

  - [X] ReviewForm
    - User can write own review in SeriesIndexItem::SeriesDetail
- [ ] Seed reviews

### Phase 5: Searching (1 day)

**Objective:** Be able to search for series by genre or title

- Search results will use presentation components of primary app (series & episodes) but will filter which series are sent

- [X] Search model
- [X] Seed database with a small amount of test data
- [X] CRUD API for Search (SearchController)
- [X] JBuilder views for Search

### Phase 6: My List (1 day)

**Objective:** Be able to create a list of series-to-watch that can be updated (added to & removed from)

- MyList will use presentation components of primary app (series & episodes) but will filter which series are sent

- [X] MyList model
- [X] CRUD API for MyList (MyListsController)
- [X] JBuilder views for MyList
- [ ] Seed database with a small amount of test data

### Phase 7: Pagination / infinite scroll for Series Index (1 day)

**Objective:** Add infinite scroll to Series Index

- [ ] Paginate Series Index API to send 4 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll
