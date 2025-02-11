import { Link, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { menuLinks, MenuLinkType } from 'layouts/main-layout/sidebar/MenuLinks';
import { CustomExpandMoreIcon, CustomExpandLessIcon } from 'components/icons/menu-icons/ExpandIcon';
import { useLocation } from 'react-router-dom';

interface MenuListProps {
  menuItem: MenuLinkType;
  onDrawerClose?: () => void;
  isExpanded?: boolean;
  onClick?: () => void;
}

const MenuListItem = ({ menuItem, onDrawerClose, isExpanded, onClick }: MenuListProps) => {
  const location = useLocation();

  const isActive =
    menuItem.title === menuLinks.find((item) => item.link === location.pathname)?.title;

  return (
    <ListItem disablePadding onClick={onClick}>
      <Link
        href={menuItem.link}
        onClick={onDrawerClose}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          py: 1,
          my: 0.5,
          px: 1,
          borderRadius: 2,
          color: isActive ? '#ffffff' : menuItem.available ? '#B1B1B1' : '#B1B1B1',
          textDecoration: 'none',
          transition: 'background-color 0.35s ease, color 0.35s ease',
          '&:hover, &:focus': {
            backgroundColor: '#1677FF',
            boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
            color: !menuItem.available ? 'action.disabled' : '#FFF2FF',
            '& .MuiSvgIcon-root': {
              color: !menuItem.available ? 'action.disabled' : '#FFF2FF',
            },
          },
        }}
      >
        {menuItem.icon && (
          <ListItemIcon
            sx={{
              minWidth: 'auto',
              mr: 1,
              color: isActive
                ? '#ffffff'
                : menuItem.available
                  ? 'action.disabled'
                  : 'action.disabled',
              transition: 'color 0.35s ease',
            }}
          >
            <menuItem.icon sx={{ width: 24, height: 24 }} />
          </ListItemIcon>
        )}

        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: { xs: 'body1.fontSize', xl: 'h3.fontSize' },
                fontWeight: 500,
                textTransform: 'capitalize',
              }}
            >
              {menuItem.title}
            </Typography>
          }
        />

        {menuItem.subMenu && menuItem.expandIcon && (
          <ListItemIcon
            sx={{
              minWidth: 'auto',
              ml: 'auto',
              transition: 'color 0.35s ease',
            }}
          >
            {isExpanded ? <CustomExpandLessIcon /> : <CustomExpandMoreIcon />}
          </ListItemIcon>
        )}
      </Link>
    </ListItem>
  );
};

export default MenuListItem;
