import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNewsListRoutine } from "@/components/news-list/actions/get-news-list-routine";

export const NewsListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsListRoutine())
  }, [dispatch])

  return <div>News List</div>

}