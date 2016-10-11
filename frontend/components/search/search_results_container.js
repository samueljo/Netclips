import SearchResults from './search_results';
import { connect } from 'react-redux';
import {
  requestSeries,
  requestSerie,
  removeSerie } from '../../actions/serie_actions';

const mapStateToProps = state => {
  return ({
    seriesIndex: state.search.series,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries()),
  requestSerie: (id, genreId) => dispatch(requestSerie(id, genreId)),
  removeSerie: () => dispatch(removeSerie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
