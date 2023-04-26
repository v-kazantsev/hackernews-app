import { all } from '@redux-saga/core/effects'
import { getNewsListWatcher } from '@/components/news-list/sagas/get-news-list'

function* rootSaga() {
  yield all([
    getNewsListWatcher(),
  ])
}

export default rootSaga;
