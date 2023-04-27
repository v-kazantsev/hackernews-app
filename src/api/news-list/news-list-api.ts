import { apiInstance } from '@/api/api-instance';
import { INewsListAPI } from '@/types/api.ts';

export const NewsListAPI: INewsListAPI = {
  getNewsList: () => apiInstance().get('newstories.json?print=pretty'),
  getStory: (id) => apiInstance().get(`item/${id}.json`)
};
