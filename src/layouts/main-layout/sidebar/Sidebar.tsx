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
  open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => {
  const [expandedMenuId, setExpandedMenuId] = useState<number | null>(null);

  const handleMenuClick = (menuId: number) => {
    setExpandedMenuId(expandedMenuId === menuId ? null : menuId);
  };

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        flexShrink: 0,
        minHeight: 100,
        width: '13.2%',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        py: 3.5,
        [`& .MuiDrawer-paper`]: {
          width: '13.2%',
          overflowY: 'hidden',
        },
      }}
    >
      <Toolbar
        sx={{
          minHeight: 65,
          width: '100%',
          cursor: 'pointer',
          backgroundColor: '#D36128',
          justifyContent: 'center',
        }}
      >
        <Logo />
      </Toolbar>

      <SimpleBar
        style={{
          height: 'calc(100vh - 65px)',
          backgroundColor: '#001427',
          padding: '0px 8px',
          width: '100%',
        }}
      >
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {menuLinks.map((menu) => (
            <div key={menu.id}>
              <MenuListItem
                menuItem={menu}
                isExpanded={expandedMenuId === menu.id}
                onClick={() => menu.subMenu && handleMenuClick(menu.id)}
                open={open}
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
                            fontSize: '14px',
                            pl: open ? 4 : 1,
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
                              <submenuItem.icon />
                            </ListItemIcon>
                          )}
                          {open && <ListItemText primary={submenuItem.title} />}
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
