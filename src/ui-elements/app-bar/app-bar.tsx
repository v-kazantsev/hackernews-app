import {
  AppBar as MUIAppBar,
  AppBarProps,
  Box,
  CssBaseline,
  Toolbar
} from '@mui/material';
import { Text } from '@/ui-elements';

type Props = {
  button?: React.ReactNode
} & AppBarProps

export const AppBar = ({ button, ...props}: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <MUIAppBar position="static" {...props}>
        <Toolbar>
          <Text variant="h6">
            HaCkErNews
          </Text>
          {button}
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
}