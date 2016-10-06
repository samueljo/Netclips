import React from 'react';
import SeriesIndexItem from './series_index_item';
import { asArray } from '../../reducers/selectors';

const SeriesIndexRow = ({ series, genre }) => {
  return (
    <div className='index-row'>
      <h1 className='index-row-header'>{genre}</h1>
      <div className='index-row-inner'>
        {
          series.series.map((serie, idx) => {
            return (
              <SeriesIndexItem serie={serie} key={idx} />
            );
          })
        }
      </div>
    </div>
  );
};

export default SeriesIndexRow;
