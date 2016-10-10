import React from 'react';
import { withRouter } from 'react-router';
import YouTube from 'react-youtube';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };

    this.returnToIndex = this.returnToIndex.bind(this);
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
        showinfo: 0,
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

  _onReady(e) {
    console.log('play video');
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

  returnToIndex() {
    this.props.router.push('/');
  }

  stopVideo() {

  }

  render() {
    return (
      <div className='player-container'>
        <div
          className='return'
          onClick={this.returnToIndex}>
          {String.fromCharCode(11013)}
        </div>
        <div className='player' id='player'>
          {this.renderPlayer()}
        </div>
      </div>
    );
  }
}

export default withRouter(Watch);
