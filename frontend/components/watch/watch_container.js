import { connect } from 'react-redux';
import Watch from './watch';

const mapStateToProps = state => {
  return ({
    episodes: state.episodes.displayEpisodes
  });
};

export default connect(
  mapStateToProps
)(Watch);
