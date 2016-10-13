import React from 'react';
import { withRouter, hashHistory } from 'react-router';

// Define on click for tile-title to fetchSerie
  // expand series overview

// Define on hover for tile-details to fetchCurrentEpisode
    // Will display serie.current_episode.image_url instead of serie.image_url

// Define on click for tile-details to play episode

class SeriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleMyListClick = this.handleMyListClick.bind(this);
    this.expandSeries = this.expandSeries.bind(this);
    this.toggleTileImage = this.toggleTileImage.bind(this);
  }

  handlePlayClick(e) {
    const currentEpisode = this.props.serie.current_episode;
    this.props.router.push({
      pathname: '/watch',
      query: {
        id: currentEpisode.id,
        video: currentEpisode.video_url
      }
    });
  }

  toggleTileImage(e) {
    this.setState({ hovered: !this.state.hovered });
  }

  tileImage() {
    const currentEpisode = this.props.serie.current_episode;

    if (this.state.hovered) {
      return <img className='tile-img' src={currentEpisode.image_url} />;
    } else {
      return <span></span>;
    }
  }

  expandSeries(e) {
    e.stopPropagation();
    this.props.openSeriesShow(this.props.serie.id);
  }

  handleMyListClick() {
    const serie = this.props.serie;
    if (this.isSeriesListed()) {
      this.props.removeFavoriteSerie(serie);
    } else {
      this.props.addFavoriteSerie(serie);
    }
  }

  toggleShiftLeft() {
    this.setState({ shiftLeft: !this.state.shiftLeft });
  }

  renderMyListButton() {
    let myListButtonText;
    if (this.isSeriesListed()) {
      myListButtonText = String.fromCharCode(10003);
    } else {
      myListButtonText = String.fromCharCode(65291);
    }
    return (
      <button
        className='tile-add-list'
        onClick={this.handleMyListClick}>{myListButtonText}</button>
    );
  }

  isSeriesListed() {
    for (let i = 0; i < this.props.myList.length; i++) {
      if (this.props.myList[i].id === this.props.serie.id) {
        return true;
      }
    }
    return false;
  }

  render() {
    const serie = this.props.serie;
    const myListButton = this.renderMyListButton();
    const tileImage = this.tileImage();
    return (
      <div
        className='tile'
        onMouseLeave={this.props.hoverCb}
        onMouseEnter={this.props.hoverCb}>
        <div className='tile-media'>
          <img className='tile-img' src={this.props.serie.image_url} />
        </div>
        <div className='tile-details'>
          <div
            className='tile-title'
            onClick={this.expandSeries}>
            {serie.title}
            <br />
            <span className='tile-episode'>
              {serie.current_episode.title}
            </span>
          </div>

          {myListButton}
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

// onMouseLeave={this.toggleTileImage}
// onMouseEnter={this.toggleTileImage}>
// {tileImage}
