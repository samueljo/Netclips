import { connect } from 'react-redux';
import Main from './main';

import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  series: asArray(state.series)
});

export default connect(
  mapStateToProps
)(Main);
