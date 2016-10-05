import React from 'react';
import SeriesIndexItem from './series_index_item';

const SeriesIndex = ({ series }) => {
  return (
    <div>
      <h1>Series: </h1>
      {
        series.map( (serie) => (
          <SeriesIndexItem serie={serie} key={serie.id} />
        ))
      }
    </div>
  );
};

export default SeriesIndex;
