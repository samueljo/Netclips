import React from 'react';
import FilteredSeriesRowContainer from './filtered_series_row_container';

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

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
    this.props.requestSeries();
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
        <FilteredSeriesRowContainer
          key={idx}
          seriesPerRow={this.state.seriesPerRow}
          myList={this.props.myList}
          rowIdx={idx}
          showDetail={idx === this.props.focusedGenreId}
          seriesIndex={row} />
      );
    });

    return (
      <div className='series-index'>
        <h1 className='search-results-header'>
          Results for: {this.props.query}
        </h1>
        {indexRows}
      </div>
    );
  }
}

export default FilteredSeriesIndex;
