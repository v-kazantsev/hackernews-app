import { apiInstance } from '@/api/api-instance';
import { INewsListAPI } from '@/types/api.ts';

export const NewsListAPI: INewsListAPI = {
  getNewsList: () => apiInstance().get('news'),
};
