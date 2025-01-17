import { Link, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { menuLinks, MenuLinkType } from 'layouts/main-layout/sidebar/MenuLinks';
import { useLocation } from 'react-router-dom';
interface MenuListProps {
  menuItem: MenuLinkType;
  onDrawerClose?: () => void;
}
const MenuListItem = ({ menuItem, onDrawerClose }: MenuListProps) => {
  const { icon: Icon } = menuItem;
  const itemIcon = Icon ? (
    <Icon sx={{ width: { xs: 20, xl: 24 }, height: { xs: 20, xl: 24 } }} />
  ) : null;
  const location = useLocation();

  // check if list item is active
  const isActive =
    menuItem.title === menuLinks.find((item) => item.link === location.pathname)?.title;

  return (
    <ListItem
      key={menuItem.id}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bgcolor: isActive ? '#1677FF' : 'transparent',
          top: 0,
          bottom: 0,
          left: 0,
          width: 6,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          transition: 'background-color 0.5s ease',
        },
      }}
    >
      <Link
        href={menuItem.link}
        onClick={onDrawerClose}
        sx={{
          py: 1.5,
          px: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flex: 1,
          borderRadius: 2,
          color: isActive ? '#ffffff' : menuItem.available ? '#B1B1B1' : '#B1B1B1',
          transition: 'color 0.35s ease',
          '&:hover, &:focus': {
            backgroundColor: '#1677FF',
            boxShadow: 'shadows[10]',
            color: !menuItem.available ? 'action.disabled' : '#FFF2FF',
            '& .MuiSvgIcon-root': {
              color: !menuItem.available ? 'action.disabled' : '#FFF2FF',
            },
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 'auto',

            color: isActive ? '#ffffff' : menuItem.available ? 'neutral.dark' : 'action.disabled',
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: { xs: 'body1.fontSize', xl: 'h6.fontSize' },
                fontWeight: 500,
                textTransform: 'capitalize',
              }}
            >
              {menuItem.title}
            </Typography>
          }
        />
      </Link>
    </ListItem>
  );
};

export default MenuListItem;
