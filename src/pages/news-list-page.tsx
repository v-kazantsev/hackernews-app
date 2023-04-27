import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { getNewsListRoutine } from "@/components/news-list/actions/get-news-list-routine";
import { INewsListState } from '@/types/redux';
import { NewsCard } from '@/components';

export const NewsListPage = () => {
  const dispatch = useDispatch();
  const { data: news, isFetching } = useSelector((state: INewsListState) => state.newsList);

  useEffect(() => {
    dispatch(getNewsListRoutine())
  }, [dispatch])

  return isFetching
  ? <div>Loading...</div>
  : <Stack spacing={2}>{news.map(story => <NewsCard news={story} />)}</Stack>
}
