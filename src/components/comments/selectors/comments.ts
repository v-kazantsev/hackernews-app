import { createSelector } from 'reselect';
import { ICommentsState} from '@/types/redux';

export const commentsSelector = createSelector(
  (state: ICommentsState) => state.comments,
  ({ data }) => data
);