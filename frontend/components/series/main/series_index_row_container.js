import SeriesIndexRow from './series_index_row';
import { connect } from 'react-redux';

import {
  requestSerie,
  removeSerie } from '../../../actions/serie_actions';

import { requestSearchResults } from '../../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
  myList: ownProps.myList,
  seriesIndex: ownProps.seriesIndex,
  genre: ownProps.genre,
  showDetail: ownProps.showDetail
});

const mapDispatchToProps = dispatch => ({
  requestSerie: (id, genreId) => dispatch(requestSerie(id, genreId)),
  removeSerie: () => dispatch(removeSerie()),
  requestSearchResults: (query, cb) => dispatch(requestSearchResults(query, cb))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesIndexRow);
