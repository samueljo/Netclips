import React from 'react';
import SeriesIndexItemContainer from '../series_index_item_container';
import SeriesShowContainer from '../../series_show/series_show_container';

class FilteredSeriesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shiftLeft: false,
      serieDisplayId: null };
    this.openSeriesShow = this.openSeriesShow.bind(this);
    this.closeSeriesShow = this.closeSeriesShow.bind(this);
    this.toggleShiftLeft = this.toggleShiftLeft.bind(this);
  }

  closeSeriesShow() {
    this.props.removeSerie();
    this.setState({ serieDisplayId: null });
  }

  openSeriesShow(serieId) {
    this.props.requestSerie(serieId, this.props.rowIdx);
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
    const seriesIndex = this.props.seriesIndex;
    const myList = (this.props.myList) ? this.props.myList.series : [];

    return seriesIndex.map((serie, idx) => {
      let hoverCb;
      if (idx === this.props.seriesPerRow - 1) {
        hoverCb = this.toggleShiftLeft;
      } else {
        hoverCb = () => {};
      }
      return (
        <SeriesIndexItemContainer
          key={idx}
          serie={serie}
          hoverCb={hoverCb}
          myList={myList}
          openSeriesShow={this.openSeriesShow} />
      );
    });
  }

  toggleShiftLeft() {
    this.setState({ shiftLeft: !this.state.shiftLeft });
  }

  render() {
    const serieDisplay = this.renderSeriesShow();
    const indexRow = this.renderIndexRow();
    let innerRowClass;
    if (this.state.shiftLeft) {
      innerRowClass = 'filtered-row-inner leftShift';
    } else {
      innerRowClass = 'filtered-row-inner';
    }

    return (
      <div className='filtered-row'>
        <ul className={innerRowClass}>
          {indexRow}
        </ul>
        {serieDisplay}
      </div>
    );
  }
}

export default FilteredSeriesRow;
