import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = (props) => {
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

  const _onReady = (e) => {

  };

  const _onEnd = (e) => {
    props.renderClosingScreen();
  };

  return (
    <YouTube
      videoId={props.videoId}
      opts={opts}
      onReady={_onReady}
      onEnd={_onEnd} />
  );
};

export default VideoPlayer;

// _onStateChange(e) {
//   if (e.data === -1) {
//     // unstarted
//   } else if (e.data === 0) {
//     // ended
//     // Return to index page if last episode
//   } else if (e.data === 1) {
//     // playing
//     this.setState({ playing: true });
//   } else if (e.data === 2) {
//     // paused
//     this.setState({ playing: false });
//   } else if (e.data === 3) {
//     // buffering
//   } else if (e.data === 5) {
//     // video cued
//   }
// }
