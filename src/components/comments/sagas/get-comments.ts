import { put, takeLatest, all } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { CommentsAPI } from '@/api/comments/comments-api';
import { getCommentsRoutine } from '@/components/comments/actions/routines';
import { IStory } from '@/types/models';

function* getCommentsWorker(action: PayloadAction<Array<number | string>>) {
  const { request, success, failure, fulfill } = getCommentsRoutine;
  const ids = action.payload

  try {
    yield put(request());
    
    const list: Array<{data: Array<IStory>}> = yield all(
      ids.map((id: string | number) => (CommentsAPI.getComments(id)))
    );
    const comments = (list || []).map(({ data }) => data);
    yield put(success(comments));

  } catch (error) {
    console.error(error);
    yield put(failure(error));

  } finally {
    yield put(fulfill());
  }
}

export function* getCommentsWatcher() {
  yield takeLatest(getCommentsRoutine.trigger, getCommentsWorker);
}
