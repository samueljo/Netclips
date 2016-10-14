import React from 'react';
import SeriesIndexRowContainer from './series_index_row_container';

class SeriesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderSeriesByGenre = this.renderSeriesByGenre.bind(this);
  }

  componentDidMount() {
    this.props.removeSerie();
    this.props.requestSeries();
  }

  renderSeriesByGenre(seriesIndex) {
    const seriesByGenre = Object.keys(seriesIndex).map((genre) => {
      if (seriesIndex[genre].series.length) {
        let seriesGenre = seriesIndex[genre];
        return (
          <SeriesIndexRowContainer
            key={seriesGenre.genreId}
            myList={seriesIndex['My List']}
            seriesIndex={seriesGenre}
            genre={genre}
            showDetail={seriesGenre.genreId === this.props.focusedGenreId} />
        );
      }
    });
    return (
      <div className='series-index'>
        {seriesByGenre}
      </div>
    );
  }

  render() {
    const seriesIndex = this.props.seriesIndex;
    return this.renderSeriesByGenre(seriesIndex);
  }
}

export default SeriesIndex;
