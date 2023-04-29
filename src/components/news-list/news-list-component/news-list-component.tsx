import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Skeleton, Box } from '@mui/material';
import { getNewsListRoutine } from '@/components/news-list/actions/routines';
import { newsListSelector} from '@/components/news-list/selectors/news-list-selector'
import { NewsCardComponent } from '@/components';
import { REFRESH_INTERVAL } from '@/config/constants';

export const NewsListComponent = () => {
  const dispatch = useDispatch();
  const { data: news, isFetching } = useSelector(newsListSelector);

  useEffect(() => {
    if (news.length === 0) dispatch(getNewsListRoutine())
  }, [dispatch, news]);

  useEffect(() => {
    const timer = setInterval(() => dispatch(getNewsListRoutine()), REFRESH_INTERVAL);
    return () => clearTimeout(timer);
  }, []);

  return isFetching
  ?  <Box sx={{width: 300 }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  : <Stack spacing={2}>{news.map(story => <NewsCardComponent news={story} key={story.id} />)}</Stack>
}
