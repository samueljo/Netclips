import React from 'react';
import SeriesIndexItem from '../series/series_index_item';
import { asArray } from '../../reducers/selectors';

const SeriesIndexRow = ({ seriesIndex, genre, requestSerie }) => {
  return (
    <div className='index-row'>
      <h1 className='index-row-header'>{genre}</h1>
      <div className='index-row-inner'>
        {
          seriesIndex.series.map((serie, idx) => {
            return (
              <SeriesIndexItem
                serie={serie}
                key={serie.id}
                requestSerie={requestSerie} />
            );
          })
        }
      </div>
    </div>
  );
};

export default SeriesIndexRow;
