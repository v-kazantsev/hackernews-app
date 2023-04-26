import { AxiosResponse } from 'axios';

export interface INewsListAPI {

  getNewsList(params: any): Promise<AxiosResponse<any>>;
  
}
