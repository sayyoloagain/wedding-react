import { combineReducers } from 'redux';
import { dashboard } from './dashboard'
import { users } from './users'
import { site } from './site'
import { touring } from './touring'

const rootReducer = combineReducers({
  dashboard,
  users,
  site,
  touring
});

export default rootReducer;