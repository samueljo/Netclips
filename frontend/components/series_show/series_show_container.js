import { connect } from 'react-redux';
import { requestEpisodes } from '../../actions/episode_actions';
import { createReview } from '../../actions/serie_actions';
import SeriesShow from './series_show';

const mapStateToProps = state => {
  return ({
    serieDisplay: state.series.serieDisplay,
    episodes: state.episodes.episodes
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisodes: (serieId) => dispatch(requestEpisodes(serieId)),
  createReview: (review) => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesShow);
