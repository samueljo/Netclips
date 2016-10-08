import React from 'react';
import EpisodesIndexItem from './episodes_index_item';

class EpisodesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: 0, previousPage: null };
    this.slideTo = this.slideTo.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  renderIndexRow() {
    let episodesPerPage;

    if ($(window).width() > 1850) {
      episodesPerPage = 5;
    } else {
      episodesPerPage = 4;
    }

    const episodesIndexItems = this.props.episodes.map((episode) => {
      return (
        <EpisodesIndexItem
          episode={episode}
          key={episode.id} />
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
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    const indexRow = this.renderIndexRow();

    console.log(this.state);

    return (
      <div className='index-row'>
        <h1 className='index-row-header'>{this.props.genre}</h1>
        <div className='index-row-inner'>
          <div
            className='car-button-left'
            onClick={ () => this.slideTo(-1, indexRow.length) }>
            {String.fromCharCode(8249)}
          </div>
          <ul className='carousel-row'>
            {indexRow}
          </ul>
          <div
            className='car-button-right'
            onClick={ () => this.slideTo(1, indexRow.length) }>
            {String.fromCharCode(8250)}
          </div>
        </div>
        {serieDisplay}
      </div>
    );
  }
}
// const EpisodesIndex= ({ episodes }) => {
//   const episodesRow = episodes.map((episode) => {
//     return (
//       <EpisodesIndexItem key={episode.id} episode={episode} />
//     );
//   });
//
//
//
//   return (
//     <div className='episodes-index'>{episodesRow}</div>
//   );
// };
//
// export default EpisodesIndex;

export default EpisodesIndex;
