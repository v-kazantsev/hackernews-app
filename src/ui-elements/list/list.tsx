import { useState, Fragment } from 'react';
import {
  ListSubheader,
  List as MUIList,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  ListItem,
  ListItemIcon
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import FolderIcon from '@mui/icons-material/Folder';
import { IComment } from '@/types/models';

type Props = {
  listTitle?: string;
  listItems?: Array<IComment>;
}

export const List = ({ listTitle, listItems = [] }: Props) => {
  const [open, setOpen] = useState<number | undefined>(undefined);
  console.log(listItems)
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
        const content = text ? <span dangerouslySetInnerHTML={{__html: text}} /> : ''
        const secondaryAction = kids && kids.length > 0
        ? (<IconButton aria-label="comment" onClick={() => setOpen(id)}>
            <CommentIcon />
            </IconButton>)
        : null
        return (
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
          {kids && kids.length > 0 && <Collapse in={open === id} timeout="auto" unmountOnExit>
            <MUIList component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </MUIList>
          </Collapse>}
        </Fragment>
      )})}
    </MUIList>
  );
}