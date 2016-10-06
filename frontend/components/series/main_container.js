import { connect } from 'react-redux';
import { requestSeries } from '../../actions/serie_actions';
// import { parseSeries } from '../../reducers/selectors';
import Main from './main';


const mapStateToProps = state => {
  return ({
    series: state.series,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
