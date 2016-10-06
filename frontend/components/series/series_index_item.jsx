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
      <div className='index-tile'>
        <div className='tile-media'>
          <img className='tile-img' src={serie.image_url} />
        </div>
        <div className='tile-details'>
          <div className='tile-title'>
            {serie.title}
          </div>
        </div>
      </div>
    );
  }
}

export default SeriesIndexItem;
