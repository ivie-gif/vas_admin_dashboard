import { useState } from 'react';
import {
  Drawer,
  List,
  Toolbar,
  ListItemIcon,
  ListItem,
  ListItemText,
  Collapse,
  Link as MuiLink,
} from '@mui/material';
import Logo from 'components/common/Logo';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
import SimpleBar from 'simplebar-react';

interface SidebarProps {
  drawerWidth: {
    lg: number;
    md: number;
    sm: number;
  };
}

const Sidebar = ({ drawerWidth }: SidebarProps) => {
  const [expandedMenuId, setExpandedMenuId] = useState<number | null>(null);

  const handleMenuClick = (menuId: number) => {
    setExpandedMenuId(expandedMenuId === menuId ? null : menuId);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: {
            xs: drawerWidth.sm,
            lg: drawerWidth.md,
            xl: drawerWidth.lg,
          },
        },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        py: 3.5,
        overflow: 'hidden',
        width: {
          xs: drawerWidth.sm,
          lg: drawerWidth.md,
          xl: drawerWidth.lg,
        },
      }}
    >
      <Toolbar sx={{ minHeight: 100, cursor: 'pointer', backgroundColor: '#D36128' }}>
        <Logo />
      </Toolbar>

      <SimpleBar
        style={{ height: 'calc(100vh - 100px)', backgroundColor: '#001427', padding: '0px 8px' }}
      >
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {menuLinks.map((menu) => (
            <div key={menu.id}>
              <MenuListItem
                menuItem={menu}
                isExpanded={expandedMenuId === menu.id}
                onClick={() => menu.subMenu && handleMenuClick(menu.id)}
              />

              {menu.subMenu && (
                <Collapse in={expandedMenuId === menu.id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.subMenu.map((submenuItem) => (
                      <MuiLink href={submenuItem.link} key={submenuItem.id} underline="none">
                        <ListItem
                          sx={{
                            display: 'flex',
                            gap: 1,
                            py: 1,
                            pl: 4,
                            color: '#B1B1B1',
                            '&:hover, &:focus': {
                              backgroundColor: '#1677FF',
                              '& .MuiSvgIcon-root': {
                                color: '#B1B1B1',
                              },
                            },
                          }}
                        >
                          {submenuItem.icon && (
                            <ListItemIcon
                              sx={{
                                minWidth: 'auto',
                                color: '#B1B1B1',
                              }}
                            >
                              {<submenuItem.icon />}
                            </ListItemIcon>
                          )}
                          <ListItemText primary={submenuItem.title} />
                        </ListItem>
                      </MuiLink>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </SimpleBar>
    </Drawer>
  );
};

export default Sidebar;
