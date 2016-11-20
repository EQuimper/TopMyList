import { combineReducers } from 'redux';
import { TopListFeedReducer } from '../modules';

export default combineReducers({
  topList: TopListFeedReducer
});
