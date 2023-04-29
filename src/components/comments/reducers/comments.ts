import { getCommentsRoutine, updateCommentsRoutine } from '@/components/comments/actions/routines';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/components/comments/state/state';
import { IStory, IndexedStoriesArray } from '@/types/models';

const commentsReducer = createReducer<{data: IndexedStoriesArray, isFetching: boolean}>(initialState, {
  [getCommentsRoutine.REQUEST]:(state) => {
    state.isFetching = true;
    return state;
  },
  [getCommentsRoutine.SUCCESS]: (state, action: PayloadAction<{parent: number, comments: Array<IStory>}>) => {
    const { parent, comments } = action.payload;
    state.data = {[parent]: comments};
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
  [updateCommentsRoutine.SUCCESS]: (state, action: PayloadAction<{parent: number, comments: Array<IStory>}>) => {
    const { parent, comments } = action.payload;
    state.data = { ...state.data, [parent]: comments}
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
