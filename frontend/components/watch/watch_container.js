import { connect } from 'react-redux';
import Watch from './watch';

import { requestEpisodes } from '../../actions/episode_actions';

import {
  destroyCurrentWatching,
  createOrUpdateCurrentWatching } from '../../actions/current_watching_actions';

const mapStateToProps = state => {
  return ({
    episodes: state.episodes.displayEpisodes,
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisodes: (serieId) => dispatch(requestEpisodes(serieId)),
  destroyCurrentWatching: (serieId) => dispatch(destroyCurrentWatching(serieId)),
  createOrUpdateCurrentWatching: (current) => dispatch(createOrUpdateCurrentWatching(current))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watch);
