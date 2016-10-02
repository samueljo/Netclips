Netclips

Heroku

Minimum Viable Product

Netclips and code! Netclips is a web application inspired by Netflix built using Ruby on Rails & React/Redux. The main features of this website will include:

  New account creation, login, and guest/demo login
  A production README
  Hosting on Heroku
  Smooth, bug-free navigation, adequate seed data and sufficient CSS styling

  Videos
    Access various series to pick & play video clips

  Reviews
    Read reviews (top reviews & all) for a series
    Write only one review per series
    Rate a series

  MyList
    Create a 'My List' to keep track of series-to-watch

  Feature
    Browse page will have a 'feature' series to watch based on most recent addition

  Search
    Search for a series by genre, cast, or title

Bonus:

  Wrap-around Scroll
    Series are organized by genre with a 'wrap-around' scroll

  OAuth
    Login using OAuth through Facebook

  Feature: Infinite Scroll
    More genres will load if you scroll to the bottom

  Feature: Auto-play
    Clips will auto-play to the next clip in the series

  Feature: Suggested Series
    Series will be suggested based on user's history of watching a genre

  Feature: Notification
    Notifications for new clips added to database

  Feature: Submitting New Series/Clips
    Submit a new clip - reserved only for admins

Design Docs

  View Wireframes
  React Components
  API endpoints
  DB schema
  Redux Structure
  Sample State

Implementation Timeline

  Phase 1: Backend setup and Front End User Authentication (2 days)

  Objective: Functioning rails project with front-end Authentication

   New Rails project
   User model/migration
   Back end authentication (session/password)
   StaticPages controller and root view
   Webpack & react/redux modules
   APIUtil to interact with the API
   Redux cycle for frontend authentication
   User signup/signin components
   Blank landing component after signup/signin
   Style signup/signin components
   Seed users
   Review phase 1

  Phase 2: Notes Model, API, and components (2 days)

  Objective: Notes can be created, read, edited and destroyed through the API.

   Note model
   Seed database with a small amount of test data
   CRUD API for notes (NotesController)
   JBuilder views for notes
  Note components and respective Redux loops
   NotesIndex
   NoteIndexItem
   NoteForm
   Autosave notes feature
   Style notes components
   Seed notes

  Phase 3: Notebooks (2 day)

  Objective: Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

   Notebook model
   Seed database with a small amount of test data
   CRUD API for notes (NotebooksController)
   JBuilder views for notebooks
   Adding notes requires a notebook
   Moving notes between notebooks
   Viewing notes by notebook
   Style notebook components
   Seed notebooks

  Phase 4: Tags (1 days)

  Objective: Notes can be tagged with multiple tags, and tags are searchable.

   Tag model and Taggings join table
   Fetching tags for notes
   Adding tags to notes
   Searching notes by tag
   Style search & tag components
   Seed tags with seed data

  Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

  objective: Allow rich text editing of notes.

   Integrate react-quill (based on Quill.js).
   Rails helpers to sanitize HTML before rendering.
   Style Quill components.
   Add Quill styling to seeded notes

  Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

  objective: Add infinite scroll to Notes Index

   Paginate Notes Index API to send 20 results at a time
   Append next set of results when user scrolls and is near bottom
   Style scroll components and transitions
   Ensure seed data demonstrates infinite scroll
