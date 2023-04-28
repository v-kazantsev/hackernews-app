import { all } from '@redux-saga/core/effects'
import { getNewsListWatcher } from '@/components/news-list/sagas/get-news-list';
import { getCommentsWatcher } from '@/components/comments/sagas/get-comments'

function* rootSaga() {
  yield all([
    getNewsListWatcher(),
    getCommentsWatcher()
  ])
}

export default rootSaga;
