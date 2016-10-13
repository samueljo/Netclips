import EpisodesIndex from './episodes_index';

import { connect } from 'react-redux';

import { requestEpisode } from '../../actions/episode_actions';

import {
  createOrUpdateCurrentWatching } from '../../actions/current_watching_actions';


const mapStateToProps = state => {
  return ({
    serieId: state.series.serieDisplay.id,
    displayEpisodes: state.episodes.displayEpisodes
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisode: (id, callback) => dispatch(requestEpisode(id, callback)),
  createOrUpdateCurrentWatching: (current) => dispatch(createOrUpdateCurrentWatching(current))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesIndex);
