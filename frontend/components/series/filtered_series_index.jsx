import React from 'react';
import FilteredSeriesRow from '../series/filtered_series_row';

class FilteredSeriesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      seriesPerRow: this.calculateSeriesPerRow()
    };
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
          key={row[0].id}
          rowIdx={idx}
          showDetail={idx === this.props.focusedGenreId}
          seriesIndex={row}
          removeSerie={this.props.removeSerie}
          requestSerie={this.props.requestSerie} />
      );
    });

    return (
      <div className='series-index'>
        <h1 className='search-results-header'>Search results:</h1>
        {indexRows}
      </div>
    );
  }
}

export default FilteredSeriesIndex;
