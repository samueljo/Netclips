Component Heirarchy

AuthFormContainer
- Index Page:
    - Sign in button
    - Sign up button

- Sign Up Page:
    - OAuth or by Email

- Sign In Page:
    - OAuth or by Email through Facebook
    - Sign Up button

BrowseContainer
Header
- Netflix button to Videos Index
- Browse dropdown:
    - Aside
        - Home
        - My List
    - Aside
        - [Genres]
    - Search Bar
        - Search by title, genres
    - Notification
        - New additions
    - Profile ( + Profile Picture)
        - Profile show page
        - Sign Out

Feature
- Newest addition image
- Play
- Rate
- Add to list

SeriesIndex
- Series Index
    - Series Detail
        - Main
            - Play button (w/ image)
        - Overview
            - Play current_episode w/ image
            - Title
            - Rating
            - Add to list
            - current_episode:
                - id
                - title
                - description
        - Episodes
            - Episodes Index
                - List of episodes with:
                    - Play button w/ image
                    - id
                    - title
                    - description
        - Details
            - Cast
            - Genres
            - Top reviews
                - MODAL -> See All Reviews (n)
                    - Write a review
                        - Rating
                        - New Review form
                    - Reviews index
                        - Review
                            - Vote helpful
WatchContainer





NewNoteContainer
- NewNote
  - RTETools
  - NewNoteButton

Search

NewNotebook
- NewNotebook

NewTag
- NewTag

NotebookSearch
- AutoSearch
- AutoSearchResults

TagsSearch
- AutoSearch
- AutoSearchResults


Routes

Path	Component
"/sign-up"	"AuthFormContainer"
"/sign-in"	"AuthFormContainer"
"/home"	"HomeContainer"
"/home/note/:noteId"	"NotesContainer"
"/home/notebook/:notebookId/note/:noteId"	"NotebookContainer"
"/home/tag/:tagId/note/:notedId"	"TagContainer"
"/home/search-results"	"SearchResultsContainer"
"/new-note"	"NewNoteContainer"
"/search"	"Search"
"/new-notebook"	"NewNotebook"
"/new-tag"	"NewTag"
"/tag-search"	"TagSearch"
"/notebook-search"
