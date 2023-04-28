import { all } from '@redux-saga/core/effects'
import { getNewsListWatcher } from '@/components/news-list/sagas/get-news-list';
import { getItemWatcher } from '@/components/news-list/sagas/get-item';
import { getCommentsWatcher } from '@/components/comments/sagas/get-comments'

function* rootSaga() {
  yield all([
    getNewsListWatcher(),
    getItemWatcher(),
    getCommentsWatcher()
  ])
}

export default rootSaga;
