import { Box, Stack } from '@mui/material';
import MainNavbar from 'layouts/main-layout/appbar/Appbar';
import Footer from 'layouts/main-layout/footer/Footer';
import MobileSidebar from 'layouts/main-layout/sidebar/MobileSidebar';
import Sidebar from 'layouts/main-layout/sidebar/Sidebar';
import CollapsedSidebar from 'layouts/main-layout/sidebar/CollapsedSidebar';
import { PropsWithChildren, useState } from 'react';

const drawerWidth = { lg: 250, md: 240, sm: 230 };

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
      setSidebarOpen((prev) => !prev);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {sidebarOpen ? (
        <Sidebar open={sidebarOpen} />
      ) : (
        <CollapsedSidebar drawerWidth={drawerWidth} open={sidebarOpen} />
      )}
      <MobileSidebar
        onDrawerClose={handleDrawerClose}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth.lg}
      />

      <Stack
        sx={{
          display: 'flex',
          flexGrow: 1,
          width: 100,
          justifyContent: 'space-between',
        }}
      >
        <MainNavbar onDrawerToggle={handleDrawerToggle} />
        <Stack
          sx={{
            backgroundColor: { xs: 'common.white', md: 'background.paper' },
            px: { xs: 3.15, md: 5, xl: 7 },
            flex: 1,
            gap: 1,
          }}
        >
          {children}
          <Footer />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MainLayout;
