// export const loadIframeApi = () => {
//   const tag = document.createElement('script');
//   tag.src = "https://www.youtube.com/iframe_api";
//
//   const firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// };

export const loadPlayer = (videoId, _onReady) => {
  const opts = {
    height: '100%',
    width: '100%',
    videoId: videoId,
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
};

// export const onYoutubeIframeAPIReady = (videoId, onPlayerReady, onPlayerStateChange) => {
//   let player;
//   if (typeof YT === 'undefined') {
//     player = false;
//   } else {
//
//   }
//   return player;
// };
