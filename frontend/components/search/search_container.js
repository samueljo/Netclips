import { connect } from 'react-redux';
import Search from './search';
import { requestSearchResults } from '../../actions/search_actions';
import { removeSerie } from '../../actions/serie_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    series: state.search.series,
    query: ownProps.query
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestSearchResults: (query, cb) => dispatch(requestSearchResults(query, cb)),
  removeSerie: () => dispatch(removeSerie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
