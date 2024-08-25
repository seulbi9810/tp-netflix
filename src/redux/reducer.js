import { combineReducers } from 'redux';
import { SET_GENRE_FILTER } from './action';

const initialFilterState = "";

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case SET_GENRE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filter: filterReducer,
  // 다른 리듀서 추가 가능
});

export default rootReducer;