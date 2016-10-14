import SeriesIndexItem from './series_index_item';
import { connect } from 'react-redux';

import {
  addFavoriteSerie,
  removeFavoriteSerie } from '../../actions/favorite_actions';

import { requestEpisodes } from '../../actions/episode_actions';

import {
  createOrUpdateCurrentWatching } from '../../actions/current_watching_actions';

const mapStateToProps = (state, ownProps) => ({
  serie: ownProps.serie,
  hoverCb: ownProps.hoverCb,
  myList: ownProps.myList,
  openSeriesShow: ownProps.openSeriesShow
});

const mapDispatchToProps = dispatch => ({
  addFavoriteSerie: (serie) => dispatch(addFavoriteSerie(serie)),
  removeFavoriteSerie: (serie) => dispatch(removeFavoriteSerie(serie)),
  requestEpisodes: (serieId) => dispatch(requestEpisodes(serieId)),
  createOrUpdateCurrentWatching: (current) => dispatch(createOrUpdateCurrentWatching(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesIndexItem);
