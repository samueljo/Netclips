import React from 'react';
import { withRouter } from 'react-router';

class EpisodesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const current_watching = {
      serie_id: this.props.serieId,
      episode_id: this.props.episode.id
    };

    this.props.createOrUpdateCurrentWatching({current_watching});
    this.props.router.push({
      pathname: '/watch',
      query: {
        id: this.props.episode.id,
        serieId: this.props.serieId,
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
          <button
            className='episode-play-button'
            onClick={this.handleClick}>
            ▶
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(EpisodesIndexItem);
