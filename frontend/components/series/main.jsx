import React from 'react';
import SeriesIndex from './series_index';
import NavbarContainer from '../navbar/navbar_container';

const Main = ({ currentUser, series, requestSeries }) => {
  if (currentUser) {
    return (
      <div className='main-page'>
        <NavbarContainer />
        <SeriesIndex series={series} requestSeries={requestSeries} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Main;
