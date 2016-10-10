import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class SeriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.selected };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handlePlayClick(e) {
    // To do: Need to request current episode or 1st episode
    console.log('play');
  }

  handleTitleClick(e) {
    e.stopPropagation();
    this.props.openSeriesShow(this.props.serie.id);
    // this.props.router.push({
    //   pathname: '/browse',
    //   query: {
    //     id: this.props.serie.id,
    //   }
    // });
  }

  componentWillUnmount() {
    this.setState({ selected: false });
  }

  render() {
    const serie = this.props.serie;
    const selected = (this.state.selected) ? 'tile selected' : 'tile';

    return (
      <div className={selected}>
        <div className='tile-media'>
          <img className='tile-img' src={serie.image_url} />
        </div>
        <div className='tile-details'>
          <div
            className='tile-title'
            onClick={this.handleTitleClick}>
            {serie.title}
          </div>
          <div className='tile-add-list'>Add</div>
          <button
            className='play-button'
            onClick={this.handlePlayClick}>
            ▶
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SeriesIndexItem);


// Define on click for tile-title to fetchSerie
  // expand series overview

// Define on hover for tile-details to fetchCurrentEpisode
    // Will display serie.current_episode.image_url instead of serie.image_url

// Define on click for tile-details to play episode

// Define on click for tile-add-list to add series to list
