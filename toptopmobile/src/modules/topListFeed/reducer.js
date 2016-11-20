import { FETCH_TOPLIST_FEED } from './actions';

const INITIAL_STATE = {
  isFetched: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_TOPLIST_FEED}_PENDING`:
      return {};
    case `${FETCH_TOPLIST_FEED}_FULFILLED`:
      return {
        error: null,
        toplists: action.payload,
        isFetched: true
      };
    case `${FETCH_TOPLIST_FEED}_REJECTED`:
      return {
        error: action.payload,
        toplists: null,
        isFetched: true
      };
    default:
      return state;
  }
};
