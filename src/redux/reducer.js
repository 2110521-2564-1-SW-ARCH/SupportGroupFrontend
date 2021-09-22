import { combineReducers } from 'redux';
// import { languageReducer } from './language/reducer';
import { authReducer } from './auth/reducer';

const appReducer = combineReducers({
  //   language: languageReducer,
  auth: authReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
