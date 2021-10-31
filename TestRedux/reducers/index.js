'use strict';
import {combineReducers} from 'redux';
import count from './count';
import name from './name';

const appReducer = combineReducers({
  count,name
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};