import { connect } from 'react-redux';
import Search from './search';
import { requestSearchResults } from '../../actions/search_actions';
import { removeSerie } from '../../actions/serie_actions';

const mapStateToProps = ({ search }) => ({
  series: search.series
});

const mapDispatchToProps = (dispatch) => ({
  requestSearchResults: (query, cb) => dispatch(requestSearchResults(query, cb)),
  removeSerie: () => dispatch(removeSerie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
