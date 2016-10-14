export const asArray = (obj) => Object.keys(obj).map((key) => obj[key]);

export const deleteItem = (obj, collection) => {
  const newCollection = [];
  collection.forEach((object) => {
    if (object.id !== obj.id) {
      newCollection.push(object);
    }
  });
  return newCollection;
};

export const selectEpisodeIds = (episodes) => {
  const episodeIds = [];
  episodes.forEach((episode) => {
    episodeIds.push(episode.id);
  });
  return episodeIds;
};

export const selectEpisode = (episodes, targetEpisodeId) => {
  for (let i = 0; i < episodes.length; i++) {
    if (episodes[i].id === parseInt(targetEpisodeId)) {
      return episodes[i];
    }
  }
};
