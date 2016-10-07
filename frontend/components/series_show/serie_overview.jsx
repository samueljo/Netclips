import React from 'react';

const SerieOverview = ({ serieDisplay }) => {
  // avg_rating
  // description
  // current-episode
  // title
  // image_url
  // year
  if (serieDisplay) {
    return (
      <div className='serie-overview'>
        <div className='serie-title'>{serieDisplay.title}</div>
        <div className='avg-rating'>Rating</div>
        <div className='serie-year'>{serieDisplay.year}</div>
        <div className='serie-description'>{serieDisplay.description}</div>
        <div className='serie-img-container'>
          <img className='serie-img' src={serieDisplay.image_url} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SerieOverview;
