import React from 'react';
import SeriesIndexItem from '../series/series_index_item';
import SeriesShowContainer from '../series_show/series_show_container';

class SeriesIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serieDisplayId: null };
    this.openSeriesShow = this.openSeriesShow.bind(this);
    this.closeSeriesShow = this.closeSeriesShow.bind(this);
  }

  closeSeriesShow() {
    console.log('toggle off');
    this.props.removeSerie();
    this.setState({ serieDisplayId: null });
  }

  openSeriesShow(serieId) {
    console.log('toggle on');
    this.props.requestSerie(serieId, this.props.seriesIndex.genreId);
    this.setState({ serieDisplayId: serieId });
  }

  renderSeriesShow() {
    if (this.props.showDetail) {
      return (
        <div className='series-show'>
          <SeriesShowContainer />
          <button
            className='close-series-show'
            onClick={this.closeSeriesShow}>{String.fromCharCode(215)}</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderIndexRow() {
    let seriesPerPage;

    if ($(window).width() > 1850) {
      seriesPerPage = 5;
    } else {
      seriesPerPage = 4;
    }

    const seriesIndexItems = this.props.seriesIndex.series.map((serie) => {
      return (
        <SeriesIndexItem
          serie={serie}
          key={serie.id}
          openSeriesShow={this.openSeriesShow} />
      );
    });

    let seriesDup = seriesIndexItems.slice();
    const indexRow = [];

    while (seriesDup.length > 0) {
      indexRow.push(
        <li key={indexRow.length + 1}>{seriesDup.splice(0, seriesPerPage)}</li>
      );
    }

    return indexRow;
  }

  render() {
    const serieDisplay = this.renderSeriesShow();
    const indexRow = this.renderIndexRow();

    return (
      <div className='index-row'>
        <h1 className='index-row-header'>{this.props.genre}</h1>
        <div className='index-row-inner'>
          <ul>
            {indexRow}
          </ul>
        </div>
        {serieDisplay}
      </div>
    );
  }

  //   return (
  //     <div className='index-row'>
  //       <h1 className='index-row-header'>{this.props.genre}</h1>
  //       <div className='index-row-right'></div>
  //       <div className='index-row-left'></div>
  //       <div className='index-row-inner'>
  //         {
  //           this.props.seriesIndex.series.map((serie, idx) => {
  //             return (
  //               <SeriesIndexItem
  //                 serie={serie}
  //                 key={serie.id}
  //                 openSeriesShow={this.openSeriesShow} />
  //             );
  //           })
  //         }
  //       </div>
  //       {serieDisplay}
  //     </div>
  //   );
  // }
}

export default SeriesIndexRow;
