# Redux Structure

## Auth Cycles

### Session API Request Actions

* signUp
  0. invoked from SignupForm onSubmit
  0. POST /api/users is called.
  0. receiveCurrentUser is set as the success callback.

* signIn
  0. invoked from SigninForm onSubmit
  0. POST /api/session is called.
  0. receiveCurrentUser is set as the callback.

* logOut
  0. invoked from Navbar onClick
  0. DELETE /api/session is called.
  0. removeCurrentUser is set as the success callback.

* fetchCurrentUser
  0. invoked from App in didMount
  0. GET /api/session is called.
  0. receiveCurrentUser is set as the success callback.

### Session API Response Actions

* receiveCurrentUser
  0. invoked from an API callback
  0. the SessionReducer stores currentUser in the application's state.

* removeCurrentUser
  0. invoked from an API callback
  0. the SessionReducer removes currentUser from the application's state.

## Error Cycles

### Error API Response Actions

* setErrors
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms

* removeErrors
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the ErrorReducer removes errors for a given form in the application's state.

## Series Cycles

### Series API Request Actions

* fetchAllSeries
  0. invoked from SeriesIndex didMount/willReceiveProps
  0. GET /api/series is called.
  0. receiveAllNotes is set as the success callback.

* fetchSingleSeries
  0. invoked from SeriesDetail didMount/willReceiveProps
  0. GET /api/series/:id is called.
  0. receiveSingleSeries is set as the success callback.

- Bonus:
* createSeries
  0. invoked from new series button onClick
  0. POST /api/series is called.
  0. receiveSingleSeries is set as the success callback.

* updateSeries
  0. invoked from SeriesForm onSubmit
  0. PATCH /api/series/:id is called.
  0. receiveSingleSeries is set as the success callback.

* destroySeries
  0. invoked from delete note button onClick
  0. DELETE /api/series/:id is called.
  0. removeSeries is set as the success callback.

### Series API Response Actions

* receiveAllSeries
  0. invoked from an API callback
  0. the SeriesReducer updates series in the application's state.

* receiveSingleSeries
  0. invoked from an API callback
  0. the SeriesReducer updates series[id] in the application's state.

* removeSeries
  0. invoked from an API callback
  0. the SeriesReducer removes series[id] from the application's state.

## Episode Cycles

### Episode API Request Actions

* fetchAllEpisodes
  0. invoked from EpisodesIndex didMount/willReceiveProps
  0. GET /api/series/:seriesId/episodes is called.
  0. receiveAllEpisodes is set as the success callback.

* fetchSingleEpisode
  0. invoked from EpisodeDetail didMount/willReceiveProps
  0. GET /api/series/:seriesId/episodes/:id is called.
  0. receiveSingleEpisode is set as the success callback.

- Bonus:
* createEpisode
  0. invoked from new episode button onClick
  0. POST /api/series/:seriesId/episodes is called.
  0. receiveSingleEpisode is set as the callback.

* updateEpisode
  0. invoked from EpisodeForm onSubmit
  0. PATCH /api/series/:seriesId/episodes/:id is called.
  0. receiveSingleEpisode is set as the success callback.

* destroyEpisode
  0. invoked from delete episode button onClick
  0. DELETE /api/series/:seriesId/episodes/:id is called.
  0. removeEpisode is set as the success callback.

### Episode API Response Actions

* receiveAllEpisodes
  0. invoked from an API callback.
  0. The Episodes reducer updates episodes in the application's state.

* receiveSingleEpisode
  0. invoked from an API callback.
  0. The Episode reducer updates episode[id] in the application's state.

* removeEpisode
  0. invoked from an API callback.
  0. The Episode reducer removes episodes[id] from the application's state.

## Review Cycles

### Review API Request Actions

* fetchAllReviews
  0. invoked from ReviewsIndex didMount/willReceiveProps
  0. GET /api/series/:seriesId/reviews is called.
  0. receiveAllReviews is set as the success callback.

* fetchSingleReview
  0. invoked from ReviewDetail didMount/willReceiveProps
  0. GET /api/series/:seriesId/reviews/:id is called.
  0. receiveSingleEpisode is set as the success callback.

* createReview
  0. invoked from new review button onClick
  0. POST /api/series/:seriesId/reviews is called.
  0. receiveSingleReview is set as the callback.

* updateReview
  0. invoked from ReviewForm onSubmit
  0. PATCH /api/series/:seriesId/reviews/:id is called.
  0. receiveSingleReview is set as the success callback.

* destroyReview
  0. invoked from delete review button onClick
  0. DELETE /api/series/:seriesId/reviews/:id is called.
  0. removeReview is set as the success callback.

### Review API Response Actions

* receiveAllReviews
  0. invoked from an API callback.
  0. The Reviews reducer updates reviews in the application's state.

* receiveSingleReview
  0. invoked from an API callback.
  0. The Reviews reducer updates review[id] in the application's state.

* removeReview
  0. invoked from an API callback.
  0. The Review reducer removes review[id] from the application's state.

## SearchSuggestion Cycles

* fetchSearchSuggestions
  0. invoked from SearchBar onChange when there is text
  0. GET /api/series is called with text param.
  0. receiveSearchSuggestions is set as the success callback.

* receiveSearchSuggestions
  0. invoked from an API callback.
  0. The SearchSuggestion reducer updates suggestions in the application's state.

* removeSearchSuggestions
  0. invoked from SearchBar onChange when empty
  0. The SearchSuggestion reducer resets suggestions in the application's state.
