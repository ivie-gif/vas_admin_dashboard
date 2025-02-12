// CollapsedSidebar.tsx
import { Drawer, Toolbar, List, ListItem, ListItemIcon } from '@mui/material';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';

interface SidebarProps {
  drawerWidth: {
    lg: number;
    md: number;
    sm: number;
  };
  open: boolean;
}

const CollapsedSidebar = ({ drawerWidth, open }: SidebarProps) => {
  return (
    <Drawer
      variant="persistent"
      open={true}
      sx={{
        flexShrink: 0,
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        py: 3.5,
        mx: 4,
        transition: 'width 0.3s ease',
        // Inner paper styles
        [`& .MuiDrawer-paper`]: {
          width: {
            xl: open ? drawerWidth.lg : '70px',
            lg: open ? drawerWidth.md : '70px',
            sm: open ? drawerWidth.sm : '70px',
          },
          transition: 'width 0.3s ease',
          overflowY: 'auto',
        },
      }}
    >
      <Toolbar
        sx={{
          minHeight: 100,
          cursor: 'pointer',
          backgroundColor: '#D36128',
          justifyContent: 'center',
        }}
      >
        {'BBC'}
      </Toolbar>
      <List>
        {menuLinks.map((menu) => (
          <ListItem key={menu.id} button>
            {menu.icon && (
              <ListItemIcon
                sx={{ minWidth: 'auto', justifyContent: 'center' }}
              >
                <menu.icon sx={{ width: 24, height: 24 }} />
              </ListItemIcon>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CollapsedSidebar;