import { combineReducers } from 'redux';

import userReducer from './userReducer';
import repoReducer from './repoReducers';

export default combineReducers({
  user: userReducer,
  repos: repoReducer
});
