import { createSelector } from 'reselect';
import { INewsListState} from '@/types/redux';

export const newsListSelector = createSelector(
  (state: INewsListState) => state.newsList.data,
  (data) => data
);