import moment from 'moment';
import { Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Card } from '@/ui-elements';
import { newsSelector } from '@/components/news-list/selectors/news-selector';
import { CommentsComponent } from '@/components/comments/comments-component/comments-component';


type Props = {
  id: string | undefined;
}

export const StoryComponent = ({ id }: Props) => {
  const navigate = useNavigate();
  const story = useSelector(newsSelector(id));
  if (!story) navigate('/news');
  const { title, score, by, time, descendants, kids, url } = story!;

  return (
    <Card variant='outlined' newsTitle={(<Link href={`${url}`} underline='none'>{title}</Link>)}>
      {`${score} points by ${by} ${moment.unix(time).format('DD/MM/YYYY hh:mm')} | ${descendants} comments`}
      {kids && kids?.length > 0 && <CommentsComponent ids={kids} /> }
    </Card>
  );
}
