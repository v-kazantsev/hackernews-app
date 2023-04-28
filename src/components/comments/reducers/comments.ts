import { getCommentsRoutine } from '@/components/comments/actions/routines';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/components/comments/state/state';

const commentsReducer = createReducer<any>(initialState, {
  [getCommentsRoutine.REQUEST]: (state) => {
    state.isFetching = true;
    return state;
  },
  [getCommentsRoutine.SUCCESS]: (state, action: PayloadAction<any>) => {
    const data = action.payload;
    state.data = data;
    return state;
  },
  [getCommentsRoutine.FAILURE]: (state) => {
    return state;
  },
  [getCommentsRoutine.FULFILL]: (state) => {
    state.isFetching = false;
    return state;
  }
});

export default commentsReducer;
