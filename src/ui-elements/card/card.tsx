import { Card as MUICard, CardContent, CardProps } from '@mui/material';
import { Text } from '@/ui-elements';

type Props = {
  cardTitle: React.ReactNode;
} & CardProps

export const Card = ({ children, cardTitle, onClick }: Props) => {
  return (
    <MUICard variant='outlined' onClick={onClick}>
      <CardContent>
        <Text variant='h5'>{cardTitle}</Text>
        <Text>
          {children}
        </Text>
      </CardContent>
    </MUICard>
  );
}
