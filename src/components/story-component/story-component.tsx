import moment from 'moment';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Card } from '@/ui-elements';
import { newsSelector } from '@/components/news-list/selectors/news-selector';


type Props = {
  id: string | undefined;
}

export const StoryComponent = ({ id }: Props) => {
  const navigate = useNavigate();
  const story = useSelector(newsSelector(id));
  if (!story) navigate('/news');
  const { title, score, by, time, descendants } = story!;
  return (
    <Card variant='outlined' title={title}>
      {`${score} points by ${by} ${moment.unix(time).format('DD/MM/YYYY hh:mm')} | ${descendants} comments`}
    </Card>
  );
}
