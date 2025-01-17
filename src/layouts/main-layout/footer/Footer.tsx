import { Box, Container, Grid, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box component="section" textAlign="center">
        <Container maxWidth="xl" disableGutters>
          <Box pb={2.5}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} lg="auto">
                <Stack
                  alignItems="center"
                  sx={{
                    flexDirection: {
                      xs: 'column',
                      lg: 'row',
                    },
                    gap: 1,
                  }}
                >
                  <Typography
                    fontWeight="regular"
                    sx={{ fontSize: { xs: 'caption.fontSize', md: 'body2.fontSize' } }}
                  >
                    &copy; {new Date().getFullYear()}, Broadbased Communications.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
