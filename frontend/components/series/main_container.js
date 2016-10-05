import { connect } from 'react-redux';
import { requestSeries } from '../../actions/serie_actions';
import { asArray } from '../../reducers/selectors';
import Main from './main';


const mapStateToProps = state => ({
  series: asArray(state.series),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
