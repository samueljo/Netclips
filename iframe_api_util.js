export const loadIframeApi = () => {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";

  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

export const onYoutubeIframeAPIReady = (videoId, onPlayerReady, onPlayerStateChange) => {
  const player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: videoId,
    position: 'absolute',
    top: 0,
    left: 0,
    events: {
      'onStateChange': onPlayerStateChange,
      'onReady': onPlayerReady
    }
  });

  return player;
};
