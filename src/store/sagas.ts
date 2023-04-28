import { all } from '@redux-saga/core/effects'
import { getNewsListWatcher } from '@/components/news-list/sagas/get-news-list';
import { getItemWatcher } from '@/components/news-list/sagas/get-item';

function* rootSaga() {
  yield all([
    getNewsListWatcher(),
    getItemWatcher()
  ])
}

export default rootSaga;
