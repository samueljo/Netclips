import React from 'react';
import { hashHistory } from 'react-router';

class SeriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleHover?
  }

  render() {
    const serie = this.props.serie;
    return (
      <div className='series-index-item'>
        <img className='series-index-thumb' src={serie.image_url} />
      </div>
    );
  }
}

export default SeriesIndexItem;
