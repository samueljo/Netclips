import React from 'react';
import SeriesIndexRow from './series_index_row';

class SeriesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderSeriesByGenre = this.renderSeriesByGenre.bind(this);
  }

  componentDidMount() {
    this.props.requestSeries();
  }

  renderSeriesByGenre(seriesIndex) {
    const seriesByGenre = Object.keys(seriesIndex).map((genre) => {
      if (seriesIndex[genre].series.length) {
        let seriesGenre = seriesIndex[genre];
        return (
          <SeriesIndexRow
            key={seriesGenre.genreId}
            requestSearchResults={this.props.requestSearchResults}
            genre={genre}
            showDetail={seriesGenre.genreId === this.props.focusedGenreId}
            seriesIndex={seriesGenre}
            removeSerie={this.props.removeSerie}
            requestSerie={this.props.requestSerie} />
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
