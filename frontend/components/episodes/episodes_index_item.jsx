import React from 'react';
import { withRouter } from 'react-router';

class EpisodesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.router.push({
      pathname: '/watch',
      query: {
        title: this.props.episode.title,
        video: this.props.episode.video_url
      }
    });
  }

  render() {
    const episode = this.props.episode;
    return (
      <div className='episode-tile'>
        <div className='episode-tile-media'>
          <img className='episode-tile-img' src={episode.image_url} />
        </div>
        <div className='episode-details'>
          <h1 className='episode-title'>{episode.title}</h1>
          <p className='episode-summary'>{episode.summary}</p>
        </div>
        <div className='episode-tile-play' onClick={this.handleClick}>
        </div>
      </div>
    );
  }
}

export default withRouter(EpisodesIndexItem);