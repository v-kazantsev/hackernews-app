import { all } from '@redux-saga/core/effects'
import { getNewsListWatcher } from '@/components/news-list/sagas/get-news-list';
import { getCommentsWatcher } from '@/components/comments/sagas/get-comments';
import { updateCommentsWatcher } from '@/components/comments/sagas/update-comments';

function* rootSaga() {
  yield all([
    getNewsListWatcher(),
    getCommentsWatcher(),
    updateCommentsWatcher()
  ])
}

export default rootSaga;
