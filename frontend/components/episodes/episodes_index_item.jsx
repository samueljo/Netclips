import React from 'react';

class EpisodesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDetailsClick(e) {
    console.log('details click');
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    const episode = this.props.episode;
    return (
      <div className='episode-tile'>
        <div className='episode-title'>{episode.title}</div>
        <div className='episode-summary'>{episode.summary}</div>
        <div className='tile-media'>
          // <img className='tile-img' src={episode.image_url} />
        </div>
      </div>
    );
  }
}

export default EpisodesIndexItem;
