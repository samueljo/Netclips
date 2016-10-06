import { connect } from 'react-redux';
import { requestSeries, requestSerie } from '../../actions/serie_actions';
import Main from './main';

const mapStateToProps = state => {
  return ({
    seriesIndex: state.series.seriesIndex,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries()),
  requestSerie: (id) => dispatch(requestSerie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
