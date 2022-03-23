import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/system';

const RootAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}))

interface Props {
  onSidebarOpen: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar: React.FC<Props> = ({ onSidebarOpen }) => {

  return (
    <>
      <RootAppBar sx={{
        left: {
          lg: 280
        },
        width: {
          lg: 'calc(100% - 280px)'
        }
      }}>

        <Toolbar disableGutters sx={{ minHeight: 64, left: 0, px: 2 }}>
          <IconButton onClick={onSidebarOpen} sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none'
            }
          }}>
            <MenuIcon fontSize="small" />
          </IconButton>
        </Toolbar>

      </RootAppBar>
    </>
  );

};

export default Navbar;