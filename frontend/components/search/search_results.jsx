import React from 'react';
import FilteredSeriesIndex from '../series/filtered/filtered_series_index';
import NavbarContainer from '../navbar/navbar_container';

const SearchResults = (props) => {
  if (props.currentUser) {
    return (
      <div className='main-page'>
        <FilteredSeriesIndex
          seriesIndex={props.seriesIndex}
          myList={props.myList}
          query={props.location.query.query}
          focusedGenreId={props.focusedGenreId}
          requestSeries={props.requestSeries} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SearchResults;
