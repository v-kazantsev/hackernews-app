import { AxiosResponse } from 'axios';
import { IStory } from './models';

export interface INewsListAPI {

  getNewsList(): Promise<AxiosResponse<Array<IStory>>>;
  getStory(id: number | string): Promise<AxiosResponse<IStory>>;
  
}

export interface ICommentsAPI {
  getComments(id: number | string): Promise<AxiosResponse<IStory>>;
}
