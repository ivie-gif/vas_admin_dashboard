import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  Toolbar,
  ListItemIcon,
  ListItem,
  ListItemText,
  Collapse,
  Link,
} from '@mui/material';
import Logo from 'components/common/Logo';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
import SimpleBar from 'simplebar-react';
import { CustomExpandMoreIcon, CustomExpandLessIcon } from 'components/icons/menu-icons/ExpandIcon';

interface SidebarProps {
  drawerWidth: {
    lg: number;
    md: number;
    sm: number;
  };
}
const Sidebar = ({ drawerWidth }: SidebarProps) => {
  const [expandMoremenu, setExpandMoremenu] = useState<number | null>(null);

  const handleMoremenu = (menuid: number) => {
    setExpandMoremenu(expandMoremenu === menuid ? null : menuid);
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
        // gap: 2,
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
            <List key={menu.id}>
              <ListItem
                onClick={() => menu.subMenu && handleMoremenu(menu.id)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                }}
              >
                <MenuListItem menuItem={menu} />
                {/* <MenuListItem menuItem={menu} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  {menu.icon && <ListItemIcon>{<menu.icon />}</ListItemIcon>}
                  <ListItemText primary={menu.title} />
                </MenuListItem> */}
                {menu.subMenu && (
                  <ListItemIcon>
                    {expandMoremenu === menu.id ? (
                      <CustomExpandLessIcon />
                    ) : (
                      <CustomExpandMoreIcon />
                    )}
                  </ListItemIcon>
                )}
              </ListItem>

              {menu.subMenu && (
                <Collapse in={expandMoremenu === menu.id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menu.subMenu.map((submenuItem) => (
                      <Link href={submenuItem.link} key={submenuItem.id}>
                        <ListItem
                          key={submenuItem.id}
                          sx={{
                            display: 'flex',
                            gap: 1,
                            py: 1,
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
                                pl: 3,
                                color: '#B1B1B1',
                                '&:hover, &:focus': {
                                  color: '#B1B1B1',
                                  '& .MuiSvgIcon-root': {
                                    color: '#B1B1B1',
                                  },
                                },
                              }}
                            >
                              {<submenuItem.icon />}
                            </ListItemIcon>
                          )}
                          <ListItemText primary={submenuItem.title} />
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              )}
            </List>
          ))}
        </List>
      </SimpleBar>
    </Drawer>
  );
};

export default Sidebar;
