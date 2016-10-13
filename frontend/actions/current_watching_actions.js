export const CREATE_CURRENT_WATCHING = "CREATE_CURRENT_WATCHING";
export const UPDATE_CURRENT_WATCHING = "UPDATE_CURRENT_WATCHING";
export const DESTROY_CURRENT_WATCHING = "DESTROY_CURRENT_WATCHING";

export const createCurrentWatching = (currentWatching) => ({
  type: CREATE_CURRENT_WATCHING,
  currentWatching
});

export const updateCurrentWatching = (currentWatching) => ({
  type: UPDATE_CURRENT_WATCHING,
  currentWatching
});

export const destroyCurrentWatching = (serieId) => ({
  type: DESTROY_CURRENT_WATCHING,
  serieId
});
