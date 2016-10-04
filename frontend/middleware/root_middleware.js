import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
