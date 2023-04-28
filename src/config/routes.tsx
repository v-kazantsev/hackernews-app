import App from '@/App';
import { ErrorPage, NewsListPage, NewsPage} from '@/pages/';

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/news",
    element: <NewsListPage />
  },
  {
    path: "/news/:id",
    element: <NewsPage />
  }
]