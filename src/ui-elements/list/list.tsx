import { useState } from 'react';
import { ListSubheader, List as MUIList, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { IStory } from '@/types/models';

type Props = {
  listTitle?: string;
  listItems?: Array<IStory>;
}

export const List = ({ listTitle, listItems = [] }: Props) => {
  const [open, setOpen] = useState<number | undefined>(undefined);

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
        const content = text ? <p dangerouslySetInnerHTML={{__html: text}} /> : ''
        return (
        <>
        <ListItemButton onClick={() => setOpen(id)}>
          <ListItemText primary={content} />
        </ListItemButton>
        {kids && kids.length > 0 && <Collapse in={open === id} timeout="auto" unmountOnExit>
          <MUIList component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </MUIList>
        </Collapse>}
      </>
      )})}
    </MUIList>
  );
}