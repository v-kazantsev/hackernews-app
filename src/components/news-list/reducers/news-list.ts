import { getNewsListRoutine } from '@/components/news-list/actions/get-news-list-routine';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/components/news-list/state';

const newsListReducer = createReducer<any>(initialState, {
  [getNewsListRoutine.REQUEST]: (state) => {
    state.isFetching = true;
    return state;
  },
  [getNewsListRoutine.SUCCESS]: (state, action: PayloadAction<any>) => {
    const data = action.payload;
    state.data = data;
    return state;
  },
  [getNewsListRoutine.FAILURE]: (state) => {
    return state;
  },
  [getNewsListRoutine.FULFILL]: (state) => {
    state.isFetching = false;
    return state;
  }
});

export default newsListReducer;
