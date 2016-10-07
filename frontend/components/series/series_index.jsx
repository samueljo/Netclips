import React from 'react';
import SeriesIndexRow from './series_index_row';

class SeriesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSeries();
  }

  render() {
    const seriesIndex = this.props.seriesIndex;
    const seriesByGenre = Object.keys(seriesIndex).map((genre) => {
      return (
        <SeriesIndexRow
          key={seriesIndex[genre].genreId}
          genre={genre}
          showDetail={seriesIndex[genre].genreId === this.props.focusedGenreId}
          seriesIndex={seriesIndex[genre]}
          removeSerie={this.props.removeSerie}
          requestSerie={this.props.requestSerie} />
      );
    });
    return (
      <div className='series-index'>
        {seriesByGenre}
      </div>
    );
  }
}

export default SeriesIndex;
