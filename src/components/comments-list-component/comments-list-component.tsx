import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {
  ListSubheader,
  List as MUIList,
  ListItemText,
  Collapse,
  IconButton,
  ListItem,
  ListItemIcon
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import FolderIcon from '@mui/icons-material/Folder';
import { updateCommentsRoutine } from '@/components/comments/actions/routines';
import { IComment } from "@/types/models";


type Props = {
  listItems?: Array<IComment>;
}

export const List = ({ listItems}: Props) => {
  const handleClick = (parent: number, ids: number[] | undefined) => {
    dispatch(updateCommentsRoutine({ parent, ids }));
  }
  const dispatch = useDispatch();
  const commentBlock = (comment: IComment) => {
    const content = comment.text ? <span dangerouslySetInnerHTML={{__html: comment.text}} /> : ''
    const secondaryAction = comment.kids && comment.kids.length > 0
    ? (<IconButton aria-label="comment" onClick={() => handleClick(comment.id, comment.kids)}>
        <CommentIcon />
        </IconButton>)
    : null
    return comment.deleted ? null : (
      <Fragment key={comment.id}>
        <ListItem
          disableGutters
          secondaryAction={secondaryAction}
          alignItems="flex-start"
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={content} />
        </ListItem>
          {comment.kids && comment.kids.length > 0 && <Collapse in timeout="auto" unmountOnExit>
          {comment.nested && <div style={{marginLeft: '30px'}}>{comment.nested?.map((item) => commentBlock(item))}</div>}
        </Collapse>}
      </Fragment>
  )}
  return (
    <MUIList
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Comments
        </ListSubheader>
      }
    >
      {listItems?.map((listItem) => commentBlock(listItem))}
    </MUIList>
  );
}
  