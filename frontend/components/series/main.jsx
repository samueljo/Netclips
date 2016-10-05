import React from 'react';
import SeriesIndex from './series_index';

const Main = ({ series, requestSeries }) => {
  return (
    <div className='main-page'>
      <SeriesIndex series={series} requestSeries={requestSeries} />
    </div>
  );
};

export default Main;
