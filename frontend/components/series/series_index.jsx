import React from 'react';
// import SeriesIndexRow from './series_index_row';
import SeriesIndexItem from './series_index_item';

class SeriesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSeries();
  }

  render() {
    return (
      <div>
        <h1 className='series-index-item'>All Series: </h1>
        {
          this.props.series.map((serie) => {
            return (
              <SeriesIndexItem serie={serie} key={serie.id} />
            );
          })
        }
      </div>
    );
  }
}

export default SeriesIndex;
