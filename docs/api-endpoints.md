# API Endpoints

## HTML API

### Root

- GET / - loads React web app

## JSON API

### Users

- POST /api/users
- GET /api/users/:id
- PATCH /api/users/:id
- DELETE /api/users/:id

### Session

- POST /api/session
- DELETE /api/session
- GET /api/session

### Series

- GET /api/series
  - Series index/search
  - Accepts query param to list series by title, genre, or "listed"
- GET /api/series/:id
- (Admin user's only:)
  - PATCH /api/series/:id
  - DELETE /api/series/:id
  - POST /api/series

### Episodes

- GET /api/series/:seriesId/episodes
  - Episodes index
- GET /api/series/:seriesId/episodes/:id
  - Watch episode
- (Admin user's only:)
  - PATCH /api/series/:seriesId/episodes/:id
  - DELETE /api/series/:seriesId/episodes/:id
  - POST /api/series/:seriesId/episodes

### Reviews

- GET /api/series/:seriesId/reviews
  - Reviews index for a series
- POST /api/series/:seriesId/reviews
  - Write a review for a series
- PATCH /api/series/:seriesId/reviews/:reviewId
  - Edit an existing review (only if one was written)
- DELETE /api/series/:seriesId/reviews/:reviewId
  - Delete a review (only if one was written)
