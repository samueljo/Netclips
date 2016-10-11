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

  calculateSeriesPerPage() {
    let seriesPerPage;

    if ($(window).width() > 2000) {
      seriesPerPage = 6;
    } else {
      seriesPerPage = 5;
    }

    return seriesPerPage;
  }

  handleResize(e) {
    const seriesPerPage = this.calculateSeriesPerPage();

    if (seriesPerPage !== this.state.seriesPerPage) {
      this.setState({ seriesPerPage: seriesPerPage });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  closeSeriesShow() {
    console.log('toggle off');
    this.props.removeSerie();
    this.setState({ serieDisplayId: null });
  }

  openSeriesShow(serieId) {
    console.log('toggle on');
    this.props.requestSerie(serieId);
    this.setState({ serieDisplayId: serieId });
  }

  renderSeriesShow() {
    if (this.state.serieDisplayId) {
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

  renderIndexRows() {
    const seriesPerPage = this.calculateSeriesPerPage();
    debugger
    const seriesIndexItems = this.props.seriesIndex.map((serie) => {
      return (
        <h1 key={serie.id}>serie.title</h1>
        // <SeriesIndexItem
        //   selected={selected}
        //   serie={serie}
        //   key={serie.id}
        //   openSeriesShow={this.openSeriesShow} />
      );
    });

    let seriesDup = seriesIndexItems.slice();
    const indexRows = [];
    let i = 0;

    while (seriesDup.length > 0) {
      indexRows.push(
        <li key={indexRows.length + 1} className='series-page'>
          {seriesDup.splice(0, seriesPerPage)}
        </li>
      );
    }

    return indexRows;
  }


  render() {
    const serieDisplay = this.renderSeriesShow();
    const indexRows = this.renderIndexRows();

    console.log(this.state);

    return (
      <div>
        <div>
          <ul>
            {indexRows}
          </ul>
        </div>
        {serieDisplay}
      </div>
    );
  }
}

export default FilteredSeriesRow;
