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
    const series = this.props.series;
    const seriesByGenre = Object.keys(series).map((genre, idx) => {
      return (
        <SeriesIndexRow key={idx} genre={genre} series={series[genre]} />
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
