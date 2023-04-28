import { createSelector } from 'reselect';
import { INewsListState} from '@/types/redux';

export const commentsSelector = createSelector(
  (state: INewsListState) => state.comments,
  ({ data }) => data
);