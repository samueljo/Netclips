import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import SeriesMiddleware from './series_middleware';
import EpisodesMiddleware from './episodes_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SeriesMiddleware,
  EpisodesMiddleware,
  createLogger()
);

export default RootMiddleware;
