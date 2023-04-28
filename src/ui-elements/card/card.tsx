import { Card as MUICard, CardContent, CardProps } from '@mui/material';
import { Text } from '@/ui-elements';

type Props = {
  newsTitle: React.ReactNode;
} & CardProps

export const Card = ({ children, newsTitle, onClick }: Props) => {
  return (
    <MUICard variant='outlined' onClick={onClick}>
      <CardContent>
        <Text variant='h5'>{newsTitle}</Text>
        <Text>
          {children}
        </Text>
      </CardContent>
    </MUICard>
  );
}
