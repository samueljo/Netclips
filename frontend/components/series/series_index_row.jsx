import React from 'react';
import SeriesIndexItem from './series_index_item';
import { asArray } from '../../reducers/selectors';

const SeriesIndexRow = ({ series, genre }) => {
  return (
    <div className='series-index-row'>
      <h1 className='index-row-header'>{genre}</h1>
      {
        asArray(series).map((serie, idx) => {
          return (
            <SeriesIndexItem serie={serie} key={idx} />
          );
        })
      }
    </div>
  );
};

export default SeriesIndexRow;
