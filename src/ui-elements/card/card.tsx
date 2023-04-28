import { Card as MUICard, CardContent } from '@mui/material';
import { Text } from '@/ui-elements';

type Props = {
  title: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Card = ({ children, title, onClick }: Props) => {
  return (
    <MUICard variant='outlined' onClick={onClick}>
      <CardContent>
        <Text>{title}</Text>
        <Text>
          {children}
        </Text>
      </CardContent>
    </MUICard>
  );
}
