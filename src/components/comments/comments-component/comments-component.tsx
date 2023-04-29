import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsRoutine } from '@/components/comments/actions/routines';
import { commentsSelector } from '@/components/comments/selectors/comments';
import { IComment } from '@/types/models';
import { List } from '@/ui-elements';

type Props = {
  ids : Array<number>;
}

export const CommentsComponent = ({ ids }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsRoutine(ids))
  }, [ids, dispatch]);

  const comments: Array<IComment> = useSelector(commentsSelector);
  return <List listTitle='Comments' listItems={comments} />;
}
