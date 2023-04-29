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
  Box,
  Button
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CachedIcon from '@mui/icons-material/Cached';
import { updateCommentsRoutine } from '@/components/comments/actions/routines';
import { IStory, IndexedStoriesArray } from "@/types/models";


type Props = {
  listItems?: IndexedStoriesArray;
  parent: number;
}

export const List = ({ parent, listItems}: Props) => {
  const handleClick = (parent: number, ids: number[] | undefined) => {
    dispatch(updateCommentsRoutine({ parent, ids }));
  }
  const dispatch = useDispatch();
  const commentBlock = ({ text, kids, id, deleted }: IStory) => {
    const content = text ? <span dangerouslySetInnerHTML={{__html: text}} /> : ''
    const secondaryAction = kids && kids.length > 0
    ? (<IconButton aria-label="comment" onClick={() => handleClick(+id, kids)}>
        <AddCircleOutlineIcon />
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
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary={content} />
        </ListItem>
          {kids && kids.length > 0 && <Collapse in timeout="auto" unmountOnExit>
          {listItems?.[+id] && <Box sx={{marginLeft: '30px'}}>{listItems[+id]?.map((item) => commentBlock(item))}</Box>}
        </Collapse>}
      </Fragment>
  )}
  return (
    <MUIList
      sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Button variant="outlined" startIcon={<CachedIcon />}>
            Reload comments
          </Button>
        </ListSubheader>
      }
    >
      {listItems?.[parent]?.map((listItem) => commentBlock(listItem))}
    </MUIList>
  );
}
  