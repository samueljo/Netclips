export const CREATE_OR_UPDATE_CURRENT_WATCHING = "CREATE_CURRENT_WATCHING";
export const DESTROY_CURRENT_WATCHING = "DESTROY_CURRENT_WATCHING";

export const createOrUpdateCurrentWatching = (currentWatching) => ({
  type: CREATE_OR_UPDATE_CURRENT_WATCHING,
  currentWatching
});

export const destroyCurrentWatching = (serieId) => ({
  type: DESTROY_CURRENT_WATCHING,
  serieId
});
