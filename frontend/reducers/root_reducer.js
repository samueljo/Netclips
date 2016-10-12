import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import SeriesReducer from './series_reducer';
import EpisodesReducer from './episodes_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  series: SeriesReducer,
  episodes: EpisodesReducer,
  search: SearchReducer
});

export default RootReducer;
