import React from 'react';
import SeriesIndexItem from '../series/series_index_item';
import SeriesShowContainer from '../series_show/series_show_container';
import { asArray } from '../../reducers/selectors';

class SeriesIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serieDisplayId: null };
    this.toggleSeriesShow = this.toggleSeriesShow.bind(this);
  }

  toggleSeriesShow(serieId) {
    if (this.state.serieDisplayId) {
      console.log('toggle off');
      this.props.removeSerie();
      this.setState({ serieDisplayId: null });
    } else {
      console.log('toggle on');
      this.props.requestSerie(serieId);
      this.setState({ serieDisplayId: serieId });
    }
  }

  renderSeriesShow() {
    if (this.state.serieDisplayId) {
      return (
        <div className='series-show'>
          <SeriesShowContainer />
          <button
            className='close-series-show'
            onClick={this.toggleSeriesShow}>{String.fromCharCode(215)}</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const serieDisplay = this.renderSeriesShow();
    return (
      <div className='index-row'>
        <h1 className='index-row-header'>{this.props.genre}</h1>
        <div className='index-row-inner'>
          {
            this.props.seriesIndex.series.map((serie, idx) => {
              return (
                <SeriesIndexItem
                  serie={serie}
                  key={serie.id}
                  toggleSeriesShow={this.toggleSeriesShow} />
              );
            })
          }
        </div>
        {serieDisplay}
      </div>
    );
  }
}

export default SeriesIndexRow;
