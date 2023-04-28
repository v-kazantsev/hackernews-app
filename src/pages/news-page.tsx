import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { newsSelector } from '@/components/news-list/selectors/news-selector';
import { getItemRoutine } from '@/components/news-list/actions/routines';

export const NewsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const news = useSelector(newsSelector(id));
  const [comment] = news?.kids || [];

  useEffect(() => {
    if (comment) dispatch(getItemRoutine(comment))
  }, [comment]);

  return <div>{(news?.kids || []).map((comment) => <div key={comment}>{comment}</div>)}</div>
}