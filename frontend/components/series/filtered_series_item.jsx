import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class FilteredIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.expandSeries = this.expandSeries.bind(this);
  }

  handlePlayClick(e) {
    // To do: Need to request current episode or 1st episode
    const episode = this.props.serieDisplay.episodes[0];
    // this.props.router.push({
    //   pathname: '/watch',
    //   query: {
    //     id: episode.id,
    //     video: episode.video_url
    //   }
    // });
  }

  expandSeries(e) {
    e.stopPropagation();
    this.props.openSeriesShow(this.props.serie.id);
  }

  render() {
    const serie = this.props.serie;

    return (
      <div
        className='tile'
        onMouseLeave={this.props.hoverCb}
        onMouseEnter={this.props.hoverCb}>
        <div className='tile-media'>
          <img className='tile-img' src={serie.image_url} />
        </div>
        <div className='tile-details'>
          <div
            className='tile-title'
            onClick={this.expandSeries}>
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

export default withRouter(FilteredIndexItem);
