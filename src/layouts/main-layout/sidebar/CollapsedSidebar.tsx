// CollapsedSidebar.tsx
import { Drawer, Toolbar, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import Tooltip from '@mui/material/Tooltip';

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
          backgroundColor: '#001427',
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
        <Typography variant="h2" sx={{ color: '#001427', fontWeight: 'bold' }}>
          {'BBC'}
        </Typography>
      </Toolbar>
      <List>
        {menuLinks.map((menu) => {
          // Compute tooltip text: if submenu exists, show main title and a list of submenu titles
          const tooltipTitle = menu.subMenu ? (
            <div>
              {menu.subMenu.map((sub) => (
                <div
                  key={sub.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '14px 12px',
                  }}
                >
                  {sub.icon && (
                    <span style={{ marginRight: 8, display: 'inline-flex' }}>
                      <sub.icon style={{ width: 15, height: 15 }} />
                    </span>
                  )}
                  <Typography variant="body3">{sub.title}</Typography>
                </div>
              ))}
            </div>
          ) : (
            <div
              key={menu.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 12px',
              }}
            >
              {menu.icon && <menu.icon style={{ width: 15, height: 15 }} />}
              <Typography variant="body3" sx={{ padding: '5px 12px' }}>
                {menu.title}
              </Typography>
            </div>
          );
          return (
            <Tooltip key={menu.id} title={tooltipTitle} placement="right">
              <ListItem sx={{ gap: 1, py: 1.5 }}>
                {menu.icon && (
                  <ListItemIcon
                    sx={{
                      minWidth: 'auto',
                      justifyContent: 'center',
                      color: '#B1B1B1',
                    }}
                  >
                    <menu.icon sx={{ width: 24, height: 24 }} />
                  </ListItemIcon>
                )}
              </ListItem>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
};

export default CollapsedSidebar;
