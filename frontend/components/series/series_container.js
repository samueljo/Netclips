import { connect } from 'react-redux';
import { requestSeries } from '../../actions/serie_actions';
import SeriesIndex from './series_index';

import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  series: asArray(state.series)
});

const mapDispatchToProps = dispatch => ({
  requestSeries: () => dispatch(requestSeries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesIndex);
