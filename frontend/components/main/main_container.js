import Main from './main';
import { connect } from 'react-redux';
import {
  requestSeries,
  requestSerie,
  removeSerie } from '../../actions/serie_actions';

const mapStateToProps = state => {
  return ({
    seriesIndex: state.series.seriesIndex,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries()),
  requestSerie: (id) => dispatch(requestSerie(id)),
  removeSerie: () => dispatch(removeSerie())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
