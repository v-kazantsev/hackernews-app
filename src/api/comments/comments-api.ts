import { apiInstance } from '@/api/api-instance';
import { ICommentsAPI } from '@/types/api.ts';

export const CommentsAPI: ICommentsAPI = {
  getComments: (id) => apiInstance().get(`item/${id}.json`)
};
