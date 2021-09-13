import {combineReducers} from 'redux';
// import { languageReducer } from './language/reducer';

const appReducer = combineReducers({
  //   language: languageReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
