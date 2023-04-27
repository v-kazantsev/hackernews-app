import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { newsSelector } from '@/components/news-list/selectors/news-selector';

export const NewsPage = () => {
  const { id } = useParams();
  const news = useSelector(newsSelector(id));
  if (!news) return null;
  return <div>{news.title}</div>
}