import React from 'react';
import YouTube from 'react-youtube';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };

    this.togglePlay = this.togglePlay.bind(this);
  }

  renderPlayer() {
    const url = this.props.location.query.video;
    const opts = {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      playerVars: {
        autohide: 1,
        autoplay: 1,
        controls: 2,
        modestBranding: 1
      }
    };

    return (
      <YouTube
        videoId={url}
        opts={opts}
        onReady={this._onReady} />
    );
  }

  togglePlay(e) {
    if (this.state.playing) {
      e.target.pauseVideo();
    } else {
      e.target.playVideo();
    }
  }

  _onReady(e) {
    console.log('play video');
    this.togglePlayer(e);
  }

  _onStateChange(e) {
    if (e.data === -1) {
      // unstarted
    } else if (e.data === 0) {
      // ended
      // Return to index page if last episode
    } else if (e.data === 1) {
      // playing
      this.setState({ playing: true });
    } else if (e.data === 2) {
      // paused
      this.setState({ playing: false });
    } else if (e.data === 3) {
      // buffering
    } else if (e.data === 5) {
      // video cued
    }
  }

  stopVideo() {

  }

  render() {
    return (
      <div className='player-container'>
        <div className='player' id='player'>
          {this.renderPlayer()}
        </div>
      </div>
    );
  }
}

export default Watch;
