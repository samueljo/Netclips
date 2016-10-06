import React from 'react';
import SeriesIndexItem from './series_index_item';
import { asArray } from '../../reducers/selectors';
import SeriesDetailContainer from '../series_detail/series_detail_container';

const SeriesIndexRow = ({ series, genre, requestSerie }) => {
  return (
    <div className='index-row'>
      <h1 className='index-row-header'>{genre}</h1>
      <div className='index-row-inner'>
        {
          series.series.map((serie, idx) => {
            // series.series === seriesByGenre: { series: [...] }
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
