import { combineReducers } from 'redux';
import repositories from './repositories';
import organisations from './organisations';

const rootReducer = combineReducers({
  repositories,
  organisations,
});

export default rootReducer;
