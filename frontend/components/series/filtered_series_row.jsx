import React from 'react';
import SeriesIndexItem from '../series/series_index_item';
import SeriesShowContainer from '../series_show/series_show_container';

class FilteredSeriesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serieDisplayId: null };
    this.openSeriesShow = this.openSeriesShow.bind(this);
    this.closeSeriesShow = this.closeSeriesShow.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  closeSeriesShow() {
    console.log('toggle off');
    this.props.removeSerie();
    this.setState({ serieDisplayId: null });
  }

  openSeriesShow(serieId) {
    console.log('toggle on');
    this.props.requestSerie(serieId, 0);
    this.setState({ serieDisplayId: serieId });
  }

  renderSeriesShow() {
    if (this.props.serieDisplay) {
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

  calculateSeriesPerRow() {
    let seriesPerRow;

    if ($(window).width() > 2000) {
      seriesPerRow = 6;
    } else {
      seriesPerRow = 5;
    }

    return seriesPerRow;
  }

  renderIndexRows() {
    const seriesPerRow = this.calculateSeriesPerRow();

     const seriesIndexItems = this.props.seriesIndex.map((serie) => {
      return (
        <SeriesIndexItem
          serie={serie}
          key={serie.id}
          openSeriesShow={this.openSeriesShow} />
      );
    });

    let seriesDup = seriesIndexItems.slice();
    const indexRows = [];
    let i = 0;

    while (seriesDup.length > 0) {
      indexRows.push(
        <li className='filtered-row-inner' key={indexRows.length + 1}>
          {seriesDup.splice(0, seriesPerRow)}
        </li>
      );
    }

    return indexRows;
  }

  handleResize(e) {
    const seriesPerRow = this.calculateSeriesPerRow();

    if (seriesPerRow !== this.state.seriesPerRow) {
      this.setState({ seriesPerRow: seriesPerRow });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const serieDisplay = this.renderSeriesShow();

    const indexRows = this.renderIndexRows();
    return (
      <div className='filtered-row'>
        <h1 className='search-results-header'>Search results:</h1>
        <ul>
          {indexRows}
        </ul>
        {serieDisplay}
      </div>
    );
  }
}

export default FilteredSeriesRow;
