import React from 'react';
import ReviewContainer from '../reviews/review_container';
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

  render() {
    const serieDisplay = this.props.serieDisplay;
    const genres = serieDisplay.genres.map((genre) => {
      return <li className='details-desc' key={genre.id}>{genre.name}</li>;
    });

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
          <ReviewContainer />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(SerieDetail);
