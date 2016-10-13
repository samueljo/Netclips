import Main from './main';
import { connect } from 'react-redux';
import {
  requestSeries,
  requestSerie,
  removeSerie } from '../../actions/serie_actions';

import { requestSearchResults } from '../../actions/search_actions';

import {
  addFavoriteSerie,
  removeFavoriteSerie } from '../../actions/favorite_actions';

import {
  createOrUpdateCurrentWatching,
  destroyCurrentWatching } from '../../actions/current_watching_actions';

const mapStateToProps = state => {
  return ({
    seriesIndex: state.series.seriesIndex,
    currentUser: state.session.currentUser,
    focusedGenreId: state.series.focusedGenreId
  });
};

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries()),
  requestSerie: (id, genreId) => dispatch(requestSerie(id, genreId)),
  removeSerie: () => dispatch(removeSerie()),
  requestSearchResults: (query, cb) => dispatch(requestSearchResults(query, cb)),
  addFavoriteSerie: (serie) => dispatch(addFavoriteSerie(serie)),
  removeFavoriteSerie: (serie) => dispatch(removeFavoriteSerie(serie)),
  createOrUpdateCurrentWatching: (current) => dispatch(createOrUpdateCurrentWatching(current)),
  destroyCurrentWatching: (serieId) => dispatch(destroyCurrentWatching(serieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
