import { Box, Button, ListItem, styled, SxProps, Theme } from '@mui/material';
import { NavLink as ReactRouterNavLink, useMatch, useResolvedPath } from 'react-router-dom';


const NavLink = styled(ReactRouterNavLink)`
  display: flex;
  text-decoration: none;
  flex-grow: 1;
`;

interface Props {
  href: string;
  icon: JSX.Element;
  title: string;
}

export const NavItem: React.FC<Props> = ({ href, icon, title, ...others }) => {
  const resolvedPath = useResolvedPath(href);
  const match = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <ListItem disableGutters sx={{
      display: 'flex',
      mb: 0.5,
      py: 0,
      px: 2
    }}
      {...others}
    >
      <NavLink to={href}>
        <Button startIcon={icon} disableRipple sx={{
          backgroundColor: match && 'rgba(255,255,255, 0.08)',
          borderRadius: 1,
          color: match ? 'secondary.main' : 'neutral.300',
          fontWeight: match && 'fontWeightBold',
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: match ? 'secondary.main' : 'neutral.400'
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)'
          }
        }} >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </NavLink>
    </ListItem>
  );
}