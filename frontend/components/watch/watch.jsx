import React from 'react';
import { withRouter } from 'react-router';
import VideoPlayer from './video_player';
import { selectEpisodeIds, selectEpisode } from '../../reducers/selectors';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentEpisodeId: props.location.query.id,
      serieId: props.location.query.serieId
    });
    this.returnToIndex = this.returnToIndex.bind(this);
    this.getNextVideo = this.getNextVideo.bind(this);
    this.renderClosingScreen = this.renderClosingScreen.bind(this);
  }

  componentDidMount() {
    this.props.requestEpisodes(this.state.serieId);
  }

  renderPlayer() {
    const url = this.props.location.query.video;
    return (
      <VideoPlayer
        videoId={url}
        renderClosingScreen={this.renderClosingScreen} />
    );
  }

  getNextVideo() {
    const episodeIds = selectEpisodeIds(this.props.episodes);
    const currentId = parseInt(this.state.currentEpisodeId);
    if (currentId === episodeIds[episodeIds.length - 1]) {
      return 0;
    } else {
      const currentEpisodeIdx = episodeIds.indexOf(currentId);
      return this.props.episodes[currentEpisodeIdx + 1];
    }
  }

  renderClosingScreen() {
    const nextVideo = this.getNextVideo();
    if (nextVideo) {
      this.setState({ currentEpisodeId: nextVideo.id });
      const current_watching = {
        serie_id: this.props.episodes[0].serie_id,
        episode_id: nextVideo.id
      };
      this.props.createOrUpdateCurrentWatching({current_watching});
      this.props.router.push({
        pathname: '/watch',
        query: {
          id: nextVideo.id,
          video: nextVideo.video_url
        }
      });
    } else {
      this.props.destroyCurrentWatching(this.props.episodes[0].serie_id);
      this.props.router.push('/');
    }
  }

  returnToIndex() {
    this.props.router.push('/');
  }

  render() {
    const propEpisode = this.props.episodes[0];
    if (propEpisode && propEpisode.serie_id === parseInt(this.state.serieId)) {
      const currentEpisode = selectEpisode(
        this.props.episodes, this.state.currentEpisodeId
      );
      return (
        <div className='player-container'>
          <div
            className='player'
            id='player'>
            {this.renderPlayer()}
          </div>
          <div className='return-container'>
            <span
              className='return'
              onClick={this.returnToIndex}>
              {String.fromCharCode(11013)}
            </span>
            <h1 className='video-header'>
              {currentEpisode.title}
            </h1>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(Watch);
