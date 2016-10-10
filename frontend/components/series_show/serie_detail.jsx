import React from 'react';
import ReviewFormContainer from '../reviews/review_form_container';
import Review from '../reviews/review';
import { withRouter } from 'react-router';

class SerieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const serieDisplay = this.props.serieDisplay;
    this.props.router.push({
      pathname: '/browse',
      query: {
        id: serieDisplay.id
      }
    });
  }

  reviewList(reviews=[]) {
    return reviews.map((review) => {
      return(
        <Review rating={review.rating} body={review.body} key={review.id} />
      );
    });
  }

  render() {
    const serieDisplay = this.props.serieDisplay;
    const reviews = this.reviewList(serieDisplay.reviews);
    if (serieDisplay) {
      return (
        <div className='serie-detail'>
          <div className='details'>Details</div>
          <div className='reviews'>
            <h1 className='reviews-header'>Member Reviews</h1>
            <ul className='member-reviews'>
              {reviews}
            </ul>
          </div>
          <div className='review-form'>Form</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(SerieDetail);
