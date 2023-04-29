import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { NewsListComponent } from '@/components/news-list/news-list-component/news-list-component';
import { AppBar } from '@/ui-elements';
import { RefreshButton } from '@/ui-elements';


export const NewsListPage = () => (
  <Container fixed>
  <Box sx={{flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh', width: '900px'}}>
    <AppBar sx={{marginBottom: '2em', width: '900px'}} button={<RefreshButton />} />
    <NewsListComponent />
  </Box>
  </Container>
);
