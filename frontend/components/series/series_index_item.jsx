import React from 'react';
import { hashHistory } from 'react-router';

class SeriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleHover?
  }

  handleDetailsClick() {

  }

  render() {
    const serie = this.props.serie;
    return (
      <div className='index-tile'>
        <div className='tile-media'>
          <img className='tile-img' src={serie.image_url} />
        </div>
        <div className='tile-details'>
          <div className='tile-title'>
            {serie.title}
          </div>
          <div className='tile-add-list'>Add</div>
        </div>
      </div>
    );
  }
}

export default SeriesIndexItem;

// Define on hover for tile-details to fetchCurrentEpisode
    // Will display serie.current_episode.image_url instead of serie.image_url

// Define on click for tile-details to play episode?

// Define on click for tile-title to fetchSerie
  // expand series overview

// Define on click for tile-add-list to add series to list
