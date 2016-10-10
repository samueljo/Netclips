import React from 'react';
import ReviewFormContainer from '../reviews/review_form_container';
import { withRouter } from 'react-router';

class SerieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const episode = this.props.serieDisplay.episodes[0];
    this.props.router.push({
      pathname: '/watch',
      query: {
        id: episode.id,
        video: episode.video_url
      }
    });
  }

  render() {
    const serieDisplay = this.props.serieDisplay;

    if (serieDisplay) {
      return (
        <div className='serie-detail'>
          <div className='details'>Details</div>
          <div className='reviews'>Reviews</div>
          <div className='review-form'>Form</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(SerieDetail);
