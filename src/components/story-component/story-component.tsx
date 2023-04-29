import { Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Card } from '@/ui-elements';
import { newsSelector } from '@/components/news-list/selectors/news-selector';
import { CommentsComponent } from '@/components/comments/comments-component/comments-component';
import { formatUnixTime } from '@/helpers/format-unix-time';

export const StoryComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = useSelector(newsSelector(id));
  if (!story) navigate('/news');
  const { title, score, by, time, descendants, kids, url } = story!;

  return (
    <Card variant='outlined' cardTitle={(<Link href={`${url}`} underline='none'>{title}</Link>)}>
      {`${score} points by ${by} ${formatUnixTime(time)} | ${descendants} comments`}
      {kids && kids?.length > 0 && <CommentsComponent ids={kids} /> }
    </Card>
  );
}
