import { useState, Fragment } from 'react';
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
import { IComment } from '@/types/models';
import { getCommentsRoutine } from '@/components/comments/actions/routines';

type Props = {
  listTitle?: string;
  listItems?: Array<IComment>;
}

export const List = ({ listTitle, listItems = [] }: Props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<number | undefined>(undefined);
  const fetchExtraComments = ({id, ids}: { id: number, ids: Array<number>}) => {
    dispatch(getCommentsRoutine({ parent: id, ids}));
    setOpen(id);
  }
  const InnerList = ({ text, kids, parentId, onClick}: any) => {
    const content = text ? <span dangerouslySetInnerHTML={{__html: text}} /> : ''
        const secondaryAction = kids && kids.length > 0
        ? (<IconButton aria-label="comment" onClick={onClick}>
            <CommentIcon />
          </IconButton>)
        : null
        return (
        <Fragment key={parentId}>
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
          {kids && kids.length > 0 && <Collapse in={open === parentId} timeout="auto" unmountOnExit>
            <MUIList component="div" disablePadding>
              {<ListItem>
                <ListItemText primary="Starred" />
              </ListItem>}
            </MUIList>
          </Collapse>}
        </Fragment>
      )
  }

  return (
    <MUIList
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {listTitle}
        </ListSubheader>
      }
    >
      {listItems.map(({ text, kids, id}) => {
        // if (!kids) return null;
        return <InnerList text={text} kids={kids} parentId={id} onClick={() => {kids ? fetchExtraComments({id, ids: kids}) : undefined}} />
      })}
    </MUIList>
  );
}