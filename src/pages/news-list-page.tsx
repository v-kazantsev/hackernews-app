import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsListRoutine } from "@/components/news-list/actions/get-news-list-routine";
import { INewsListState } from '@/types/redux';

export const NewsListPage = () => {
  const dispatch = useDispatch();
  const { data: news, isFetching } = useSelector((state: INewsListState) => state.newsList);
  console.log(news)

  useEffect(() => {
    dispatch(getNewsListRoutine())
  }, [dispatch])

  return isFetching ? <div>Loading...</div> : <div>{news.map(story => story.title)}</div>

}