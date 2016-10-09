import { connect } from 'react-redux';
import { requestEpisodes } from '../../actions/episode_actions';
import SeriesShow from './series_show';

const mapStateToProps = state => {
  return ({
    serieDisplay: state.series.serieDisplay,
    episodes: state.episodes
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisodes: (serieId) => dispatch(requestEpisodes(serieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesShow);
