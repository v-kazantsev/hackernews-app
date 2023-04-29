import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <Button
    variant="outlined"
    startIcon={<HomeIcon />}
    onClick={() => navigate('/')}
    sx={{color: 'white', marginLeft: 'auto'}}
    >
      Home
    </Button>
  );
}
