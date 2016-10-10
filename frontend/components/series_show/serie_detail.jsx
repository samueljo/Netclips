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
    const genres = serieDisplay.genres.map((genre) => {
      return <li className='details-desc' key={genre.id}>{genre.name}</li>;
    });
    const reviews = this.reviewList(serieDisplay.reviews);
    if (serieDisplay) {
      return (
        <div className='serie-detail group'>
          <div className='details'>
            <div className='description-container'>
              <h1 className='details-header'>Description</h1>
              <p className='details-desc'>{serieDisplay.description}</p>
            </div>
            <br/>
            <ul className='details-header'>Genres:
              {genres}
            </ul>
          </div>
          <div className='reviews'>
            <h1 className='details-header'>Member Reviews</h1>
            <ul className='details-desc'>
              {reviews}
            </ul>
          </div>
          <ReviewFormContainer />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(SerieDetail);
