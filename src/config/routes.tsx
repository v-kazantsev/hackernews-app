import { ErrorPage, NewsListPage, NewsPage} from '@/pages/';

export const routes = [
  {
    path: "/",
    element: <NewsListPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/:id",
    element: <NewsPage />
  },
  {
    path: "/news",
    element: <ErrorPage />
  }
]