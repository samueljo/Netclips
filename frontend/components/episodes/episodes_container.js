import { connect } from 'react-redux';
import { requestEpisode } from '../../actions/episode_actions';
import EpisodesIndex from './episodes_index';

const mapStateToProps = state => {
  return ({
    episodes: state.episodes.episodes,
    playingEpisode: state.episodes.playingEpisode
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisode: (id, callback) => dispatch(requestEpisode(id, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesIndex);
