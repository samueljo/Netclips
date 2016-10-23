import FilteredSeriesRow from './filtered_series_row';
import { connect } from 'react-redux';

import {
  requestSerie,
  removeSerie } from '../../../actions/serie_actions';

const mapStateToProps = (state, ownProps) => ({
  seriesPerRow: ownProps.seriesPerRow,
  myList: ownProps.myList,
  rowIdx: ownProps.rowIdx,
  showDetail: ownProps.showDetail,
  seriesIndex: ownProps.seriesIndex
});

const mapDispatchToProps = dispatch => ({
  requestSerie: (id, genreId) => dispatch(requestSerie(id, genreId)),
  removeSerie: () => dispatch(removeSerie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredSeriesRow);
