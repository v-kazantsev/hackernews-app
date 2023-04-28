import { Card as MUICard, CardContent, CardProps } from '@mui/material';
import { Text } from '@/ui-elements';

type Props = {
  title: string;
  onClick?: () => void;
  children: React.ReactNode;
} & CardProps

export const Card = ({ children, title, onClick }: Props) => {
  return (
    <MUICard variant='outlined' onClick={onClick}>
      <CardContent>
        <Text variant='h5'>{title}</Text>
        <Text>
          {children}
        </Text>
      </CardContent>
    </MUICard>
  );
}
