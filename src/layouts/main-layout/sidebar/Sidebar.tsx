import React, { useState } from 'react';
import {
  Drawer,
  List,
  Toolbar,
  ListItemIcon,
  ListItem,
  ListItemText,
  Collapse,
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
        gap: 2,
        py: 3.5,
        overflow: 'hidden',
        width: {
          xs: drawerWidth.sm,
          lg: drawerWidth.md,
          xl: drawerWidth.lg,
        },
      }}
    >
      <Toolbar sx={{ gap: 1, minHeight: 100, cursor: 'pointer', backgroundColor: '#D36128' }}>
        <Logo />
      </Toolbar>

      <SimpleBar style={{ height: 'calc(100vh - 100px)', backgroundColor: '#001427' }}>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {menuLinks.map((menu) => (
            <div key={menu.id}>
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
                      <ListItem
                        key={submenuItem.id}
                        sx={{ display: 'flex', gap: 2, py: 2, color: '#B1B1B1' }}
                      >
                        {submenuItem.icon && (
                          <ListItemIcon sx={{ pl: 5 }}>{<submenuItem.icon />}</ListItemIcon>
                        )}
                        <ListItemText primary={submenuItem.title} />
                      </ListItem>
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
