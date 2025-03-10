import { useState } from 'react';
import { Grid, Button, Typography, Box } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import { useBreakpoints } from 'providers/useBreakpoints';
import CustomModal from 'components/common/Modal';
import CustomInputField from 'components/common/Input';
import CustomButton from 'components/common/Button';
import DataTable from 'components/common/Datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';

const FundDeposit = () => {
  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { up } = useBreakpoints();
  const upSM = up('sm');

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'transactionReference',
      headerName: 'Transaction Reference',
      width: 200,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 160,
      editable: true,
    },
    {
      field: 'paymentMethod',
      headerName: 'Payment Method',
      width: 160,
      editable: true,
    },
    {
      field: 'totalAmountPaid',
      headerName: 'Total Amount Paid',
      type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'feesAdded',
      headerName: 'Fees Added',
      type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      type: 'number',
      width: 160,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 2,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 3,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 4,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 5,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 6,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 7,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 8,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 9,
      transactionReference: '98692767792398462966',
      amount: 14,
      paymentMethod: 'Jon',
      totalAmountPaid: 'credit',
      feesAdded: 31000,
      status: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
  ];

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
      <Box sx={{ py: 2 }}>
        <DataTable rows={rows} columns={columns} checkboxSelection={true} />
      </Box>
    </Fragment>
  );
};

export default FundDeposit;
