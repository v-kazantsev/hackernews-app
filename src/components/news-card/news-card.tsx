import { useNavigate } from 'react-router';
import { IStory } from '@/types/models';
import { Card, CardContent, Typography as Text } from '@mui/material';
import moment from 'moment';

type Props = {
  news: IStory
}

export const NewsCard = ({ news: { id, title, score, time, by, descendants} }: Props) => {
  const navigate = useNavigate();
  return (
    <Card variant='outlined' onClick={() => navigate(`/news/${id}`)}>
      <CardContent>
        <Text>{title}</Text>
        <Text>
          {`${score} points by ${by} ${moment.unix(time).format('DD/MM/YYYY hh:mm')} | ${descendants} comments`}
        </Text>
      </CardContent>
    </Card>
  );
}
