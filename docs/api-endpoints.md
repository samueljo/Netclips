# API Endpoints

## HTML API

### Root

- GET / - loads React web app

## JSON API

### Users

- [X] POST /api/users
- [X] GET /api/users/:id
- [ ] PATCH /api/users/:id
- [ ] DELETE /api/users/:id

### Session

- [X] POST /api/session
- [X] DELETE /api/session

### Series

- [X] GET /api/series
  - Series index/search
  - Accepts query param to list series by title, genre, or "listed"
- [X] GET /api/series/:id
- (Admin user's only:)
  - PATCH /api/series/:id
  - DELETE /api/series/:id
  - POST /api/series

### Episodes

- GET /api/series/:series_id/episodes
  - Episodes index
- GET /api/episodes/:id
  - Watch episode
- (Admin user's only:)
  - PATCH /api/episodes/:id
  - DELETE /api/episodes/:id
  - POST /api/series/:series_id/episodes

### Reviews

- GET /api/series/:series_id/reviews
  - Reviews index for a series
- POST /api/series/:series_id/reviews
  - Write a review for a series
- PATCH /api/reviews/:review_id
  - Edit an existing review (only if one was written)
- DELETE /api/reviews/:review_id
  - Delete a review (only if one was written)
