import SeriesShow from './series_show';
import { connect } from 'react-redux';

import { requestEpisodes } from '../../actions/episode_actions';

import {
  createReview,
  updateReview } from '../../actions/review_actions';

import {
  addFavoriteSerie,
  removeFavoriteSerie } from '../../actions/favorite_actions';

import {
  createOrUpdateCurrentWatching } from '../../actions/current_watching_actions';

const mapStateToProps = state => {
  return ({
    myList: state.series.seriesIndex['My List'].series,
    serieDisplay: state.series.serieDisplay,
    episodes: state.episodes.episodes,
    focusedGenreId: state.series.focusedGenreId
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisodes: (serieId) => dispatch(requestEpisodes(serieId)),
  createReview: (review, genreId) => dispatch(createReview(review, genreId)),
  updateReview: (review, genreId) => dispatch(updateReview(review, genreId)),
  addFavoriteSerie: (serie) => dispatch(addFavoriteSerie(serie)),
  removeFavoriteSerie: (serie) => dispatch(removeFavoriteSerie(serie)),
  createOrUpdateCurrentWatching: (current) => dispatch(createOrUpdateCurrentWatching(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesShow);
