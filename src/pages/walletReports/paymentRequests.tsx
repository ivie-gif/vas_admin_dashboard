// import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import DataTable from 'components/common/Datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
// import DataTable, { TableColumn } from 'react-data-table-component';
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const PaymentRequests = () => {
  const location = useLocation();

  // chnges to be made
  // const [loading] = useState(false);
  // const [items] = useState([]);
  // const [totalRows, setTotalRows] = useState(0);
  // const [perPage, setPerPage] = useState(10);
  // const [filteredItem, setFilteredItem] = useState();
  // const [filterDate, setFilterDate] = useState();
  // const [searchedItem, setSearchedItem] = useState();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  // const columns: GridColDef<(typeof rows)[number]>[] = [
  //   {
  //     field: 'transactionReference',
  //     headerName: 'Transaction Reference',
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: 'amount',
  //     headerName: 'Amount',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'paymentMethod',
  //     headerName: 'Payment Method',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'totalAmountPaid',
  //     headerName: 'Total Amount Paid',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'feesAdded',
  //     headerName: 'Fees Added',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'status',
  //     headerName: 'Status',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'createdAt',
  //     headerName: 'Created At',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  // ];

  // interface PaymentRequestRow {
  //   transactionReference: string;
  //   paymentReference: string;
  //   paymentMethod: string;
  //   status: string;
  //   amount: number;
  //   feesAdded: number;
  //   totalAmountPaid: number;
  //   createdAt: string;
  // }

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
      field: 'paymentReference',
      headerName: 'Pay Ref',
      width: 100,
      editable: true,
    },
    {
      field: 'paymentMethod',
      headerName: 'Payment Methd.',
      width: 160,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 100,
      editable: true,
    },
    {
      field: 'feesAdded',
      headerName: 'Fees Added',
      width: 120,
      editable: true,
    },
    {
      field: 'totalAmountPaid',
      headerName: 'Amt. Paid',
      width: 160,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      reference: '98692767792398462966',
      paymentReference: 'Jon',
      amount: 14,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 2,
      reference: '98692767792398462966',
      paymentReference: 'Cersei',
      amount: 31,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 3,
      reference: '98692767792398462966',
      paymentReference: 'Jaime',
      amount: 31,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 4,
      reference: '98692767792398462966',
      paymentReference: 'Arya',
      amount: 11,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 5,
      reference: '98692767792398462966',
      paymentReference: 'Daenerys',
      amount: null,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 6,
      reference: '98692767792398462966',
      paymentReference: null,
      amount: 150,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 7,
      reference: '98692767792398462966',
      paymentReference: 'Ferrara',
      amount: 44,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 8,
      reference: '98692767792398462966',
      paymentReference: 'Rossini',
      amount: 36,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 9,
      reference: '98692767792398462966',
      paymentReference: 'Harvey',
      amount: 65,
      paymentMethod: 'credit',
      status: 'credit',
      feesAdded: 31000,
      totalAmountPaid: 30000,
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
      <Box sx={{ py: 2, mt: -1 }}>
        <DataTable rows={rows} columns={columns} checkboxSelection={true} />
      </Box>
    </Fragment>
  );
};

export default PaymentRequests;
