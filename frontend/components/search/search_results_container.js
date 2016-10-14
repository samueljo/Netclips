import SearchResults from './search_results';
import { connect } from 'react-redux';
import {
  requestSeries,
  requestSerie,
  removeSerie } from '../../actions/serie_actions';

import { requestEpisodes } from '../../actions/episode_actions';

import { requestSearchResults } from '../../actions/search_actions';

import {
  addFavoriteSerie,
  removeFavoriteSerie } from '../../actions/favorite_actions';

import {
  createOrUpdateCurrentWatching } from '../../actions/current_watching_actions';

const mapStateToProps = state => {
  return ({
    seriesIndex: state.search.series,
    myList: state.series.seriesIndex['My List'],
    currentUser: state.session.currentUser,
    focusedGenreId: state.series.focusedGenreId
  });
};

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries()),
  requestSerie: (id, genreId) => dispatch(requestSerie(id, genreId)),
  removeSerie: () => dispatch(removeSerie()),
  addFavoriteSerie: (serie) => dispatch(addFavoriteSerie(serie)),
  removeFavoriteSerie: (serie) => dispatch(removeFavoriteSerie(serie)),
  requestEpisodes: (serieId) => dispatch(requestEpisodes(serieId)),
  createOrUpdateCurrentWatching: (current) => dispatch(createOrUpdateCurrentWatching(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
