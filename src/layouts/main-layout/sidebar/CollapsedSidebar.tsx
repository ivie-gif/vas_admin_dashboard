import { useState } from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemIcon, Typography, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import SimpleBar from 'simplebar-react';

interface SidebarProps {
  drawerWidth: {
    lg: number;
    md: number;
    sm: number;
  };
  open: boolean;
}

const CollapsedSidebar = ({ drawerWidth, open }: SidebarProps) => {
  const [, setOpenTooltip] = useState<number | null>(null);

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
        // height: '100vh',
        // scrollBehavior: 'auto',
        '& .MuiDrawer-paper': {
          width: {
            xl: open ? drawerWidth.lg : '70px',
            lg: open ? drawerWidth.md : '70px',
            sm: open ? drawerWidth.sm : '70px',
          },
          transition: 'width 0.3s ease',
          backgroundColor: '#001427',
          border: 'none',
          height: '100vh',
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
          BBC
        </Typography>
      </Toolbar>
      <SimpleBar style={{ height: 'calc(100vh - 100px)', padding: '8px 0' }}>
        <List>
          {menuLinks.map((menu) => {
            const tooltipTitle = menu.subMenu ? (
              <div>
                {menu.subMenu.map((sub) => (
                  <RouterLink
                    key={sub.id}
                    to={sub.link ?? '#'}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '14px 15px',
                        cursor: 'pointer',
                      }}
                    >
                      {sub.icon && (
                        <span style={{ marginRight: 8, display: 'inline-flex' }}>
                          <sub.icon style={{ width: 15, height: 15 }} />
                        </span>
                      )}
                      <Typography variant="body2">{sub.title}</Typography>
                    </div>
                  </RouterLink>
                ))}
              </div>
            ) : (
              <RouterLink
                to={menu.link ?? '#'}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 15px',
                    cursor: 'pointer',
                  }}
                >
                  {menu.icon && <menu.icon style={{ width: 15, height: 15 }} />}
                  <Typography variant="body2" sx={{ padding: '5px 12px' }}>
                    {menu.title}
                  </Typography>
                </div>
              </RouterLink>
            );

            return (
              <Tooltip
                key={menu.id}
                title={tooltipTitle}
                placement="right"
                onClose={() => setOpenTooltip(null)}
              >
                {/* Wrap in a span so the tooltip works properly with interactive content */}
                <span>
                  <ListItem
                    button
                    component={RouterLink}
                    to={menu.link ?? '#'}
                    sx={{ gap: 1, py: 1.5 }}
                  >
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
                </span>
              </Tooltip>
            );
          })}
        </List>
      </SimpleBar>
    </Drawer>
  );
};

export default CollapsedSidebar;
