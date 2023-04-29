import { Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Card } from '@/ui-elements';
import { newsSelector } from '@/components/news-list/selectors/news-selector';
import { CommentsComponent } from '@/components';
import { formatUnixTime } from '@/helpers/format-unix-time';

export const StoryComponent = () => {
  const { id } = useParams();
  const story = useSelector(newsSelector(id));
  if (!story) return <Navigate to='/' />;
  const { title, score, by, time, descendants, kids, url } = story;

  return (
    <Card variant='outlined' cardTitle={(<Link href={`${url}`} underline='none'>{title}</Link>)}>
      {`${score} points by ${by} ${formatUnixTime(time)} | ${descendants} comments`}
      {id && kids && kids?.length > 0 && <CommentsComponent ids={kids} /> }
    </Card>
  );
}
