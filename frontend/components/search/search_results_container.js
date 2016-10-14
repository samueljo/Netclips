import SearchResults from './search_results';
import { connect } from 'react-redux';
import {
  requestSeries } from '../../actions/serie_actions';

const mapStateToProps = state => {
  return ({
    seriesIndex: state.search.series,
    myList: state.series.seriesIndex['My List'],
    currentUser: state.session.currentUser,
    focusedGenreId: state.series.focusedGenreId
  });
};

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
