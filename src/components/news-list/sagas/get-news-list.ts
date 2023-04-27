import { call, put, takeLatest, all } from 'redux-saga/effects';
import { NewsListAPI } from '@/api/news-list/news-list-api';
import { getNewsListRoutine } from '@/components/news-list/actions/get-news-list-routine';
import { IStory } from '@/types/models';

function* getNewsListWorker() {
  const { request, success, failure, fulfill } = getNewsListRoutine;

  try {
    yield put(request());

    const { data: newsIds } = yield call(NewsListAPI.getNewsList);

    const list: Array<{data: Array<IStory>}> = yield all(
      newsIds.slice(0, 10).map((id: string | number) => (NewsListAPI.getStory(id)))
    );
    const news = (list || []).map(({ data }) => data);

    yield put(success(news));
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
