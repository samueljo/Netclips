import React from 'react';
import { withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class SerieOverview extends React.Component {
  constructor({props}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMyListClick = this.handleMyListClick.bind(this);
    this.renderListButton = this.renderListButton.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const current_watching = {
      serie_id: this.props.serieDisplay.id,
      episode_id: this.props.serieDisplay.current_episode.id
    };

    this.props.createOrUpdateCurrentWatching({current_watching});
    this.props.requestEpisodes(this.props.serieDisplay.id);

    this.props.router.push({
      pathname: '/watch',
      query: {
        id: this.props.serieDisplay.current_episode.id,
        serieId: this.props.serieDisplay.current_episode.serie_id,
        video: this.props.serieDisplay.current_episode.video_url
      }
    });
  }

  componentDidMount() {
    const currentUserReview = this.props.serieDisplay.current_user_review[0];
    if (currentUserReview) {
      this.setState(currentUserReview);
    } else {
      this.setState({ rating: 0, body: '' });
    }
  }


  onStarClick(nextValue, prevValue, name) {
    const serieId = this.props.serieDisplay.id;
    const review = Object.assign(
      {},
      this.state,
      { rating: nextValue },
      { serie_id: serieId }
    );

    if (this.props.serieDisplay.current_user_review[0]) {
      review.id = this.props.serieDisplay.current_user_review[0].id;
      this.props.updateReview(review, this.props.focusedGenreId);
    } else {
      this.props.createReview({review}, this.props.focusedGenreId);
    }
  }

  calculateAvgRating() {
    const currentUserReview = this.props.serieDisplay.current_user_review[0];
    let rating;
    let color;
    if (currentUserReview) {
      rating = currentUserReview.rating;
      color = 'Gold';
    } else {
      let sum = 0;
      const otherUserReviews = this.props.serieDisplay.other_user_reviews;
      for (let i = 0; i < otherUserReviews.length; i++) {
        sum += otherUserReviews[i].rating;
      }
      rating = Math.round(sum / otherUserReviews.length);
      color = 'Red';
    }
    return [rating, color];
  }

  handleMyListClick() {
    const serie = this.props.serieDisplay;
    if (this.props.listed) {
      this.props.removeFavoriteSerie(serie);
    } else {
      this.props.addFavoriteSerie(serie);
    }
  }

  renderListButton() {
    let buttonText;
    let buttonClass;
    if (this.props.listed) {
      buttonClass = 'show-list-icon check';
      buttonText = `${String.fromCharCode(10003)}`;
    } else {
      buttonClass = 'show-list-icon plus';
      buttonText = `${String.fromCharCode(65291)}`;
    }
    return (
      <span className='show-list-button' onClick={this.handleMyListClick}>
        <span className={buttonClass}>{buttonText}</span>
        <span className='show-list-text'>MY LIST</span>
      </span>
    );
  }

  render() {
    const serieDisplay = this.props.serieDisplay;

    if (serieDisplay) {
      const rating = this.calculateAvgRating()[0];
      const color = this.calculateAvgRating()[1];

      return (
        <div className='serie-overview'>
          <div className='avg-rating'>
            <StarRatingComponent
              name='rating'
              className='star'
              starColor={color}
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)} />
          </div>
          <div className='serie-year'>{serieDisplay.year}</div>
          <div className='serie-description-header'>
            {serieDisplay.current_episode.title}
          </div>
          <div className='serie-description'>
            {serieDisplay.current_episode.summary}
          </div>
          {this.renderListButton()}
          <div className='serie-img-container'>
            <img
              className='serie-img'
              src={serieDisplay.episode_image_url} />
            <button
              className='show-play-button'
              onClick={this.handleClick}>
              ▶
            </button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(SerieOverview);
