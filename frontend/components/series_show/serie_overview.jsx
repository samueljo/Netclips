import React from 'react';
import { withRouter } from 'react-router';

class SerieOverview extends React.Component {
  constructor(props) {
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

  render() {
    const serieDisplay = this.props.serieDisplay;

    if (serieDisplay) {
      return (
        <div className='serie-overview'>
          <div className='avg-rating'>Rating</div>
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
