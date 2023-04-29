import { getNewsListRoutine } from '@/components/news-list/actions/routines';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/components/news-list/state/state';
import { IStory } from '@/types/models';

const newsListReducer = createReducer<any>(initialState, {
  [getNewsListRoutine.REQUEST]: (state) => {
    state.isFetching = true;
    return state;
  },
  [getNewsListRoutine.SUCCESS]: (state, action: PayloadAction<{type: string, payload: { data: Array<IStory>}}>) => {
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
