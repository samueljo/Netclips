import React from 'react';
import SerieOverview from './serie_overview';
import EpisodesIndex from '../episodes/episodes_index';

class SeriesShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPanel: null };
    this.handleClick = this.handleClick.bind(this);
    this.renderNavButtons = this.renderNavButtons.bind(this);
  }

  componentDidMount() {
    this.props.requestEpisodes(this.props.serieDisplay.id);
    this.setState({ showPanel: 'Overview' });
  }

  handleClick(e) {
    this.setState({ showPanel: `${e.target.value}`});
  }

  renderNavButtons() {
    const navButtonLabels = ['Overview'];
    if (this.props.episodes.length > 1) {
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

    if (this.props.serieDisplay) {
      navButtons = this.renderNavButtons().map((button, idx) => {
        return (
          <li key={idx} className='nav-item'>{button}</li>
        );
      });
    } else {
      navButtons = <div></div>;
    }

    if (this.state.showPanel === 'Overview') {
      showPanel = <SerieOverview serieDisplay={this.props.serieDisplay}/>;
    } else if (this.state.showPanel === 'Episodes') {
      showPanel = <EpisodesIndex episodes={this.props.episodes} />;
    } else {
      showPanel = <div></div>;
    }

    return (
      <div>
        {showPanel}
        <div className='serie-title'>{this.props.serieDisplay.title}</div>
        <ul className='series-show-nav'>
          {navButtons}
        </ul>
      </div>
    );
  }
}

export default SeriesShow;
