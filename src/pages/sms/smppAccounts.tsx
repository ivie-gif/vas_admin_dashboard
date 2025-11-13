import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import * as Yup from 'yup';
import { Formik } from 'formik';
import DataTable from 'components/common/Datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useBreakpoints } from 'providers/useBreakpoints';
import CustomModal from 'components/common/Modal';
import CustomInputField from 'components/common/Input';
import CustomButton from 'components/common/Button';

const SMPPAccounts = () => {
  const location = useLocation();
  const { up } = useBreakpoints();
  const upSM = up('sm');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  const SmppAccountsSchema = Yup.object().shape({
    userId: Yup.string().required('User ID is required'),
    accountUserId: Yup.string().required('Account User ID is required'),
    accountUserPassword: Yup.string().required('Account User Password is required'),
    smsRoute: Yup.string().required('SMS Route is required'),
  });

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'reference',
      headerName: 'Id',
      width: 250,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 100,
      editable: true,
    },
    {
      field: 'transactionType',
      headerName: 'Transaction Type',
      width: 160,
      editable: true,
    },

    {
      field: 'purpose',
      headerName: 'Purpose',
      width: 160,
      editable: true,
    },
    {
      field: 'narration',
      headerName: 'Narration',
      width: 100,
      editable: true,
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance Aft.',
      width: 100,
      editable: true,
    },
    {
      field: 'balanceBefore',
      headerName: 'Balance Bef.',
      width: 100,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      reference: '98692767792398462966',
      transactionType: 'Jon',
      amount: 14,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 2,
      reference: '98692767792398462966',
      transactionType: 'Cersei',
      amount: 31,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 3,
      reference: '98692767792398462966',
      transactionType: 'Jaime',
      amount: 31,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 4,
      reference: '98692767792398462966',
      transactionType: 'Arya',
      amount: 11,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 5,
      reference: '98692767792398462966',
      transactionType: 'Daenerys',
      amount: null,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 6,
      reference: '98692767792398462966',
      transactionType: null,
      amount: 150,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 7,
      reference: '98692767792398462966',
      transactionType: 'Ferrara',
      amount: 44,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 8,
      reference: '98692767792398462966',
      transactionType: 'Rossini',
      amount: 36,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 9,
      reference: '98692767792398462966',
      transactionType: 'Harvey',
      amount: 65,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <Typography
        sx={{
          display: { xs: 'block', md: 'block' },
          fontSize: { sm: 'h6.fontSize', xl: 'h6.fontSize' },
          fontWeight: 'bold',
          color: '#212529',
          pt: 5,
          pb: 1,
          flex: 1,
          textAlign: { xs: 'left', md: 'left' },
          textTransform: 'capitalize',
        }}
      >
        {routeDisplayName}
      </Typography>
      <Grid item xs={6} md={3}>
        <Button
          onClick={handleOpenModal}
          variant="contained"
          type="submit"
          size={upSM ? 'medium' : 'medium'}
          sx={{
            color: '#ffffff',
            borderRadius: '7px',
            backgroundColor: '#1677FF',
            '&: hover': {
              backgroundColor: '#4096FF',
            },
            fontSize: '14px',
          }}
        >
          Create New Account
        </Button>
      </Grid>

      <Formik
        initialValues={{
          userId: '',
          accountUserId: '',
          accountUserPassword: '',
          smsRoute: '',
        }}
        validationSchema={SmppAccountsSchema}
        onSubmit={() => console.log('clicked')}
      >
        <CustomModal open={isModalOpen} onClose={handleCloseModal} title="Create New SMPP Account ">
          <CustomInputField
            placeholder="User Id"
            variant="outlined"
            fullWidth
            type="number"
            sx={{ mb: 2 }}
          />
          <CustomInputField
            placeholder="Account User Id"
            variant="outlined"
            fullWidth
            type="text"
            sx={{ mb: 2 }}
          />
          <CustomInputField
            placeholder="Account User Password"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ mb: 2 }}
          />
          <CustomInputField
            placeholder="Sms Route"
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
      </Formik>

      <Box sx={{ py: 2, mt: -1}}>
        <DataTable rows={rows} columns={columns} checkboxSelection={true} />
      </Box>
    </Fragment>
  );
};
export default SMPPAccounts;
