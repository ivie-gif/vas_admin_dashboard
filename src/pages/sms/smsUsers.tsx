import { Fragment } from 'react/jsx-runtime';
import DataTable from 'components/common/Datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const SMSUSers = () => {
  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'reference',
      headerName: 'Reference',
      width: 160,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 160,
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
      type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'narration',
      headerName: 'Narration',
      type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance After',
      type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'balanceBefore',
      headerName: 'Balance Before',
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
export default SMSUSers;
