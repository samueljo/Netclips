import React from 'react';
import EpisodesIndexItem from './episodes_index_item';

class EpisodesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 0, previousPage: null };
    this.slideTo = this.slideTo.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  calculateEpisodesPerPage() {
    let episodesPerPage;

    if ($(window).width() > 1750) {
      episodesPerPage = 4;
    } else {
      episodesPerPage = 3;
    }

    return episodesPerPage;
  }

  renderIndexRow() {
    const episodesPerPage = this.calculateEpisodesPerPage();
    const displayEpisodes = this.props.displayEpisodes;
    const episodesIndexItems = displayEpisodes.map((episode, idx) => {
      return (
        <EpisodesIndexItem
          episode={episode}
          key={episode.id}
          requestEpisode={this.props.requestEpisode} />
      );
    });

    let episodesDup = episodesIndexItems.slice();
    const indexRow = [];
    let i = 0;

    while (episodesDup.length > 0) {
      if (i === this.state.activePage) {
        indexRow.push(
          <li key={indexRow.length + 1} className='episodes-page active'>
            {episodesDup.splice(0, episodesPerPage)}
          </li>
        );
      } else if (i === this.state.previousPage) {
        indexRow.push(
          <li key={indexRow.length + 1} className='episodes-page previous'>
            {episodesDup.splice(0, episodesPerPage)}
          </li>
        );
      } else {
        indexRow.push(
          <li key={indexRow.length + 1} className='episodes-page'>
            {episodesDup.splice(0, episodesPerPage)}
          </li>
        );
      }
      i++;
    }

    return indexRow;
  }

  slideTo(dir, numPages) {
    console.log('sliding');

    let newActivePage;
    if (this.state.activePage + dir === -1) {
      newActivePage = numPages - 1;
    } else if (this.state.activePage + dir > numPages - 1) {
      newActivePage = 0;
    } else {
      newActivePage = this.state.activePage + dir;
    }

    this.setState({
      activePage: newActivePage,
      previousPage: this.state.activePage
    });
  }

  handleResize(e) {
    const episodesPerPage = this.calculateEpisodesPerPage();

    if (episodesPerPage !== this.state.episodesPerPage) {
      this.setState({episodesPerPage: episodesPerPage});
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    const indexRow = this.renderIndexRow();

    return (
      <div className='episode-index-row'>
        <div className='index-row-inner'>
          <button
            className='episode-button-left'
            onClick={ () => this.slideTo(-1, indexRow.length) }>
            {String.fromCharCode(9001)}
          </button>
          <button
            className='episode-button-right'
            onClick={ () => this.slideTo(1, indexRow.length) }>
            {String.fromCharCode(9002)}
          </button>
          <ul className='carousel-row'>
            {indexRow}
          </ul>
        </div>
      </div>
    );
  }
}

export default EpisodesIndex;
