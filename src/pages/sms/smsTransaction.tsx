import React, { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import DataTable from 'components/common/Datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useBreakpoints } from 'providers/useBreakpoints';

const SMSTransaction = () => {
  const location = useLocation();
  const { up } = useBreakpoints();
  const upSM = up('sm');
  const [selectedRows] = useState([]);

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'reference',
      headerName: 'Id',
      width: 200,
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
      width: 160,
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

      <Grid item xs={6} md={3} gap={2}>
        <Button
          variant="contained"
          type="submit"
          size={upSM ? 'medium' : 'medium'}
          sx={{
            marginRight: '7px',
            borderRadius: '7px',
            fontSize: '14px',
            color: selectedRows.length === 1 ? '#666666' : 'green',
            backgroundColor: selectedRows.length !== 1 ? '#cccccc' : '#1677FF',
            '&:hover': {
              backgroundColor: selectedRows.length !== 1 ? '#cccccc' : '#4096FF',
            },
            '&.Mui-disabled': {
              backgroundColor: '#cccccc',
              color: '#666666',
            },
          }}
          // onClick={handleModalOpen}
          disabled={selectedRows.length !== 1}
        >
          Approve / Disapprove Trans. sms
        </Button>
        <Button
          variant="contained"
          type="submit"
          size={upSM ? 'medium' : 'medium'}
          sx={{
            marginRight: '7px',
            borderRadius: '7px',
            fontSize: '14px',
            color: selectedRows.length === 1 ? '#666666' : 'green',
            backgroundColor: selectedRows.length !== 1 ? '#cccccc' : '#1677FF',
            '&:hover': {
              backgroundColor: selectedRows.length !== 1 ? '#cccccc' : '#4096FF',
            },
            '&.Mui-disabled': {
              backgroundColor: '#cccccc',
              color: '#666666',
            },
          }}
          // onClick={handleModalOpen}
          disabled={selectedRows.length !== 1}
        >
          Approve / Disapprove postpaid
        </Button>
      </Grid>

      <Box sx={{ py: 2, mt: -1 }}>
        <DataTable rows={rows} columns={columns} checkboxSelection={true} />
      </Box>
    </Fragment>
  );
};
export default SMSTransaction;
