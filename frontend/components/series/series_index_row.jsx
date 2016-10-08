import React from 'react';
import SeriesIndexItem from '../series/series_index_item';
import SeriesShowContainer from '../series_show/series_show_container';

class SeriesIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serieDisplayId: null, activePage: 0, previousPage: null };
    this.openSeriesShow = this.openSeriesShow.bind(this);
    this.closeSeriesShow = this.closeSeriesShow.bind(this);
    this.slideTo = this.slideTo.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  closeSeriesShow() {
    console.log('toggle off');
    this.props.removeSerie();
    this.setState({ serieDisplayId: null });
  }

  openSeriesShow(serieId) {
    console.log('toggle on');
    this.props.requestSerie(serieId, this.props.seriesIndex.genreId);
    this.setState({ serieDisplayId: serieId });
  }

  renderSeriesShow() {
    if (this.props.showDetail) {
      return (
        <div className='series-show'>
          <SeriesShowContainer />
          <button
            className='close-series-show'
            onClick={this.closeSeriesShow}>{String.fromCharCode(215)}</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderIndexRow() {
    let seriesPerPage;

    if ($(window).width() > 1850) {
      seriesPerPage = 5;
    } else {
      seriesPerPage = 4;
    }

    const seriesIndexItems = this.props.seriesIndex.series.map((serie) => {
      return (
        <SeriesIndexItem
          serie={serie}
          key={serie.id}
          openSeriesShow={this.openSeriesShow} />
      );
    });

    let seriesDup = seriesIndexItems.slice();
    const indexRow = [];
    let i = 0;

    while (seriesDup.length > 0) {
      if (i === this.state.activePage) {
        indexRow.push(
          <li key={indexRow.length + 1} className='series-page active'>
            {seriesDup.splice(0, seriesPerPage)}
          </li>
        );
      } else if (i === this.state.previousPage) {
        indexRow.push(
          <li key={indexRow.length + 1} className='series-page previous'>
            {seriesDup.splice(0, seriesPerPage)}
          </li>
        );
      } else {
        indexRow.push(
          <li key={indexRow.length + 1} className='series-page'>
            {seriesDup.splice(0, seriesPerPage)}
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
    const serieDisplay = this.renderSeriesShow();
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

export default SeriesIndexRow;
