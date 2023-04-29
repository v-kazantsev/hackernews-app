import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppBar, HomeButton } from '@/ui-elements';
import { StoryComponent } from '@/components';

export const NewsPage = () => (
  <Container fixed>
    <Box sx={{flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', width: '900px'}}>
      <AppBar sx={{marginBottom: '2em', width: '900px'}} button={<HomeButton />} />
      <StoryComponent />
    </Box>
  </Container>
);