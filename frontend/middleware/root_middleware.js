import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  createLogger()
);

export default RootMiddleware;
