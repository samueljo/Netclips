import React from 'react';
import SeriesIndex from './series_index';
import NavbarContainer from '../navbar/navbar_container';

const Main = ({ currentUser, seriesIndex, requestSeries, requestSerie }) => {
  if (currentUser) {
    return (
      <div className='main-page'>
        <NavbarContainer />
        <SeriesIndex
          seriesIndex={seriesIndex}
          requestSeries={requestSeries}
          requestSerie={requestSerie} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Main;
