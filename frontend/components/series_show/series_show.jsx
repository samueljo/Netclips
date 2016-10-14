import React from 'react';
import SerieOverview from './serie_overview';
import SerieDetail from './serie_detail';
import EpisodesContainer from '../episodes/episodes_container';

class SeriesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: 'Overview',
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderNavButtons = this.renderNavButtons.bind(this);
  }

  isSeriesListed() {
    for (let i = 0; i < this.props.myList.length; i++) {
      if (this.props.myList[i].id === this.props.serieDisplay.id) {
        return true;
      }
    }
    return false;
  }

  componentDidMount() {
    this.previousSerie = this.props.serieDisplay.id;
    this.props.requestEpisodes(this.props.serieDisplay.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.serieDisplay.id !== nextProps.serieDisplay.id) {
      this.setState({ showPanel: 'Overview' });
    }
  }

  componentWillUpdate() {
    if (this.previousSerie !== this.props.serieDisplay.id) {
      this.previousSerie = this.props.serieDisplay.id;
      this.props.requestEpisodes(this.props.serieDisplay.id);
    }
  }

  handleClick(e) {
    this.setState({ showPanel: `${e.target.value}`});
  }

  renderNavButtons() {
    const navButtonLabels = ['Overview'];

    if (this.props.serieDisplay.episodes.length > 1) {
      navButtonLabels.push('Episodes');
    }
    navButtonLabels.push('Details');
    const navButtons = navButtonLabels.map((label) => {
      if (this.state.showPanel === label) {
        return (
          <button className='nav-button selected'
          onClick={this.handleClick} value={label}>{label}</button> );
      } else {
        return (
          <button className='nav-button'
          onClick={this.handleClick} value={label}>{label}</button>);
      }
    });

    return navButtons;
  }

  render() {
    let showPanel;
    let navButtons;
    const serieDisplay = this.props.serieDisplay;

    if (serieDisplay) {
      navButtons = this.renderNavButtons().map((button, idx) => {
        return (
          <li key={idx} className='nav-item'>{button}</li>
        );
      });
    } else {
      navButtons = <div></div>;
    }

    const isSeriesListed = this.isSeriesListed();

    if (this.state.showPanel === 'Overview') {
      showPanel = <SerieOverview
        listed={isSeriesListed}
        requestEpisodes={this.props.requestEpisodes}
        serieDisplay={serieDisplay}
        addFavoriteSerie={this.props.addFavoriteSerie}
        removeFavoriteSerie={this.props.removeFavoriteSerie}
        focusedGenreId={this.props.focusedGenreId}
        createReview={this.props.createReview}
        updateReview={this.props.updateReview}
        createOrUpdateCurrentWatching={this.props.createOrUpdateCurrentWatching} />;
    } else if (this.state.showPanel === 'Episodes') {
      showPanel = <EpisodesContainer />;
    } else if (this.state.showPanel === 'Details') {
      showPanel = <SerieDetail serieDisplay={serieDisplay} />;
    }

    return (
      <div>
        {showPanel}
        <div className='serie-title'>{serieDisplay.title}</div>
        <ul className='series-show-nav'>
          {navButtons}
        </ul>
      </div>
    );
  }
}

export default SeriesShow;
