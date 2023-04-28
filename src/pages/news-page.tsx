import { useParams } from 'react-router-dom';
import { StoryComponent } from '@/components';

export const NewsPage = () => {
  const { id } = useParams();

  return <StoryComponent id={id} />;
}