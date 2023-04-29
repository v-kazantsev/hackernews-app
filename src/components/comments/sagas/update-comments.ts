import { put, takeLatest, all } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { CommentsAPI } from '@/api/comments/comments-api';
import { updateCommentsRoutine } from '@/components/comments/actions/routines';
import { IComment } from '@/types/models';

function* updateCommentsWorker(action: PayloadAction<{parent: number, ids: Array<number | string>}>) {
  const { request, success, failure, fulfill } = updateCommentsRoutine;
  const { parent, ids } = action.payload;

  try {
    yield put(request());
    
    const list: Array<{data: Array<IComment>}> = yield all(
      ids.map((id: string | number) => (CommentsAPI.getComments(id)))
    );
    const comments = list?.map(({ data }) => data);
      
      yield put(success({ parent, comments}));

  } catch (error) {
    console.error(error);
    yield put(failure(error));

  } finally {
    yield put(fulfill());
  }
}

export function* updateCommentsWatcher() {
  yield takeLatest(updateCommentsRoutine.trigger, updateCommentsWorker);
}