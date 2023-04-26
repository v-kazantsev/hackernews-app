import { call, put, takeLatest } from 'redux-saga/effects';
import { NewsListAPI } from '@/api/news-list/news-list-api';
import { getNewsListRoutine } from '@/components/news-list/actions/get-news-list-routine';

function* getNewsListWorker() {
  const { request, success, failure, fulfill } = getNewsListRoutine;

  try {
    yield put(request());

    const { data } = yield call(NewsListAPI.getNewsList);

    yield put(success(data.data));
  } catch (error) {
    console.error(error);

    yield put(failure(error));
  } finally {
    yield put(fulfill());
  }
}

export function* getNewsListWatcher() {
  yield takeLatest(getNewsListRoutine.trigger, getNewsListWorker);
}
