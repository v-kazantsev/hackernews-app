import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import moment from 'moment';
import { IStory } from '@/types/models';
import { Card } from '@/ui-elements';


type Props = {
  news: IStory
}

export const NewsCardComponent = ({ news: { id, title, score, time, by, descendants} }: Props) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/news/${id}`)
  }, [navigate, id]);

  return (
    <Card variant='outlined' onClick={handleClick} newsTitle={title}>
      {`${score} points by ${by} ${moment.unix(time).format('DD/MM/YYYY hh:mm')} | ${descendants} comments`}
    </Card>
  );
}
