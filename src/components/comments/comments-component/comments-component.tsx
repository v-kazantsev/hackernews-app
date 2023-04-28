import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsRoutine } from '@/components/comments/actions/routines';
import { commentsSelector } from '@/components/comments/selectors/comments';
import { IStory } from '@/types/models';

type Props = {
  ids : Array<number>;
}

export const CommentsComponent = ({ ids }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsRoutine(ids))
  }, [ids, dispatch]);

  const comments: Array<IStory> = useSelector(commentsSelector);
  return (
    <>{(comments || []).map((comment) => <div dangerouslySetInnerHTML={{__html: comment.text!}} />)}</>
  )
}
