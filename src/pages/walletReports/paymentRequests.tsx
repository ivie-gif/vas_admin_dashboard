import { Fragment } from 'react/jsx-runtime';
import DataTable from 'components/common/Datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const PaymentRequests = () => {
  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

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
          flex: 1,
          textAlign: { xs: 'left', md: 'left' },
          textTransform: 'capitalize',
        }}
      >
        {routeDisplayName}
      </Typography>
      <Box sx={{ py: 2 }}>
        <DataTable rows={rows} columns={columns} checkboxSelection={true} />
      </Box>
    </Fragment>
  );
};

export default PaymentRequests;
