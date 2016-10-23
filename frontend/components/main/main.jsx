import React from 'react';
import SeriesIndex from '../series/main/series_index';
import NavbarContainer from '../navbar/navbar_container';

const Main = (props) => {
  if (props.currentUser) {
    return (
      <div className='main-page'>
        <SeriesIndex
          seriesIndex={props.seriesIndex}
          focusedGenreId={props.focusedGenreId}
          requestSeries={props.requestSeries}
          removeSerie={props.removeSerie} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Main;
