import React from 'react';
import SeriesIndexItemContainer from '../series_index_item_container';
import SeriesShowContainer from '../../series_show/series_show_container';
import { withRouter } from 'react-router';

class SeriesIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shiftLeft: false,
      serieDisplayId: null,
      activePage: 0,
      previousPage: null,
      seriesPerPage: this.calculateSeriesPerPage()
    };
    this.openSeriesShow = this.openSeriesShow.bind(this);
    this.closeSeriesShow = this.closeSeriesShow.bind(this);
    this.slideTo = this.slideTo.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.toggleShiftLeft = this.toggleShiftLeft.bind(this);
  }

  calculateSeriesPerPage() {
    return ($(window).width() > 2000) ? 6 : 5;
  }

  closeSeriesShow() {
    this.props.removeSerie();
    this.setState({ serieDisplayId: null });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  createSeriesIndexItems() {
    return this.props.seriesIndex.series.map((serie, idx) => {
      const seriesPerPage = this.calculateSeriesPerPage();
      let hoverCb;
      if ((idx + 1) % seriesPerPage === 0) {
        hoverCb = this.toggleShiftLeft;
      } else {
        hoverCb = () => {};
      }
      return (
        <SeriesIndexItemContainer
          key={serie.id}
          serie={serie}
          hoverCb={hoverCb}
          myList={this.props.myList.series}
          openSeriesShow={this.openSeriesShow} />
      );
    });
  }

  handleResize(e) {
    const seriesPerPage = this.calculateSeriesPerPage();

    if (seriesPerPage !== this.state.seriesPerPage) {
      this.setState({ seriesPerPage: seriesPerPage });
    }
  }

  handleTitleClick(e) {
    const query = { query: `${e.target.value}` };

    this.props.requestSearchResults(query, () => {
      this.props.router.push({
        pathname: 'search',
        query: query
      });
    });
  }

  openSeriesShow(serieId) {
    this.props.requestSerie(serieId, this.props.seriesIndex.genreId);
    this.setState({ serieDisplayId: serieId });
  }

  renderIndexRow() {
    const seriesPerPage = this.calculateSeriesPerPage();

    let seriesDup = this.createSeriesIndexItems();
    const indexRow = [];
    let i = 0;

    while (seriesDup.length > 0) {
      let className;
      const toggleLeftClass = (this.state.shiftLeft) ? 'leftShift' : '';
      if (i === this.state.activePage) {
        className = `series-page active ${toggleLeftClass}`;
      } else if (i === this.state.previousPage) {
        className = 'series-page previous';
      } else {
        className = 'series-page';
      }

      indexRow.push(
        <li key={i} className={className}>
          {seriesDup.splice(0, seriesPerPage)}
        </li>
      );
      i++;
    }

    return indexRow;
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

  slideTo(dir, numPages) {
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

  toggleShiftLeft() {
    this.setState({ shiftLeft: !this.state.shiftLeft });
  }

  render() {
    const serieDisplay = this.renderSeriesShow();
    const indexRow = this.renderIndexRow();

    return (
      <div className='index-row'>
        <button
          className='index-row-header'
          onClick={this.handleTitleClick}
          value={this.props.genre}>
          {this.props.genre}
        </button>
        <div className='index-row-inner'>
          <div
            className='car-button cb-left'
            onClick={ () => this.slideTo(-1, indexRow.length) }>
            {String.fromCharCode(9001)}
          </div>
          <div
            className='car-button cb-right'
            onClick={ () => this.slideTo(1, indexRow.length) }>
            {String.fromCharCode(9002)}
          </div>
          <ul className='carousel-row'>
            {indexRow}
          </ul>

        </div>
        {serieDisplay}
      </div>
    );
  }
}

export default withRouter(SeriesIndexRow);
