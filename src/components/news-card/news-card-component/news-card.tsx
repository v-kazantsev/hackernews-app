import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { IStory } from '@/types/models';
import { Card } from '@/ui-elements';
import { formatUnixTime } from '@/helpers/format-unix-time';


type Props = {
  news: IStory
}

export const NewsCardComponent = ({ news: { id, title, score, time, by, descendants} }: Props) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/news/${id}`)
  }, [navigate, id]);

  return (
    <Card variant='outlined' onClick={handleClick} cardTitle={title}>
      {`${score} points by ${by} ${formatUnixTime(time)} | ${descendants} comments`}
    </Card>
  );
}
