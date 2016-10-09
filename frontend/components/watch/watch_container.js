import { connect } from 'react-redux';
import Watch from './watch';

const mapStateToProps = state => {
  return ({
    playingEpisode: state.episodes.playingEpisode
  });
};

export default connect(
  mapStateToProps
)(Watch);
