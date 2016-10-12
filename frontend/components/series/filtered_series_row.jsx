import React from 'react';
import SeriesIndexItem from '../series/series_index_item';
import SeriesShowContainer from '../series_show/series_show_container';

class FilteredSeriesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serieDisplayId: null };
    this.openSeriesShow = this.openSeriesShow.bind(this);
    this.closeSeriesShow = this.closeSeriesShow.bind(this);
  }

  closeSeriesShow() {
    console.log('toggle off');
    this.props.removeSerie();
    this.setState({ serieDisplayId: null });
  }

  openSeriesShow(serieId) {
    console.log('toggle on');
    this.props.requestSerie(serieId, this.props.rowIdx);
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
   return this.props.seriesIndex.map((serie) => {
      return (
        <SeriesIndexItem
          serie={serie}
          key={serie.id}
          openSeriesShow={this.openSeriesShow} />
      );
    });
  }

  render() {
    const serieDisplay = this.renderSeriesShow();
    const indexRow = this.renderIndexRow();

    return (
      <div className='filtered-row'>
        <h1 className='search-results-header'>Search results:</h1>
        <ul className='filtered-row-inner'>
          {indexRow}
        </ul>
        {serieDisplay}
      </div>
    );
  }
}

export default FilteredSeriesRow;
