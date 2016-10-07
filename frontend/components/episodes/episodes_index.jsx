import React from 'react';
import EpisodesIndexItem from './episodes_index_item';

const EpisodesIndex = ({ episodes }) => {
  const episodesRow = episodes.map((episode) => {
    return (
      <EpisodesIndexItem key={episode.id} episode={episode} />
    );
  });

  return (
    <div className='episodes-index'>{episodesRow}</div>
  );
};

export default EpisodesIndex;
