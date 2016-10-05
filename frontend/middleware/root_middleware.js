import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import SeriesMiddleware from './series_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SeriesMiddleware,
  createLogger()
);

export default RootMiddleware;
