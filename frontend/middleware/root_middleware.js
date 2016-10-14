import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import SeriesMiddleware from './series_middleware';
import EpisodesMiddleware from './episodes_middleware';
import SearchMiddleware from './search_middleware';

let RootMiddleware;

const middleWares = [
  SessionMiddleware,
  SeriesMiddleware,
  EpisodesMiddleware,
  SearchMiddleware
];

if (process.env.NODE_ENV === "production") {
  RootMiddleware = applyMiddleware(
    ...middleWares
  );
} else {
  RootMiddleware = applyMiddleware(
    ...middleWares,
    createLogger()
  );
}

export default RootMiddleware;
