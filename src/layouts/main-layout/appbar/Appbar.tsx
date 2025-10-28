import { AppBar, Box, IconButton, Link, Stack, Toolbar } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import NotificationDropdown from 'layouts/main-layout/appbar/NotificationDropdown';
import ProfileDropdown from 'layouts/main-layout/appbar/ProfileDropdown';
import SearchInput from 'layouts/main-layout/appbar/SearchInput';
import { MouseEvent, useState } from 'react';

import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';

interface NavbarProps {
  onDrawerToggle: () => void;
}

const MainNavbar = ({ onDrawerToggle }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Toggle sidebar open/closed state
  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    onDrawerToggle();
  };

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'common.white', minHeight: 70 }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: { xs: 0, lg: 2 },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            fontSize: { sm: 'h2.fontSize', xl: 'h1.fontSize' },
            fontWeight: 600,
            color: '#D36128',
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
            textTransform: 'capitalize',
          }}
        >
          {sidebarOpen ? (
            <FormatIndentDecreaseIcon onClick={handleToggleSidebar} sx={{ cursor: 'pointer' }} />
          ) : (
            <FormatIndentIncreaseIcon onClick={handleToggleSidebar} sx={{ cursor: 'pointer' }} />
          )}
        </Box>

        <Stack direction="row" gap={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Link href="/" sx={{ display: 'flex', p: 0.5 }}>
            <Image src="/dashboard/broadbased.png" alt="Logo" sx={{ width: 40 }} />
          </Link>
          <IconButton onClick={onDrawerToggle} sx={{ display: { md: 'none' } }}>
            <IconifyIcon icon="mingcute:menu-line" color="#D36128" width={25} />
          </IconButton>
        </Stack>

        <Stack direction="row" sx={{ alignItems: 'center', gap: { xs: 2.5, xl: 3.75 } }}>
          <Stack direction="row" sx={{ gap: { xs: 2.5, xl: 3.75 } }}>
            {/* <SettingsDropdown /> */}
            <IconButton sx={{ bgcolor: 'background.paper' }} onClick={handleOpen}>
              <IconifyIcon
                color="#D36128"
                icon="lucide:bell-dot"
                sx={{
                  width: { xs: 18, md: 20, xl: 25 },
                  height: { xs: 18, md: 20, xl: 25 },
                }}
              />
            </IconButton>
            <NotificationDropdown open={anchorEl} onClose={handleClose} />
          </Stack>
          <ProfileDropdown />
        </Stack>
      </Toolbar>
      <Box sx={{ display: { xs: 'block', md: 'none' }, px: 3.15, mt: 2.5 }}>
        <SearchInput fullWidth={true} size="small" />
      </Box>
    </AppBar>
  );
};

export default MainNavbar;
