import { useCallback } from 'react';
import { Button } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { useDispatch } from 'react-redux';
import { getNewsListRoutine } from '@/components/news-list/actions/routines';

export const RefreshButton = () => {
  const dispatch = useDispatch();
  const hanldeClick = useCallback(() => {
    dispatch(getNewsListRoutine());
  }, [dispatch]);

  return (
    <Button variant="outlined" startIcon={<CachedIcon />} onClick={hanldeClick} sx={{color: 'white', marginLeft: 'auto'}}>
      Refresh
    </Button>
)};