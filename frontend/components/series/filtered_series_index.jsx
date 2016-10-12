import React from 'react';
import FilteredSeriesRow from '../series/filtered_series_row';

class FilteredSeriesIndex extends React.Component {
  constructor(props) {
    super(props);
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

    let seriesDup = this.props.seriesIndex.slice();
    const indexRows = [];

    while (seriesDup.length > 0) {
      indexRows.push(seriesDup.splice(0, seriesPerRow));
    }

    return indexRows;
  }

  render() {
    const indexRows = this.renderIndexRows().map((row, idx) => {
      return (
        <FilteredSeriesRow
          key={idx}
          rowIdx={idx}
          showDetail={idx === this.props.focusedGenreId}
          seriesIndex={row}
          removeSerie={this.props.removeSerie}
          requestSerie={this.props.requestSerie} />
      );
    });

    return (
      <div className='series-index'>
        {indexRows}
      </div>
    );
  }
}

export default FilteredSeriesIndex;
