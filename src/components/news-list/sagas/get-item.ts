import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { NewsListAPI } from '@/api/news-list/news-list-api';
import { getItemRoutine } from '@/components/news-list/actions/routines';
import { IStory } from '@/types/models';

function* getItemWorker(action: PayloadAction<{id: string | number}>) {
  const { request, success, failure, fulfill } = getItemRoutine;
  const id = action.payload

  try {
    yield put(request());
    const { data  } = yield call(NewsListAPI.getStory, id);
    
    // yield put(success(news));

  } catch (error) {
    console.error(error);
    yield put(failure(error));
    
  } finally {
    yield put(fulfill());
  }
}

export function* getItemWatcher() {
  yield takeLatest(getItemRoutine.trigger, getItemWorker);
}
