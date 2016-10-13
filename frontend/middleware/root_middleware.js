import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import SeriesMiddleware from './series_middleware';
import EpisodesMiddleware from './episodes_middleware';
import SearchMiddleware from './search_middleware';

let RootMiddleware;

if (process.env.NODE_ENV === "production") {
  RootMiddleware = applyMiddleware(
    SessionMiddleware,
    SeriesMiddleware,
    EpisodesMiddleware,
    SearchMiddleware
  );
} else {
  RootMiddleware = applyMiddleware(
    SessionMiddleware,
    SeriesMiddleware,
    EpisodesMiddleware,
    SearchMiddleware,
    createLogger()
  );
}

export default RootMiddleware;
