import SeriesShow from './series_show';
import { connect } from 'react-redux';
import { requestEpisodes } from '../../actions/episode_actions';
import {
  createReview,
  updateReview } from '../../actions/serie_actions';

const mapStateToProps = state => {
  return ({
    serieDisplay: state.series.serieDisplay,
    episodes: state.episodes.episodes,
    focusedGenreId: state.series.focusedGenreId
  });
};

const mapDispatchToProps = dispatch => ({
  requestEpisodes: (serieId) => dispatch(requestEpisodes(serieId)),
  createReview: (review, genreId) => dispatch(createReview(review, genreId)),
  updateReview: (review, genreId) => dispatch(updateReview(review, genreId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeriesShow);
