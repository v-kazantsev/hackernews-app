import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {
  ListSubheader,
  List as MUIList,
  ListItemText,
  Collapse,
  IconButton,
  ListItem,
  ListItemIcon,
  Box
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
  const commentBlock = ({ text, kids, id, deleted, nested }: IComment) => {
    const content = text ? <span dangerouslySetInnerHTML={{__html: text}} /> : ''
    const secondaryAction = kids && kids.length > 0
    ? (<IconButton aria-label="comment" onClick={() => handleClick(id, kids)}>
        <CommentIcon />
        </IconButton>)
    : null
    return deleted ? null : (
      <Fragment key={id}>
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
          {kids && kids.length > 0 && <Collapse in timeout="auto" unmountOnExit>
          {nested && <Box sx={{marginLeft: '30px'}}>{nested?.map((item) => commentBlock(item))}</Box>}
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
  