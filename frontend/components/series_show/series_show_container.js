import { connect } from 'react-redux';
import { } from '../../actions/';
import SeriesShow from './series_show';

const mapStateToProps = state => {
  return ({
    serieDisplay: state.series.serieDisplay,
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps
)(SeriesShow);
