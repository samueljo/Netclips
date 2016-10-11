import React from 'react';
import { withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class SerieOverview extends React.Component {
  constructor({props}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    // To do: Find current episode
    const episode = this.props.serieDisplay.episodes[0];
    this.props.router.push({
      pathname: '/watch',
      query: {
        id: episode.id,
        video: episode.video_url
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
      this.props.updateReview({review}, this.props.focusedGenreId);
    } else {
      this.props.createReview({review}, this.props.focusedGenreId);
    }
  }

  calculateAvgRating() {
    const currentUserReview = this.props.serieDisplay.current_user_review[0];
    let rating;
    if (currentUserReview) {
      rating = currentUserReview.rating;
    } else {
      let sum = 0;
      const otherUserReviews = this.props.serieDisplay.other_user_reviews;
      for (let i = 0; i < otherUserReviews.length; i++) {
        sum += otherUserReviews[i].rating;
      }
      rating = Math.round(sum / otherUserReviews.length);
    }
    return rating;
  }

  render() {
    const serieDisplay = this.props.serieDisplay;

    if (serieDisplay) {
      const rating = this.calculateAvgRating();

      return (
        <div className='serie-overview'>
          <div className='avg-rating'>
            <StarRatingComponent
              name='rating'
              className='star'
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)} />
          </div>
          <div className='serie-year'>{serieDisplay.year}</div>
          <div className='serie-description'>{serieDisplay.description}</div>
          <div className='serie-img-container'>
            <img className='serie-img' src={serieDisplay.image_url} />
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
