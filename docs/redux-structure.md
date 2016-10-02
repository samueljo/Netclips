Auth Cycles

Session API Request Actions

signUp
  - invoked from SignupForm onSubmit
  - POST /api/users is called.
  - receiveCurrentUser is set as the success callback.

signIn
  - invoked from SigninForm onSubmit
  - POST /api/session is called.
  - receiveCurrentUser is set as the callback.

logOut
  - invoked from Navbar onClick
  - DELETE /api/session is called.
  - removeCurrentUser is set as the success callback.

fetchCurrentUser
  - invoked from App in didMount
  - GET /api/session is called.
  - receiveCurrentUser is set as the success callback.

Session API Response Actions

receiveCurrentUser
  - invoked from an API callback
  - the SessionReducer stores currentUser in the application's state.

removeCurrentUser
  - invoked from an API callback
  - the SessionReducer removes currentUser from the application's state.

Error Cycles

Error API Response Actions

setErrors
  - invoked from API callbacks on error for actions that generate POST requests
  - the ErrorReducer stores the form in the application's state; errors are mapped to their respective forms

removeErrors
  - invoked from API callbacks on success for actions that generate POST requests
  - the ErrorReducer removes errors for a given form in the application's state.

Series Cycles

Series API Request Actions

fetchAllSeries
  - invoked from SeriesIndex didMount/willReceiveProps
  - GET /api/series is called.
  - receiveAllNotes is set as the success callback.

fetchSingleSeries
  - invoked from SeriesDetail didMount/willReceiveProps
  - GET /api/series/:id is called.
  - receiveSingleSeries is set as the success callback.

Bonus:

createSeries
  - invoked from new series button onClick
  - POST /api/series is called.
  - receiveSingleSeries is set as the success callback.

updateSeries
  - invoked from SeriesForm onSubmit
  - POST /api/series is called.
  - receiveSingleSeries is set as the success callback.

destroySeries
  - invoked from delete note button onClick
  - DELETE /api/series/:id is called.
  - removeSeries is set as the success callback.

Series API Response Actions

receiveAllSeries
  - invoked from an API callback
  - the SeriesReducer updates series in the application's state.

receiveSingleSeries
  - invoked from an API callback
  - the SeriesReducer updates series[id] in the application's state.

removeSeries
  - invoked from an API callback
  - the SeriesReducer removes series[id] from the application's state.

Episode Cycles

Episode API Request Actions

fetchAllEpisodes
  - invoked from EpisodesIndex didMount/willReceiveProps
  - GET /api/episodes is called.
  - receiveAllEpisodes is set as the success callback.

fetchSingleEpisode
  - invoked from EpisodeDetail didMount/willReceiveProps
  - GET /api/episodes/:id is called.
  - receiveSingleEpisode is set as the success callback.

Bonus:

createEpisode
  - invoked from new episode button onClick
  - POST /api/episodes is called.
  - receiveSingleEpisode is set as the callback.

updateEpisode
  - invoked from EpisodeForm onSubmit
  - POST /api/episodes is called.
  - receiveSingleEpisode is set as the success callback.

destroyEpisode
  - invoked from delete episode button onClick
  - DELETE /api/episodes/:id is called.
  - removeEpisode is set as the success callback.

Episode API Response Actions

receiveAllEpisodes
  - invoked from an API callback.
  - The Episodes reducer updates episodes in the application's state.

receiveSingleEpisode
  - invoked from an API callback.
  - The Episode reducer updates episode[id] in the application's state.

removeEpisode
  - invoked from an API callback.
  - The Episode reducer removes episodes[id] from the application's state.


Review Cycles

Review API Request Actions

fetchAllReviews
  - invoked from ReviewsIndex didMount/willReceiveProps
  - GET /api/series/:seriesId/reviews is called.
  - receiveAllReviews is set as the success callback.

fetchSingleReview
  - invoked from ReviewDetail didMount/willReceiveProps
  - GET /api/series/:seriesId/reviews/:id is called.
  - receiveSingleEpisode is set as the success callback.

createEpisode
  - invoked from new episode button onClick
  - POST /api/episodes is called.
  - receiveSingleEpisode is set as the callback.

updateEpisode
  - invoked from EpisodeForm onSubmit
  - POST /api/episodes is called.
  - receiveSingleEpisode is set as the success callback.

destroyEpisode
  - invoked from delete episode button onClick
  - DELETE /api/episodes/:id is called.
  - removeEpisode is set as the success callback.

Episode API Response Actions

receiveAllEpisodes
  - invoked from an API callback.
  - The Episodes reducer updates episodes in the application's state.

receiveSingleEpisode
  - invoked from an API callback.
  - The Episode reducer updates episode[id] in the application's state.

removeEpisode
  - invoked from an API callback.
  - The Episode reducer removes episodes[id] from the application's state.

SearchSuggestion Cycles

fetchSearchSuggestions
  - invoked from NoteSearchBar onChange when there is text
  - GET /api/notes is called with text param.
  - receiveSearchSuggestions is set as the success callback.

receiveSearchSuggestions
  - invoked from an API callback.
  - The SearchSuggestion reducer updates suggestions in the application's state.

removeSearchSuggestions
  - invoked from NoteSearchBar onChange when empty
  - The SearchSuggestion reducer resets suggestions in the application's state.
