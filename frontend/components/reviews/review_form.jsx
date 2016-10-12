import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { hashHistory } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    const currentUserReview = this.props.currentUserReview[0];
    if (currentUserReview) {
      this.state = currentUserReview;
    } else {
      this.state = { rating: 0, body: '' };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderFormButton = this.renderFormButton.bind(this);
  }

  handleClick() {
    this.setState({ rating: 0, body: '' });
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  handleSubmit(e) {
    e.preventDefault();
    const serieId = this.props.serieDisplay.id;
    const review = Object.assign(
      {},
      this.state,
      { serie_id: serieId }
    );
    if (this.props.currentUserReview[0]) {
      review.id = this.props.currentUserReview[0].id;
      this.props.updateReview(review, this.props.focusedGenreId);
    } else {
      this.props.createReview({review}, this.props.focusedGenreId);
    }
  }

  update(property) {
    return (e) => {
      this.setState({
        [property]: e.currentTarget.value
      });
    };
  }

  renderFormButton() {
    const currentUserReview = this.props.currentUserReview[0];
    return (currentUserReview && currentUserReview.body) ? 'Edit' : 'Submit';
  }

  render() {
    return (
      <div className='review-form'>
        <form onSubmit={this.handleSubmit}>
          <h1 className='details-header'>Rate this series:</h1>
          <StarRatingComponent
            name='rating'
            className='rating'
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick.bind(this)} />
          <textarea
            className='review-body'
            value={this.state.body}
            placeholder='Write your review here.'
            onChange={this.update('body')}></textarea>
          <input
            className='review-button submit'
            type='submit'
            disabled={!this.state.body}
            value={this.renderFormButton()} />
        </form>
        <button
          className='review-button cancel'
          onClick={this.handleClick}>Cancel</button>
      </div>
    );
  }
}

export default ReviewForm;
