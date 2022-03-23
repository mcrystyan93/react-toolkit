import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Logo } from '../logo';

import { items } from './items';
import { NavItem } from './nav-item';


interface Props {
  open: boolean;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

const Sidebar: React.FC<Props> = ({ open, onClose }) => {

  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'), { defaultMatches: true });

  const content = (
    <>
      <Box sx={{ p: 3, pt: 2, pb: 0 }}>
        <a href="/dashboard">
          <Logo sx={{ height: 42, width: 42 }}></Logo>
        </a>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <Divider sx={{borderColor: '#2D3748', mb: 3}}></Divider>
        <Box sx={{ flexGrow: 1}}>
          {items.map((item) => (<NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />))}
        </Box>
      </Box>
    </>
  );

  if (lgUp)
    return (
      <Drawer anchor="left" open variant="permanent" PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: 'common.white',
          width: 280
        }
      }}>
        {content}
      </Drawer>
    );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default Sidebar;