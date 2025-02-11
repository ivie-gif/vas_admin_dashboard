import { useState } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import { useBreakpoints } from 'providers/useBreakpoints';
import CustomModal from 'components/common/Modal';
import CustomInputField from 'components/common/Input';
import CustomButton from 'components/common/Button';
import { useLocation } from 'react-router-dom';

const FundDeposit = () => {
  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen, 'modalcheck');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { up } = useBreakpoints();
  const upSM = up('sm');
  return (
    <Fragment>
      <Typography
        sx={{
          display: { xs: 'block', md: 'block' },
          fontSize: { sm: 'h6.fontSize', xl: 'h6.fontSize' },
          fontWeight: 600,
          color: '#D36128',
          pt: 5,
          pb: 2,
          flex: 1,
          textAlign: { xs: 'left', md: 'left' },
          textTransform: 'capitalize',
        }}
      >
        {routeDisplayName}
      </Typography>
      <Grid item xs={6} md={3}>
        <Button
          variant="contained"
          type="submit"
          size={upSM ? 'medium' : 'medium'}
          sx={{
            padding: '0px -50px',
            color: '#ffffff',
            backgroundColor: '#1677FF',
            '&: hover': {
              backgroundColor: '#4096FF',
            },
          }}
          onClick={handleModalOpen}
        >
          Deposit New Funds
        </Button>
      </Grid>

      <form>
        <CustomModal open={isModalOpen} onClose={handleCloseModal} title="Deposit Funds">
          <CustomInputField
            placeholder="Amount"
            variant="outlined"
            fullWidth
            type="number"
            sx={{ mb: 2 }}
          />
          <CustomInputField
            placeholder="User ID"
            variant="outlined"
            fullWidth
            type="text"
            sx={{ mb: 2 }}
          />
          <CustomInputField
            placeholder="Reference"
            variant="outlined"
            fullWidth
            type="text"
            sx={{ mb: 2 }}
          />
          <CustomButton
            variant="contained"
            position="center"
            sx={{
              color: (theme) => theme.palette.common.white,
              backgroundColor: (theme) => theme.palette.primary.light,
              pointer: 'cursor',
              mt: 3,
            }}
          >
            Submit
          </CustomButton>
        </CustomModal>
      </form>
    </Fragment>
  );
};

export default FundDeposit;
