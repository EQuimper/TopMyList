import { combineReducers } from 'redux';
import { TopListFeedReducer, ListReducer } from '../modules';

export default combineReducers({
  topList: TopListFeedReducer,
  list: ListReducer
});
