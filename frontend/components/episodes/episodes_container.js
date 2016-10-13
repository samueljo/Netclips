import EpisodesIndex from './episodes_index';

import { connect } from 'react-redux';

import { requestEpisode } from '../../actions/episode_actions';

import {
  createOrUpdateCurrentWatching,
  destroyCurrentWatching } from '../../actions/current_watching_actions';


const mapStateToProps = state => {
  return ({
    displayEpisodes: state.episodes.displayEpisodes
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisode: (id, callback) => dispatch(requestEpisode(id, callback)),
  createOrUpdateCurrentWatching: (current) => dispatch(createOrUpdateCurrentWatching(current)),
  destroyCurrentWatching: (serieId) => dispatch(destroyCurrentWatching(serieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesIndex);
