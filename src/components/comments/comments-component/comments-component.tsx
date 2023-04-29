import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsRoutine } from '@/components/comments/actions/routines';
import { commentsSelector } from '@/components/comments/selectors/comments';
import { IndexedStoriesArray } from '@/types/models';
import { List } from '@/components/comments-list-component/comments-list-component';

type Props = {
  ids : Array<number>;
  parent: number;
}

export const CommentsComponent = ({ parent, ids }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsRoutine({parent, ids}))
  }, [ids, dispatch, parent]);
  const comments: IndexedStoriesArray = useSelector(commentsSelector);

  return <List parent={parent} listItems={comments} />;
}
