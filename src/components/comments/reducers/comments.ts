import { getCommentsRoutine, updateCommentsRoutine } from '@/components/comments/actions/routines';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/components/comments/state/state';
import { IComment } from '@/types/models';

const commentsReducer = createReducer<any>(initialState, {
  [getCommentsRoutine.REQUEST]:(state) => {
    state.isFetching = true;
    return state;
  },
  [getCommentsRoutine.SUCCESS]: (state, action: PayloadAction<Array<IComment>>) => {
    const comments = action.payload;
    state.data = comments;
    return state;
  },
  [getCommentsRoutine.FAILURE]: (state) => {
    return state;
  },
  [getCommentsRoutine.FULFILL]: (state) => {
    state.isFetching = false;
    return state;
  },
  [updateCommentsRoutine.REQUEST]:(state) => {
    state.isFetching = true;
    return state;
  },
  [updateCommentsRoutine.SUCCESS]: (state, action: PayloadAction<{parent: number, comments: Array<IComment>}>) => {
    const { parent, comments } = action.payload;
    const index = state.data.findIndex((item: IComment) => item.id === parent);
    if (index !== -1) {
      const updatedComments = { ...state.data[index], nested: comments }
      state.data[index] = updatedComments;
    }
    
    return state;
  },
  [updateCommentsRoutine.FAILURE]: (state) => {
    return state;
  },
  [updateCommentsRoutine.FULFILL]: (state) => {
    state.isFetching = false;
    return state;
  }
});

export default commentsReducer;
