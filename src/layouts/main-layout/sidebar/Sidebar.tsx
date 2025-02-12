// import { useState } from 'react';
// import {
//   Drawer,
//   List,
//   Toolbar,
//   ListItemIcon,
//   ListItem,
//   ListItemText,
//   Collapse,
//   Link as MuiLink,
// } from '@mui/material';
// import Logo from 'components/common/Logo';
// import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
// import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
// import SimpleBar from 'simplebar-react';

// interface SidebarProps {
//   drawerWidth: {
//     lg: number;
//     md: number;
//     sm: number;
//   };
//   open: boolean;
// }

// const Sidebar = ({ drawerWidth, open }: SidebarProps) => {
//   const [expandedMenuId, setExpandedMenuId] = useState<number | null>(null);

//   const handleMenuClick = (menuId: number) => {
//     setExpandedMenuId(expandedMenuId === menuId ? null : menuId);
//   };

//   return (
//     <Drawer
//       variant="persistent"
//       open={open}
//       sx={{
//         flexShrink: 0,
//         // This targets the inner paper of the Drawer:
//         [`& .MuiDrawer-paper`]: {
//           width: {
//             xl: open ? drawerWidth.lg : '30px',
//             lg: open ? drawerWidth.md : '30px',
//             sm: open ? drawerWidth.sm : '30px',
//           },
//           transition: 'width 0.3s ease',
//         },
//         display: { xs: 'none', md: 'flex' },
//         flexDirection: 'column',
//         py: 3.5,
//         overflow: 'hidden',
//         // Optionally, you can also set a width on the outer Drawer
//         width: {
//           xl: open ? drawerWidth.lg : '9%',
//           lg: open ? drawerWidth.md : '9%',
//           sm: open ? drawerWidth.sm : '30px',
//         },
//         transition: 'width 0.3s ease',
//       }}
//     >
//       <Toolbar
//         sx={{
//           minHeight: 100,
//           cursor: 'pointer',
//           backgroundColor: '#D36128',
//           justifyContent: 'center',
//         }}
//       >
//         {open ? <Logo /> : 'BBC'}
//       </Toolbar>

//       <SimpleBar
//         style={{
//           height: 'calc(100vh - 100px)',
//           backgroundColor: '#001427',
//           padding: '0px 8px',
//         }}
//       >
//         <List sx={{ display: 'flex', flexDirection: 'column' }}>
//           {menuLinks.map((menu) => (
//             <div key={menu.id}>
//               <MenuListItem
//                 menuItem={menu}
//                 isExpanded={expandedMenuId === menu.id}
//                 onClick={() => menu.subMenu && handleMenuClick(menu.id)}
//                 open={open}
//               />

//               {menu.subMenu && (
//                 <Collapse in={expandedMenuId === menu.id} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     {menu.subMenu.map((submenuItem) => (
//                       <MuiLink href={submenuItem.link} key={submenuItem.id} underline="none">
//                         <ListItem
//                           sx={{
//                             display: 'flex',
//                             gap: 1,
//                             py: 1,
//                             pl: open ? 4 : 1,
//                             color: '#B1B1B1',
//                             '&:hover, &:focus': {
//                               backgroundColor: '#1677FF',
//                               '& .MuiSvgIcon-root': {
//                                 color: '#B1B1B1',
//                               },
//                             },
//                           }}
//                         >
//                           {submenuItem.icon && (
//                             <ListItemIcon
//                               sx={{
//                                 minWidth: 'auto',
//                                 color: '#B1B1B1',
//                               }}
//                             >
//                               <submenuItem.icon />
//                             </ListItemIcon>
//                           )}
//                           {open && <ListItemText primary={submenuItem.title} />}
//                         </ListItem>
//                       </MuiLink>
//                     ))}
//                   </List>
//                 </Collapse>
//               )}
//             </div>
//           ))}
//         </List>
//       </SimpleBar>
//     </Drawer>
//   );
// };

// export default Sidebar;

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
  open: boolean;
}

const Sidebar = ({ drawerWidth, open }: SidebarProps) => {
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
        // Outer Drawer width (prevents the AppBar from going behind the sidebar)
        width: {
          xl: open ? drawerWidth.lg : '30px',
          lg: open ? drawerWidth.md : '30px',
          sm: open ? drawerWidth.sm : '30px',
        },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        py: 3.5,
        transition: 'width 0.3s ease',
        [`& .MuiDrawer-paper`]: {
          width: {
            xl: drawerWidth.lg,
            lg: drawerWidth.md,
            sm: drawerWidth.sm,
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
        <Logo />
      </Toolbar>

      <SimpleBar
        style={{
          height: 'calc(100vh - 100px)',
          backgroundColor: '#001427',
          padding: '0px 8px',
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
