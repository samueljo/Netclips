import React from 'react';
import FilteredSeriesIndex from '../series/filtered_series_index';
import NavbarContainer from '../navbar/navbar_container';

const SearchResults = (props) => {
  if (props.currentUser) {
    return (
      <div className='main-page'>
        <NavbarContainer />
        <FilteredSeriesIndex
          seriesIndex={props.seriesIndex}
          myList={props.myList}
          addFavoriteSerie={props.addFavoriteSerie}
          removeFavoriteSerie={props.removeFavoriteSerie}
          focusedGenreId={props.focusedGenreId}
          requestSeries={props.requestSeries}
          requestSerie={props.requestSerie}
          removeSerie={props.removeSerie} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SearchResults;
