import React from 'react';
import FilteredSeriesRow from '../series/filtered_series_row';
import NavbarContainer from '../navbar/navbar_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-page'>
        <NavbarContainer />
        <div className='series-index'>
          <FilteredSeriesRow
            seriesIndex={this.props.seriesIndex}
            requestSerie={this.props.requestSerie}
            removeSerie={this.props.removeSerie} />
        </div>
      </div>
    );
  }
}

export default SearchResults;
