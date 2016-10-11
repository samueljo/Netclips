import { connect } from 'react-redux';
import Search from './search';
import {
  requestSearchResults } from '../../actions/search_actions';

const mapStateToProps = ({ search }) => ({
  series: search.series
});

const mapDispatchToProps = (dispatch) => ({
  requestSearchResults: (query, cb) => dispatch(requestSearchResults(query, cb))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
