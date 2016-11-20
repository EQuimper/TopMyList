import { FETCH_LIST } from './actions';

const INITIAL_STATE = {
  isFetched: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_LIST}_PENDING`:
      return {};
    case `${FETCH_LIST}_FULFILLED`:
      return {
        error: null,
        data: action.payload,
        isFetched: true
      };
    case `${FETCH_LIST}_REJECTED`:
      return {
        error: action.payload,
        data: null,
        isFetched: true
      };
    default:
      return state;
  }
};
